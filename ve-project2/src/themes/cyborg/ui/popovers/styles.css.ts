import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsFontSansSerif,
	varBsSecondaryBg,
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
	varBsPopoverArrowBorder,
	varBsPopoverArrowHeight,
	varBsPopoverArrowWidth,
	varBsPopoverBg,
	varBsPopoverBodyColor,
	varBsPopoverBodyPaddingX,
	varBsPopoverBodyPaddingY,
	varBsPopoverBorderColor,
	varBsPopoverBorderRadius,
	varBsPopoverBorderWidth,
	varBsPopoverBoxShadow,
	varBsPopoverFontSize,
	varBsPopoverHeaderBg,
	varBsPopoverHeaderColor,
	varBsPopoverHeaderFontSize,
	varBsPopoverHeaderPaddingX,
	varBsPopoverHeaderPaddingY,
	varBsPopoverInnerBorderRadius,
	varBsPopoverMaxWidth,
	varBsPopoverZindex,
} from '../../../../theme-contract/ui/popovers/_vars.css'
import {
	fieldset,
} from '../../../../theme-contract/forms/contract.css'
import {
	btn,
	btnActiveHook,
	btnCheck,
	btnDanger,
	btnDisabledHook,
	btnLg,
	btnSecondary,
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	fade,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	bsPopoverAuto,
	bsPopoverBottom,
	bsPopoverEnd,
	bsPopoverTop,
	frame,
	frameColumn,
	frameRow,
	justifyEnd,
	justifyStart,
	popoverArrow,
	popoverBody,
	popoverHeader,
	popoverShow,
	popoverVe,
} from '../../../../theme-contract/ui/popovers/contract.css'
import {
	alignItemsCenter,
	row,
} from '../../../../theme-contract/utilities/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/popovers
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.3rem + 0.6vw); }
// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// .btn { --bs-btn-padding-x: 0.75rem; --bs-btn-padding-y: 0.375rem; --bs-btn-font-family: ; --bs-btn-font-size: 1rem; --bs-btn-font-weight: 400; --bs-btn-line-height: 1.5; --bs-btn-color: var(--bs-body-color); --bs-btn-bg: transparent; --bs-btn-border-width: var(--bs-border-width); --bs-btn-border-color: transparent; --bs-btn-border-radius: var(--bs-border-radius); --bs-btn-hover-border-color: transparent; --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); --bs-btn-disabled-opacity: 0.65; --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5); display: inline-block; padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x); font-family: var(--bs-btn-font-family); font-size: var(--bs-btn-font-size); font-weight: var(--bs-btn-font-weight); line-height: var(--bs-btn-line-height); color: var(--bs-btn-color); text-align: center; text-decoration: none; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; user-select: none; border: var(--bs-btn-border-width) solid var(--bs-btn-border-color); border-radius: var(--bs-btn-border-radius); background-color: var(--bs-btn-bg); transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${cyborgScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: "1rem",
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
globalStyle(`${cyborgScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS:
// .btn:focus-visible { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cyborgScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked + .btn { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${cyborgScope}${btnCheck}:checked + ${cyborgScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`:not(${cyborgScope}${btnCheck}) + ${cyborgScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn:first-child:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${cyborgScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${cyborgScope}${btn}${btnActiveHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${cyborgScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn-check:checked + .btn:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cyborgScope}${btnCheck}:checked + ${cyborgScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`:not(${cyborgScope}${btnCheck}) + ${cyborgScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:first-child:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cyborgScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cyborgScope}${btn}${btnActiveHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.show:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cyborgScope}${btn}${btnShowHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${cyborgScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// .btn.disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${cyborgScope}${btn}${btnDisabledHook}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// fieldset:disabled .btn { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
// [UNMAPPED_SELECTOR] element selector "fieldset:disabled" — map to a contract class
globalStyle(`fieldset:disabled ${cyborgScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// .btn-danger { --bs-btn-color: #fff; --bs-btn-bg: #dc3545; --bs-btn-border-color: #dc3545; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #bb2d3b; --bs-btn-hover-border-color: #b02a37; --bs-btn-focus-shadow-rgb: 225, 83, 97; --bs-btn-active-color: #fff; --bs-btn-active-bg: #b02a37; --bs-btn-active-border-color: #a52834; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #dc3545; --bs-btn-disabled-border-color: #dc3545; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#c00",
		[varBsBtnBorderColor]: "#c00",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#ad0000",
		[varBsBtnHoverBorderColor]: "#a30000",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#a30000",
		[varBsBtnActiveBorderColor]: "#990000",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#c00",
		[varBsBtnDisabledBorderColor]: "#c00",
	},
	backgroundColor: "#c00",
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-lg { --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
globalStyle(`${cyborgScope}${btn}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: "0.5rem",
		[varBsBtnPaddingX]: "1rem",
		[varBsBtnFontSize]: "1.25rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .btn-group-lg > .btn { --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
// [UNMAPPED_SELECTOR] class ".btn-group-lg" — no contract mapping
globalStyle(`.btn-group-lg > ${cyborgScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: "0.5rem",
		[varBsBtnPaddingX]: "1rem",
		[varBsBtnFontSize]: "1.25rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${cyborgScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${cyborgScope}${popoverVe}${fade}:not(${popoverShow})`, {
	opacity: 0,
})

// SOURCE CSS:
// .popover { --bs-popover-zindex: 1070; --bs-popover-max-width: 276px; --bs-popover-font-size: 0.875rem; --bs-popover-bg: var(--bs-body-bg); --bs-popover-border-width: var(--bs-border-width); --bs-popover-border-color: var(--bs-border-color-translucent); --bs-popover-border-radius: var(--bs-border-radius-lg); --bs-popover-inner-border-radius: calc(var(--bs-border-radius-lg) - var(--bs-border-width)); --bs-popover-box-shadow: var(--bs-box-shadow); --bs-popover-header-padding-x: 1rem; --bs-popover-header-padding-y: 0.5rem; --bs-popover-header-font-size: 1rem; --bs-popover-header-color: inherit; --bs-popover-header-bg: var(--bs-secondary-bg); --bs-popover-body-padding-x: 1rem; --bs-popover-body-padding-y: 1rem; --bs-popover-body-color: var(--bs-body-color); --bs-popover-arrow-width: 1rem; --bs-popover-arrow-height: 0.5rem; --bs-popover-arrow-border: var(--bs-popover-border-color); z-index: var(--bs-popover-zindex); display: block; max-width: var(--bs-popover-max-width); font-family: var(--bs-font-sans-serif); font-style: normal; font-weight: 400; line-height: 1.5; text-align: start; text-decoration: none; text-shadow: none; text-transform: none; letter-spacing: normal; word-break: normal; white-space: normal; word-spacing: normal; line-break: auto; font-size: var(--bs-popover-font-size); word-wrap: break-word; background-color: var(--bs-popover-bg); background-clip: padding-box; border: var(--bs-popover-border-width) solid var(--bs-popover-border-color); border-radius: var(--bs-popover-border-radius); }
globalStyle(`${cyborgScope}${popoverVe}`, {
	vars: {
		[varBsPopoverZindex]: 1070,
		[varBsPopoverMaxWidth]: "276px",
		[varBsPopoverFontSize]: "0.875rem",
		[varBsPopoverBg]: "#282828",
		[varBsPopoverBorderWidth]: varBsBorderWidth,
		[varBsPopoverBorderColor]: varBsBorderColorTranslucent,
		[varBsPopoverBorderRadius]: varBsBorderRadiusLg,
		[varBsPopoverInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - ${varBsBorderWidth})`,
		[varBsPopoverBoxShadow]: varBsBoxShadow,
		[varBsPopoverHeaderPaddingX]: "1rem",
		[varBsPopoverHeaderPaddingY]: "0.5rem",
		[varBsPopoverHeaderFontSize]: "1rem",
		[varBsPopoverHeaderColor]: "#fff",
		[varBsPopoverHeaderBg]: varBsSecondaryBg,
		[varBsPopoverBodyPaddingX]: "1rem",
		[varBsPopoverBodyPaddingY]: "1rem",
		[varBsPopoverBodyColor]: varBsBodyColor,
		[varBsPopoverArrowWidth]: "1rem",
		[varBsPopoverArrowHeight]: "0.5rem",
		[varBsPopoverArrowBorder]: varBsPopoverBorderColor,
	},
	zIndex: varBsPopoverZindex,
	display: "block",
	maxWidth: varBsPopoverMaxWidth,
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
	fontSize: varBsPopoverFontSize,
	wordWrap: "break-word",
	backgroundColor: varBsPopoverBg,
	backgroundClip: "padding-box",
	border: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderRadius: varBsPopoverBorderRadius,
})

// SOURCE CSS:
// .popover .popover-arrow { display: block; width: var(--bs-popover-arrow-width); height: var(--bs-popover-arrow-height); }
globalStyle(`${cyborgScope}${popoverVe} ${cyborgScope}${popoverArrow}`, {
	display: "block",
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

// SOURCE CSS:
// .popover .popover-arrow::before { position: absolute; display: block; content: ""; border-color: transparent; border-style: solid; border-width: 0; }
globalStyle(`${cyborgScope}${popoverVe} ${cyborgScope}${popoverArrow}::before`, {
	position: "absolute",
	display: "block",
	content: "\"\"",
	borderColor: "transparent",
	borderStyle: "solid",
	borderWidth: 0,
})

// SOURCE CSS:
// .popover .popover-arrow::after { position: absolute; display: block; content: ""; border-color: transparent; border-style: solid; border-width: 0; }
globalStyle(`${cyborgScope}${popoverVe} ${cyborgScope}${popoverArrow}::after`, {
	position: "absolute",
	display: "block",
	content: "\"\"",
	borderColor: "transparent",
	borderStyle: "solid",
	borderWidth: 0,
})

// SOURCE CSS:
// .bs-popover-end > .popover-arrow { left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); width: var(--bs-popover-arrow-height); height: var(--bs-popover-arrow-width); }
globalStyle(`${cyborgScope}${bsPopoverEnd} > ${cyborgScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow { left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); width: var(--bs-popover-arrow-height); height: var(--bs-popover-arrow-width); }
globalStyle(`${cyborgScope}${bsPopoverAuto}[data-popper-placement^="right"] > ${cyborgScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

// SOURCE CSS:
// .bs-popover-end > .popover-arrow::before { border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; left: 0px; border-right-color: var(--bs-popover-arrow-border); }
globalStyle(`${cyborgScope}${bsPopoverEnd} > ${cyborgScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	left: "0px",
	borderRightColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::before { border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; left: 0px; border-right-color: var(--bs-popover-arrow-border); }
globalStyle(`${cyborgScope}${bsPopoverAuto}[data-popper-placement^="right"] > ${cyborgScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	left: "0px",
	borderRightColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-end > .popover-arrow::after { border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; left: var(--bs-popover-border-width); border-right-color: var(--bs-popover-bg); }
globalStyle(`${cyborgScope}${bsPopoverEnd} > ${cyborgScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::after { border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; left: var(--bs-popover-border-width); border-right-color: var(--bs-popover-bg); }
globalStyle(`${cyborgScope}${bsPopoverAuto}[data-popper-placement^="right"] > ${cyborgScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

// SOURCE CSS:
// .popover-header { padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x); margin-bottom: 0; font-size: var(--bs-popover-header-font-size); color: var(--bs-popover-header-color); background-color: var(--bs-popover-header-bg); border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color); border-top-left-radius: var(--bs-popover-inner-border-radius); border-top-right-radius: var(--bs-popover-inner-border-radius); }
globalStyle(`${cyborgScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

// SOURCE CSS:
// .popover-header:empty { display: none; }
globalStyle(`${cyborgScope}${popoverHeader}:empty`, {
	display: "none",
})

// SOURCE CSS:
// .popover-body { padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x); color: var(--bs-popover-body-color); }
globalStyle(`${cyborgScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

// SOURCE CSS:
// .btn-secondary { --bs-btn-color: #fff; --bs-btn-bg: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #5c636a; --bs-btn-hover-border-color: #565e64; --bs-btn-focus-shadow-rgb: 130, 138, 145; --bs-btn-active-color: #fff; --bs-btn-active-bg: #565e64; --bs-btn-active-border-color: #51585e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #6c757d; --bs-btn-disabled-border-color: #6c757d; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#555",
		[varBsBtnBorderColor]: "#555",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#484848",
		[varBsBtnHoverBorderColor]: "#444444",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#444444",
		[varBsBtnActiveBorderColor]: "#404040",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#555",
		[varBsBtnDisabledBorderColor]: "#555",
	},
	backgroundColor: "#555",
	color: varBsBtnColor,
})

// SOURCE CSS:
// .bs-popover-bottom > .popover-arrow { top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); }
globalStyle(`${cyborgScope}${bsPopoverBottom} > ${cyborgScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow { top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); }
globalStyle(`${cyborgScope}${bsPopoverAuto}[data-popper-placement^="bottom"] > ${cyborgScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

// SOURCE CSS:
// .bs-popover-bottom > .popover-arrow::before { border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height); top: 0px; border-bottom-color: var(--bs-popover-arrow-border); }
globalStyle(`${cyborgScope}${bsPopoverBottom} > ${cyborgScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	top: "0px",
	borderBottomColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::before { border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height); top: 0px; border-bottom-color: var(--bs-popover-arrow-border); }
globalStyle(`${cyborgScope}${bsPopoverAuto}[data-popper-placement^="bottom"] > ${cyborgScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	top: "0px",
	borderBottomColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-bottom > .popover-arrow::after { border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height); top: var(--bs-popover-border-width); border-bottom-color: var(--bs-popover-bg); }
globalStyle(`${cyborgScope}${bsPopoverBottom} > ${cyborgScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::after { border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height); top: var(--bs-popover-border-width); border-bottom-color: var(--bs-popover-bg); }
globalStyle(`${cyborgScope}${bsPopoverAuto}[data-popper-placement^="bottom"] > ${cyborgScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${cyborgScope}${frame}`, {
	display: "flex !important",
})

// SOURCE CSS:
// .border { border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important; }
globalStyle(`${cyborgScope}${frame}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

// SOURCE CSS:
// .flex-column { flex-direction: column !important; }
globalStyle(`${cyborgScope}${frameColumn}`, {
	flexDirection: "column !important",
})

// SOURCE CSS:
// .justify-content-start { justify-content: flex-start !important; }
globalStyle(`${cyborgScope}${justifyStart}`, {
	justifyContent: "flex-start !important",
})

// SOURCE CSS:
// .align-items-center { align-items: center !important; }
globalStyle(`${cyborgScope}${alignItemsCenter}`, {
	alignItems: "center !important",
})

// SOURCE CSS:
// .bs-popover-top > .popover-arrow { bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); }
globalStyle(`${cyborgScope}${bsPopoverTop} > ${cyborgScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow { bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); }
globalStyle(`${cyborgScope}${bsPopoverAuto}[data-popper-placement^="top"] > ${cyborgScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

// SOURCE CSS:
// .bs-popover-top > .popover-arrow::before { border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; bottom: 0px; border-top-color: var(--bs-popover-arrow-border); }
globalStyle(`${cyborgScope}${bsPopoverTop} > ${cyborgScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	bottom: "0px",
	borderTopColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::before { border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; bottom: 0px; border-top-color: var(--bs-popover-arrow-border); }
globalStyle(`${cyborgScope}${bsPopoverAuto}[data-popper-placement^="top"] > ${cyborgScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	bottom: "0px",
	borderTopColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-top > .popover-arrow::after { border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; bottom: var(--bs-popover-border-width); border-top-color: var(--bs-popover-bg); }
globalStyle(`${cyborgScope}${bsPopoverTop} > ${cyborgScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::after { border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; bottom: var(--bs-popover-border-width); border-top-color: var(--bs-popover-bg); }
globalStyle(`${cyborgScope}${bsPopoverAuto}[data-popper-placement^="top"] > ${cyborgScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

// SOURCE CSS:
// .flex-row { flex-direction: row !important; }
globalStyle(`${cyborgScope}${frameRow}`, {
	flexDirection: "row !important",
})

// SOURCE CSS:
// .justify-content-end { justify-content: flex-end !important; }
globalStyle(`${cyborgScope}${justifyEnd}`, {
	justifyContent: "flex-end !important",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
