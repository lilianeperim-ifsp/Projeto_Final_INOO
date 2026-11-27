---
data: 2026-11-27
autor: Alexandre Santos
assunto: capa do Documento de Projeto e PR #87
---

## Resumo
Esta memória continua as três memórias anteriores da sessão de hoje
(`2026-11-27-merge-do-pr-77-e-pr-82-dev-para-main.md`, `2026-11-27-pdf-do-documento-e-pr-85.md` e
`2026-11-27-novo-pedido-de-revisao-do-pr-82.md`).

O Alexandre acrescentou à mão uma capa ao `docs/Documento_de_Projeto.pdf`. O Claude comparou o texto do PDF novo com
o da `dev` e viu que a única diferença era a capa (51 páginas antes, 52 depois). A capa tem o logo, "Instituto Federal
de Educação, Ciência e Tecnologia de São Paulo — Campus Araraquara", o curso e a disciplina (ARQINOO), os três
integrantes, "SISTEMA LOGITECH", o subtítulo, o professor e "Araraquara 2026". O Claude avisou que a capa se perderia
num novo `/documento`, porque não estava no `.md`, e o Alexandre pediu para pôr a capa no `.md`.

O Claude tirou o logo de dentro do PDF (imagem 216×250, salva em `docs/imagens/logo-ifsp.png`) e escreveu a capa em
HTML no início do `docs/Documento_de_Projeto.md` (26 linhas). Também acrescentou uma linha ao
`.claude/skills/documento/gerar_pdf.mjs`. Conferiu com um PDF de teste no scratchpad (52 páginas, logo carregado) e
com uma imagem da capa tirada pelo Chrome em modo headless. O Alexandre rodou `/documento` e aprovou a geração do PDF.

Tudo foi commitado na `logitech/alexsant22` (`f8c86f7`) e foi para a `dev` pelo PR #87, com a Liliane e o Murilo de
reviewers. O recado para o Murilo (`inbox/murilo/2026-11-27-de-ale-sincronizar-quadro-pr-87.md`, commit `4fe4747`,
issue #88) pede o `/sincronizar-quadro` e a revisão. O #87 foi mesclado sem revisão (merge `a90d711`, 20:45 UTC). A
capa, o logo e a mudança do script já aparecem no #82.

## Decisões tomadas
- **Capa no `.md`, e não só no PDF.** Por quê: o PDF é gerado a partir do `.md`, e uma capa montada à mão se perde no
  próximo `/documento`. Alternativa descartada: manter o PDF montado à mão e lembrar de pôr a capa de novo a cada
  geração.
- **Capa em HTML dentro do Markdown,** com `display: flex` e `break-after: page`. Por quê: o Markdown não centraliza
  nem quebra página, e o `marked` usado pelo script deixa o HTML passar. No GitHub, a capa aparece centralizada
  (`align="center"`), mas sem a quebra de página, porque o GitHub ignora o `style`.
- **Logo em arquivo e `<base href>` no `gerar_pdf.mjs`.** Por quê: o script monta o HTML numa pasta temporária, e sem
  o `<base href>` na pasta do `.md` um caminho relativo como `imagens/logo-ifsp.png` não é encontrado. Alternativa
  descartada: colar o logo em base64 no `.md`, o que criaria uma linha de uns 6 mil caracteres. A mudança na skill
  `/documento`, que é do grupo, está explicada no PR #87 e no recado para o Murilo.
- **Logo tirado do PDF do Alexandre,** e não baixado da internet. Por quê: é a mesma imagem que ele escolheu para a
  capa.
- **Mesclar o #87 sem revisão,** decisão do Alexandre depois de o Claude avisar que, ao contrário do #85, ele muda o
  `.md` oficial e a skill do grupo. Por quê: o prazo da Etapa 1 é hoje. Um comentário no #87 registra o motivo.
  Alternativa descartada: esperar a revisão da Liliane ou do Murilo.

## Erros e rejeições da IA
- **Erro (processo):** no `/documento` com a capa, o Claude de novo não mostrou o texto completo do documento (2.841
  linhas). Mostrou só as linhas da capa, que eram a única mudança desde o PDF da `dev`, e avisou antes de pedir a
  aprovação. É o quarto caso registrado, e a skill continua sem ajuste.
- **Erro (comunicação):** depois do merge do #87, o Claude disse ao Alexandre que os PRs #85 e #87 tinham ficado fora
  da memória. O #85 já estava em `2026-11-27-pdf-do-documento-e-pr-85.md`, e só o #87 faltava. Foi percebido ao
  escrever esta memória e corrigido na resposta ao Alexandre.

## Pendências
- **Liliane:** responder à revisão cruzada (`inbox/grupo/2026-11-27-de-murilo-revisao-cruzada-etapa-1.md`, issue #78).
- **Murilo:** aprovar o #82 (issue #83) e rodar `/sincronizar-quadro` para o #85 e o #87 (issues #86 e #88). O
  cartão da T20 no quadro ainda precisa de ajuste à mão.
- **#85 e #87 sem revisão:** a Liliane ou o Murilo podem conferir depois do merge a capa, o logo, o PDF e a linha nova
  do `gerar_pdf.mjs`.
- O que ficou pendente nas memórias anteriores continua igual: as remissões a cartões da seção 1, o ajuste do passo 2
  da skill `/documento` e as perguntas ao professor antes da Etapa 2.

## Próximos passos
- Quando a Liliane responder e o Murilo aprovar, mergear o #82 na `main`: é a entrega da Etapa 1 (27/11). Depois do
  merge, avisar o Murilo para rodar `/sincronizar-quadro`.
- Se o `.md` mudar, gerar o PDF com `/documento`: a capa já sai junto.
- No início da próxima sessão, ler os arquivos mais recentes de `memory/` antes de tudo.
