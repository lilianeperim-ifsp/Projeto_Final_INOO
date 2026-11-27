---
data: 2026-11-27
autor: Alexandre Santos
assunto: skill padrao-codigo e pacotes em MVC
---

## Resumo
O Alexandre pediu uma skill de padrão de código, para o Claude seguir automaticamente sempre que escrever código do
projeto. O Claude leu `contexto/projeto-exemplo.md` (checklist da seção 10) e os slides das aulas 1 a 6 e 10 a 12 e
criou `.claude/skills/padrao-codigo/SKILL.md`. A skill tem:

- os passos antes de escrever;
- as regras de estilo dos slides, com a aula de origem;
- uma tabela do que o LogiTech exige além do código das aulas;
- as restrições do projeto e as regras dos testes;
- uma conferência final de 12 itens.

No `CLAUDE.md` entraram a regra de trabalho 7 (carregar a skill antes de qualquer código Java), o comando de execução
com pacote e a estrutura de pastas. Depois o Alexandre definiu o pacote base e o MVC, e a organização das interfaces
foi discutida em três rodadas. Tudo foi commitado na `logitech/alexsant22` (`132f109`). O PR #79 para a `dev` foi
aberto com a Liliane e o Murilo de revisores, e o recado para o Murilo sincronizar o quadro foi para a `dev`
(`4806fe8`).

## Decisões tomadas
- **Skill `/padrao-codigo` obrigatória e automática.** O `description` diz para usá-la sem esperar pedido, e a regra 7
  do `CLAUDE.md` reforça.
  - Por quê: o estilo das aulas e os 23 erros do exemplo ficam num lugar só, consultado sempre antes de codificar.
  - Alternativa descartada: depender só da linha da tabela de contexto do `CLAUDE.md` ("consultar antes de escrever
    código"), que não garantia a consulta.
- **A skill não segue os slides onde o enunciado é mais rígido.** São estes pontos:
  - `instanceof`/cast para escolher comportamento;
  - `String.format` sem `Locale`;
  - setter ou domínio que imprime;
  - valor gravado por cima;
  - regra copiada em cada filha;
  - testes com `main`;
  - `@FunctionalInterface`/`default`.
- **Pacote base `br.edu.ifsp.logitech`** (decisão do Alexandre), na pasta `LogiTech/src/br/edu/ifsp/logitech/`. O
  Alexandre escreveu `src/br/ifsp/logitech`, e o Claude apontou que, pela convenção da aula 6, a pasta precisa do
  `edu`.
- **MVC** (decisão do Alexandre). Distribuição das 33 classes do catálogo (2.2), proposta pelo Claude:
  - `Main` na base;
  - `model.calculo`, `model.transporte`, `model.status`, `model.aviso` e `model.lote`, um por grupo de 2.2.1 a 2.2.5,
    para achar a classe na defesa pelo número da seção;
  - `view` com o `FormatadorDeSaida`;
  - `controller` com a camada de entrada: `ProcessadorDeLote`, `InterpretadorDeLinha`, `LinhaInterpretada`,
    `FabricaDeCodigos`, `CodigoDeModal` e `CodigoDePerfil`.

  O model não importa `view` nem `controller`.
  - Alternativa descartada: um `model` sem subpacotes, que dispensa `import` mas junta umas 25 classes numa pasta.
- **`Main` dentro do pacote.** O comando passa a ser `java -cp out br.edu.ifsp.logitech.Main < entrada.txt`, que vai no
  `COMO_EXECUTAR.md`; a banca segue esse arquivo (ET 8.1).
  - Alternativa descartada: `Main` sem pacote, só para manter `java Main` literal, contra a regra da aula 6 de que toda
    classe fica num pacote.
- **Interfaces no subpacote `interfaces` de cada assunto**, como o `produtos.interfaces` da Livraria:
  `model.calculo.interfaces.Perfil`, `model.aviso.interfaces.InteressadoEmStatus` e `InteressadoEmPosicao`. As
  classes abstratas (`Modal`, `PerfilPorMultiplicadores`, `Status`) ficam com as filhas.
  - Alternativa descartada: interfaces no mesmo pacote das implementações. Foi a primeira proposta do Claude, e o
    Alexandre pediu para separar.
  - Alternativa descartada: um `model.interfaces` único. O Alexandre perguntou por ela, e o Claude admitiu que, com
    três interfaces, ela também é defensável. O Alexandre manteve a separação por assunto.
- **Testes em `br.edu.ifsp.logitech.testes`**, na pasta `LogiTech/test/br/edu/ifsp/logitech/testes/`, no lugar do
  pacote `testes` da 8.1. A pasta separada do `src` continua.

## Erros e rejeições da IA
- **Rejeição:** o Claude recomendou deixar as interfaces no mesmo pacote das implementações. O Alexandre pediu uma
  organização com as interfaces separadas, e elas foram para `interfaces/` dentro de cada assunto.
- **Erro (documentação):** ao acrescentar a regra 7 no `CLAUDE.md`, o Claude a inseriu entre a 5 e a 6. O próprio
  Claude percebeu logo depois da edição e moveu a regra para depois da 6, antes do commit.
- **Erro (processo):** no início da sessão, o Claude conferiu a inbox mas não leu os arquivos mais recentes de
  `memory/`, como pede o `CLAUDE.md`. Percebeu ao rodar `/salvar-memoria`. Conferiu então que nenhuma memória anterior
  tratava de pacotes ou MVC, e nada precisou ser refeito.

## Pendências
- **Aceite da Liliane e do Murilo no PR #79:** pacotes, MVC, interfaces separadas e testes em
  `br.edu.ifsp.logitech.testes`. É mudança de estrutura, então precisa dos três.
- **Seção "Do projeto ao código" do Documento:** o Documento não fala de pacotes nem de MVC, e a 8.1 diz pacote
  `testes`. As duas mudanças vão para essa seção.
- **Quadro:** o Murilo precisa rodar `/sincronizar-quadro` (recado `inbox/murilo/2026-11-27-de-ale-sincronizar-quadro-pr-79.md`)
  e rodar de novo depois do merge.
- **Continuam em aberto com o professor:** `final` em método (2.1.1), `BigDecimal` (2.1.2) e JUnit (8.1).

## Próximos passos
- Acompanhar a revisão do PR #79 e ajustar a skill se a Liliane ou o Murilo pedirem.
- Depois do merge, avisar o Murilo para sincronizar o quadro.
- Ao começar o código (Etapa 2), criar as pastas da estrutura acima, mover o `Main.java` para
  `br/edu/ifsp/logitech/`, escrever o `docs/COMO_EXECUTAR.md` com o comando com pacote e seguir a `/padrao-codigo` em
  todo arquivo.
