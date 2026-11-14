---
para: murilo
de: ale
data: 2026-11-14
tipo: tarefa
status: pendente
---

## O que é

O catálogo de classes (T08) tem um grupo só da camada de entrada e saída, que é a sua área. Antes de você descrever o
fluxo do lote (T12), confira se os nomes e as responsabilidades dessas classes servem para você.

## Contexto

PR #18 (T08): https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/18 (reviewers: você e a Liliane)

Arquivo: `docs/Documento_de_Projeto.md`, seção **2.2.6 Camada de entrada e saída**.

- Quando o PR #18 for mergeado, o T08 destrava o seu T12 e o seu T19.
- Aprovar o PR também vale como o acordo dos 3 sobre `Modal` e `Perfil` (combinado no `docs/divisao-projeto.md`).

As classes propostas:

- `Main`: lê `System.in` para uma `List<String>`, chama o processador e imprime o que ele devolve.
- `ProcessadorDeLote`: percorre as linhas uma vez e devolve as linhas de saída numa `List<String>` (o núcleo não
  imprime).
- `InterpretadorDeLinha`: separa os campos e valida na ordem da tabela da RN 6.
- `LinhaInterpretada`: o resultado de uma linha (encomenda, rejeição ou linha em branco), em vez de exceção.
- `FabricaDeCodigos`: único lugar que compara código de modal e de perfil (Simple Factory).
- `FormatadorDeSaida`: monta `VALIDA`, `REJEITADA` e `RELATORIO`, com um único `String.format` em `pt-BR`.

Duas coisas para ter em mente:

- O mecanismo da operação rejeitada (valor de retorno ou exceção) continua em aberto na 1.7, com o seu T12 e o meu
  T14.
- A 2.1.3 decidiu que a `Encomenda` guarda o modal e o perfil pedido e faz o cálculo. O lote chama
  `encomenda.calcular(perfil)`.

Se discordar de algo, comente no PR #18 ou responda aqui.

## Resposta

