/* ============================================================
   THE CRACK OF SOUL — sistem karakter & animasi
   Semua karakter digambar prosedural sebagai SVG (tanpa file gambar).
   ============================================================ */

const CHAR_STYLE = {
  p_gemuk:{ skin:'#c98f5e', shade:'#a06f45', hair:'#241a16', style:'ikal', tubuh:'gemuk',
           shirt:'#dbe2ef', shirtDark:'#a9b3c6', tie:'#5f6f93', name:'Korban' },
  p_kurus:{ skin:'#f0d9c8', shade:'#cdb2a0', hair:'#2a1f2e', style:'panjang', tubuh:'kurus', jerawat:true,
           shirt:'#dbe2ef', shirtDark:'#a9b3c6', tie:'#5f6f93', name:'Korban' },
  l_gemuk:{ skin:'#c98f5e', shade:'#a06f45', hair:'#1a1512', style:'short', tubuh:'gemuk',
           shirt:'#dbe2ef', shirtDark:'#a9b3c6', tie:'#5f6f93', name:'Korban' },
  l_kurus:{ skin:'#f0d9c8', shade:'#cdb2a0', hair:'#221a17', style:'buzz', tubuh:'kurus', jerawat:true,
           shirt:'#dbe2ef', shirtDark:'#a9b3c6', tie:'#5f6f93', name:'Korban' },
  arka:  { skin:'#e3b894', shade:'#c1906c', hair:'#20161f', style:'short',
           shirt:'#dbe2ef', shirtDark:'#a9b3c6', tie:'#5f6f93', name:'Arka' },
  bimo:  { skin:'#d5a276', shade:'#b3814f', hair:'#0f0d0c', style:'spiky',
           shirt:'#d7dfec', shirtDark:'#a3adc0', tie:'#7a4141', name:'Bimo' },
  yudha: { skin:'#c99167', shade:'#a9744a', hair:'#171313', style:'buzz',
           shirt:'#d3dbe8', shirtDark:'#9fa9bc', tie:'#5f6f93', name:'Yudha' },
  rafi:  { skin:'#e0b18c', shade:'#bd8a63', hair:'#241a13', style:'curly',
           shirt:'#d3dbe8', shirtDark:'#9fa9bc', tie:'#5f6f93', name:'Rafi' },
  cowo2: { skin:'#e0b18c', shade:'#bd8a63', hair:'#241a13', style:'short',
           shirt:'#d3dbe8', shirtDark:'#9fa9bc', tie:'#5f6f93', name:'Cowo 2' },
  cewe:  { skin:'#e3b894', shade:'#c1906c', hair:'#1b1418', style:'bun',
           shirt:'#d7dfec', shirtDark:'#a3adc0', tie:'#7a4141', name:'Perempuan 1' },
  /* cewe2 & cewe3: perempuan pelaku berbeda untuk slot-r2 */
  cewe2: { skin:'#c3855e', shade:'#9e6640', hair:'#2d1a0e', style:'ikal',
           shirt:'#d7dfec', shirtDark:'#a3adc0', tie:'#4a6080', name:'Perempuan 2' },
  cewe3: { skin:'#eed5b0', shade:'#cba87e', hair:'#3d2820', style:'panjang',
           shirt:'#d7dfec', shirtDark:'#a3adc0', tie:'#7a4141', name:'Perempuan 3' },
  guru:  { skin:'#e6c1a0', shade:'#c2977a', hair:'#4a3d63', brow:'#2a1f2e', style:'hijab',
           shirt:'#c8b7d8', shirtDark:'#9c88b3', tie:'#6b5a94', name:'Guru', adult:true },
  nayla: { skin:'#e6c1a0', shade:'#c2977a', hair:'#6d5b8c', brow:'#2a1f2e', style:'hijab',
           shirt:'#e4ecf7', shirtDark:'#b0bccd', tie:'#7c6bd6', name:'Nayla' },
  sari:  { skin:'#dbb08d', shade:'#b98c69', hair:'#2b2029', style:'bun',
           shirt:'#c8b7d8', shirtDark:'#9c88b3', tie:'#6b5a94', name:'Bu Sari', adult:true },
  ibu:   { skin:'#dfb28f', shade:'#bb8b68', hair:'#2a1f27', style:'bob',
           shirt:'#c9a9a0', shirtDark:'#a6857c', tie:'#8a6a62', name:'Ibu', adult:true },
  boss1: { skin:'#2a2140', shade:'#1a1430', hair:'#0d0a17', style:'short',
           shirt:'#1a1530', shirtDark:'#100c22', tie:'#3a2d5e', name:'Negative Thoughts', shadow:true },
  boss2: { skin:'#2a2140', shade:'#1a1430', hair:'#0d0a17', style:'buzz',
           shirt:'#1a1530', shirtDark:'#100c22', tie:'#3a2d5e', name:'Physical Trauma', shadow:true },
  bossf: { skin:'#2a2140', shade:'#1a1430', hair:'#0d0a17', style:'short',
           shirt:'#1a1530', shirtDark:'#100c22', tie:'#3a2d5e', name:'The Crack of Soul', shadow:true },
  voice: { skin:'#2a2140', shade:'#1a1430', hair:'#0d0a17', style:'short',
           shirt:'#1a1530', shirtDark:'#100c22', tie:'#3a2d5e', name:'Suara', shadow:true }
};

/* ---------- bentuk rambut ---------- */
const HAIR = {
  short:'M56 92 C54 46 84 30 100 30 C118 30 146 46 144 92 C140 74 132 62 124 60 C112 70 88 70 76 60 C68 64 60 74 56 92 Z',
  spiky:'M54 90 C52 52 70 26 100 26 C132 26 150 52 146 92 L138 66 L130 82 L124 58 L112 76 L104 52 L92 74 L84 54 L74 78 L66 60 Z',
  buzz: 'M58 88 C58 52 76 36 100 36 C124 36 142 52 142 88 C136 70 124 62 100 62 C76 62 64 70 58 88 Z',
  curly:'M54 92 C48 56 70 28 100 28 C130 28 152 56 146 92 C144 76 136 84 128 72 C120 84 112 66 104 78 C96 64 86 84 78 70 C70 84 60 74 54 92 Z',
  bob:  'M52 104 C50 48 80 28 100 28 C120 28 150 48 148 104 C142 92 140 72 136 62 C120 74 80 74 64 62 C60 72 58 92 52 104 Z',
  bun:  'M56 92 C54 48 82 30 100 30 C118 30 146 48 144 92 C140 72 130 62 122 60 C110 70 90 70 78 60 C70 64 60 72 56 92 Z '+
        'M100 20 m-16 0 a16 14 0 1 0 32 0 a16 14 0 1 0 -32 0 Z',
  hijab:'M52 104 C52 40 76 18 100 18 C124 18 148 40 148 104 C142 88 130 78 100 78 C70 78 58 88 52 104 Z',
  ikal: 'M52 96 C48 48 72 26 100 26 C128 26 152 48 148 96 C146 80 138 84 130 72 C122 84 114 68 106 78 C98 66 88 84 80 72 C72 84 58 80 52 96 Z',
  panjang:'M54 98 C52 44 76 24 100 24 C124 24 148 44 146 98 C140 76 128 66 100 66 C72 66 60 76 54 98 Z'
};

/* ---------- ekspresi ---------- */
const EMO = {
  /* rotasi positif = ujung dalam (dekat hidung) turun  → kesan marah
     rotasi negatif = ujung dalam naik                 → kesan sedih   */
  neutral:{ browL:0,  browR:0,  browY:0,  lid:.18, mouth:'M88 121 Q100 125 112 121', tear:0 },
  sad:    { browL:-15,browR:15, browY:2,  lid:.34, mouth:'M88 127 Q100 117 112 127', tear:0 },
  scared: { browL:-11,browR:11, browY:-6, lid:0,   mouth:'M94 120 Q100 114 106 120 Q100 130 94 120', tear:0 },
  angry:  { browL:19, browR:-19,browY:5,  lid:.30, mouth:'M88 125 Q100 121 112 125', tear:0 },
  smirk:  { browL:9,  browR:-17,browY:1,  lid:.28, mouth:'M87 123 Q100 130 113 115', tear:0 },
  kind:   { browL:-7, browR:7,  browY:-2, lid:.20, mouth:'M88 118 Q100 129 112 118', tear:0 },
  cry:    { browL:-18,browR:18, browY:3,  lid:.60, mouth:'M88 128 Q100 116 112 128', tear:1 },
  flat:   { browL:0,  browR:0,  browY:2,  lid:.44, mouth:'M89 123 L111 123', tear:0 },
  tired:  { browL:-9, browR:9,  browY:4,  lid:.52, mouth:'M90 124 Q100 121 110 124', tear:0 },
  hope:   { browL:-5, browR:5,  browY:-3, lid:.14, mouth:'M89 119 Q100 128 111 119', tear:0 }
};

/* ---------- render satu karakter ---------- */
/* Kalau tersedia gambar asli (ilustrasi), pakai itu. Kalau tidak, gambar lewat kode. */
/* Boneka dua lapis di atas ilustrasi: kepala dipotong dari badan supaya
   bisa mengangguk sendiri, lengkap dengan kelopak mata, mulut, dan air mata.
   Koordinat mata & mulut tiap tokoh ada di RIG (ruang gambar 420x980). */
function rigSVG(key, src, id, ekspresi){
  const R = (typeof RIG !== 'undefined') ? RIG[key] : null;
  const f='blr'+id, kH='kH'+id, kB='kB'+id;
  const VB = (R && R.vb) || 980;
  const gambar = '<image href="'+src+'" x="0" y="0" width="420" height="'+VB+'"'
    + ' preserveAspectRatio="xMidYMid slice"/>';
  if (!R) return '<svg class="chr chr-rig" viewBox="0 0 420 980" preserveAspectRatio="xMidYMax meet"'
    + ' aria-hidden="true">' + gambar + '</svg>';
  const ax=R.eL[0], ay=R.eL[1], bx=R.eR[0], by=R.eR[1], mx=R.m[0], my=R.m[1];
  const rx=R.rx||23, ry=R.ry||16;
  const d = my - (ay+by)/2;
  const leher = Math.min(VB-40, Math.round(my + d*1.95));   // garis potong kepala/badan
  const poros = ((ax+bx)/2).toFixed(0) + 'px ' + leher + 'px';
  const lid = (x,y,dl) => '<g class="lid" style="transform-origin:'+x+'px '+y+'px;--d:'+dl+'s">'
    + '<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+R.kulit+'" filter="url(#'+f+')"/>'
    + '<path d="M'+(x-rx+2)+' '+y+' Q'+x+' '+(y+7)+' '+(x+rx-2)+' '+y+'" stroke="#33211c"'
    + ' stroke-width="3" fill="none" stroke-linecap="round"/></g>';
  return '<svg class="chr chr-rig" viewBox="0 0 420 '+VB+'" preserveAspectRatio="xMidYMax meet" aria-hidden="true">'
    + '<defs>'
    + '<filter id="'+f+'" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.4"/></filter>'
    + '<clipPath id="'+kH+'"><rect x="-60" y="-60" width="540" height="'+(leher+120)+'"/></clipPath>'
    + '<linearGradient id="g'+kB+'" x1="0" y1="'+(leher-42)+'" x2="0" y2="'+(leher-4)+'" gradientUnits="userSpaceOnUse">'
    + '<stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity="1"/></linearGradient>'
    + '<mask id="'+kB+'"><rect x="-60" y="'+(leher-42)+'" width="540" height="38" fill="url(#g'+kB+')"/>'
    + '<rect x="-60" y="'+(leher-4)+'" width="540" height="'+(VB+80-leher)+'" fill="#fff"/></mask>'
    + '</defs>'
    + '<g class="kepala" clip-path="url(#'+kH+')" style="transform-origin:'+poros+'">'
    +   gambar
    +   (ekspresi ? '' :
          '<ellipse class="brow" cx="'+((ax+bx)/2)+'" cy="'+(((ay+by)/2)-14)+'" rx="'+(((bx-ax)/2)+40)+'" ry="30" filter="url(#'+f+')"/>')
    +   lid(ax,ay,0) + lid(bx,by,0.06)
    +   (ekspresi ? '' :
          '<g class="mul" style="transform-origin:'+mx+'px '+my+'px">'
        + '<ellipse cx="'+mx+'" cy="'+my+'" rx="21" ry="14" fill="'+R.kulit+'" filter="url(#'+f+')"/>'
        + '<ellipse class="lubang" cx="'+mx+'" cy="'+(my+1)+'" rx="11" ry="7" fill="#5c322e"'
        + ' style="transform-origin:'+mx+'px '+(my+1)+'px"/></g>'
        + '<g class="air"><ellipse class="tt t1" cx="'+ax+'" cy="'+(ay+20)+'" rx="4.6" ry="7.4"/>'
        + '<ellipse class="tt t2" cx="'+bx+'" cy="'+(by+20)+'" rx="4.6" ry="7.4"/></g>')
    + '</g>'
    + '<g class="badan" mask="url(#'+kB+')" style="transform-origin:210px '+VB+'px">'
    +   gambar + '</g>'
    + '</svg>';
}

function charSVG(key, emo, id){
  const G = (typeof GAMBAR !== 'undefined') ? GAMBAR : null;
  if (G && G[key]) {
    const src = (typeof G[key] === 'object') ? (G[key][emo] || G[key].neutral || G[key].tired || G[key].default) : G[key];
    if (src) return rigSVG(key, src, id, typeof G[key] === 'object');
  }
  /* Kalau sebagian tokoh sudah memakai ilustrasi, tokoh yang belum punya
     ditampilkan sebagai siluet gelap. Selain menjaga tampilan tetap serasi,
     pelaku perundungan sebagai bayangan tanpa wajah justru sesuai temanya. */
  /* Tokoh pendukung yang berpihak pada korban tidak pernah jadi siluet —
     bayangan hitam hanya untuk pelaku yang belum punya ilustrasi. */
  const TANPA_SILUET = ['guru','sari','ibu','nayla','teman'];
  const modeGambar = G && Object.keys(G).some(k => G[k]);
  const siluet = modeGambar && !G[key] && TANPA_SILUET.indexOf(key) < 0;
  const c = CHAR_STYLE[key] || CHAR_STYLE.arka;
  const e = EMO[emo] || EMO.neutral;
  const g = 'g'+id;
  return `
<svg class="chr${siluet ? ' chr-siluet' : ''}" viewBox="0 0 200 300" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
 <defs>
  <linearGradient id="sh${g}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${c.shirt}"/><stop offset="100%" stop-color="${c.shirtDark}"/>
  </linearGradient>
  <radialGradient id="fc${g}" cx="42%" cy="36%" r="70%">
    <stop offset="0%" stop-color="${c.skin}"/><stop offset="100%" stop-color="${c.shade}"/>
  </radialGradient>
  ${c.shadow?`<filter id="gl${g}"><feGaussianBlur stdDeviation="4" result="b"/>
     <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`:''}
 </defs>
 <g class="chr-sway" ${c.shadow?`filter="url(#gl${g})"`:''}>
   <ellipse class="chr-shadow" cx="100" cy="292" rx="52" ry="7"/>
   <g class="chr-body">
     <!-- lengan -->
     <g class="arm arm-l"><rect x="34" y="196" width="22" height="86" rx="11" fill="url(#sh${g})"/>
        <circle cx="45" cy="286" r="11" fill="${c.skin}"/></g>
     <g class="arm arm-r"><rect x="144" y="196" width="22" height="86" rx="11" fill="url(#sh${g})"/>
        <circle cx="155" cy="286" r="11" fill="${c.skin}"/></g>
     <!-- badan -->
     <path class="torso" d="M100 168 C70 168 48 186 44 214 L40 300 L160 300 L156 214 C152 186 130 168 100 168 Z"
           fill="url(#sh${g})"
           style="transform-origin:100px 300px;transform:scaleX(${c.tubuh==='gemuk'?1.16:c.tubuh==='kurus'?0.88:1})"/>
     ${c.adult
       ? `<path d="M84 176 L100 206 L116 176" fill="none" stroke="${c.shade}" stroke-width="4"
             stroke-linecap="round" opacity=".55"/>
          <circle cx="100" cy="212" r="5" fill="${c.tie}" opacity=".9"/>`
       : `<path d="M100 172 L88 190 L100 214 L112 190 Z" fill="${c.tie}" opacity=".95"/>
          <rect x="96" y="206" width="8" height="52" rx="4" fill="${c.tie}" opacity=".95"/>`}
     <!-- leher -->
     <rect x="88" y="140" width="24" height="34" rx="10" fill="${c.shade}"/>
   </g>
   <g class="chr-head">
     ${c.style==='hijab'
       ? `<path d="M28 232 C24 82 62 14 100 14 C138 14 176 82 172 232 C152 224 150 116 140 74 L60 74 C50 116 48 224 28 232 Z"
              fill="${c.hair}"/>`
       : (c.style==='ikal'||c.style==='panjang')
       ? `<path d="M40 218 C36 92 64 22 100 22 C136 22 164 92 160 218 C146 206 148 116 140 78 L60 78 C52 116 54 206 40 218 Z"
              fill="${c.hair}"/>`
       : ''}
     <ellipse cx="100" cy="100" rx="44" ry="50" fill="url(#fc${g})"/>
     <!-- telinga -->
     ${(c.style==='hijab'||c.style==='panjang') ? '' : `<ellipse cx="56" cy="104" rx="7" ry="10" fill="${c.shade}"/>
     <ellipse cx="144" cy="104" rx="7" ry="10" fill="${c.shade}"/>`}
     <!-- mata -->
     <g class="eye eye-l">
       <ellipse cx="82" cy="102" rx="11" ry="8" fill="#fbf9ff" opacity="${c.shadow?.55:1}"/>
       <circle class="pupil" cx="82" cy="103" r="4.6" fill="${c.shadow?'#b9a4ff':'#2a2030'}"/>
       <rect class="lid" x="70" y="94" width="24" height="17" fill="${c.skin}"
             style="--lid:${e.lid};transform-origin:82px 94px;transform:scaleY(${e.lid})"/>
     </g>
     <g class="eye eye-r">
       <ellipse cx="118" cy="102" rx="11" ry="8" fill="#fbf9ff" opacity="${c.shadow?.55:1}"/>
       <circle class="pupil" cx="118" cy="103" r="4.6" fill="${c.shadow?'#b9a4ff':'#2a2030'}"/>
       <rect class="lid" x="106" y="94" width="24" height="17" fill="${c.skin}"
             style="--lid:${e.lid};transform-origin:118px 94px;transform:scaleY(${e.lid})"/>
     </g>
     <!-- alis -->
     <rect x="70" y="${84+e.browY}" width="24" height="4.5" rx="2.2" fill="${c.brow||c.hair}"
           style="transform-origin:82px 86px;transform:rotate(${e.browL}deg)"/>
     <rect x="106" y="${84+e.browY}" width="24" height="4.5" rx="2.2" fill="${c.brow||c.hair}"
           style="transform-origin:118px 86px;transform:rotate(${e.browR}deg)"/>
     <!-- hidung -->
     <path d="M100 106 L97 116 L103 116" fill="none" stroke="${c.shade}" stroke-width="2.4"
           stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>
     <!-- mulut -->
     <path class="mouth" d="${e.mouth}" fill="none" stroke="${c.shadow?'#4b3a72':'#7a4a4a'}"
           stroke-width="3.4" stroke-linecap="round" style="transform-origin:100px 122px"/>
     <!-- air mata -->
     ${e.tear?`<circle class="tear" cx="82" cy="112" r="3.4" fill="#9fd0ff" opacity=".9"/>
               <circle class="tear tear2" cx="118" cy="112" r="3" fill="#9fd0ff" opacity=".85"/>`:''}
     ${c.jerawat?`<g fill="#c96b5e" opacity=".45">
       <circle cx="74" cy="122" r="2.4"/><circle cx="128" cy="118" r="2.1"/>
       <circle cx="112" cy="132" r="1.9"/><circle cx="86" cy="134" r="2.2"/>
       <circle cx="66" cy="110" r="1.8"/><circle cx="134" cy="128" r="2"/></g>`:''}
     <!-- rambut / kerudung -->
     <path d="${HAIR[c.style]}" fill="${c.hair}"/>
     ${c.style==='hijab'
       ? `<path d="M40 210 C44 150 52 108 60 78" fill="none" stroke="#000" stroke-opacity=".18" stroke-width="4"/>
          <path d="M160 210 C156 150 148 108 140 78" fill="none" stroke="#000" stroke-opacity=".18" stroke-width="4"/>`
       : ''}

   </g>
 </g>
</svg>`;
}

/* ---------- siapa yang muncul di tiap node ---------- */
/* aturan otomatis + daftar khusus di bawah */
const CAST_RULES = {
  bimo:'smirk', yudha:'smirk', rafi:'smirk',
  nayla:'kind', sari:'kind', ibu:'kind', voice:'flat'
};

/* override manual: [karakter kiri, emosi, aksi] & [karakter kanan, emosi, aksi] */
const CAST = {
  l1_00:{ L:['arka','tired'] },
  l1_01:{ L:['arka','tired','small'] },
  l1_02:{ L:['arka','sad','flinch'], R:['bimo','smirk','lean'] },
  l1_03:{ L:['arka','sad','small'],  R:['bimo','smirk'] },
  l1_a: { L:['arka','flat','small'] },
  l1_b: { L:['arka','neutral','step'], R:['bimo','scared'] },
  l1_c: { L:['arka','flat'], R:['bimo','smirk','lean'] },
  l1_04:{ L:['arka','scared','tremble'] },
  l1_d: { L:['arka','neutral','step'] },
  l1_e: { L:['arka','sad','turn'] },
  l1_f: { L:['arka','angry','step'], R:['bimo','angry'] },
  l1_05:{ L:['arka','tired'], R:['nayla','kind'] },
  l1_g: { L:['arka','sad'],   R:['nayla','kind','reach'] },
  l1_h: { L:['arka','flat'],  R:['nayla','sad','turn'] },
  l1_i: { L:['arka','angry','turn'], R:['nayla','sad'] },
  l1_06:{ L:['arka','tired','small'] },

  l2_00:{ L:['arka','scared','shove'], R:['bimo','smirk','lean'] },
  l2_a: { L:['arka','sad','small'] },
  l2_b: { L:['arka','angry','step'], R:['bimo','angry','lean'] },
  l2_c: { L:['arka','flat'] },
  l2_01:{ L:['arka','scared','flinch'], R:['rafi','smirk'] },
  l2_d: { L:['arka','sad'], R:['sari','flat','turn'] },
  l2_e: { L:['arka','cry','small'] },
  l2_f: { L:['arka','angry','shove'], R:['rafi','angry'] },
  l2_02:{ L:['arka','scared','shove'], R:['bimo','angry','lean'] },
  l2_g: { L:['arka','scared'], R:['bimo','smirk'] },
  l2_h: { L:['arka','flat','freeze'], R:['yudha','smirk'] },
  l2_i: { L:['arka','angry','shove'], R:['bimo','angry'] },
  l2_03:{ L:['arka','tired'], R:['ibu','kind'] },

  l3_00:{ L:['arka','scared','tremble'] },
  l3_a: { L:['arka','cry','small'] },
  l3_b: { L:['arka','tired','breathe'] },
  l3_c: { L:['arka','angry','tremble'] },
  l3_01:{ L:['arka','sad'] },
  l3_d: { L:['arka','flat'] },
  l3_e: { L:['arka','tired','small'] },
  l3_f: { L:['arka','flat','turn'] },
  l3_02:{ L:['arka','cry','tremble'] },
  l3_g: { L:['arka','sad'], R:['nayla','kind','reach'] },
  l3_h: { L:['arka','cry','small'] },
  l3_i: { L:['arka','cry','shove'] },

  l4_00:{ C:['arka','flat','float'] },
  l4_01:{ C:['arka','scared'], R:['voice','flat','loom'] },
  l4_a: { C:['arka','cry','small'], R:['voice','smirk','loom'] },
  l4_b: { C:['arka','neutral','step'], R:['voice','angry','shrink'] },
  l4_c: { C:['arka','flat'], R:['voice','flat'] },
  l4_02:{ C:['arka','sad','float'] },
  l4_03n:{ C:['arka','hope'], R:['nayla','kind','glow'] },
  l4_03e:{ C:['arka','neutral'] },
  l4_03s:{ C:['arka','neutral'] },
  l4_03x:{ C:['arka','tired','small'] },
  l4_04:{ C:['arka','scared'], R:['voice','angry','loom'] },
  l4_d: { C:['arka','neutral'], R:['voice','flat','shrink'] },
  l4_e: { C:['arka','hope','step'], R:['voice','sad','shrink'] },
  l4_f: { C:['arka','flat','small'], R:['voice','smirk','loom'] },
  l4_05:{ C:['arka','hope','reach'] },

  l5_00:{ L:['arka','tired'] },
  l5_ibu:{ L:['arka','cry','step'], R:['ibu','kind','reach'] },
  l5_sari:{ L:['arka','sad','step'], R:['sari','kind'] },
  l5_nayla:{ L:['arka','hope'], R:['nayla','kind','reach'] },
  l5_diam:{ L:['arka','flat','turn'] },
  l5_05:{ L:['arka','sad'], R:['sari','kind','reach'] },
  l5_06:{ L:['arka','hope','breathe'] }
};

/* ---------- controller ---------- */
const Cast = (()=>{
  let host=null, cur={};
  function init(el){ host=el; }
  function slotHTML(pos, key, emo, act, i){
    return `<div class="slot slot-${pos} ${act?'act-'+act:''}" data-k="${key}"
              style="--d:${(i*0.7).toFixed(2)}s">${charSVG(key,emo,pos+i)}</div>`;
  }
  function forNode(id, node, S){
    let c = CAST[id];
    if(!c){
      c = {};
      const who = node.who && node.who.id;
      const key = Object.keys(CHAR_STYLE).find(k=>CHAR_STYLE[k].name===who);
      c.L = ['arka', S && S.worth<35 ? 'sad' : (S && S.worth>65 ? 'hope':'neutral')];
      if(key && key!=='arka') c.R = [key, CAST_RULES[key]||'neutral'];
    }
    return c;
  }
  function render(id, node, S, speakerName){
    if(!host) return;
    const c = forNode(id, node, S);
    const sig = JSON.stringify(c);
    if(sig===cur.sig){ mark(speakerName); return; }
    cur.sig = sig;
    let html='';
    if(c.C) html += slotHTML('c', c.C[0], c.C[1], c.C[2], 0);
    if(c.L) html += slotHTML('l', c.L[0], c.L[1], c.L[2], 0);
    if(c.R) html += slotHTML('r', c.R[0], c.R[1], c.R[2], 1);
    host.innerHTML = html;
    mark(speakerName);
  }
  function matchingSpeaker(charName, speakerName) {
    if (!speakerName) return false;
    const c = charName.toLowerCase();
    const s = speakerName.toLowerCase();
    if (c === s) return true;
    // jika keduanya punya angka yang sama (misal "Teman 2" dan "Perempuan 2")
    const cDigit = c.match(/\d+/);
    const sDigit = s.match(/\d+/);
    if (cDigit && sDigit && cDigit[0] === sDigit[0]) return true;
    // jika pembicara adalah nama kustom pemain
    if (typeof S !== 'undefined' && S && S.nama && s === S.nama.toLowerCase()) {
      if (charName === 'Korban' || c === S.karakter.toLowerCase()) return true;
    }
    if (s.includes('korban') && charName === 'Korban') return true;
    return false;
  }
  function mark(speakerName){
    if(!host) return;
    host.querySelectorAll('.slot').forEach(s=>{
      const st = CHAR_STYLE[s.dataset.k];
      const match = st && matchingSpeaker(st.name, speakerName);
      s.classList.toggle('speaking', !!speakerName && match);
      s.classList.toggle('muted', !!speakerName && !match);
    });
  }
  function talk(on){
    if(!host) return;
    const s = host.querySelector('.slot.speaking') || host.querySelector('.slot');
    host.querySelectorAll('.slot').forEach(x=>x.classList.remove('talking'));
    if(on && s) s.classList.add('talking');
  }
  return { init, render, talk, matchingSpeaker };
})();
