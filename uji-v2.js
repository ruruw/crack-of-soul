const {chromium}=require('playwright');
(async()=>{
 const b=await chromium.launch();
 const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});
 const errs=[]; p.on('pageerror',e=>errs.push(String(e)));
 p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto('file://'+__dirname+'/TheCrackOfSoul-v2.html');
 await p.waitForTimeout(400);
 await p.click('#goMenu'); await p.waitForTimeout(500);
 await p.click('#mMulai'); await p.waitForTimeout(600);
 await p.fill('#nama','Nadira');
 await p.screenshot({path:'shots/v2-1-char.png'});
 await p.click('#charGo'); await p.waitForTimeout(700);
 if(await p.locator('#sPeta.on').count()){ await p.click('#petaGo'); await p.waitForTimeout(800); }
 let baris=0, balonMax=0, opsiTampil=0, shots=0;
 for(let i=0;i<600;i++){
   if(await p.locator('#sEnd.on').count()) break;
   let overlay=false;
   for(const [sel,btn] of [['#sTut.on','#tutGo'],['#sPeta.on','#petaGo'],['#sLevel.on','#lvGo'],['#sOver.on','#overGo']]){
     if(await p.locator(sel).count()){ await p.click(btn); await p.waitForTimeout(450); overlay=true; break; }
   }
   if(overlay) continue;
   if(await p.locator('.scr.on').count()){ await p.waitForTimeout(200); continue; }
   const nb=await p.locator('#balon .bal').count();
   if(nb>balonMax) balonMax=nb;
   const ch=p.locator('#choices .ch'); const n=await ch.count();
   if(n>0){
     opsiTampil++;
     if(shots<2 && nb>0){ await p.screenshot({path:'shots/v2-'+(2+shots)+'-komik.png'}); shots++; }
     try{ await ch.nth(Math.floor(Math.random()*n)).click({timeout:3000}); }catch(e){}
   } else {
     try{ await p.click('#stage',{position:{x:195,y:520},timeout:3000}); baris++; }catch(e){}
   }
   await p.waitForTimeout(70);
 }
 await p.waitForTimeout(500);
 await p.screenshot({path:'shots/v2-4-ending.png'});
 const end=await p.locator('#endTitle').textContent().catch(()=>null);
 const kosong=await p.evaluate(()=>[...document.querySelectorAll('#balon .bal .tx')].filter(t=>!t.textContent.trim()).length);
 console.log('ketukan:',baris,'| opsi tampil:',opsiTampil,'| balon maks:',balonMax,'| balon kosong:',kosong);
 console.log('ending:',end);
 console.log(errs.length? 'JS ERRORS:\n'+errs.join('\n') : 'no JS errors');
 await b.close();
})();
