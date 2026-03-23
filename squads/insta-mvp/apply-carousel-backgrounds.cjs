/**
 * Injeta fundos ../backgrounds/bg-NN.png nos slide-NN.html (carrossel infinito).
 * Normaliza .bg-mascot conforme carousel-infinite-background.md.
 *
 * Uso:
 *   node apply-carousel-backgrounds.cjs [runFolder]
 */
const fs = require('fs');
const path = require('path');

const runFolder =
  process.argv[2] || 'o-bcrypt-ainda-e-seguro-veja-quando-usar-argon2-em-projetos_2026-03-22';
const slidesDir = path.join(__dirname, 'output', runFolder, 'v1', 'slides');
const bgDir = path.join(__dirname, 'output', runFolder, 'v1', 'backgrounds');

const GRADIENT =
  'linear-gradient(180deg, rgba(8,4,22,0.55) 0%, rgba(0,0,0,0.82) 100%)';

const BG_MASCOT_BLOCK = `  .bg-mascot {
    position: absolute;
    top: -1%;
    bottom: -1%;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: blur(1px) brightness(0.70) saturate(1.02);
  }
  .bg-mascot::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      165deg,
      rgba(8, 4, 22, 0.74) 0%,
      rgba(30, 27, 46, 0.70) 38%,
      rgba(12, 10, 28, 0.80) 72%,
      rgba(0, 0, 0, 0.90) 100%
    );
  }`;

/** Remove/substitui regra CSS desde selector até o '}' correspondente */
function replaceCssRule(html, selectorRegex, replacement) {
  const flags = (selectorRegex.flags || '').replace(/g/g, '');
  const re = new RegExp(selectorRegex.source, flags);
  const start = html.search(re);
  if (start < 0) return html;
  const open = html.indexOf('{', start);
  if (open < 0) return html;
  let depth = 0;
  let i = open;
  for (; i < html.length; i++) {
    if (html[i] === '{') depth++;
    if (html[i] === '}') {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }
  return html.slice(0, start) + replacement + html.slice(i);
}

function injectInlineBg(html, pad) {
  const inline = `style="background-image: url('../backgrounds/bg-${pad}.png'), ${GRADIENT};"`;
  return html.replace(
    /<div\s+class="bg-mascot"([^>]*?)>/,
    (full, attrs) => {
      let a = attrs
        .replace(/\s*style\s*=\s*"[^"]*"/gi, '')
        .replace(/\s*style\s*=\s*'[^']*'/gi, '')
        .trim();
      return `<div class="bg-mascot" ${inline}${a ? ' ' + a : ''}>`;
    }
  );
}

function listSlideFiles() {
  if (!fs.existsSync(slidesDir)) {
    console.error('Pasta não encontrada:', slidesDir);
    return [];
  }
  return fs
    .readdirSync(slidesDir)
    .filter((f) => /^slide-\d+\.html$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/slide-(\d+)/i)[1], 10);
      const nb = parseInt(b.match(/slide-(\d+)/i)[1], 10);
      return na - nb;
    });
}

for (const file of listSlideFiles()) {
  const n = parseInt(file.match(/slide-(\d+)/i)[1], 10);
  const pad = String(n).padStart(2, '0');
  const pngPath = path.join(bgDir, `bg-${pad}.png`);
  if (!fs.existsSync(pngPath)) {
    console.warn('Skip (sem PNG):', pngPath);
    continue;
  }

  const fpath = path.join(slidesDir, file);
  let html = fs.readFileSync(fpath, 'utf8');

  html = replaceCssRule(html, /\.bg-mascot::after\s*\{/, '');
  html = replaceCssRule(html, /\.bg-mascot\s*\{/, BG_MASCOT_BLOCK);

  html = injectInlineBg(html, pad);

  fs.writeFileSync(fpath, html, 'utf8');
  console.log('Updated', fpath);
}

console.log('Done. Fundos:', bgDir);
