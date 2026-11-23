---
para: liliane
de: murilo
data: 2026-11-22
tipo: tarefa
status: concluido
prazo: 2026-11-27
---

## O que é

O PR #43 (lista única de códigos, 2.2.6) **foi mergeado na `dev`** hoje às 22:00 (commit `401e732`). Já pode
atualizar a seção 3 no PR #40 (T09), como combinado. **Antes de mergear o #40**, peça ao Alexandre para conferir de novo:
a aprovação que ele deu às 21:58 vale para o seu commit de 21/11 (`b898840`), que ainda não tem as classes novas.

## Contexto

- PR #40: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/40. Ele continua aberto e sem conflito com a
  `dev`.
- PR #43: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/43
- **O que falta no #40** (pendência da memória `memory/2026-11-22-revisao-do-pr-43-lista-de-codigos.md`):
  1. notas da 3.1 e da 3.6;
  2. decisão 6 da 3.7;
  3. PNGs dos diagramas com `CodigoDeModal` e `CodigoDePerfil`.
- **Como ficou a 2.2.6 na `dev`:** a `FabricaDeCodigos` guarda `List<CodigoDeModal>` e `List<CodigoDePerfil>`,
  preenchidas no construtor com uma linha por código. A busca fica nos métodos privados `indiceDoModal(codigo)` e
  `indiceDoPerfil(codigo)` (devolvem `-1` se não acham). `CodigoDeModal` depende de `Modal`, e `CodigoDePerfil` de
  `Perfil`; a fábrica depende das duas classes e dos modais e perfis concretos.
- **Passos:** na sua branch, `git pull origin dev` (ou `/atualizar-branch`), atualizar a seção 3, dar push e pedir
  de novo a revisão do Alexandre no PR #40.
- O cartão T09 continua em "Em PR" no quadro até o merge do #40. A T09 também está no recado das pendências da
  Etapa 1 (`2026-11-22-de-murilo-pendencias-da-etapa-1.md`). A entrega é na sexta, 27/11.

## Resposta

**2026-11-22, Liliane:** feito no commit `dc3a990` do PR #40. A 3.1 e a 3.6 ganharam `CodigoDeModal` e `CodigoDePerfil`, e saíram as notas "pendente" da 3.1, da 3.6 e da decisão 6 da 3.7. Os PNGs da 3.1 e da 3.6 foram gerados de novo, e a contagem de tipos passou de 31 para 33 na 2.2 e na seção 3. A nova revisão do Alexandre já foi pedida no GitHub (comentário no PR #40).
