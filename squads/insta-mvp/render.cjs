const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const RUN_FOLDER = 'o-bcrypt-ainda-e-seguro-veja-quando-usar-argon2-em-projetos_2026-03-22';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const inputDir = path.join(__dirname, 'output', RUN_FOLDER, 'v1', 'slides');
  const outputDir = path.join(__dirname, 'output', RUN_FOLDER, 'v1', 'images');
  const bgDir = path.join(__dirname, 'output', RUN_FOLDER, 'v1', 'backgrounds');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (let i = 1; i <= 7; i++) {
    const slideName = `slide-0${i}.html`;
    const htmlPath = path.join(inputDir, slideName);

    if (fs.existsSync(htmlPath)) {
      const htmlUrl = pathToFileURL(htmlPath).href;
      await page.goto(htmlUrl, { waitUntil: 'load' });

      await page.evaluate(() => document.fonts.ready);

      // Garante carregamento do PNG no Windows (file:// + url relativo às vezes falha)
      const pngPath = path.join(bgDir, `bg-0${i}.png`);
      if (fs.existsSync(pngPath)) {
        const bgUrl = pathToFileURL(pngPath).href;
        await page.evaluate((u) => {
          const el = document.querySelector('.bg-mascot');
          if (el) {
            el.style.backgroundImage = `url('${u}'), linear-gradient(180deg, rgba(8,4,22,0.55) 0%, rgba(0,0,0,0.82) 100%)`;
          }
        }, bgUrl);
      }

      await page.waitForTimeout(400);

      await page.evaluate(() => {
        const card = document.querySelector('.card');
        if (card) {
          card.style.transform = 'scale(2.769)';
          card.style.transformOrigin = 'top left';
          card.style.position = 'absolute';
          card.style.top = '0';
          card.style.left = '0';
        }
        const infoLabel = document.querySelector('.info-label');
        if (infoLabel) infoLabel.style.display = 'none';
        const meta = document.querySelector('.meta');
        if (meta) meta.style.display = 'none';
      });

      const imagePath = path.join(outputDir, `0${i}.jpg`);
      await page.screenshot({ path: imagePath, type: 'jpeg', quality: 90 });
      console.log(`Rendered ${imagePath}`);
    } else {
      console.log(`Not found: ${htmlPath}`);
    }
  }

  await browser.close();
})();
