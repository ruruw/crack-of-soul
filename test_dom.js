const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('dist/index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;
const $ = id => document.getElementById(id);

const ids = ['goMenu', 'charGo', 'tutGo', 'petaGo', 'lvGo', 'overGo', 'endGo', 'setGo', 'aboutGo', 'btnPause', 'pLanjut', 'pUlang', 'pSet', 'pTut', 'pMenu', 'setKomik', 'setBisu', 'volM', 'volE', 'volT'];

ids.forEach(id => {
  if (!$(id)) console.log("MISSING: " + id);
});
