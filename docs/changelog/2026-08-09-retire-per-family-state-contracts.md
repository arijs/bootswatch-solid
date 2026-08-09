# 2026-08-09 — Aposentar os contratos de estado por família (T11)

## Prompt original

> veja este relatório. Não quero simplesmente aplicar uma das sugestões dele, mas quero ver qual a
> solução mais idiomática, que segue melhor o princípio de converter o bootswatch o mais
> literalmente possível para o Vanilla Extract, mesmo que isso quebre a compatibilidade retroativa.

Relatório: `dropdownItemActive`, `dropdownItemDisabled`, `listGroupItemActive` e
`listGroupItemDisabled` são exportados por `@arijs/bootswatch-ve@0.2.0` e referenciados por nenhum
dos 27 temas. Aplicar um deles é um no-op silencioso.

## Diagnóstico

Os fatos do relatório conferem; a causa não. Os quatro não foram esquecidos — são o resto não-ligado
de uma **categoria inteira**.

Um apelido por família colapsa um seletor composto num identificador só: `.dropdown-item.active` →
`dropdownItemActive`, `.btn.show` → `btnShowHook`, `.nav-link.active` → `navLinkActive`. Eram **33
identificadores para 9 classes de estado do Bootstrap**. Como o emissor literal traduz 1:1, cada
apelido precisava de uma entrada no manifesto de divergências para existir no CSS: 12 `remapSymbols`
mais 8 espelhos, escritos à mão, um por família que tinha um componente exigindo. Famílias sem demo
(item de dropdown, item de list-group, breadcrumb, carousel, painel de tab, …) nunca ganharam
entrada, então **18 dos 33 eram publicados sem uma linha de CSS**. Nada comparava as duas listas
mantidas à mão.

O histórico está no próprio plano: T6 unificou os estados conforme §8.6, T8 descobriu que o CSS de
modal/accordion/toast ainda usava os símbolos por família e **reverteu pelo lado errado** — manteve
os apelidos e ensinou o emissor a produzi-los, em vez de regenerar o CSS.

A regra citada pelo relatório como invariante violada
(`docs/ve2-theme-generator-audit-playbook.md:208`) documenta o gerador v1, deletado no T10, e
*manda* fazer exatamente o anti-padrão.

## Por que apagar, e não ligar

A sugestão nº 1 do relatório (emitir os dois) é o padrão `addMirrorRule` que já existia e já tinha
produzido 8 entradas de manutenção. Ligar os quatro faltantes levaria a lista de 15 para 19 e
manteria o modo de falha.

Um apelido por família é um **rename puro**: `${navLink}${navLinkActive}` e `${navLink}${active}`
têm especificidade idêntica e casam o mesmo conjunto. Não compram isolamento — o seletor composto já
isola (`${modal}${show}` não casa um dropdown) — e custam 20 entradas de manifesto, 33 identificadores
e a deriva que gerou o bug.

## Mudanças

- **Manifesto de divergências: 22 → 2 entradas.** Restam `body-split` (vazamento sob o backdrop) e
  `legend-element-mirror`. O mecanismo `remapSymbols` fica para um caso real de interferência.
- **36 contratos removidos**: os 33 apelidos, mais `tooltipVe`/`popoverVe` (os templates já
  carimbavam `tooltip`/`popover` vivos ao lado) e as cópias duplicadas de `fade`/`show`/`collapse`
  em `ui/navs`, `ui/modal` e `ui/navbar`. `literal/` passa a ser dono único de cada token de estado.
- **Preservados**: `modalOpenHook` e `carouselSlide` — `.modal-open` e `.slide` não têm regra em
  nenhum `bootstrap.css`, são marcadores de runtime, não apelidos.
- **27 temas regenerados**: −4 290 linhas de CSS gerado; os espelhos de `.fade` e `.fade:not(.show)`
  por família viram uma regra genérica cada.
- **8 adapters + ~80 componentes** carimbam os hashes literais. `ve-dropdown` passa um único `show`
  para `CLASS_NAME_SHOW_TRIGGER` e `CLASS_NAME_SHOW_MENU`; `ve-carousel` perde o carimbo duplo;
  `ve-toast` larga `CLASS_NAME_HIDE`.

## O gate

`scripts/check-contract-wiring.mjs` (estático, pré-build) e uma asserção de liveness em
`build-contract.mjs` (autoritativa, hashes reais vs CSS emitido). Inércia deliberada é declarada em
`scripts/contract-wiring-allowlist.mjs` com motivo; um hook de estado nunca é entrada válida.

Ele precisa chavear por **(módulo, símbolo)** e não por nome: `fade` é declarado em dois lugares e um
check por nome dá o par vivo como prova de que o morto está ok.

## Dois bugs que o gate expôs

1. `build-contract.mjs` só checava liveness para candidatas **duplicadas** — um nome declarado por um
   único módulo era publicado sem checagem. É o mecanismo exato que publicou os quatro.
2. `contractModules()` filtrava por nome de arquivo e deixava `layout/container.css.ts` de fora, então
   `containerFluid` caía para a cópia morta de `literal/` enquanto os temas estilizavam a de `layout/`.

## Resultado

| | antes | depois |
|---|---|---|
| exports mortos no pacote | 90 | 68 (todos na allowlist) |
| entradas no manifesto | 22 | 2 |
| nomes de contrato | 2240 | 2205 |

`active` mantém o hash `b17c3vgbe3` — quem já compunha com ele não é afetado.

## Quebra de compatibilidade

`cx(dropdownItem, isActive && dropdownItemActive)` vira `cx(dropdownItem, isActive && active)`, com
`active` vindo do entry `global` do pacote. Os nomes removidos agora falham na compilação em vez de
falharem na pintura.

## Verificação

**Equivalência de CSS (a prova principal).** `scripts/_cssdiff.mjs` extrai todo `globalStyle(seletor,
{…})` dos chunks por família nos dois lados, reescreve os apelidos do lado antigo para os contratos
literais que eles representavam, e compara os conjuntos. Nos **27 temas: 0 regras distintas
removidas, 0 adicionadas**, contagem distinta idêntica. A contagem bruta cai exatamente 11 por tema —
as regras-espelho duplicadas colapsando na genérica. Como os apelidos eram renames puros (mesma
especificidade, mesmo conjunto de casamento), isso demonstra que o CSS é o mesmo.

```
bootstrap|2977→2966 raw|2965→2965 distinct|dropped=0 added=0
…
zephyr   |3069→3058 raw|3057→3057 distinct|dropped=0 added=0
```

**TypeScript.** Zero erros novos contra a baseline de `main` (o `tsconfig.json` da raiz tem uma
incompatibilidade `module`/`moduleResolution` pré-existente com tsc 6, então a comparação roda com
`--ignoreConfig` e flags equivalentes, dos dois lados).

**Screenshots.** As baselines commitadas vêm de um Chromium diferente do disponível aqui (o
Playwright do repo fixa `chromium_headless_shell-1217`, o container só tem o 1194), então comparar
contra elas mede a fonte, não o CSS — um spinner intocado já diverge 0,43%. A saída é **regerar as
baselines com o mesmo binário** (o app raiz, que renderiza com o CSS real do Bootswatch e não é
afetado por `ve-project2`) e só então verificar. Aí o ruído cancela dos dois lados:

| tema | rotas | iguais | divergentes |
|---|---|---|---|
| bootstrap | 339 (todas as famílias afetadas, inclusive `ui/buttons`) | **330** | 3 |
| darkly | 119 | **113** | 5 |
| materia | 118 | **111** | 5 |

A maioria fecha em `0.000000` — pixel-perfeito, não "dentro da tolerância".

As 13 divergentes são **pré-existentes**, confirmadas rodando a mesma verificação com o código de
`main` (mantendo só os dois consertos de infra): `card-tabs`, `navbar`, `navs/tabbed-nav`,
`pagination/large-pagination` e `toasts/toast-example` divergem igual, com ratio idêntico até a sexta
casa. As poucas "skipped" são rotas cuja altura medida mudou com a fonte, então não existe baseline
naquele tamanho.

As baselines regeradas **não** foram commitadas: vêm do binário errado e quebrariam as próximas
verificações de quem tem o binário fixado.

### A regressão que só isto pegou

Com as baselines certas, 9 rotas de tooltip/popover falharam nesta branch e passavam em `main`. O
dedupe do codemod removia `${token}` repetido por template literal — mas os templates de
tooltip/popover têm vários elementos num literal só, e `${theme}` repete ali de propósito, um por
elemento. Sem a classe de escopo nos nós internos, `${scope}${tooltipInner}` parou de casar e o balão
virava texto solto. Corrigido em `aad221dd`; `scripts/_fixdedupe.mjs` reporta qualquer token perdido
em relação a uma revisão base e hoje reporta zero.

O ruído de fonte estava **escondendo** essa regressão: no primeiro run tudo divergia 2–16%, e os
tooltips não se destacavam.

## Conserto pré-existente necessário para verificar

`ve-project2` não buildava em `main`: `theme-runtime/theme-runtime.ts` ainda importava
`themes/{theme}/utilities/used/styles.css` para os 27 temas, e essa família foi retirada em `dd753ef4`
("retire utilities/used split"). O arquivo é gerado; `node scripts/generate-ve-theme/generate-granular-loaders.mjs`
regenera ele e os 27 `theme.ts`. Sem isso nenhum style-loader builda.
