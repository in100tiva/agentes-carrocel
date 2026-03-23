---
type: checkpoint
outputFile: squads/insta-mvp/output/selected-cta.md
---

# Step 07b: Escolha da CTA (último slide + fechamento da legenda)

## Contexto

Antes da Carla escrever o carrossel (step 08), o usuário define **qual chamada para ação** deve aparecer com **gancho forte** no **último slide** e, de forma coerente, no **fechamento da legenda** (salvar, seguir a conta, comentar — ou combinação).

**Agente responsável por aplicar:** **Carla Carrossel** (`creator`) — último slide + `caption_draft`; Sérgio SEO pode reforçar na legenda final (step 09).

## Instruções

1. **Perguntar sempre** ao usuário (não assumir padrão silencioso): qual CTA ele quer neste post?
2. Apresentar opções numeradas (pode escolher **uma** ou **combinar** de forma explícita):

   1. **Salvar** o post — “Salva pra revisar…” / material de referência  
   2. **Seguir** a conta — convite direto a seguir o perfil (bio, conteúdo recorrente)  
   3. **Comentar** — pergunta ou convite à discussão (engajamento nos comentários)  
   4. **Combinar** — ex.: salvar + comentar; seguir + salvar (pedir que descreva a prioridade)

3. Se o usuário quiser **outra CTA** (ex.: “compartilhar no Direct”, “link na bio”), registrar no campo **notas**.

4. Registrar a escolha em `squads/insta-mvp/output/{run_id}/selected-cta.md` (o Runner aplica o path com `run_id`).

## Formato do arquivo gravado (modelo)

```markdown
# Selected CTA

**Primary:** salvar | seguir | comentar | combinado
**Details:** (frase ou combinação escolhida pelo usuário)
**Notes:** (opcional — outras instruções)
**Date:** YYYY-MM-DD
```

## Output

Arquivo `selected-cta.md` disponível para o step 08 (Carla). Runner segue para `step-08-create-carousel`.
