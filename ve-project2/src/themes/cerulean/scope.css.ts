import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyFontFamily,
	varBsBodyFontSize,
	varBsBodyFontWeight,
	varBsBodyLineHeight,
} from '../../theme-contract/_vars.css'
import { bodyFrame, bodyText } from '../../theme-contract/theme-contract.css'
import { modalOpenHook } from '../../theme-contract/ui/modal/contract.css'

// Cerulean theme scope class.
// Zero-style identifier used as a stable selector prefix.
export const ceruleanScope = style({})

// ── Root / body styles ────────────────────────────────────────────────────────
// bodyText = typography; bodyFrame = page canvas (Ve2Shell). Do not add padding
// here — baseline screenshots have no padded wrapper around bd-example.
// Root `--bs-*` vars are emitted on `${scope}${vars}` by literal/styles.css.ts.

globalStyle(`${ceruleanScope}${bodyText}`, {
	fontFamily: varBsBodyFontFamily,
	fontSize: varBsBodyFontSize,
	fontWeight: varBsBodyFontWeight,
	lineHeight: varBsBodyLineHeight,
	color: varBsBodyColor,
})

globalStyle(`${ceruleanScope}${bodyFrame}`, {
	backgroundColor: varBsBodyBg,
	margin: 0,
	display: 'flow-root',
	minHeight: '100vh',
})

// Bootstrap Modal JS stamps `${scope} ${modalOpenHook}` on <body> when a modal opens.
globalStyle(`${ceruleanScope}${modalOpenHook}`, {
	fontFamily: varBsBodyFontFamily,
	fontSize: varBsBodyFontSize,
	fontWeight: varBsBodyFontWeight,
	lineHeight: varBsBodyLineHeight,
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	margin: 0,
})
