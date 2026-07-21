# Como publicar o `@arijs/bootswatch-ve`

Guia do processo de release. Ponto de atenção que confunde: **o `package.json`
da raiz do repo é o `vite-template-solid` (o app/template) — NÃO é o pacote que
vai pro npm.** O pacote publicável (`@arijs/bootswatch-ve`) é _montado_ na pasta
`package/` pelo `scripts/pack-dist.mjs`, e a versão vem da variável de ambiente
`BSVE_VERSION`. Você não edita versão em nenhum `package.json` à mão.

## O que a pipeline faz (a mesma em local e no CI)

1. `pkg:build` (`scripts/build-package.mjs`) — compila os **27 temas** só com o
   plugin Vanilla-Extract e **falha se sobrar qualquer literal `--bs-*`**. Gera
   `dist-pkg/`.
2. `pkg:pack` (`scripts/pack-dist.mjs`) — monta a raiz publicável em `package/`
   (contract + themes + preset + solid + `package.json` com a versão de
   `BSVE_VERSION`).
3. `pkg:probe` (`scripts/preset-probe.mjs`) — confere a fidelidade do preset
   UnoCSS contra o `bootstrap.css` (46/46, determinístico).
4. `npm pack --dry-run` — dimensiona o tarball, sem publicar.

O script `scripts/release.mjs` encadeia tudo isso, confere que a versão montada
casa com a pedida, e por padrão **para antes de publicar**.

## Caminho recorrente (a cada versão) — automático via GitHub Release

Depois do setup de primeira vez (abaixo), publicar é só criar um Release:

1. Escolha a versão seguindo semver (ver regra no fim).
2. No GitHub, crie um **Release** com a tag `vX.Y.Z` (ex.: `v0.1.1`).
3. O workflow `publish.yml` dispara sozinho: roda os gates, monta `package/` com
   a versão da tag (`BSVE_VERSION`) e faz `npm publish` via **trusted publishing
   (OIDC)** — sem `NPM_TOKEN`, com provenance automática, funciona com 2FA.

Não precisa mexer em nada localmente nesse caminho.

## Caminho local / manual (1ª publicação e fallback)

Use quando for o primeiro publish (o pacote precisa existir pra configurar o
trusted publisher) ou se quiser publicar da sua máquina.

```sh
# valida tudo, NÃO publica (imprime o comando final):
node scripts/release.mjs 0.1.0
# ou: npm run pkg:release -- 0.1.0

# validar e publicar (precisa de `npm login`; pede OTP se a conta tiver 2FA):
npm login
node scripts/release.mjs 0.1.0 --publish

# simular o publish sem enviar de verdade:
node scripts/release.mjs 0.1.0 --publish --dry-run

# reaproveitar o dist-pkg já compilado (pula o build dos 27 temas):
node scripts/release.mjs 0.1.0 --skip-build
```

O build não precisa de rede; só o `npm publish` precisa de login no npm.

## Setup de primeira vez (uma vez só)

1. **Ativar os workflows.** Eles estão em `docs/github-workflows/` porque o
   token do agente não tem escopo `workflow`. Mova e commite:

   ```sh
   mkdir -p .github/workflows
   git mv docs/github-workflows/ci.yml docs/github-workflows/publish.yml .github/workflows/
   git commit -m "ci: ativa workflows do pacote"
   ```

2. **1º publish manual** pra criar o pacote no npm (o trusted publisher só pode
   ser configurado num pacote que já existe):

   ```sh
   npm login
   node scripts/release.mjs 0.1.0 --publish
   ```

3. **Configurar o Trusted Publisher** no npmjs.com → Settings do pacote
   `@arijs/bootswatch-ve` → Trusted Publishers → Add → GitHub Actions:
   - Organization/user: `arijs`
   - Repository: `bootswatch-solid`
   - Workflow filename: `publish.yml`

   A partir daí, os próximos releases publicam sozinhos pelo caminho recorrente.

## Versionamento (semver)

- **patch** (`0.1.0 → 0.1.1`): correções de fidelidade, ajustes que não mudam
  nomes de contract nem a API.
- **minor** (`0.1.0 → 0.2.0`): temas/famílias/utilities novos, aditivos.
- **major** (`0.x → 1.0`, etc.): quando um **hash de contract muda de nome**
  (ex.: a troca de prefixo `bsve_ → b`) — é breaking pra quem importa os nomes.
  Como o pacote ainda não foi publicado, a troca de prefixo entra na 1ª release
  sem bump.

## Referências

- Detalhes das fases e das decisões: `docs/packaging-plan.md` (F5).
- Workflows: `docs/github-workflows/` (`ci.yml`, `publish.yml`, `README.md`).
