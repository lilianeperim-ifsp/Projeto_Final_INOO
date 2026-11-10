// Converte um arquivo Markdown em PDF usando o Chrome ou o Edge em modo headless.
// Uso: node gerar_pdf.mjs <entrada.md> <saida.pdf>
// Sem dependências: usa só módulos nativos do Node. Precisa de internet, porque
// o Markdown e os diagramas Mermaid são renderizados no navegador com bibliotecas do jsDelivr.
import { existsSync, readFileSync, writeFileSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const MARKED = "https://cdn.jsdelivr.net/npm/marked@12.0.2/lib/marked.umd.js";
const MERMAID = "https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js";

function falhar(msg) {
  console.error("ERRO: " + msg);
  process.exit(1);
}

const [entrada, saida] = process.argv.slice(2);
if (!entrada || !saida) falhar("uso: node gerar_pdf.mjs <entrada.md> <saida.pdf>");
const md = resolve(entrada);
const pdf = resolve(saida);
if (!existsSync(md)) falhar("arquivo Markdown não encontrado: " + md);

function acharNavegador() {
  const candidatos = [
    process.env.NAVEGADOR_PDF,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe"),
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  ];
  for (const c of candidatos) if (c && existsSync(c)) return c;
  return null;
}
const navegador = acharNavegador();
if (!navegador) {
  falhar("nenhum navegador encontrado. Instale o Chrome ou o Edge, ou defina NAVEGADOR_PDF com o caminho do executável.");
}

const texto = readFileSync(md, "utf8");
// JSON dentro de <script>: troca "<" para que "</script>" no texto não feche a tag.
const textoJson = JSON.stringify(texto).replace(/</g, "\\u003c");

const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>Documento de Projeto</title>
<style>
  @page { size: A4; margin: 20mm; }
  body { font: 11pt/1.5 "Segoe UI", Arial, sans-serif; color: #1a1a1a; margin: 0; }
  h1 { font-size: 22pt; border-bottom: 2px solid #333; padding-bottom: 4pt; }
  h2 { font-size: 16pt; margin-top: 22pt; border-bottom: 1px solid #bbb; padding-bottom: 2pt; }
  h3 { font-size: 13pt; margin-top: 16pt; }
  h1, h2, h3, h4 { break-after: avoid; }
  table { border-collapse: collapse; width: 100%; margin: 10pt 0; break-inside: avoid; font-size: 10pt; }
  th, td { border: 1px solid #999; padding: 4pt 6pt; text-align: left; vertical-align: top; }
  th { background: #eee; }
  code { font-family: Consolas, "Courier New", monospace; font-size: 9.5pt; background: #f2f2f2; padding: 0 2pt; }
  pre { background: #f6f6f6; border: 1px solid #ddd; padding: 8pt; white-space: pre-wrap; overflow-wrap: anywhere; break-inside: avoid; }
  pre code { background: none; padding: 0; }
  pre.mermaid { background: none; border: none; text-align: center; white-space: normal; }
  pre.mermaid svg { max-width: 100%; height: auto; }
  blockquote { margin: 8pt 0; padding: 2pt 10pt; border-left: 3px solid #999; color: #444; }
  .erro-mermaid { color: #b00020; border: 1px solid #b00020; padding: 6pt; }
</style></head>
<body><main id="doc"></main>
<script src="${MARKED}"></script>
<script src="${MERMAID}"></script>
<script>
(async function () {
  var md = ${textoJson};
  var doc = document.getElementById("doc");
  doc.innerHTML = marked.parse(md);
  doc.querySelectorAll("pre > code.language-mermaid").forEach(function (code) {
    var pre = document.createElement("pre");
    pre.className = "mermaid";
    pre.textContent = code.textContent;
    code.parentElement.replaceWith(pre);
  });
  mermaid.initialize({ startOnLoad: false, theme: "neutral" });
  var blocos = doc.querySelectorAll("pre.mermaid");
  for (var i = 0; i < blocos.length; i++) {
    try { await mermaid.run({ nodes: [blocos[i]] }); }
    catch (e) {
      var aviso = document.createElement("div");
      aviso.className = "erro-mermaid";
      aviso.textContent = "Erro no diagrama Mermaid " + (i + 1) + ": " + (e && e.message ? e.message : e);
      blocos[i].replaceWith(aviso);
    }
  }
})();
</script></body></html>`;

const pasta = mkdtempSync(join(tmpdir(), "documento-pdf-"));
const arquivoHtml = join(pasta, "documento.html");
writeFileSync(arquivoHtml, html, "utf8");

try {
  execFileSync(
    navegador,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--user-data-dir=" + join(pasta, "perfil"),
      "--virtual-time-budget=20000",
      "--print-to-pdf=" + pdf,
      pathToFileURL(arquivoHtml).href,
    ],
    { stdio: "pipe", timeout: 120000 }
  );
} catch (e) {
  // O Chrome pode devolver código ≠ 0 mesmo gerando o arquivo; o teste abaixo decide.
  if (!existsSync(pdf)) {
    rmSync(pasta, { recursive: true, force: true });
    falhar("o navegador não gerou o PDF. Confira a conexão com a internet (as bibliotecas vêm do jsDelivr). " + (e.message || ""));
  }
}

rmSync(pasta, { recursive: true, force: true });
if (!existsSync(pdf)) falhar("o PDF não foi criado em " + pdf);
console.log("PDF gerado: " + pdf + " (" + Math.round(statSync(pdf).size / 1024) + " KB)");
