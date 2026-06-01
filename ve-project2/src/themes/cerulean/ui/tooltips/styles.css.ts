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
} from '../../../../theme-contract/forms/contract.css'
import {
	btn,
	btnActiveHook,
	btnCheck,
	btnDisabledHook,
	btnSecondary,
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	fade,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	frame,
	frameColumn,
	frameRow,
	justifyCenter,
	justifyEnd,
	justifyStart,
	tooltipArrow,
	tooltipInner,
	tooltipShow,
	tooltipVe,
} from '../../../../theme-contract/ui/tooltips/contract.css'
import {
	alignItemsCenter,
	row,
} from '../../../../theme-contract/utilities/contract.css'
import { ceruleanScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/tooltips
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .btn { --bs-btn-padding-x: 0.75rem; --bs-btn-padding-y: 0.375rem; --bs-btn-font-family: ; --bs-btn-font-size: 1rem; --bs-btn-font-weight: 400; --bs-btn-line-height: 1.5; --bs-btn-color: var(--bs-body-color); --bs-btn-bg: transparent; --bs-btn-border-width: var(--bs-border-width); --bs-btn-border-color: transparent; --bs-btn-border-radius: var(--bs-border-radius); --bs-btn-hover-border-color: transparent; --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); --bs-btn-disabled-opacity: 0.65; --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5); display: inline-block; padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x); font-family: var(--bs-btn-font-family); font-size: var(--bs-btn-font-size); font-weight: var(--bs-btn-font-weight); line-height: var(--bs-btn-line-height); color: var(--bs-btn-color); text-align: center; text-decoration: none; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; user-select: none; border: var(--bs-btn-border-width) solid var(--bs-btn-border-color); border-radius: var(--bs-btn-border-radius); background-color: var(--bs-btn-bg); transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${ceruleanScope}${btn}`, {
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
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .btn:hover { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); }
globalStyle(`${ceruleanScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS:
// .btn:focus-visible { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${ceruleanScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked + .btn { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`:not(${ceruleanScope}${btnCheck}) + ${ceruleanScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn:first-child:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${ceruleanScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${ceruleanScope}${btn}${btnActiveHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${ceruleanScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn-check:checked + .btn:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`:not(${ceruleanScope}${btnCheck}) + ${ceruleanScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:first-child:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${ceruleanScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${ceruleanScope}${btn}${btnActiveHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.show:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${ceruleanScope}${btn}${btnShowHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${ceruleanScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// .btn.disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${ceruleanScope}${btn}${btnDisabledHook}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// fieldset:disabled .btn { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
// [UNMAPPED_SELECTOR] element selector "fieldset:disabled" — map to a contract class
globalStyle(`fieldset:disabled ${ceruleanScope}${btn}`, {
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
globalStyle(`${ceruleanScope}${btn}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#e9ecef",
		[varBsBtnBorderColor]: "#e9ecef",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#eceff1",
		[varBsBtnHoverBorderColor]: "#ebeef1",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#edf0f2",
		[varBsBtnActiveBorderColor]: "#ebeef1",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#e9ecef",
		[varBsBtnDisabledBorderColor]: "#e9ecef",
	},
	backgroundColor: varBsBtnBg,
	color: "#495057",
	backgroundImage: "linear-gradient(#edeff2, #e9ecef 60%, #dbdee1)",
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${ceruleanScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${ceruleanScope}${tooltipVe}${fade}:not(${tooltipShow})`, {
	opacity: 0,
})

// SOURCE CSS:
// .tooltip { --bs-tooltip-zindex: 1080; --bs-tooltip-max-width: 200px; --bs-tooltip-padding-x: 0.5rem; --bs-tooltip-padding-y: 0.25rem; --bs-tooltip-margin: ; --bs-tooltip-font-size: 0.875rem; --bs-tooltip-color: var(--bs-body-bg); --bs-tooltip-bg: var(--bs-emphasis-color); --bs-tooltip-border-radius: var(--bs-border-radius); --bs-tooltip-opacity: 0.9; --bs-tooltip-arrow-width: 0.8rem; --bs-tooltip-arrow-height: 0.4rem; z-index: var(--bs-tooltip-zindex); display: block; margin: var(--bs-tooltip-margin); font-family: var(--bs-font-sans-serif); font-style: normal; font-weight: 400; line-height: 1.5; text-align: start; text-decoration: none; text-shadow: none; text-transform: none; letter-spacing: normal; word-break: normal; white-space: normal; word-spacing: normal; line-break: auto; font-size: var(--bs-tooltip-font-size); word-wrap: break-word; opacity: 0; }
globalStyle(`${ceruleanScope}${tooltipVe}`, {
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
globalStyle(`${ceruleanScope}${tooltipVe}${tooltipShow}`, {
	opacity: varBsTooltipOpacity,
})

// SOURCE CSS:
// .tooltip .tooltip-arrow { display: block; width: var(--bs-tooltip-arrow-width); height: var(--bs-tooltip-arrow-height); }
globalStyle(`${ceruleanScope}${tooltipVe} ${ceruleanScope}${tooltipArrow}`, {
	display: "block",
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

// SOURCE CSS:
// .tooltip .tooltip-arrow::before { position: absolute; content: ""; border-color: transparent; border-style: solid; }
globalStyle(`${ceruleanScope}${tooltipVe} ${ceruleanScope}${tooltipArrow}::before`, {
	position: "absolute",
	content: "\"\"",
	borderColor: "transparent",
	borderStyle: "solid",
})

// SOURCE CSS:
// .bs-tooltip-bottom .tooltip-arrow { top: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-bottom" — no contract mapping
globalStyle(`.bs-tooltip-bottom ${ceruleanScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow { top: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="bottom"] ${ceruleanScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

// SOURCE CSS:
// .bs-tooltip-bottom .tooltip-arrow::before { bottom: -1px; border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-bottom-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-bottom" — no contract mapping
globalStyle(`.bs-tooltip-bottom ${ceruleanScope}${tooltipArrow}::before`, {
	bottom: "-1px",
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow::before { bottom: -1px; border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-bottom-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="bottom"] ${ceruleanScope}${tooltipArrow}::before`, {
	bottom: "-1px",
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

// SOURCE CSS:
// .tooltip-inner { max-width: var(--bs-tooltip-max-width); padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x); color: var(--bs-tooltip-color); text-align: center; background-color: var(--bs-tooltip-bg); border-radius: var(--bs-tooltip-border-radius); }
globalStyle(`${ceruleanScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: "center",
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${ceruleanScope}${frame}`, {
	display: "flex !important",
})

// SOURCE CSS:
// .border { border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important; }
globalStyle(`${ceruleanScope}${frame}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

// SOURCE CSS:
// .flex-column { flex-direction: column !important; }
globalStyle(`${ceruleanScope}${frameColumn}`, {
	flexDirection: "column !important",
})

// SOURCE CSS:
// .justify-content-start { justify-content: flex-start !important; }
globalStyle(`${ceruleanScope}${justifyStart}`, {
	justifyContent: "flex-start !important",
})

// SOURCE CSS:
// .align-items-center { align-items: center !important; }
globalStyle(`${ceruleanScope}${alignItemsCenter}`, {
	alignItems: "center !important",
})

// SOURCE CSS:
// .bs-tooltip-end .tooltip-arrow { left: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-end" — no contract mapping
globalStyle(`.bs-tooltip-end ${ceruleanScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow { left: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="right"] ${ceruleanScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-end .tooltip-arrow::before { right: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-right-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-end" — no contract mapping
globalStyle(`.bs-tooltip-end ${ceruleanScope}${tooltipArrow}::before`, {
	right: "-1px",
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow::before { right: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-right-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="right"] ${ceruleanScope}${tooltipArrow}::before`, {
	right: "-1px",
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

// SOURCE CSS:
// .flex-row { flex-direction: row !important; }
globalStyle(`${ceruleanScope}${frameRow}`, {
	flexDirection: "row !important",
})

// SOURCE CSS:
// .bs-tooltip-top .tooltip-arrow { bottom: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-top" — no contract mapping
globalStyle(`.bs-tooltip-top ${ceruleanScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow { bottom: calc(-1 * var(--bs-tooltip-arrow-height)); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="top"] ${ceruleanScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

// SOURCE CSS:
// .bs-tooltip-top .tooltip-arrow::before { top: -1px; border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-top-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-top" — no contract mapping
globalStyle(`.bs-tooltip-top ${ceruleanScope}${tooltipArrow}::before`, {
	top: "-1px",
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow::before { top: -1px; border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0; border-top-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="top"] ${ceruleanScope}${tooltipArrow}::before`, {
	top: "-1px",
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

// SOURCE CSS:
// .justify-content-center { justify-content: center !important; }
globalStyle(`${ceruleanScope}${justifyCenter}`, {
	justifyContent: "center !important",
})

// SOURCE CSS:
// .bs-tooltip-start .tooltip-arrow { right: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-start" — no contract mapping
globalStyle(`.bs-tooltip-start ${ceruleanScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow { right: calc(-1 * var(--bs-tooltip-arrow-height)); width: var(--bs-tooltip-arrow-height); height: var(--bs-tooltip-arrow-width); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="left"] ${ceruleanScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

// SOURCE CSS:
// .bs-tooltip-start .tooltip-arrow::before { left: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-left-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-start" — no contract mapping
globalStyle(`.bs-tooltip-start ${ceruleanScope}${tooltipArrow}::before`, {
	left: "-1px",
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) var(--bs-tooltip-arrow-height)`,
	borderLeftColor: varBsTooltipBg,
})

// SOURCE CSS:
// .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow::before { left: -1px; border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height); border-left-color: var(--bs-tooltip-bg); }
// [UNMAPPED_SELECTOR] class ".bs-tooltip-auto" — no contract mapping
globalStyle(`.bs-tooltip-auto[data-popper-placement^="left"] ${ceruleanScope}${tooltipArrow}::before`, {
	left: "-1px",
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) var(--bs-tooltip-arrow-height)`,
	borderLeftColor: varBsTooltipBg,
})

// SOURCE CSS:
// .justify-content-end { justify-content: flex-end !important; }
globalStyle(`${ceruleanScope}${justifyEnd}`, {
	justifyContent: "flex-end !important",
})
