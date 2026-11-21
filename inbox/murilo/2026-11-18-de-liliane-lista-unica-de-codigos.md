---
para: murilo
de: liliane
data: 2026-11-18
tipo: decisao
status: concluido
prioridade: baixa
---

## O que é

Murilo, no T09 (diagrama de classes) ficou pendente a estrutura interna da "lista única de códigos": array de String,
listas paralelas ou outra forma. Como você é o responsável pelo T20, a decisão fica com você. Por enquanto o diagrama
mostra só os métodos públicos, com uma nota de pendência. Quando decidir, me avisa que eu atualizo o diagrama.

## Contexto

- A `FabricaDeCodigos` está na 2.2.6 de `docs/Documento_de_Projeto.md`: `existeModal`, `existePerfil`, `criarModal`
  e `criarPerfil` consultam a mesma lista de códigos conhecidos, mas o documento não diz como ela é por dentro.
- No diagrama da seção 3 (T09), a fábrica aparece com a nota "estrutura interna: pendente, decisão do Murilo (T20)".
- O T09 destrava o T20 no quadro.

## Resposta

2026-11-19 (Murilo): decidido. A 2.2.6 foi atualizada no PR #43
(https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/43, commit `be4f137`, aguardando a aprovação do
Alexandre).

- **Pares código + objeto:** duas classes novas na camada de entrada, `CodigoDeModal` (código + `Modal`) e
  `CodigoDePerfil` (código + `Perfil`). A `FabricaDeCodigos` guarda `List<CodigoDeModal>` e `List<CodigoDePerfil>`,
  preenchidas no construtor com uma linha por código.
- **Busca:** os privados `indiceDoModal(codigo)` e `indiceDoPerfil(codigo)` → `int` comparam com `equals` e
  devolvem `-1` quando não acham. `existe*` responde `>= 0`, e `criar*` lança `IllegalArgumentException` no `-1`.
- **Objeto compartilhado:** `criar*` devolve sempre a mesma instância, o que é seguro porque modais e perfis não têm
  atributos de instância (2.2.1).
- **Alternativas descartadas:** arrays paralelos (ordem trocada não dá erro de compilação) e `getCodigo()` em
  `Modal`/`Perfil` (levaria o texto da entrada para o núcleo).

Para o diagrama, depois do merge do #43: na 3.1 e na 3.6, trocar a nota "pendente" pelas duas classes novas, com
`FabricaDeCodigos` → `CodigoDeModal`/`CodigoDePerfil` e cada par → `Modal`/`Perfil`. Na 3.6, a fábrica ganha os dois
atributos `List` e os dois métodos privados `indice*`. Na 3.7, atualizar a decisão 6 e gerar os PNGs de novo.
