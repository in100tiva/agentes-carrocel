---
task: "Especificar e gerar painéis de fundo contínuos"
order: 1
input: |
  - tema do carrossel (título, tom)
  - N = número de slides
output: |
  - backgrounds: bg-01.png … bg-0N.png em output/{run_id}/v1/backgrounds/
  - manifest: continuidade e ordem dos painéis
---

# Painéis de fundo contínuos (carrossel infinito)

## Objetivo

Cada slide é um **recorte vertical (3:4)** de uma **mesma narrativa visual** que se desliza ao passar o swipe: a borda direita do slide *i* deve **combinar** com a borda esquerda do slide *i+1* (cor, direção de luz, textura).

## Processo

1. Definir **uma direção** (ex.: luz da esquerda → direita; fluxo horizontal de partículas).
2. Para cada painel de `1` a `N`, descrever o segmento **posição na cena** (esquerda / centro-esquerda / centro / … / direita).
3. Gerar ou exportar imagens **1080×1440** (ou proporção equivalente) com paleta MVP Flow: `#0a0a0a`, `#7C3AED`, `#8B5CF6`, `#A78BFA`.
4. Salvar em `squads/insta-mvp/output/{run_id}/v1/backgrounds/bg-NN.png` (zero-padding de 2 dígitos).
5. Escrever `background-manifest.md` no mesmo run com: ordem, tema, nota de continuidade.

## Output Format

```yaml
backgrounds:
  - path: squads/insta-mvp/output/{run_id}/v1/backgrounds/bg-01.png
    segment: "entrada da cena — esquerda"
  # ... até bg-0N
continuity_note: "Uma frase sobre o fio condutor visual."
```

## Quality Criteria

- [ ] N arquivos; nomes corretos.
- [ ] Nenhum texto ou logo na imagem.
- [ ] Transição visual plausível entre painéis adjacentes.
