---
data: 2026-11-09
autor: Alexandre Santos
assunto: Inbox do projeto e exceção no fluxo de git
---

## Resumo
Sessão sem modelagem e sem código. O `gh` já estava instalado (2.103.3, conta `alexsant22`) e só faltava abrir um terminal novo para ele entrar no PATH. O Alexandre criou um guia para uma caixa de recados em arquivos, e o Claude montou a pasta `inbox/` a partir dele: pastas `ale`, `murilo`, `liliane` e `grupo` com `.gitkeep`, guia em `inbox/README.md`, um aviso de uso em cada pasta e, em `inbox/grupo/`, o pedido de confirmação de leitura. O PR #8 levou isso à `dev`, com a exceção que liberava recados direto na `main`, e foi mergeado com aprovação do Murilo. Depois, o Alexandre decidiu que inbox e memória vão direto para a `dev`, e essa mudança seguiu num PR novo, porque o #8 já estava mergeado. O `/sincronizar-quadro` falhou ao ler o banco do artefato e nada foi gravado no quadro.

## Decisões tomadas
- **Inbox e memória vão direto para a `dev`, sem PR.** Vale só para commit que altera somente arquivos de `inbox/`, de `memory/` ou `docs/relatorio_ia_notas.md`; qualquer outro arquivo segue o fluxo normal. Decisão do Alexandre, registrada no `CLAUDE.md`. Por quê: o grupo já começa o trabalho com `git pull origin dev`, então os arquivos chegam a todos sem comando novo, e a `main` os recebe no próximo PR da `dev`. Alternativas descartadas: direto na `main`, que exigiria leitura especial pela `origin/main` e colocaria na versão estável algo que não passou pela `dev`; branch de quem recebe, que exigiria push na branch de outro integrante e espalharia o status por três branches; e memória com PR em cada sessão, que faz a memória depender de revisão sem necessidade.
- **`/salvar-memoria` envia sozinha para a `dev`.** A skill grava numa cópia temporária da `dev` (`git worktree`), faz commit só dos arquivos da memória e dá push. Por quê: não toca no código em andamento de quem roda. Alternativa descartada: trocar de branch na cópia de trabalho, que pode falhar ou misturar alterações não commitadas.
- **`merge=union` em `docs/relatorio_ia_notas.md`.** Por quê: todos acrescentam linhas no fim da mesma tabela, e dois envios próximos dariam conflito. Alternativa descartada: resolver esses conflitos à mão.
- **Pastas com nomes em minúsculas.** Por quê: é o que o guia e os comandos dele usam. Alternativa descartada: manter `Ale`, `Murilo` e `Liliane`, como pedido antes de o guia ser seguido.
- **Avisos não citam o comando de leitura.** Por quê: a busca olha o texto do status no arquivo inteiro, então um recado com esse texto no corpo continuaria aparecendo como pendente depois de fechado. Os avisos apontam para a seção "Rotina do dia a dia" do guia. Alternativa descartada: repetir os comandos em cada aviso.

## Erros e rejeições da IA
- **Erro (processo):** o Claude tratou o pedido de seguir o guia como autorização para commit e push, embora o `CLAUDE.md` exija pedido do usuário. O modo automático do Claude Code bloqueou o comando, sem dar o motivo. O Claude não tentou contornar o bloqueio e explicou o que faltava. O commit só foi feito depois de o Alexandre pedir.
- **Erro (premissa):** o Claude recomendou liberar a inbox direto na `main` sem notar que o `git pull` do guia não traria os recados, porque as branches de trabalho não recebem a `main`, e sem considerar a `dev` como destino. Percebeu ao analisar as opções; a inbox e a memória passaram a ir direto para a `dev`.
- **Erro (processo):** o Claude não leu `memory/` no início da sessão. Por isso, indicou o `/sincronizar-quadro` sem avisar que a memória de hoje já registrava a falha de acesso ao quadro. Percebeu depois da nova falha, ao ler a memória. Nada foi gravado no quadro.
- **Rejeição (processo):** o Claude recomendou não commitar a inbox na branch de trabalho e enviá-la só para a `main`. O Alexandre pediu o commit e o push na própria branch; o motivo não foi registrado. A inbox seguiu pelo PR #8.

Esses casos não são erros de projeto de classes. O enunciado pede erros do tipo violar restrição, propor modelo acoplado ou gerar código incorreto, e pelo menos 1 rejeição de sugestão de projeto, casos que devem surgir no Documento de Projeto.

## Pendências
- **Concordância da Liliane e do Murilo com a exceção na `dev`**, pedida no PR novo. O Murilo aprovou o PR #8 quando a exceção ainda era para a `main`.
- **O envio automático de `/salvar-memoria` não foi testado.** O modo automático do Claude Code pode bloquear o push na `dev`; talvez seja preciso uma regra de permissão.
- **Acesso do Alexandre ao banco do quadro pelo Claude Code continua bloqueado.** Erro: o artefato foi compartilhado por outra organização, que pode não permitir o uso dos dados por editores convidados; a mensagem não distingue isso de falta de acesso. O dono do quadro precisa verificar.
- **O quadro pode estar sem os PRs mais recentes.** O Murilo pode rodar `/sincronizar-quadro`. Não foi conferido se a rotina na nuvem atualiza o quadro sozinha.
- **`inbox/grupo/` tem dois recados parecidos:** o aviso de uso e o pedido de confirmação de leitura.
- **Definir se `inbox/` fica na entrega final** ou se é removida da `main` no fim.
- **Trecho opcional do guia sobre o Claude Code** não foi acrescentado ao `CLAUDE.md`.
- A pasta `.idea/` continua sem commit e fora do `.gitignore`.

## Próximos passos
1. Revisar e mergear o PR novo na `dev`.
2. Cada integrante roda `git pull origin dev`, testa a leitura da inbox e confirma a leitura em `inbox/grupo/`.
3. Na próxima sessão, testar o envio automático de `/salvar-memoria`.
4. Seguir para a divisão de áreas entre os 3 e a modelagem do Documento de Projeto da Etapa 1 (prazo 27/11).
