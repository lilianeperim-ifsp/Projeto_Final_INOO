---
data: 2026-11-09
autor: Murilo Leandro
assunto: Busca e dependências no quadro Kanban e skill documento
---

## Resumo
Sessão sem modelagem e sem código de produção. O Murilo rodou `/sincronizar-quadro` (o PR #10 estava `aberto` no banco e passou para `mergeado`; nenhum cartão mudou) e atualizou a branch `logitech/murilolss` com a `dev`, usando `git stash` porque o `CLAUDE.md` tinha alterações locais. Depois, o Claude explicou a skill `atualizar-branch`, a inbox e as memórias novas da `dev`. No quadro Kanban (artefato do claude.ai) foram feitas duas mudanças: um **campo de busca** que filtra os cartões pelo título ou pela descrição, e o campo **`dependeDe`**, que impede um cartão de sair de "A fazer" enquanto os cartões de que ele depende não estiverem em "Concluído". Foi criada a skill `/documento` (`.claude/skills/documento/`), que mostra `docs/Documento_de_Projeto.md` para conferência e, com aprovação, gera o PDF. Isso segue o cartão T-02 (formato do Documento de Projeto: Markdown em `docs/`). A skill foi para o PR #12 (aprovado pelo Alexandre e mergeado), e a documentação do campo `dependeDe` na skill `sincronizar-quadro` está no PR #13, aberto e sem avaliação ao salvar esta memória. O cartão T-02 foi movido para "Em PR" com o número 12.

## Decisões tomadas
- **Formato do Documento de Projeto: Markdown em `docs/Documento_de_Projeto.md`, com PDF gerado pela skill `/documento`.** Decisão do Murilo (cartão T-02). Alternativa descartada: Word.
- **PDF gerado pelo Chrome/Edge em modo headless**, com `marked` e `mermaid` carregados do jsDelivr (precisa de internet; os diagramas Mermaid saem desenhados). Por quê: não exige instalar nada nos computadores do grupo. Alternativas descartadas: pandoc + LaTeX (instalação pesada em cada máquina) e `pip install` de `markdown`/`weasyprint` (altera o Python e não resolve o Mermaid).
- **A skill `/documento` só exibe e converte.** Não escreve nem edita o texto do documento e só gera o PDF depois da aprovação do usuário. Alternativa descartada: a skill montar o texto a partir das seções da especificação.
- **Busca por palavras:** cada palavra digitada precisa aparecer no título ou na descrição, em qualquer ordem, sem diferenciar maiúsculas e acentos, com o trecho destacado. Alternativa descartada: procurar a frase exata digitada.
- **Dependências com vários cartões (`dependeDe`, lista de ids).** A regra só trava a saída de "A fazer": cartão que já está em andamento, em PR ou concluído não volta nem é bloqueado depois. O editor não aceita autodependência nem ciclo. Alternativa descartada: um único cartão por dependência.
- **Cadeia de dependências sugerida gravada em 40 cartões.** Escolha do Murilo, e o grupo ajusta depois. Tudo da Etapa 2 (T-21 em diante) fica bloqueado até o T-20 estar concluído, o que segue a regra de não escrever código antes do documento da Etapa 1.
- **A regra de dependência vale só na página do quadro.** Quem grava direto no banco (o Claude pelo `ArtifactData` ou uma skill) não é bloqueado. Alternativa descartada: regras de servidor, que o banco do artefato não oferece.
- **PR #13 separado.** O PR #12 já estava mergeado quando a documentação do `dependeDe` ficou pronta.
- **O cartão ligado ao PR #12 foi o T-02**, escolhido pelo Claude por ser o cartão de origem da skill. O Murilo não contestou.

## Erros e rejeições da IA
Nenhum

## Pendências
- **Cartão T-02:** o PR #12 foi mergeado, então o cartão deve ir para "Concluído" na próxima sincronização (ou ao rodar `/sincronizar-quadro`). O texto do cartão não registra a decisão do formato.
- **PR #13 aguardando revisão do Alexandre.**
- **Arquivos de teste:** `docs/Documento_de_Projeto.md` (documento de exemplo, marcado como teste) e `docs/Documento_de_Projeto.pdf` continuam só na máquina do Murilo, sem commit. Falta o grupo escrever o documento real.
- **A cadeia de dependências é sugestão:** o grupo precisa revisá-la pelo editor do cartão.
- **O código-fonte da página do quadro não está versionado.** Hoje a página só existe publicada no artefato; qualquer mudança nela deve partir da versão publicada.
- **Recados da inbox para o Murilo** (aviso de uso e confirmação de leitura em `inbox/grupo/`) seguem `pendente`.
- **Teste da skill `/documento` em outra máquina** (Chrome ou Edge e internet): só foi testada na do Murilo.

## Próximos passos
1. Rodar `/sincronizar-quadro` depois do merge do PR #12 e conferir que o T-02 foi para "Concluído".
2. O Alexandre revisa o PR #13.
3. O grupo divide as áreas (cartão T-01) e revisa as dependências no quadro.
4. Escrever `docs/Documento_de_Projeto.md` e gerar o PDF com `/documento` (prazo da Etapa 1: 27/11).
