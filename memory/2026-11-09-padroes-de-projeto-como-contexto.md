---
data: 2026-11-09
autor: Alexandre Santos
assunto: Padrões de projeto como contexto
---

## Resumo
O Alexandre pediu que os padrões de projeto listados no enunciado fossem salvos como contexto, a partir de https://refactoring.guru/pt-br/design-patterns/java. Foi criada a pasta `contexto/padroes-projeto/`, com um `.md` para cada um dos 11 padrões (Adapter, Builder, Command, Decorator, Factory Method / Simple Factory, Observer, Prototype, Singleton, State, Strategy e Template Method) e um `README.md` com índice. A pasta entrou na tabela de contexto do `CLAUDE.md`. Tudo foi enviado no PR #11 (`logitech/alexsant22` → `dev`), com Liliane e Murilo como reviewers.

Cada nota traz: fonte, intenção, problema, quando usar e evitar, participantes, exemplo mínimo em Java, como identificar, padrões parecidos e pontos de atenção para o LogiTech. Os 11 exemplos foram extraídos dos `.md`, compilados e executados com JDK 21 (não com o JDK 26 do projeto), e a busca por `enum`, `Map`, `Set`, `record`, streams, `Optional`, `instanceof`, lambdas, `Stack` e `switch` nos blocos de código não encontrou nada.

## Decisões tomadas
- **Notas com palavras próprias, e não cópia das páginas** (plano aprovado pelo Alexandre). Por quê: o repositório é público e a política de uso do site só permite citar partes não substanciais dos textos, exige link da origem e não trata do código. Alternativa descartada: copiar as páginas inteiras.
- **Exemplos escritos do zero, em domínios neutros** (boletim, porta, editor etc.), sem relacionar padrões a modais, perfis ou status. Por quê: o enunciado diz que relacionar cada padrão aos pontos de variação faz parte da tarefa. Alternativa descartada: exemplos já com modais e perfis, que antecipariam a modelagem antes do acordo entre os 3.
- **Exemplos seguem as restrições do projeto.** Por quê: vários exemplos do site usam recursos vetados aqui (`enum` no Builder; `Stack` no Command; `Map`/`HashMap` no Observer, Prototype e Strategy; `instanceof` nos `equals` do Prototype). A lista está em `contexto/padroes-projeto/README.md`. Alternativa descartada: reproduzir a estrutura dos exemplos do site.
- **Só os 11 padrões do enunciado**, como pedido. Os outros 11 do catálogo ficaram de fora.
- **Simple Factory fica em `factory-method.md`**, porque o enunciado lista os dois juntos. A nota explica a diferença e que o condicional da Simple Factory só pode ficar na camada de entrada. Alternativa descartada: arquivo separado.
- **As notas só são consultadas ao codificar ou quando alguém perguntar sobre um padrão** (decisão do Alexandre, registrada no `CLAUDE.md`). Alternativa descartada: consulta sem essa condição.

## Erros e rejeições da IA
- **Erro (processo):** depois de abrir o PR #11, o Claude disse ao Alexandre para rodar `/sincronizar-quadro`, embora `memory/` já registrasse que o acesso dele ao quadro está bloqueado e que quem sincroniza é o Murilo. É a repetição de um erro já anotado hoje: as memórias não foram lidas no início da sessão, como pede o `CLAUDE.md`. O Alexandre corrigiu ("só o murilo consegue sincronizar o quadro"). O Claude guardou a regra na memória local e confirmou o histórico ao rodar `/salvar-memoria`. Nada foi gravado no quadro.

## Pendências
- PR #11 aguarda revisão da Liliane e do Murilo.
- O Murilo precisa rodar `/sincronizar-quadro` para o PR #11 aparecer no quadro.
- Em aberto: registrar no `CLAUDE.md` que só o Murilo consegue sincronizar o quadro. O Claude perguntou e o Alexandre ainda não respondeu. Hoje a regra está só na memória local do Claude Code na máquina do Alexandre, e o `CLAUDE.md` diz, sem restrição, para rodar a skill depois de cada PR.
- Continuam valendo as pendências de `memory/2026-11-09-skill-atualizar-branch.md`.

## Próximos passos
1. Liliane e Murilo revisam o PR #11.
2. Murilo roda `/sincronizar-quadro`.
3. O grupo usa as notas para analisar cada padrão no Documento de Projeto da Etapa 1 (27/11), registrando, para cada um usado ou descartado, o problema que resolve aqui, as classes envolvidas e o motivo.
