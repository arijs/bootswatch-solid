# F8 — Utilities por-tema + purge JIT de TODAS as famílias (substituir o preset UnoCSS)

Plano (não implementado) para **abandonar o preset UnoCSS theme-agnostic** e
tratar as utilities como as demais famílias: CSS por-tema, hasheado, fiel à regra
de cada tema Bootswatch. Consumo **só via contract** (`cx(C.mb3)`) — sem a API de
string `u()`. A otimização de tamanho vira um **plugin Vite próprio** que faz
purge JIT de **todas as famílias** (componentes + utilities), não só das
utilities.

## Motivação

O preset atual (`presetBootswatch`, gerado de `bootstrap-utilities.scss` do
bootstrap **padrão**) é **theme-agnostic**: uma regra só para os 27 temas. Isso
funciona para utilities cujo valor é uma `var(--bs-*)` (resolve por tema), mas
**diverge** de todo utility que assa um valor literal customizado pelo tema:

- `text-bg-*` — cor de contraste assada (o bug reportado: Lux fica branco no
  branco; o original tem texto preto).
- `fw-*` — peso da fonte (Lux: `fw-bold` = 600, não 700).
- `fs-*` — RFS (`calc(...)` diferente em quase todo tema).
- spacers `m-*`/`p-*`/`gap-*` — ex.: quartz usa `.m-3` = 2rem.

**Premissa de projeto (decisão do Rafael):** não otimizar com base nas
diferenças medidas hoje — uma versão futura dos temas pode divergir mais.
**Assumir que 100% das utilities são theme-dependentes** e tratá-las por-tema,
como componentes. Fidelidade e robustez futura acima de reaproveitamento.

## Modelo novo

Utilities viram cidadãs de primeira classe do VE por-tema, **iguais às famílias
de componente**:

- **Uma classe hasheada por utility** (theme-agnostic no NOME), ex.: `mb3`,
  `dFlex`, `fwBold`, `textBgSecondary`. Já é assim que os componentes funcionam
  (`btn` = mesmo hash nos 27 temas).
- **Regra por-tema** `.<themeScope>.<hash> { … }`, com os valores assados de cada
  tema (fiel ao Bootswatch original). A regra referencia as vars hasheadas
  (`var(--b…rgb)`) já setadas no scope — a camada de public-vars **continua**.
- As regras por-tema **já existem** em `ve-project2/src/themes/<t>/utilities/…`
  (hoje EXCLUÍDAS do build porque o caminho era o preset). Passam a ser enviadas.

Resultado: o `text-bg-*` e os demais utilities passam a ser a regra EXATA do
Bootswatch de cada tema, sem inventar var nem assar cor fixa.

### API de consumo — só `cx`, sem `u()`

**Elimina-se a API de string `u()`** (e o `prefixClasses`, o conceito de prefixo
e a dependência `@unocss/core`). Não carregamos esse peso de compat cedo demais.
Tudo — componente E utility — é consumido pelo mesmo caminho:

```tsx
import { btn, btnPrimary, mb3, dFlex, textBgSecondary } from '@arijs/bootswatch-ve/contract'
// cx = scope do tema ativo + classes de contract (reativo)
<button class={cx(btn, btnPrimary, mb3)} />
<span class={cx(badge, textBgSecondary)}>global</span>
```

Ganho colateral crucial: sem `u('mb-3')` (string opaca), **todo uso de classe é
um identificador estático** importado do contract. Isso é o que torna o purge
abaixo preciso e barato — o bundler já sabe quais exports do contract estão vivos.

`/solid` (0.2.0): `useBootswatch()` passa a devolver `{ scope, cx }` (saem `u`,
`utilityPrefix`, `prefixClasses`, `useUtility`).

## Purge JIT de TODAS as famílias (plugin Vite)

Como agora **componentes e utilities** são o mesmo tipo de coisa (classes de
contract hasheadas, consumidas por identificador), o plugin de purge não se
limita a utilities — ele enxuga **o CSS inteiro do tema**, mantendo só as regras
cujas classes o projeto realmente usa. Um consumidor que só usa `btn`/`badge`/
`mb3` não envia `.accordion`, `.carousel`, `.table`, nem 90% das utilities.

- **Coleta (estática):** o conjunto de classes usadas = os exports do `/contract`
  referenciados no código. Como o uso é por identificador estático, dá pra
  derivar do grafo de módulos / dos exports vivos após tree-shaking — sem varrer
  strings frágeis (o motivo de matar o `u()`).
- **Ação:** pós-processa o CSS de cada tema emitido (Vite `generateBundle` +
  PostCSS), mantendo só os seletores `.<scope>.<hash>` cujos hashes estão no
  conjunto usado; dropa o resto (todas as famílias + variantes responsivas não
  usadas).
- **Fallback:** sem o plugin, o CSS completo do tema é enviado (correto, só
  maior). O plugin é **otimização**, não requisito de correção.

## Classes dinâmicas (o ponto delicado do purge)

Nem todo uso é estático. Se o purge dropar uma classe usada só em runtime, quebra
silenciosamente. Casos a tratar:

- **Acesso dinâmico ao contract:** `cx(C[`textBg${cor}`])` — o identificador não
  aparece estático. O bundler tende a manter o namespace `C` inteiro (sem
  tree-shake), mas o purge de CSS não sabe quais foram usadas.
- **Classes de ESTADO alternadas em runtime:** `.show`, `.active`, `.fade`,
  `.collapsing`, `.showing`/`.hiding` — adicionadas por JS (o runtime `ve-*` da
  F7, ou os componentes Solid do consumidor), nunca escritas no JSX. O purge
  ingênuo as removeria.
- **Scope de tema e public-vars:** as classes de scope dos 27 temas e as vars são
  aplicadas em runtime (troca de tema) — **nunca** podem ser purgadas.

Mecanismos previstos:

1. **Safelist** no plugin: `safelist: ['show','active','fade','collapsing', 'textBg*', /^table/]`
   (nomes de contract e/ou padrões) — sempre mantidas. Um **safelist padrão**
   já cobre os estados conhecidos do Bootstrap e os scopes/vars (o consumidor não
   precisa lembrar deles).
2. **Keep-namespace on dynamic access:** o plugin detecta acesso computado ao
   import do contract (`C[expr]`) e, conservador, mantém a família/namespace
   inteiro (ou avisa) em vez de purgar às cegas.
3. **Convenção recomendada:** preferir um mapa estático no consumidor
   (`const BY_COLOR = { primary: textBgPrimary, secondary: textBgSecondary }`)
   a `C['textBg'+x]` — assim tudo volta a ser referência estática e o purge
   funciona sem safelist. Documentar isso.

Scopes de tema e public-vars entram no safelist padrão por construção (o plugin
os reconhece e nunca os toca).

## Migração

1. **Build:** remover `utilities`/`utilities/used` do `EXCLUDE_FAMILIES` (enviar
   as utilities por-tema). Garantir **0 literal `--bs-*`** nelas (usam `var(--b…)`
   hasheado; validar).
2. **Contract:** exportar as classes de utility no barrel (`mb3`, `dFlex`,
   `textBgSecondary`, …). Resolver colisões de nome com componentes.
3. **Remover o preset e o `u()`:** apagar `generate-preset.mjs`,
   `bootstrap-utilities.generated.mjs`, `preset/`, `presetBootswatch`,
   `prefixClasses`, o conceito de prefixo; tirar `@unocss/core` das peer deps. A
   camada public-vars **fica** (as regras por-tema referenciam as vars hasheadas).
4. **Plugin Vite** de purge de todas as famílias, com safelist padrão + opção.
5. **DDSOFT:** converter os ~49 usos de `ui.u('...')` para `cx(C....)`; remover a
   config UnoCSS/prefixo. Mais trabalho de consumo, mas era o que decidimos
   (sem compat retroativa).

## Tradeoffs

- **A favor:** fidelidade total (regra real de cada tema, à prova de divergências
  futuras); modelo uniforme (utilities = componentes, um só caminho `cx`); sem
  UnoCSS/prefixo; o bug do `text-bg-*` some por construção; o purge cobre TODAS
  as famílias (bundles menores que hoje, onde o CSS de componente vai inteiro).
- **Contra:** CSS enviado maior por padrão (todas as famílias × responsivo × 27
  no tarball); o purge vira **requisito prático** p/ bundles enxutos e precisa
  tratar classes dinâmicas (safelist) — reimplementa a parte JIT do UnoCSS; as
  variantes responsivas multiplicam as regras; reescrita considerável. Breaking →
  **0.2.0** (sai preset, prefixo e `u()`).

## Fases sugeridas

- **P1 — utilities por-tema shipadas + contract; remover preset + `u()`.** O
  pacote fica correto e fiel (CSS completo, sem purge). `cx` é o único caminho.
- **P2 — plugin Vite de purge de todas as famílias**, com safelist padrão
  (estados + scopes + vars) e tratamento de acesso dinâmico.
- **P3 — migração do DDSOFT** (u()→cx(), remove UnoCSS; valida visual + E2E,
  inclusive o `text-bg-secondary` do Lux agora legível).

## Fora de escopo / notas

- Supersede o caminho de utilities das F3/F4 (preset UnoCSS) e o `u()`/prefixo do
  `/solid` (F4). O `preset-probe` (fidelidade 46/46 vs bootstrap padrão) deixa de
  fazer sentido — a fidelidade passa a ser por-tema (a regra VE é a fonte).
- O `@arijs/bootstrap-runtime` (F7) é ortogonal, mas se cruza com o purge: os
  estados que o runtime alterna (`show`/`active`/…) precisam estar no safelist
  padrão.
