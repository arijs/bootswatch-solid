import { globalStyle } from '@vanilla-extract/css'
import {
	cardHeaderTabs,
} from '../../../../theme-contract/ui/card-tabs/contract.css'
import {
	navLink,
	navLinkActive,
} from '../../../../theme-contract/ui/navs/contract.css'
import { bootstrapScope } from '../../scope.css'
import {
	varBsCardBg,
	varBsCardCapPaddingX,
	varBsCardCapPaddingY,
} from '../../../../theme-contract/ui/card/_vars.css'

// ── .card-header-tabs ─────────────────────────────────────────────────────────

// SOURCE CSS:
// .card-header-tabs {
//   margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
//   margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
//   margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
//   border-bottom: 0; }
globalStyle(`${bootstrapScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: 0,
})

// SOURCE CSS:
// .card-header-tabs .nav-link.active {
//   background-color: var(--bs-card-bg);
//   border-bottom-color: var(--bs-card-bg); }
globalStyle(`${bootstrapScope}${cardHeaderTabs} ${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})
