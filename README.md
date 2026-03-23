# Opensquad

Crie e orquestre squads de agentes de IA que trabalham juntos — direto do seu IDE. 

## 🚀 Como usar no Cursor

1. **Abra esta pasta** no Cursor (File → Open Folder → pasta do opensquad).
2. **Abra o Chat do Cursor** (Ctrl+L ou ícone de chat).
3. **Digite na caixa de mensagem:** `/opensquad` ou `/opensquad menu`. O assistente passará a seguir as regras do framework.

---

## 🛠️ Squads Disponíveis: O caso do `insta-mvp`

O projeto já conta com o squad **insta-mvp**, um pipeline avançado de criação de carrosséis para o Instagram que ilustra o poder do Opensquad.

### 🤖 Agentes do `insta-mvp` e suas Responsabilidades

O processo de criação flui através de uma equipe especializada:

1. **🔍 Pedro Pesquisa (`researcher`)**: Faz a curadoria de notícias e tendências, buscando fontes confiáveis e entregando um ranking de temas.
2. **📈 Sérgio SEO (`seo`)**: Estrutura as legendas com foco em algoritmo, define palavras-chave e faz a rotação estratégica do mapa de hashtags.
3. **✍️ Carla Carrossel (`creator`)**: Redige o copy do carrossel (títulos e conteúdo dos slides) com foco em retenção e escreve o gancho da legenda.
4. **✅ Renata Revisão (`reviewer`)**: Analisa criticamente o copy e a legenda gerados, exigindo correções se não atingirem os critérios de qualidade.
5. **🖼️ Carlos Capa (`cover-designer`)**: Especialista focado 100% no **Slide 1**. Ele aplica as *safe zones*, posiciona o mascote/personagem escolhido e garante um visual de alto impacto para "parar o scroll".
6. **🌊 Patricia Panorama (`carousel-background`)**: Define e gera os fundos contínuos dos slides 2 em diante, garantindo o efeito de panorama infinito no swipe.
7. **🎨 Diana Design (`designer`)**: A desenvolvedora visual. Transforma o copy e os fundos em arquivos HTML/CSS individuais e renderiza as imagens finais (1080x1440).
8. **👁️ Vicente Visual (`design-reviewer`)**: O controle de qualidade visual. Confere legibilidade, contraste, sobreposições e a continuidade do panorama, solicitando ajustes à Diana se necessário.

### 🎮 Novas Tomadas de Decisões (Checkpoints)

Durante a execução do pipeline (usando `/opensquad run insta-mvp`), o processo não é 100% cego; ele pausa em **checkpoints** vitais para que **você** tome as decisões artísticas e editoriais:

1. **Escolha da Notícia:** O pipeline pausa para você escolher o tema do post a partir do ranking do Pedro.
2. **Escolha de CTA:** Você decide qual é a chamada para ação principal (Salvar, Seguir, Comentar).
3. **Manchete e Capa (Personagens):** Você aprova o texto da capa e **escolhe o personagem (mascote)**. 
   - *Como adicionar personagens na capa:* Durante este checkpoint, o sistema perguntará qual imagem usar (ex: `Corvo-Surpreso.png`). Você pode apontar o nome de qualquer imagem PNG transparente que esteja em sua pasta de assets (`pipeline/data/references/cover-assets/` ou `mascote-references/`). O agente **Carlos Capa** cuidará de aplicá-lo em destaque atrás do texto no slide 01.
4. **Aprovação de Conteúdo:** Antes do design começar, você valida o texto da Carla.
5. **Fundos Panorâmicos (Backgrounds):** A **Patricia Panorama** gerará os fundos (`bg-01.png` a `bg-0N.png`). 
   - *Como alterar os backgrounds:* Durante a aprovação, você pode pedir para regerar os fundos com outro prompt/tema. Se preferir, pode simplesmente **substituir manualmente** os arquivos `.png` gerados na pasta `output/{run_id}/v1/backgrounds/` por imagens de sua escolha, antes de aprovar a ida para a etapa de design da Diana.
6. **Aprovação Final:** Último olhar nas imagens geradas antes de encerrar.

---

## ⚙️ Criando e Gerenciando Agentes e Squads

O Opensquad é totalmente modular e baseado em arquivos Markdown.

### Como criar, editar ou deletar agentes

Cada agente é definido por um arquivo `.agent.md` dentro da pasta `squads/<nome-do-squad>/agents/`.

*   **Criar um Agente:** Basta criar um novo arquivo (ex: `meu-agente.agent.md`) nessa pasta. Defina a `Persona` (Role, Identity, Communication Style) e os `Principles` (regras de ouro) usando a mesma estrutura dos demais. Registre as tarefas (`tasks`) que ele executa.
*   **Editar um Agente:** Abra o arquivo do agente desejado e edite as instruções em linguagem natural. Quer que a Carla escreva em um tom mais agressivo? Basta alterar a seção *Voice Guidance* ou *Principles* no arquivo dela. O comportamento muda imediatamente na próxima execução.
*   **Deletar um Agente:** Exclua o arquivo `.agent.md` e remova qualquer menção a ele no pipeline (`squad.yaml` ou `pipeline/`) e nas tarefas associadas para não quebrar o fluxo.

### Como montar um squad novo

Você tem duas formas de criar um novo esquadrão de trabalho:

**A forma mágica (via Cursor):**
1. Abra o chat do Cursor e digite: 
   `/opensquad crie um squad para gerenciar meus emails e responder clientes`
2. O agente **Arquiteto** do Opensquad fará algumas perguntas de alinhamento e gerará automaticamente toda a estrutura de pastas, agentes e arquivos de pipeline para você.

**A forma manual:**
1. Crie uma nova pasta dentro de `squads/` (ex: `squads/meu-novo-projeto`).
2. Crie um arquivo `squad.yaml` na raiz dessa pasta definindo o nome e a estrutura geral.
3. Crie a subpasta `agents/` e adicione seus arquivos `.agent.md`.
4. Crie a subpasta `pipeline/` para definir os steps, prompts e ferramentas de cada etapa.
5. *(Opcional)* Copie a estrutura de um squad existente como o `insta-mvp` e simplesmente adapte os prompts para a sua nova necessidade.

---

## 🖥️ Escritório Virtual (Dashboard)

Acompanhe seus agentes trabalhando em tempo real em uma interface visual 2D.

**Para iniciar o painel com a lista de todos os squads:**
```bash
npm run dashboard:dev
```
Em seguida, acesse no seu navegador o endereço local que o terminal exibir (ex: `http://localhost:5173`). O dashboard se conecta via WebSocket aos seus runs em andamento.
