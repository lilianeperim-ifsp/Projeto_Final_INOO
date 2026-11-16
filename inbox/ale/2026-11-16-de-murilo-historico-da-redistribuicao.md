---
para: ale
de: murilo
data: 2026-11-16
tipo: aviso
status: pendente
prioridade: maxima
---

## O que é

Resumo de tudo o que foi feito na redistribuição das tarefas (PR #17): o que eu propus, o que você aprovou, como
ficou a divisão, em especial a parte da Liliane, e o que ainda falta. Cada passo indica o arquivo ou o commit onde
está registrado, para você poder conferir.

## Contexto

### 1. Linha do tempo

| Quando | O que aconteceu | Onde está registrado |
|---|---|---|
| 14/11 | Mandei a proposta de redistribuição para você | `inbox/ale/2026-11-14-de-murilo-redistribuicao-das-tarefas.md` (`0c0409b`, corrigido em `2128549`) |
| 14/11 | Reescrevi o `docs/divisao-projeto.md` e abri o PR #17 com você de revisor | `377156d`, https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/17 |
| 14/11 | Você aprovou (review "Approve", sem pedir ajustes) | sua resposta nos recados `2026-11-14-de-murilo-redistribuicao-das-tarefas.md` e `2026-11-14-de-murilo-revisar-pr-17.md` |
| 14/11, 16:07 | Você fez o merge na `dev` | merge commit `3e1d3fb` e recado `inbox/murilo/2026-11-14-de-ale-merge-pr-17-na-dev.md` |
| 14/11 | Gravei os novos responsáveis no quadro, rodei o `/sincronizar-quadro` e avisei a Liliane | `memory/2026-11-14-responsaveis-no-quadro-apos-pr-17.md`, sincronização `s-202611141910`, commit `597a6ae` |
| 15/11 | A Liliane confirmou que está ciente | resposta dela em `inbox/liliane/2026-11-14-de-murilo-nova-divisao-das-tarefas.md` |

### 2. O que você aprovou

Sua resposta, em 14/11:

> "Aprovado como está, no PR #17 (review "Approve"). Fico com o T08 e com as dúvidas que vêm junto: onde ficam a
> sobretaxa e o arredondamento, e os dois pontos do PR #16 (quem guarda o modal e o CO₂ no aviso). Os riscos
> anotados no documento (a Liliane com um só cartão de código para a defesa ao vivo e a carga dela concentrada perto
> de 04/12) seguem em acompanhamento. Pode atualizar o quadro e avisar a Liliane."

O Claude da sua sessão sugeriu passar à Liliane o T15 ou o T16 e o T32 antes de aprovar. Você recusou a sugestão e
manteve a divisão como estava. Essa recusa está registrada como rejeição em `docs/relatorio_ia_notas.md`.

### 3. Critério e alternativas descartadas

- **Critério:** eu e você ficamos com a "espinha" da cadeia de dependências, ou seja, os cartões que travam outros
  (documento da Etapa 1 e núcleo do código). A Liliane fica com os cartões independentes e com os do fim da cadeia.
  Assim, **nenhum cartão meu ou seu depende de um cartão dela**. Um script conferiu o campo `dependeDe` dos 47
  cartões do quadro: os 43 em aberto estão atribuídos e nenhum aparece duas vezes.
- **Alternativas descartadas:**
  - A leitura estrita, em que a Liliane fica só com os cartões totalmente independentes (T04, T05, T06, T31 e T46).
    Seriam 5 cartões para ela e 38 para nós dois.
  - Todo o cálculo comigo. Eu ficaria com 19 cartões e você com 11.
  - Avisar a Liliane antes da sua aprovação.
- **Substituída:** a divisão por fatias verticais de 10/11 (PR #14).

### 4. Como ficou a divisão (43 cartões em aberto)

| Integrante | Cartões |
|---|---|
| **Murilo (14)** | T12, T13, T17, T19, T20, T21, T22, T23, T24, T29, T33, T34, T35, T41 |
| **Alexandre (15)** | T08, T09, T10, T11, T14, T15, T16, T18, T25, T26, T27, T28, T30, T32, T36 |
| **Liliane (14)** | T04, T05, T06, T31, T37, T38, T39, T40, T42, T43, T44, T45, T46, T47 |

**Trocas de dono (19 cartões):**

| De → Para | Cartões | Por quê |
|---|---|---|
| Liliane → Alexandre | T08, T10, T15 | Cada um vem logo antes de um cartão seu (T09, T11, T16) |
| Liliane → Alexandre | T25, T26, T27, T28 | Núcleo do cálculo, que trava o T33 e os testes |
| Liliane → Murilo | T13, T20, T29 | O T13 vem depois do T12, o T20 é a revisão cruzada e o T29 está ligado ao T34 |
| Alexandre → Liliane | T06, T31, T40, T43, T44, T45, T46 | Independentes ou no fim da cadeia |
| Murilo → Liliane | T38, T47 | No fim da cadeia |

O seu recado do merge falava em 20 trocas, mas a conta dá **19** (3 + 4 + 3 + 7 + 2). Gravei 19 no quadro e anotei
a diferença na resposta daquele recado.

### 5. A nova parte da Liliane

| Cartão | Título | Etapa | Área | Depende de |
|---|---|---|---|---|
| T04 | Atualizar a branch e ler o projeto de exemplo | 1 | Organização | nenhum |
| T05 | Conferir se o diagrama Mermaid do exemplo renderiza | 1 | Organização | nenhum |
| T06 | Confirmar com o professor o que as aulas 8 e 9 permitem | 1 | Organização | nenhum |
| T31 | Rastreamento do transporte | 2 | Implementação | T30 (Alexandre) |
| T37 | Testes dos cálculos com o gabarito | 2 | Testes | T26, T27, T28 (Alexandre), T29 (Murilo) |
| T38 | Testes de borda da validação | 2 | Testes | T24, T35 (Murilo) |
| T39 | Teste da troca de perfil em execução | 2 | Testes | T28 (Alexandre) |
| T40 | Teste dos avisos automáticos | 2 | Testes | T32 (Alexandre) |
| T42 | COMO_EXECUTAR.md | 2 | Entrega | T41 (Murilo) |
| T43 | Documento de Projeto revisado: Do projeto ao código | 2 | Entrega | T36 (Alexandre) |
| T44 | Relatório de uso de IA (máx. 3 páginas) | 2 | Entrega | nenhum |
| T45 | Ensaiar a implementação ao vivo de cenários de evolução | 2 | Defesa | T37 a T40 (dela) |
| T46 | Preparar a defesa oral individual | 2 | Defesa | T43, T45 (dela) |
| T47 | PR da dev para a main e conferência da entrega final | 2 | Entrega | T41 (Murilo), T42 a T44 (dela) |

- **O que mudou para ela:** antes ela tinha 15 cartões, com o cálculo de ponta a ponta (T04, T05, T08, T10, T13,
  T15, T20, T25 a T29, T37, T39 e T42). Agora tem 14, voltados a testes, entrega final e preparação da defesa.
  Continuaram com ela o T04, o T05, o T37, o T39 e o T42.
- **Cadeias internas dela:** T37 a T40 → T45 → T46, e T42, T43 e T44 → T47.
- **Coordenação:** ela coordena o T04, o T45 e o T46, que os três executam. O T20 fica comigo.
- **Situação:** em 15/11 ela respondeu "ciente da nova divisão" e disse que começa pelos independentes: T06, T44,
  T04 e T05.

### 6. Comparação entre os três

| Medida | Murilo | Liliane | Alexandre |
|---|---|---|---|
| Cartões em aberto | 14 | 14 | 15 |
| Etapa 1 (documento) | 5 | 3 | 8 |
| Etapa 2 | 9 | 11 | 7 |
| Código de produção | 8 | 1 | 7 |
| Testes | 1 | 4 | 0 |
| Entrega e defesa | 0 | 6 | 0 |

### 7. Riscos que continuam em acompanhamento

1. A Liliane tem um único cartão de código de produção (T31) e nenhum documento da Etapa 1. O contato dela com o
   código para a defesa ao vivo vem dos testes (T37 a T40), do T43 e do ensaio (T45).
2. Os 11 cartões dela da Etapa 2 ficam no fim da cadeia, perto de 04/12, e a entrega final (T42, T43, T44 e T47) é
   com ela.
3. Você concentra 8 cartões da Etapa 1 até 27/11, além de revisar todos os PRs.

### 8. O que ainda falta

- O cabeçalho do `docs/divisao-projeto.md` na `dev` (linha 4) ainda diz que a divisão "aguarda a aprovação do
  Alexandre neste PR". A seção "Situação e próximos passos" também não registra que a aprovação, o quadro e o aviso à
  Liliane já foram feitos. Eu corrijo isso num próximo PR da `logitech/murilolss`, com você de revisor.

## Resposta
