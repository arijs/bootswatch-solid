import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsFontSansSerif,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveColor,
	varBsBtnBg,
	varBsBtnBorderColor,
	varBsBtnBorderRadius,
	varBsBtnBorderWidth,
	varBsBtnBoxShadow,
	varBsBtnColor,
	varBsBtnDisabledBg,
	varBsBtnDisabledBorderColor,
	varBsBtnDisabledColor,
	varBsBtnDisabledOpacity,
	varBsBtnFocusBoxShadow,
	varBsBtnFontFamily,
	varBsBtnFontSize,
	varBsBtnFontWeight,
	varBsBtnHoverBg,
	varBsBtnHoverBorderColor,
	varBsBtnHoverColor,
	varBsBtnLineHeight,
	varBsBtnPaddingX,
	varBsBtnPaddingY,
} from '../../../../theme-contract/ui/buttons/_vars.css'
import {
	varBsTooltipArrowHeight,
	varBsTooltipArrowWidth,
	varBsTooltipBg,
	varBsTooltipBorderRadius,
	varBsTooltipColor,
	varBsTooltipFontSize,
	varBsTooltipMargin,
	varBsTooltipMaxWidth,
	varBsTooltipOpacity,
	varBsTooltipPaddingX,
	varBsTooltipPaddingY,
	varBsTooltipZindex,
} from '../../../../theme-contract/ui/tooltips/_vars.css'
import {
	fieldset,
	row,
} from '../../../../theme-contract/forms/contract.css'
import {
	btn,
	btnActiveHook,
	btnCheck,
	btnSecondary,
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	fade,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	tooltipArrow,
	tooltipInner,
	tooltipShow,
	tooltipVe,
} from '../../../../theme-contract/ui/tooltips/contract.css'
import {
	dFlex,
} from '../../../../theme-contract/utilities/contract.css'
import { darklyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/tooltips
// Review [UNMAPPED] and [DELTA] comments before committing.

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
// .btn { --bs-btn-padding-x: 0.75rem; --bs-btn-padding-y: 0.375rem; --bs-btn-font-family: ; --bs-btn-font-size: 1rem; --bs-btn-font-weight: 400; --bs-btn-line-height: 1.5; --bs-btn-color: var(--bs-body-color); --bs-btn-bg: transparent; --bs-btn-border-width: var(--bs-border-width); --bs-btn-border-color: transparent; --bs-btn-border-radius: var(--bs-border-radius); --bs-btn-hover-border-color: transparent; --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); --bs-btn-disabled-opacity: 0.65; --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5); display: inline-block; padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x); font-family: var(--bs-btn-font-family); font-size: var(--bs-btn-font-size); font-weight: var(--bs-btn-font-weight); line-height: var(--bs-btn-line-height); color: var(--bs-btn-color); text-align: center; text-decoration: none; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; user-select: none; border: var(--bs-btn-border-width) solid var(--bs-btn-border-color); border-radius: var(--bs-btn-border-radius); background-color: var(--bs-btn-bg); transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${darklyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: "0.75rem",
		[varBsBtnPaddingY]: "0.375rem",
		[varBsBtnFontFamily]: "",
		[varBsBtnFontSize]: "1rem",
		[varBsBtnFontWeight]: 400,
		[varBsBtnLineHeight]: 1.5,
		[varBsBtnColor]: varBsBodyColor,
		[varBsBtnBg]: "transparent",
		[varBsBtnBorderWidth]: varBsBorderWidth,
		[varBsBtnBorderColor]: "transparent",
		[varBsBtnBorderRadius]: varBsBorderRadius,
		[varBsBtnHoverBorderColor]: "transparent",
		[varBsBtnBoxShadow]: "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
		[varBsBtnDisabledOpacity]: 0.65,
		[varBsBtnFocusBoxShadow]: "0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5)",
	},
	display: "inline-block",
	padding: "var(--bs-btn-padding-y) var(--bs-btn-padding-x)",
	fontFamily: varBsBtnFontFamily,
	fontSize: varBsBtnFontSize,
	fontWeight: varBsBtnFontWeight,
	lineHeight: varBsBtnLineHeight,
	color: varBsBtnColor,
	textAlign: "center",
	textDecoration: "none",
	verticalAlign: "middle",
	cursor: "pointer",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	border: "var(--bs-btn-border-width) solid var(--bs-btn-border-color)",
	borderRadius: varBsBtnBorderRadius,
	backgroundColor: varBsBtnBg,
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .btn:hover { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); }
globalStyle(`${darklyScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS:
// .btn:focus-visible { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${darklyScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked + .btn { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${darklyScope}${btnCheck}:checked + ${darklyScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`:not(${darklyScope}${btnCheck}) + ${darklyScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn:first-child:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${darklyScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${darklyScope}${btn}${btnActiveHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${darklyScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn-check:checked + .btn:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${darklyScope}${btnCheck}:checked + ${darklyScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`:not(${darklyScope}${btnCheck}) + ${darklyScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:first-child:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${darklyScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${darklyScope}${btn}.active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.show:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${darklyScope}${btn}${btnShowHook}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${darklyScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// .btn.disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${darklyScope}${btn}.disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// fieldset:disabled .btn { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
// [UNMAPPED_SELECTOR] element selector "fieldset:disabled" — map to a contract class
globalStyle(`fieldset:disabled ${darklyScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// .btn-secondary { --bs-btn-color: #fff; --bs-btn-bg: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #5c636a; --bs-btn-hover-border-color: #565e64; --bs-btn-focus-shadow-rgb: 130, 138, 145; --bs-btn-active-color: #fff; --bs-btn-active-bg: #565e64; --bs-btn-active-border-color: #51585e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #6c757d; --bs-btn-disabled-border-color: #6c757d; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${darklyScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#444",
		[varBsBtnBorderColor]: "#444",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#3a3a3a",
		[varBsBtnHoverBorderColor]: "#363636",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#363636",
		[varBsBtnActiveBorderColor]: "#333333",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#444",
		[varBsBtnDisabledBorderColor]: "#444",
	},
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${darklyScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${darklyScope}${tooltipVe}${fade}:not(${tooltipShow})`, {
	opacity: 0,
})

// SOURCE CSS:
// .tooltip { --bs-tooltip-zindex: 1080; --bs-tooltip-max-width: 200px; --bs-tooltip-padding-x: 0.5rem; --bs-tooltip-padding-y: 0.25rem; --bs-tooltip-margin: ; --bs-tooltip-font-size: 0.875rem; --bs-tooltip-color: var(--bs-body-bg); --bs-tooltip-bg: var(--bs-emphasis-color); --bs-tooltip-border-radius: var(--bs-border-radius); --bs-tooltip-opacity: 0.9; --bs-tooltip-arrow-width: 0.8rem; --bs-tooltip-arrow-height: 0.4rem; z-index: var(--bs-tooltip-zindex); display: block; margin: var(--bs-tooltip-margin); font-family: var(--bs-font-sans-serif); font-style: normal; font-weight: 400; line-height: 1.5; text-align: start; text-decoration: none; text-shadow: none; text-transform: none; letter-spacing: normal; word-break: normal; white-space: normal; word-spacing: normal; line-break: auto; font-size: var(--bs-tooltip-font-size); word-wrap: break-word; opacity: 0; }
// [UNMAPPED_SELECTOR] class ".tooltip" — no contract mapping
globalStyle(`.tooltip`, {
	vars: {
		[varBsTooltipZindex]: 1080,
		[varBsTooltipMaxWidth]: "200px",
		[varBsTooltipPaddingX]: "0.5rem",
		[varBsTooltipPaddingY]: "0.25rem",
		[varBsTooltipMargin]: "",
		[varBsTooltipFontSize]: "0.875rem",
		[varBsTooltipColor]: varBsBodyBg,
		[varBsTooltipBg]: varBsEmphasisColor,
		[varBsTooltipBorderRadius]: varBsBorderRadius,
		[varBsTooltipOpacity]: 0.9,
		[varBsTooltipArrowWidth]: "0.8rem",
		[varBsTooltipArrowHeight]: "0.4rem",
	},
	zIndex: varBsTooltipZindex,
	display: "block",
	margin: varBsTooltipMargin,
	fontFamily: varBsFontSansSerif,
	fontStyle: "normal",
	fontWeight: 400,
	lineHeight: 1.5,
	textAlign: "start",
	textDecoration: "none",
	textShadow: "none",
	textTransform: "none",
	letterSpacing: "normal",
	wordBreak: "normal",
	whiteSpace: "normal",
	wordSpacing: "normal",
	lineBreak: "auto",
	fontSize: varBsTooltipFontSize,
	wordWrap: "break-word",
	opacity: 0,
})

// SOURCE CSS:
// .tooltip.show { opacity: var(--bs-tooltip-opacity); }
// [UNMAPPED_SELECTOR] class ".tooltip" — no contract mapping
globalStyle(`.tooltip.show`, {
	opacity: varBsTooltipOpacity,
})

// SOURCE CSS:
// .tooltip .tooltip-arrow { display: block; width: var(--bs-tooltip-arrow-width); height: var(--bs-tooltip-arrow-height); }
// [UNMAPPED_SELECTOR] class ".tooltip" — no contract mapping
globalStyle(`.tooltip ${darklyScope}${tooltipArrow}`, {
	display: "block",
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

// SOURCE CSS:
// .tooltip .tooltip-arrow::before { position: absolute; content: ""; border-color: transparent; border-style: solid; }
// [UNMAPPED_SELECTOR] class ".tooltip" — no contract mapping
globalStyle(`.tooltip ${darklyScope}${tooltipArrow}::before`, {
	position: "absolute",
	content: "\"\"",
	borderColor: "transparent",
	borderStyle: "solid",
})

// SOURCE CSS:
// .bs-tooltip-bottom .tooltip-arrow { top: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-bottom" — no contract mapping
globalStyle(`.bs-tooltip-bottom ${darklyScope}${tooltipArrow}`, {
	top: "calc(-1 * var(--bs-tooltip-arrow-height))",
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow { top: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="bottom"] ${darklyScope}${tooltipArrow}`, {
	top: "calc(-1 * var(--bs-tooltip-arrow-height))",
})

// SOURCE CSS:
// .bs-tooltip-bottom .tooltip-arrow::before { bottom: -1px; border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-bottom-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-bottom" — no contract mapping
globalStyle(`.bs-tooltip-bottom ${darklyScope}${tooltipArrow}::before`, {
	bottom: "-1px",
	borderWidth: "0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height)",
	borderBottomColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow::before { bottom: -1px; border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-bottom-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="bottom"] ${darklyScope}${tooltipArrow}::before`, {
	bottom: "-1px",
	borderWidth: "0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height)",
	borderBottomColor: varBsTooltipBg,
})

// SOURCE CSS:
// .tooltip-inner { max-width: var(--bs-tooltip-max-width); padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x); color: var(--bs-tooltip-color); text-align: center; background-color: var(--bs-tooltip-bg); border-radius: var(--bs-tooltip-border-radius); }
globalStyle(`${darklyScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: "var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x)",
	color: varBsTooltipColor,
	textAlign: "center",
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${darklyScope}${dFlex}`, {
	display: "flex !important",
})

// SOURCE CSS:
// .border { border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important; }
// [UNMAPPED_SELECTOR] class ".border" — no contract mapping
globalStyle(`.border`, {
	border: "var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important",
})

// SOURCE CSS:
// .flex-column { flex-direction: column !important; }
// [UNMAPPED_SELECTOR] class ".flex-column" — no contract mapping
globalStyle(`.flex-column`, {
	flexDirection: "column !important",
})

// SOURCE CSS:
// .justify-content-start { justify-content: flex-start !important; }
// [UNMAPPED_SELECTOR] class ".justify-content-start" — no contract mapping
globalStyle(`.justify-content-start`, {
	justifyContent: "flex-start !important",
})

// SOURCE CSS:
// .align-items-center { align-items: center !important; }
// [UNMAPPED_SELECTOR] class ".align-items-center" — no contract mapping
globalStyle(`.align-items-center`, {
	alignItems: "center !important",
})

// SOURCE CSS:
// .bs-tooltip-end .tooltip-arrow { left: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-end" — no contract mapping
globalStyle(`.bs-tooltip-end ${darklyScope}${tooltipArrow}`, {
	left: "calc(-1 * var(--bs-tooltip-arrow-height))",
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow { left: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="right"] ${darklyScope}${tooltipArrow}`, {
	left: "calc(-1 * var(--bs-tooltip-arrow-height))",
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-end .tooltip-arrow::before { right: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-right-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-end" — no contract mapping
globalStyle(`.bs-tooltip-end ${darklyScope}${tooltipArrow}::before`, {
	right: "-1px",
	borderWidth: "calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0",
	borderRightColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow::before { right: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-right-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="right"] ${darklyScope}${tooltipArrow}::before`, {
	right: "-1px",
	borderWidth: "calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0",
	borderRightColor: varBsTooltipBg,
})

// SOURCE CSS:
// .flex-row { flex-direction: row !important; }
// [UNMAPPED_SELECTOR] class ".flex-row" — no contract mapping
globalStyle(`.flex-row`, {
	flexDirection: "row !important",
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
// .bs-tooltip-top .tooltip-arrow { bottom: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-top" — no contract mapping
globalStyle(`.bs-tooltip-top ${darklyScope}${tooltipArrow}`, {
	bottom: "calc(-1 * var(--bs-tooltip-arrow-height))",
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow { bottom: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="top"] ${darklyScope}${tooltipArrow}`, {
	bottom: "calc(-1 * var(--bs-tooltip-arrow-height))",
})

// SOURCE CSS:
// .bs-tooltip-top .tooltip-arrow::before { top: -1px; border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-top-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-top" — no contract mapping
globalStyle(`.bs-tooltip-top ${darklyScope}${tooltipArrow}::before`, {
	top: "-1px",
	borderWidth: "var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0",
	borderTopColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow::before { top: -1px; border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-top-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="top"] ${darklyScope}${tooltipArrow}::before`, {
	top: "-1px",
	borderWidth: "var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0",
	borderTopColor: varBsTooltipBg,
})

// SOURCE CSS:
// .justify-content-center { justify-content: center !important; }
// [UNMAPPED_SELECTOR] class ".justify-content-center" — no contract mapping
globalStyle(`.justify-content-center`, {
	justifyContent: "center !important",
})

// SOURCE CSS:
// .bs-tooltip-start .tooltip-arrow { right: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-start" — no contract mapping
globalStyle(`.bs-tooltip-start ${darklyScope}${tooltipArrow}`, {
	right: "calc(-1 * var(--bs-tooltip-arrow-height))",
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow { right: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="left"] ${darklyScope}${tooltipArrow}`, {
	right: "calc(-1 * var(--bs-tooltip-arrow-height))",
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-start .tooltip-arrow::before { left: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-left-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-start" — no contract mapping
globalStyle(`.bs-tooltip-start ${darklyScope}${tooltipArrow}::before`, {
	left: "-1px",
	borderWidth: "calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height)",
	borderLeftColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow::before { left: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-left-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="left"] ${darklyScope}${tooltipArrow}::before`, {
	left: "-1px",
	borderWidth: "calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height)",
	borderLeftColor: varBsTooltipBg,
})

// SOURCE CSS:
// .justify-content-end { justify-content: flex-end !important; }
// [UNMAPPED_SELECTOR] class ".justify-content-end" — no contract mapping
globalStyle(`.justify-content-end`, {
	justifyContent: "flex-end !important",
})
