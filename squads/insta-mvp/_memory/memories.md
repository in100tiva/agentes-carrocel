# Memórias do squad — insta-mvp

## 2026-03-22 — Ajustes UX (LuanPDD)

- **Tamanho:** slides passaram a ser **1080×1440 full-bleed** (`upgrade-slides-full-bleed.cjs`); JPEG com `clip` explícito no `render-slides.cjs`.
- **Manchete:** checkpoint **step-07c** + `selected-headline.md`.
- **Fundos:** `stock-panorama-backgrounds.cjs` rotaciona presets em `stock-background-presets.json` quando não há `--url`.

## Carrossel infinito — fundos (Patricia / scripts)

- **Problema resolvido (2026-03-22):** runs sem `v1/backgrounds/bg-NN.png` ficavam só com gradiente — sem “cena” contínua.
- **Processo obrigatório:** após aprovação do conteúdo, executar **step-11a** (ou manualmente) `stock-panorama-backgrounds.cjs` + `apply-carousel-backgrounds.cjs` com o `run_id` e `--slices N` = número de slides.
- **Documentação:** `pipeline/data/carousel-infinite-background.md`.

## Legibilidade gráfico — rótulos sem sobreposição (LuanPDD, 2026-03-22)

- **Regra:** nos SVG de barras horizontais, **barras não podem cobrir** os textos dos eixos (rótulos à esquerda). Posicionar o `rect` logo após o rótulo mais longo + gap curto; valores no gutter à direita. Documentado em `carousel-layout-rules.md` §10.

## Preferência — barras perto dos rótulos (LuanPDD, 2026-03-22)

- **Regra:** além de não sobrepor, **não deixar um “vão” grande** entre o título da linha e o início da barra. Ajustar o **`x` inicial do `rect`** por gráfico (largura estimada do rótulo mais longo + gap 6–12px), para o gráfico ficar **visualmente próximo** dos títulos das barras.

## Capa — Mascote em camada profunda (z-index) (LuanPDD, 2026-03-22)

- **Mascote/Corvo:** visual gigante (com `transform: scale()`, ex. 1.125), **centralização total** na zona 1000×1000.
- **Z-index:** personagem **atrás** da manchete/notícia (profundidade). Texto ganha **padding-top** para sobrepor o corpo/pés.
- **Dinâmico:** Agentes podem perguntar no checkpoint se o usuário quer usar o Corvo-Surpreso ou fornecer outro PNG.
- **Doc:** `pipeline/data/cover-slide-corvo-layers.md`.

## Branding — TheCrowDev + badge «Ética & dados» em todos os slides (LuanPDD, 2026-03-22)

- **Rodapé:** em **todo slide** do JPEG, texto **`TheCrowDev`** (não usar `MVP Flow · in100tiva` no rodapé).
- **Badge superior:** em **todo slide**, pill roxa com texto fixo **`Ética & dados`** (igual à capa; não variar por slide com “Stack”, “Debate”, etc.).
- **Doc:** `pipeline/data/carousel-branding-thecrowdev.md` — **Diana (step 12)** e **Vicente (12b)** devem validar.

## Instagram — zona 1000×1000 no perfil (LuanPDD, 2026-03-22)

- **Regra:** no slide 1, personagens/PNG num quadrado **centralizado 1000×1000** (40px, 220px no 1080×1440); corvo **centro para cima**; texto da notícia **logo abaixo** do jornal, centralizado. Doc: `pipeline/data/instagram-profile-safe-zone-1000.md`.

## Capa — imagem Corvo-Surpreso vs outra (LuanPDD, 2026-03-22)

- **Arquivo global:** `pipeline/data/references/cover-assets/Corvo-Surpreso.png`.
- **Checkpoint step-07c:** sempre perguntar Corvo-Surpreso **ou** outra; `selected-cover-image.md`. Só o slide 1; demais slides = panorama infinito.

## Preferência persistente — gráficos barras horizontais nos slides 2, 4 e 6 (LuanPDD)

- **Regra:** em todo carrossel com **pelo menos 6 slides**, os arquivos **`slide-02.html`**, **`slide-04.html`** e **`slide-06.html`** devem ter **gráfico ilustrativo em SVG** com **barras horizontais** (rótulo à esquerda, barra à direita, valores no **gutter** à direita — nunca sobre o `rect`).
- **Quem implementa:** **Diana Design** (`designer.agent.md`, step **12**, tarefa `render-carousel.md`), lendo obrigatoriamente `carousel-layout-rules.md` §10.
- **Quem valida:** **Vicente Visual** (step **12b**): se faltar gráfico legível em 02/04/06 → **REJECT** com `correction_brief` citando §10.
- **Copy:** **Carla** deve marcar nos slides 2, 4 e 6 do `carousel-draft` que o miolo é **visualização com barras horizontais** (ex.: `photo_direction`), para o layout não vir só como texto corrido.

## Preferência persistente — CTA no último slide (LuanPDD)

- **Regra:** no último slide do carrossel, **não amontoar** vários pedidos (ex. não colocar link na bio + curtir + comentar). Ter **sempre 1 única CTA clara e direta**. A preferência do momento é gerar debate: pedir **apenas para comentar**.
- **Processo:** O agente **Carla Carrossel** (`creator.agent.md`) deve aplicar apenas esta única CTA (comentar) no último slide e no fechamento da legenda.
- Não assumir CTA padrão que mistura todas as ações.

## 2026-03-22 — Run `brasil-dev-ia-dados-publicos-transparencia-caca_2026-03-22`

- **Tema:** Programador brasileiro viraliza com IA / br/acc / dados públicos / ética (transparência vs narrativa política).
- **Notícia escolhida (ranking):** repositório GitHub World-Open-Graph/br-acc (fonte primária).
- **Ângulo:** Provocador (ética). **Tom:** Provocador.
- **Design:** 8 slides HTML → JPEG via Playwright (`v1/render-slides.cjs`); capa com gradiente MVP Flow (mascote PNG não disponível no workspace — usado fallback).
- **Publicação:** não executada — falta `.env` com `INSTAGRAM_ACCESS_TOKEN` / `INSTAGRAM_USER_ID`; instruções em `v1/publish-result.md` e `publish-caption-plain.txt`.
