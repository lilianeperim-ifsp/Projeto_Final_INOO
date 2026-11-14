---
data: 2026-11-14
autor: Alexandre Santos
assunto: ajustes da revisão do PR 18 (T08)
---

## Resumo
O Alexandre atualizou a `logitech/alexsant22` com a `dev` (`/atualizar-branch`, merge `45ab379`). Chegou um recado do
Murilo (`inbox/ale/2026-11-14-de-murilo-ajustes-pr-18-t08.md`): ele revisou o PR #18 (T08, catálogo de classes) e só
aprova depois que o Alexandre aceitar ou recusar quatro ajustes. O Claude leu a revisão no GitHub, conferiu cada ponto
nas seções 2.1 e 2.2 do Documento de Projeto, nas RN 2 a 5, nos cenários de evolução e nas notas de padrões, e concluiu
que o Murilo tinha razão nos quatro, com dois detalhes a acrescentar. O Alexandre aceitou tudo. O Claude editou o
documento, anotou o erro no relatório de IA e respondeu o recado. Commits: `a874277` na `logitech/alexsant22` (atualiza
o PR #18) e `7f88a86` na `dev` (só a resposta da inbox).

## Decisões tomadas
- **Template Method de verdade em `Modal` e `PerfilPorMultiplicadores` (2a):** os parâmetros deixam de vir pelo
  construtor e viram etapas abstratas `protected` (`custoPorKm()`, `custoPorKg()`, `velocidade()`, `manuseio()`,
  `fatorEmissao()`, `capacidadeMaxima()`; `multiplicadorFrete()`, `multiplicadorTempo()`, `multiplicadorCo2()`). A
  fórmula da classe abstrata chama essas etapas, como o `Livro.calculaFrete()` abstrato da aula 11. **Por quê:** sem
  etapa abstrata não há Template Method para mostrar na defesa, e métodos com nome impedem trocar dois números de lugar
  (com o construtor de 6 `double`, esquecer um parâmetro também não compilava; o ganho real é contra a troca de
  ordem). `protected` segue a aula 6 ("default + filhas"). **Descartada:** parâmetros no construtor com
  `super(...)`, agora registrada como alternativa na 2.2.1. Custo na defesa: o ferroviário passa a ter 6 métodos de uma
  linha (o IntelliJ gera os esboços com "Implement methods").
- **Critério interface × classe abstrata (2b):** há interface quando o colaborador troca a implementação em execução
  ou quando existe mais de um jeito de implementar o contrato. O perfil tem as duas coisas (troca no transporte e na
  simulação, e o PREMIUM muda comportamento), e o modal nenhuma (fixo na encomenda, só muda números). `Modal`
  abstrata já é uma abstração, então "depender de abstrações" continua valendo. **Descartada:** a justificativa
  antiga ("o Template Method precisa da fórmula numa classe"), que valia também para o perfil.
- **Arredondamento num único ponto (2c):** `static ResultadoCalculo.arredondar(valor)`, chamado pelo construtor do
  `ResultadoCalculo` e pelo `Relatorio.getTempoMedio()` (média arredondada só no fim, RN 5). Ficou no próprio
  `ResultadoCalculo` para não criar um 32º tipo. **Descartada:** uma classe própria de arredondamento.
- **Alternativa descartada da `Modal` concreta (2d):** incluída na 2.2.1. Além do motivo do Murilo (o cenário pede
  "classes novas"), o Claude somou que ela alteraria só a camada de entrada, o que o cenário permitiria, mas poria os
  números da RN 2 nessa camada (baixa coesão) e não teria polimorfismo.
- **Sugestões menores aceitas:** `Posicao.posicaoValida(lat, lon)` `static`, como o `isbnValido`;
  `Encomenda.excedeCapacidade()` sai, e o `InterpretadorDeLinha` chama `modal.excedeCapacidade(peso)` antes de criar a
  encomenda; aviso ao T12 e ao T14 de que devolver `null` na rejeição do `Status` repete o erro 13; no CANCELADO, o
  `Transporte` entra na lista de alteradas; Simple Factory marcada como padrão de fora da lista. O total segue em 31
  tipos.

## Erros e rejeições da IA
- **Erro (projeto), encontrado pelo Murilo na revisão do PR #18:** na proposta do T08, o Claude chamou de Template
  Method um `Modal` cujas filhas só passavam números ao `super(...)`, e justificou a falta de interface em `Modal` com
  um argumento que valia também para `Perfil`. Corrigido como descrito acima. **A linha já está em
  `docs/relatorio_ia_notas.md` no commit `a874277` (branch do PR #18)** e chega à `dev` com o merge do PR; por isso não
  foi repetida aqui, para não duplicar a linha nem gerar conflito no merge.

## Pendências
- O Murilo ler a resposta do recado e aprovar o PR #18. Depois do merge, ele roda `/sincronizar-quadro`.
- Dúvidas para o professor que continuam abertas: `final` no método-modelo (2.1.1) e `BigDecimal`/`RoundingMode`
  no arredondamento (2.1.2).
- T12 e T14: decidir o mecanismo da operação rejeitada no `Status` (exceção ou método que pergunta antes), sem `null`.
- T11: justificar Template Method, Strategy, State, Observer e a Simple Factory (padrão de fora da lista).
- Lembrete do Murilo para o T12, que não entrou no documento: numa linha com número errado de campos cujo primeiro
  campo é inteiro, a saída usa o ID, e não `LINHA<n>` (RN 11).

## Próximos passos
- Rodar `/atualizar-branch` para trazer a resposta do recado e esta memória para a `logitech/alexsant22`.
- Acompanhar a aprovação e o merge do PR #18 e avisar o Murilo para sincronizar o quadro.
- Seguir para as próximas tarefas do Alexandre (T10, estratégia, e T11, padrões), já com o desenho de `Modal` e
  `Perfil` acordado.
