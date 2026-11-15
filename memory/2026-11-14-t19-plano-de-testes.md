---
data: 2026-11-14
autor: Murilo Leandro
assunto: T19, plano de testes (seção 8) e sincronização do PR 18
---

## Resumo

- **Inbox:** lida no início da sessão. Nenhum recado pendente em `inbox/murilo/` nem em `inbox/grupo/`.
- **PR #18 (T08):** foi mergeado na `dev` em 14/11 às 18:37 (merge commit `6f927b3`). A aprovação do Murilo
  veio depois do merge, às 19:19.
- **`/sincronizar-quadro`:** rodou como `s-202611150104`. A única mudança foi o PR #18 aprovado por Murilo. O T08 já
  estava em Concluído desde a sincronização `s-202611142138`, às 18:38. O registro mais antigo do histórico
  (`s-202611091518`) foi apagado, para manter só os 30 mais recentes.
- **T19:** a seção **8. Plano de testes** foi escrita em `docs/Documento_de_Projeto.md`, e a tabela de situação do
  cabeçalho ganhou a linha do T19. Os números esperados foram conferidos com Python contra a RN 2, a RN 4 e a
  RN 12. O PDF foi gerado com `/documento` (`docs/Documento_de_Projeto.pdf`, 862 KB, fora do git).
- **O que ainda não foi feito:** a seção 8 **não foi commitada**, e o T19 já estava em "Em andamento" no quadro, movido
  pela página às 22:08.

## Decisões tomadas

- **Ferramenta de teste: JUnit 5** (decisão do Murilo).
  - Por quê: o enunciado pede testes unitários com conferência automática (ET 7, item 2), e o JUnit dá a asserção
    pronta e roda tudo pelo IntelliJ.
  - Alternativa descartada: o estilo das aulas, que era a recomendação do Claude. Seriam classes de teste com `main`
    no pacote `testes` (aula 6) e um método próprio `confere(esperado, obtido)`. Ele usa só o que foi ensinado, mas
    reescreve à mão o que o JUnit faz.
  - Do estilo das aulas, o plano aproveita o pacote `testes` separado, que obriga a testar só pelo que é `public`, e
    o "checkpoint" das aulas 11 e 12, que virou o nível do lote: `java Main < entrada.txt` comparado com
    `saida_esperada.txt` por `fc` ou `diff` (T41).
- **Estrutura da seção 8:**

  | Subseção | Conteúdo |
  |---|---|
  | 8.1 | Como testar: os dois níveis, as regras tiradas dos bugs 1, 2, 11, 19 e 20 da Livraria e os testes de regressão nos cenários de evolução |
  | 8.2 | Cálculo: gabarito, sobretaxa em 1000 e 1001 kg, distância 0, arredondamento e capacidade no limite |
  | 8.3 | Validação: um caso por motivo, a ordem da RN 6 e as bordas de formato e de valor |
  | 8.4 | Lote e saída |
  | 8.5 | Rastreamento |
  | 8.6 | Troca de perfil |
  | 8.7 | Avisos, numa tabela passo a passo |
  | 8.8 | Rastreabilidade: exigência do enunciado → subseção → classe de teste |

- **Rejeição no `Transporte` (mecanismo é do T14):** os testes conferem o **efeito**: quem pediu fica sabendo, o
  estado não muda e ninguém é avisado. A asserção exata entra quando o T14 decidir entre valor de retorno e
  exceção.
- **Caso novo encontrado:** distância `-0.0` é válida (não é < 0), mas o CO₂ sai `-0.0`, e o `String.format`
  imprimiria `-0,00`. O plano exige `VALIDA;7;3,40;2,50;0,00`. Isso interessa ao T29 (arredondamento) e ao T34
  (saída).
- **Git:** a seção 8 só é commitada depois do merge do PR #19 (T12), para não entrar no mesmo PR.
  - Alternativas descartadas: juntar os dois no PR #19, ou commitar localmente agora.

## Erros e rejeições da IA

- **Erro (premissa):** o Claude disse que o T08 "provavelmente ainda está em Em PR" depois do merge do PR #18. Ele
  concluiu isso pelo horário da última sincronização de que lembrava, sem ler o quadro. Uma sincronização das 18:38
  já tinha movido o cartão. O erro foi percebido ao rodar a skill e ler o cartão, e o Claude corrigiu a informação.
- **Rejeição (projeto):** o Claude recomendou o estilo das aulas (`main` + `confere`) para os testes, e o Murilo
  escolheu JUnit 5. Está registrada na 8.1 como alternativa descartada.

## Pendências

- **Avisar o professor de que o grupo vai usar JUnit**, que não aparece nos slides, antes do T21.
- O PR #18 foi mergeado antes da aprovação do Murilo. Vale conferir se os ajustes da revisão entraram. Pela
  seção 2 atual, entraram: há etapas abstratas, o critério de interface, o `arredondar` único e a `Modal` concreta
  como alternativa descartada.
- Revisão do PR #19 (T12) pelo Alexandre.
- Mecanismo da operação rejeitada no `Status` e no `Transporte` (T14, Alexandre): os casos da 8.5 a 8.7 ganham a
  asserção exata depois.

## Próximos passos

- Depois do merge do PR #19:
  1. `git pull origin dev` na `logitech/murilolss`;
  2. commitar a seção 8 do `docs/Documento_de_Projeto.md`;
  3. dar push e abrir o PR do T19 com `gh pr create --base dev --head logitech/murilolss --reviewer alexsant22`;
  4. mover o T19 para "Em PR" e rodar `/sincronizar-quadro`.
- Rodar `/sincronizar-quadro` também para o T12 ir para Concluído.
- Próximo cartão do Murilo: T13 (fluxo da troca de perfil, seção 6.2), que depende do T12. A 8.6 já traz os valores
  esperados que podem ser reaproveitados nele.
