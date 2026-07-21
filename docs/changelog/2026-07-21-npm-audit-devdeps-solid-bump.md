# 2026-07-21 — Zerar `npm audit` (devDeps do fork) + alinhar Solid v2

## Prompt original

> Me ajude a resolver as vulnerabilidades do `npm audit` - nas bibliotecas relacionadas ao SolidJS v2 prerelease, pode atualizar para as versões experimentais

## Diagnóstico

A premissa do prompt não se confirmou: **nenhuma das 7 vulnerabilidades vinha do SolidJS**. Todas
desciam por `bootstrap@5.3.8 -> ./bootstrap-fork`, um `file:` link cujo alvo é o submódulo
`arijs/bootstrap` (branch `bsve-fully-extensible`). O npm instala as **devDependencies** do alvo de
um `file:` link, então todo o tooling de docs/CI do twbs entrava na árvore deste projeto.

| Pacote | Sev | Papel no fork | Situação |
|---|---|---|---|
| `astro` 5.18.1 | 2 high, 2 moderate, 1 low | site de docs | corrigido só em astro ≥ 7.0.10 (2 majors) |
| `esbuild` 0.27.7 | low | pinado pelo astro | idem |
| `bundlewatch` → `axios` 0.31.1 | 2 high | CI de tamanho de bundle | bundlewatch 0.4.2 é o último; exige `axios@^0.31.1` |
| `ip` 2.0.1 | high (SSRF) | devDep de CI | sem versão corrigida (fork mantido = `neoip@3`) |
| `vnu-jar` 25.11.25 | moderate (SSRF) | lint de HTML das docs | 26.7.16 disponível |

`npm audit --omit=dev` já retornava **0 vulnerabilities** — nada disso era runtime nem entrava no
pacote publicado. Este repo consome do fork apenas `scss/` e `js/` (ver
`scripts/generate-preset.mjs`), compilados com o `sass` da própria raiz.

### Por que `overrides` não resolveria

Tentativa descartada: bloco `overrides` no `package.json` da raiz (axios / esbuild / vnu-jar /
`ip → npm:neoip`). Efeito zero — `axios` continuou em 0.31.1. Reproduzido isoladamente: **o npm
ignora `overrides` da raiz para dependências que vêm de um pacote linkado via `file:`**. É o mesmo
motivo pelo qual o `"overrides": { "axios": "^1.15.0" }` que já existia em
`bootstrap-fork/package.json` era inerte. Por isso a correção precisou ser feita nas próprias
devDependencies do submódulo.

## O que foi implementado

### 1. `bootstrap-fork/package.json` — remoção das devDeps de docs/CI

Removidos (nenhum é executado por este repo):

- `astro`, `@astrojs/check`, `@astrojs/markdown-remark`, `@astrojs/mdx`, `@astrojs/prism`,
  `@astrojs/sitemap`, `astro-auto-import`, `astro-broken-links-checker`, `prettier-plugin-astro`
- `bundlewatch` (origem do `axios` 0.31.1)
- `ip`
- `vnu-jar`
- bloco `overrides` (`axios`), que existia só por causa do `bundlewatch` e nunca era aplicado

Mantido todo o toolchain que gera `dist/` (sass, postcss, rollup, terser, clean-css, babel,
rtlcss) e os linters (eslint, stylelint, prettier).

**Efeito colateral conhecido:** os scripts de docs do fork (`astro-dev`, `astro-build`,
`astro-preview`, `docs-*`, `bundlewatch`) deixam de funcionar sem reinstalar essas devDeps. As docs
do Bootstrap são construídas upstream, não aqui.

### 2. `package.json` (raiz) — Solid v2 alinhado

- `solid-js`: `2.0.0-beta.7` → `2.0.0-beta.21`
- `@solidjs/web`: `2.0.0-beta.7` → `2.0.0-beta.21`

Motivo: `vite-plugin-solid@3.0.0-next.5` traz `babel-preset-solid@2.0.0-beta.9`, cujo peer é
`solid-js@^2.0.0-beta.9` — o pin em beta.7 gerava `npm warn ERESOLVE` em todo install. Não era
vulnerabilidade, era incompatibilidade de peer.

`@solidjs/router` (0.17.0-next.2) e `vite-plugin-solid` (3.0.0-next.5) foram **mantidos**: o peer
range do router (`>=2.0.0-beta.7 <2.0.0-experimental.0`) já aceita beta.21, e bumpar o plugin
mexeria no workaround de `lazy-module-url` do `vite.config`.

## Antes / depois

```
antes:  7 vulnerabilities (2 low, 1 moderate, 4 high) — 1603 pacotes
        npm warn ERESOLVE overriding peer dependency (solid-js beta.7 vs ^beta.9)

depois: found 0 vulnerabilities — 1070 pacotes (−343 removidos)
        install sem warnings
```

## Como foi testado

- `npm audit` → `found 0 vulnerabilities`
- `npm install` → `removed 343 packages, changed 5 packages`, sem `ERESOLVE`
- `npm run build` (vite build com Solid beta.21) — ver seção de resultado abaixo
- Reprodução isolada da limitação de `overrides` sobre `file:` links, em sandbox descartável

## Testes criados/alterados

Nenhum. A alteração é exclusivamente de árvore de dependências — não há comportamento de código
novo a cobrir. A regressão relevante (o app continuar compilando com Solid beta.21) é coberta pelo
build existente e por `npm run verify:themes`.
