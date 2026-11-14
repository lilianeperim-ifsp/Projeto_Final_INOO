---
data: 2026-11-14
autor: Alexandre Santos
assunto: catálogo de classes (T08) e PR 18
---

## Resumo
O Alexandre escreveu com o Claude o T08 (Catálogo de classes e interfaces) e abriu o PR #18. Não há código: só
`docs/Documento_de_Projeto.md` e uma nota em `docs/relatorio_ia_notas.md`.

- **Branch:** o `/atualizar-branch` levou a `logitech/alexsant22` de `853a81e` para `60b2fa2` (fast-forward). Chegaram
  as memórias `2026-11-14-aprovacao-e-merge-do-pr-17.md` e `2026-11-14-responsaveis-no-quadro-apos-pr-17.md`, o recado
  do Murilo para a Liliane sobre a nova divisão das tarefas e 3 linhas no relatório de IA. Inbox do Alexandre e do
  grupo sem recados pendentes.
- **As quatro dúvidas do T08:** o Claude levantou em `contexto/regras-negocio.md`, `contexto/especificacoes-tecnicas.md`
  e nas memórias do PR #16 uma proposta para cada uma: onde ficam a sobretaxa e o arredondamento, quem guarda o modal
  e o CO₂ no aviso.
- **Seção 1 do documento:** o Alexandre decidiu não reescrevê-la. As respostas ficam na seção 2, e só a tabela 1.7
  mudou. Ela ganhou a coluna "Situação", duas linhas com os pontos do PR #16 (modal e CO₂ no aviso), e o responsável
  pela sobretaxa e pelo arredondamento passou para o Alexandre.
- **Seção 2.1 (commit `5541543`):** decisões que destravam o catálogo, cada uma com regra, decisão, motivo e alternativa
  descartada (ver "Decisões tomadas").
- **Seção 2.2 (commit `7f49781`):** 31 tipos em 6 grupos (cálculo; encomenda e transporte; status; avisos; lote e
  relatório; entrada e saída), em tabelas com responsabilidade, atributos, métodos e colaboradores. O cabeçalho do
  documento marca o T08 como "Escrita, em revisão".
- **Relatório de IA (commit `f24eb93`):** erro do método de interface vazio (ver "Erros e rejeições da IA").
- **`/documento` (duas vezes):** o Alexandre conferiu o texto e não quis gerar o PDF.
- **PR #18:** https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/18, de `logitech/alexsant22` para a `dev`,
  com a Liliane e o Murilo como reviewers (o autor é o Alexandre).
- **Inbox do Murilo (commit `ed6859e`, direto na `dev`):**
  - `inbox/murilo/2026-11-14-de-ale-sincronizar-quadro-pr-18.md`: pede que ele rode `/sincronizar-quadro` agora e
    depois do merge.
  - `inbox/murilo/2026-11-14-de-ale-conferir-entrada-e-saida-no-catalogo.md`: pede que ele confira a 2.2.6.

## Decisões tomadas
- **Sobretaxa na fórmula do frete da classe abstrata `Modal` (2.1.1).** O limite e o fator ficam em duas constantes
  nomeadas, `LIMITE_CARGA_PESADA_KG` e `FATOR_SOBRETAXA`, e cada modal concreto só passa os seus parâmetros a
  `super(...)`.
  - Por quê: a regra fica num único ponto, e o cenário "8% acima de 2000 kg" vira a troca de duas constantes.
  - Alternativa descartada: uma classe própria `SobretaxaCargaPesada`, que só valeria se a sobretaxa variasse.
- **Arredondamento no construtor do `ResultadoCalculo` (2.1.2), com os valores base sem arredondar.**
  - Por quê: arredondar a base antes do perfil quebra o gabarito. Na encomenda 1, 18,67 × 1,25 dá 23,34, e o gabarito
    é 23,33.
  - Alternativa descartada: arredondar só na saída com `String.format`, porque a auditoria e o relatório somam os
    valores já arredondados.
- **A `Encomenda` guarda o modal e o perfil pedido e faz o cálculo (`calcular(perfil)`) (2.1.3).** O `Transporte`
  guarda o perfil vigente, que começa igual ao pedido. `simular` e `calcularAtual` reaproveitam `encomenda.calcular`.
  - Por quê: o lote calcula sem criar transporte (RN 7), e o cálculo existe uma vez só.
  - Alternativas descartadas: o transporte guardar o modal; uma classe de serviço `CalculadoraFrete`.
- **`Aviso` imutável, com ID, status, posição e o CO₂ do perfil vigente no instante do aviso (2.1.4).** Isso também
  responde à dúvida "o aviso é objeto ou parâmetros" (T14): é um objeto.
  - Alternativa descartada: o aviso levar uma referência ao transporte, o que daria aos interessados acesso a métodos
    que mudam o estado.
- **`Perfil` como interface, com a classe abstrata `PerfilPorMultiplicadores implements Perfil` embaixo (2.2.1).**
  `Economico`, `Rapido` e `Ecologico` estendem a classe abstrata, e o PREMIUM sobrescreve só `aplicarFrete` para o
  piso de R$ 50,00.
  - Por quê: o Alexandre perguntou se a interface não seria melhor. O Claude conferiu em `contexto/projeto-exemplo.md`:
    a Livraria declara pela interface (`Produto`) e escreve o código comum na classe abstrata (`Livro`). Assim os
    colaboradores dependem do contrato, e a multiplicação fica escrita uma vez só.
  - Alternativas descartadas: só a interface (cada perfil repetiria `base × fator`, erro 5 da Livraria); só a classe
    abstrata (a primeira proposta do Claude).
  - O `Modal` continua só como classe abstrata, porque o Template Method precisa da fórmula numa classe.
- **`Status` como classe abstrata, com um método por transição (`iniciarTransito()`, `entregar()`) (2.2.3).** Por
  padrão, cada método rejeita. Também ficam em `Status`: `permiteTrocaDePerfil()`, `contaParaAuditoria()` e
  `getNome()`, este só para texto. O cenário CANCELADO é resolvido com `Cancelado` e um `cancelar()`.
  - Alternativa descartada: `mudarStatus(Status novo)`, que exigiria descobrir o tipo de `novo`.
- **Interessados em duas interfaces, `InteressadoEmStatus` e `InteressadoEmPosicao` (2.2.4).** A
  `CentralDeControle` implementa as duas; `AuditoriaAmbiental` e `Cliente` implementam só a de status. O
  `Transporte` tem uma lista para cada uma.
  - Alternativas descartadas: uma interface com dois métodos (método vazio, erro 23 da Livraria); uma interface com
    um campo "tipo do evento" no aviso.
- **Camada de entrada e saída (2.2.6):** `Main`, `ProcessadorDeLote` (devolve `List<String>`, o núcleo não imprime),
  `InterpretadorDeLinha`, `LinhaInterpretada` (encomenda, rejeição ou linha em branco, em vez de exceção),
  `FabricaDeCodigos` (Simple Factory, único lugar que compara código) e `FormatadorDeSaida`. O Murilo confere os nomes.
- **Não reescrever a seção 1.** As dúvidas se resolvem na seção 2, e a 1.7 aponta para lá.
  - Alternativa descartada: editar a 1.2 a 1.4, que é a seção do Murilo, e registrar como decidido o que ainda não
    tinha sido aprovado.
- **O mecanismo da operação rejeitada continua em aberto**, a pedido do Alexandre (T12 e T14). No catálogo, os métodos
  aparecem como "aceita ou rejeita".
- **A aprovação do PR #18 vale como o acordo dos 3 sobre `Modal` e `Perfil`**, como pede o `docs/divisao-projeto.md`.

## Erros e rejeições da IA
- **Erro (projeto):** na primeira proposta do catálogo, o Claude deu à interface `Interessado` dois métodos,
  `statusMudou` e `posicaoMudou`. `Cliente` e `AuditoriaAmbiental` teriam `posicaoMudou` vazio, o que é o erro 23 do
  checklist da Livraria (método de interface implementado vazio). O Alexandre já tinha aprovado esse ponto. O próprio
  Claude percebeu ao reler o checklist antes de escrever no documento, e a proposta foi trocada por duas interfaces. A
  linha está em `docs/relatorio_ia_notas.md` (commit `f24eb93`) e chega à `dev` pelo PR #18. Por isso **não** foi
  repetida na `dev` por esta skill, para não duplicar a linha nem dar conflito no merge.
- **Revisão de proposta (projeto):** o Claude propôs `Perfil` só como classe abstrata. O Alexandre perguntou se a
  interface não seria melhor, e a proposta foi revista para interface mais classe abstrata (ver "Decisões tomadas").
  Não foi uma rejeição completa: a classe abstrata continuou, agora embaixo da interface. Ainda não está em
  `docs/relatorio_ia_notas.md`.
- **Rejeição (processo):** o Claude sugeriu um recado em `inbox/grupo/` com as quatro propostas, para a Liliane e o
  Murilo opinarem antes de a seção 2 ser escrita. O Alexandre respondeu "não", sem dar motivo. As propostas foram
  para o documento, e a revisão dos 3 ficou para o PR #18. Ainda não está em `docs/relatorio_ia_notas.md`.

## Pendências
- **Liliane e Murilo:** revisar o PR #18. A aprovação dos dois vale como o acordo sobre `Modal` e `Perfil`.
- **Murilo:**
  - Rodar `/sincronizar-quadro` agora e depois do merge (recado `2026-11-14-de-ale-sincronizar-quadro-pr-18.md`).
  - Conferir a 2.2.6 (recado `2026-11-14-de-ale-conferir-entrada-e-saida-no-catalogo.md`).
- **A Liliane não recebeu recado na inbox sobre o PR #18.** O Claude ofereceu criar um, e o Alexandre não respondeu.
- **Perguntas ao grupo ou ao professor:**
  - Pode usar `final` em método (2.1.1)? Nos slides, `final` só aparece em atributo, na aula 6.
  - Pode usar `BigDecimal` com `RoundingMode.HALF_UP` (2.1.2), sendo `RoundingMode` um `enum` da biblioteca? A
    alternativa é `Math.round(valor * 100) / 100.0`.
- **Mecanismo da operação rejeitada** (valor de retorno ou exceção): T12 (Murilo) e T14 (Alexandre).
- **Relatório de IA:** falta registrar a revisão do `Perfil` e a rejeição do recado ao grupo. Para não conflitar com o
  PR #18, que já mexe no arquivo, o melhor é acrescentar as duas linhas na `logitech/alexsant22`, dentro do mesmo PR.
- **Opcional:** uma linha na 1.7 apontando para a 2.2.4. A seção 1 ainda fala de "Interessado" como uma hierarquia só,
  com uma lista no transporte.
- **A `logitech/alexsant22` está um commit atrás da `dev`** (`ed6859e`, recados do Murilo), e este commit de memória
  também vai chegar por lá.

## Próximos passos
- Rodar `/atualizar-branch` para trazer os recados e esta memória.
- Acompanhar a revisão do PR #18. Fazer o merge depois das duas aprovações e avisar o Murilo para sincronizar o quadro.
- Depois do merge, o T08 destrava o T09 (diagrama UML), o T10 (estratégia) e o T12 e o T19 do Murilo. Começar pelo
  T09: os tipos dos atributos e dos retornos, que o catálogo não traz, entram no diagrama.
- Levar ao grupo ou ao professor as perguntas sobre `final` e `BigDecimal`/`RoundingMode`.
