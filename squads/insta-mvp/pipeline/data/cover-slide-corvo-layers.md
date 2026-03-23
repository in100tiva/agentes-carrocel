# Capa (slide 1) — Mascote em camadas (z-index) · TheCrowDev

**Preferência do usuário (LuanPDD, 2026-03-22):** aplicar nas próximas capas **`slide-01.html`** geradas pelo squad **insta-mvp**, salvo brief em contrário.

## Intenção visual

- O PNG do mascote (**Corvo-Surpreso** ou outro fornecido pelo usuário) deve aparecer **gigante** (referência: crescendo livremente numa área de **2200px** com `transform: scale(1.125)` ou semelhante).
- **Centralização total** do mascote na `.corvo-layer` (top calc(50% - 126px), left 50%, translate -50%).
- **Camadas (z-index), não layout:** “por baixo do título” significa **o mascote fica atrás do bloco de notícia** — o **título/manchete** e o texto têm **z-index maior** que o mascote, podendo **sobrepor os pés ou o corpo** do PNG intencionalmente.
- O **bloco da notícia** (micro + headline + sub) **desce um pouco** (usar **`padding-top`** ex.: ~620px) no `.content`.
- **Dinâmico:** O Agente de Capa deve, quando possível, perguntar ao usuário: *"Quer manter o Corvo Surpreso nesta capa ou prefere mandar um arquivo PNG sem fundo diferente para eu posicionar do mesmo jeito gigante no fundo?"*

## Estrutura HTML recomendada

```html
<div class="ig-profile-safe">
  <div class="corvo-layer" aria-hidden="true">
    <img class="corvo-hero" src="..." alt="" />
  </div>
  <div class="content">
    <!-- micro, headline, sub — z-index acima do corvo -->
  </div>
</div>
```

## CSS (referência)

- **`.corvo-layer`:** `position: absolute; left: 50%; top: calc(50% - 126px); transform: translate(-50%, -50%); width: 2200px; height: 2200px;` (maior que a safe zone para o mascote crescer livremente); `z-index: 1`; `display: flex; justify-content: center; align-items: center`; `pointer-events: none`.
- **`.corvo-hero`:** `max-width: 100%; max-height: 100%;` (ou referências gigantes); `width: auto`; `object-fit: contain`; `object-position: center center`; `transform: scale(1.125);` sombra leve opcional.
- **`.content`:** `position: relative; z-index: 15` (ou superior ao mascote); **`padding-top`** fixo (~**620px**) para o texto sobrepor os pés/corpo do mascote, mantendo-se na metade inferior do quadrado (ajustar fino por run).
- **Hierarquia z-index sugerida:** fundo `0` → corvo/mascote `1` → conteúdo texto `15` → header pills `26` → footer `20`.

## Relação com `instagram-profile-safe-zone-1000.md`

- Continua valendo o quadrado **1000×1000** (`left: 40px`, `top: 220px`) para **grade do perfil**.
- Com mascote maior e em camada, parte do PNG pode **sair** da safe zone ou ser **coberta** pelo título — isso é **aceitável** quando o brief pede impacto visual e leitura do texto prevalece (z-index).

## Quem aplica

- **Carlos Capa** / **cover-designer** no `slide-01.html`; **Diana** se refizer a capa no step 12.
