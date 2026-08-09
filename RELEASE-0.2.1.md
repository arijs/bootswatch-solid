# @arijs/bootswatch-ve v0.2.1

Shared Bootstrap state classes are now one contract each, composed at the call site. 35 per-family state aliases are gone — 18 of them had shipped with no CSS behind them since the package existed.

> **Read this before upgrading.** Despite the patch number, this release removes exported names. `^0.2.0` resolves to it automatically, and a project using any of the removed names will fail to compile. The failure is a compile error, not a silent visual regression — see *Migrating* below.

## Why

`dropdownItemActive`, `listGroupItemActive` and two siblings were exported, hashed, and referenced by none of the 27 themes. Applying one was a silent no-op: correct import, valid TypeScript, a real class in the DOM, and zero CSS behind it.

They were not an oversight. A per-family alias collapses a compound source selector into one identifier — `.dropdown-item.active` → `dropdownItemActive`, `.btn.show` → `btnShowHook`. 33 identifiers stood for 9 Bootstrap state classes, and each one only existed in the CSS because someone hand-wrote an entry in the converter's divergence manifest. Families without a demo page never got an entry, so 18 of the 33 shipped dead.

The alias bought nothing: `${navLink}${navLinkActive}` and `${navLink}${active}` have identical specificity and match the same elements. Compound selectors already isolate components — `${modal}${show}` cannot match a dropdown — so a shared `active` is safe.

## Breaking changes

**35 exported names removed.** Compose the shared state contract instead:

```ts
// before
import { dropdownItem, dropdownItemActive } from '@arijs/bootswatch-ve/dropdowns'
cx(dropdownItem, isActive && dropdownItemActive)

// after
import { dropdownItem } from '@arijs/bootswatch-ve/dropdowns'
import { active } from '@arijs/bootswatch-ve/global'
cx(dropdownItem, isActive && active)
```

| entry | removed | replace with |
|---|---|---|
| `accordion` | `accordionButtonCollapsed`, `accordionCollapseShow`, `accordionCollapsing` | `collapsed`, `show`, `collapsing` |
| `alerts` | `alertBtnCloseDisabledHook` | `disabled` |
| `breadcrumb` | `breadcrumbItemActive` | `active` |
| `buttons` | `btnActiveHook`, `btnDisabledHook` | `active`, `disabled` |
| `carousel` | `carouselActive`, `carouselItemActive`, `carouselIndicatorActive` | `active` |
| `dropdowns` | `btnShowHook`, `dropdownMenuShow`, `dropdownItemActive`, `dropdownItemDisabled` | `show`, `show`, `active`, `disabled` |
| `list-group` | `listGroupItemActive`, `listGroupItemDisabled` | `active`, `disabled` |
| `modal` | `modalShowHook`, `modalFade` | `show`, `fade` |
| `navbar` | `collapseShow` | `show` |
| `navs` | `navLinkActive`, `navLinkDisabled`, `tabPaneActive`, `navItemShow` | `active`, `disabled`, `active`, `show` |
| `pagination` | `pageItemActive`, `pageItemDisabled` | `active`, `disabled` |
| `popovers` | `popoverShow`, `popoverFade`, `popoverVe` | `show`, `fade`, `popover` |
| `toasts` | `toastShow`, `toastShowing`, `toastFade`, `toastHide` | `show`, `showing`, `fade`, — |
| `tooltips` | `tooltipShow`, `tooltipFade`, `tooltipVe` | `show`, `fade`, `tooltip` |

`active`, `disabled`, `show`, `showing`, `fade`, `collapsed` and `collapsing` all come from `@arijs/bootswatch-ve/global`. `popover` and `tooltip` come from their own entries — the templates already stamped them alongside the `*Ve` aliases, so dropping those changes nothing visually.

`toastHide` has no replacement: `.hide` has no rule in any theme's `bootstrap.css`, so there was never anything to map it to. Bootstrap's own literal `'hide'` is used for `CLASS_NAME_HIDE`.

**91 class hashes changed.** Removing an export shifts Vanilla Extract's per-file identifier counter, so the contracts declared after it in the same module get new hashes — `dropdownItem`, `modal`, `carouselItem` and 88 others. Names and CSS ship together, so importing the name keeps working; this only matters if you hardcoded a hash string somewhere.

## Fixed

- **`badgeInfo` and `badgeWarning` are exported again.** Superhero is the only theme that still carries the Bootstrap 3/4 `.badge-info` / `.badge-warning` rules, and the contract builder decided liveness by looking at the `bootstrap` theme alone — so both names were dropped from the package as dead duplicates. Liveness is now the union of all 27 themes.
- **`containerFluid` pointed at a dead hash.** The contract builder collected modules by filename and skipped `layout/container.css.ts`, so the name resolved to the unstyled copy in the literal registry while the themes styled the layout one.
- **Utility CSS never loaded in granular mode.** 350 components requested a `utilities/used` family that had been retired, and an unknown family is a silent no-op outside DEV, so no utility rule was fetched on any route. Visible wherever a utility drove layout — `.flex-wrap` on a wrapping pagination, `.mb-3` losing to `.nav { margin-bottom: 0 }`.

## Guard rails

An exported contract with no CSS behind it can no longer reach npm.

- `npm run check:contract-wiring` — static, runs before a build; also checks that every class token in the source themes maps to a declared contract.
- `build-contract.mjs` now asserts liveness for every exported name against the emitted CSS. It previously only checked names declared by two modules, which is exactly how the four dead contracts got published.
- Deliberate inertness is declared in `scripts/contract-wiring-allowlist.mjs` with a reason. A state hook is never a valid entry there.

Dead exports in the package: **90 → 68**, all allowlisted (element markers, Bootstrap 3/4 names BS5 dropped, demo scaffolding, and 14 tagged `TRIAGE` pending a decision from whoever knows the original intent).

## Verification

- **Rule-set equivalence across all 27 themes.** Every `globalStyle` in the generated family chunks, with the old aliases normalised to the literal contracts they stood for: **0 distinct rules dropped, 0 added**. Raw rule count falls by exactly 11 per theme — the duplicated mirror rules collapsing into the generic one.
- **Screenshots, granular loader, baselines recaptured with the same browser:** bootstrap 333/339 and darkly 119/119, zero mismatches, most at `0.000000`. The 6 skipped are routes whose `@screenshot` directive height is pinned to a browser build the verification container does not have.
- 27 themes, 31 contract entries, 2209 exported classes, 0 residual literal `--bs-*`.
