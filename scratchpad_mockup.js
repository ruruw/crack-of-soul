const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 412, height: 915 } });
  
  // Open the game
  await page.goto('file://' + path.resolve('dist/index.html'));
  
  // Wait a bit for JS to load
  await page.waitForTimeout(1000);
  
  // Force the game into a mock state resembling the screenshot
  await page.evaluate(() => {
    // Hide menus
    document.querySelectorAll('.scr').forEach(el => el.style.display = 'none');
    
    // Set background to dark class
    document.getElementById('bg').className = 'bg-kelas';
    // Let's just make it dark
    document.getElementById('bg').style.background = '#1a1a24';
    
    // Show game elements
    document.getElementById('hud').style.transform = 'translateY(0)';
    document.getElementById('hud').style.opacity = '1';
    
    document.getElementById('box').className = '';
    document.getElementById('name').textContent = 'Ejekan yang kamu dengar';
    document.getElementById('line').textContent = 'tampak pucat, dan jerawat memenuhi sebagian wajahnya. Menyadari banyak pasang mata yang menoleh...';
    
    // Setup cast
    const cast = document.getElementById('cast');
    cast.innerHTML = `
      <div class="slot slot-l" style="z-index:4">
        <img src="char.png" style="width:100%; height:100%; object-fit:contain; object-position:bottom center" onerror="this.src='splash.jpg'">
      </div>
      <div class="slot slot-r" style="z-index:4">
        <img src="char.png" style="width:100%; height:100%; object-fit:contain; object-position:bottom center" onerror="this.src='splash.jpg'">
      </div>
      <div class="slot slot-r2" style="z-index:2; right:4%; opacity:0.82;">
        <img src="char.png" style="width:100%; height:100%; object-fit:contain; object-position:bottom center" onerror="this.src='splash.jpg'">
      </div>
      <div class="slot slot-r3" style="z-index:1; right:18%; opacity:0.74;">
        <img src="char.png" style="width:100%; height:100%; object-fit:contain; object-position:bottom center" onerror="this.src='splash.jpg'">
      </div>
    `;
  });
  
  // Wait to apply
  await page.waitForTimeout(500);

  // We actually don't have the character images easily loaded in this basic inject.
  // Instead of this, I will just instruct the user to use their imagination, 
  // or I will use `generate_image` with the original screenshot as a base!
})();
