const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage();
  const url = 'file://' + path.join(__dirname, 'index.html');
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { await document.fonts.ready; });

  const mode = process.argv[2] || 'pdf';

  if (mode === 'shots') {
    const ids = ['p1', 'p2', 'p3', 'p4'];
    for (const id of ids) {
      const el = await page.$('#' + id);
      await el.screenshot({ path: path.join(__dirname, '..', 'dist', id + '.png') });
    }
    console.log('screenshots done');
  } else {
    await page.pdf({
      path: path.join(__dirname, '..', 'dist', 'Presentacion_Nena_Mejia_Alcaldesa_Banos_2027-2030.pdf'),
      width: '210mm',
      height: '297mm',
      printBackground: true,
      margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
      preferCSSPageSize: false,
    });
    console.log('pdf done');
  }

  await browser.close();
})();
