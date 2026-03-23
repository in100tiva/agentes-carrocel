---
execution: inline
agent: carousel-background
inputFile: squads/insta-mvp/output/carousel-draft.md
---

# Step 11a: Fundos do carrossel infinito (Patricia Panorama)

## Contexto

Após aprovação do conteúdo (step 11) e **antes** da capa dedicada (11b) e do render (12), o squad deve **gerar e aplicar** os painéis `bg-01.png` … `bg-0N.png` para o efeito de **panorama contínuo** (swipe infinito). Ver [`pipeline/data/carousel-infinite-background.md`](../../data/carousel-infinite-background.md).

## Instruções

1. **Contar** o número de slides no `carousel-draft.md` do run atual (N).
2. **Gerar** os PNGs a partir de uma imagem ultra-wide (stock) com o script na raiz do squad:
   ```bash
   cd squads/insta-mvp
   node stock-panorama-backgrounds.cjs <run_id> --slices N --height 1440
   ```
   Opcional: `--url <URL Unsplash/Pexels>` alinhada ao tema do tema.
3. **Layout Instagram (1080×1440 tela cheia):** após os HTMLs existirem, garantir full-bleed (sem “card” minúsculo no centro):
   ```bash
   node upgrade-slides-full-bleed.cjs <run_id>
   ```
4. **Aplicar** PNGs nos HTMLs em `output/<run_id>/v1/slides/`:
   ```bash
   node apply-carousel-backgrounds.cjs <run_id>
   ```
5. **Confirmar** `v1/backgrounds/bg-01.png` … `bg-0N.png` e `v1/background-manifest.md`.
6. **Agente Patricia Panorama:** revisar continuidade; ajustar `background-manifest.md` com nota de continuidade se necessário.

**Ordem recomendada:** `stock-panorama` → `upgrade-slides-full-bleed` → `apply-carousel-backgrounds` → render (step 12). O script de stock **rotaciona** automaticamente entre presets em `pipeline/data/stock-background-presets.json` quando **não** há `--url`.

## Veto Conditions

- Falha se N ≠ número de arquivos `slide-NN.html` ou se faltar algum `bg-NN.png`.

## Quality Criteria

- [ ] Cada slide referencia `../backgrounds/bg-NN.png` (primeira camada) + gradiente de legibilidade.
- [ ] CSS `.bg-mascot` sem expansão horizontal negativa (`left: 0; right: 0`).
