import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsFontSansSerif,
	varBsHeadingColor,
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
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
import {
	fieldset,
	row,
} from '../../../../theme-contract/forms/contract.css'
import {
	btn,
	btnActiveHook,
	btnCheck,
	btnDanger,
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
	popoverArrow,
	popoverBody,
	popoverHeader,
} from '../../../../theme-contract/ui/popovers/contract.css'
import {
	dFlex,
} from '../../../../theme-contract/utilities/contract.css'
import { mintyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/popovers
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${mintyScope}${h6}`, {
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
globalStyle(`${mintyScope}${h5}`, {
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
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${mintyScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h4" — no contract mapping
globalStyle(`.h4`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.3rem + 0.6vw); }
globalStyle(`${mintyScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.3rem + 0.6vw)",
})

// SOURCE CSS:
// .h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.3rem + 0.6vw); }
// [UNMAPPED_SELECTOR] class ".h3" — no contract mapping
globalStyle(`.h3`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.3rem + 0.6vw)",
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${mintyScope}${h2}`, {
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
globalStyle(`${mintyScope}${h1}`, {
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
globalStyle(`${mintyScope}${btn}`, {
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
globalStyle(`${mintyScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS:
// .btn:focus-visible { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${mintyScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked + .btn { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${mintyScope}${btnCheck}:checked + ${mintyScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`:not(${mintyScope}${btnCheck}) + ${mintyScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn:first-child:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${mintyScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${mintyScope}${btn}${btnActiveHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${mintyScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn-check:checked + .btn:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${mintyScope}${btnCheck}:checked + ${mintyScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`:not(${mintyScope}${btnCheck}) + ${mintyScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:first-child:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${mintyScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${mintyScope}${btn}.active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.show:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${mintyScope}${btn}${btnShowHook}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${mintyScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// .btn.disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${mintyScope}${btn}.disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// fieldset:disabled .btn { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
// [UNMAPPED_SELECTOR] element selector "fieldset:disabled" — map to a contract class
globalStyle(`fieldset:disabled ${mintyScope}${btn}`, {
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
globalStyle(`${mintyScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#dc3545",
		[varBsBtnBorderColor]: "#dc3545",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#bb2d3b",
		[varBsBtnHoverBorderColor]: "#b02a37",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#b02a37",
		[varBsBtnActiveBorderColor]: "#a52834",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#dc3545",
		[varBsBtnDisabledBorderColor]: "#dc3545",
	},
})

// SOURCE CSS:
// .btn-lg { --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
globalStyle(`${mintyScope}${btnLg}`, {
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
globalStyle(`.btn-group-lg > ${mintyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: "0.5rem",
		[varBsBtnPaddingX]: "1rem",
		[varBsBtnFontSize]: "1.25rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${mintyScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${mintyScope}${fade}:not(.show)`, {
	opacity: 0,
})

// SOURCE CSS:
// .popover { --bs-popover-zindex: 1070; --bs-popover-max-width: 276px; --bs-popover-font-size: 0.875rem; --bs-popover-bg: var(--bs-body-bg); --bs-popover-border-width: var(--bs-border-width); --bs-popover-border-color: var(--bs-border-color-translucent); --bs-popover-border-radius: var(--bs-border-radius-lg); --bs-popover-inner-border-radius: calc(var(--bs-border-radius-lg) - var(--bs-border-width)); --bs-popover-box-shadow: var(--bs-box-shadow); --bs-popover-header-padding-x: 1rem; --bs-popover-header-padding-y: 0.5rem; --bs-popover-header-font-size: 1rem; --bs-popover-header-color: inherit; --bs-popover-header-bg: var(--bs-secondary-bg); --bs-popover-body-padding-x: 1rem; --bs-popover-body-padding-y: 1rem; --bs-popover-body-color: var(--bs-body-color); --bs-popover-arrow-width: 1rem; --bs-popover-arrow-height: 0.5rem; --bs-popover-arrow-border: var(--bs-popover-border-color); z-index: var(--bs-popover-zindex); display: block; max-width: var(--bs-popover-max-width); font-family: var(--bs-font-sans-serif); font-style: normal; font-weight: 400; line-height: 1.5; text-align: start; text-decoration: none; text-shadow: none; text-transform: none; letter-spacing: normal; word-break: normal; white-space: normal; word-spacing: normal; line-break: auto; font-size: var(--bs-popover-font-size); word-wrap: break-word; background-color: var(--bs-popover-bg); background-clip: padding-box; border: var(--bs-popover-border-width) solid var(--bs-popover-border-color); border-radius: var(--bs-popover-border-radius); }
// [UNMAPPED_SELECTOR] class ".popover" — no contract mapping
globalStyle(`.popover`, {
	vars: {
		[varBsPopoverZindex]: 1070,
		[varBsPopoverMaxWidth]: "276px",
		[varBsPopoverFontSize]: "0.875rem",
		[varBsPopoverBg]: varBsBodyBg,
		[varBsPopoverBorderWidth]: varBsBorderWidth,
		[varBsPopoverBorderColor]: varBsBorderColorTranslucent,
		[varBsPopoverBorderRadius]: varBsBorderRadiusLg,
		[varBsPopoverInnerBorderRadius]: "calc(var(--bs-border-radius-lg) - var(--bs-border-width))",
		[varBsPopoverBoxShadow]: varBsBoxShadow,
		[varBsPopoverHeaderPaddingX]: "1rem",
		[varBsPopoverHeaderPaddingY]: "0.5rem",
		[varBsPopoverHeaderFontSize]: "1rem",
		[varBsPopoverHeaderColor]: "#5a5a5a",
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
	border: "var(--bs-popover-border-width) solid var(--bs-popover-border-color)",
	borderRadius: varBsPopoverBorderRadius,
})

// SOURCE CSS:
// .popover .popover-arrow { display: block; width: var(--bs-popover-arrow-width); height: var(--bs-popover-arrow-height); }
// [UNMAPPED_SELECTOR] class ".popover" — no contract mapping
globalStyle(`.popover ${mintyScope}${popoverArrow}`, {
	display: "block",
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

// SOURCE CSS:
// .popover .popover-arrow::before { position: absolute; display: block; content: ""; border-color: transparent; border-style: solid; border-width: 0; }
// [UNMAPPED_SELECTOR] class ".popover" — no contract mapping
globalStyle(`.popover ${mintyScope}${popoverArrow}::before`, {
	position: "absolute",
	display: "block",
	content: "\"\"",
	borderColor: "transparent",
	borderStyle: "solid",
	borderWidth: 0,
})

// SOURCE CSS:
// .popover .popover-arrow::after { position: absolute; display: block; content: ""; border-color: transparent; border-style: solid; border-width: 0; }
// [UNMAPPED_SELECTOR] class ".popover" — no contract mapping
globalStyle(`.popover ${mintyScope}${popoverArrow}::after`, {
	position: "absolute",
	display: "block",
	content: "\"\"",
	borderColor: "transparent",
	borderStyle: "solid",
	borderWidth: 0,
})

// SOURCE CSS:
// .bs-popover-end > .popover-arrow { left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); width: var(--bs-popover-arrow-height); height: var(--bs-popover-arrow-width); }
globalStyle(`${mintyScope}${bsPopoverEnd} > ${mintyScope}${popoverArrow}`, {
	left: "calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))",
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow { left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); width: var(--bs-popover-arrow-height); height: var(--bs-popover-arrow-width); }
globalStyle(`${mintyScope}${bsPopoverAuto}[data-popper-placement^="right"] > ${mintyScope}${popoverArrow}`, {
	left: "calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))",
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

// SOURCE CSS:
// .bs-popover-end > .popover-arrow::before { border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; left: 0px; border-right-color: var(--bs-popover-arrow-border); }
globalStyle(`${mintyScope}${bsPopoverEnd} > ${mintyScope}${popoverArrow}::before`, {
	borderWidth: "calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0",
	left: "0px",
	borderRightColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::before { border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; left: 0px; border-right-color: var(--bs-popover-arrow-border); }
globalStyle(`${mintyScope}${bsPopoverAuto}[data-popper-placement^="right"] > ${mintyScope}${popoverArrow}::before`, {
	borderWidth: "calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0",
	left: "0px",
	borderRightColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-end > .popover-arrow::after { border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; left: var(--bs-popover-border-width); border-right-color: var(--bs-popover-bg); }
globalStyle(`${mintyScope}${bsPopoverEnd} > ${mintyScope}${popoverArrow}::after`, {
	borderWidth: "calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0",
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::after { border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; left: var(--bs-popover-border-width); border-right-color: var(--bs-popover-bg); }
globalStyle(`${mintyScope}${bsPopoverAuto}[data-popper-placement^="right"] > ${mintyScope}${popoverArrow}::after`, {
	borderWidth: "calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0",
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

// SOURCE CSS:
// .popover-header { padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x); margin-bottom: 0; font-size: var(--bs-popover-header-font-size); color: var(--bs-popover-header-color); background-color: var(--bs-popover-header-bg); border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color); border-top-left-radius: var(--bs-popover-inner-border-radius); border-top-right-radius: var(--bs-popover-inner-border-radius); }
globalStyle(`${mintyScope}${popoverHeader}`, {
	padding: "var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x)",
	marginBottom: 0,
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: "var(--bs-popover-border-width) solid var(--bs-popover-border-color)",
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

// SOURCE CSS:
// .popover-header:empty { display: none; }
globalStyle(`${mintyScope}${popoverHeader}:empty`, {
	display: "none",
})

// SOURCE CSS:
// .popover-body { padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x); color: var(--bs-popover-body-color); }
globalStyle(`${mintyScope}${popoverBody}`, {
	padding: "var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x)",
	color: varBsPopoverBodyColor,
})

// SOURCE CSS:
// .btn-secondary { --bs-btn-color: #fff; --bs-btn-bg: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #5c636a; --bs-btn-hover-border-color: #565e64; --bs-btn-focus-shadow-rgb: 130, 138, 145; --bs-btn-active-color: #fff; --bs-btn-active-bg: #565e64; --bs-btn-active-border-color: #51585e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #6c757d; --bs-btn-disabled-border-color: #6c757d; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${mintyScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#6c757d",
		[varBsBtnBorderColor]: "#6c757d",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#5c636a",
		[varBsBtnHoverBorderColor]: "#565e64",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#565e64",
		[varBsBtnActiveBorderColor]: "#51585e",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#6c757d",
		[varBsBtnDisabledBorderColor]: "#6c757d",
	},
})

// SOURCE CSS:
// .bs-popover-bottom > .popover-arrow { top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); }
globalStyle(`${mintyScope}${bsPopoverBottom} > ${mintyScope}${popoverArrow}`, {
	top: "calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))",
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow { top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); }
globalStyle(`${mintyScope}${bsPopoverAuto}[data-popper-placement^="bottom"] > ${mintyScope}${popoverArrow}`, {
	top: "calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))",
})

// SOURCE CSS:
// .bs-popover-bottom > .popover-arrow::before { border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height); top: 0px; border-bottom-color: var(--bs-popover-arrow-border); }
globalStyle(`${mintyScope}${bsPopoverBottom} > ${mintyScope}${popoverArrow}::before`, {
	borderWidth: "0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height)",
	top: "0px",
	borderBottomColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::before { border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height); top: 0px; border-bottom-color: var(--bs-popover-arrow-border); }
globalStyle(`${mintyScope}${bsPopoverAuto}[data-popper-placement^="bottom"] > ${mintyScope}${popoverArrow}::before`, {
	borderWidth: "0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height)",
	top: "0px",
	borderBottomColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-bottom > .popover-arrow::after { border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height); top: var(--bs-popover-border-width); border-bottom-color: var(--bs-popover-bg); }
globalStyle(`${mintyScope}${bsPopoverBottom} > ${mintyScope}${popoverArrow}::after`, {
	borderWidth: "0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height)",
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::after { border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height); top: var(--bs-popover-border-width); border-bottom-color: var(--bs-popover-bg); }
globalStyle(`${mintyScope}${bsPopoverAuto}[data-popper-placement^="bottom"] > ${mintyScope}${popoverArrow}::after`, {
	borderWidth: "0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height)",
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${mintyScope}${dFlex}`, {
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
// .bs-popover-top > .popover-arrow { bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); }
globalStyle(`${mintyScope}${bsPopoverTop} > ${mintyScope}${popoverArrow}`, {
	bottom: "calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))",
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow { bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width)); }
globalStyle(`${mintyScope}${bsPopoverAuto}[data-popper-placement^="top"] > ${mintyScope}${popoverArrow}`, {
	bottom: "calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))",
})

// SOURCE CSS:
// .bs-popover-top > .popover-arrow::before { border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; bottom: 0px; border-top-color: var(--bs-popover-arrow-border); }
globalStyle(`${mintyScope}${bsPopoverTop} > ${mintyScope}${popoverArrow}::before`, {
	borderWidth: "var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0",
	bottom: "0px",
	borderTopColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::before { border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; bottom: 0px; border-top-color: var(--bs-popover-arrow-border); }
globalStyle(`${mintyScope}${bsPopoverAuto}[data-popper-placement^="top"] > ${mintyScope}${popoverArrow}::before`, {
	borderWidth: "var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0",
	bottom: "0px",
	borderTopColor: varBsPopoverArrowBorder,
})

// SOURCE CSS:
// .bs-popover-top > .popover-arrow::after { border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; bottom: var(--bs-popover-border-width); border-top-color: var(--bs-popover-bg); }
globalStyle(`${mintyScope}${bsPopoverTop} > ${mintyScope}${popoverArrow}::after`, {
	borderWidth: "var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0",
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

// SOURCE CSS:
// .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::after { border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0; bottom: var(--bs-popover-border-width); border-top-color: var(--bs-popover-bg); }
globalStyle(`${mintyScope}${bsPopoverAuto}[data-popper-placement^="top"] > ${mintyScope}${popoverArrow}::after`, {
	borderWidth: "var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0",
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

// SOURCE CSS:
// .flex-row { flex-direction: row !important; }
// [UNMAPPED_SELECTOR] class ".flex-row" — no contract mapping
globalStyle(`.flex-row`, {
	flexDirection: "row !important",
})

// SOURCE CSS:
// .justify-content-end { justify-content: flex-end !important; }
// [UNMAPPED_SELECTOR] class ".justify-content-end" — no contract mapping
globalStyle(`.justify-content-end`, {
	justifyContent: "flex-end !important",
})
