# Zona segura Instagram — quadrado 1000×1000 (capa e personagens)

## Objetivo

No **perfil** do Instagram, posts verticais (ex.: 1080×1440) aparecem em **grade** com **recorte quadrado** central. Conteúdo crítico (personagem/mascote, rosto, jornal, manchete) **não pode** ficar nos cantos que somem no crop.

## Regra (insta-mvp)

No canvas **1080×1440 px**, considerar um **quadrado imaginário centralizado de 1000×1000 px**:

| Posição | Valor |
|--------|--------|
| `left` | `(1080 − 1000) / 2` = **40 px** |
| `top` | `(1440 − 1000) / 2` = **220 px** |
| Largura / altura | **1000 px** |

- **Personagens** (PNG, mascote, ilustração) devem estar **contidos** nessa área, preferencialmente **centralizados na parte superior** do quadrado quando o texto da notícia fica **logo abaixo** do elemento visual (ex.: jornal).
- **Manchete / micro / sub** da capa: **centralizados**, **logo abaixo** do foco visual (jornal), ainda dentro do 1000×1000 quando possível.
- **Carlos Capa** e **Diana** ao montar `slide-01.html`: usar um wrapper (ex.: `.ig-profile-safe`) com essas medidas e `position: absolute` para alinhar corvo + copy.
- **Corvo grande + título por cima (camadas):** quando o mascote estiver **atrás** da manchete (z-index), ver **`cover-slide-corvo-layers.md`** — não confundir “por baixo do título” em **profundidade** (camada) com ordem no **fluxo** do HTML.

## Implementação HTML (referência)

```css
.ig-profile-safe {
  position: absolute;
  left: 40px;
  top: 220px;
  width: 1000px;
  height: 1000px;
  /* flex column: personagem → texto */
}
```

Opcional: outline 1px dashed em modo debug (não em produção).

## Relação com safe zone 100px

A regra geral de **100px** das bordas (design-system-instagram-regras-gerais) continua válida para **elementos de UI**; a **1000×1000** é adicional, específica para **grade do perfil** e **personagens**.
