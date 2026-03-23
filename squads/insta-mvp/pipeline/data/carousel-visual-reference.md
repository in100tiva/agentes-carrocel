# Referência visual — slide “título + gráfico + legenda” (insta-mvp)

Documento para **Diana Design** e revisores de carrossel. Descreve o **padrão de hierarquia** que o produto quer em slides **mais visuais e menos textuais**, em especial nos slides **2, 4 e 6** (onde entra o gráfico de barras).

## Arquivo de referência (PNG)

- **Caminho:** [`references/carousel-visual-reference-creators-platforms.png`](references/carousel-visual-reference-creators-platforms.png)  
- **Uso:** inspiração de **composição** (o que é grande, o que é pequeno, onde fica a legenda). **Não** copiar cores laranja/amarelo nem fundo branco — a identidade do MVP Flow continua escura e roxa ([`brand-mvp-flow-colors.md`](brand-mvp-flow-colors.md)).

## O que a referência ensina (estrutura)

1. **Título no topo** — Uma pergunta ou frase forte, **centralizada** (ou alinhada de forma estável), com **1 destaque** em cor de acento (na referência: laranja; no MVP Flow: lavanda / roxo `#8B5CF6` / `#A78BFA`).  
2. **Gráfico como herói** — **Barras horizontais** (esquerda → direita): **coluna só para rótulos** (texto), depois as barras **coladas ao fim do rótulo** (gap 6–12px) — **nunca** o `rect` sobre o texto, **nem** um vão enorme entre rótulo e barra. **Valores à direita** numa **coluna reservada** — ver `carousel-layout-rules.md` §10.  
3. **Pouco texto no miolo** — Evitar parágrafo longo; se precisar de contexto, **1–2 linhas** curtas ou só o gráfico + título.  
4. **Takeaway opcional** — Uma linha curta abaixo do gráfico (na referência: segunda frase com destaque). Pode ser `.highlight-box` ou linha única, sem competir com o gráfico.  
5. **Legenda / rodapé informativo** — Na referência: “Fonte: …” à esquerda e autor à direita. No MVP Flow:  
   - legenda do gráfico já em `.chart-caption` (ex.: “ilustrativo”, “conceitual”);  
   - **fonte real** do dado (se houver) em texto pequeno no rodapé ou sob o gráfico;  
   - manter **MVP Flow · in100tiva** no rodapé, **sem** seta decorativa — conforme [`carousel-layout-rules.md`](carousel-layout-rules.md).

## Tradução para o tema MVP Flow (escuro)

| Referência (claro) | MVP Flow (escuro) |
|--------------------|-------------------|
| Fundo branco | Fundo foto + overlay + `.card` escuro |
| Laranja nos destaques | Roxo / lavanda da marca |
| Barras horizontais laranja | Barras verticais ou horizontais em SVG roxo (`#8b5cf6`, `#6d28d9`) |
| Botão “Arraste para conferir” | Opcional: hint curto na capa (“Deslize”); **sem** seta no rodapé |

## Princípio único

> **Slides “de dados” (2, 4, 6):** o olhar deve ir primeiro para o **título**, depois para o **gráfico**; texto corrido é mínimo; **legenda** (fonte / “ilustrativo”) fecha a leitura.

## Checklist para o agente (slides 2, 4, 6)

- [ ] Título curto e com **um** destaque de cor da marca.  
- [ ] Gráfico ocupa **área visível relevante** (não miniaturizado demais).  
- [ ] Corpo de texto **≤ ~3 linhas** no slide “visual” ou substituído por takeaway único.  
- [ ] Legenda explícita se o gráfico for **ilustrativo** (não é dado auditado).  
- [ ] Hierarquia alinhada a este documento + [`carousel-layout-rules.md`](carousel-layout-rules.md).  
- [ ] Rótulos do gráfico **legíveis**: barras **não** sobrepõem os textos à esquerda (coluna de rótulos + início da barra separados).  
- [ ] Título e corpo dos slides internos **centralizados** (exceto texto em caixas — ver §11 em [`carousel-layout-rules.md`](carousel-layout-rules.md)).
