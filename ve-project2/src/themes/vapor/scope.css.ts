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

// Vapor theme scope class.
// Zero-style identifier used as a stable selector prefix.
export const vaporScope = style({})

// ── Root / body styles ────────────────────────────────────────────────────────
// bodyText = typography; bodyFrame = page canvas (Ve2Shell). Do not add padding
// here — baseline screenshots have no padded wrapper around bd-example.
// Root `--bs-*` vars are emitted on `${scope}${vars}` by literal/styles.css.ts.

globalStyle(`${vaporScope}${bodyText}`, {
	fontFamily: varBsBodyFontFamily,
	fontSize: varBsBodyFontSize,
	fontWeight: varBsBodyFontWeight,
	lineHeight: varBsBodyLineHeight,
	color: varBsBodyColor,
	textShadow: "0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)",
})

globalStyle(`${vaporScope}${bodyFrame}`, {
	backgroundColor: varBsBodyBg,
	backgroundImage: "linear-gradient(#17082e 0%, #1a0933 7%, #1a0933 80%, #0c1f4c 100%)",
	margin: 0,
	display: 'flow-root',
	minHeight: '100vh',
})

// Bootstrap Modal JS stamps `${scope} ${modalOpenHook}` on <body> when a modal opens.
globalStyle(`${vaporScope}${modalOpenHook}`, {
	fontFamily: varBsBodyFontFamily,
	fontSize: varBsBodyFontSize,
	fontWeight: varBsBodyFontWeight,
	lineHeight: varBsBodyLineHeight,
	color: varBsBodyColor,
	textShadow: "0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)",
	backgroundColor: varBsBodyBg,
	backgroundImage: "linear-gradient(#17082e 0%, #1a0933 7%, #1a0933 80%, #0c1f4c 100%)",
	margin: 0,
})
