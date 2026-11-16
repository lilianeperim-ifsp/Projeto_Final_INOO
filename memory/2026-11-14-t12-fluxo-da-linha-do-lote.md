---
data: 2026-11-14
autor: Murilo Leandro
assunto: T12, fluxo da linha do lote (seção 6.1) e PR 19
---

## Resumo
- **Recado do Alexandre:** o Murilo leu a resposta sobre os ajustes do PR #18. O Alexandre aceitou os quatro ajustes (2a a 2d) e as sugestões menores.
- **Merge do PR #18 e quadro:** o PR #18 foi mergeado na `dev`, e a `logitech/murilolss` foi atualizada com a `dev`. Na sincronização do quadro, o PR #18 passou a "mergeado" e o T08 foi para Concluído. O PR #18 foi mergeado **sem nenhuma aprovação formal**: a avaliação do Murilo ficou como "Commented", e o pedido de revisão para a Liliane continuou pendente.
- **T12:** o Murilo planejou e escreveu a seção **6.1, Processamento de uma linha do lote**, em `docs/Documento_de_Projeto.md`. Ela tem:
  - diagrama de sequência em Mermaid;
  - passo a passo em 9 etapas;
  - decisão sobre a rejeição no lote;
  - o exemplo da RN 11 percorrido;
  - casos de borda;
  - eficiência O(n);
  - os pontos do fluxo que os cenários do separador `,`, do peso mínimo e do modal vindo de configuração alteram.
- **PDF:** o PDF foi gerado com `/documento` (13 páginas), e o Murilo confirmou que o diagrama saiu desenhado. O PDF continua fora do git.
- **PR #19 e quadro:** a T12 foi commitada (`23ce1ac`) e o PR #19 foi aberto para a `dev`, com o `alexsant22` como reviewer. O T12 foi para "Em PR", ligado ao PR #19.
- **Recados enviados à inbox do Alexandre, direto na `dev`:**
  - `inbox/ale/2026-11-14-de-murilo-operacao-rejeitada-no-t14.md` (`32465f2`): a parte da 1.7 que fica com ele no T14;
  - `inbox/ale/2026-11-14-de-murilo-revisar-pr-19-t12.md` (`3a23a24`): pedido de revisão do PR #19.

## Decisões tomadas
- **Escopo da 1.7 na T12: só o lote.** A dúvida "a operação rejeitada devolve um valor ou lança uma exceção?" ficou resolvida para o lote. A parte do `Status` e do `Transporte` segue com o Alexandre, no T14.
  - Por quê: o T14 é dele e trata das transições.
  - Alternativa descartada: decidir também o mecanismo do `Status`/`Transporte` na T12, o que invadiria o T14.
- **No lote, a rejeição é um valor, não uma exceção.** O `InterpretadorDeLinha` sempre devolve uma `LinhaInterpretada`, e a linha inválida leva uma `Rejeicao`.
  - A única exceção do caminho é a `NumberFormatException` de `Integer.parseInt`/`Double.parseDouble`. Ela é capturada no próprio campo e vira `formato invalido`, como no `setValor` da Livraria.
  - `NaN` e `Infinity` são barrados com `Double.isFinite`.
  - Alternativas descartadas:
    - a fábrica devolver `null` (erro 13 da Livraria);
    - o interpretador lançar exceção (já descartado na 1.2 e na 2.2.6);
    - uma `LinhaInterpretada` polimórfica, com uma subclasse por tipo de linha. O `if (ehValida())` testa o resultado da linha, e não o modal nem o perfil, então não fere a ET 3.2.
- **`FabricaDeCodigos` ganha `existeModal(codigo)` e `existePerfil(codigo)` → `boolean`**, chamados antes de `criarModal` e `criarPerfil`. É o mesmo "validar antes de criar" de `Posicao.posicaoValida` e `excedeCapacidade`.
  - É uma mudança no catálogo do Alexandre (2.2.6) e está destacada no PR #19 para ele aprovar.
  - Alternativa descartada: devolver `null`.
- **Identificador da rejeição:** se o 1º campo é inteiro, a saída usa o ID, mesmo com o número de campos errado (`5;AEREO` → `REJEITADA;5;formato invalido`). Se não é, usa `LINHA<n>`. Isso fecha o lembrete da memória anterior.
- **Formato da 6.1: diagrama de sequência em Mermaid + passo a passo numerado.**
  - Alternativas descartadas: só texto (menos visual para a defesa) e só diagrama (difícil mostrar a ordem da validação e os casos de borda).
- **Posição no documento:** a seção 6 entrou logo depois da 2. As seções 3 a 5 (T09 a T11) serão inseridas antes dela pelos PRs delas.
- **Ajustes pequenos no mesmo PR:**
  - tabela de situação no topo (seção 2 como "Escrita" e a linha da 6.1);
  - linha da 1.7;
  - introdução da 2.2;
  - nota da 2.2.6, que passou de "A conferir pelo Murilo" para "Conferida pelo Murilo no T12".

## Erros e rejeições da IA
- **Erro (documentação):** no primeiro rascunho do diagrama de sequência da 6.1, o Claude escreveu `;` e `List<String>` dentro das mensagens do Mermaid (`split(";", -1)`, `"VALIDA;..."`). No Mermaid, `;` separa comandos, e `<...>` pode sumir como tag HTML, então o diagrama quebraria. O próprio Claude percebeu ao revisar o bloco, antes de gerar o PDF. A correção foi trocar por `#59;` e `#lt;`/`#gt;` e reescrever as mensagens de retorno como "linha VALIDA". O PDF saiu com o diagrama desenhado.

## Pendências
- **Alexandre:**
  - revisar e aprovar o PR #19, incluindo a mudança na 2.2.6 (`existeModal`/`existePerfil`);
  - decidir no T14 o mecanismo da rejeição no `Status`/`Transporte`, sem `null`, e atualizar a linha da 1.7. O recado sugere, como opção dele, seguir o padrão do lote: métodos que perguntam antes no `Status` e `boolean` no `Transporte`.
- **Aviso desatualizado:** o aviso no início da seção 2 ainda diz "Em revisão (T08, Alexandre)", embora o PR #18 tenha sido mergeado. A seção é do Alexandre.
- **Dúvidas para o professor que continuam abertas:** `final` no método-modelo (2.1.1) e `BigDecimal`/`RoundingMode` no arredondamento (2.1.2).

## Próximos passos
- Quando o PR #19 for mergeado, o Murilo roda `/sincronizar-quadro` para o T12 ir para Concluído.
- **Próximas tarefas do Murilo:** o T13 (fluxo da troca de perfil, seção 6.2), que depende do T12, e o T19 (plano de testes), já liberado. Os casos de borda da 6.1 servem de base para o T19.
- Vale avisar o Alexandre pelo WhatsApp de que há dois recados novos na inbox dele.
