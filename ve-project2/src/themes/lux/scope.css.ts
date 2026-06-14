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

// Lux theme scope class.
// Zero-style identifier used as a stable selector prefix.
export const luxScope = style({})

// ── Root / body styles ────────────────────────────────────────────────────────
// bodyText = typography; bodyFrame = page canvas (Ve2Shell). Do not add padding
// here — baseline screenshots have no padded wrapper around bd-example.
// Root `--bs-*` vars are emitted on `${scope}${vars}` by literal/styles.css.ts.

globalStyle(`${luxScope}${bodyText}`, {
	fontFamily: varBsBodyFontFamily,
	fontSize: varBsBodyFontSize,
	fontWeight: varBsBodyFontWeight,
	lineHeight: varBsBodyLineHeight,
	color: varBsBodyColor,
})

globalStyle(`${luxScope}${bodyFrame}`, {
	backgroundColor: varBsBodyBg,
	margin: 0,
	minHeight: '100vh',
})

// Bootstrap Modal JS adds modalOpenHook to <body> without theme scope.
globalStyle(`${modalOpenHook}`, {
	fontFamily: varBsBodyFontFamily,
	fontSize: varBsBodyFontSize,
	fontWeight: varBsBodyFontWeight,
	lineHeight: varBsBodyLineHeight,
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	margin: 0,
})
