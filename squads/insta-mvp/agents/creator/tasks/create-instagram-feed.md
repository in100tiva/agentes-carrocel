---
task: "Criar carrossel Instagram Feed"
order: 2
input: |
  - noticia_escolhida: da seleção do usuário
  - angulo_escolhido: label + hook_suggestion do checkpoint
  - tone: tom de voice escolhido (pipeline/data/tone-of-voice.md)
  - cta_escolhida: de selected-cta.md (step 07b) — salvar post, seguir conta, comentar ou combinado; obrigatório para último slide + fechamento da legenda
  - manchete_capa: de selected-headline.md (step 07c) — headline/subheadline/micro linha do slide 1 definidos pelo usuário (não substituir por IA sem checkpoint)
  - caption_brief: do Sérgio (step-04) — primeiros 125, keywords, triangulação, hashtag set
output: |
  - format: nome do formato (Editorial, Listicle, Tutorial, etc.)
  - slides: array de slides (title, headline, supporting_text, photo_direction, background, accent_keywords)
  - caption_draft: texto da legenda (gancho + corpo + pergunta/CTA) — sem hashtags (Sérgio adiciona no step-09)
---

# Criar carrossel Instagram Feed

Produzir o copy completo do carrossel (formato + slides) e o rascunho da legenda, usando o ângulo e o tom escolhidos e o caption brief do Sérgio. Legenda será finalizada (hashtags e ajustes SEO) pelo Sérgio no step-09; Renata revisa tudo no step-10.

## Process

1. Ler notícia, ângulo, tom e caption_brief (triangulação, sugestão primeiros 125, hashtag set).
2. Escolher formato do carrossel (Editorial, Listicle, Tutorial, Mito vs Realidade, etc.) conforme instagram-feed best practices.
3. Escrever cada slide: headline + supporting text (40–80 palavras), photo_direction, background (light/dark/accent), accent_keywords; capa forte, **último slide com gancho + APENAS 1 (UMA) CTA EXPLÍCITA E DIRETA conforme selected-cta.md** (salvar OU seguir OU comentar, sem misturar múltiplas CTAs).
4. Escrever caption_draft: primeiros 125 caracteres como gancho, corpo alinhado ao carrossel, **fechamento com a MESMA ÚNICA CTA do último slide**; incluir triangulação natural (LuanPDD/In100tiva/MVP Flow). Não incluir bloco de hashtags (Sérgio adiciona).
5. Entregar no formato definido em Output Format.

## Output Format

Ver pipeline/data e _opensquad/core/best-practices/instagram-feed.md (seção Output Format). Resumo: format, slides[], caption_draft (texto só).

## Quality Criteria

- [ ] 8–10 slides (ou 6–10 conforme formato); 40–80 palavras por slide.
- [ ] Capa com título forte; último slide com CTA específico.
- [ ] caption_draft com gancho nos primeiros 125 caracteres e fim com pergunta/CTA.
- [ ] Triangulação presente sem exagero.

## Veto Conditions

Rejeitar se: (1) menos de 40 palavras em algum slide (salvo pedido); (2) legenda sem gancho nos 125 primeiros caracteres; (3) formato não reconhecível.
