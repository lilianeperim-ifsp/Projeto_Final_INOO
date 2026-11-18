---
data: 2026-11-17
autor: Liliane (lilianeperim-ifsp)
assunto: Node.js, PDF do documento, T05 refeito e mensagem do T06
---

## Resumo
- **Início da sessão:** a `logitech/lilianeperim-ifsp` estava 63 commits atrás da `dev`. O `/atualizar-branch` trouxe 33
  arquivos (merge `0e9681d`, sem conflito): o Documento de Projeto com a 6.1 (T12), a seção 8 (T19) e os ajustes da 2,
  a nova divisão da Etapa 1 em `docs/divisao-projeto.md` e casos novos no relatório de IA. No GitHub, nenhum PR pedia
  a revisão da Liliane; o único aberto é o #24 (T13, Murilo, revisor Alexandre).
- **Inbox:** 3 recados pendentes.
  - `inbox/grupo/2026-11-17-de-murilo-avisos-da-inbox-no-github.md` (prioridade máxima): a Liliane **concorda** com o
    workflow do GitHub Actions que abre uma issue para cada recado novo. Resposta enviada à `dev` (commit `9ec979c`); o
    status continua `pendente`, porque quem fecha recado do grupo é o Murilo.
  - `inbox/liliane/2026-11-16-de-murilo-pdf-do-documento.md`: fechado como `concluido` (commit `40f68d5`).
  - `inbox/liliane/2026-11-17-de-murilo-novos-cartoes-da-etapa-1.md`: continua aberto. A Liliane recebeu do
    Alexandre o **T09** (diagrama UML), o **T16** (cenários 5 a 8) e o **T18** (conferir os 5 minutos) e vai conferir
    com ele e com o Murilo.
- **Node.js:** instalado pelo `winget` (`OpenJS.NodeJS.LTS`, v26.13.1, em `C:\Program Files\nodejs`). O terminal da
  sessão não enxergava o `node` pelo nome, porque foi aberto antes da instalação, então o Claude o chamou pelo
  caminho completo. Depois de reiniciar o VS Code, o `node` funciona pelo nome.
- **`/documento`:** a Liliane aprovou, e o `docs/Documento_de_Projeto.pdf` foi gerado (918 KB, fora do git).
- **T05 refeito com o Node:** o `gerar_pdf.mjs` gerou o PDF do `contexto/projeto-exemplo.md` (552 KB). Como falta o
  `pdftoppm` para abrir o PDF, o Claude rodou uma cópia do script na pasta temporária, que só deixa de apagar a página
  HTML (mesmo tamanho de PDF), e inspecionou essa página no Chrome:
  - 0 caixas de erro, 0 blocos Mermaid sem desenhar e 1 diagrama de classes com as 13 classes e interfaces;
  - a imagem da página confirma o desenho na seção 3.
  - A mesma inspeção no Documento de Projeto deu 0 caixas de erro e o diagrama de sequência da 6.1 desenhado, com os
    8 participantes.
- **T06:** o Claude escreveu a mensagem ao professor com 6 perguntas, mais um item 7 depois (ver "Erros"):
  1. o conteúdo das aulas 8 e 9 e o pedido dos slides;
  2. `try/catch` da `NumberFormatException`;
  3. `throw new IllegalArgumentException` no `criar*` da `FabricaDeCodigos`;
  4. `BigDecimal` com `RoundingMode.HALF_UP` (enum da biblioteca) contra `Math.round`, que erra 79,865;
  5. `Scanner` para ler o `System.in`;
  6. JUnit 5;
  7. `final` em método (2.1.1).

  As perguntas vêm dos pontos "em aberto" do documento (2.1.1, 2.1.2, 6.1, 8.1 e 8.2) e das memórias de 10/11.

## Decisões tomadas
- **A mensagem do T06 passa pelo Alexandre e pelo Murilo antes de ir ao professor.** Decisão da Liliane.
  - Por quê: as perguntas tocam decisões dos cartões dos dois (T29, T21, T08 e T12).
  - Alternativa descartada: enviar direto.
- **A Liliane concorda com os avisos da inbox como issues no GitHub,** com o repositório público.
- **Node instalado na máquina da Liliane,** a pedido dela, para o `/documento` rodar localmente.
  - Alternativa descartada: deixar a geração do PDF com o Murilo.
- **T05 conferido pela página que vira o PDF,** e não pelo PDF.
  - Por quê: o PDF não pode ser aberto pelo Claude sem o `pdftoppm`, e a página é a mesma que o Chrome imprime.
  - Alternativa descartada: instalar o poppler só para isso.

## Erros e rejeições da IA
- **Erro (processo):** a mensagem do T06 saiu sem a pergunta sobre `final` em método, que a 2.1.1 do documento marca
  como "o grupo pergunta antes de usar". O Claude tinha buscado no documento os recursos de Java, mas não incluiu o
  `final` na busca. Percebeu sozinho ao ler o documento inteiro no `/documento` e sugeriu o item 7 antes de a
  mensagem ser enviada.
- **Erro (dados):** na memória e na resposta de 15/11, o Claude disse que o diagrama do projeto de exemplo tinha "12
  classes e interfaces"; são 13. Percebido pelo próprio Claude ao conferir nome a nome no T05 refeito. O resultado
  do T05 não muda.
- **Erro (processo):** no `/documento`, o Claude não mostrou o texto completo do documento na resposta, como a skill
  manda, por causa do tamanho (832 linhas, 66 KB). Mostrou o caminho, o número de linhas, a data e um resumo por seção
  e indicou o link do arquivo. Avisou do desvio antes de pedir a aprovação, e a Liliane aprovou a geração.

## Pendências
- **T06:** conferir a mensagem com o Alexandre e o Murilo (com o item 7) e enviá-la ao professor. Anotar a resposta e
  a data, porque ela afeta o T29 (arredondamento), o T21 (início do código) e a 2.1.1.
- **Recado dos novos cartões (T09, T16 e T18):** a Liliane confere com o Alexandre e o Murilo antes de fechar.
- **Avisos da inbox no GitHub:** falta a resposta do Alexandre; depois o Murilo escreve o workflow.
- **PR #24 (T13):** espera a revisão do Alexandre.
- **Skill `/documento`:** o passo "mostrar o conteúdo completo" não cabe na resposta com o documento já em 832 linhas.
  Vale o grupo decidir se a skill passa a mostrar só um resumo e o link. A mudança iria por PR.
- **Commit `00e5efa` (arquivos `.idea/`):** continua só na branch local da Liliane.

## Próximos passos
- **T09 (diagrama de classes UML):** já pode começar; a base é o catálogo da seção 2.2 (31 tipos). Entra como seção 3
  do `docs/Documento_de_Projeto.md`, por PR para a `dev` com o Alexandre de revisor.
- **T16:** combinar com o Alexandre o formato dos cenários antes de escrever (depende do T15 dele). O T16 trava o T17
  do Murilo.
- Enviar a mensagem do T06 depois da conferência do grupo.
