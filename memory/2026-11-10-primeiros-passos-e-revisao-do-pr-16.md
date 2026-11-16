---
data: 2026-11-10
autor: Liliane (lilianeperim-ifsp)
assunto: primeiros passos com o Claude e revisão do PR 16
---

## Resumo

Esta foi a primeira sessão da Liliane com o Claude Code. Ela seguiu os 10 passos do recado
`inbox/liliane/2026-11-10-de-murilo-primeiros-passos-com-o-claude.md` (o Claude Code, a máquina, o projeto, as pastas,
o git, a inbox, o quadro, as tarefas, o fim de sessão e o fechamento do recado).

- **Máquina:** o `git config user.name` é `lilianeperim-ifsp`, a branch é `logitech/lilianeperim-ifsp`, e o `gh` está
  instalado em `C:\Program Files\GitHub CLI\gh.exe`, logado na conta dela.
- **Branch:** a `logitech/lilianeperim-ifsp` estava parada na estrutura inicial (`b074eea`). Com `git pull origin dev`,
  ela recebeu tudo o que está na `dev` (avanço direto, sem conflito). Ela está à frente da cópia no GitHub, mas ainda
  não houve push dela.
- **Quadro Kanban:** a Liliane não consegue abrir o link, e a consulta do Claude pela conta dela devolveu "não
  encontrado". Foi criado o recado `inbox/murilo/2026-11-10-de-liliane-acesso-ao-quadro.md`, pedindo acesso de
  Colaborador.
- **Inbox:** fechados como `concluido` o roteiro de primeiros passos, o aviso "como usar a inbox" e o recado do grupo
  sobre a leitura do guia (os três já confirmaram).
- **PR #16 (`dev` → `main`):** revisado com o Claude. As conferências não acharam problemas: nenhum arquivo de
  `LogiTech/`, sem conflito, nenhum e-mail ou token no diff (o repositório é **público**), o `gerar_pdf.mjs` só usa o
  Chrome ou o Edge com `marked` e `mermaid` do jsDelivr, e o `.gitattributes` só aplica `merge=union` ao relatório de
  IA. A Liliane leu a seção 1 do `docs/Documento_de_Projeto.md` com o Claude e aprovou o PR com um comentário. Os dois
  recados do PR #16 foram fechados.

## Decisões tomadas

- **E-mail fora do recado ao Murilo.** O repositório é público e o git guarda o histórico para sempre, então o recado
  só pede o convite, e o e-mail vai pelo WhatsApp. Alternativa descartada: pôr o e-mail no recado, como foi pedido
  primeiro.
- **PR #16 aprovado com comentário, sem pedir ajustes.** A seção 1 ainda vai ser editada até 27/11, então a `main` não
  precisa esperar. O comentário registra dois pontos da seção 1, conferidos no enunciado, que a Liliane vai tratar no
  T08:
  1. **Quem guarda o modal (1.3):** ele não aparece nem na Encomenda nem no Transporte. Falta dizer também que o perfil
     vigente começa igual ao perfil da encomenda.
  2. **O CO₂ no aviso (1.2, "Aviso"):** a auditoria soma o CO₂ com o perfil vigente ao receber `ENTREGUE` (RN 8,
     `contexto/regras-negocio.md` linha 114), mas o aviso descrito traz só ID, status e coordenadas. Isso liga o
     cálculo (T08/T10) ao T14 do Alexandre.

  Alternativa descartada: pedir ajustes antes do merge na `main`.
- **Recado do grupo `confirmar-leitura-do-guia` fechado como `concluido`**, porque com a Liliane os três confirmaram,
  como o próprio recado pede.

## Erros e rejeições da IA

- **Erro (premissa):** o Claude disse que o `gh` não estava instalado. Ele tinha procurado só no PATH do próprio
  terminal, que estava desatualizado. A Liliane o corrigiu, e com o PATH recarregado o `gh` foi encontrado e estava
  logado.
- **Erro (dados):** no rascunho da Resposta dos recados do PR #16, o Claude usou a data 2026-11-11, tirada do horário
  UTC do GitHub, mas no computador da Liliane ainda era 2026-11-10. Ele percebeu ao rodar `date`, antes do commit.
- **Erro (processo):** ao fechar os recados do PR #16, o comando `sed` esperava `\r` no fim da linha `status:`, que
  nessa linha não existia. O commit `62bff0a` foi para a `dev` com a Resposta escrita, mas com o status ainda
  `pendente`. O Claude percebeu ao conferir os cabeçalhos depois do push e corrigiu no commit `935aad4`.

## Pendências

- **Murilo:** dar à Liliane acesso de Colaborador ao quadro. Ela vai mandar o e-mail pelo WhatsApp.
- **Alexandre:** fazer o merge do PR #16 na `main`, que já tem as aprovações do Murilo e da Liliane.
- **Liliane:** decidir as duas dúvidas do recado `2026-11-10-de-murilo-t07-pronto-para-o-t08.md` (onde ficam a
  sobretaxa e o arredondamento) e tratar no T08 os dois pontos do comentário do PR #16.
- **Liliane:** responder aos recados ainda pendentes: conferir a divisão do PR #14 e o aviso do merge do PR #11.

## Próximos passos

1. Começar a sessão com `/atualizar-branch`.
2. T04: ler `contexto/projeto-exemplo.md` (com o checklist da seção 10) com um resumo do Claude.
3. T08: catálogo de classes e interfaces (seção 2 do Documento de Projeto), combinando `Modal` e `Perfil` com o
   Alexandre e o Murilo e já tratando os dois pontos acima.
