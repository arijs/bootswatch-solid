# F8 — Utilities por-tema + purge JIT próprio (substituir o preset UnoCSS)

Plano (não implementado) para **abandonar o preset UnoCSS theme-agnostic** das
utilities e tratá-las como as demais famílias: CSS por-tema, hasheado, fiel à
regra de cada tema Bootswatch. A otimização (remover utilities não usadas) passa
a ser um **plugin Vite próprio** de purge JIT, no build do consumidor.

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

### API de consumo

- `cx(C.mb3, C.textBgSecondary)` — idêntico a componentes (scope + contracts).
- `u('mb-3 text-bg-secondary')` — açúcar mantido, agora backed por um **mapa
  nome→hash** gerado (ex.: `{ 'mb-3': '<hash>', … }`), não mais por prefixo. O
  `u()` deixa de prefixar (`bsu-`) e passa a resolver o hash da utility.
- Sai o conceito de **prefixo** de utilities e a dependência de `@unocss/core`.

## O ponto delicado: variantes responsivas

Bootstrap gera infixos responsivos (`.m-md-3`, `.d-lg-flex`) e variantes print.
Hoje o preset reconstrói isso com uma **variant** do UnoCSS (não gera N classes).
No modelo por-tema, cada variante é uma regra dentro de `@media` → o nº de regras
de utility **multiplica** (base × 5 breakpoints + print). É o principal motivo do
purge abaixo ser necessário. A geração por-tema já deve emitir essas regras (a
família `utilities` compilada as tem); confirmar cobertura no 1º passo.

## O plugin de purge JIT (Vite)

Enviar TODAS as utilities × (base+responsivo) por tema é muito CSS. O consumidor
usa poucas. Sem UnoCSS (que gerava só as usadas), precisamos de um plugin próprio
que, no build do consumidor, **remova as regras de utility não usadas**.

- **Entrada:** o conjunto de utilities realmente usadas — coletado por análise
  estática das chamadas `u('…')` (args string) e dos identificadores de contract
  referenciados (`C.mb3`), mapeados a hashes pelo mapa nome→hash.
- **Ação:** pós-processa o CSS de utility do tema emitido (Vite `transform`/
  `generateBundle` + PostCSS) mantendo só os seletores cujos hashes estão no
  conjunto usado; dropa o resto (inclui as variantes responsivas não usadas).
- **Fallback:** sem o plugin, as utilities completas do tema são enviadas
  (correto, só maior). O plugin é uma **otimização**, não um requisito de
  correção. Consumidores não-Vite recebem o CSS completo (ou usam o próprio purge
  de CSS deles).
- É, em essência, reimplementar a parte de "gerar só as usadas" do UnoCSS para o
  nosso CSS hasheado — custo de engenharia e manutenção reais, a pesar contra o
  ganho de fidelidade.

## Migração

1. **Build:** remover `utilities`/`utilities/used` do `EXCLUDE_FAMILIES` (enviar
   as utilities por-tema). Garantir **0 literal `--bs-*`** também nelas (usam
   `var(--b…)` hasheado; validar).
2. **Contract:** exportar as classes de utility no barrel (`mb3`, `dFlex`,
   `textBgSecondary`, …). Cuidar de colisões de nome com componentes.
3. **Mapa nome→hash:** gerar `{ 'mb-3': '<hash>' }` (de todas as utilities) e
   enviar (ex.: em `/solid` ou um novo `/utilities`). `u()` passa a usá-lo.
4. **Remover o preset:** apagar `generate-preset.mjs`, `bootstrap-utilities.generated.mjs`,
   `preset/` e `presetBootswatch`; tirar `@unocss/core` das peer deps e o
   conceito de prefixo. (A camada public-vars **fica** — as regras por-tema
   referenciam as vars hasheadas.)
5. **Plugin Vite** de purge (`@arijs/bootswatch-ve/vite`), opcional.
6. **DDSOFT:** `u('text-bg-secondary')` segue funcionando (agora fiel por tema);
   remover a config do preset UnoCSS e o prefixo `bsu-`. Trocas mínimas nos
   call-sites (a API `u()`/`cx()` se mantém).

## Tradeoffs

- **A favor:** fidelidade total (regra real de cada tema, à prova de divergências
  futuras); modelo uniforme (utilities = componentes); sem dependência/config de
  UnoCSS no consumidor; o bug do `text-bg-*` some por construção.
- **Contra:** CSS enviado muito maior (todas as utilities × responsivo × 27 no
  tarball); precisa do plugin de purge p/ bundles enxutos (reimplementa o JIT do
  UnoCSS); as variantes responsivas multiplicam as regras; é uma reescrita
  considerável (supera as fases F3/F4). Versão: **0.2.0** (breaking: sai o
  preset/prefixo).

## Fases sugeridas

- **P1 — utilities por-tema shipadas + contract + mapa nome→hash + `u()` novo;
  remover o preset.** O pacote fica correto e fiel (CSS completo, sem purge).
- **P2 — plugin Vite de purge JIT** (otimização de tamanho).
- **P3 — migração do DDSOFT** (remove config UnoCSS/prefixo; valida visual +
  E2E, inclusive o `text-bg-secondary` do Lux agora legível).

## Fora de escopo / notas

- Supersede o caminho de utilities das F3/F4 (preset UnoCSS). O `preset-probe`
  (fidelidade 46/46 vs bootstrap padrão) deixa de fazer sentido — a fidelidade
  passa a ser por-tema (a própria regra VE é a fonte).
- O `@arijs/bootstrap-runtime` (F7) é ortogonal a isto.
