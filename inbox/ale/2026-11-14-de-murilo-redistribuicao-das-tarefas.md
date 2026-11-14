---
para: ale
de: murilo
data: 2026-11-14
tipo: decisao
status: concluido
---

## O que é

Proponho redistribuir os 43 cartões que estão em aberto (T04 a T47, sem o T07, que já foi concluído). O critério novo é este:

- **Murilo e Alexandre** ficam com os cartões que fazem parte da cadeia de dependências e travam outros cartões.
- **Liliane** fica com os cartões independentes e com os do fim da cadeia. Eles dependem do que nós dois fazemos e só travam outros cartões dela, então **ela nunca trava nenhum de nós dois**.

Preciso que você aprove ou proponha ajustes. A atualização de `docs/divisao-projeto.md` vai num PR da `logitech/murilolss` para a `dev`, com você como revisor. A aprovação desse PR também vale como resposta a este recado.

## Contexto

As dependências vêm do campo `dependeDe` dos cartões do quadro.

### Nova divisão (Murilo 14, Alexandre 15, Liliane 14)

| Integrante | Cartões |
|---|---|
| **Murilo** (14) | T12, T13, T17, T19, T20, T21, T22, T23, T24, T29, T33, T34, T35, T41 |
| **Alexandre** (15) | T08, T09, T10, T11, T14, T15, T16, T18, T25, T26, T27, T28, T30, T32, T36 |
| **Liliane** (14) | T04, T05, T06, T31, T37, T38, T39, T40, T42, T43, T44, T45, T46, T47 |

### Trocas de dono

| De → Para | Cartões | Por quê |
|---|---|---|
| Liliane → Alexandre | T08, T10, T15 | Cada um vem logo antes de um cartão seu (T09, T11, T16) |
| Liliane → Alexandre | T25, T26, T27, T28 | Núcleo do cálculo (modais, valores base, sobretaxa, perfis), que trava o T33 e os testes |
| Liliane → Murilo | T13, T20, T29 | O T13 vem depois do T12, o T20 é a revisão cruzada da Etapa 1, e o T29 (arredondamento) está ligado à saída do T34 |
| Alexandre → Liliane | T06, T31, T40, T43, T44, T45, T46 | Independentes ou no fim da cadeia |
| Murilo → Liliane | T38, T47 | No fim da cadeia |

**Conferência:** nenhum cartão meu ou seu depende de um cartão da Liliane. Os pré-requisitos dos cartões dela são nossos ou dela mesma (T37 a T40 → T45 → T46, e T42, T43 e T44 → T47).

### Pontos de atenção

- **A Liliane fica com só um cartão de código de produção (T31, rastreamento)** e sem documento da Etapa 1. Na defesa individual ela precisa alterar o código ao vivo. Os testes (T37 a T40), o T43 ("Do projeto ao código") e o ensaio (T45) dão a ela contato com o código, mas fica a ressalva.
- **Você passa a ter 8 cartões da Etapa 1** (entrega em 27/11), contra 5 meus e 3 da Liliane. Em troca, você sai dos cartões finais (T43 a T46), que antes concentravam a sua carga em 04/12.
- **O critério da fatia vertical do T01 deixa de valer.** O novo critério é "quem trava a cadeia somos nós dois".
- O **T35 continua comigo**, como você decidiu no PR #14.
- As duas dúvidas do T08 (onde ficam a sobretaxa e o arredondamento, no recado `inbox/liliane/2026-11-10-de-murilo-t07-pronto-para-o-t08.md`) e os dois pontos do comentário da Liliane no PR #16 (quem guarda o modal e o CO₂ no aviso) **passam para você**, junto com o T08.
- A coordenação dos cartões que os três executam muda de dono: o **T20 fica comigo**, e o **T45 e o T46 ficam com a Liliane**.

## Depois da aprovação

1. Eu atualizo o responsável de cada cartão no quadro.
2. O PR com o `docs/divisao-projeto.md` atualizado é mergeado na `dev`.
3. Eu aviso a Liliane na inbox dela.

## Resposta

**Alexandre, 2026-11-14:** aprovado como está, no PR #17 (review "Approve"). Fico com o T08 e com as dúvidas que vêm junto: onde ficam a sobretaxa e o arredondamento, e os dois pontos do PR #16 (quem guarda o modal e o CO₂ no aviso). Os riscos anotados no documento (a Liliane com um só cartão de código para a defesa ao vivo e a carga dela concentrada perto de 04/12) seguem em acompanhamento. Pode atualizar o quadro e avisar a Liliane.
