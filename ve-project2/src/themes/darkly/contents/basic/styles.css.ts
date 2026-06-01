import { globalStyle } from '@vanilla-extract/css'
import {
	varBsCodeColor,
	varBsFontMonospace,
	varBsGutterX,
	varBsGutterY,
} from '../../../../theme-contract/_vars.css'
import {
	inlineCode,
} from '../../../../theme-contract/contents/basic/contract.css'
import { containerFluid } from '../../../../theme-contract/layout/container.css'
import { darklyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/basic
// Review [UNMAPPED] and [DELTA] comments before committing.

globalStyle(`${darklyScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: "0.875em",
	color: "#e83e8c",
	wordWrap: "break-word",
})

// SOURCE CSS:
// .container { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-right: auto; margin-left: auto; }
// [UNMAPPED_SELECTOR] class ".container" — no contract mapping
globalStyle(`.container`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	width: "100%",
	paddingRight: "calc(var(--bs-gutter-x) * 0.5)",
	paddingLeft: "calc(var(--bs-gutter-x) * 0.5)",
	marginRight: "auto",
	marginLeft: "auto",
})

// SOURCE CSS:
// .container-fluid { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-right: auto; margin-left: auto; }
globalStyle(`${darklyScope}${containerFluid}`, {
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

// SOURCE CSS:
// .container-xxl { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-right: auto; margin-left: auto; }
// [UNMAPPED_SELECTOR] class ".container-xxl" — no contract mapping
globalStyle(`.container-xxl`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	width: "100%",
	paddingRight: "calc(var(--bs-gutter-x) * 0.5)",
	paddingLeft: "calc(var(--bs-gutter-x) * 0.5)",
	marginRight: "auto",
	marginLeft: "auto",
})

// SOURCE CSS:
// .container-xl { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-right: auto; margin-left: auto; }
// [UNMAPPED_SELECTOR] class ".container-xl" — no contract mapping
globalStyle(`.container-xl`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	width: "100%",
	paddingRight: "calc(var(--bs-gutter-x) * 0.5)",
	paddingLeft: "calc(var(--bs-gutter-x) * 0.5)",
	marginRight: "auto",
	marginLeft: "auto",
})

// SOURCE CSS:
// .container-lg { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-right: auto; margin-left: auto; }
// [UNMAPPED_SELECTOR] class ".container-lg" — no contract mapping
globalStyle(`.container-lg`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	width: "100%",
	paddingRight: "calc(var(--bs-gutter-x) * 0.5)",
	paddingLeft: "calc(var(--bs-gutter-x) * 0.5)",
	marginRight: "auto",
	marginLeft: "auto",
})

// SOURCE CSS:
// .container-md { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-right: auto; margin-left: auto; }
// [UNMAPPED_SELECTOR] class ".container-md" — no contract mapping
globalStyle(`.container-md`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	width: "100%",
	paddingRight: "calc(var(--bs-gutter-x) * 0.5)",
	paddingLeft: "calc(var(--bs-gutter-x) * 0.5)",
	marginRight: "auto",
	marginLeft: "auto",
})

// SOURCE CSS:
// .container-sm { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-right: auto; margin-left: auto; }
// [UNMAPPED_SELECTOR] class ".container-sm" — no contract mapping
globalStyle(`.container-sm`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	width: "100%",
	paddingRight: "calc(var(--bs-gutter-x) * 0.5)",
	paddingLeft: "calc(var(--bs-gutter-x) * 0.5)",
	marginRight: "auto",
	marginLeft: "auto",
})
