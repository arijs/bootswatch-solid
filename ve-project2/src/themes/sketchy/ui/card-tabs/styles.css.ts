import { globalStyle } from '@vanilla-extract/css'
import {
	cardHeaderTabs,
} from '../../../../theme-contract/ui/card-tabs/contract.css'
import {
	navLink,
	navLinkActive,
} from '../../../../theme-contract/ui/navs/contract.css'
import { sketchyScope } from '../../scope.css'
import {
	varBsCardBg,
	varBsCardCapPaddingX,
	varBsCardCapPaddingY,
} from '../../../../theme-contract/ui/card/_vars.css'

// ── .card-header-tabs ─────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: 0,
})

globalStyle(`${sketchyScope}${cardHeaderTabs} ${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})
