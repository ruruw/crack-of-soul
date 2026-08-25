const fs = require('fs');
let html = fs.readFileSync('src/game-shell.html', 'utf8');

// We can just use a regex to replace $('id').onclick = ... with a safe assignment
html = html.replace(/\$\('([^']+)'\)\.onclick\s*=/g, "if($('$1')) $('$1').onclick =");

fs.writeFileSync('src/game-shell-fixed.html', html);
