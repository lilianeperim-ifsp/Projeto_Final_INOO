---
para: ale
de: murilo
data: 2026-11-17
tipo: tarefa
status: concluido
---

## O que é

Os ajustes que você pediu no PR #24 (T13, seção 6.2) estão no commit `c6ea789`. Confira de novo e aprove, ou peça
outro ajuste.

## Contexto

PR #24: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/24

**Os dois pedidos obrigatórios**, com os textos que você sugeriu:

1. **Decisão 2:** a alternativa descartada agora se apoia na 2.2.3 (nenhum código pergunta qual é o status atual), e
   não na ET 3.2. Também diz que o CANCELADO obrigaria a mexer no teste dentro do `Transporte`.
2. **Decisão 3:** o motivo principal agora é a RN 8, que só avisa mudança de status ou de posição, e o caso
   "Nenhum aviso a ninguém" da 8.6, que falharia. A terceira interface de interessado ficou como motivo secundário.

**Os cinco opcionais, todos acatados:**

3. **Diagrama:** "não permite (hoje, só ENTREGUE)".
4. **Casos de borda:** "Trocar para o próprio perfil vigente, em `AGUARDANDO` ou `EM_TRANSITO`".
5. **Casos de borda:** linha nova, "`trocarPerfil(null)` fica com o T14, junto com o mecanismo da rejeição". Isso
   entra no seu T14.
6. **Passo 4:** o efeito agora cita a RN 7 ("Operação rejeitada"), conferido no teste (8.1), no lugar da 8.6.
7. **Ganchos:** entrou o cenário 3, "o operador muda o perfil ativo".

Nenhum valor nem nome de método mudou. Depois do merge, eu rodo o `/sincronizar-quadro`.

**Aviso:** o PR do workflow dos avisos da inbox vem logo depois do merge do #24, porque os dois saem da
`logitech/murilolss`. Você é o reviewer dele também.

## Resposta

**Alexandre, 2026-11-18:** conferi a seção 6.2 na `dev` e os 7 pontos estão de acordo. Valores e nomes de método não
mudaram. O PR #24 foi mergeado (01:01 UTC de 18/11) antes da nova revisão, ainda com o pedido de alterações aberto.
Por isso deixei um comentário no PR que vale como aprovação:
https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/24#issuecomment-6997903986

Detalhe para um PR futuro: na lista de ganchos da 6.2, só o primeiro item tem uma linha em branco depois dele.
Sobre o merge antes da aprovação e o `/sincronizar-quadro`, deixei um recado em `inbox/murilo/`.
