---
data: 2026-11-18
autor: lilianeperim-ifsp
assunto: diagrama de classes UML (T09)
---

## Resumo
A Liliane fez o T09: a seção 3 do `docs/Documento_de_Projeto.md`, com o diagrama de classes UML, aberta no **PR #40**
(`logitech/lilianeperim-ifsp` → `dev`, revisor `alexsant22`, commit `1ecdf0e`).

- **Tabela de tipos primeiro.** O catálogo (2.2) não trazia os tipos de atributos e retornos. O Claude montou uma
  tabela com os 31 tipos, tirando o que já estava no documento (`id` é `int` pela 1.3, a `Rejeicao` tem
  identificador `String` porque pode ser `LINHA4`, números `double`, contadores `int`). O que não estava escrito foi
  marcado como proposta (P1 a P6) e aprovado pela Liliane, com ajustes.
- **Seis diagramas Mermaid:** a 3.1 é a visão geral, com só os nomes, as hierarquias, as associações com
  multiplicidade e as dependências **entre grupos**. A `FabricaDeCodigos` aparece com duas setas, "cria os
  concretos", para `Modal` e `Perfil`, em vez de seis. De 3.2 a 3.6 vem um diagrama por grupo da 2.2, com atributos e
  métodos tipados no estilo do diagrama da Livraria (`-String nome`, `+metodo(double x) tipo`, `*` abstrato,
  `$` static). A 3.7 traz as decisões. A seção tem também uma legenda "Como ler".
- **Tabela do topo do documento:** a seção 3 entrou como "Escrita, em revisão" (T09, Liliane). A linha "A fazer"
  passou a ser 4, 5, 6.3 e 7 (T10, T11 e T14 a T18).
- **PNGs** dos seis diagramas em `docs/diagramas/` (`3.1-visao-geral.png` … `3.6-lote-entrada-e-saida.png`), gerados
  com o Chrome headless e o mesmo Mermaid 10.9.1 do `/documento`. O script ficou só no scratchpad da sessão e não
  foi versionado. O `docs/Documento_de_Projeto.pdf` foi gerado pelo `/documento`, mas, a pedido da Liliane, **não**
  entrou no commit.
- **Recados para o Murilo na `dev`:** `inbox/murilo/2026-11-18-de-liliane-lista-unica-de-codigos.md` (prioridade
  baixa, commit `e43034c`) e `inbox/murilo/2026-11-18-de-liliane-sincronizar-quadro-pr-40.md` (commit `720768e`).
- A Liliane põe o número do PR (#40) no cartão do T09 no quadro.

## Decisões tomadas
- **Mermaid `classDiagram`**, porque o `/documento` desenha Mermaid no PDF, o GitHub mostra no PR e a Livraria usa
  Mermaid. Alternativa descartada: PlantUML, que precisa de outra ferramenta para virar imagem.
- **Visão geral mais um diagrama por grupo.** Alternativa descartada: um diagrama único com os 31 tipos completos. O
  primeiro rascunho, com cerca de 60 setas na horizontal, ficou ilegível no PDF.
- **P1. As operações do `Transporte` que aceitam ou rejeitam devolvem `boolean`** (`iniciarTransito`, `entregar`,
  `atualizarPosicao` e `trocarPerfil`). Por quê: só o `Status` não pode usar `boolean`, porque devolve o próximo
  status (2.2.3). Alternativa descartada: deixar sem tipo até o T14. **Provisório**: a nota no diagrama diz
  "provisório, confirmar no T14".
- **P2. A posição ausente é `null` por dentro, e `temPosicao()` responde se ela existe**, no `Transporte` e no
  `Aviso`. Por quê: evita o `null` de surpresa (erro 13 da Livraria). Alternativa descartada: só o getter,
  devolvendo `null`.
- **P3. `getNome()` é abstrato em `Status`**, no mesmo padrão das etapas de `Modal`. Por quê: um status novo, como o
  `Cancelado`, não compila se esquecer o nome. Alternativa descartada: um atributo `nome`, passado com
  `super("AGUARDANDO")`.
- **P4. As classes do lote guardam os colaboradores em atributos:** o `ProcessadorDeLote` guarda o
  `InterpretadorDeLinha` e o `FormatadorDeSaida`, e o `InterpretadorDeLinha` guarda a `FabricaDeCodigos`.
  Alternativa descartada: métodos `static`.
- **P5. `LinhaInterpretada` tem três construtores sobrecarregados:** `()`, `(Encomenda encomenda)` e
  `(Rejeicao rejeicao)`.
  - A Liliane só aprovou depois de ver as assinaturas. A regra dela: se dois construtores tivessem os mesmos tipos de
    parâmetro, trocar por métodos estáticos `valida()`, `rejeitada()` e `emBranco()`. Não é o caso.
  - **Para a implementação**, decisão da Liliane: os construtores com parâmetro rejeitam `null` com
    `Objects.requireNonNull`, porque uma variável valendo `null` passa pelo compilador.
  - Registrado na 3.7 com a ressalva de que `Objects` não aparece nos slides e o grupo confirma antes de usar, como o
    `final` e o `BigDecimal`.
- **P6. A estrutura interna da "lista única de códigos" da `FabricaDeCodigos` está pendente.** Decide o Murilo, como
  responsável pelo T20. O diagrama mostra só os métodos públicos, com a nota "estrutura interna: pendente, decisão
  do Murilo (T20)".
  - O Claude apontou que o T20 é a "Revisão cruzada e entrega da Etapa 1" e que a criação dos objetos é o T23,
    também do Murilo.
  - A Liliane manteve o T20, porque concluir o T09 destrava o T20 no quadro.
- **Anotar os erros do diagrama na branch, e não na `dev`.** As duas linhas do relatório de IA foram junto no PR #40.
  A tentativa de enviá-las direto para a `dev` foi bloqueada pela permissão do Claude Code, e nada foi executado.

## Erros e rejeições da IA
- **Erro (documentação):** ao enxugar a visão geral, o Claude apagou também a única seta do `Main`
  (`Main ..> ProcessadorDeLote`), que ficou solto. Ele percebeu ao conferir o PDF e devolveu a seta.
- **Erro (documentação):** a legenda "Como ler" dizia que os construtores ficavam de fora dos diagramas, mas eles
  aparecem. O Claude percebeu ao conferir o PDF e reescreveu a legenda.
- **Erro (processo):** no `/documento`, o Claude mostrou só as partes alteradas, e não o documento inteiro como a
  skill manda. Avisou na hora. É o mesmo erro já registrado em 17/11. A Liliane decidiu **não** anotar este no
  relatório.
- Os dois primeiros já estão em `docs/relatorio_ia_notas.md` pelo PR #40. Por isso esta skill não acrescentou linhas
  na `dev`, o que evita duplicar as linhas e dar conflito no merge.

## Pendências
- **Alexandre:** revisar o PR #40. No T14, confirmar ou trocar o `boolean` das operações do `Transporte` (P1) e
  definir o mecanismo de rejeição do `Status` (nota na 3.4).
- **Murilo:**
  - Decidir a estrutura interna da lista única de códigos (recado de prioridade baixa) e avisar a Liliane, que
    atualiza o diagrama.
  - Rodar o `/sincronizar-quadro` para o PR #40.
- **Grupo:** confirmar se pode usar `Objects.requireNonNull` (P5), junto com as dúvidas já abertas sobre `final` e
  `BigDecimal`/`RoundingMode`.
- **Liliane:** pôr o #40 no cartão do T09. Os recados `2026-11-18-de-murilo-nova-versao-do-kanban.md` e
  `2026-11-18-de-murilo-pr-31-ponto-3-da-conferencia.md` continuam pendentes na inbox dela.
- **Diagrama da 3.4 (Status):** a Liliane não conferiu no PDF a versão deitada (`direction LR`). O PNG
  `3.4-status.png` foi conferido.

## Próximos passos
- Rodar `/atualizar-branch` e acompanhar a revisão do PR #40. Se a revisão pedir mudanças nos diagramas, gerar de
  novo os PNGs de `docs/diagramas/`.
- Quando o Murilo decidir a lista de códigos, atualizar a nota da `FabricaDeCodigos` na 3.1 e na 3.6, a decisão 6 da
  3.7 e os PNGs.
- Começar o T16 (cenários de evolução 5 a 8), combinando antes com o Alexandre o formato usado no T15.
