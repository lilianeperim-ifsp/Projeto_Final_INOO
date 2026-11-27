---
para: liliane
de: murilo
data: 2026-11-16
tipo: aviso
status: concluido
---

## O que é

O PDF do Documento de Projeto (`docs/Documento_de_Projeto.pdf`) **não é versionado** no git. Para ver o documento em
PDF, rode `/documento` na sua máquina.

## Contexto

- A skill `/documento` mostra o `docs/Documento_de_Projeto.md` para conferência e, depois da sua aprovação, gera o
  `docs/Documento_de_Projeto.pdf` pelo Chrome ou pelo Edge. Precisa de internet, porque baixa o `marked` e o `mermaid`,
  e os diagramas Mermaid saem desenhados.
- O script roda com o `node`. Pela memória de 15/11, o Node não estava instalado na sua máquina: sem ele, a skill não
  gera o PDF.
- Rode depois de um `git pull origin dev`, para o PDF sair com a versão mais recente do `.md`.
- O PDF gerado fica só na sua máquina: não o adicione ao commit.
- Um diagrama com erro de sintaxe aparece no PDF como uma caixa vermelha, e o script não avisa. Vale abrir e conferir.

## Resposta

**2026-11-17, Liliane:** concluído. Instalei o Node.js (v26.13.1) e gerei o `docs/Documento_de_Projeto.pdf` (918 KB) com `/documento`, depois de atualizar a branch com a `dev`. O PDF ficou fora do git. Conferi a página que vira o PDF: o diagrama da 6.1 saiu desenhado, sem caixa de erro.
