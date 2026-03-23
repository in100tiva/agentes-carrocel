# Opensquad Preferences

- **User Name:** LuanPDD
- **Output Language:** Português (Brasil)
- **IDEs:** antigravity
- **Date Format:** YYYY-MM-DD

## Carrossel Instagram (insta-mvp / TheCrowDev)

- **Marca nos slides (JPEG):** rodapé **sempre `TheCrowDev`**; badge superior **sempre `Ética & dados`** em **todos** os slides (incluindo 2–N), não só na capa. Ver `squads/insta-mvp/pipeline/data/carousel-branding-thecrowdev.md`.

- Nos slides **após a capa**, preferir **título e texto corrido centralizados**; texto dentro de **caixas** (destaque, CTA, fontes) permanece **alinhado à esquerda**.
- **Slides 2, 4 e 6 (carrosséis com ≥6 slides):** **sempre** incluir **SVG de barras horizontais** (`.chart-block` + `<svg class="bar-chart">`), não apenas texto — tema alinhado ao slide; ver §10 de `squads/insta-mvp/pipeline/data/carousel-layout-rules.md` e `carousel-visual-reference.md`. Implementação: **Diana (step 12)**; checagem: **Vicente (step 12b)**.
- Em gráficos de **barras horizontais** (slides 2, 4, 6): (1) **não** sobrepor legendas de **valor** ao preenchimento da barra — gutter à direita; (2) **não** deixar a **barra** cobrir os **rótulos** — mas **minimizar o vão** entre o fim do texto do rótulo e o início do `rect` (barras **perto** dos títulos): calcular `x` do `rect` = largura do rótulo mais longo daquele gráfico + gap pequeno (≈6–12px), **sem** faixa vazia grande no meio; (3) evitar `x` fixo “largo demais” (ex. 132px) quando os rótulos são curtos (ver §10 de `carousel-layout-rules.md`).
- **Último slide — CTA:** o pipeline focar em **apenas 1 única ação clara** para não confundir o leitor. Preferência atual é direcionar foco para **comentar**. O agente **Carla Carrossel** deve aplicar apenas essa CTA no último slide e legenda. Não colocar "salvar + curtir + comentar + link na bio" num só lugar.
- **Manchete da capa:** escolha do usuário no checkpoint **step-07c** (`selected-headline.md`); não sobrescrever só com sugestão do modelo.
- **Imagem de fundo só da capa (slide 1):** no **step-07c**, **sempre perguntar** se o fundo do slide 1 é **`Corvo-Surpreso`** (`squads/insta-mvp/pipeline/data/references/cover-assets/Corvo-Surpreso.png`) **ou outra imagem**; gravar em `selected-cover-image.md`. **Carlos Capa** (step 11b) aplica só no `slide-01.html`; slides **2+** seguem o carrossel infinito (`bg-NN`).
- **Grade do perfil Instagram:** personagens e hierarquia principal da capa devem caber num **quadrado central 1000×1000 px** no canvas 1080×1440 (`left: 40px`, `top: 220px`); personagem **central para cima**, manchete **centralizada logo abaixo** do elemento visual (ex.: jornal). Ver [`squads/insta-mvp/pipeline/data/instagram-profile-safe-zone-1000.md`](squads/insta-mvp/pipeline/data/instagram-profile-safe-zone-1000.md).
- **Capa — personagem/corvo:** PNG **gigante** (com `transform: scale()`), **centralizado total**; **por baixo do título em z-index** (camadas profundas), mantendo o **bloco de notícia** sobrepondo-o. A escolha do PNG pode ser dinâmica (corvo ou outro mandado pelo usuário) — ver [`squads/insta-mvp/pipeline/data/cover-slide-corvo-layers.md`](squads/insta-mvp/pipeline/data/cover-slide-corvo-layers.md).
- **JPEG do carrossel:** slides HTML em **1080×1440** full-bleed (sem mockup centralizado 390px); ver `upgrade-slides-full-bleed.cjs` e step **11a**.
- **Fundos panorama:** rotacionar presets (`stock-background-presets.json`) ou passar `--url`; não usar sempre a mesma imagem stock.
