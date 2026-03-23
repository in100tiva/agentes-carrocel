---
task: "Criar capa do carrossel"
order: 1
input: |
  - selected-cover-image.md: fundo do slide 1 — Corvo-Surpreso (`references/cover-assets/Corvo-Surpreso.png`) ou caminho indicado pelo usuário (step 07c)
  - carousel-draft: título da capa, micro-copy (tema/número de itens), ângulo, tom, accent keywords
  - pipeline/data/design-system-carousel-cover-USER.md (PRIORIDADE — medidas e padrão do usuário)
  - pipeline/data/reference-capa-padrao-usuario.html (estrutura: safe zone 1:1, swipe hint, badge, headline, subtitle)
  - pipeline/data/design-system-instagram-regras-gerais.md (safe zones, hierarquia, respiro, tipo, cor)
  - pipeline/data/design-system-carousel-instagram.md (seção CAPA)
  - pipeline/data/design-system-carousel-cover.md (medidas, mascote, degradê)
  - pipeline/data/brand-mvp-flow-colors.md
  - pipeline/data/cover-slide-corvo-layers.md (corvo ~1.125×, central, z-index atrás da manchete)
  - pipeline/data/carousel-branding-thecrowdev.md (badge Ética & dados, rodapé TheCrowDev)
  - pipeline/data/mascote-reference-guide.md + pasta mascote-references/
output: |
  - slide-01.html em output/{run_id}/slides/
  - mascote_escolhido (nome do arquivo), justificativa (uma frase)
---

# Criar capa do carrossel

Criar **apenas o slide 1 (capa)** do carrossel de forma **chamativa**, seguindo o sistema de design da capa, as medidas exatas, o mascote como fundo com degradê e a paleta MVP Flow.

## Process

1. **Obrigatório ao iniciar:** Ler **`squads/insta-mvp/output/{run_id}/selected-cover-image.md`**. Se o usuário escolheu **Corvo-Surpreso** ou outro arquivo, copiar para `output/{run_id}/v1/cover-assets/` quando necessário. Para **Corvo-Surpreso** (ou mascote dinâmico se escolhido), seguir **`cover-slide-corvo-layers.md`**: PNG grande (`transform: scale(1.125)` ou `1.5` se o usuário pedir gigante), **centralizado**, em **`.corvo-layer`** com **z-index abaixo** de `.content` (título “por cima” em **camada**, não só embaixo no fluxo); **sombra no texto** para legibilidade. Opcional: Perguntar ao usuário no checkpoint "Quer manter o Corvo Surpreso ou enviar outro PNG sem fundo para eu posicionar do mesmo jeito?". Alternativa legada: `background-image` no `.bg-mascot` — só se o brief pedir expressamente para não usar camadas. Slides 2+ **não** usam este PNG — panorama `bg-NN`. Ler **`instagram-profile-safe-zone-1000.md`** e posicionar **personagem + manchete** no quadrado **1000×1000** (`left: 40px`, `top: 220px`). Ler também **`carousel-branding-thecrowdev.md`**. Depois ler, **nesta ordem:** (1) `design-system-carousel-cover-USER.md` e `reference-capa-padrao-usuario.html`; (2) `design-system-instagram-regras-gerais.md`; (3) `design-system-carousel-instagram.md` (CAPA); (4) `design-system-carousel-cover.md`; (5) `brand-mvp-flow-colors.md`. Não inventar padrões; o padrão do usuário tem prioridade.
2. **Mascote (só se não houver imagem dedicada em selected-cover-image):** Ler `mascote-reference-guide.md` e o carousel-draft (título da capa, ângulo, tom). Escolher um arquivo em `mascote-references/` (ex.: mascote_alegre.png). Registrar `mascote_escolhido` e uma justificativa em uma frase.
3. **Estrutura da capa (seguir reference-capa-padrao-usuario.html):** Safe zone 1:1 (conteúdo crítico dentro; margem 100px das bordas); swipe hint ou nav no topo; área .content com badge (pill, contraste máximo), headline (destaque/highlight opcional), subtitle. Fonte Sora ou par display+funcional; degradê sobre fundo/mascote. Escalar para viewport 1080×1440.
4. **Camadas (em ordem):**
   - Camada 1: fundo sólido (#0a0a0a).
   - Camada 2: **imagem escolhida** (`selected-cover-image.md`: Corvo-Surpreso em `cover-assets/` ou mascote em `mascote-references/`) como `background-image` — `background-size: cover`; posicionar para **não atrapalhar** a leitura do título.
   - Camada 3: **degradê sutil** por cima da imagem (linear-gradient escurecendo onde ficam título e micro-copy) para **garantir legibilidade** dos textos.
   - Camadas 4–7: swipe hint ou nav no topo; conteúdo dentro da safe zone (badge pill, headline, subtitle); opcional anotação manuscrita + seta orgânica; dots bottom-center.
5. **Tipografia na capa (obrigatório):** Preferir **Sora** (como em reference-capa-padrao-usuario.html) com pesos 400, 600, 700, 800; ou a mesma fonte do carrossel (ex.: Permanent Marker) e **alternar** título e subtítulo com sans-serif (Inter). Respeitar design-system-instagram-regras-gerais.md (máx 2 famílias, pesos 900/700/500/400). Nunca título e micro-copy no mesmo estilo.
6. **Medidas:** Aplicar design-system-carousel-cover-USER.md e design-system-carousel-cover.md: logo 3–5%, micro-copy 17–20%, headline 22–23%, badge 40–44%, dots bottom 2–3%. Tipografia: headline 52–60px ou 72–88px, micro-copy 16–18px ou 28–32px, badge 14–16px ou 24–28px. Margem de risco 100px (regras gerais).
7. **Proporções:** Micro-copy ≈ 30–35% do headline; espaço 4–8px; badge máx 16px abaixo do headline; face do mascote nunca acima de 50% do topo; headline 80–90% largura.
8. **Badge pill:** border-radius 999px, padding 6px 16px (ou 16–20px horizontal / 6–8px vertical), cor de máximo contraste (ex.: #E8253C ou roxo MVP Flow). Centralizado em relação ao headline, logo abaixo da última linha.
9. **Anotação manuscrita (opcional):** fonte cursiva, cor de destaque; seta orgânica (curva, 1–1.5px) apontando para mascote ou badge.
10. Gerar um único HTML self-contained (inline CSS, viewport 1080×1440), salvar em `squads/insta-mvp/output/{run_id}/slides/slide-01.html`. Incluir no HTML ou em arquivo anexo: `mascote_escolhido`, justificativa.

## Output Format

- **slide-01.html:** HTML completo, body 1080×1440, com todas as camadas (fundo, mascote, degradê, textos, badge, nav, dots).
- **Metadado:** Em comentário no HTML ou em `output/{run_id}/cover-meta.md`: `mascote_escolhido: "mascote_XXXXX.png"`, `justificativa: "..."`.

## Quality Criteria

- [ ] Estrutura do padrão do usuário: safe zone 1:1 (ou margem 100px), swipe hint ou nav no topo, conteúdo (badge, headline, subtitle) dentro da safe zone.
- [ ] Degradê visível sobre fundo/mascote; textos legíveis (contraste).
- [ ] Mascote (se usado) posicionado sem corte indevido e sem bloquear título/micro-copy.
- [ ] Medidas em % e px respeitadas (design-system-carousel-cover-USER.md); elementos obrigatórios presentes.
- [ ] Paleta MVP Flow (preto, branco, roxo, lavanda); Sora ou par display+funcional conforme referência.

## Veto Conditions

Rejeitar se: (1) capa sem degradê sobre o mascote; (2) título ou micro-copy sobre a face do mascote sem overlay; (3) mascote cortado de forma que perca a expressão; (4) falta de algum elemento obrigatório (badge, nav, micro-copy, título, dots).
