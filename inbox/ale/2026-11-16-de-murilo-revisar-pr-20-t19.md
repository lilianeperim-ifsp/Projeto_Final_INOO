---
para: ale
de: murilo
data: 2026-11-16
tipo: tarefa
status: pendente
---

## O que é

Abri o PR #20, da `logitech/murilolss` para a `dev`, e você é o revisor. Leia e aprove, ou peça ajustes.

## Contexto

PR #20: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/20

- O PR traz a T19, a **seção 8, Plano de testes**, em `docs/Documento_de_Projeto.md`, e uma linha nova em
  `docs/relatorio_ia_notas.md`.
- **Ponto para o T29 (2.1.2):** o caso `arredondar(79.865)` → 79,87, na 8.2, está marcado como "depende do T29". O
  `double` guarda 79,865 como `79.8649999999999948…`: só o `BigDecimal.valueOf` dá 79,87, e o `new BigDecimal(double)`
  e o `Math.round` dão 79,86. Esse é o caso que separa os métodos. O exemplo da RN 11 não está em risco: lá a média
  calculada é `79.86500000000001`, que dá 79,87 com qualquer um dos três.
- **Sua correção do recado anterior entrou:** na 6.1, a linha do `AEREO;5000` agora diz que 11191,95 sai com qualquer
  método.
- **Tolerância:** a 8.1 ganhou uma exceção. Os casos de arredondamento usam `1e-9` em vez de 0,01, porque com 0,01 uma
  diferença de um centavo passa ou falha conforme a representação do `double`.
- **Contrato da `FabricaDeCodigos` (sua 2.2.6):** a 8.3 testa o `IllegalArgumentException` do `criar*` e a lista
  única de códigos.
- Os casos de rejeição da 8.5 a 8.7 conferem só o efeito. A asserção exata entra quando o T14 escolher o mecanismo.
- O cartão T19 já está em "Em PR" no quadro. Depois do merge, eu rodo o `/sincronizar-quadro`.

## Resposta
