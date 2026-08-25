const fs=require('fs');
let h=fs.readFileSync('src/game-shell.html','utf8');
const SEMUA=['nadira','alya','rafa','reyan','bimo','yudha','rafi','boss1','boss2','bossf','cewe','guru','cewe2','cewe3','cowo2'];
const EMO=['tired','sad','cry','scared','hope','angry','smirk','flat','tawa'];
const b64=f=>{
  const ext = f.split('.').pop();
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : (ext === 'png' ? 'image/png' : 'image/webp');
  return 'data:'+mime+';base64,'+fs.readFileSync(f).toString('base64');
};

for(const n of SEMUA){
  for(const [tok,suf] of [['FACE','-wajah'],['CARD','-kartu']]){
    const f='img/'+n+suf+'.webp';
    h=h.replace('/*__'+tok+'_'+n+'__*/', fs.existsSync(f)?b64(f):'');
  }
  const set={};
  for(const e of EMO){ const f='img/'+n+'-'+e+'.webp'; if(fs.existsSync(f)) set[e]=b64(f); }
  let nilai='null';
  if(Object.keys(set).length){
    if(!set.neutral) set.neutral = set.tired || set.smirk || set.flat || Object.values(set)[0];
    nilai=JSON.stringify(set);
  } else if(fs.existsSync('img/'+n+'.webp')) {
    nilai=JSON.stringify(b64('img/'+n+'.webp'));
  } else if(fs.existsSync('img/'+n+'.png')) {
    nilai=JSON.stringify(b64('img/'+n+'.png'));
  } else if(fs.existsSync('img/'+n+'.jpg')) {
    nilai=JSON.stringify(b64('img/'+n+'.jpg'));
  }
  h=h.split('/*__SET_'+n+'__*/null').join(nilai);
}
h=h.replace('/*__RIG__*/null', ()=>fs.readFileSync('img/rig-game.json','utf8'));
h=h.replace('/*__DATA__*/',()=>fs.readFileSync('naskah/game-data.js','utf8'))
   .replace('/*__CHARS__*/',()=>fs.readFileSync('src/chars.js','utf8'))
   .replace('/*__LATAR__*/',()=>fs.readFileSync('src/latar.js','utf8'))
   .replace('/*__AUDIO__*/',()=>fs.readFileSync('src/audio.js','utf8'));
fs.writeFileSync('TheCrackOfSoul-v2.html',h);
console.log('built TheCrackOfSoul-v2.html',(fs.statSync('TheCrackOfSoul-v2.html').size/1024).toFixed(1)+'kB');
