---
name: documento
description: Mostra o Documento de Projeto (docs/Documento_de_Projeto.md) para conferência e, se o usuário aprovar, gera o PDF ao lado dele. Use quando o usuário pedir para ver, conferir ou gerar o PDF do Documento de Projeto.
disable-model-invocation: true
---

# Documento de Projeto: visualizar e gerar PDF

O Documento de Projeto da Etapa 1 é um arquivo Markdown em `docs/Documento_de_Projeto.md`. Esta skill mostra o texto para o usuário conferir e, só com a aprovação dele, gera `docs/Documento_de_Projeto.pdf`. Ela **não escreve nem altera** o texto do documento.

## Passos

1. **Conferir o arquivo:** verifique se `docs/Documento_de_Projeto.md` existe. Se não existir, avise o usuário e pare. Não crie o arquivo.
2. **Mostrar para conferência:** leia o arquivo inteiro e mostre o conteúdo completo na resposta, sem resumir nem cortar. Antes do texto, informe o caminho, o número de linhas e a data da última modificação do arquivo.
3. **Pedir aprovação:** use `AskUserQuestion` perguntando se está tudo certo para gerar o PDF, com as opções "Gerar PDF" e "Ainda não, vou ajustar o .md". Se o usuário não aprovar, encerre sem gerar nada.
4. **Gerar o PDF:** execute na raiz do repositório:
   ```
   node .claude/skills/documento/gerar_pdf.mjs docs/Documento_de_Projeto.md docs/Documento_de_Projeto.pdf
   ```
   O script usa o Chrome ou o Edge em modo headless e baixa as bibliotecas `marked` e `mermaid` do jsDelivr, então precisa de internet. Os diagramas Mermaid saem desenhados no PDF.
5. **Conferir o resultado:** confirme que o PDF existe e informe o caminho e o tamanho. Lembre o usuário de abrir o PDF e olhar os diagramas: um diagrama com erro de sintaxe aparece no PDF como uma caixa vermelha com a mensagem, e o script não acusa isso.
6. **Em caso de falha:** mostre a mensagem do script ao usuário (sem navegador, sem internet etc.). Não tente outro método de conversão sem ele pedir.

## Regras

- Não edite `docs/Documento_de_Projeto.md`.
- Só gere o PDF depois da aprovação do passo 3. Gerar de novo sobrescreve o PDF anterior.
- Não faça commit, push nem abra PR. Se o grupo quiser versionar o PDF, o usuário decide.
- Responda em português do Brasil.
