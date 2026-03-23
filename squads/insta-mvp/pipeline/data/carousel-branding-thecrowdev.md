# Branding de slides — TheCrowDev · Ética & dados

**Preferência do usuário (LuanPDD, 2026-03-22):** aplicar em **todo carrossel novo** gerado pelo squad **insta-mvp**, salvo instrução explícita em contrário.

## Badge superior (todos os slides)

- Texto fixo: **`Ética & dados`** (como na capa — pill roxa, canto superior esquerdo).
- **Não** variar o texto do badge por slide (ex.: não usar “Stack”, “Debate”, “MVP Flow” no lugar).
- Posição de referência: `top: 32px`, `left: 32px`; estilo alinhado à capa (`badge-header` / `.badge` com `box-shadow` roxo).

## Rodapé (todos os slides)

- Texto da marca: **`TheCrowDev`** apenas.
- **Não** usar no rodapé: `MVP Flow`, `in100tiva`, `LuanPDD` (salvo pedido explícito do usuário).
- Tipografia de referência: ~26px, peso 700, `text-transform: none`, cor branca suave (`rgba(255,255,255,0.58)`).

## Capa (slide 1)

- Pode manter **hint “Deslize”** + seta à direita (só na capa, se aplicável).
- Rodapé e identidade seguem as mesmas regras acima.
- **Corvo (PNG):** preferência **grande** (~**2×** referência ~640px → `max-height` ~**1280px**), **centralizado**; **atrás** do bloco de notícia em **z-index** (`.corvo-layer` abaixo, `.content` acima). Detalhes: [`cover-slide-corvo-layers.md`](cover-slide-corvo-layers.md).

## Copy no miolo / CTA

- Onde antes mencionava **MVP Flow** / **In100tiva** como canal de aprendizado, preferir **TheCrowDev** (ou redação neutra), sem misturar marcas antigas sem autorização.
- **Regra para CTA (último slide):** Em vez de colocar múltiplas ações num slide (ex. "Link na bio + Salva este carrossel + Comenta"), o agente deve **escolher apenas UMA (1) ação** baseada no contexto. Para este momento a preferência do usuário é **apenas focar em pedir comentário** de forma direta na caixa de highlight do último slide.

## Paleta visual

- Manter **paleta roxa / escura** do insta-mvp (`brand-mvp-flow-colors.md` — cores de interface); mudança é só **nomenclatura de marca** no badge fixo e no rodapé.
