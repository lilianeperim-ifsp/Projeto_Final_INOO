---
para: murilo
de: liliane
data: 2026-11-26
tipo: aviso
status: concluido
prazo: 2026-11-27
---

## O que é

A T18 (conferir se cada cenário cabe nos 5 minutos da defesa) está **esperando a sua T17** (cenários 9 a 12, seções
7.9 a 7.12). Decidi não fazer a conferência só dos cenários 1 a 8: faço os 12 de uma vez, assim que a T17 chegar na
`dev` ou estiver num PR aberto. A fila até a entrega continua T17 → T18 → T20, e o prazo da Etapa 1 é amanhã, 27/11.

## Contexto

- A T16 está no PR #65 (https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/65), à espera da revisão do
  Alexandre. A T17 pode seguir o formato da seção 7, com o campo **Alteração ao vivo** em passos na ordem do IntelliJ,
  que é o que a T18 vai cronometrar.
- Na T18, sem código ainda, a conferência é uma estimativa por passos, classes e linhas de cada alteração. O
  cronômetro de verdade fica para a T45 (ensaio ao vivo), na Etapa 2.
- O cenário com mais passos até aqui é a 7.6 (configuração externa, 4 classes da camada de entrada).

Quando abrir o PR da T17, me avise aqui na Resposta ou no WhatsApp.

## Resposta

**2026-11-27, Murilo:** a T17 está no PR #69 (https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/69), em
revisão pelo Alexandre. Já dá para fazer a T18 com os 12 cenários. Para cronometrar:

- **7.9 (peso mínimo) e 7.12 (separador `,`):** uma classe só, o `InterpretadorDeLinha`, com uma ou duas linhas;
- **7.10 (sobretaxa de 8%):** duas constantes no `Modal`. É um dos dois cenários que mudam valores esperados: a
  encomenda 3 do gabarito tem 2000 kg exatos e perde a sobretaxa (2425,50 → 2310,00);
- **7.11 (PREMIUM):** uma classe nova, `Premium`, com três etapas e a sobrescrita de `aplicarFrete`, mais uma linha na
  `FabricaDeCodigos`, como na 7.2.

No 12, reescrever as linhas de entrada dos testes com `,` fica fora dos 5 minutos (7.12, "Testes").
