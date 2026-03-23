# Identidade visual — MVP Flow (insta-mvp)

**Uso obrigatório no step 12 (Diana Design):** todos os carrosséis do squad insta-mvp devem usar esta paleta. Não usar laranja, azul ou outras cores de acento que não sejam roxo/lavanda dentro desta identidade.

**Layout estrutural (chrome, moldura, setas):** ver [`carousel-layout-rules.md`](carousel-layout-rules.md) — traço superior full-bleed, sem `.nav-pill`, fundos contínuos, etc. **Composição visual (título + gráfico + legenda):** ver [`carousel-visual-reference.md`](carousel-visual-reference.md).

## Paleta principal

| Uso | Cor | Hex | Exemplo |
|-----|-----|-----|---------|
| Fundo escuro | Preto | `#000000` ou `#0a0a0a` | Slides de capa, slides de contraste |
| Texto em fundo escuro | Branco | `#FFFFFF` | Títulos e corpo em slides escuros |
| Acento / CTAs / destaques | Roxo | `#8B5CF6` ou `#7C3AED` | Palavras-chave, botões, barras, frases de destaque |
| Acento claro (opcional) | Lavanda | `#A78BFA` | Highlights suaves, bordas, glow |
| Fundo claro | Branco / off-white | `#FFFFFF` ou `#FAFAFA` | Slides claros |
| Texto em fundo claro | Preto / cinza escuro | `#0a0a0a` ou `#18181B` | Títulos e corpo em slides claros |
| Texto secundário | Cinza | `#71717A` ou `#A1A1AA` | Subtítulos, apoio |

## Complementares

- **Overlay / grid sutil:** roxo muito escuro `#1E1B2E`, `#2D2A3E`.
- **Borda / glow em botões:** roxo claro `#A78BFA` ou `#C4B5FD`.
- **Evitar:** laranja, azul, verde ou amarelo como cor principal; usar apenas branco, preto, roxo e cinzas como acima.

## Aplicação nos slides

- **Rodapé de marca (barra inferior):** gradiente escuro + borda roxa (como nos HTMLs atuais); texto **`TheCrowDev`** — ver [`carousel-branding-thecrowdev.md`](carousel-branding-thecrowdev.md). Badge superior em todo slide: **`Ética & dados`**.
- **Capa:** fundo preto; título branco; frase de gancho em roxo.
- **Slides claros:** fundo `#FAFAFA`; título preto/cinza escuro; acentos em roxo.
- **Slides de destaque (acento):** fundo roxo `#7C3AED` ou `#8B5CF6`; texto branco.
- **Caixas de CTA ou pergunta:** fundo roxo; texto branco; cantos arredondados.

Referência visual: site MVP Flow (hero escuro, texto branco, "produtos reais" e termos em roxo, botões roxo com texto branco).

---

## Tipografia e destaques (palavras-chave)

- **Títulos / headlines:** fonte sem serifa, forte e de alto impacto (**black sans-serif**). Usar Google Font **Montserrat** (peso 900 / Black) ou **Inter** (peso 900) para títulos e frases de impacto, criando uma combinação limpa com o corpo do texto.
- **Corpo:** manter fonte legível (ex.: Inter) para blocos longos, preferencialmente peso 400 ou 500.
- **Palavras-chave — riscos:** aplicar **sublinhado** “hand-drawn” em 1–3 termos por slide: `border-bottom: 3px solid` (cor de acento); leve `padding-bottom`; opcional `text-decoration: underline; text-decoration-style: wavy` onde suportado.
- **Palavras-chave — círculos:** em 1 palavra ou expressão forte por slide (ex.: CTA ou termo central), envolver em **oval/círculo** com borda na cor de acento: `display: inline-block; border: 2px solid; border-radius: 999px; padding: 4px 14px`.
- Manter hierarquia: uma palavra “no círculo” por slide; o resto dos destaques com risco.
