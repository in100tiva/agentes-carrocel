/**
 * Converte slides do mockup 390×488 centralizado para tela cheia Instagram 1080×1440.
 * Remove a linha .meta (não aparece no JPEG final).
 *
 * Uso: node upgrade-slides-full-bleed.cjs <runFolder>
 */
const fs = require('fs');
const path = require('path');

const runFolder =
  process.argv[2] || 'brasil-dev-ia-dados-publicos-transparencia-caca_2026-03-22';
const slidesDir = path.join(__dirname, 'output', runFolder, 'v1', 'slides');

const COVER_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1080px;
    height: 1440px;
    margin: 0;
    overflow: hidden;
    background: #0a0a0a;
    font-family: Inter, system-ui, sans-serif;
  }
  .card {
    position: relative;
    width: 1080px;
    height: 1440px;
    overflow: hidden;
    background: #0a0a0a;
  }
  .top-accent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, #7c3aed, #a78bfa);
    z-index: 25;
  }
  .bg-mascot {
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
  }
  .vignette {
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 160px rgba(0, 0, 0, 0.72);
    pointer-events: none;
    z-index: 2;
  }
  .badge {
    position: absolute;
    top: 40px;
    left: 48px;
    z-index: 20;
    background: #8b5cf6;
    color: #fff;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 16px 36px;
    border-radius: 999px;
  }
  .swipe-hint {
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 18;
    display: flex;
    align-items: center;
    gap: 14px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 999px;
    padding: 12px 28px 12px 20px;
  }
  .swipe-hint span {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 260px;
    bottom: 120px;
    z-index: 10;
    padding: 0 56px 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
  }
  .micro {
    font-size: 30px;
    font-weight: 600;
    color: rgba(167, 139, 250, 0.95);
    letter-spacing: 0.04em;
    margin-bottom: 28px;
    line-height: 1.3;
  }
  .headline {
    font-family: "Montserrat", sans-serif;
    font-size: 56px;
    line-height: 1.12;
    color: #fff;
    margin-bottom: 28px;
    max-width: 100%;
  }
  .headline .hl {
    color: #c4b5fd;
    text-decoration: underline;
    text-decoration-color: #8b5cf6;
    text-underline-offset: 6px;
  }
  .sub {
    font-size: 28px;
    color: rgba(255, 255, 255, 0.58);
    line-height: 1.4;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.85));
    border-top: 1px solid rgba(124, 58, 237, 0.3);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 48px;
    z-index: 20;
  }
  .footer-brand {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const INNER_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1080px;
    height: 1440px;
    margin: 0;
    overflow: hidden;
    background: #0a0a0a;
    font-family: Inter, system-ui, sans-serif;
  }
  .card {
    position: relative;
    width: 1080px;
    height: 1440px;
    overflow: hidden;
    background: #0a0a0a;
  }
  .top-accent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, #7c3aed, #a78bfa);
    z-index: 25;
  }
  .bg-mascot {
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
  }
  .vignette {
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.5);
    pointer-events: none;
    z-index: 2;
  }
  .badge {
    position: absolute;
    top: 40px;
    left: 48px;
    z-index: 20;
    background: #8b5cf6;
    color: #fff;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 16px 36px;
    border-radius: 999px;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 140px;
    bottom: 120px;
    z-index: 10;
    padding: 16px 48px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  .title {
    font-family: "Montserrat", sans-serif;
    font-size: 48px;
    line-height: 1.14;
    color: #fff;
    margin-bottom: 24px;
    padding-top: 8px;
    text-align: center;
    width: 100%;
  }
  .body {
    font-size: 28px;
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.76);
    margin-bottom: 16px;
    text-align: center;
    width: 100%;
  }
  .highlight-box {
    margin-top: 28px;
    background: #8b5cf6;
    color: #fff;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.4;
    padding: 28px 32px;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.35);
    text-align: left;
  }
  .kw {
    border-bottom: 3px solid #c4b5fd;
    padding-bottom: 2px;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.88));
    border-top: 1px solid rgba(124, 58, 237, 0.28);
    display: flex;
    align-items: center;
    padding: 0 48px;
    z-index: 20;
  }
  .footer-brand {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }
  .src {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.45);
    text-align: center;
    margin-top: 16px;
    line-height: 1.35;
  }
`;

function processFile(filePath) {
  const base = path.basename(filePath);
  const m = base.match(/slide-(\d+)/i);
  const n = m ? parseInt(m[1], 10) : 1;
  const css = n === 1 ? COVER_CSS : INNER_CSS;
  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replace(/<style>[\s\S]*?<\/style>/, `<style>${css}</style>`);
  html = html.replace(/\s*<div class="meta">[\s\S]*?<\/div>\s*/i, '\n  ');
  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Full-bleed 1080×1440:', filePath);
}

if (!fs.existsSync(slidesDir)) {
  console.error('Não encontrado:', slidesDir);
  process.exit(1);
}

fs.readdirSync(slidesDir)
  .filter((f) => /^slide-\d+\.html$/i.test(f))
  .sort((a, b) => parseInt(a.match(/(\d+)/)[1], 10) - parseInt(b.match(/(\d+)/)[1], 10))
  .forEach((f) => processFile(path.join(slidesDir, f)));

console.log('Done.');
