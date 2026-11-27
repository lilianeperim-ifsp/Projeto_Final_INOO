---
data: 2026-11-27
autor: Alexandre Santos
assunto: PDF do Documento de Projeto e PR #85
---

## Resumo
Esta memória continua a sessão de `2026-11-27-merge-do-pr-77-e-pr-82-dev-para-main.md`.

O Murilo revisou o PR #82 (`dev` → `main`) às 20:16 UTC e publicou como Comment: o conteúdo está certo, e ele aprova
quando chegarem a resposta da Liliane na revisão cruzada e o PDF. Ele também pediu duas coisas:

- corrigir o corpo do PR, que dizia que o #79 não entrava. O #79 foi mergeado na `dev` às 20:11 UTC (`33c543e`),
  depois que o #82 foi aberto (19:57 UTC);
- opcionalmente, trocar as remissões a cartões que sobraram na seção 1 (linhas 56, 58, 65, 84 e 135) pela seção que
  resolveu cada ponto.

O Claude corrigiu o corpo do #82: tirou a frase sobre o #79 e citou o #79 em "Organização do grupo".

O Alexandre atualizou a branch com a `dev` (merge local `52faeff`), para o `.md` ficar com as correções do #77, e
gerou o PDF com `/documento` (`docs/Documento_de_Projeto.pdf`, 2.624 KB). No texto extraído do PDF não apareceu
nenhuma mensagem de erro do Mermaid nem código Mermaid cru.

O PDF foi commitado sozinho na `logitech/alexsant22` (`937a657`) e foi para a `dev` pelo PR #85, com a Liliane e o
Murilo de reviewers. O recado para o Murilo sincronizar o quadro (`inbox/murilo/2026-11-27-de-ale-sincronizar-quadro-pr-85.md`,
commit `0e5e08c`, issue #86) também avisa que o PDF já está gerado. O #85 foi mesclado sem revisão (merge `0ea88c1`,
20:25 UTC), e o PDF já aparece no #82.

## Decisões tomadas
- **Gerar o PDF na branch de trabalho, e não na `dev`.** O Alexandre perguntou se podia gerar dentro da `dev`. Por
  quê: o PDF não está na exceção da inbox e da memória, então não pode ir direto para a `dev`. Depois do
  `/atualizar-branch`, o `.md` da branch é igual ao da `dev`, e o PDF sai igual. Alternativa descartada: ampliar a
  exceção no `CLAUDE.md`, que é uma mudança de regra a combinar entre os 3 e não cabia no prazo de hoje.
- **O Alexandre gerou o PDF, e não o Murilo**, que tinha dito no #82 que ia gerar. Por quê: o prazo da Etapa 1 é
  hoje, e o PDF do Murilo era anterior ao #77. O recado do #85 avisa o Murilo para não gerar outro. Alternativa
  descartada: esperar o Murilo.
- **Mesclar o #85 sem revisão,** decisão do Alexandre depois de o Claude avisar que os PRs dele são revisados pela
  Liliane e pelo Murilo. Por quê: o prazo é hoje, o PR só acrescenta o PDF e o `.md` de origem já tinha sido revisado
  no #77. Um comentário no #85 registra o motivo e pede que avisem se acharem problema no PDF. Alternativa
  descartada: esperar a revisão de um dos dois.
- **Remissões a cartões da seção 1 deixadas para depois** (ponto 4, opcional, do Murilo no #82). Por quê: mexer no
  `.md` exigiria outro PR e gerar o PDF de novo. Alternativa descartada: corrigir antes da entrega.

## Erros e rejeições da IA
- **Erro (processo):** no `/documento`, o Claude não mostrou o texto completo do documento, como a skill manda
  (2.815 linhas, 206 KB, não cabem numa resposta). Ele avisou antes de pedir a aprovação, sugeriu conferir pela
  pré-visualização do VS Code e ofereceu mostrar o texto em partes. O Alexandre aprovou a geração. É o mesmo desvio
  registrado em 17/11 e no `/documento` do Murilo hoje, e a skill continua sem ajuste.

## Pendências
- **Liliane:** responder à revisão cruzada (`inbox/grupo/2026-11-27-de-murilo-revisao-cruzada-etapa-1.md`, issue #78).
- **Murilo:** aprovar o #82 (recado, issue #83) e rodar `/sincronizar-quadro` para o #85 (recado, issue #86). No
  quadro, o cartão da T20 continua em "A fazer" e sem PR ligado, e precisa ser ajustado à mão.
- **#85 sem revisão:** a Liliane ou o Murilo podem conferir o PDF depois do merge, principalmente os diagramas.
- **Opcional no documento:** as remissões a cartões da seção 1 (linhas 56, 58, 65, 84 e 135).
- **Skill `/documento`:** ajustar o passo 2 para documentos grandes (decisão do grupo ainda não aplicada).
- **Perguntas ao professor antes da Etapa 2:** `final` (2.1.1), `BigDecimal` com `HALF_UP` (2.1.2), JUnit (8.1),
  `Objects.requireNonNull` (3.7 e 7.5) e `File` com `FileNotFoundException` (7.6).

## Próximos passos
- Quando a Liliane responder e o Murilo aprovar, mergear o #82 na `main`: é a entrega da Etapa 1 (27/11). Depois do
  merge, avisar o Murilo para rodar `/sincronizar-quadro`.
- Se o PDF mudar (por exemplo, por causa das remissões da seção 1), gerar de novo com `/documento` e mandar por PR.
- No início da próxima sessão, ler os arquivos mais recentes de `memory/` antes de tudo.
