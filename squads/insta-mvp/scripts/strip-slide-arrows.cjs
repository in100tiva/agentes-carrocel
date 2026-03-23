/**
 * Remove setas decorativas (.arrow-svg), bloco .footer-swipe e regras CSS associadas.
 * Uso: node scripts/strip-slide-arrows.cjs [runFolder]
 */
const fs = require('fs');
const path = require('path');

const run =
  process.argv[2] || 'o-bcrypt-ainda-e-seguro-veja-quando-usar-argon2-em-projetos_2026-03-22';
const slidesDir = path.join(__dirname, '..', 'output', run, 'v1', 'slides');

for (let i = 1; i <= 7; i++) {
  const f = path.join(slidesDir, `slide-0${i}.html`);
  if (!fs.existsSync(f)) continue;
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/\r\n/g, '\n');

  c = c.replace(/  \.arrow-svg \{[\s\S]*?\n  \}/g, '');

  c = c.replace(/<svg class="arrow-svg"[\s\S]*?<\/svg>\s*/g, '');

  c = c.replace(/  \.footer-swipe \{[\s\S]*?\n  \}\n  \.footer-swipe svg \{[\s\S]*?\n  \}/g, '');

  c = c.replace(/<div class="footer-swipe"[^>]*>[\s\S]*?<\/div>\s*/g, '');

  c = c.replace(/Deslize →/g, 'Deslize');
  c = c.replace(/<p class="hand">→ Arquitetura/g, '<p class="hand">Arquitetura');
  c = c.replace(
    /Memory-hard: custo alto em RAM → barreira/g,
    'Memory-hard: custo alto em RAM — barreira'
  );
  c = c.replace(/>Projeto novo → Argon2id</g, '>Projeto novo · Argon2id<');
  c = c.replace(
    /Projeto novo → Argon2id · Legado bcrypt ok → conheça/g,
    'Projeto novo · Argon2id · Legado bcrypt ok · conheça'
  );

  c = c.replace(/    justify-content: space-between;\n/g, '    justify-content: flex-start;\n');

  fs.writeFileSync(f, c);
  console.log('OK', f);
}
