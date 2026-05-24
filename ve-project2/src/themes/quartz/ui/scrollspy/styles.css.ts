import { globalStyle } from '@vanilla-extract/css'
import {
	varBsHeadingColor,
	varBsLinkColorRgb,
	varBsLinkHoverColorRgb,
} from '../../../../theme-contract/_vars.css'
import {
	horizontalRule,
	link,
	paragraph,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
import { quartzScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/scrollspy
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// hr { margin: 1rem 0; color: inherit; border: 0; border-top: var(--bs-border-width) solid; opacity: 0.25; }
globalStyle(`${quartzScope}${horizontalRule}`, {
	margin: "1rem 0",
	color: "inherit",
	border: 0,
	borderTop: "var(--bs-border-width) solid",
	opacity: 0.25,
})

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${quartzScope}${h6}`, {
	marginTop: 0,
	marginBottom: "1rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h6" — no contract mapping
globalStyle(`.h6`, {
	marginTop: 0,
	marginBottom: "1rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${quartzScope}${h5}`, {
	marginTop: 0,
	marginBottom: "1rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h5" — no contract mapping
globalStyle(`.h5`, {
	marginTop: 0,
	marginBottom: "1rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
globalStyle(`${quartzScope}${h4}`, {
	marginTop: 0,
	marginBottom: "1rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.275rem + 0.3vw)",
})

// SOURCE CSS:
// .h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
// [UNMAPPED_SELECTOR] class ".h4" — no contract mapping
globalStyle(`.h4`, {
	marginTop: 0,
	marginBottom: "1rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.275rem + 0.3vw)",
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${quartzScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h3" — no contract mapping
globalStyle(`.h3`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${quartzScope}${h2}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h2" — no contract mapping
globalStyle(`.h2`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${quartzScope}${h1}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h1" — no contract mapping
globalStyle(`.h1`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// p { margin-top: 0; margin-bottom: 1rem; }
globalStyle(`${quartzScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// ol { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ol`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// ul { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ul`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// dl { margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "dl" — map to a contract class
globalStyle(`dl`, {
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// ol ol { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ol ol`, {
	marginBottom: 0,
})

// SOURCE CSS:
// ul ul { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ul ul`, {
	marginBottom: 0,
})

// SOURCE CSS:
// ol ul { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ol ul`, {
	marginBottom: 0,
})

// SOURCE CSS:
// ul ol { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ul ol`, {
	marginBottom: 0,
})

// SOURCE CSS:
// a { color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1)); text-decoration: underline; }
// [UNMAPPED_SELECTOR] element selector "a" — map to a contract class
globalStyle(`a`, {
	color: "rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))",
	textDecoration: "underline",
})

// SOURCE CSS:
// a:hover { --bs-link-color-rgb: var(--bs-link-hover-color-rgb); }
// [UNMAPPED_SELECTOR] element selector "a:hover" — map to a contract class
globalStyle(`a:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

// SOURCE CSS:
// a:not([href]):not([class]) { color: inherit; text-decoration: none; }
// [UNMAPPED_SELECTOR] element selector "a:not([href]):not([class])" — map to a contract class
globalStyle(`a:not([href]):not([class])`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// a:not([href]):not([class]):hover { color: inherit; text-decoration: none; }
// [UNMAPPED_SELECTOR] element selector "a:not([href]):not([class]):hover" — map to a contract class
globalStyle(`a:not([href]):not([class]):hover`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
// [UNMAPPED_SELECTOR] class ".px-3" — no contract mapping
globalStyle(`.px-3`, {
	paddingRight: "2rem !important",
	paddingLeft: "2rem !important",
})

// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-light" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-light`, {
	backgroundColor: "rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important",
})
