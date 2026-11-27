---
data: 2026-11-27
autor: Alexandre Santos
assunto: descrição do PR #82 atualizada
---

## Resumo
Esta memória continua `2026-11-27-capa-do-documento-e-pr-87.md`, a última da sessão de hoje.

O Alexandre pediu para atualizar a descrição do PR #82 (`dev` → `main`), que tinha ficado desatualizada depois dos
merges do #85 (PDF) e do #87 (capa). O Claude editou o corpo com `gh pr edit 82 --body-file`:

- o resumo do início cita a capa e o PDF de 52 páginas;
- a lista "Documento de Projeto" ganhou o #85 (PDF gerado com `/documento`) e o #87 (capa no padrão do IFSP, logo em
  `docs/imagens/logo-ifsp.png` e PDF gerado de novo);
- "Organização do grupo" ganhou a mudança da skill `/documento` no #87 (`gerar_pdf.mjs` acha imagens pelo caminho
  relativo ao `.md`);
- "Como foi testado" diz que o PDF não tem erro de Mermaid e que o #85 e o #87 foram mesclados sem revisão, então vale
  olhar a capa e os diagramas;
- "Antes do merge" diz que falta só a resposta da Liliane na revisão cruzada (issue #78).

O #82 continua aberto, sem conflito com a `main` e com o pedido de revisão para o Murilo.

## Decisões tomadas
- **Corrigir o corpo em vez de comentar no PR.** Por quê: o corpo é o que o grupo lê primeiro no PR, e o
  "Antes do merge" ainda dizia que faltava o PDF. Alternativa descartada: deixar o corpo antigo e explicar num
  comentário.

## Erros e rejeições da IA
Nenhum.

## Pendências
- **Liliane:** responder à revisão cruzada (`inbox/grupo/2026-11-27-de-murilo-revisao-cruzada-etapa-1.md`, issue #78).
- **Murilo:** aprovar o #82 (issue #83) e rodar `/sincronizar-quadro` para o #85 e o #87 (issues #86 e #88).
- O que ficou pendente nas memórias anteriores continua igual: a conferência posterior do #85 e do #87, as remissões a
  cartões da seção 1, o ajuste do passo 2 da skill `/documento` e as perguntas ao professor antes da Etapa 2.

## Próximos passos
- Quando a Liliane responder e o Murilo aprovar, mergear o #82 na `main`: é a entrega da Etapa 1 (27/11). Depois do
  merge, avisar o Murilo para rodar `/sincronizar-quadro`.
- No início da próxima sessão, ler os arquivos mais recentes de `memory/` antes de tudo.
