---
type: checkpoint
outputFile: squads/insta-mvp/output/selected-headline.md
---

# Step 07c: Manchete da capa (slide 1)

## Contexto

O **usuário escolhe o texto da capa** (manchete principal) e, opcionalmente, sublinha / micro-linha — antes da Carla escrever o `carousel-draft` (step 08). Isso evita manchete “genérica” só do modelo.

**Também neste checkpoint:** o **fundo visual só do slide 1** — os demais slides seguem o **carrossel infinito** (fundos `bg-02`…`bg-N` no step 11a).

**Agente que aplica texto:** **Carla Carrossel** — slide 1 do carrossel e coerência com o gancho da legenda.

## Instruções

1. Perguntar ao usuário:
   - **Manchete (headline)** — título forte da capa (pode ter `<br />` se quiser quebra de linha; indicar na resposta).
   - **Subheadline** (opcional) — linha menor abaixo do título.
   - **Micro linha** (opcional) — keywords acima do título (ex.: `br/acc · bases públicas · IA`).
   - **Imagem de fundo da capa (slide 1 apenas):** perguntar **sempre** se deseja usar a referência padrão **`Corvo-Surpreso`** (`squads/insta-mvp/pipeline/data/references/cover-assets/Corvo-Surpreso.png`) **ou outra imagem** (caminho no projeto / arquivo que o usuário indicar). **Não** assumir sem pergunta. Registrar em `selected-cover-image.md`.

2. Gravar em `squads/insta-mvp/output/{run_id}/selected-headline.md` (Runner injeta `run_id`).

3. Gravar em `squads/insta-mvp/output/{run_id}/selected-cover-image.md` — formato sugerido:

```markdown
# Imagem de fundo da capa (slide 1)

**Escolha:** Corvo-Surpreso | outra (descrever)

**Arquivo ou caminho:** ...

**Date:** YYYY-MM-DD
```

4. O step 08 **deve** ler `selected-headline.md` e usar **exatamente** a manchete aprovada no slide 1 (e refletir no `carousel-draft.md`).

5. O step **11b (Carlos Capa)** e a renderização da capa **devem** ler `selected-cover-image.md` e aplicar o fundo escolhido **somente** em `slide-01.html`. Slides 2+ **não** usam esta imagem (continuam com `backgrounds/bg-NN.png` do panorama).

## Formato sugerido do arquivo

```markdown
# Manchete da capa

**Headline:** (texto da manchete)
**Subheadline:** (opcional)
**Micro linha:** (opcional)
**Date:** YYYY-MM-DD
```

## Output

Runner segue para `step-08-create-carousel`.

## Quality Criteria

- [ ] `selected-headline.md` preenchido.
- [ ] `selected-cover-image.md` preenchido (pergunta sobre Corvo-Surpreso vs outra feita e registrada).
