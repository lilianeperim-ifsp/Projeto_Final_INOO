---
para: ale
de: murilo
data: 2026-11-14
tipo: duvida
status: concluido
---

## O que é

Revisei o PR #18 (T08) e deixei um comentário com melhorias. Você aceita esses ajustes?

- **Se aceitar:** responda aqui com "aceito" e diga se vai mudar o documento neste mesmo PR. Com a sua resposta, eu aprovo o PR #18.
- **Se não aceitar** (todos ou algum deles): diga **qual e por quê** e me responda. O motivo vai para o relatório de IA como rejeição.

## Contexto

PR #18: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/18 (o comentário completo está lá)

Ajustes pedidos antes da aprovação:

1. **2a. O desenho não é Template Method (2.2.1):** as filhas de `Modal` só passam números ao `super(...)` e não implementam nenhuma etapa abstrata. Sugestão: trocar o construtor por métodos abstratos (`custoPorKm()`, `velocidade()` etc.), como o `Livro.calculaFrete()` da aula 11. Assim, um parâmetro esquecido não compila. A outra opção é tirar a palavra "Template Method" do texto. O mesmo vale para `PerfilPorMultiplicadores`.
2. **2b. Por que `Perfil` tem interface e `Modal` não:** usar um critério que todos consigam repetir na defesa. O perfil troca em execução e é simulado (Strategy), e o PREMIUM muda comportamento. O modal só muda parâmetros.
3. **2c. Dois pontos de arredondamento:** o `ResultadoCalculo` e o `Relatorio.getTempoMedio()`. Sugestão: um único método `static` usado pelos dois.
4. **2d. Falta uma alternativa descartada:** uma `Modal` concreta, sem subclasses, configurada na fábrica. Ela é descartada porque o cenário do ferroviário pede "classes novas".

As sugestões menores (`Posicao`, rejeição no `Status`, `Transporte` alterado no CANCELADO, `excedeCapacidade`, Simple Factory) não impedem a aprovação.

## Resposta

**Aceito os quatro (2a a 2d)**, e a mudança entra neste mesmo PR #18. Também aceitei as sugestões menores. (Alexandre, 2026-11-14)

- **2a:** os parâmetros viraram etapas abstratas `protected` em `Modal` (`custoPorKm()` … `capacidadeMaxima()`) e em `PerfilPorMultiplicadores` (`multiplicadorFrete()` … `multiplicadorCo2()`). Um detalhe: com o construtor de 6 `double`, esquecer um parâmetro também não compilava. O ganho real é contra **trocar dois números de lugar**, e é isso que o documento diz agora.
- **2b:** critério escrito na 2.2.1: interface quando o colaborador troca a implementação em execução ou quando existe mais de um jeito de implementar o contrato. O perfil tem as duas coisas, o modal nenhuma.
- **2c:** um único `ResultadoCalculo.arredondar(valor)`, usado pelo construtor e pelo `Relatorio.getTempoMedio()` (2.1.2 e 2.2.5).
- **2d:** alternativa descartada incluída. Somei um motivo ao seu: a `Modal` concreta alteraria só a camada de entrada, o que o cenário permite, mas poria os números da RN 2 nessa camada e não teria polimorfismo.
- **Menores:** `Posicao.posicaoValida` `static`; `excedeCapacidade` chamado no modal antes de criar a `Encomenda`; aviso ao T12/T14 sobre o `null` no `Status`; `Transporte` na lista de alteradas do CANCELADO; Simple Factory marcada como padrão de fora da lista.

O erro do Template Method foi anotado em `docs/relatorio_ia_notas.md` como erro da IA encontrado por você.
