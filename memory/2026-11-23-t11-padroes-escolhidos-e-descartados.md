---
data: 2026-11-23
autor: Alexandre Santos
assunto: T11, padrões escolhidos e descartados (seção 5)
---

## Resumo
O Alexandre rodou `/atualizar-branch`. A `logitech/alexsant22` foi atualizada com a `dev` sem conflito e trouxe a seção 3
(T09, PR #40 mergeado), os diagramas em `docs/diagramas/` e as memórias da Liliane sobre o conflito do PR #40. Na inbox
havia um recado pendente, `inbox/ale/2026-11-22-de-murilo-pendencias-da-etapa-1.md` (T11, T14 e T15 até 27/11).

Em seguida, o Claude propôs o conteúdo da seção 5 do Documento de Projeto (T11). O Alexandre aprovou a proposta, e o
Claude escreveu a seção em `docs/Documento_de_Projeto.md`, entre a 4 e a 6:
- 5.1, resumo dos 12 padrões;
- 5.2, padrões usados, cada um com problema, classes, porquê e alternativa descartada;
- 5.3, padrões descartados, com onde poderiam entrar e por que ficaram de fora;
- 5.4, pontos resolvidos sem padrão.

Também foram ajustados o quadro de situação do topo, uma nota na 1.5 apontando para a 5 e o aviso da seção 6, que
agora cita só a 6.3. O Alexandre revisou o texto e pediu commit e PR: commit `796c79f`, **PR #56** para a `dev`, com
Liliane e Murilo de reviewers. O recado `inbox/murilo/2026-11-23-de-ale-sincronizar-quadro-pr-56.md` foi enviado direto
para a `dev` (commit `3c066dc`).

## Decisões tomadas
- **Padrões usados:**
  - Template Method em `Modal` e em `PerfilPorMultiplicadores`;
  - Strategy em `Perfil`, com `Encomenda` e `Transporte` como contextos;
  - State em `Status`, com `Transporte` como contexto;
  - Observer, com `Transporte` como sujeito e `InteressadoEmStatus` e `InteressadoEmPosicao` como observadores, no
    modelo "empurrar" (o `Aviso` imutável);
  - Simple Factory em `FabricaDeCodigos`, justificada como de fora da lista do enunciado.

  Por quê: são os mecanismos já decididos nas seções 2 e 4, e a seção 5 só dá o nome e a alternativa descartada.
  Alternativa descartada: forçar um padrão em todo ponto de variação. A ET 5 diz que nenhum é obrigatório.
- **Decorator descartado no PREMIUM e na sobretaxa.** Por quê: só o PREMIUM tem piso e nenhum cenário combina
  responsabilidades em execução. Sobrescrever `aplicarFrete` chamando `super` usa uma classe, contra duas no
  Decorator. A sobretaxa vale sempre e para todos os modais. Confirma a 2.2.1. Alternativa descartada: um
  `PerfilComPiso` que embrulha outro `Perfil`.
- **Singleton descartado na `FabricaDeCodigos`.** Por quê: o acesso global esconde a dependência e atrapalha os
  testes, e a fábrica já devolve a mesma instância para o mesmo código. Alternativa descartada: um `getInstance()`
  estático.
- **Outros descartes e o motivo de cada um:**
  - Factory Method: não há família de criadores.
  - Prototype: modais e perfis não têm estado a copiar.
  - Builder: todos os campos da encomenda são obrigatórios e são validados antes do construtor.
  - Command: nenhuma regra pede fila, registro ou desfazer.
  - Adapter: não há interface incompatível.
  - Chain of Responsibility (5.4), descartado para a validação: a ordem das validações é fixa.
- **Parágrafo "State ou Strategy?" na 5.2.3.** A diferença está em quem troca o objeto: o perfil é escolhido de fora,
  e o status troca a si mesmo. Incluído porque é uma pergunta provável na defesa.

## Erros e rejeições da IA
Nenhum

## Pendências
- **PR #56:** revisão da Liliane e do Murilo.
- **Quadro:** o Murilo precisa rodar `/sincronizar-quadro` para a T11 ir para "Em PR" (recado enviado).
- **T14 (6.3):** continua em aberto a forma de indicar a transição rejeitada no `Status` e no `Transporte` (citada na
  5.2.3).

## Próximos passos
- Começar a T14 (fluxo de mudança de status e avisos), que já pode andar.
- Depois do merge do #56, fazer a T15 (cenários de evolução 1 a 4).
- Responder ao recado `inbox/ale/2026-11-22-de-murilo-pendencias-da-etapa-1.md` quando as tarefas fecharem.
