/**
 * @deprecated O padrão atual **não** usa mais `.footer-swipe`. Para alinhar um run antigo ao layout
 * atual, use `strip-slide-arrows.cjs` depois deste script (ou só edite o HTML à mão).
 *
 * Histórico: troca indicador de pontos por seta no rodapé; centraliza conteúdo slides 2–N.
 * Uso: node scripts/apply-footer-swipe-and-center.cjs [runFolder]
 */
const fs = require('fs');
const path = require('path');

const run =
  process.argv[2] || 'o-bcrypt-ainda-e-seguro-veja-quando-usar-argon2-em-projetos_2026-03-22';
const slidesDir = path.join(__dirname, '..', 'output', run, 'v1', 'slides');

const FOOTER_SWIPE = `
      <div class="footer-swipe" aria-hidden="true">
        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 7h14M16 4l4 3-4 3" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>`;

const DOTS_BLOCK = /\n  \.dots \{[\s\S]*?\n  \.dot\.active \{[\s\S]*?\n  \}/;

const SWIPE_CSS = `
  .footer-swipe {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 0.75;
  }
  .footer-swipe svg {
    display: block;
  }`;

for (let i = 1; i <= 7; i++) {
  const f = path.join(slidesDir, `slide-0${i}.html`);
  if (!fs.existsSync(f)) continue;
  let c = fs.readFileSync(f, 'utf8');

  if (!DOTS_BLOCK.test(c)) {
    console.warn('No dots CSS in', f);
  }
  c = c.replace(DOTS_BLOCK, SWIPE_CSS);

  const matches = [...c.matchAll(/\n      <div class="dots" aria-hidden="true">[\s\S]*?<\/div>/g)];
  if (matches.length !== 1) {
    console.warn('Expected 1 dots block in', f, 'got', matches.length);
  }
  c = c.replace(/\n      <div class="dots" aria-hidden="true">[\s\S]*?<\/div>/, FOOTER_SWIPE);

  if (i >= 2 && i <= 6) {
    c = c.replace(
      /  \.content \{\s*\n    position: absolute;\s*\n    left: 0;\s*\n    right: 0;\s*\n    top: 48px;\s*\n    bottom: 44px;\s*\n    z-index: 10;\s*\n    padding: 8px 22px 10px;\s*\n    display: flex;\s*\n    flex-direction: column;\s*\n  \}/,
      `  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 48px;
    bottom: 44px;
    z-index: 10;
    padding: 8px 22px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }`
    );
    c = c.replace(/  \.highlight-box \{\s*\n    margin-top: auto;/, '  .highlight-box {\n    margin-top: 10px;');
  }

  if (i === 7) {
    c = c.replace(
      /justify-content: flex-start;/,
      'justify-content: center;\n    align-items: stretch;'
    );
    c = c.replace(/  \.cta-box \{[^}]*margin-top: auto;/, (block) =>
      block.replace('margin-top: auto;', 'margin-top: 12px;')
    );
  }

  fs.writeFileSync(f, c);
  console.log('OK', f);
}
