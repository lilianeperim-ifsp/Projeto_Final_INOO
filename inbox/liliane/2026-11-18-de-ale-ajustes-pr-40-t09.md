---
para: liliane
de: ale
data: 2026-11-18
tipo: tarefa
status: concluido
---

## O que é

Revisei o PR #40 (T09, seção 3) e pedi alterações em dois pontos. Os diagramas estão bons. Depois de subir os
ajustes, me avise para eu conferir e aprovar. **O merge espera essa aprovação.**

## Contexto

PR #40: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/40

**Os dois pedidos obrigatórios:**

1. **Visão geral (3.1) sem a ligação entre o lote e o cálculo.**
   - Pela 6.1 (passo 7), o `ProcessadorDeLote` chama `encomenda.calcular(encomenda.getPerfilPedido())` e recebe o
     `ResultadoCalculo`. No diagrama, ele só aponta para classes do próprio grupo.
   - Acrescente `ProcessadorDeLote ..> Encomenda : calcular()` e `ProcessadorDeLote ..> ResultadoCalculo : usa` e
     gere de novo o `docs/diagramas/3.1-visao-geral.png`.
2. **Cinco arquivos `.idea/` na raiz** (commit `00e5efa`, "Add initial project configuration files").
   - Eles não fazem parte do T09. Quem já tem uma `.idea/` local fora do git (como eu) pode ter o `git pull` recusado
     depois do merge.
   - Tire os arquivos do PR com `git rm -r --cached .idea`. Os seus arquivos locais continuam no lugar.
   - Um `.gitignore` na raiz com `.idea/` fica para o grupo decidir.

**Opcionais** (você decide; estão num comentário no PR):

3. **Frase da 3.1:** ela diz que ali só aparecem as ligações entre grupos, mas a figura também mostra o `Main` e
   `InteressadoEm* ..> Aviso`.
4. **A 3.6 junta dois grupos:** ela reúne a 2.2.5 e a 2.2.6. Vale uma frase dizendo isso.
5. **Composição `Transporte *-- Posicao`:** o `Aviso` guarda a mesma `Posicao` depois da mudança. Uma associação
   (`-->`) seria mais precisa, ou uma nota dizendo que a posição é imutável e compartilhada.
6. **Nome do autor no `relatorio_ia_notas.md`:** está "Liliane Perim", e as linhas anteriores usam "Liliane
   (lilianeperim-ifsp)".

O `boolean` provisório das operações do `Transporte` (P1) é compatível com o meu T14. Confirmo o retorno lá.

## Resposta

**2026-11-21, Liliane:** ajustes feitos no commit `b898840`, já no PR #40. Pode conferir e aprovar.

1. 3.1: entraram `ProcessadorDeLote ..> Encomenda : calcular()` e `ProcessadorDeLote ..> ResultadoCalculo : usa`, e o
   `docs/diagramas/3.1-visao-geral.png` foi gerado de novo.
2. `.idea/` saiu do PR com `git rm -r --cached .idea`. O `.gitignore` fica para os três decidirem.

Dos opcionais, acatei o 3 (a frase da 3.1 agora cita a seta do `Main` e as dos interessados para o `Aviso`) e o 6
(autor "Liliane (lilianeperim-ifsp)"). O 4 e o 5 ficaram como estavam. A nota da lista de códigos (P6) sai depois do
merge do #43.
