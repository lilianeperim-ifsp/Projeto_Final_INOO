---
data: 2026-11-22
autor: lilianeperim-ifsp (Liliane)
assunto: PR 40 com a lista de códigos e revisão do PR 50
---

## Resumo
A Liliane atualizou a `logitech/lilianeperim-ifsp` com a `dev` (`/atualizar-branch`, merge `2f326a1`, sem conflito) e
conferiu a inbox. Pediu para mergear o PR #40 (T09) se a aprovação do Alexandre estivesse válida. O Claude conferiu: a
aprovação (22/11, 21:58) vale para o `b898840`, mas o próprio Alexandre condicionou o merge: se o #43 entrasse antes,
a troca da nota "pendente" da `FabricaDeCodigos` deveria ir no #40. Como o #43 já estava na `dev` (`401e732`), o merge
**não** foi feito, e a seção 3 foi atualizada:

- **Commit `dc3a990`:**
  - **3.1:** entram `CodigoDeModal` e `CodigoDePerfil`, com `FabricaDeCodigos --> "*"` para cada par e cada par
    `--> "1"` para `Modal`/`Perfil`. A frase de abertura passa a falar em **cinco** setas de dentro do grupo, porque
    entram as duas da fábrica para os pares.
  - **3.6:** a fábrica ganha `-List~CodigoDeModal~ modais`, `-List~CodigoDePerfil~ perfis`, `+FabricaDeCodigos()` e os
    privados `indiceDoModal`/`indiceDoPerfil`. As duas classes de par aparecem com atributos, construtor e getters, e
    um parágrafo novo diz onde ficam as setas que saem do grupo.
  - **Notas "pendente":** saíram da 3.1 e da 3.6, e a decisão 6 da 3.7 foi reescrita.
  - **Contagem de tipos:** passou de 31 para **33** na 2.2 (seção do Alexandre; o #43 incluiu as classes e esqueceu a
    contagem) e na seção 3.
  - **PNGs:** a 3.1 e a 3.6 foram geradas de novo.
- **Commit `e2e7464`:** seta `Transporte ..> Aguardando : cria` na 3.1, porque o construtor do `Transporte` cria o
  `Aguardando` inicial (2.2.2). O PNG da 3.1 foi gerado de novo (6514 x 2546).
- **Comunicação no PR #40:** comentários explicando as mudanças, e o Alexandre foi colocado de novo como revisor.
- **Inbox:** os recados `inbox/liliane/2026-11-22-de-murilo-atualizar-pr-40-apos-merge-do-43.md` e
  `2026-11-19-de-murilo-lista-de-codigos-decidida.md` foram fechados na `dev` (commit `1508289`).
- **PR #50 (T10, seção 4, Alexandre):** revisado e **aprovado** pela Liliane. A revisão concorda com os 5 ajustes do
  Murilo e acrescenta dois:
  1. a coluna "Quem depende só da abstração" da 4.2 não se aplica às linhas "Arredondamento" e "Formato da saída",
     porque `ResultadoCalculo` e `FormatadorDeSaida` são concretos;
  2. a 4.3 deve dizer que o `Transporte` conhece o `Aguardando` só para criá-lo e, depois, fala com ele como `Status`.

  Ela também se ofereceu para resolver no #40 o conflito com o #50.

PNGs gerados como antes: Chrome headless, Mermaid 10.9.1, tema `neutral`, escala 2. O script (`gerar_png.py`) ficou
só no scratchpad da sessão e não foi versionado.

## Decisões tomadas
- **Não mergear o #40 sem a troca da nota.** Por quê: a aprovação do Alexandre condicionava o merge a essa troca, já
  que o #43 entrou antes, e o recado do Murilo pedia o mesmo. Alternativa descartada: mergear já e fazer a troca num
  PR pequeno depois (o Alexandre aceitava isso só se o #40 entrasse antes do #43).
- **A lista única de códigos aparece por inteiro nos diagramas (decisão 6 da 3.7).** Por quê: o cenário do
  ferroviário passa pela fábrica, e o diagrama mostra onde entra a linha nova. Alternativa descartada: só os métodos
  públicos com uma nota, que era a versão anterior.
- **A seta da fábrica para os pares entra também na 3.1**, embora as duas classes sejam do mesmo grupo. Por quê:
  mostra o caminho do código da entrada até `Modal`/`Perfil`. Alternativa descartada: deixar essa seta só na 3.6, com
  os pares aparecendo na 3.1 ligados apenas a `Modal`/`Perfil`.
- **A contagem da 2.2 foi corrigida no próprio #40**, com aviso ao Alexandre no comentário do PR. Alternativa
  descartada: deixar a correção para ele, o que deixaria a 2.2 (31) e a seção 3 (33) se contradizendo.
- **Ordem de merge:** o #50 pode entrar antes do #40, e a Liliane resolve o conflito no #40:
  - seção 3 antes da 4;
  - tabela do topo na ordem 2, 3, 4;
  - linha "A fazer" como "5, 6.3 e 7 | T11 e T14 a T18";
  - aviso do topo da 6 como "A seção 5 (T11) entra antes desta".

## Erros e rejeições da IA
Nenhum.

## Pendências
- **Alexandre:** revisar de novo o #40 (commits `dc3a990` e `e2e7464`) e conferir a mudança de 31 para 33 na 2.2.
  Também fazer os ajustes do #50 e mergeá-lo.
- **Liliane:** quando o #50 entrar, resolver o conflito no #40 como descrito acima. Depois da aprovação do Alexandre,
  mergear o #40 e avisar o Murilo para rodar `/sincronizar-quadro`.
- **Recado ainda pendente na inbox da Liliane:** `2026-11-22-de-murilo-pendencias-da-etapa-1.md` (T16 e T18, que
  dependem da T15 do Alexandre e da T17 do Murilo).
- **`.gitignore` com `.idea/`:** continua para decisão dos três.

## Próximos passos
- Rodar `/atualizar-branch` e ver se o #50 já entrou. Se entrou, resolver o conflito no #40.
- Ler os cenários de evolução 5 a 8 em `contexto/especificacoes-tecnicas.md` para adiantar a T16 assim que a T15
  chegar.
