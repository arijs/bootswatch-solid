import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderStyle,
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
	modalShowHook,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	tooltipArrow,
	tooltipInner,
} from '../../../../theme-contract/ui/tooltips/contract.css'
import {
	alignItemsCenter,
	dFlex,
} from '../../../../theme-contract/utilities/contract.css'
import { briteScope } from '../../scope.css'

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
globalStyle(`textarea`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="reset"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]" — map to a contract class
globalStyle(`textarea`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="submit"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]" — map to a contract class
globalStyle(`textarea`, {
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
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="reset"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]:not(:disabled)" — map to a contract class
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="submit"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]:not(:disabled)" — map to a contract class
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .btn { --bs-btn-padding-x: 0.75rem; --bs-btn-padding-y: 0.375rem; --bs-btn-font-family: ; --bs-btn-font-size: 1rem; --bs-btn-font-weight: 400; --bs-btn-line-height: 1.5; --bs-btn-color: var(--bs-body-color); --bs-btn-bg: transparent; --bs-btn-border-width: var(--bs-border-width); --bs-btn-border-color: transparent; --bs-btn-border-radius: var(--bs-border-radius); --bs-btn-hover-border-color: transparent; --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); --bs-btn-disabled-opacity: 0.65; --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5); display: inline-block; padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x); font-family: var(--bs-btn-font-family); font-size: var(--bs-btn-font-size); font-weight: var(--bs-btn-font-weight); line-height: var(--bs-btn-line-height); color: var(--bs-btn-color); text-align: center; text-decoration: none; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; user-select: none; border: var(--bs-btn-border-width) solid var(--bs-btn-border-color); border-radius: var(--bs-btn-border-radius); background-color: var(--bs-btn-bg); transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${briteScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: "1rem",
		[varBsBtnPaddingY]: "0.5rem",
		[varBsBtnFontFamily]: "",
		[varBsBtnFontSize]: "0.875rem",
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
		[varBsBtnFocusBoxShadow]: "0 0 0 1px rgba(var(--bs-btn-focus-shadow-rgb), .5)",
	},
	display: "inline-block",
	padding: `${varBsBtnPaddingY} ${varBsBtnPaddingX}`,
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
	border: `${varBsBtnBorderWidth} solid ${varBsBtnBorderColor}`,
	borderRadius: varBsBtnBorderRadius,
	backgroundColor: varBsBtnBg,
	transition: "all 0.3s",
})

// SOURCE CSS:
// .btn:hover { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); }
globalStyle(`${briteScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: "#000",
})

// SOURCE CSS:
// .btn:focus-visible { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${briteScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked + .btn { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: "#000",
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: "#000",
})

// SOURCE CSS:
// .btn:first-child:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${briteScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: "#000",
})

// SOURCE CSS:
// .btn.active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${briteScope}${btn}${btnActiveHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: "#000",
})

// SOURCE CSS:
// .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${briteScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: "#000",
})

// SOURCE CSS:
// .btn-check:checked + .btn:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${briteScope}${btnCheck}:checked + ${briteScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`:not(${briteScope}${btnCheck}) + ${briteScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:first-child:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${briteScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${briteScope}${btn}${btnActiveHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.show:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${briteScope}${btn}${btnShowHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${briteScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// .btn.disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
// [UNMAPPED_SELECTOR] state class ".disabled" — no contract mapping
globalStyle(`${briteScope}${btn}.disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// fieldset:disabled .btn { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
// [UNMAPPED_SELECTOR] element selector "fieldset:disabled" — map to a contract class
globalStyle(`${briteScope}${btn}.disabled`, {
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
globalStyle(`${briteScope}${btn}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#fff",
		[varBsBtnBorderColor]: "#fff",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "white",
		[varBsBtnHoverBorderColor]: "white",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "white",
		[varBsBtnActiveBorderColor]: "white",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#fff",
		[varBsBtnDisabledBorderColor]: "#fff",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
	borderColor: varBsBtnBorderColor,
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${briteScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${briteScope}${fade}:not(${modalShowHook})`, {
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
		[varBsTooltipFontSize]: "0.765625rem",
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
// [UNMAPPED_SELECTOR] state class ".show" — no contract mapping
globalStyle(`.tooltip.show`, {
	opacity: varBsTooltipOpacity,
})

// SOURCE CSS:
// .tooltip .tooltip-arrow { display: block; width: var(--bs-tooltip-arrow-width); height: var(--bs-tooltip-arrow-height); }
// [UNMAPPED_SELECTOR] class ".tooltip" — no contract mapping
globalStyle(`.tooltip ${briteScope}${tooltipArrow}`, {
	display: "block",
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

// SOURCE CSS:
// .tooltip .tooltip-arrow::before { position: absolute; content: ""; border-color: transparent; border-style: solid; }
// [UNMAPPED_SELECTOR] class ".tooltip" — no contract mapping
globalStyle(`.tooltip ${briteScope}${tooltipArrow}::before`, {
	position: "absolute",
	content: "\"\"",
	borderColor: "transparent",
	borderStyle: "solid",
})

// SOURCE CSS:
// .bs-tooltip-bottom .tooltip-arrow { top: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-bottom" — no contract mapping
globalStyle(`.bs-tooltip-bottom ${briteScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow { top: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="bottom"] ${briteScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

// SOURCE CSS:
// .bs-tooltip-bottom .tooltip-arrow::before { bottom: -1px; border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-bottom-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-bottom" — no contract mapping
globalStyle(`.bs-tooltip-bottom ${briteScope}${tooltipArrow}::before`, {
	bottom: "-1px",
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow::before { bottom: -1px; border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-bottom-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="bottom"] ${briteScope}${tooltipArrow}::before`, {
	bottom: "-1px",
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

// SOURCE CSS:
// .tooltip-inner { max-width: var(--bs-tooltip-max-width); padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x); color: var(--bs-tooltip-color); text-align: center; background-color: var(--bs-tooltip-bg); border-radius: var(--bs-tooltip-border-radius); }
globalStyle(`${briteScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: "center",
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${briteScope}${dFlex}`, {
	display: "flex !important",
})

// SOURCE CSS:
// .border { border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important; }
// [UNMAPPED_SELECTOR] class ".border" — no contract mapping
globalStyle(`.border`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
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
globalStyle(`${briteScope}${alignItemsCenter}`, {
	alignItems: "center !important",
})

// SOURCE CSS:
// .bs-tooltip-end .tooltip-arrow { left: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-end" — no contract mapping
globalStyle(`.bs-tooltip-end ${briteScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow { left: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="right"] ${briteScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-end .tooltip-arrow::before { right: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-right-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-end" — no contract mapping
globalStyle(`.bs-tooltip-end ${briteScope}${tooltipArrow}::before`, {
	right: "-1px",
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow::before { right: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-right-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="right"] ${briteScope}${tooltipArrow}::before`, {
	right: "-1px",
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
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
globalStyle(`.bs-tooltip-top ${briteScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow { bottom: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="top"] ${briteScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

// SOURCE CSS:
// .bs-tooltip-top .tooltip-arrow::before { top: -1px; border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-top-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-top" — no contract mapping
globalStyle(`.bs-tooltip-top ${briteScope}${tooltipArrow}::before`, {
	top: "-1px",
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow::before { top: -1px; border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-top-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="top"] ${briteScope}${tooltipArrow}::before`, {
	top: "-1px",
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
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
globalStyle(`.bs-tooltip-start ${briteScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow { right: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="left"] ${briteScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-start .tooltip-arrow::before { left: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-left-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-start" — no contract mapping
globalStyle(`.bs-tooltip-start ${briteScope}${tooltipArrow}::before`, {
	left: "-1px",
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) var(--bs-tooltip-arrow-height)`,
	borderLeftColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow::before { left: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-left-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="left"] ${briteScope}${tooltipArrow}::before`, {
	left: "-1px",
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) var(--bs-tooltip-arrow-height)`,
	borderLeftColor: varBsTooltipBg,
})

// SOURCE CSS:
// .justify-content-end { justify-content: flex-end !important; }
// [UNMAPPED_SELECTOR] class ".justify-content-end" — no contract mapping
globalStyle(`.justify-content-end`, {
	justifyContent: "flex-end !important",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})
// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})
// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})
// SOURCE CSS:
// .btn { --bs-btn-border-width: 2px; --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); --bs-btn-focus-box-shadow: 0 0 0 1px rgba(var(--bs-btn-focus-shadow-rgb), .5); margin: 3px 0 0 3px; border-color: #000; box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btn}`, {
	vars: {
		[varBsBtnBorderWidth]: "2px",
		[varBsBtnBoxShadow]: "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
		[varBsBtnFocusBoxShadow]: "0 0 0 1px rgba(var(--bs-btn-focus-shadow-rgb), .5)",
	},
	margin: "3px 0 0 3px",
	borderColor: "#000",
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn:hover { box-shadow: none; transform: translate(0, 0); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btn}:hover`, {
	boxShadow: "none",
	transform: "translate(0, 0)",
})
// SOURCE CSS:
// .btn-check:checked + .btn { box-shadow: none; transform: translate(0, 0); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	boxShadow: "none",
	transform: "translate(0, 0)",
})
// SOURCE CSS:
// .btn-check:checked + .btn { box-shadow: none; transform: translate(0, 0); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	boxShadow: "none",
	transform: "translate(0, 0)",
})
// SOURCE CSS:
// .btn:first-child:active { box-shadow: none; transform: translate(0, 0); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btn}:first-child:active`, {
	boxShadow: "none",
	transform: "translate(0, 0)",
})
// SOURCE CSS:
// .btn.active { box-shadow: none; transform: translate(0, 0); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btn}${btnActiveHook}`, {
	boxShadow: "none",
	transform: "translate(0, 0)",
})
// SOURCE CSS:
// .btn.show { box-shadow: none; transform: translate(0, 0); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btn}${btnShowHook}`, {
	boxShadow: "none",
	transform: "translate(0, 0)",
})
// SOURCE CSS:
// .tooltip { --bs-tooltip-opacity: 1; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".tooltip" — no contract mapping
globalStyle(`.tooltip`, {
	vars: {
		[varBsTooltipOpacity]: 1,
	},
})
