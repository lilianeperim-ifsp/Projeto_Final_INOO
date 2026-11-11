---
data: 2026-11-10
autor: Alexandre Santos
assunto: revisão e merge do PR 15 (T07)
---

## Resumo

O Alexandre atualizou a `logitech/alexsant22` com a `dev` e pediu a revisão do PR #15 (T07, seção 1 do Documento de Projeto, do Murilo). O Claude comparou `docs/Documento_de_Projeto.md` com `contexto/regras-negocio.md`, `contexto/especificacoes-tecnicas.md` e o checklist de `contexto/projeto-exemplo.md`, e recomendou pedir ajustes. O Alexandre decidiu aprovar e fazer o merge sem ajustes: PR #15 aprovado e mergeado na `dev` (commit `82f17b5`), com a branch do Murilo mantida. Depois, a `logitech/alexsant22` foi atualizada com a `dev`.

O PDF do enunciado não foi lido nesta sessão, porque a máquina não tem ferramenta para extrair o texto. A revisão usou os arquivos `.md` de `contexto/`. Nada foi publicado no PR além da aprovação, sem comentários.

## Decisões tomadas

- **PR #15 aprovado e mergeado sem ajustes**, por decisão do Alexandre. O motivo não foi informado. Alternativa descartada: pedir alterações ao Murilo antes do merge, recomendada pelo Claude.
- As duas dúvidas da seção 1.7 que dependem do Alexandre **não foram decididas** nesta sessão (ver Pendências).

## Erros e rejeições da IA

- **Rejeição (processo):** o Claude recomendou pedir ajustes no PR #15 antes do merge. O Alexandre preferiu aprovar e mergear; o motivo não foi informado e o conteúdo dos apontamentos não foi contestado. Registrado em `docs/relatorio_ia_notas.md`.

## Pendências

**Pontos da revisão que entraram na `dev` sem correção** (seção 1 de `docs/Documento_de_Projeto.md`):

1. O aviso descrito em 1.2 (ID, status, coordenadas) não traz o CO₂ do perfil vigente, de que a auditoria precisa (RN 8), nem o tipo da mudança. Como a posição pode mudar depois de `ENTREGUE` (RN 7), um aviso de posição chegaria com esse status: a auditoria somaria o CO₂ de novo e o cliente receberia mensagem indevida.
2. A seção 1.3 não diz quem guarda o modal e o perfil da encomenda, embora o lote calcule sem criar transporte (RN 7). Falta dizer também que o perfil vigente do transporte começa com o perfil da encomenda.
3. "Validação" e "Processamento do lote" recebem verbos em 1.4, mas não aparecem em 1.2. O lote é descartado em 1.2 remetendo a 1.4.
4. Não está claro quando a encomenda é validada: 1.2 diz que "é ela que se valida", e o item 13 do checklist manda validar antes de criar o objeto. `formato invalido` e `codigo inexistente` só podem surgir na entrada, mas 1.4 atribui a tabela inteira à validação.
5. A classificação contradiz o método de 1.1: Posição valida o próprio par, logo responderia "sim" à primeira pergunta (Classe), mas saiu como Composição. Resultado, Rejeição e Encomenda viraram Classe sem comportamento descrito.

**Ajustes menores:** a dúvida sobre operação rejeitada em 1.7 não cita o T13 (Liliane), e a troca de perfil também pode ser rejeitada; "o enunciado proíbe `enum`" é decisão do grupo, segundo a seção 3.1 das especificações; em 1.4, "Trocar o perfil" não diz que o status vigente decide, e falta registrar que a simulação continua permitida depois de `ENTREGUE`; 1.2 diz que a encomenda é simulada e 1.4 diz que é o transporte; o corpo do PR não mencionava a mudança em `docs/divisao-projeto.md` nem a regra da inbox no `CLAUDE.md`, que afeta os três.

**Dúvidas do Alexandre (T14), ainda sem resposta** no recado `inbox/ale/2026-11-10-de-murilo-revisar-pr-15-t07-analise.md`, que continua pendente. As recomendações abaixo são do Claude e não foram adotadas nem recusadas:

- **Aviso como objeto:** recomendação de usar objeto com ID, status, posição, CO₂ vigente e tipo da mudança.
- **Operação rejeitada:** recomendação de `boolean` no rastreamento, com testes que confiram o retorno. O lote não precisa do mesmo mecanismo, ao contrário do que diz o recado, porque usa o objeto de rejeição.
- **`try/catch`:** `parseInt` e `parseDouble` lançam `NumberFormatException` (RN 10, item 15 do checklist), então a entrada provavelmente vai precisar dele. Não aparece nos slides disponíveis e as aulas 7 a 9 faltam: vale confirmar com o professor.

**Quadro:** o Murilo precisa rodar `/sincronizar-quadro` depois do merge do PR #15; o Alexandre foi orientado a avisá-lo.

## Próximos passos

1. Avisar o Murilo para rodar `/sincronizar-quadro`.
2. Antes de a Liliane começar o T08, passar a ela pelo menos os pontos 1 e 2 das pendências.
3. Decidir se os demais pontos viram um PR de correção da seção 1.
4. Responder às duas dúvidas do T14 no recado do Murilo.
