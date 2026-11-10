---
data: 2026-11-10
autor: Murilo Leandro
assunto: T07, análise do problema e Documento de Projeto oficial
---

## Resumo

O Murilo começou o primeiro cartão de documento dele, o T07 (Análise do problema), que destrava o T08 (catálogo, Liliane). O Claude fez um primeiro rascunho da seção 1 em `docs/Documento_de_Projeto.md`. O Murilo pediu que a tarefa seguisse os padrões de projeto, o conteúdo das aulas e o projeto de exemplo (Livraria), e pediu o plano com o motivo de cada escolha. Em modo de plano, o Claude leu `contexto/projeto-exemplo.md` (checklist da seção 10), `contexto/slides/README.md` e `contexto/padroes-projeto/README.md`, e propôs reescrever a seção com método explícito. O Murilo aprovou o plano e a seção foi reescrita. Depois, o Claude explicou as 4 dúvidas da seção 1.7.

Com o pedido do Murilo: commit `80e3eb7` na `logitech/murilolss`, **PR #15** para a `dev` (revisor `alexsant22`), recados para o Alexandre e para a Liliane (commit `81a8902` na `dev`), erro do primeiro rascunho anotado em `docs/relatorio_ia_notas.md` (commit `a26157f` na `dev`) e o cartão **T03 movido para "Concluído"** no quadro (o Murilo confirmou que Liliane e Alexandre já sabem da regra dos 5 minutos).

## Decisões tomadas

- **Método da seção 1: substantivos e verbos do enunciado**, com 4 perguntas de classificação baseadas nas aulas (comportamento próprio ou variação → classe ou hierarquia, aulas 11 e 12; parte que outro conceito "tem" → composição, aula 10; só descreve → atributo, aulas 2 e 3; contexto ou ator externo → descartado). Por quê: é a técnica que o enunciado cita e cada linha fica defensável na arguição. Alternativa descartada: partir dos padrões e encaixar os conceitos, que inverte a ordem avaliada (análise, projeto, estratégia) e leva a padrão sem justificativa.
- **A análise não fixa nomes de classes, interface × classe abstrata nem padrões.** Modal, perfil, status e interessado saem como "hierarquia"; os padrões da seção 1.5 são só **candidatos** (Strategy, Template Method, State, Observer, Simple Factory, Decorator para o piso do PREMIUM). Por quê: essas decisões são do T08 e do T10 (Liliane) e do T11 (Alexandre). Alternativa descartada: o primeiro rascunho, que já dizia "interface + 3 classes" e usava nomes como `Estimativa` e `Rejeicao`.
- **Encomenda e transporte são conceitos separados**: a encomenda guarda os dados de entrada (imutáveis) e o transporte o estado que muda. Por quê: evita o item 21 do checklist da Livraria (cálculo gravado por cima do dado) e permite trocar perfil e simular.
- **Rejeição é um conceito próprio**, não exceção no fluxo da validação (itens 2 e 13 do checklist).
- **Descartados:** operadora LogiTech, operador, linha do lote, lote e "cliente" como classe separada do interessado.
- **`docs/Documento_de_Projeto.md` passa a ser o documento oficial**, a pedido do Murilo: não pode ser apagado, renomeado nem substituído, só editado por PR. Registrado no cabeçalho do documento (com tabela de situação das seções) e no `CLAUDE.md` (seção "Documento de Projeto"). Alternativa descartada: manter como rascunho até a Etapa 1 fechar.
- **As dúvidas da seção 1.7 foram para quem decide**, cada recado só com as suas: Alexandre (aviso como objeto, T14; operação rejeitada por retorno ou exceção, T14 com o T12 do Murilo) em `inbox/ale/2026-11-10-de-murilo-revisar-pr-15-t07-analise.md`; Liliane (lugar da sobretaxa, T08/T10; lugar do arredondamento, T10) em `inbox/liliane/2026-11-10-de-murilo-t07-pronto-para-o-t08.md`.

## Erros e rejeições da IA

- **Erro (modelagem):** no primeiro rascunho do T07, o Claude classificou modal, perfil, status e interessado como "interface + 3 classes" e deu nomes de classes, sem método explícito nem rastreabilidade ao enunciado, decidindo na análise o que é do T08, do T10 e do T11. Percebido quando o Murilo pediu que a tarefa seguisse os padrões das aulas, do exemplo e de projeto; corrigido com o plano aprovado e a reescrita da seção 1 (PR #15). Já registrado em `docs/relatorio_ia_notas.md` (commit `a26157f`).

## Pendências

- **Revisão do Alexandre no PR #15** e merge.
- **Mover o T07 para "Em PR"** no quadro (manual) e rodar `/sincronizar-quadro` para ligar o PR #15 ao cartão.
- **Conferir o `atualizadoEm` do T01**, pendente desde a sessão do PR #14 (hoje aparece `2026-11-10T22:52:11Z`, talvez já corrigido).
- **Respostas às 4 dúvidas da seção 1.7**: Liliane (sobretaxa e arredondamento) e Alexandre (objeto de aviso e operação rejeitada, esta junto com o T12 do Murilo).
- Os slides das aulas 7, 8 e 9 continuam ausentes (T06, Alexandre); isso pesa na decisão entre retorno e exceção, porque `try/catch` não aparece nos slides disponíveis.

## Próximos passos

1. Mover o T07 para "Em PR" e rodar `/sincronizar-quadro`.
2. Depois do merge do #15, a Liliane começa o T08 como seção 2 do mesmo `docs/Documento_de_Projeto.md`.
3. Próximo cartão de documento do Murilo: T12 (fluxo de processamento de uma linha do lote), que depende do T08 e da decisão sobre operação rejeitada.
4. No começo da próxima sessão: `git pull origin dev`, ler as memórias mais recentes e os recados pendentes em `inbox/murilo/`.
