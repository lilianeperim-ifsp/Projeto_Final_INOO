---
para: ale
de: murilo
data: 2026-11-19
tipo: tarefa
status: concluido
---

## O que é

Abri o PR #43 com a estrutura interna da lista única de códigos da `FabricaDeCodigos`, na 2.2.6, que é sua. Preciso
da sua aprovação explícita das duas classes novas, `CodigoDeModal` e `CodigoDePerfil`. Depois do merge, a Liliane
atualiza o diagrama do T09.

## Contexto

- PR #43: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/43 (`logitech/murilolss` → `dev`, commit
  `be4f137`). Só muda `docs/Documento_de_Projeto.md`.
- **Decisão:** a fábrica guarda pares código + objeto em `List<CodigoDeModal>` e `List<CodigoDePerfil>`, com a busca
  nos privados `indiceDoModal`/`indiceDoPerfil`, que devolvem `-1` quando não acham. `existe*` responde `>= 0`, e
  `criar*` lança `IllegalArgumentException` no `-1`, como o contrato que você definiu no PR #19.
- **Objeto compartilhado:** o `criar*` devolve sempre a mesma instância, o que é seguro porque modais e perfis não
  têm atributos de instância (2.2.1).
- **Alternativas descartadas:** arrays paralelos (uma ordem trocada não dá erro de compilação) e `getCodigo()` em
  `Modal`/`Perfil` (levaria o texto da entrada para o núcleo).
- Pedido da Liliane: `inbox/murilo/2026-11-18-de-liliane-lista-unica-de-codigos.md`, já fechado.

## Resposta

**2026-11-22, Alexandre:** aprovei o PR #43 no GitHub. As duas classes novas da 2.2.6, `CodigoDeModal` e
`CodigoDePerfil`, estão aprovadas, assim como a busca única por `indiceDoModal`/`indiceDoPerfil`. O contrato do PR #19
continua igual (`existe*` responde `>= 0` e `criar*` lança `IllegalArgumentException` no `-1`), a comparação com
`equals` segue a RN 4, e a instância compartilhada é segura porque modais e perfis não têm atributos de instância
(2.2.1). Pode mergear. Depois do merge, rode `/sincronizar-quadro`, e a Liliane atualiza a seção 3 no PR #40.
