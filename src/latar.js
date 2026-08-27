/* ============================================================
   THE CRACK OF SOUL — pemandangan latar
   Digambar prosedural sebagai SVG. Tanpa berkas gambar, 0 KB.
   Sengaja gelap dan sederhana supaya tidak mencuri perhatian
   dari tokoh dan dari teks dialog.
   ============================================================ */

function _kaca(n, x, y, w, h, gap) {        // deretan jendela / rak
  let s = '';
  for (let i = 0; i < n; i++) s += `<rect x="${x + i * (w + gap)}" y="${y}" width="${w}" height="${h}" rx="3"/>`;
  return s;
}

const LATAR = {

  /* ---------- ruang kelas ---------- */
  class: `
  <g class="lt-jauh">
    <rect x="30" y="88" width="200" height="96" rx="4" fill="#1d2a24" stroke="#31473c" stroke-width="2"/>
    <path d="M46 108 h60 M46 122 h96 M46 136 h44 M46 150 h74" stroke="#4d6b5c" stroke-width="3" stroke-linecap="round" opacity=".55"/>
    <g fill="#2a3550" opacity=".9">${_kaca(3, 268, 76, 60, 118, 22)}</g>
    <g fill="#3d4d74" opacity=".5">${_kaca(3, 268, 76, 60, 52, 22)}</g>
    <rect x="0" y="184" width="390" height="8" fill="#1a1620"/>
  </g>
  <g class="lt-dekat" fill="#171420" stroke="#2b2438" stroke-width="2">
    <rect x="18"  y="228" width="112" height="14" rx="3"/><rect x="34"  y="242" width="10" height="46"/><rect x="104" y="242" width="10" height="46"/>
    <rect x="150" y="216" width="104" height="13" rx="3"/><rect x="164" y="229" width="9" height="42"/><rect x="232" y="229" width="9" height="42"/>
    <rect x="266" y="234" width="116" height="14" rx="3"/><rect x="282" y="248" width="10" height="48"/><rect x="356" y="248" width="10" height="48"/>
  </g>
  <ellipse class="lt-sinar" cx="298" cy="120" rx="130" ry="150" fill="#c8b48a" opacity=".10"/>`,

  /* ---------- kantin ---------- */
  canteen: `
  <g class="lt-jauh">
    <rect x="0" y="120" width="390" height="70" fill="#241d16"/>
    <rect x="0" y="112" width="390" height="10" fill="#3a2e22"/>
    <g fill="#4a3a28" opacity=".8">${_kaca(6, 16, 132, 40, 30, 22)}</g>
    <g stroke="#5a4630" stroke-width="2" opacity=".7">
      <path d="M70 40 v34"/><path d="M195 40 v28"/><path d="M320 40 v34"/>
    </g>
    <g fill="#6b5333" opacity=".85">
      <path d="M52 74 h36 l-8 16 h-20 z"/><path d="M179 68 h32 l-7 15 h-18 z"/><path d="M302 74 h36 l-8 16 h-20 z"/>
    </g>
  </g>
  <g class="lt-dekat" fill="#1b1610" stroke="#312718" stroke-width="2">
    <rect x="10" y="238" width="150" height="15" rx="7"/><rect x="30" y="253" width="9" height="44"/><rect x="132" y="253" width="9" height="44"/>
    <rect x="222" y="228" width="158" height="15" rx="7"/><rect x="244" y="243" width="9" height="46"/><rect x="350" y="243" width="9" height="46"/>
  </g>
  <g class="lt-sinar" opacity=".13">
    <ellipse cx="70" cy="100" rx="52" ry="60" fill="#e0b96a"/>
    <ellipse cx="195" cy="94" rx="46" ry="54" fill="#e0b96a"/>
    <ellipse cx="320" cy="100" rx="52" ry="60" fill="#e0b96a"/>
  </g>`,

  /* ---------- perpustakaan ---------- */
  library: `
  <g class="lt-jauh">
    <rect x="0" y="52" width="390" height="150" fill="#141821"/>
    <g stroke="#2c3444" stroke-width="3">
      <path d="M0 92 h390"/><path d="M0 132 h390"/><path d="M0 172 h390"/><path d="M0 202 h390"/>
    </g>
    <g class="lt-buku">
      <rect x="12" y="62" width="7" height="28" fill="#5a4a63"/><rect x="21" y="58" width="9" height="32" fill="#46566b"/>
      <rect x="32" y="64" width="6" height="26" fill="#6b4b4b"/><rect x="40" y="60" width="10" height="30" fill="#3f5a55"/>
      <rect x="52" y="62" width="7" height="28" fill="#5c5570"/><rect x="62" y="66" width="8" height="24" fill="#4a4358"/>
      <rect x="96" y="60" width="9" height="30" fill="#5a4a63"/><rect x="107" y="64" width="6" height="26" fill="#46566b"/>
      <rect x="115" y="58" width="10" height="32" fill="#6b4b4b"/><rect x="128" y="62" width="7" height="28" fill="#3f5a55"/>
      <rect x="176" y="62" width="8" height="28" fill="#4a4358"/><rect x="186" y="58" width="7" height="32" fill="#5c5570"/>
      <rect x="196" y="64" width="9" height="26" fill="#46566b"/>
      <rect x="252" y="60" width="7" height="30" fill="#6b4b4b"/><rect x="261" y="64" width="9" height="26" fill="#5a4a63"/>
      <rect x="273" y="58" width="6" height="32" fill="#3f5a55"/>
      <rect x="330" y="62" width="9" height="28" fill="#5c5570"/><rect x="341" y="60" width="7" height="30" fill="#46566b"/>
      <rect x="14" y="102" width="8" height="28" fill="#46566b"/><rect x="24" y="100" width="7" height="30" fill="#6b4b4b"/>
      <rect x="33" y="104" width="9" height="26" fill="#5c5570"/><rect x="88" y="100" width="7" height="30" fill="#3f5a55"/>
      <rect x="97" y="104" width="9" height="26" fill="#5a4a63"/><rect x="108" y="102" width="6" height="28" fill="#4a4358"/>
      <rect x="204" y="100" width="9" height="30" fill="#6b4b4b"/><rect x="215" y="104" width="7" height="26" fill="#46566b"/>
      <rect x="300" y="102" width="8" height="28" fill="#5c5570"/><rect x="310" y="100" width="7" height="30" fill="#3f5a55"/>
      <rect x="319" y="104" width="9" height="26" fill="#5a4a63"/>
      <rect x="46" y="142" width="7" height="28" fill="#5a4a63"/><rect x="55" y="140" width="9" height="30" fill="#46566b"/>
      <rect x="150" y="144" width="8" height="26" fill="#6b4b4b"/><rect x="160" y="140" width="7" height="30" fill="#4a4358"/>
      <rect x="266" y="142" width="9" height="28" fill="#3f5a55"/><rect x="277" y="144" width="6" height="26" fill="#5c5570"/>
    </g>
  </g>
  <g class="lt-dekat" fill="#12141b" stroke="#242a36" stroke-width="2">
    <rect x="24" y="244" width="164" height="13" rx="4"/><rect x="42" y="257" width="9" height="44"/><rect x="160" y="257" width="9" height="44"/>
    <rect x="228" y="240" width="150" height="13" rx="4"/><rect x="246" y="253" width="9" height="46"/><rect x="352" y="253" width="9" height="46"/>
  </g>
  <ellipse class="lt-sinar" cx="196" cy="60" rx="150" ry="70" fill="#8fa8d8" opacity=".07"/>`,

  /* ---------- taman / lapangan ---------- */
  park: `
  <g class="lt-jauh">
    <rect x="0" y="176" width="390" height="130" fill="#161d16"/>
    <path d="M0 176 q54 -22 104 -4 q60 -24 116 2 q54 -20 108 -2 q34 8 62 4 v134 H0 z" fill="#1b241a"/>
    <g fill="#0f1610">
      <path d="M46 178 v-46 h10 v46 z"/><ellipse cx="51" cy="118" rx="42" ry="34"/>
      <path d="M172 178 v-58 h11 v58 z"/><ellipse cx="177" cy="102" rx="52" ry="42"/>
      <path d="M320 178 v-40 h9 v40 z"/><ellipse cx="324" cy="124" rx="36" ry="29"/>
    </g>
    <g stroke="#22301f" stroke-width="3" opacity=".8">
      <path d="M232 178 v-42 h56 v42"/><path d="M244 136 v30"/><path d="M276 136 v30"/>
      <path d="M240 166 h12"/><path d="M272 166 h12"/>
    </g>
  </g>
  <g class="lt-dekat" opacity=".9">
    <path d="M0 268 q80 -14 160 -2 q90 14 230 -4 v60 H0 z" fill="#0d120c"/>
  </g>
  <ellipse class="lt-sinar" cx="120" cy="60" rx="150" ry="90" fill="#cfe0a0" opacity=".07"/>`,

  /* ---------- media sosial / layar HP ---------- */
  phone: `
  <g class="lt-jauh">
    <rect x="72" y="34" width="246" height="286" rx="26" fill="#0a1119" stroke="#1d3145" stroke-width="3"/>
    <rect x="160" y="42" width="70" height="8" rx="4" fill="#16273a"/>
    <g class="lt-chat">
      <rect x="90"  y="70"  width="150" height="26" rx="13" fill="#17293c"/>
      <rect x="150" y="104" width="150" height="26" rx="13" fill="#213a52"/>
      <rect x="90"  y="138" width="122" height="26" rx="13" fill="#17293c"/>
      <rect x="128" y="172" width="172" height="26" rx="13" fill="#213a52"/>
      <rect x="90"  y="206" width="138" height="26" rx="13" fill="#17293c"/>
      <rect x="168" y="240" width="132" height="26" rx="13" fill="#213a52"/>
    </g>
    <g class="lt-notif" fill="#e05a6a">
      <circle cx="300" cy="66" r="9"/><circle cx="98" cy="286" r="7"/>
    </g>
  </g>
  <ellipse class="lt-sinar" cx="195" cy="170" rx="150" ry="170" fill="#4aa3ff" opacity=".10"/>`,

  /* ---------- boss ---------- */
  boss1: `
  <g class="lt-kabut" fill="#2a1c3a" opacity=".5">
    <ellipse cx="90"  cy="230" rx="120" ry="70"/><ellipse cx="300" cy="250" rx="130" ry="76"/>
    <ellipse cx="195" cy="120" rx="150" ry="80"/>
  </g>
  <g class="lt-retak" stroke="#6b4a9e" stroke-width="2" fill="none" opacity=".5">
    <path d="M40 320 l24 -60 l-14 -34 l30 -52"/><path d="M340 316 l-28 -64 l16 -40 l-24 -46"/>
  </g>`,

  boss2: `
  <g class="lt-kabut" fill="#3a2018" opacity=".55">
    <ellipse cx="110" cy="250" rx="130" ry="74"/><ellipse cx="290" cy="230" rx="120" ry="70"/>
  </g>
  <g class="lt-retak" stroke="#c2472f" stroke-width="2.5" fill="none" opacity=".45">
    <path d="M20 330 l40 -70 l-18 -40 l36 -60"/><path d="M370 326 l-44 -74 l20 -44 l-30 -52"/>
    <path d="M195 340 l0 -70 l-16 -36"/>
  </g>`,

  crack: `
  <g class="lt-kabut" fill="#3a2140" opacity=".5">
    <ellipse cx="195" cy="180" rx="170" ry="120"/>
  </g>
  <g class="lt-retak" stroke="#d9b04a" stroke-width="2.5" fill="none" opacity=".55">
    <path d="M195 0 l0 84 l-26 40 l18 56 l-30 48 l22 62"/>
    <path d="M169 124 l-56 -34"/><path d="M187 180 l62 -30"/><path d="M157 228 l-58 26"/>
    <path d="M179 290 l64 22"/>
  </g>
  <g class="lt-kilau" fill="#f0d68a" opacity=".7">
    <circle cx="169" cy="124" r="3"/><circle cx="187" cy="180" r="3.5"/>
    <circle cx="157" cy="228" r="3"/><circle cx="179" cy="290" r="3.5"/>
  </g>`
};

const KATA_LATAR = [
  [/\b(pergi ke perpustakaan untuk mengerjakan tugas kelompok)\b/i, 'cg_l3_perpus'],
  [/\b(sekelompok siswa yang sebelumnya (sering )?mengejek)\b/i, 'cg_l1_perpus_awal'],
  [/\b(menunduk memegang pulpen dan bukunya|menunduk memegang pulpen dan buku catatan)\b/i, 'cg_l1_perpus_menunduk'],
  [/\b(berhenti menulis\. Tangan yang memegang pulpen menegang)\b/i, 'cg_l1_perpus'],
  [/\b(Suasana perpustakaan yang seharusnya tenang berubah menjadi tidak nyaman)\b/i, 'cg_l1_perpus_sedih'],
  [/\b(Meskipun ejekan masih terdengar( beberapa saat)?)\b/i, 'cg_l1_perpus_diam'],
  [/\b(Suara mereka semakin keras hingga mengganggu pengunjung perpustakaan lainnya)\b/i, 'cg_l1_perpus_marah'],
  [/\b(pertengkaran membuat suasana perpustakaan)\b/i, 'cg_l1_perpus_marah'],
  [/\b(memilih tetap duduk dan melanjutkan membaca bukunya)\b/i, 'cg_l1_perpus_diam'],
  [/\b(berdiri dan membalas semua ejekan)\b/i, 'cg_l1_perpus_marah'],
  [/\b(memilih menutup bukunya(,| dan) memasukkannya ke dalam tas)\b/i, 'cg_l1_perpus_pergi'],
  [/\b(menghampiri petugas perpustakaan dan menjelaskan)\b/i, 'cg_l1_perpus_lapor'],
  [/\b(mencoba mengabaikan semua ejekan yang diterimanya|berusaha fokus menghabiskan makanannya)\b/i, 'cg_l2_diam'],
  [/\b(membalas semua perkataan teman-temannya|membalas perkataan mereka\. Suasana kantin menjadi ramai)\b/i, 'cg_l2_marah'],
  [/\b(mengangkat makanannya lalu( berjalan)? meninggalkan kantin|meninggalkan kantin\. Ia mencari tempat yang lebih tenang|menemukan bangku kosong di taman|berhasil menjauh dari situasi)\b/i, 'cg_l2_pergi'],
  [/\b((menghampiri|mendekati) guru piket yang (sedang )?berada di sekitar kantin)\b/i, 'cg_l2_lapor'],
  [/\b(memilih diam saja sambil menundukkan kepalanya)\b/i, 'cg_l1_diam'],
  [/\b(membalas mengejek penampilan mereka|balik mengejek penampilan mereka)\b/i, 'cg_l1_marah'],
  [/\b(meninggalkan kelas dan pergi ke tempat lain)\b/i, 'cg_l1_pergi'],
  [/\b(menghampiri guru untuk menceritakan|ingin bicara sebentar|mendekati guru piket|menghampiri guru piket)\b/i, 'cg_l1_lapor'],
  [/\b(Guru memanggil siswa yang mengejek)\b/i, 'cg_l1_lapor2'],
  [/\b(Guru memanggil siswa yang mengejek)\b/i, 'cg_l1_guru_marah'],
  [/\b(jam istirahat,.*?menghampiri teman|teman yang paling ia percaya)\b/i, 'cg_l1_teman'],
  [/\b(pergi ke kantin untuk makan siang seorang diri)\b/i, 'cg_l2_kantin'],
  [/\b(duduk membelakangi mereka di tengah kantin)\b/i, 'cg_l2_kantin_2'],
  [/\b(kantin|kanti|jajan|meja makan|antre makan)\b/i, 'canteen'],
  [/\b(perpustakaan|perpus|rak buku|meja baca)\b/i, 'library'],
  [/\b(taman|lapangan|halaman sekolah|luar kelas|gerbang)\b/i, 'park'],
  [/\b(ruang kelas|di kelas|papan tulis|bangku kelas)\b/i, 'class'],
  [/\b(media sosial|grup chat|grup kelas|ponsel|hp\b|instagram|whatsapp|unggahan|komentar|layar)\b/i, 'phone']
];
function latarDariTeks(t) {
  for (const [re, k] of KATA_LATAR) if (re.test(t || '')) return k;
  return null;
}

function pasangLatar(kind) {
  const host = document.getElementById('bgart');
  if (!host) return;
  if (host.dataset.k === kind) return;
  host.dataset.k = kind;

  if (kind.startsWith('cg_')) {
    const cg_file = (typeof S !== 'undefined' && S && S.karakter) ? `${kind}_${S.karakter}` : kind;
    host.innerHTML = `<img src="${cg_file}.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; display:block;" alt="${cg_file}" onerror="if(this.getAttribute('src') !== '${kind}.jpg') this.src='${kind}.jpg'; else this.style.opacity='0';">`;
  } else {
    const isi = LATAR[kind] || '';
    host.innerHTML = isi
      ? `<svg viewBox="0 0 390 340" preserveAspectRatio="xMidYMin meet" aria-hidden="true">${isi}</svg>`
      : '';
  }
  host.classList.remove('masuk'); void host.offsetWidth; host.classList.add('masuk');
}

/* ============================================================
   Lapisan depan: benda-benda gelap di dekat kamera.
   Fungsinya mengisi ruang di bawah tokoh sekaligus memberi
   kesan kedalaman — tokoh jadi berdiri di dalam ruangan,
   bukan melayang di atas latar.
   ============================================================ */
const DEPAN = {
  class: `
  <g fill="#0b0810">
    <path d="M-20 74 h180 l14 96 h-208 z" opacity=".97"/>
    <path d="M214 62 h200 l-6 108 h-208 z" opacity=".97"/>
  </g>
  <g fill="#171325">
    <rect x="-20" y="66" width="180" height="12" rx="4"/>
    <rect x="214" y="54" width="200" height="12" rx="4"/>
  </g>
  <g fill="#0d0a14" opacity=".9">
    <rect x="26"  y="18" width="74" height="52" rx="9"/>
    <rect x="286" y="10" width="80" height="52" rx="9"/>
  </g>
  <g stroke="rgba(200,180,138,.16)" stroke-width="1.5" fill="none">
    <path d="M-20 66 h180"/><path d="M214 54 h200"/>
  </g>`,

  canteen: `
  <g fill="#0b0806">
    <path d="M-20 70 h430 v104 h-430 z" opacity=".97"/>
  </g>
  <rect x="-20" y="62" width="430" height="12" rx="4" fill="#1d1710"/>
  <g fill="#0f0c08">
    <ellipse cx="86" cy="62" rx="58" ry="13"/>
    <rect x="250" y="34" width="34" height="30" rx="6"/>
    <ellipse cx="267" cy="34" rx="17" ry="6" fill="#171009"/>
  </g>
  <path d="M-20 62 h430" stroke="rgba(224,185,106,.18)" stroke-width="1.5" fill="none"/>`,

  library: `
  <g fill="#08090e">
    <path d="M-20 76 h430 v98 h-430 z" opacity=".97"/>
  </g>
  <rect x="-20" y="68" width="430" height="12" rx="4" fill="#161a24"/>
  <g fill="#0e1119">
    <rect x="44"  y="30" width="70" height="38" rx="3"/>
    <rect x="52"  y="18" width="58" height="12" rx="3"/>
    <rect x="292" y="38" width="62" height="30" rx="3"/>
  </g>
  <path d="M-20 68 h430" stroke="rgba(143,168,216,.16)" stroke-width="1.5" fill="none"/>`,

  park: `
  <g fill="#080c07">
    <path d="M-20 96 q110 -22 214 -6 q108 16 216 -8 v92 h-430 z" opacity=".97"/>
  </g>
  <g fill="#0c1109">
    <rect x="30" y="52" width="150" height="10" rx="4"/>
    <rect x="30" y="70" width="150" height="10" rx="4"/>
    <rect x="40" y="52" width="8" height="42"/><rect x="164" y="52" width="8" height="42"/>
  </g>
  <g stroke="#101a0d" stroke-width="3" stroke-linecap="round">
    <path d="M240 104 v-20"/><path d="M252 106 v-26"/><path d="M264 104 v-18"/>
    <path d="M330 108 v-22"/><path d="M342 106 v-16"/>
  </g>`,

  phone: `
  <g fill="#05080d">
    <path d="M40 -10 h310 a26 26 0 0 1 26 26 v160 h-362 v-160 a26 26 0 0 1 26 -26 z" opacity=".0"/>
    <path d="M-20 92 h430 v82 h-430 z" opacity=".97"/>
  </g>
  <rect x="52" y="60" width="286" height="34" rx="17" fill="#0d1621"/>
  <rect x="70" y="70" width="150" height="14" rx="7" fill="#16273a"/>
  <circle cx="312" cy="77" r="12" fill="#1d3145"/>
  <path d="M-20 92 h430" stroke="rgba(74,163,255,.16)" stroke-width="1.5" fill="none"/>`,

  boss1: `
  <g fill="#07050c"><path d="M-20 88 h430 v86 h-430 z" opacity=".95"/></g>
  <g stroke="#6b4a9e" stroke-width="2" fill="none" opacity=".45" class="lt-retak">
    <path d="M60 174 l26 -54 l-14 -32"/><path d="M300 172 l-22 -50 l16 -30"/>
    <path d="M186 174 l4 -48"/>
  </g>`,

  boss2: `
  <g fill="#0a0604"><path d="M-20 88 h430 v86 h-430 z" opacity=".95"/></g>
  <g stroke="#c2472f" stroke-width="2.5" fill="none" opacity=".4" class="lt-retak">
    <path d="M46 174 l32 -58 l-16 -30"/><path d="M320 172 l-28 -54 l18 -28"/>
  </g>`,

  crack: `
  <g fill="#08050a"><path d="M-20 88 h430 v86 h-430 z" opacity=".95"/></g>
  <g stroke="#d9b04a" stroke-width="2.5" fill="none" opacity=".5" class="lt-retak">
    <path d="M195 174 l0 -46 l-24 -30"/><path d="M195 128 l30 -26"/>
  </g>
  <g fill="#f0d68a" opacity=".7" class="lt-kilau">
    <circle cx="171" cy="98" r="3"/><circle cx="225" cy="102" r="3.5"/>
  </g>`
};

/* warna lantai untuk menyambung lapisan depan sampai ke dasar layar */
const TANAH = {
  class: '#0b0810', canteen: '#0b0806', library: '#08090e', park: '#080c07',
  phone: '#05080d', boss1: '#07050c', boss2: '#0a0604', crack: '#08050a'
};

function pasangDepan(kind) {
  const host = document.getElementById('depan');
  if (!host) return;
  if (host.dataset.k === kind) return;
  host.dataset.k = kind;
  const isi = DEPAN[kind] || '';
  const tanah = TANAH[kind] || '#08060d';
  host.innerHTML = isi
    ? `<svg viewBox="0 0 390 620" preserveAspectRatio="xMidYMin meet" aria-hidden="true">`
    + `<rect x="-20" y="150" width="430" height="480" fill="${tanah}"/>${isi}</svg>`
    : '';
}
