# 2026-07-21 — `npm ci` quebrando no CI: lock gerado por npm 11, consumido por npm 10

## Prompt original

> eu não entendo - no github, ele rodou o workflow "ci.yml" ao fazer o merge da branch
> `chore/npm-audit-devdeps`, mas lá deu um erro no `npm ci`:
> ```
> npm error `npm ci` can only install packages when your package.json and package-lock.json or
> npm-shrinkwrap.json are in sync. Please update your lock file with `npm install` before continuing.
> npm error Missing: @emnapi/core@1.11.2 from lock file
> npm error Missing: @emnapi/runtime@1.11.2 from lock file
> ```
> Aqui no meu ambiente, eu rodei o `npm ci` e, apesar de alguns avisos de "deprecated", o processo
> rodou com sucesso até o final

Seguido de: *"acho que no package.json é melhor, mais geral, mais abrangente"* (sobre onde fixar a
versão do npm).

## Causa raiz

**Não era diferença de plataforma** (a hipótese óbvia, já que Windows local × Ubuntu no runner).
Era diferença de **versão do npm**:

- local: npm **11.6.2**
- CI: `actions/setup-node` com `node-version: 22` → npm **10.x** (o que vem com o Node)

`@napi-rs/wasm-runtime` (fallback wasm do rolldown/oxc, trazido pelo Vite 8) declara `@emnapi/core`
e `@emnapi/runtime` como *optional peer dependencies*. O npm 10 exige essas entradas materializadas
no lock; o npm 11 as poda. O `npm install` que aplicou a limpeza de devDeps regravou o lock com npm
11 e removeu as duas entradas — e o `npm ci` local passou por também ser npm 11.

Reproduzido localmente, no Windows, o que elimina a hipótese de plataforma:

```
$ npx npm@10 ci --dry-run
npm error Missing: @emnapi/core@1.11.2 from lock file
npm error Missing: @emnapi/runtime@1.11.2 from lock file
```

Detalhe de método: `npm install --package-lock-only` **não** resolve isso, porque o npm reconstrói o
lock a partir do `node_modules` já instalado. Foi preciso mover o `node_modules` para fora antes de
regenerar.

## O que foi implementado

### 1. `package-lock.json` — reidratado com npm 10

`npx npm@10 install --package-lock-only`, com o `node_modules` fora do caminho. Diff contra o `main`:
**+2 entradas** (`node_modules/@emnapi/core`, `node_modules/@emnapi/runtime`), 0 removidas.

### 2. `package.json` — `"packageManager": "npm@11.6.2"`

Fonte única de verdade da versão do npm do projeto.

### 3. `.github/workflows/ci.yml` — os 3 jobs passam a honrar o campo

Passo novo antes de cada `npm ci`, lendo a versão do próprio `package.json` (sem duplicar o número):

```yaml
- name: npm da versão declarada em packageManager
  run: npm i -g "npm@$(node -p "require('./package.json').packageManager.split('@')[1]")"
```

O campo `packageManager` sozinho **não** muda o npm do CI — `actions/setup-node` não habilita
corepack para npm. O passo acima é o que efetivamente alinha.

### 4. `predev` / `prebuild` — `pnpm` → `npm run`

Efeito colateral descoberto ao testar: com `packageManager` declarado, o corepack (ativo neste
ambiente) passa a **recusar** outros gerenciadores:

```
$ pnpm prepare:theme-link
This project is configured to use npm because .../package.json has a "packageManager" field
```

Isso quebraria `npm run build` e `npm run dev`, cujos hooks `prebuild`/`predev` chamavam `pnpm`.
Como o projeto é npm (tem `package-lock.json`, o CI roda `npm ci`, não há `pnpm-lock.yaml`), os
scripts passaram a usar `npm run`. Não sobrou nenhuma referência a `pnpm` no `package.json`.

## Antes / depois

```
antes:  npm ci (npm 10) -> EUSAGE, Missing: @emnapi/core@1.11.2, @emnapi/runtime@1.11.2
        npm ci (npm 11) -> ok        <- por isso passava local e falhava no CI

depois: npm ci (npm 10) -> ok, sem erro
        npm ci (npm 11) -> ok
        CI usa npm 11.6.2, igual ao local
```

## Como foi testado

- `npx npm@10 ci --dry-run` → sem `EUSAGE`, sem `Missing`
- `npm ci --dry-run` (npm 11) → `up to date`
- `npm ci` real → 1070 pacotes, `found 0 vulnerabilities`
- Os 3 gates do `ci.yml` rodados localmente:
  - `npm run pkg:build` → 27 temas, `literal --bs-* residual TOTAL: 0`, exit 0
  - `npm run pkg:pack` → 27 temas + contract (820 nomes) + preset + solid, 9571.6 KB
  - `npm run pkg:probe` → `fidelidade: 46/46`, `✅ TODOS OS CHECKS PASSARAM`
- `npm run prebuild` após a troca de `pnpm` por `npm run` → junction `public/theme` criada

## Testes criados/alterados

Nenhum arquivo de teste. O gate de regressão desta classe de bug é o próprio `npm ci` do workflow,
que agora roda sob a versão de npm declarada no `package.json` — era exatamente a divergência que
deixava o erro invisível localmente.
