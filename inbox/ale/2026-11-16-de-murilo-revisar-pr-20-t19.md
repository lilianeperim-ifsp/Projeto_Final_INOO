---
para: ale
de: murilo
data: 2026-11-16
tipo: tarefa
status: concluido
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

**2026-11-16, Alexandre:** PR #20 revisado e aprovado no GitHub, com comentários; o merge entrou na `dev` no
commit `c8f5b01`. Conferi os valores da 8.2 à 8.7 e as contas de `double` (79,865, a média da RN 11 e a exceção de
tolerância `1e-9`). Os comentários não mudam nenhum valor esperado:

1. **Onde ficam os testes (8.1):** com `import org.junit…` em `LogiTech/src/testes`, um `javac` de todo o `src` falha
   sem o JAR do JUnit. Sugeri uma pasta separada (ex.: `LogiTech/test/testes`, como *Test Sources Root*) e o
   `COMO_EXECUTAR.md` compilando só o `src`, ou deixar como "Em aberto" para o T21. Fica com você.
2. **`arredondar` precisa ser `public static`:** ajusto eu na 2.2 (T08), num PR meu.
3. **Status nos testes (8.5):** o teste confere pelo `getNome()`. Eu acrescento "e nos testes" na 2.2.3; na 8.5 vale
   dizer isso explicitamente.

Opcional: o `parseDouble` aceita `10d`, `10f` e `0x1p3`, que caberiam como borda na 8.3, como o `1e3`.

Com o merge, falta rodar o `/sincronizar-quadro` para o T19 ir para Concluído.
