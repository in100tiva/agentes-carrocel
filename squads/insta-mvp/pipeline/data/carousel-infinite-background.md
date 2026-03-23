# Carrossel infinito — fundos contínuos (insta-mvp)

## Conceito

Cada lâmina do carrossel é um **recorte** da mesma “cena” abstrata. Ao deslizar, o usuário percebe **continuidade** do fundo (luz, gradiente, textura), não slides isolados.

## Arquivos

- **Pasta:** `squads/insta-mvp/output/{run_id}/v1/backgrounds/`
- **Nomes:** `bg-01.png` … `bg-0N.png` (N = número de slides do `carousel-draft.md`)
- **Agente responsável:** [Patricia Panorama](../../agents/carousel-background.agent.md) — gera ou especifica os painéis.

### Variar o visual (não repetir sempre o mesmo stock)

- O script `stock-panorama-backgrounds.cjs` escolhe **automaticamente** uma URL entre as de [`stock-background-presets.json`](stock-background-presets.json) com base no **nome da pasta do run** (`run_id`), para cada execução ter tendência a um fundo diferente.
- Para **forçar** uma imagem: `--url "https://..."`.
- Para **outro estilo** sem panorama: documente no `background-manifest.md` e use fundos únicos por slide (modo avançado, fora do escopo padrão).

## HTML (Diana Design)

- Caminho relativo a partir de `v1/slides/slide-NN.html`: `../backgrounds/bg-NN.png`
- Camada `.bg-mascot` (ou `.bg-panel`) usa:
  - `background-image: url('../backgrounds/bg-NN.png'), linear-gradient(...)` — gradiente por cima para legibilidade do texto
  - Evitar `blur` excessivo no filtro da foto de fundo quando a arte já é abstrata (blur 0–4px se necessário)

### CSS obrigatório para continuidade panorâmica

Para que a borda direita do slide *i* coincida com a borda esquerda do slide *i+1* ao deslizar no Instagram:

```css
.bg-mascot {
  position: absolute;
  top: -1%;          /* buffer vertical mínimo anti-artefato */
  bottom: -1%;
  left: 0;           /* SEM expansão horizontal — preserva bordas do panorama */
  right: 0;
  background-size: cover;
  background-position: center center;  /* MESMO valor em todos os slides */
  filter: blur(1px) brightness(0.70) saturate(1.02);
  /* NÃO usar transform: scale() — altera zoom e quebra alinhamento entre slides */
}
```

**Regras:**
- **`left: 0; right: 0`** — nunca usar `inset: -14%` ou qualquer valor negativo horizontal; isso corta as bordas e mata a continuidade.
- **`background-position` uniforme** — o mesmo valor em todos os slides (ex.: `center center`); posições diferentes por slide deslocam o panorama verticalmente.
- **Sem `transform: scale()`** — zoom diferente por slide faz a cena "pular" no swipe.

## Stock gratuito (Unsplash / Pexels) + fatias contínuas

Para um fundo **mesma cena de ponta a ponta** sem depender de geração local:

1. Escolher uma foto **paisagem ou ultra-wide** (baixar em largura ≥ `N × 1080 px` ou usar parâmetros `w=` altos na URL).
2. Rodar no squad: `node stock-panorama-backgrounds.cjs [run_id] [--url <URL>]` — gera `bg-01.png` … `bg-0N.png` (1080×1350) a partir de um único JPEG.
3. Registrar em `v1/background-manifest.md` a URL e a licença (Unsplash License / Pexels License). Crédito ao fotógrafo ao publicar.

## Alternativa: um único panorama no CSS

Se houver **uma** imagem ultra-wide (ex.: `panorama.png` com largura = N × 1080):

- `background-size: 100% N00%` ou largura fixa em px
- `background-position: -((slideIndex-1) * 1080)px 0` em cada slide

Documentar no `background-manifest.md` do run.

## Paleta

Sempre alinhar a [`brand-mvp-flow-colors.md`](brand-mvp-flow-colors.md).
