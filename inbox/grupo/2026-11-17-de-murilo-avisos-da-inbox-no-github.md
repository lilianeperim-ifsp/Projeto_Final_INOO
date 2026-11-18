---
para: grupo
de: murilo
data: 2026-11-17
tipo: decisao
status: pendente
prioridade: maxima
---

## O que é

Proposta para os três aprovarem: **avisar no GitHub cada recado novo da inbox.** Um workflow do GitHub Actions abre
uma issue atribuída a quem recebe o recado, e a pessoa é notificada na hora: no sininho do GitHub, por e-mail e no
app do celular. Assim ninguém precisa abrir a pasta para saber que chegou recado. O repositório continua público, como
está.

Preciso que cada um responda na seção "Resposta" se concorda.

## Contexto

**Como funcionaria:**

- A cada push na `dev`, o workflow procura recados novos com `status: pendente` e abre uma issue atribuída a quem
  recebe.
- A pasta define quem recebe: `murilo/` → `murilolss`, `liliane/` → `lilianeperim-ifsp`, `ale/` → `alexsant22`,
  `grupo/` → os três.
- A issue ganha o rótulo `inbox` e, quando o recado tem `prioridade: maxima`, também o rótulo `prioridade-maxima`.
- Quando o recado passa a `concluido` ou `descartado`, o workflow fecha a issue.
- A inbox continua sendo a fonte oficial. A issue é só o aviso, então as skills e a leitura da inbox no começo da
  sessão continuam iguais.
- O workflow entra por PR normal, da `logitech/murilolss`, com o Alexandre de reviewer, porque não está coberto pela
  exceção da inbox. Em repositório público, o Actions não tem custo.

**Para receber os avisos:** cada um confere em github.com/settings/notifications se os avisos de "Participating" estão
ligados (web, e-mail ou o app GitHub Mobile). Uma issue atribuída a você conta como "Participating".

**Ponto de atenção:** com o repositório público, as issues também são públicas, assim como os recados da pasta
`inbox/` já são hoje. O aviso não expõe nada que já não esteja visível.

**O que falta de cada um:**

- **Liliane:** concorda?
- **Alexandre:** concorda? E revisa o PR do workflow?
- **Murilo:** concordo. Escrevo o workflow depois das duas respostas.

> A primeira versão deste recado (commit `5c601cf`, arquivo `2026-11-17-de-murilo-repositorio-privado-e-avisos-no-github.md`)
> também propunha deixar o repositório privado até a entrega. O Murilo retirou essa parte: o repositório fica público.

## Resposta


**2026-11-17, Liliane:** concordo com o workflow que abre uma issue para cada recado novo da inbox, com o repositório público.

**2026-11-17, Alexandre:** concordo com o workflow, com o repositório público, e reviso o PR dele.
