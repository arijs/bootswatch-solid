# 2026-10-18 — Plugin de purge: nome do CSS pelo conteúdo purgado

## Prompt original

> O projeto ddsoft-online identificou num changelog recente uma alteração necessária no
> bootswatch-solid. […] adicione o bootswatch-solid e faça a alteração

Changelog de origem: `ddsoft-online/docs/changelog/2026-10-17-css-tema-cache.md` — "A correção
certa é no plugin de purge do pacote: renomear o asset depois de purgar."

## Causa

`bootswatchPurge` (`vite/index.mjs`) enxuga cada CSS no `generateBundle`, quando o Vite já deu o
hash do nome pelo CSS **inteiro** do tema, que vem do pacote e não muda. Quando o app passa a usar
uma classe nova, o conteúdo purgado muda e o nome não: no ddsoft-online, `bootstrap-CqnRIIsZ.css`
saiu em 20/09 sem a regra de `textBgInfo` e em 17/10 com ela, e o navegador seguiu com a cópia
antiga em cache (selo GHS sem fundo, com o texto branco do badge).

## O que mudou

`vite/index.mjs`:

- O `generateBundle` passa a `order: 'post'`, para rodar depois de o Vite escrever os nomes dos CSS
  nos chunks (`__vite__mapDeps`) e no `index.html`.
- Cada CSS que o purge muda ganha no nome o hash do conteúdo final (SHA-256, base64url, 8
  caracteres — o tamanho do hash do Vite). O asset é emitido com `this.emitFile` (o Rolldown
  recusa entrada nova atribuída ao `bundle`), com o `name`/`originalFileName` do original.
- O nome antigo é trocado no código dos chunks, no `viteMetadata.importedCss` (manifest) e nos
  assets `.html`.
- CSS que o purge não muda, ou sem hash no nome, fica com o nome do Vite.

Sem mudança de API. Um consumidor que tenha o contorno local (o `ddsoft:css-tema-pelo-conteudo` do
ddsoft-online) continua funcionando: o nome já bate com o conteúdo e ele não troca nada.

## Como foi testado

No `ddsoft-online/frontend` (Vite 8 / Rolldown), sem o plugin de contorno local:

- com o `vite/index.js` publicado na 0.2.1: `npm run test:build` **falha** —
  "bootstrap-CqnRIIsZ.css não tem o hash do conteúdo (7iFlItaN)";
- com este `vite/index.mjs` no lugar: passa ("4 CSS de tema com nome pelo conteúdo"). Conferido
  também que os 29 CSS de `dist/assets` têm o hash do próprio conteúdo, todos são referenciados por
  um chunk JS ou pelo `index.html`, e nenhum nome antigo sobrou.

O conteúdo purgado é o mesmo de antes, exceto pelas quebras de linha no fim do arquivo (por isso
o hash é `qdUYmFLA` e não o `7iFlItaN` do contorno).

## Pendência

Publicar numa versão (0.2.2) e, no ddsoft-online, subir a dependência e tirar o
`ddsoft:css-tema-pelo-conteudo` do `vite.config.ts` (a trava do `check-build.mjs` fica).
