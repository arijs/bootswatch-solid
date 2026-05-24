import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsCodeColor,
	varBsFontMonospace,
	varBsHeadingColor,
	varBsPrimaryBgSubtle,
	varBsPrimaryTextEmphasis,
} from '../../../../theme-contract/_vars.css'
import {
	varBsAccordionActiveBg,
	varBsAccordionActiveColor,
	varBsAccordionBg,
	varBsAccordionBodyPaddingX,
	varBsAccordionBodyPaddingY,
	varBsAccordionBorderColor,
	varBsAccordionBorderRadius,
	varBsAccordionBorderWidth,
	varBsAccordionBtnActiveIcon,
	varBsAccordionBtnBg,
	varBsAccordionBtnColor,
	varBsAccordionBtnFocusBoxShadow,
	varBsAccordionBtnIcon,
	varBsAccordionBtnIconTransform,
	varBsAccordionBtnIconTransition,
	varBsAccordionBtnIconWidth,
	varBsAccordionBtnPaddingX,
	varBsAccordionBtnPaddingY,
	varBsAccordionColor,
	varBsAccordionInnerBorderRadius,
	varBsAccordionTransition,
} from '../../../../theme-contract/ui/accordion/_vars.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
import {
	accordion,
	accordionBody,
	accordionButton,
	accordionCollapse,
	accordionHeader,
	accordionItem,
} from '../../../../theme-contract/ui/accordion/contract.css'
import {
	btn,
} from '../../../../theme-contract/ui/buttons/contract.css'
import { morphScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/accordion
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${morphScope}${h6}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h6" — no contract mapping
globalStyle(`.h6`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${morphScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h5" — no contract mapping
globalStyle(`.h5`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
globalStyle(`${morphScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
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
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.275rem + 0.3vw)",
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${morphScope}${h3}`, {
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
globalStyle(`${morphScope}${h2}`, {
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
globalStyle(`${morphScope}${h1}`, {
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
// b { font-weight: bolder; }
// [UNMAPPED_SELECTOR] element selector "b" — map to a contract class
globalStyle(`b`, {
	fontWeight: "bolder",
})

// SOURCE CSS:
// strong { font-weight: bolder; }
// [UNMAPPED_SELECTOR] element selector "strong" — map to a contract class
globalStyle(`strong`, {
	fontWeight: "bolder",
})

// SOURCE CSS:
// pre { font-family: var(--bs-font-monospace); font-size: 1em; }
// [UNMAPPED_SELECTOR] element selector "pre" — map to a contract class
globalStyle(`pre`, {
	fontFamily: varBsFontMonospace,
	fontSize: "1em",
})

// SOURCE CSS:
// code { font-family: var(--bs-font-monospace); font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
// [UNMAPPED_SELECTOR] element selector "code" — map to a contract class
globalStyle(`code`, {
	fontFamily: varBsFontMonospace,
	fontSize: "0.875em",
	color: varBsCodeColor,
	wordWrap: "break-word",
})

// SOURCE CSS:
// kbd { font-family: var(--bs-font-monospace); font-size: 1em; }
// [UNMAPPED_SELECTOR] element selector "kbd" — map to a contract class
globalStyle(`kbd`, {
	fontFamily: varBsFontMonospace,
	fontSize: "1em",
})

// SOURCE CSS:
// samp { font-family: var(--bs-font-monospace); font-size: 1em; }
// [UNMAPPED_SELECTOR] element selector "samp" — map to a contract class
globalStyle(`samp`, {
	fontFamily: varBsFontMonospace,
	fontSize: "1em",
})

// SOURCE CSS:
// button { border-radius: 0; margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; appearance: button; }
// [UNMAPPED_SELECTOR] element selector "button" — map to a contract class
globalStyle(`button`, {
	borderRadius: 0,
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
	appearance: "button",
})

// SOURCE CSS:
// button:focus:not(:focus-visible) { outline: 0; }
// [UNMAPPED_SELECTOR] element selector "button:focus:not(:focus-visible)" — map to a contract class
globalStyle(`button:focus:not(:focus-visible)`, {
	outline: 0,
})

// SOURCE CSS:
// input { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "input" — map to a contract class
globalStyle(`input`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// select { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; }
// [UNMAPPED_SELECTOR] element selector "select" — map to a contract class
globalStyle(`select`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
})

// SOURCE CSS:
// optgroup { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "optgroup" — map to a contract class
globalStyle(`optgroup`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// [type="button"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="button"]" — map to a contract class
globalStyle(`[type="button"]`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="reset"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]" — map to a contract class
globalStyle(`[type="reset"]`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="submit"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]" — map to a contract class
globalStyle(`[type="submit"]`, {
	appearance: "button",
})

// SOURCE CSS:
// button:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "button:not(:disabled)" — map to a contract class
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="button"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="button"]:not(:disabled)" — map to a contract class
globalStyle(`[type="button"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="reset"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]:not(:disabled)" — map to a contract class
globalStyle(`[type="reset"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="submit"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]:not(:disabled)" — map to a contract class
globalStyle(`[type="submit"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .collapse:not(.show) { display: none; }
// [UNMAPPED_SELECTOR] class ".collapse" — no contract mapping
globalStyle(`.collapse:not(.show)`, {
	display: "none",
})

// SOURCE CSS:
// .accordion { --bs-accordion-color: var(--bs-body-color); --bs-accordion-bg: var(--bs-body-bg); --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease; --bs-accordion-border-color: var(--bs-border-color); --bs-accordion-border-width: var(--bs-border-width); --bs-accordion-border-radius: var(--bs-border-radius); --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width))); --bs-accordion-btn-padding-x: 1.25rem; --bs-accordion-btn-padding-y: 1rem; --bs-accordion-btn-color: var(--bs-body-color); --bs-accordion-btn-bg: var(--bs-accordion-bg); --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e"); --bs-accordion-btn-icon-width: 1.25rem; --bs-accordion-btn-icon-transform: rotate(-180deg); --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out; --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23052c65' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e"); --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-accordion-body-padding-x: 1.25rem; --bs-accordion-body-padding-y: 1rem; --bs-accordion-active-color: var(--bs-primary-text-emphasis); --bs-accordion-active-bg: var(--bs-primary-bg-subtle); }
globalStyle(`${morphScope}${accordion}`, {
	vars: {
		[varBsAccordionColor]: varBsBodyColor,
		[varBsAccordionBg]: varBsBodyBg,
		[varBsAccordionTransition]: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease",
		[varBsAccordionBorderColor]: varBsBorderColor,
		[varBsAccordionBorderWidth]: varBsBorderWidth,
		[varBsAccordionBorderRadius]: varBsBorderRadius,
		[varBsAccordionInnerBorderRadius]: "calc(var(--bs-border-radius) - (var(--bs-border-width)))",
		[varBsAccordionBtnPaddingX]: "1.25rem",
		[varBsAccordionBtnPaddingY]: "1rem",
		[varBsAccordionBtnColor]: varBsBodyColor,
		[varBsAccordionBtnBg]: varBsAccordionBg,
		[varBsAccordionBtnIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
		[varBsAccordionBtnIconWidth]: "1.25rem",
		[varBsAccordionBtnIconTransform]: "rotate(-180deg)",
		[varBsAccordionBtnIconTransition]: "transform 0.2s ease-in-out",
		[varBsAccordionBtnActiveIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23052c65' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
		[varBsAccordionBtnFocusBoxShadow]: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
		[varBsAccordionBodyPaddingX]: "1.25rem",
		[varBsAccordionBodyPaddingY]: "1rem",
		[varBsAccordionActiveColor]: varBsPrimaryTextEmphasis,
		[varBsAccordionActiveBg]: varBsPrimaryBgSubtle,
	},
})

// SOURCE CSS:
// .accordion-button { position: relative; display: flex; align-items: center; width: 100%; padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x); font-size: 1rem; color: var(--bs-accordion-btn-color); text-align: left; background-color: var(--bs-accordion-btn-bg); border: 0; border-radius: 0; overflow-anchor: none; transition: var(--bs-accordion-transition); }
globalStyle(`${morphScope}${accordionButton}`, {
	position: "relative",
	display: "flex",
	alignItems: "center",
	width: "100%",
	padding: "var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x)",
	fontSize: "1rem",
	color: varBsAccordionBtnColor,
	textAlign: "left",
	backgroundColor: varBsAccordionBtnBg,
	border: 0,
	borderRadius: 0,
	overflowAnchor: "none",
	transition: varBsAccordionTransition,
})

// SOURCE CSS:
// .accordion-button:not(.collapsed) { color: var(--bs-accordion-active-color); background-color: var(--bs-accordion-active-bg); box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color); }
globalStyle(`${morphScope}${accordionButton}:not(.collapsed)`, {
	color: varBsAccordionActiveColor,
	backgroundColor: varBsAccordionActiveBg,
	boxShadow: "inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)",
})

// SOURCE CSS:
// .accordion-button:not(.collapsed)::after { background-image: var(--bs-accordion-btn-active-icon); transform: var(--bs-accordion-btn-icon-transform); }
globalStyle(`${morphScope}${accordionButton}:not(.collapsed)::after`, {
	backgroundImage: varBsAccordionBtnActiveIcon,
	transform: varBsAccordionBtnIconTransform,
})

// SOURCE CSS:
// .accordion-button::after { flex-shrink: 0; width: var(--bs-accordion-btn-icon-width); height: var(--bs-accordion-btn-icon-width); margin-left: auto; content: ""; background-image: var(--bs-accordion-btn-icon); background-repeat: no-repeat; background-size: var(--bs-accordion-btn-icon-width); transition: var(--bs-accordion-btn-icon-transition); }
globalStyle(`${morphScope}${accordionButton}::after`, {
	flexShrink: 0,
	width: varBsAccordionBtnIconWidth,
	height: varBsAccordionBtnIconWidth,
	marginLeft: "auto",
	content: "\"\"",
	backgroundImage: varBsAccordionBtnIcon,
	backgroundRepeat: "no-repeat",
	backgroundSize: varBsAccordionBtnIconWidth,
	transition: varBsAccordionBtnIconTransition,
})

// SOURCE CSS:
// .accordion-button:hover { z-index: 2; }
globalStyle(`${morphScope}${accordionButton}:hover`, {
	zIndex: 2,
})

// SOURCE CSS:
// .accordion-button:focus { z-index: 3; outline: 0; box-shadow: var(--bs-accordion-btn-focus-box-shadow); }
globalStyle(`${morphScope}${accordionButton}:focus`, {
	zIndex: 3,
	outline: 0,
	boxShadow: varBsAccordionBtnFocusBoxShadow,
})

// SOURCE CSS:
// .accordion-header { margin-bottom: 0; }
globalStyle(`${morphScope}${accordionHeader}`, {
	marginBottom: 0,
})

// SOURCE CSS:
// .accordion-item { color: var(--bs-accordion-color); background-color: var(--bs-accordion-bg); border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color); }
globalStyle(`${morphScope}${accordionItem}`, {
	color: varBsAccordionColor,
	backgroundColor: varBsAccordionBg,
	border: "var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)",
})

// SOURCE CSS:
// .accordion-item:first-of-type { border-top-left-radius: var(--bs-accordion-border-radius); border-top-right-radius: var(--bs-accordion-border-radius); }
globalStyle(`${morphScope}${accordionItem}:first-of-type`, {
	borderTopLeftRadius: varBsAccordionBorderRadius,
	borderTopRightRadius: varBsAccordionBorderRadius,
})

// SOURCE CSS:
// .accordion-item:first-of-type > .accordion-header .accordion-button { border-top-left-radius: var(--bs-accordion-inner-border-radius); border-top-right-radius: var(--bs-accordion-inner-border-radius); }
globalStyle(`${morphScope}${accordionItem}:first-of-type > ${morphScope}${accordionHeader} ${morphScope}${accordionButton}`, {
	borderTopLeftRadius: varBsAccordionInnerBorderRadius,
	borderTopRightRadius: varBsAccordionInnerBorderRadius,
})

// SOURCE CSS:
// .accordion-item:not(:first-of-type) { border-top: 0; }
globalStyle(`${morphScope}${accordionItem}:not(:first-of-type)`, {
	borderTop: 0,
})

// SOURCE CSS:
// .accordion-item:last-of-type { border-bottom-right-radius: var(--bs-accordion-border-radius); border-bottom-left-radius: var(--bs-accordion-border-radius); }
globalStyle(`${morphScope}${accordionItem}:last-of-type`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

// SOURCE CSS:
// .accordion-item:last-of-type > .accordion-header .accordion-button.collapsed { border-bottom-right-radius: var(--bs-accordion-inner-border-radius); border-bottom-left-radius: var(--bs-accordion-inner-border-radius); }
globalStyle(`${morphScope}${accordionItem}:last-of-type > ${morphScope}${accordionHeader} ${morphScope}${accordionButton}.collapsed`, {
	borderBottomRightRadius: varBsAccordionInnerBorderRadius,
	borderBottomLeftRadius: varBsAccordionInnerBorderRadius,
})

// SOURCE CSS:
// .accordion-item:last-of-type > .accordion-collapse { border-bottom-right-radius: var(--bs-accordion-border-radius); border-bottom-left-radius: var(--bs-accordion-border-radius); }
globalStyle(`${morphScope}${accordionItem}:last-of-type > ${morphScope}${accordionCollapse}`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

// SOURCE CSS:
// .accordion-body { padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x); }
globalStyle(`${morphScope}${accordionBody}`, {
	padding: "var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)",
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .accordion-flush > .accordion-item
// [DELTA] unmapped selector: .accordion-flush > .accordion-item:first-child
// [DELTA] unmapped selector: .accordion-flush > .accordion-item:last-child
// [DELTA] unmapped selector: .accordion-flush > .accordion-item > .accordion-collapse
// [DELTA] unmapped selector: .accordion-flush > .accordion-item > .accordion-header .accordion-button
// [DELTA] unmapped selector: .accordion-flush > .accordion-item > .accordion-header .accordion-button.collapsed
