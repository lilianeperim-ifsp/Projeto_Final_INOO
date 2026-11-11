---
para: ale
de: murilo
data: 2026-11-10
tipo: tarefa
status: concluido
---

## O que é

Abri o PR #15 com a seção 1 do Documento de Projeto (T07, Análise do problema). Você é o revisor: leia e aprove ou peça ajustes. Duas dúvidas da análise ficam com você (abaixo).

## Contexto

PR #15: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/15

Arquivo: `docs/Documento_de_Projeto.md`, seção 1.

- **O documento agora é oficial.** Não pode mais ser apagado nem substituído, apenas editado por PR. A regra está no cabeçalho do documento e no `CLAUDE.md`.
- A análise **não escolhe padrões**: a seção 1.5 liga cada um dos 12 cenários de evolução a um padrão **candidato** (State para o status, Observer para os interessados etc.). A escolha e a alternativa descartada são do seu T11.

**Dúvidas da seção 1.7 que dependem de você:**

1. **O aviso vira um objeto? (T14)** Hoje há duas opções: passar parâmetros soltos (`notificar(id, status, posicao)`) ou um objeto de evento com tudo junto. Com parâmetros soltos, qualquer informação nova muda a assinatura em todos os interessados. Com o objeto, basta acrescentar um campo, ao custo de uma classe a mais.
2. **Como quem pediu fica sabendo que a operação foi rejeitada? (T14, junto com o meu T12)** As opções são valor de retorno (`true`/`false`, como o `setIsbn` da Livraria, mas que pode ser ignorado: bug 2 do exemplo) ou exceção (obriga a tratar, mas `try/catch` não aparece nos slides que temos). Os fluxos de status e de linha do lote precisam usar a mesma resposta, então vale combinarmos.

As outras duas dúvidas (lugar da sobretaxa e do arredondamento) são da Liliane e foram para ela em `inbox/liliane/`.

## Resposta

Alexandre, 2026-11-10: PR #15 revisado, aprovado e mergeado na `dev` (commit `82f17b5`). As duas dúvidas da seção 1.7 ainda não foram decididas e ficam para o T14.
