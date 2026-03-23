/**
 * Baixa uma imagem ultra-wide (Unsplash/Pexels) e fatia em N painéis 1080×OUT_H
 * para fundo contínuo do carrossel (borda direita do slide i ≈ esquerda do i+1).
 *
 * Uso:
 *   node stock-panorama-backgrounds.cjs [runFolder] [--url <URL>] [--slices N] [--height 1440]
 */
const fs = require('fs');
const https = require('https');
const path = require('path');
const sharp = require('sharp');

const DEFAULT_RUN =
  process.env.INSTA_MVP_RUN || 'o-bcrypt-ainda-e-seguro-veja-quando-usar-argon2-em-projetos_2026-03-22';

const OUT_W = 1080;

function loadPresets() {
  const p = path.join(__dirname, 'pipeline', 'data', 'stock-background-presets.json');
  if (!fs.existsSync(p)) return [{ id: 'fallback', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=12000&h=5000&q=85' }];
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

/** Escolhe preset diferente por run (evita sempre o mesmo fundo). */
function pickPresetUrl(runFolder) {
  const presets = loadPresets();
  let h = 5381;
  const s = String(runFolder);
  for (let i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i);
  const idx = Math.abs(h) % presets.length;
  const chosen = presets[idx];
  console.log('Preset automático (rotação):', chosen.id || idx, '| índice', idx, '/', presets.length);
  return chosen.url;
}

function download(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'opensquad-insta-mvp/1.1' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          download(res.headers.location).then(resolve).catch(reject);
          res.resume();
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          res.resume();
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
        res.on('error', reject);
      })
      .on('error', reject);
  });
}

function parseArgs(argv) {
  let runFolder = DEFAULT_RUN;
  let url = null;
  let explicitUrl = false;
  let slices = 8;
  let outH = 1440;
  const rest = argv.slice(2);
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === '--url' && rest[i + 1]) {
      url = rest[++i];
      explicitUrl = true;
    } else if (rest[i] === '--slices' && rest[i + 1]) {
      slices = Math.max(2, Math.min(10, parseInt(rest[++i], 10) || 7));
    } else if (rest[i] === '--height' && rest[i + 1]) {
      outH = parseInt(rest[++i], 10) || 1440;
    } else if (!rest[i].startsWith('--')) {
      runFolder = rest[i];
    }
  }
  if (!explicitUrl) {
    url = pickPresetUrl(runFolder);
  }
  return { runFolder, url, slices, outH };
}

(async () => {
  const { runFolder, url, slices: SLICES, outH: OUT_H } = parseArgs(process.argv);
  const PANORAMA_W = SLICES * OUT_W;
  const bgDir = path.join(__dirname, 'output', runFolder, 'v1', 'backgrounds');
  if (!fs.existsSync(bgDir)) {
    fs.mkdirSync(bgDir, { recursive: true });
  }

  console.log('Run:', runFolder, '| Slices:', SLICES, '| Panel:', OUT_W, 'x', OUT_H, '| Panorama width:', PANORAMA_W);
  console.log('Download:', url);
  const buf = await download(url);
  console.log('Bytes:', buf.length);

  const strip = await sharp(buf)
    .resize({
      width: PANORAMA_W,
      height: OUT_H,
      fit: 'cover',
      position: 'center',
    })
    .toBuffer();

  const meta = await sharp(strip).metadata();
  if (meta.width < PANORAMA_W * 0.95) {
    console.warn('Largura após resize:', meta.width, '(esperado ~', PANORAMA_W, ')');
  }

  for (let i = 0; i < SLICES; i++) {
    const num = String(i + 1).padStart(2, '0');
    const out = path.join(bgDir, `bg-${num}.png`);
    await sharp(strip)
      .extract({
        left: i * OUT_W,
        top: 0,
        width: OUT_W,
        height: Math.min(OUT_H, meta.height || OUT_H),
      })
      .png({ compressionLevel: 9 })
      .toFile(out);
    console.log('Wrote', out);
  }

  const manifest = path.join(bgDir, '..', 'background-manifest.md');
  const attribution = [
    '# Fundos do carrossel (panorama contínuo)',
    '',
    '- **Gerado por:** `stock-panorama-backgrounds.cjs`',
    `- **URL da imagem original:** ${url}`,
    '- **Licença:** [Unsplash License](https://unsplash.com/license) — inclua crédito ao publicar quando possível.',
    `- **Painéis:** bg-01.png … bg-${String(SLICES).padStart(2, '0')}.png — ${SLICES} fatias de ${OUT_W}×${OUT_H}px contíguas.`,
    '- **Continuidade:** mesma cena recortada horizontalmente (carrossel infinito / Patricia Panorama).',
    '',
  ].join('\n');
  fs.writeFileSync(manifest, attribution, 'utf8');
  console.log('Wrote', manifest);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
