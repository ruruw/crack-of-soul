/* ============================================================
   THE CRACK OF SOUL — sistem audio
   Seluruh musik dan efek suara dibangkitkan langsung oleh kode
   memakai Web Audio API. Tidak ada satu pun berkas audio.
   Ukuran tambahan pada APK: 0 KB. Bebas lisensi sepenuhnya.
   ============================================================ */

const Audio2 = (() => {
  let ctx = null, master, musicGain, sfxGain;
  let vol = { musik: 0.55, efek: 0.8, bisu: false };
  let current = null, timer = null, step = 0;

  function init() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 1; master.connect(ctx.destination);
    musicGain = ctx.createGain(); musicGain.gain.value = vol.musik; musicGain.connect(master);
    sfxGain = ctx.createGain(); sfxGain.gain.value = vol.efek; sfxGain.connect(master);
    return ctx;
  }
  function resume(){ if(ctx && ctx.state === 'suspended') ctx.resume(); }

  /* ---------- bahan dasar ---------- */
  function noiseBuffer(dur = 1) {
    const n = Math.floor(ctx.sampleRate * dur);
    const b = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  function env(node, t, a, d, peak, out) {
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak), t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
    node.connect(g); g.connect(out || sfxGain);
    return g;
  }
  function tone(freq, t, dur, type = 'sine', peak = 0.3, out, glide) {
    const o = ctx.createOscillator();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(20, glide), t + dur);
    env(o, t, Math.min(0.02, dur * 0.2), dur, peak, out);
    o.start(t); o.stop(t + dur + 0.05);
    return o;
  }
  function noise(t, dur, freq = 1200, q = 1, peak = 0.25, type = 'bandpass', out) {
    const s = ctx.createBufferSource(); s.buffer = noiseBuffer(Math.max(0.15, dur + 0.1));
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    s.connect(f);
    env(f, t, 0.005, dur, peak, out);
    s.start(t); s.stop(t + dur + 0.1);
    return f;
  }

  /* ---------- efek suara (sesuai daftar Sound Design) ---------- */
  const SFX = {
    klik:        () => { const t = ctx.currentTime; tone(880, t, 0.05, 'square', 0.12); },
    dialog:      () => { const t = ctx.currentTime; tone(420, t, 0.07, 'triangle', 0.10); },
    pilih:       () => { const t = ctx.currentTime; tone(560, t, 0.07, 'triangle', 0.16);
                         tone(840, t + 0.06, 0.10, 'triangle', 0.13); },
    naik:        () => { const t = ctx.currentTime; [523, 659, 784].forEach((f, i) =>
                         tone(f, t + i * 0.06, 0.16, 'sine', 0.20)); },
    turun:       () => { const t = ctx.currentTime; [523, 415, 330].forEach((f, i) =>
                         tone(f, t + i * 0.07, 0.20, 'sine', 0.20)); },
    pindah:      () => { const t = ctx.currentTime; noise(t, 0.28, 900, 0.7, 0.13, 'lowpass'); },
    bossMuncul:  () => { const t = ctx.currentTime;
                         tone(110, t, 1.6, 'sawtooth', 0.28, null, 55);
                         noise(t, 1.4, 300, 0.5, 0.18, 'lowpass');
                         tone(55, t + 0.1, 1.8, 'sine', 0.30); },
    bossKena:    () => { const t = ctx.currentTime;
                         noise(t, 0.22, 2200, 2, 0.26, 'bandpass');
                         tone(320, t, 0.18, 'square', 0.16, null, 90); },
    bossKalah:   () => { const t = ctx.currentTime;
                         noise(t, 1.2, 1400, 0.8, 0.22, 'lowpass');
                         [220, 165, 110].forEach((f, i) => tone(f, t + i * 0.14, 0.9, 'sine', 0.20)); },
    levelSelesai:() => { const t = ctx.currentTime; [523, 659, 784, 1047].forEach((f, i) =>
                         tone(f, t + i * 0.10, 0.42, 'triangle', 0.22)); },
    pencapaian:  () => { const t = ctx.currentTime; [784, 988, 1319].forEach((f, i) =>
                         tone(f, t + i * 0.07, 0.30, 'sine', 0.20)); },
    selesai:     () => { const t = ctx.currentTime; [392, 523, 659, 784].forEach((f, i) =>
                         tone(f, t + i * 0.16, 1.1, 'sine', 0.18)); },
    gameOver:    () => { const t = ctx.currentTime;
                         tone(196, t, 1.4, 'sine', 0.22, null, 98);
                         noise(t, 1.0, 400, 0.6, 0.10, 'lowpass'); },

    /* suara khusus boss */
    bisikan:     () => { const t = ctx.currentTime;
                         for (let i = 0; i < 5; i++) noise(t + i * 0.13, 0.22, 700 + Math.random() * 1400, 6, 0.07); },
    detakJantung:() => { const t = ctx.currentTime;
                         tone(58, t, 0.16, 'sine', 0.34, null, 40);
                         tone(52, t + 0.30, 0.20, 'sine', 0.26, null, 36); },
    langkahBerat:() => { const t = ctx.currentTime;
                         tone(70, t, 0.30, 'sine', 0.34, null, 35);
                         noise(t, 0.24, 220, 0.8, 0.18, 'lowpass'); },
    rantai:      () => { const t = ctx.currentTime;
                         for (let i = 0; i < 7; i++) noise(t + i * 0.045 + Math.random() * .02, 0.07,
                           2600 + Math.random() * 2200, 9, 0.11); },
    tanahRetak:  () => { const t = ctx.currentTime;
                         noise(t, 0.5, 260, 0.6, 0.24, 'lowpass');
                         for (let i = 0; i < 4; i++) noise(t + 0.05 + i * 0.07, 0.05, 3000, 8, 0.10); },
    notifikasi:  () => { const t = ctx.currentTime;
                         tone(1318, t, 0.09, 'sine', 0.16); tone(1760, t + 0.08, 0.12, 'sine', 0.14); },
    glitch:      () => { const t = ctx.currentTime;
                         for (let i = 0; i < 8; i++) noise(t + i * 0.035, 0.03,
                           600 + Math.random() * 4500, 12, 0.13, 'bandpass'); },
    ketikan:     () => { const t = ctx.currentTime;
                         for (let i = 0; i < 6; i++) noise(t + i * 0.055, 0.02, 2800, 5, 0.09); }
  };

  function play(name) {
    if (vol.bisu) return;
    if (!init()) return;
    resume();
    const f = SFX[name];
    if (f) try { f(); } catch (e) {}
  }

  /* ---------- musik latar ---------- */
  /* Tiap lagu dibangkitkan sebagai pola berulang, bukan berkas rekaman. */
  const SKALA = {
    minor:  [0, 2, 3, 5, 7, 8, 10],
    mayor:  [0, 2, 4, 5, 7, 9, 11]
  };
  const MUSIK = {
    menu:    { akar: 220, skala: 'minor', tempo: 1.30, pad: .16, arp: .050, bass: .10, drum: 0,   glitch: 0,   arpPola: [0, 4, 2, 6] },
    level1:  { akar: 262, skala: 'mayor', tempo: 0.80, pad: .11, arp: .065, bass: .08, drum: 0,   glitch: 0,   arpPola: [0, 2, 4, 2] },
    sendu:   { akar: 220, skala: 'minor', tempo: 1.10, pad: .15, arp: .045, bass: .09, drum: 0,   glitch: 0,   arpPola: [0, 3, 2, 0] },
    level2:  { akar: 196, skala: 'minor', tempo: 0.62, pad: .12, arp: .040, bass: .13, drum: .16, glitch: 0,   arpPola: [0, 2, 4, 3] },
    level3:  { akar: 175, skala: 'minor', tempo: 0.52, pad: .10, arp: .055, bass: .12, drum: .12, glitch: .09, arpPola: [0, 5, 3, 6] },
    boss:    { akar: 147, skala: 'minor', tempo: 0.38, pad: .09, arp: .060, bass: .18, drum: .20, glitch: .05, arpPola: [0, 1, 0, 4] },
    ending:  { akar: 262, skala: 'mayor', tempo: 1.45, pad: .17, arp: .070, bass: .07, drum: 0,   glitch: 0,   arpPola: [0, 4, 6, 4] }
  };

  function nada(cfg, derajat, oktaf) {
    const s = SKALA[cfg.skala];
    const d = ((derajat % s.length) + s.length) % s.length;
    const o = Math.floor(derajat / s.length) + (oktaf || 0);
    return cfg.akar * Math.pow(2, (s[d] + 12 * o) / 12);
  }

  function tick(cfg) {
    if (!ctx || vol.bisu) return;
    const t = ctx.currentTime + 0.03, bar = step % 16;

    if (bar % 8 === 0) {                                    /* pad akor */
      const akar = (step / 8) % 2 === 0 ? 0 : 3;
      [0, 2, 4].forEach((iv, i) => {
        const o = ctx.createOscillator();
        o.type = i === 0 ? 'triangle' : 'sine';
        o.frequency.value = nada(cfg, akar + iv, -1) * (1 + (i - 1) * 0.002);
        const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900; f.Q.value = .6;
        o.connect(f);
        env(f, t, 1.1, cfg.tempo * 7.5, cfg.pad, musicGain);
        o.start(t); o.stop(t + cfg.tempo * 9);
      });
    }
    if (bar % 4 === 0 && cfg.bass) {                        /* bass */
      const b = ctx.createOscillator(); b.type = 'sine';
      b.frequency.value = nada(cfg, (step / 4) % 2 === 0 ? 0 : 3, -2);
      env(b, t, 0.04, cfg.tempo * 3, cfg.bass, musicGain);
      b.start(t); b.stop(t + cfg.tempo * 3.5);
    }
    if (cfg.arp) {                                          /* arpeggio */
      const d = cfg.arpPola[bar % cfg.arpPola.length];
      const o = ctx.createOscillator(); o.type = 'triangle';
      o.frequency.value = nada(cfg, d, bar % 8 < 4 ? 0 : 1);
      env(o, t, 0.01, cfg.tempo * 0.9, cfg.arp, musicGain);
      o.start(t); o.stop(t + cfg.tempo);
    }
    if (cfg.drum) {                                         /* ketukan */
      if (bar % 4 === 0) { const k = ctx.createOscillator(); k.type = 'sine';
        k.frequency.setValueAtTime(120, t); k.frequency.exponentialRampToValueAtTime(45, t + .12);
        env(k, t, 0.005, 0.14, cfg.drum, musicGain); k.start(t); k.stop(t + .2); }
      if (bar % 8 === 4) noise(t, 0.09, 2400, 1.2, cfg.drum * .5, 'bandpass', musicGain);
    }
    if (cfg.glitch && Math.random() < 0.22) {               /* gangguan digital */
      for (let i = 0; i < 3; i++)
        noise(t + i * 0.03, 0.025, 900 + Math.random() * 4000, 10, cfg.glitch, 'bandpass', musicGain);
    }
    step++;
  }

  function musik(nama) {
    if (current === nama) return;
    current = nama;
    clearInterval(timer); timer = null; step = 0;
    if (!nama || vol.bisu) return;
    if (!init()) return;
    resume();
    const cfg = MUSIK[nama]; if (!cfg) return;
    tick(cfg);
    timer = setInterval(() => tick(cfg), cfg.tempo * 1000);
  }
  function berhenti(){ clearInterval(timer); timer = null; current = null; }

  /* ---------- pengaturan (sesuai Bagian Pengaturan Audio) ---------- */
  function setVol(jenis, nilai) {
    vol[jenis] = nilai;
    if (!ctx) return;
    if (jenis === 'musik') musicGain.gain.value = nilai;
    if (jenis === 'efek') sfxGain.gain.value = nilai;
  }
  function setBisu(on) {
    vol.bisu = on;
    if (!ctx) return;
    master.gain.value = on ? 0 : 1;
    if (!on && current) { const c = current; current = null; musik(c); }
  }

  return { play, musik, berhenti, setVol, setBisu, init, resume,
           get daftarSFX(){ return Object.keys(SFX) },
           get daftarMusik(){ return Object.keys(MUSIK) },
           get vol(){ return vol },
           get ctx(){ return ctx }, get master(){ return master } };
})();
