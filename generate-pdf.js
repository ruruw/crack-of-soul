const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  const docMd = fs.readFileSync('DOKUMENTASI-GAME.md', 'utf8');
  const sheetsMd = fs.readFileSync('PANDUAN-GOOGLE-SHEETS.md', 'utf8');

  // Simple Markdown to HTML parser tailored for our documentation
  function mdToHtml(md) {
    let html = md
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Blockquotes
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
      // Bold and Italic
      .replace(/\*\*\*(.*?)\*\*\*/gim, '<b><i>$1</i></b>')
      .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
      .replace(/\*(.*?)\*/gim, '<i>$1</i>')
      // Code blocks
      .replace(/```([a-z]*)\n([\s\S]*?)```/gim, '<pre><code>$2</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      // Horizontal Rules
      .replace(/^---$/gim, '<hr/>');

    // Tables
    html = html.replace(/((?:\|[^\n]+\|\n?)+)/g, (match) => {
      const rows = match.trim().split('\n');
      if (rows.length < 2) return match;
      let tableHtml = '<table>';
      rows.forEach((row, idx) => {
        if (row.includes('---|---') || row.includes(':---:')) return;
        const cols = row.split('|').filter((_, i, arr) => i > 0 && i < arr.length - 1);
        if (idx === 0) {
          tableHtml += '<thead><tr>' + cols.map(c => `<th>${c.trim()}</th>`).join('') + '</tr></thead><tbody>';
        } else {
          tableHtml += '<tr>' + cols.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
        }
      });
      tableHtml += '</tbody></table>';
      return tableHtml;
    });

    // Unordered lists
    html = html.replace(/^\s*[-•]\s+(.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/<\/ul>\s*<ul>/gim, '');

    // Ordered lists
    html = html.replace(/^\s*(\d+)\.\s+(.*$)/gim, '<ol><li>$2</li></ol>');
    html = html.replace(/<\/ol>\s*<ol>/gim, '');

    // Paragraphs
    html = html.split('\n\n').map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.startsWith('<h') || p.startsWith('<table') || p.startsWith('<pre') || p.startsWith('<ul') || p.startsWith('<ol') || p.startsWith('<blockquote') || p.startsWith('<hr')) {
        return p;
      }
      return `<p>${p.replace(/\n/g, '<br/>')}</p>`;
    }).join('\n');

    return html;
  }

  const docHtmlContent = mdToHtml(docMd);

  const fullHtml = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Dokumentasi Game - The Crack of Soul</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Spectral:ital,wght@0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

    @page {
      size: A4;
      margin: 18mm 16mm 20mm 16mm;
      @bottom-center {
        content: "The Crack of Soul — Dokumentasi Resmi Game Edukasi Anti-Perundungan";
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 8pt;
        color: #888;
      }
    }

    * { box-sizing: border-box; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 9.5pt;
      line-height: 1.55;
      color: #1e1b2e;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }

    /* Cover / Header Banner */
    .header-banner {
      background: linear-gradient(135deg, #1e1035 0%, #3b1464 60%, #6b21a8 100%);
      color: #ffffff;
      padding: 24px 24px;
      border-radius: 12px;
      margin-bottom: 24px;
      page-break-after: avoid;
      box-shadow: 0 4px 14px rgba(107, 33, 168, 0.2);
    }
    .header-banner h1 {
      font-family: 'Spectral', Georgia, serif;
      font-size: 24pt;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 4px 0;
      letter-spacing: 0.02em;
    }
    .header-banner .subtitle {
      font-size: 11pt;
      font-weight: 600;
      color: #facc15;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .header-banner .meta {
      font-size: 8.5pt;
      color: #d8b4fe;
      margin: 0;
    }

    h1, h2, h3, h4 {
      color: #2e1065;
      font-family: 'Plus Jakarta Sans', sans-serif;
      page-break-after: avoid;
    }

    h1 {
      font-size: 16pt;
      border-bottom: 2px solid #e9d5ff;
      padding-bottom: 6px;
      margin-top: 24px;
      margin-bottom: 12px;
    }

    h2 {
      font-size: 13pt;
      color: #581c87;
      border-left: 4px solid #9333ea;
      padding-left: 10px;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 11pt;
      color: #6b21a8;
      margin-top: 14px;
      margin-bottom: 6px;
    }

    p {
      margin: 0 0 10px 0;
      text-align: justify;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0 16px 0;
      font-size: 8.5pt;
      page-break-inside: avoid;
    }
    th, td {
      border: 1px solid #e2e8f0;
      padding: 7px 10px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background-color: #f3e8ff;
      color: #4c1d95;
      font-weight: 700;
    }
    tr:nth-child(even) td {
      background-color: #faf5ff;
    }

    /* Lists */
    ul, ol {
      margin: 6px 0 12px 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 4px;
    }

    /* Code blocks & pre */
    pre {
      background: #1e1035;
      color: #e9d5ff;
      padding: 10px 14px;
      border-radius: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      line-height: 1.45;
      overflow-x: hidden;
      white-space: pre-wrap;
      word-break: break-all;
      margin: 10px 0;
      page-break-inside: avoid;
    }

    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      background: #f3e8ff;
      color: #7e22ce;
      padding: 2px 5px;
      border-radius: 4px;
    }

    pre code {
      background: transparent;
      color: inherit;
      padding: 0;
    }

    /* Callout & Blockquotes */
    blockquote {
      margin: 12px 0;
      padding: 10px 14px;
      background: #faf5ff;
      border-left: 4px solid #a855f7;
      border-radius: 0 8px 8px 0;
      font-size: 9pt;
      color: #3b0764;
      page-break-inside: avoid;
    }

    hr {
      border: 0;
      height: 1px;
      background: #e2e8f0;
      margin: 20px 0;
    }

    .badge {
      display: inline-block;
      padding: 2px 8px;
      font-size: 7.5pt;
      font-weight: 700;
      border-radius: 12px;
      background: #f3e8ff;
      color: #6b21a8;
      margin-right: 4px;
    }

    .page-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      font-size: 8pt;
      color: #9ca3af;
      border-top: 1px solid #e5e7eb;
      padding-top: 4px;
    }
  </style>
</head>
<body>

  <div class="header-banner">
    <div class="subtitle">Dokumentasi Resmi & Panduan Teknis</div>
    <h1>THE CRACK OF SOUL</h1>
    <p class="meta">Game Cerita Interaktif Edukasi Anti-Perundungan | Versi 1.0 (Agustus 2026)</p>
  </div>

  ${docHtmlContent.replace(/<h1>📖 DOKUMENTASI LENGKAP GAME: THE CRACK OF SOUL<\/h1>/i, '')}

</body>
</html>
  `;

  fs.writeFileSync('doc-preview.html', fullHtml);

  console.log('Launching browser to generate PDF...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: 'networkidle' });

  await page.pdf({
    path: 'DOKUMENTASI-GAME.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '18mm',
      bottom: '18mm',
      left: '16mm',
      right: '16mm'
    }
  });
  console.log('Successfully created DOKUMENTASI-GAME.pdf!');

  // Generate PANDUAN-GOOGLE-SHEETS.pdf
  const sheetsHtmlContent = mdToHtml(sheetsMd);
  const sheetsFullHtml = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Panduan Google Sheets - The Crack of Soul</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Spectral:ital,wght@0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

    @page {
      size: A4;
      margin: 18mm 16mm 20mm 16mm;
      @bottom-center {
        content: "The Crack of Soul — Panduan Setup Google Sheets Guru";
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 8pt;
        color: #888;
      }
    }

    * { box-sizing: border-box; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 9.5pt;
      line-height: 1.55;
      color: #1e1b2e;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }

    .header-banner {
      background: linear-gradient(135deg, #064e3b 0%, #047857 60%, #10b981 100%);
      color: #ffffff;
      padding: 24px 24px;
      border-radius: 12px;
      margin-bottom: 24px;
      page-break-after: avoid;
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.2);
    }
    .header-banner h1 {
      font-family: 'Spectral', Georgia, serif;
      font-size: 22pt;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 4px 0;
      letter-spacing: 0.02em;
    }
    .header-banner .subtitle {
      font-size: 11pt;
      font-weight: 600;
      color: #fef08a;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .header-banner .meta {
      font-size: 8.5pt;
      color: #a7f3d0;
      margin: 0;
    }

    h1, h2, h3, h4 {
      color: #064e3b;
      font-family: 'Plus Jakarta Sans', sans-serif;
      page-break-after: avoid;
    }

    h1 {
      font-size: 16pt;
      border-bottom: 2px solid #a7f3d0;
      padding-bottom: 6px;
      margin-top: 24px;
      margin-bottom: 12px;
    }

    h2 {
      font-size: 13pt;
      color: #065f46;
      border-left: 4px solid #10b981;
      padding-left: 10px;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 11pt;
      color: #047857;
      margin-top: 14px;
      margin-bottom: 6px;
    }

    p { margin: 0 0 10px 0; text-align: justify; }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0 16px 0;
      font-size: 8.5pt;
      page-break-inside: avoid;
    }
    th, td {
      border: 1px solid #e2e8f0;
      padding: 7px 10px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background-color: #ecfdf5;
      color: #065f46;
      font-weight: 700;
    }
    tr:nth-child(even) td { background-color: #f0fdf4; }

    ul, ol { margin: 6px 0 12px 0; padding-left: 20px; }
    li { margin-bottom: 4px; }

    pre {
      background: #064e3b;
      color: #a7f3d0;
      padding: 10px 14px;
      border-radius: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      line-height: 1.45;
      overflow-x: hidden;
      white-space: pre-wrap;
      word-break: break-all;
      margin: 10px 0;
      page-break-inside: avoid;
    }

    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      background: #d1fae5;
      color: #047857;
      padding: 2px 5px;
      border-radius: 4px;
    }

    pre code { background: transparent; color: inherit; padding: 0; }

    blockquote {
      margin: 12px 0;
      padding: 10px 14px;
      background: #ecfdf5;
      border-left: 4px solid #10b981;
      border-radius: 0 8px 8px 0;
      font-size: 9pt;
      color: #064e3b;
      page-break-inside: avoid;
    }

    hr { border: 0; height: 1px; background: #e2e8f0; margin: 20px 0; }
  </style>
</head>
<body>

  <div class="header-banner">
    <div class="subtitle">Panduan Guru Pembimbing & Peneliti KIR</div>
    <h1>SETUP GOOGLE SPREADSHEET</h1>
    <p class="meta">Integrasi Data Nilai Permainan The Crack of Soul | Versi 1.0</p>
  </div>

  ${sheetsHtmlContent.replace(/<h1>📊 PANDUAN CEPAT MENYIAPKAN GOOGLE SPREADSHEET GURU<\/h1>/i, '')}

</body>
</html>
  `;

  await page.setContent(sheetsFullHtml, { waitUntil: 'networkidle' });
  await page.pdf({
    path: 'PANDUAN-GOOGLE-SHEETS.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '18mm',
      bottom: '18mm',
      left: '16mm',
      right: '16mm'
    }
  });
  console.log('Successfully created PANDUAN-GOOGLE-SHEETS.pdf!');

  // Generate INVOICE-PELUNASAN.pdf
  const invMd = fs.readFileSync('INVOICE-PELUNASAN.md', 'utf8');
  const invHtmlContent = mdToHtml(invMd);
  const invFullHtml = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Invoice Pelunasan - The Crack of Soul</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Spectral:ital,wght@0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

    @page {
      size: A4;
      margin: 16mm 16mm 16mm 16mm;
    }

    * { box-sizing: border-box; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 9.5pt;
      line-height: 1.5;
      color: #1e1b2e;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }

    .inv-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid #7c3aed;
      padding-bottom: 14px;
      margin-bottom: 18px;
    }
    .inv-brand h1 {
      font-family: 'Spectral', Georgia, serif;
      font-size: 22pt;
      font-weight: 700;
      color: #5b21b6;
      margin: 0 0 2px 0;
      letter-spacing: 0.02em;
    }
    .inv-brand .sub {
      font-size: 10pt;
      font-weight: 600;
      color: #7c3aed;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .inv-tag {
      text-align: right;
    }
    .inv-title {
      font-size: 18pt;
      font-weight: 800;
      color: #1e1b2e;
      letter-spacing: 0.05em;
      margin: 0 0 4px 0;
    }
    .inv-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5pt;
      color: #6b7280;
      font-weight: 600;
    }
    .badge-status {
      display: inline-block;
      margin-top: 4px;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 8.5pt;
      font-weight: 700;
      background: #fef3c7;
      color: #b45309;
      border: 1px solid #fde68a;
    }

    h3 {
      font-size: 11pt;
      color: #4c1d95;
      margin: 14px 0 6px 0;
      border-left: 3px solid #7c3aed;
      padding-left: 8px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0 14px 0;
      font-size: 8.5pt;
      page-break-inside: avoid;
    }
    th, td {
      border: 1px solid #e2e8f0;
      padding: 7px 10px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background-color: #f5f3ff;
      color: #4c1d95;
      font-weight: 700;
    }
    tr:nth-child(even) td { background-color: #faf5ff; }

    .total-box {
      background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
      border: 2px solid #c4b5fd;
      border-radius: 8px;
      padding: 12px 16px;
      margin: 14px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .total-label {
      font-size: 11pt;
      font-weight: 700;
      color: #4c1d95;
    }
    .total-amount {
      font-size: 18pt;
      font-weight: 800;
      color: #6d28d9;
    }

    .bank-box {
      background: #f8fafc;
      border: 1px dashed #cbd5e1;
      border-radius: 8px;
      padding: 12px 14px;
      margin-top: 14px;
      font-size: 9pt;
      line-height: 1.5;
    }

    hr { border: 0; height: 1px; background: #e2e8f0; margin: 16px 0; }
  </style>
</head>
<body>

  <div class="inv-header">
    <div class="inv-brand">
      <h1>THE CRACK OF SOUL</h1>
      <div class="sub">Game Development & Interactive System</div>
      <div style="font-size:8.5pt; color:#6b7280; margin-top:4px;">Website: merurw.com | Developer: Meru</div>
    </div>
    <div class="inv-tag">
      <div class="inv-title">INVOICE</div>
      <div class="inv-num">No: INV/20260831/COS-02</div>
      <div class="badge-status">⏳ MENUNGGU PELUNASAN</div>
    </div>
  </div>

  ${invHtmlContent.replace(/<h1>🧾 INVOICE \/ NOTA TAGIHAN PELUNASAN<\/h1>/i, '').replace(/<p><strong>Nomor Invoice<\/strong>:.*?<\/p>/is, '')}

</body>
</html>
  `;

  await page.setContent(invFullHtml, { waitUntil: 'networkidle' });
  await page.pdf({
    path: 'INVOICE-PELUNASAN.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '16mm',
      bottom: '16mm',
      left: '16mm',
      right: '16mm'
    }
  });
  console.log('Successfully created INVOICE-PELUNASAN.pdf!');

  await browser.close();
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
