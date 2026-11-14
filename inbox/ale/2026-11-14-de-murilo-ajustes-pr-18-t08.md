---
para: ale
de: murilo
data: 2026-11-14
tipo: duvida
status: pendente
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

