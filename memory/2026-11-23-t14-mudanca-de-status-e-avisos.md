---
data: 2026-11-23
autor: Alexandre Santos
assunto: T14, mudança de status e avisos (seção 6.3), e merge do PR 56
---

## Resumo
Continua `memory/2026-11-23-revisao-do-pr-56-t11.md`.

**Fechamento da T11:** o Murilo aprovou o PR #56 depois das correções e descartou a anotação dele no
`docs/relatorio_ia_notas.md`. Ficou só a linha do Alexandre, e a pendência de linha duplicada deixou de existir. A
pedido do Alexandre, o Claude marcou o item da memória no checklist e mergeou o #56 na `dev` (merge `073667f`), só com
a aprovação do Murilo, como a Liliane fez com o #40. Também atualizou o recado
`inbox/murilo/2026-11-23-de-ale-sincronizar-quadro-pr-56.md`, dizendo que o PR foi mergeado (commit `3d15311`).

**T14 (seção 6.3):** o Claude leu a RN 7, a RN 8, a 6.2, os testes da 8.5 a 8.7 e o recado
`inbox/ale/2026-11-14-de-murilo-operacao-rejeitada-no-t14.md`. Ele apresentou três opções para a transição rejeitada
no `Status`, e o Alexandre escolheu a do `this`. O Claude então escreveu a 6.3 em `docs/Documento_de_Projeto.md`:
- diagrama de sequência com dois blocos, status e posição;
- passos 1 a 12 e a reação de cada interessado;
- 7 decisões, o exemplo da 8.7 e 15 casos de borda;
- eficiência e os ganchos dos cenários 4, 7 e 8.

Também trocou todos os "fica para o T14": no quadro do topo, na 1.7, na 2.1.4, na abertura da 2.2, nas 2.2.2 a 2.2.4,
nas notas da seção 3 (3.1, 3.3 e 3.4) e no item 1 da 3.7, na 4.2, na 5.2.3, na 6.1, na 6.2 e na 8.1.

Commit `248c119`, **PR #58** para a `dev`, com Liliane e Murilo de reviewers. Na `dev` (commit `1fdda84`): o recado
novo `inbox/murilo/2026-11-23-de-ale-sincronizar-quadro-pr-58.md` e o recado da operação rejeitada fechado como
`concluido`, com a resposta.

**O diagrama não foi renderizado:**
- O modo automático bloqueou a tentativa de gerar o SVG com o `mermaid-cli`, e o Claude não insistiu.
- No `/documento`, o Claude não mostrou o arquivo inteiro como a skill pede (140 KB, 1995 linhas), só o diagrama e a
  lista do que mudou, e disse isso ao Alexandre.
- O Alexandre escolheu não gerar o PDF naquele momento.

## Decisões tomadas
- **Transição rejeitada: o status devolve a si mesmo (`this`).** `Status.iniciarTransito()` e `entregar()` devolvem
  `this` por padrão, e só `Aguardando.iniciarTransito()` e `EmTransito.entregar()` devolvem um objeto novo. O
  `Transporte` compara com `==` (o mesmo objeto, sem perguntar o tipo) e devolve `false`.
  - Por quê: é um método por transição, e repetir o status já sai rejeitado. No CANCELADO entram três métodos.
  - Alternativas descartadas: perguntar antes (`aceitaIniciarTransito()`, a sugestão do Murilo), porque são dois
    métodos por transição que precisam concordar e seriam seis no CANCELADO; a exceção, porque ficaria no fluxo
    normal, pediria `try/catch` e daria ao projeto dois mecanismos; e `null` (erro 13 da Livraria).
- **As quatro operações do `Transporte` devolvem `boolean`:** `iniciarTransito()`, `entregar()`,
  `atualizarPosicao(lat, lon)` e `trocarPerfil(perfil)`. Confirma o provisório da 3.7. "Aceita" não quer dizer
  "mudou": repetir a posição e trocar para o mesmo perfil devolvem `true` sem aviso. Alternativa descartada: `void`
  mais um getter `ultimaOperacaoAceita()`.
- **Método privado `aplicarTransicao(Status proximo)`** no `Transporte`, que faz a comparação, a gravação e o aviso.
  `iniciarTransito()`, `entregar()` e o futuro `cancelar()` ficam com uma linha cada. Não é o `mudarStatus` público
  descartado na 2.2.3, porque quem escolhe o próximo status é o status atual. Alternativa descartada: repetir o `if`
  em cada método.
- **O estado muda antes do aviso.** Alternativa descartada: avisar e depois gravar.
- **Um `Aviso` por mudança, o mesmo para todos**, com o CO₂ de `calcularAtual()`. Alternativa descartada: um aviso
  por interessado.
- **A lista de interessados é percorrida numa cópia** (`new ArrayList<>(...)`). Assim, um interessado que se remove
  dentro do `statusMudou` não causa `ConcurrentModificationException` (cenário 8). Alternativa descartada: percorrer
  a original por índice, que pula interessado.
- **`adicionarInteressadoEm...` ignora `null` e o interessado que já está na lista** (`contains`), para a auditoria não
  somar o CO₂ em dobro. Alternativa descartada: aceitar a duplicata.
- **`trocarPerfil(null)` devolve `false`**, o caso que a 6.2 tinha deixado para o T14.
- **A tabela da 1.3 ("Aviso: a decidir (T14)") ficou como estava**, por ser a análise original que a 1.7 diz não ser
  reescrita.

## Erros e rejeições da IA
Nenhum

## Pendências
- **PR #58:** revisão do Murilo, que precisa concordar com a troca da sugestão dele (decisão 1 da 6.3), e da Liliane.
- **Diagrama da 6.3:** gerar o PDF com `/documento` e conferir se o diagrama de sequência desenha sem a caixa vermelha
  de erro.
- **PNGs da seção 3:** `docs/diagramas/3.1`, `3.3` e `3.4` têm as notas antigas ("provisório, confirmar no T14"), e a
  Liliane decide se gera de novo.
- **Quadro:** o Murilo precisa rodar `/sincronizar-quadro` para o T11 (Concluído) e o T14 (Em PR).
- **Commit local:** a `logitech/alexsant22` tem um commit de merge local (`de858f5`), que traz o recado da `dev` e
  ainda não foi enviado. Ele não afeta o PR.

## Próximos passos
- Conferir o diagrama no PDF e responder à revisão do #58.
- Fazer a T15 (cenários de evolução 1 a 4), já liberada pelo merge do #56. Os ganchos da 6.2 e da 6.3 ajudam.
- Depois da T15, responder ao recado `inbox/ale/2026-11-22-de-murilo-pendencias-da-etapa-1.md`.
