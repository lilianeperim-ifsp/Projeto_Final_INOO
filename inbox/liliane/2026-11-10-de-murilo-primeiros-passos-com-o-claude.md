---
para: liliane
de: murilo
data: 2026-11-10
tipo: tarefa
status: concluido
prioridade: maxima
---

## O que é

Boas-vindas ao Claude Code, Liliane! Este recado é o roteiro da sua primeira sessão: o seu Claude vai te apresentar
o projeto, o fluxo do git, a inbox, o quadro e as suas tarefas, **um passo de cada vez, junto com você**. Leva uns
30 a 40 minutos. Pode perguntar à vontade, em português, sempre que algo não ficar claro.

**Para começar, basta pedir ao Claude:** "Leia o recado de primeiros passos da minha inbox e vamos fazer juntos".

## Para o Claude da Liliane: como conduzir esta sessão

Este recado tem **prioridade máxima**. Antes de qualquer outra coisa da sessão, conduza o roteiro abaixo com a
Liliane. É a primeira vez que ela usa o Claude Code, então:

- **Um passo por mensagem.** No fim de cada passo, pergunte se ficou claro e espere ela responder antes de seguir.
- **Linguagem simples e respostas curtas** (até umas 15 linhas por passo). Explique os termos de git na primeira vez
  que aparecerem (branch, commit, push, pull, PR, merge).
- **Antes de rodar qualquer comando, diga o que ele faz e por quê.** Comandos que só leem (`git status`, `git log`,
  ler arquivos) podem rodar direto. Comandos que mudam algo (`git switch`, `git pull`, `git commit`, `git push`)
  só com o "pode" dela.
- **Não commite, não dê push e não abra PR** sem ela pedir (regra do `CLAUDE.md`).
- Se ela quiser parar no meio, tudo bem: anote na seção **Resposta** em que passo parou, para retomar depois.
- Se ela pedir para pular um passo, pule, mas diga em uma linha o que fica faltando.

### Passo 1: o Claude Code em 1 minuto

Explique o básico de uso:

- Ela escreve o pedido em português, como numa conversa. O Claude lê arquivos, roda comandos e edita o projeto.
- Quando o Claude quer rodar um comando ou editar um arquivo, aparece um **pedido de permissão**: ela lê e aprova
  ou recusa. Recusar é normal e seguro.
- **Esc** interrompe o Claude no meio de uma resposta. `/help` mostra os comandos.
- Comandos com `/` (como `/atualizar-branch`) são **skills do projeto**: roteiros prontos que o grupo criou.
- **O Claude erra.** Toda vez que ele errar ou o grupo recusar uma proposta dele, isso vai para
  `docs/relatorio_ia_notas.md` (o relatório final pede no mínimo 3 erros e 1 rejeição). Então desconfiar e
  corrigir o Claude é parte do trabalho.

### Passo 2: conferir a máquina dela

Rode e explique o resultado (só leitura):

1. `git config user.name` e `git branch --show-current`. A branch de trabalho dela é
   **`logitech/lilianeperim-ifsp`**. Se estiver em outra, explique e, com o "pode" dela, rode
   `git switch logitech/lilianeperim-ifsp`.
2. `git status`. Se houver alterações não salvas, pergunte o que ela quer fazer antes de trocar de branch.
3. `gh auth status` (o `gh` é o GitHub pelo terminal, usado para abrir PR). Se não estiver instalado ou logado, só
   anote: não é urgente, ela pode abrir PR pelo site do GitHub.

### Passo 3: o que é o projeto

Apresente em poucas linhas, com base no `CLAUDE.md`:

- **LogiTech:** simulador logístico em Java que calcula frete, tempo e CO₂ para 3 modais (rodoviário, aéreo,
  aquaviário) e 3 perfis de preço (econômico, rápido, ecológico), rastreia o transporte, avisa os interessados e
  processa um lote lido da entrada padrão (`java Main < entrada.txt`).
- **Prazos:** Etapa 1 em **27/11** (só o Documento de Projeto, sem código). Etapa 2 em **04/12** (código, testes,
  documento revisado, relatório de IA, stress test e defesa oral).
- **A defesa é individual** e inclui alterar o código ao vivo: um cenário de evolução em **no máximo 5 minutos**.
  Por isso cada um precisa entender o projeto inteiro, não só a própria parte.
- **Restrições que mais pegam:** sem `enum`, `Map` e `Set` (só `List`/`ArrayList` e arrays); fora da entrada,
  nenhum código pergunta qual é o modal ou o perfil (nada de `instanceof` ou `switch`: tudo por polimorfismo).

### Passo 4: onde está cada coisa

Mostre as pastas e para que serve cada uma (sem abrir tudo):

| Pasta | Para quê |
|---|---|
| `contexto/` | Enunciado em `.md`: regras de negócio, especificações técnicas, slides das aulas, projeto de exemplo (Livraria) e notas dos padrões de projeto. Só leitura. |
| `docs/` | `Documento_de_Projeto.md` (oficial, só se edita por PR, nunca se apaga), `divisao-projeto.md` (quem faz o quê) e `relatorio_ia_notas.md`. |
| `inbox/` | Recados entre nós três (Passo 6). |
| `memory/` | Um arquivo por sessão com o que foi feito e decidido. É assim que o Claude de cada um sabe o que os outros fizeram. |
| `LogiTech/` | O projeto IntelliJ. Ainda sem código: código só depois da Etapa 1. |
| `.claude/skills/` | As skills do projeto. |

Diga que ela pode pedir "o que diz o enunciado sobre X?" e o Claude procura nos arquivos de `contexto/`.

### Passo 5: o fluxo do git

Explique com um desenho simples:

```
main                          versão entregue
 └── dev                      onde as partes dos três se juntam
      └── logitech/lilianeperim-ifsp   a branch dela, onde ela trabalha
```

- Ela trabalha **só na própria branch**. Nada de push direto em `main` ou `dev`.
- **Começo de cada sessão:** rodar `/atualizar-branch` (faz o `git pull origin dev` e traz o trabalho dos outros,
  os recados e as memórias). Faça isso agora com ela, com o "pode" dela.
- **Terminou uma parte:** commit na branch dela, push e **PR para a `dev`** com o Alexandre (`alexsant22`) como
  revisor. Ela pode só pedir: "abre o PR para a dev". O Claude também deixa um recado para o Murilo atualizar o
  quadro.
- **Exceção:** commits que mexem **só** em `inbox/`, `memory/` ou `docs/relatorio_ia_notas.md` vão direto para a
  `dev`, sem PR.

### Passo 6: a inbox

Explique com base em `inbox/README.md`:

- Os recados dela ficam em `inbox/liliane/` e os do grupo em `inbox/grupo/`. Um recado por arquivo.
- Status: `pendente` → `aceito` → `concluido` (ou `descartado`). **Só quem recebeu muda o status** e escreve na
  Resposta. Nunca se apaga um recado.
- Para mandar um recado, ela pode pedir: "deixa um recado para o Alexandre sobre X". O Claude cria o arquivo no
  formato certo e envia para a `dev`.
- `prioridade: maxima` no cabeçalho (como neste recado) quer dizer: tratar antes de tudo.

Depois, **liste os recados pendentes dela** (`inbox/liliane/` e `inbox/grupo/`) com uma linha sobre cada um. Não
precisa resolver agora; só mostre que existem. Destaque dois:

- `2026-11-10-de-murilo-t07-pronto-para-o-t08.md`: a seção 1 do documento (T07) está pronta no PR #15 e destrava o
  T08 dela, com duas dúvidas que são dela (onde fica a sobretaxa e onde fica o arredondamento).
- `inbox/grupo/2026-11-09-de-ale-confirmar-leitura-do-guia.md`: pede para cada um confirmar que leu o guia da
  inbox. Depois deste passo, ela pode confirmar.

### Passo 7: o quadro Kanban

- O quadro com todas as tarefas, responsáveis e PRs fica em https://claude.ai/artifact/F1QWFXCoJWQXo3HDSBbvhH.
  Para editar, ela precisa de acesso de Colaborador (se não tiver, pedir ao Murilo).
- **Só o Murilo roda `/sincronizar-quadro`** (puxa os PRs do GitHub para o quadro). Ela não precisa rodar.

### Passo 8: as tarefas dela

A parte dela é o **cálculo**: modais, perfis de precificação, sobretaxa de carga pesada e arredondamento (padrão
mais provável: Strategy). São 15 cartões (detalhes em `docs/divisao-projeto.md`):

| Etapa | Cartões |
|---|---|
| 1 (até 27/11) | T04 atualizar a branch e ler o projeto de exemplo · T05 conferir se o Mermaid do exemplo renderiza · **T08 catálogo de classes e interfaces** · T10 estratégia de resolução dos pontos de variação · T13 fluxo da troca de perfil · T15 cenários de evolução 1 a 4 · T20 revisão cruzada e entrega |
| 2 (até 04/12) | T25 modais · T26 valores base · T27 sobretaxa · T28 perfis · T29 arredondamento · T37 testes com o gabarito · T39 teste da troca de perfil · T42 COMO_EXECUTAR.md |

Explique a ordem: o **T07** (Murilo, análise do problema, PR #15) destrava o **T08** dela, e o T08 destrava o
trabalho do Alexandre e do Murilo. Por isso o T08 é a prioridade dela na Etapa 1. As interfaces `Modal` e `Perfil`
são dela, mas o transporte (Alexandre) e a entrada (Murilo) usam essas interfaces: vale combinar com os dois antes
de fechar.

Sugira o próximo passo prático: **T04**, ler `contexto/projeto-exemplo.md` (o exemplo do professor, com o
checklist de erros a não repetir na seção 10). Ela pode pedir ao Claude um resumo e perguntar o que não entender.

### Passo 9: fim de sessão

- Ao terminar qualquer sessão, rodar **`/salvar-memoria`**: grava o resumo em `memory/` e envia para a `dev`, para
  os outros dois saberem o que ela fez.
- `/documento` mostra o Documento de Projeto e gera o PDF (útil no T05 e no T20).

### Passo 10: fechar este recado

Com o "pode" dela:

1. Escrever na **Resposta** abaixo, em uma ou duas linhas, como foi (passos feitos, dúvidas que ficaram).
2. Mudar `status: pendente` para `status: concluido`.
3. Enviar para a `dev` seguindo a seção "Enviar um recado" de `inbox/README.md` (commit só com arquivos de
   `inbox/`) e voltar para a branch `logitech/lilianeperim-ifsp`.

Se ela também quiser confirmar a leitura do guia no recado do grupo, dá para enviar os dois no mesmo commit.

## Contexto

- Regras do projeto: `CLAUDE.md` (o Claude já lê sozinho ao abrir).
- Guia da inbox: `inbox/README.md`.
- Divisão das tarefas: `docs/divisao-projeto.md`.
- Situação mais recente: arquivos mais novos de `memory/`.

Qualquer dúvida, me chama no WhatsApp ou responde aqui. — Murilo

## Resposta

Liliane: fiz os 10 passos em 2026-11-10. A branch foi atualizada com a `dev` e o `gh` está instalado e logado. Não
tenho acesso ao quadro: pedi ao Murilo em `inbox/murilo/2026-11-10-de-liliane-acesso-ao-quadro.md`. Ficaram para
depois: a revisão do PR #16 e as dúvidas do T08 (sobretaxa e arredondamento).
