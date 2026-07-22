# F8 — Utilities por-tema + entradas por-família + purge por imports

Plano (não implementado) para **abandonar o preset UnoCSS theme-agnostic** e
tratar as utilities como as demais famílias: CSS por-tema, hasheado, fiel à regra
de cada tema Bootswatch. Consumo **só via contract**, importado **de dentro de
cada família** (`@arijs/bootswatch-ve/buttons`, `/utilities`, `/state`, …). Sem
`u()`, sem prefixo. O purge vira um plugin Vite que **analisa os imports
estáticos por família** — lógica simples — e enxuga o CSS de TODAS as famílias.

## Motivação

O preset atual (`presetBootswatch`, gerado de `bootstrap-utilities.scss` do
bootstrap **padrão**) é **theme-agnostic**: uma regra só para os 27 temas. Isso
funciona para utilities cujo valor é uma `var(--bs-*)` (resolve por tema), mas
**diverge** de todo utility que assa um valor literal customizado pelo tema:

- `text-bg-*` — cor de contraste assada (Lux fica branco no branco; o original
  tem texto preto).
- `fw-*` — peso da fonte (Lux: `fw-bold` = 600, não 700).
- `fs-*` — RFS (`calc(...)` diferente em quase todo tema).
- spacers `m-*`/`p-*`/`gap-*` — ex.: quartz usa `.m-3` = 2rem.

**Premissa (decisão do Rafael):** não otimizar com base nas diferenças medidas
hoje — uma versão futura dos temas pode divergir mais. **Assumir 100%
theme-dependente** e tratar utilities por-tema, como componentes.

## Modelo novo

Utilities viram cidadãs de primeira classe do VE por-tema, **iguais aos
componentes**:

- **Uma classe hasheada por utility** (theme-agnostic no NOME), ex.: `mb3`,
  `dFlex`, `fwBold`, `textBgSecondary`. Como já é com `btn` (mesmo hash nos 27).
- **Regra por-tema** `.<themeScope>.<hash> { … }`, valores assados de cada tema
  (fiel ao original). Referencia as vars hasheadas (`var(--b…rgb)`) do scope — a
  camada public-vars **continua**.
- As regras por-tema **já existem** em `themes/<t>/utilities/…` (hoje excluídas do
  build). Passam a ser enviadas.

## Entradas por-família (o design central)

Em vez de um barrel único `/contract`, **cada família é um entry-point** que
exporta suas classes hasheadas. A fonte já é organizada assim
(`theme-contract/ui/buttons/`, `.../ui/alerts/`, `.../utilities/`,
`.../literal/`), então mapeia direto:

```tsx
import { btn, btnPrimary } from '@arijs/bootswatch-ve/buttons'
import { alert, alertDanger } from '@arijs/bootswatch-ve/alerts'
import { mb3, dFlex, textBgSecondary } from '@arijs/bootswatch-ve/utilities'
import { show, active, fade, collapsing } from '@arijs/bootswatch-ve/state'

<button class={cx(btn, btnPrimary, mb3)} />
```

- **Estados** (`show`/`active`/`fade`/`collapsing`/`showing`/`hiding`/`disabled`)
  saem de uma família própria (`/state`, hoje `theme-contract/literal`), e são
  **importados como qualquer outra classe** — mesmo quando aplicados só em
  runtime (o import é a declaração de uso; ver purge).
- **Sem `u()`/prefixo/@unocss.** `cx` é o único caminho (scope + classes). `/solid`
  (0.2.0): `useBootswatch()` → `{ scope, cx }` (saem `u`, `utilityPrefix`,
  `prefixClasses`).
- Sem barrel global: importar por família é o que torna o purge trivial (a
  família e a classe vêm explícitas no import).

## Purge por imports estáticos (plugin Vite)

Como cada classe é **importada por nome de um subpath de família conhecido**, o
plugin não precisa de análise de liveness nem varredura de strings. A lógica é
simples:

1. **Coleta:** varre os `import { … } from '@arijs/bootswatch-ve/<família>'` do
   projeto → conjunto `(família, classe)` usado.
2. **Ação:** para cada família, mantém no CSS de cada tema só os seletores
   `.<scope>.<hash>` das classes importadas; dropa o resto (todas as famílias +
   variantes responsivas não usadas). Roda no `generateBundle` (Vite) + PostCSS.
3. **Scopes/vars:** o CSS de scope e as public-vars dos temas são **sempre
   mantidos** (troca de tema em runtime) — o plugin os reconhece e nunca os toca.
4. **Fallback:** sem o plugin, o CSS completo é enviado (correto, só maior). O
   plugin é otimização.

Enxuga **todas as famílias** (não só utilities): quem usa só `btn`/`badge` não
envia `.accordion`/`.table`/etc. — bundles menores que hoje.

## Classes dinâmicas — resolvidas pelo import

O calcanhar do purge (classes usadas só em runtime) some com este modelo: **o
import é o sinal de uso**, independente de como a classe é aplicada.

- Estado alternado por JS (`el.classList.add(show)`, o runtime `ve-*` da F7, ou
  um componente Solid do consumidor): você **importou** `show` de `/state` p/ ter
  o hash → o plugin mantém. Não precisa de safelist.
- Acesso dinâmico por dado: em vez de `C['textBg'+cor]` (não rastreável), o
  consumidor importa as classes que pode usar e monta um **mapa estático**
  (`const BY_COLOR = { primary: textBgPrimary, secondary: textBgSecondary }`).
  Cada uma foi importada → mantida. (Documentar como a convenção.)
- Único caso especial que não passa por import: os **scopes de tema** e as
  **vars** — tratados como sempre-manter por construção (item 3 acima).

Assim o safelist deixa de ser necessário para classes; no máximo uma escotilha
opcional para casos exóticos.

## Anatomia / exports (esboço)

```jsonc
{
  "exports": {
    "./buttons":  { "types": "./buttons/index.d.ts",  "default": "./buttons/index.js" },
    "./alerts":   { "types": "./alerts/index.d.ts",   "default": "./alerts/index.js" },
    "./utilities":{ "types": "./utilities/index.d.ts","default": "./utilities/index.js" },
    "./state":    { "types": "./state/index.d.ts",    "default": "./state/index.js" },
    // … um por família (deriva de theme-contract/**)
    "./themes/*/scope": { "types": "./themes/*/scope.d.ts", "default": "./themes/*/scope.js" },
    "./themes/*.css": "./themes/*.css",
    "./themes/*": "./themes/*/index.css",
    "./solid": { "types": "./solid/index.d.ts", "default": "./solid/index.js" },
    "./vite":  { "types": "./vite/index.d.ts",  "default": "./vite/index.js" }
  }
}
```

Os JS de contract por-família saem da compilação de `theme-contract/**` (já
per-família); o CSS por-tema/família segue como hoje.

## Migração

1. **Build:** remover `utilities`/`utilities/used` do `EXCLUDE_FAMILIES`; garantir
   **0 literal `--bs-*`** nelas.
2. **Contract por-família:** emitir um módulo JS por família (nomes hasheados) +
   entry no `exports`. Renomear `literal` → `state` (ou expor como `/state`).
3. **Remover preset + `u()`:** apagar `generate-preset.mjs`,
   `bootstrap-utilities.generated.mjs`, `preset/`, `presetBootswatch`,
   `prefixClasses`, prefixo; tirar `@unocss/core`. Public-vars **fica**.
4. **Plugin Vite** `@arijs/bootswatch-ve/vite`: coleta imports por família →
   purga CSS de todas as famílias; mantém scopes/vars.
5. **DDSOFT:** trocar `ui.u('mb-3 text-bg-secondary')` por
   `cx(mb3, textBgSecondary)` com imports por-família; remover UnoCSS.

## Tradeoffs

- **A favor:** fidelidade total por tema (à prova de divergência futura); modelo
  uniforme (utilities = componentes, um só `cx`); purge trivial (só lê imports) e
  cobre TODAS as famílias; classes dinâmicas resolvidas sem safelist; sem
  UnoCSS/prefixo; o bug do `text-bg-*` some por construção.
- **Contra:** CSS enviado maior por padrão (todas as famílias × responsivo × 27);
  o purge vira requisito prático p/ bundles enxutos; variantes responsivas
  multiplicam regras; mais imports por-família no consumidor; reescrita
  considerável. Breaking → **0.2.0**.

## Fases sugeridas

- **P1 — utilities por-tema + entradas por-família (contract dividido); remover
  preset + `u()`.** Pacote fiel, CSS completo, `cx` único caminho.
- **P2 — plugin Vite de purge por imports** (todas as famílias; mantém
  scopes/vars).
- **P3 — migração do DDSOFT** (imports por-família + `cx`; valida visual + E2E,
  inclusive o `text-bg-secondary` do Lux legível).

## Fora de escopo / notas

- Supersede o caminho de utilities das F3/F4 (preset) e o `u()`/prefixo do
  `/solid`. O `preset-probe` deixa de fazer sentido (fidelidade passa a ser
  por-tema).
- Cruza com a F7: os estados que o runtime `ve-*` alterna são importados de
  `/state` pelo consumidor (que já os passa ao `configureVe*`), então entram no
  purge naturalmente.

## Nota de implementação (P1, em andamento) — estrutura do contract

Ao dividir o contract por família (`build-contract.mjs`) descobrimos que a fonte
tem **definições paralelas** e o tema wireia de fontes diferentes:

- **Componentes** (btn, badge, …): a per-família (`theme-contract/ui/<fam>/`) é
  autoritativa; o hash bate com o CSS emitido.
- **Utilities e estados**: o tema wireia do **`literal`** (monólito), não do
  `utilities/generated` — este último é vestigial (0 regras no CSS). Ex.:
  `textBgSecondary` real = o de `literal` (tem regra), não o de `generated`.
- **Estados genéricos** (`show`/`active`/`fade`): o `.show` hasheado **não
  aparece** em nenhum CSS emitido — a família `literal` é excluída do build e os
  estados parecem co-locados dentro dos componentes que os usam. **A resolver**
  antes de expor `/state` (não repetir o bug de exportar classe sem CSS).

**Abordagem robusta adotada:** o (nome→hash) autoritativo de cada família é o que
**tem regra no CSS emitido** daquela família (`.scope.<hash>`). O `build-contract`
deve cruzar os hashes de todos os módulos do contract com os hashes presentes no
CSS por-tema/família, exportando só os que têm regra. Isso resolve a duplicata
literal-vs-generated automaticamente. O `build-contract.mjs` atual compila os
módulos isolados (scaffolding) mas ainda NÃO faz esse cruzamento — é o próximo
passo, junto de decidir a origem/emissão da CSS dos estados.

## Correção de rumo (após ler ve3-granular-family-split-plan)

O split por-família **já existe** (conversão granular G1–G5) e é auditado:

- `scripts/generate-ve-literal/family-table.mjs` — mapa determinístico
  `contract → família` (0-unmapped, 27 temas, 105 overrides). É o input a reusar
  para gerar as entradas por-família do contract, **em vez** do `build-contract`
  ad-hoc (que recompila módulos isolados e não bate a duplicata literal-vs-generated).
- As chunks por-família (`themes/<t>/<família>/styles.css.ts`) já são emitidas e
  verificadas a zero. O pacote só precisa deixar de excluí-las (feito p/ utilities
  no P1/foundation) e expor o contract por-família a partir do family-table.
- **Estados genéricos** (`show`/`active`/`fade`/`collapsing`/`showing`/`hiding`/
  `disabled`) **já** estão fixados em `global` (não em navbar/dropdown) — os
  compostos (`.btn.active`) ficam na família do componente por design. O incômodo
  histórico de "estado em família arbitrária" já foi resolvido.

**Revisão do plano:**
- Gerar o contract por-família a partir de `buildFamilyTable()` (symbol→família) +
  o registry do conversor literal (symbol→hash autoritativo, o que o CSS usa),
  aposentando o `build-contract.mjs` isolado.
- **Subtileza a resolver:** símbolos duplicados (ex.: `textBgSecondary` em literal
  E utilities/generated) — o hash no CSS emitido vem do import do emitter
  (buildImportBlock), que pode diferir da resolução do family-table. Alinhar as
  duas (usar a MESMA resolução do emitter) p/ o contract exportar o hash que tem
  regra.
- **Oportunidade (a decidir com o Rafael):** promover os 7 estados genéricos de
  `global` p/ uma família `state` própria — alinha com o modelo de import por
  família do F8 (importar de `/state`) e com o purge (só envia se importado, em
  vez de sempre em `global`).

## P2 — Arquitetura de carregamento + purge (revisada com dados)

**Descoberta:** o carregamento sob demanda por tema **já funciona** e não é
trabalho da P2. O registry do consumidor faz `import()` dinâmico por tema
(`import('@arijs/bootswatch-ve/themes/lux/index.css')`), então o Vite já
code-splita **1 chunk CSS por tema**; no runtime só o chunk do tema ativo é
buscado (os demais ao trocar). No início carrega só o tema default. Medido no
ddsoft: `lux-*.css`, `darkly-*.css`, … chunks separados (~124KB cada na 0.1.1
sem utilities; ~500KB/tema com a F8).

**Logo a P2 é SÓ o purge:** enxugar cada chunk de tema para conter apenas as
classes que o app realmente usa. O lazy-por-tema é ortogonal e já resolvido.

### O plugin `@arijs/bootswatch-ve/vite`

1. **Coleta do conjunto usado (via grafo de módulos, não text-scan):** durante o
   build do consumidor, o plugin observa os imports de
   `@arijs/bootswatch-ve/<família>` (e `<família>/vars`) — os nomes importados
   são as classes/vars usadas. Mapeia nome→hash via `contract-manifest.json` (já
   shipado). Ao fim do build o conjunto de hashes usados está completo.
2. **Purge no `generateBundle`:** para cada chunk CSS de tema emitido, mantém só
   as regras cujo seletor casa `.<scope>.<hashUsado>`; dropa o resto. Preserva as
   dependências das regras mantidas: `@media` (variantes responsivas), `@layer`
   (ordem de cascata cross-família), `@keyframes` referenciados.
3. **Sempre mantidos:** `scope.css` (a classe de scope + as vars do tema) e as
   public-vars — são a base de qualquer tema e mudam em runtime. O plugin os
   reconhece e nunca os purga.
4. **Transparente ao app:** o consumidor mantém seus `import()` dinâmicos por
   tema; o plugin só pós-processa o CSS emitido. Nada muda nos imports de tema
   (só a migração P3 troca os imports de CLASSE para por-família).
5. **Dev vs build:** o purge roda no build (`generateBundle`). Em dev serve o CSS
   completo do tema (é dev; sem custo de bundle).

### Decisões a confirmar

- **(A) Purgar o `themes/<t>/index.css` inteiro** (o que o app importa hoje),
  mantendo o modelo transparente — vs. o app importar por-família por tema. Reco:
  purgar o index.css (transparente, um chunk por tema).
- **(B) Conjunto usado do grafo de módulos** (preciso; o import É o sinal) — vs.
  varredura de texto. Reco: grafo de módulos.
- **(C) Purga por HASH** (theme-agnostic: o conjunto de hashes usados é o mesmo
  p/ os 27 temas; aplica-se a cada chunk de tema).
- **(D) Fallback:** sem o plugin, o CSS completo do tema é servido (correto, só
  maior) — o plugin é otimização, não correção.

### Ponto de atenção

O purge por hash precisa casar `.<scope>.<hash>` e também os compostos
(`.<scope>.<compA>.<compB>`) e descendentes (`.<scope>.<x> .<scope>.<y>`) — uma
regra é mantida se TODOS os hashes de classe que ela exige estão no conjunto
usado (senão a regra nunca casaria no DOM). Regras de elemento/reboot e
keyframes/@layer são estruturais e mantidas.
