---
data: 2026-11-22
autor: Alexandre Santos
assunto: revisão do PR 43 (lista única de códigos, 2.2.6)
---

## Resumo
O Alexandre atualizou a `logitech/alexsant22` com a `dev` (`/atualizar-branch`, fast-forward até `0aaaaaf`) e
conferiu a inbox. Só havia um recado pendente: `inbox/ale/2026-11-19-de-murilo-revisar-pr-43.md`, em que o Murilo pede a
aprovação das classes novas da 2.2.6. O recado do grupo sobre os avisos no GitHub já estava `concluido`. O Alexandre
revisou o PR #43 (`logitech/murilolss` → `dev`, commit `be4f137`), que só muda `docs/Documento_de_Projeto.md`, e o
aprovou no GitHub. Depois respondeu o recado, marcou-o como `concluido` e o enviou direto para a `dev` (commit `443b96f`).

## Decisões tomadas
- **Aprovada a estrutura interna da `FabricaDeCodigos` (2.2.6, do Alexandre):** pares código + objeto em
  `List<CodigoDeModal>` e `List<CodigoDePerfil>`, preenchidas no construtor com uma linha por código, e busca única nos
  privados `indiceDoModal`/`indiceDoPerfil`, que devolvem `-1` quando não acham. `existe*` responde `>= 0`, e `criar*`
  lança `IllegalArgumentException` no `-1`.
  - **Por quê:** mantém o contrato do PR #19 e o passo 5(b) da 6.1. A comparação com `equals` respeita a RN 4
    (maiúsculas e minúsculas). Devolver sempre a mesma instância é seguro porque modais e perfis não têm atributos de
    instância (2.2.1), e o perfil vigente é atributo do `Transporte`, então o teste de "dois transportes da mesma
    encomenda" (8.6) não muda. O ferroviário vira a classe nova mais uma linha no construtor da fábrica, e a
    configuração externa continua mexendo só na fábrica.
  - **Alternativas descartadas (no PR):** arrays paralelos, porque uma ordem trocada não dá erro de compilação;
    `getCodigo()` em `Modal`/`Perfil`, porque levaria o texto da entrada para o núcleo de cálculo.
- **Conferência de merge:** o GitHub mostra o PR #43 como `MERGEABLE CLEAN`. A `logitech/murilolss` está atrás da
  `dev` só em arquivos de inbox e memória, sem mudança no documento.

## Erros e rejeições da IA
Nenhum.

## Pendências
- **Murilo:** mergear o PR #43 e depois rodar `/sincronizar-quadro`. O pedido ficou na resposta do recado.
- **Liliane:** depois do merge do #43, atualizar a seção 3 no PR #40, que continua aberto: notas da 3.1 e da 3.6,
  decisão 6 da 3.7 e os PNGs com `CodigoDeModal` e `CodigoDePerfil`.
- A `logitech/alexsant22` tem 63 commits locais, todos vindos da `dev`, que ainda não estão no GitHub. Não precisa de
  push até o próximo PR do Alexandre.

## Próximos passos
- Depois do merge do PR #43, revisar o PR #40 da Liliane, que tem o Alexandre como reviewer, conferindo se o diagrama
  do T09 ganhou as duas classes novas.
- Rodar `/atualizar-branch` no início da próxima sessão para trazer o merge e os recados novos.
