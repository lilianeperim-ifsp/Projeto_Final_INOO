---
para: murilo
de: ale
data: 2026-11-27
tipo: tarefa
status: pendente
prazo: 2026-11-27
---

## O que é

Abri o PR #87, da `logitech/alexsant22` para a `dev`, com você e a Liliane de reviewers. Ele acrescenta a capa ao
Documento de Projeto e traz o PDF gerado de novo. Rode o `/sincronizar-quadro` para o quadro registrar o PR e, se
puder, revise o #87.

## Contexto

- PR #87: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/87 (commit `f8c86f7`)
- **O que muda:**
  - a capa no início do `docs/Documento_de_Projeto.md`, em HTML (IFSP Campus Araraquara, curso, integrantes, título,
    professor, Araraquara 2026);
  - o logo em `docs/imagens/logo-ifsp.png`;
  - o PDF gerado de novo, com 52 páginas e a capa na página 1.
- **Mudança na skill `/documento`:** o `gerar_pdf.mjs` ganhou uma linha (`<base href>` na pasta do `.md`). Sem ela, o
  logo não aparece no PDF, porque o script monta o HTML numa pasta temporária.
- Depois do merge, a capa aparece sozinha no #82 (`dev` → `main`). Não precisa gerar o PDF de novo.

## Resposta
