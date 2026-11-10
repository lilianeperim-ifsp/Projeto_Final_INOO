---
para: liliane
de: murilo
data: 2026-11-10
tipo: aviso
status: pendente
---

## O que é

A seção 1 do Documento de Projeto (T07, Análise do problema) está no PR #15. É ela que destrava o seu T08 (Catálogo de classes e interfaces). Duas dúvidas da análise ficam com você (abaixo).

## Contexto

PR #15: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/15 (revisor: Alexandre)

Arquivo: `docs/Documento_de_Projeto.md`, seção 1.

- **O documento agora é oficial.** Não pode mais ser apagado nem substituído, apenas editado por PR. A regra está no cabeçalho do documento e no `CLAUDE.md`. O T08 entra como seção 2 nesse mesmo arquivo.
- A análise diz **quais conceitos existem e o que cada um é**, sem fixar nomes de classes. Modal, perfil, status e interessado saíram como **hierarquia**: se cada um vira interface ou classe abstrata é decisão sua no T08.
- Pode começar o T08 lendo o PR mesmo antes do merge. Se discordar de alguma classificação, comente no PR.

**Dúvidas da seção 1.7 que dependem de você:**

1. **Onde fica a sobretaxa? (T08 e T10)** O cenário "8% acima de 2000 kg" exige trocar a regra em um só lugar. As opções são deixá-la na abstração comum dos modais (classe abstrata com a fórmula do frete, cada modal fornece só os seus números: Template Method) ou numa classe própria que o cálculo chama depois do frete base. O que não pode é cada modal ter o próprio `if (peso > 1000)` (erro 5 da Livraria).
2. **Onde fica o arredondamento? (T10)** Frete, tempo e CO₂ são arredondados para 2 casas, HALF_UP, depois do perfil. O cálculo normal e a simulação de outro perfil precisam arredondar no mesmo ponto, senão um deles sai diferente do gabarito. Um candidato natural é a classe do resultado do cálculo, que já nasceria arredondada.

As outras duas dúvidas (objeto de aviso e operação rejeitada) foram para o Alexandre em `inbox/ale/`.

## Resposta
