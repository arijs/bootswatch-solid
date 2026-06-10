import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderWidth,
	varBsCodeColor,
	varBsFontMonospace,
	varBsLinkColorRgb,
	varBsLinkHoverColorRgb,
} from '../../../../theme-contract/_vars.css'
import { varBsLinkOpacity } from '../../../../theme-contract/utilities/generated/_vars.css'
import {
	varBsGutterX,
	varBsGutterY,
} from '../../../../theme-contract/layout/container.css'
import {
	horizontalRule,
	inlineCode,
	link,
	paragraph,
	small,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	containerFluid,
} from '../../../../theme-contract/layout/container.css'
import { bootstrapScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/basic
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// p { margin-top: 0; margin-bottom: 1rem; }
globalStyle(`${bootstrapScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// small { font-size: 0.875em; }
globalStyle(`${bootstrapScope}${small}`, {
	fontSize: "0.875em",
})

// SOURCE CSS:
// .small { font-size: 0.875em; }
globalStyle(`${bootstrapScope}${small}`, {
	fontSize: "0.875em",
})

// SOURCE CSS:
// a { color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1)); text-decoration: underline; }
globalStyle(`${bootstrapScope}${link}`, {
	color: `rgba(${varBsLinkColorRgb}, ${varBsLinkOpacity})`,
	textDecoration: "underline",
})

// SOURCE CSS:
// a:hover { --bs-link-color-rgb: var(--bs-link-hover-color-rgb); }
globalStyle(`${bootstrapScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

// SOURCE CSS:
// a:not([href]):not([class]) { color: inherit; text-decoration: none; }
globalStyle(`${bootstrapScope}${link}:not([href]):not([class])`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// a:not([href]):not([class]):hover { color: inherit; text-decoration: none; }
globalStyle(`${bootstrapScope}${link}:not([href]):not([class]):hover`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// hr { margin: 1rem 0; color: inherit; border: 0; border-top: var(--bs-border-width) solid; opacity: 0.25; }
globalStyle(`${bootstrapScope}${horizontalRule}`, {
	margin: "1rem 0",
	color: "inherit",
	border: 0,
	borderTop: `${varBsBorderWidth} solid`,
	opacity: 0.25,
})

// SOURCE CSS:
// pre, code, kbd, samp { font-family: var(--bs-font-monospace); font-size: 1em; }
// code { font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
globalStyle(`${bootstrapScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: "0.875em",
	color: varBsCodeColor,
	wordWrap: "break-word",
})

// SOURCE CSS:
// .container-fluid { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-right: auto; margin-left: auto; }
globalStyle(`${bootstrapScope}${containerFluid}`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	width: "100%",
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginRight: "auto",
	marginLeft: "auto",
})
