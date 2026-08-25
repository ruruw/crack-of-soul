const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  await page.goto('file://' + __dirname + '/dist/index.html');
  
  console.log('Clicking Mulai on Title Screen...');
  await page.click('#goMenu');
  await new Promise(r => setTimeout(r, 500));
  
  console.log('Clicking MULAI PERMAINAN on Dashboard...');
  await page.click('#mMulai2');
  await new Promise(r => setTimeout(r, 500));
  
  console.log('Typing name...');
  await page.type('#nama', 'Nadira');
  await new Promise(r => setTimeout(r, 500));
  
  console.log('Clicking Mulai Perjalanan...');
  await page.click('#charGo');
  await new Promise(r => setTimeout(r, 500));
  
  console.log('Done testing.');
  await browser.close();
})();
