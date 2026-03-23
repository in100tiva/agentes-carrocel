---
execution: inline
agent: cover-designer
inputFile: squads/insta-mvp/output/{run_id}/carousel-draft.md
outputFile: squads/insta-mvp/output/{run_id}/slides/slide-01.html
---

# Step 11b: Criar capa do carrossel (Carlos Capa)

## Context Loading

- `squads/insta-mvp/output/{run_id}/selected-cover-image.md` — **obrigatório:** escolha do usuário no step 07c — fundo do **slide 1** (`Corvo-Surpreso` em `pipeline/data/references/cover-assets/` ou outro caminho). Só a capa usa esta imagem; slides 2+ usam panorama (`backgrounds/bg-NN`).
- `squads/insta-mvp/output/{run_id}/carousel-draft.md` — título da capa, micro-copy, ângulo, tom, accent keywords (slide 1)
- `squads/insta-mvp/pipeline/data/design-system-carousel-instagram.md` — **obrigatório:** seção CAPA (elementos, hierarquia, camadas)
- `squads/insta-mvp/pipeline/data/design-system-carousel-cover.md` — **obrigatório:** medidas em %, tipografia em px, mascote como fundo, degradê, posicionamento
- `squads/insta-mvp/pipeline/data/brand-mvp-flow-colors.md` — **obrigatório:** paleta MVP Flow
- `squads/insta-mvp/pipeline/data/mascote-reference-guide.md` — escolha do mascote por contexto
- `squads/insta-mvp/pipeline/data/mascote-references/` — imagens do mascote (mascote_estressado.png, mascote_alegre.png, etc.)
- `squads/insta-mvp/agents/cover-designer.agent.md` e tarefa design-cover

## Instructions

1. Carregar `selected-cover-image.md` e o carousel-draft (slide 1: título, tema, ângulo, tom, palavras-chave).
2. Executar agente **Carlos Capa**: tarefa design-cover. O agente deve **ao início** aplicar os padrões e regras de design-system-carousel-instagram.md (CAPA) e design-system-carousel-cover.md (medidas, degradê). Criar capa **chamativa** com:
   - **Fundo do slide 1** conforme `selected-cover-image.md`: copiar o PNG para `output/{run_id}/v1/cover-assets/` se necessário e referenciar em `slide-01.html` (ex.: `../cover-assets/Corvo-Surpreso.png`). **Ou**, se o usuário escolheu outra imagem, usar o caminho indicado. **Não** usar `bg-01.png` do panorama na capa quando a escolha for imagem dedicada de capa.
   - Se **não** houver imagem dedicada e o brief pedir mascote clássico: mascote de `mascote-references/` (via guia de mascotes).
   - Degradê sutil por cima da **imagem de fundo** (Corvo-Surpreso, outra PNG ou mascote) para legibilidade dos textos.
   - Imagem de fundo posicionada (`background-size: cover` etc.) para **não atrapalhar** a leitura na área do título.
   - Todos os elementos obrigatórios: badge pill, nav →, micro-copy, título, badge secundário, anotação manuscrita, dots.
3. Salvar `slide-01.html` em `squads/insta-mvp/output/{run_id}/slides/slide-01.html`.
4. Salvar metadado (mascote_escolhido, justificativa) em `output/{run_id}/cover-meta.md` ou em comentário no HTML.
5. Entregar o path do HTML e do metadado. O step 12 (Diana) usará esse slide-01 e gerará apenas os slides 2..N; em seguida renderizará todos para JPEG.

## Output Format

- `output/{run_id}/slides/slide-01.html` — HTML self-contained, 1080×1440.
- `output/{run_id}/cover-meta.md` (opcional) — mascote_escolhido, justificativa.

## Veto Conditions

- Falha se slide-01.html não for gerado ou não contiver degradê sobre o mascote.
- Falha se o título ou micro-copy ficar ilegível por falta de overlay.

## Quality Criteria

- [ ] Capa segue medidas e hierarquia do design-system-carousel-cover.md.
- [ ] Fundo da capa conforme `selected-cover-image.md` + degradê; texto legível.
