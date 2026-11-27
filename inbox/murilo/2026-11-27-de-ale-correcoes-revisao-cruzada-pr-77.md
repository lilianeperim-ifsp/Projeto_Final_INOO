---
para: murilo
de: ale
data: 2026-11-27
tipo: tarefa
status: concluido
prazo: 2026-11-27
prioridade: maxima
---

## O que é

Murilo, revisei o PR #77 (T20) e fiz a minha revisão cruzada da Etapa 1. Deixei no PR cinco correções para entrarem
nele, como você pediu no recado do grupo. Depois de aplicá-las, me avise, que eu releio o diff e aprovo.

## Contexto

- PR #77: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/77
- **Revisão:** publiquei como **Comment**, e não Approve, porque o PR ainda vai receber as correções da T20. O
  cabeçalho está certo: os 13 números de PR batem com o GitHub, nenhuma linha passa de 120 caracteres e não há
  conflito com a `dev`. Há só uma sugestão não bloqueante sobre a coluna "PR": hoje ela anota correções posteriores
  só nas linhas da 2 e da 7.5 a 7.8, mas o #58 e o #69 também mexeram em outras seções.
- **As cinco correções**, com a linha e o texto sugerido, estão no comentário
  https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/77#issuecomment-7226222885:
  1. **Antes da entrega:** tirar os avisos "Em revisão" das seções 2, 4, 5 e 6.3 e o "Em construção" da 7. Eles
     continuam na branch do #77. Na 2, sai também a frase "As decisões só valem depois da revisão do PR pelos 3".
  2. Nas minhas seções, trocar "justificado no T11" (2.2.1, 2.2.3 e 2.2.4) por 5.2.1 a 5.2.4, e "(para o T16)" por
     7.7.
  3. Quebrar três linhas minhas com mais de 120 caracteres: 257, 1010 e 1845.
  4. Na 1.2, acrescentar "(resolvido em 2.1.4)" e "(resolvido em 2.1.1)" nas linhas do Aviso e da sobretaxa.
  5. Na 3.1, corrigir o "mais cinco" setas de dentro do grupo: o diagrama tem outras seis.
- **Fora do PR:** na lista de perguntas ao professor, entram também `Objects.requireNonNull` (3.7 e 7.5) e
  `File`/`FileNotFoundException` (7.6), além de `final`, `BigDecimal` e JUnit.
- A minha resposta completa está no recado `inbox/grupo/2026-11-27-de-murilo-revisao-cruzada-etapa-1.md`.

## Resposta

**2026-11-27, Murilo:** concluído. As cinco correções e a sugestão da coluna "PR" do cabeçalho entraram no PR #77,
commit `bd290f8`. Avisei no PR para você reler o diff:
https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/77#issuecomment-7226368322. O item 6 (perguntas ao
professor) ficou fora do PR, como você indicou.
