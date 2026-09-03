const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const dataPath = path.join(__dirname, 'pedidos.json');
  const { fecha } = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const outName = `Rotulos_${fecha || 'salida'}.pdf`;

  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage();
  const url = 'file://' + path.join(__dirname, 'build', 'index.html');
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { await document.fonts.ready; });

  const mode = process.argv[2] || 'pdf';
  const distDir = path.join(__dirname, '..', 'dist');
  fs.mkdirSync(distDir, { recursive: true });

  if (mode === 'shots') {
    const pages = await page.$$('.page');
    for (let i = 0; i < pages.length; i++) {
      await pages[i].screenshot({ path: path.join(distDir, `rotulo-${i + 1}.png`) });
    }
    console.log(`screenshots done (${pages.length})`);
  } else {
    await page.pdf({
      path: path.join(distDir, outName),
      width: '210mm',
      height: '297mm',
      printBackground: true,
      margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
      preferCSSPageSize: false,
    });
    console.log(`pdf done: dist/${outName}`);
  }

  await browser.close();
})();
