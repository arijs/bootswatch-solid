import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsBtnCloseFilter,
	varBsGradient,
	varBsLinkColor,
	varBsLinkHoverColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBtnCloseBg,
	varBsBtnCloseColor,
	varBsBtnCloseDisabledOpacity,
	varBsBtnCloseFocusOpacity,
	varBsBtnCloseFocusShadow,
	varBsBtnCloseHoverOpacity,
	varBsBtnCloseOpacity,
} from '../../../../theme-contract/ui/alerts/_vars.css'
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
	fieldset,
	inputGroup,
} from '../../../../theme-contract/forms/contract.css'
import {
	alertBtnClose,
	alertBtnCloseDisabledHook,
} from '../../../../theme-contract/ui/alerts/contract.css'
import {
	badge,
} from '../../../../theme-contract/ui/badge/contract.css'
import {
	btnGroup,
	btnToolbar,
} from '../../../../theme-contract/ui/button-group/contract.css'
import {
	btn,
	btnActiveHook,
	btnCheck,
	btnDanger,
	btnDark,
	btnDisabledHook,
	btnInfo,
	btnLg,
	btnLight,
	btnLink,
	btnOutlineDanger,
	btnOutlineDark,
	btnOutlineInfo,
	btnOutlineLight,
	btnOutlinePrimary,
	btnOutlineSecondary,
	btnOutlineSuccess,
	btnOutlineWarning,
	btnPrimary,
	btnSecondary,
	btnSm,
	btnSuccess,
	btnWarning,
	inputFontFamily,
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
	dropdownToggle,
	dropdownToggleSplit,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/buttons
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// button { border-radius: 0; margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; appearance: button; }
globalStyle(`${cyborgScope}${inputFontFamily}`, {
	borderRadius: 0,
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
	appearance: "button",
	WebkitAppearance: "button",
})

// SOURCE CSS:
// button:focus:not(:focus-visible) { outline: 0; }
globalStyle(`${cyborgScope}${inputFontFamily}:focus:not(:focus-visible)`, {
	outline: 0,
})

// SOURCE CSS:
// input { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
globalStyle(`${cyborgScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// select { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; }
globalStyle(`${cyborgScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
})

// SOURCE CSS:
// optgroup { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
globalStyle(`${cyborgScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
globalStyle(`${cyborgScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// button:not(:disabled) { cursor: pointer; }
globalStyle(`${cyborgScope}${inputFontFamily}:not(:disabled)`, {
	cursor: "pointer",
})

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
// .btn-group { position: relative; display: inline-flex; vertical-align: middle; border-radius: var(--bs-border-radius); }
globalStyle(`${cyborgScope}${btnGroup}`, {
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
	borderRadius: varBsBorderRadius,
})

// SOURCE CSS:
// .btn-group > .btn { position: relative; flex: 1 1 auto; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
})

// SOURCE CSS:
// .btn-group-vertical > .btn { position: relative; flex: 1 1 auto; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "100%",
})

// SOURCE CSS:
// .btn-group > .btn-check:checked + .btn { z-index: 1; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btnCheck}:checked + ${cyborgScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn-check:focus + .btn { z-index: 1; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btnCheck}:focus + ${cyborgScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:hover { z-index: 1; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:focus { z-index: 1; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:active { z-index: 1; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn.active { z-index: 1; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:checked + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btnCheck}:checked + ${cyborgScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:focus + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btnCheck}:focus + ${cyborgScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:hover { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:focus { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn.active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
globalStyle(`${cyborgScope}${btnToolbar}`, {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "flex-start",
})

// SOURCE CSS:
// .btn-group > :not(.btn-check:first-child) + .btn { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${cyborgScope}${btnGroup} > :not(${cyborgScope}${btnCheck}:first-child) + ${cyborgScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

// SOURCE CSS:
// .btn-group > .btn:not(:last-child):not(.dropdown-toggle) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:not(:last-child):not(${cyborgScope}${dropdownToggle})`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn.dropdown-toggle-split:first-child { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:last-child) > .btn { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btnGroup}:not(:last-child) > ${cyborgScope}${btn}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn:nth-child(n+3) { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-group > :not(.btn-check) + .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${cyborgScope}${btnGroup} > :not(${cyborgScope}${btnCheck}) + ${cyborgScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) > .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btnGroup}:not(:first-child) > ${cyborgScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-outline-danger { --bs-btn-color: #dc3545; --bs-btn-border-color: #dc3545; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #dc3545; --bs-btn-hover-border-color: #dc3545; --bs-btn-focus-shadow-rgb: 220, 53, 69; --bs-btn-active-color: #fff; --bs-btn-active-bg: #dc3545; --bs-btn-active-border-color: #dc3545; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #dc3545; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #dc3545; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: "#c00",
		[varBsBtnBorderColor]: "#c00",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#c00",
		[varBsBtnHoverBorderColor]: "#c00",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#c00",
		[varBsBtnActiveBorderColor]: "#c00",
		[varBsBtnDisabledColor]: "#c00",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#c00",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-dark { --bs-btn-color: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #212529; --bs-btn-hover-border-color: #212529; --bs-btn-focus-shadow-rgb: 33, 37, 41; --bs-btn-active-color: #fff; --bs-btn-active-bg: #212529; --bs-btn-active-border-color: #212529; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #212529; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #212529; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: "#adafae",
		[varBsBtnBorderColor]: "#adafae",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#adafae",
		[varBsBtnHoverBorderColor]: "#adafae",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#adafae",
		[varBsBtnActiveBorderColor]: "#adafae",
		[varBsBtnDisabledColor]: "#adafae",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#adafae",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-info { --bs-btn-color: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #0dcaf0; --bs-btn-hover-border-color: #0dcaf0; --bs-btn-focus-shadow-rgb: 13, 202, 240; --bs-btn-active-color: #000; --bs-btn-active-bg: #0dcaf0; --bs-btn-active-border-color: #0dcaf0; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0dcaf0; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0dcaf0; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: "#93c",
		[varBsBtnBorderColor]: "#93c",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#93c",
		[varBsBtnHoverBorderColor]: "#93c",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#93c",
		[varBsBtnActiveBorderColor]: "#93c",
		[varBsBtnDisabledColor]: "#93c",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#93c",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-light { --bs-btn-color: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #f8f9fa; --bs-btn-hover-border-color: #f8f9fa; --bs-btn-focus-shadow-rgb: 248, 249, 250; --bs-btn-active-color: #000; --bs-btn-active-bg: #f8f9fa; --bs-btn-active-border-color: #f8f9fa; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #f8f9fa; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #f8f9fa; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: "#222",
		[varBsBtnBorderColor]: "#222",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#222",
		[varBsBtnHoverBorderColor]: "#222",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#222",
		[varBsBtnActiveBorderColor]: "#222",
		[varBsBtnDisabledColor]: "#222",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#222",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-primary { --bs-btn-color: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0d6efd; --bs-btn-hover-border-color: #0d6efd; --bs-btn-focus-shadow-rgb: 13, 110, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0d6efd; --bs-btn-active-border-color: #0d6efd; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0d6efd; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0d6efd; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: "#2a9fd6",
		[varBsBtnBorderColor]: "#2a9fd6",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#2a9fd6",
		[varBsBtnHoverBorderColor]: "#2a9fd6",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#2a9fd6",
		[varBsBtnActiveBorderColor]: "#2a9fd6",
		[varBsBtnDisabledColor]: "#2a9fd6",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#2a9fd6",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-secondary { --bs-btn-color: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #6c757d; --bs-btn-hover-border-color: #6c757d; --bs-btn-focus-shadow-rgb: 108, 117, 125; --bs-btn-active-color: #fff; --bs-btn-active-bg: #6c757d; --bs-btn-active-border-color: #6c757d; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #6c757d; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: "#555",
		[varBsBtnBorderColor]: "#555",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#555",
		[varBsBtnHoverBorderColor]: "#555",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#555",
		[varBsBtnActiveBorderColor]: "#555",
		[varBsBtnDisabledColor]: "#555",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#555",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-success { --bs-btn-color: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #198754; --bs-btn-hover-border-color: #198754; --bs-btn-focus-shadow-rgb: 25, 135, 84; --bs-btn-active-color: #fff; --bs-btn-active-bg: #198754; --bs-btn-active-border-color: #198754; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #198754; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #198754; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: "#77b300",
		[varBsBtnBorderColor]: "#77b300",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#77b300",
		[varBsBtnHoverBorderColor]: "#77b300",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#77b300",
		[varBsBtnActiveBorderColor]: "#77b300",
		[varBsBtnDisabledColor]: "#77b300",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#77b300",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-warning { --bs-btn-color: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffc107; --bs-btn-hover-border-color: #ffc107; --bs-btn-focus-shadow-rgb: 255, 193, 7; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffc107; --bs-btn-active-border-color: #ffc107; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #ffc107; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #ffc107; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: "#f80",
		[varBsBtnBorderColor]: "#f80",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#f80",
		[varBsBtnHoverBorderColor]: "#f80",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#f80",
		[varBsBtnActiveBorderColor]: "#f80",
		[varBsBtnDisabledColor]: "#f80",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#f80",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-check { position: absolute; clip: rect(0, 0, 0, 0); pointer-events: none; }
globalStyle(`${cyborgScope}${btnCheck}`, {
	position: "absolute",
	clip: "rect(0, 0, 0, 0)",
	pointerEvents: "none",
})

// SOURCE CSS:
// .btn-check[disabled] + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${cyborgScope}${btnCheck}[disabled] + ${cyborgScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check:disabled + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${cyborgScope}${btnCheck}:disabled + ${cyborgScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check + .btn:hover { color: var(--bs-btn-color); background-color: var(--bs-btn-bg); border-color: var(--bs-btn-border-color); }
globalStyle(`${cyborgScope}${btnCheck} + ${cyborgScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

// SOURCE CSS:
// .btn-check:focus-visible + .btn { border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cyborgScope}${btnCheck}:focus-visible + ${cyborgScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked:focus-visible + .btn { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cyborgScope}${btnCheck}:checked:focus-visible + ${cyborgScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0b5ed7; --bs-btn-hover-border-color: #0a58ca; --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#2a9fd6",
		[varBsBtnBorderColor]: "#2a9fd6",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#2487b6",
		[varBsBtnHoverBorderColor]: "#227fab",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#227fab",
		[varBsBtnActiveBorderColor]: "#2077a1",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#2a9fd6",
		[varBsBtnDisabledBorderColor]: "#2a9fd6",
	},
	backgroundColor: "#2a9fd6",
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
// .btn-sm { --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
globalStyle(`${cyborgScope}${btn}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: "0.25rem",
		[varBsBtnPaddingX]: "0.5rem",
		[varBsBtnFontSize]: "0.875rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

// SOURCE CSS:
// .btn-group-sm > .btn { --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
// [UNMAPPED_SELECTOR] class ".btn-group-sm" — no contract mapping
globalStyle(`.btn-group-sm > ${cyborgScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: "0.25rem",
		[varBsBtnPaddingX]: "0.5rem",
		[varBsBtnFontSize]: "0.875rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
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
// .btn-dark { --bs-btn-color: #fff; --bs-btn-bg: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #424649; --bs-btn-hover-border-color: #373b3e; --bs-btn-focus-shadow-rgb: 66, 70, 73; --bs-btn-active-color: #fff; --bs-btn-active-bg: #4d5154; --bs-btn-active-border-color: #373b3e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #212529; --bs-btn-disabled-border-color: #212529; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnDark}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#adafae",
		[varBsBtnBorderColor]: "#adafae",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#b9bbba",
		[varBsBtnHoverBorderColor]: "#b5b7b6",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#bdbfbe",
		[varBsBtnActiveBorderColor]: "#b5b7b6",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#adafae",
		[varBsBtnDisabledBorderColor]: "#adafae",
	},
	backgroundColor: "#adafae",
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-info { --bs-btn-color: #000; --bs-btn-bg: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #31d2f2; --bs-btn-hover-border-color: #25cff2; --bs-btn-focus-shadow-rgb: 11, 172, 204; --bs-btn-active-color: #000; --bs-btn-active-bg: #3dd5f3; --bs-btn-active-border-color: #25cff2; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #0dcaf0; --bs-btn-disabled-border-color: #0dcaf0; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#93c",
		[varBsBtnBorderColor]: "#93c",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#822bad",
		[varBsBtnHoverBorderColor]: "#7a29a3",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#7a29a3",
		[varBsBtnActiveBorderColor]: "#732699",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#93c",
		[varBsBtnDisabledBorderColor]: "#93c",
	},
	backgroundColor: "#93c",
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-light { --bs-btn-color: #000; --bs-btn-bg: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #d3d4d5; --bs-btn-hover-border-color: #c6c7c8; --bs-btn-focus-shadow-rgb: 211, 212, 213; --bs-btn-active-color: #000; --bs-btn-active-bg: #c6c7c8; --bs-btn-active-border-color: #babbbc; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #f8f9fa; --bs-btn-disabled-border-color: #f8f9fa; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnLight}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#222",
		[varBsBtnBorderColor]: "#222",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#1d1d1d",
		[varBsBtnHoverBorderColor]: "#1b1b1b",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#1b1b1b",
		[varBsBtnActiveBorderColor]: "#1a1a1a",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#222",
		[varBsBtnDisabledBorderColor]: "#222",
	},
	backgroundColor: "#222",
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-link { --bs-btn-font-weight: 400; --bs-btn-color: var(--bs-link-color); --bs-btn-bg: transparent; --bs-btn-border-color: transparent; --bs-btn-hover-color: var(--bs-link-hover-color); --bs-btn-hover-border-color: transparent; --bs-btn-active-color: var(--bs-link-hover-color); --bs-btn-active-border-color: transparent; --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-border-color: transparent; --bs-btn-box-shadow: 0 0 0 #000; --bs-btn-focus-shadow-rgb: 49, 132, 253; text-decoration: underline; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
globalStyle(`${cyborgScope}${btn}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: 400,
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: "transparent",
		[varBsBtnBorderColor]: "transparent",
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: "transparent",
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: "transparent",
		[varBsBtnDisabledColor]: "#555",
		[varBsBtnDisabledBorderColor]: "transparent",
		[varBsBtnBoxShadow]: "0 0 0 #000",
	},
	textDecoration: "underline",
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-link:focus-visible { color: var(--bs-btn-color); }
globalStyle(`${cyborgScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-link:hover { color: var(--bs-btn-hover-color); }
globalStyle(`${cyborgScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

// SOURCE CSS:
// .btn-success { --bs-btn-color: #fff; --bs-btn-bg: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #157347; --bs-btn-hover-border-color: #146c43; --bs-btn-focus-shadow-rgb: 60, 153, 110; --bs-btn-active-color: #fff; --bs-btn-active-bg: #146c43; --bs-btn-active-border-color: #13653f; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #198754; --bs-btn-disabled-border-color: #198754; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#77b300",
		[varBsBtnBorderColor]: "#77b300",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#659800",
		[varBsBtnHoverBorderColor]: "#5f8f00",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#5f8f00",
		[varBsBtnActiveBorderColor]: "#598600",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#77b300",
		[varBsBtnDisabledBorderColor]: "#77b300",
	},
	backgroundColor: "#77b300",
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-warning { --bs-btn-color: #000; --bs-btn-bg: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffca2c; --bs-btn-hover-border-color: #ffc720; --bs-btn-focus-shadow-rgb: 217, 164, 6; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffcd39; --bs-btn-active-border-color: #ffc720; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #ffc107; --bs-btn-disabled-border-color: #ffc107; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cyborgScope}${btn}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#f80",
		[varBsBtnBorderColor]: "#f80",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#d97400",
		[varBsBtnHoverBorderColor]: "#cc6d00",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#cc6d00",
		[varBsBtnActiveBorderColor]: "#bf6600",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#f80",
		[varBsBtnDisabledBorderColor]: "#f80",
	},
	backgroundColor: "#f80",
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-close { --bs-btn-close-color: #000; --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e"); --bs-btn-close-opacity: 0.5; --bs-btn-close-hover-opacity: 0.75; --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-btn-close-focus-opacity: 1; --bs-btn-close-disabled-opacity: 0.25; box-sizing: content-box; width: 1em; height: 1em; padding: 0.25em 0.25em; color: var(--bs-btn-close-color); background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat; filter: var(--bs-btn-close-filter); border: 0; border-radius: 0.375rem; opacity: var(--bs-btn-close-opacity); }
globalStyle(`${cyborgScope}${alertBtnClose}`, {
	vars: {
		[varBsBtnCloseColor]: "#fff",
		[varBsBtnCloseBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e\")",
		[varBsBtnCloseOpacity]: 0.5,
		[varBsBtnCloseHoverOpacity]: 0.75,
		[varBsBtnCloseFocusShadow]: "0 0 0 0.25rem rgba(42, 159, 214, 0.25)",
		[varBsBtnCloseFocusOpacity]: 1,
		[varBsBtnCloseDisabledOpacity]: 0.25,
	},
	boxSizing: "content-box",
	width: "1em",
	height: "1em",
	padding: "0.25em 0.25em",
	color: varBsBtnCloseColor,
	background: `transparent ${varBsBtnCloseBg} center/1em auto no-repeat`,
	filter: varBsBtnCloseFilter,
	border: 0,
	borderRadius: "0.375rem",
	opacity: varBsBtnCloseOpacity,
})

// SOURCE CSS:
// .btn-close:hover { color: var(--bs-btn-close-color); text-decoration: none; opacity: var(--bs-btn-close-hover-opacity); }
globalStyle(`${cyborgScope}${alertBtnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: "none",
	opacity: varBsBtnCloseHoverOpacity,
})

// SOURCE CSS:
// .btn-close:focus { outline: 0; box-shadow: var(--bs-btn-close-focus-shadow); opacity: var(--bs-btn-close-focus-opacity); }
globalStyle(`${cyborgScope}${alertBtnClose}:focus`, {
	outline: 0,
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

// SOURCE CSS:
// .btn-close:disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${cyborgScope}${alertBtnClose}:disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .btn-close.disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${cyborgScope}${alertBtnClose}${alertBtnCloseDisabledHook}`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .btn-toolbar .input-group { width: auto; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${btnToolbar} ${cyborgScope}${inputGroup}`, {
	width: "auto",
})
// SOURCE CSS:
// .btn-sm + .dropdown-toggle-split { padding-right: 0.375rem; padding-left: 0.375rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${btnSm} + ${cyborgScope}${dropdownToggleSplit}`, {
	paddingRight: "0.375rem",
	paddingLeft: "0.375rem",
})
// SOURCE CSS:
// .btn-group-sm > .btn + .dropdown-toggle-split { padding-right: 0.375rem; padding-left: 0.375rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-sm" — no contract mapping
globalStyle(`.btn-group-sm > ${cyborgScope}${btn} + ${cyborgScope}${dropdownToggleSplit}`, {
	paddingRight: "0.375rem",
	paddingLeft: "0.375rem",
})
// SOURCE CSS:
// .btn-lg + .dropdown-toggle-split { padding-right: 0.75rem; padding-left: 0.75rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${btnLg} + ${cyborgScope}${dropdownToggleSplit}`, {
	paddingRight: "0.75rem",
	paddingLeft: "0.75rem",
})
// SOURCE CSS:
// .btn-group-lg > .btn + .dropdown-toggle-split { padding-right: 0.75rem; padding-left: 0.75rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-lg" — no contract mapping
globalStyle(`.btn-group-lg > ${cyborgScope}${btn} + ${cyborgScope}${dropdownToggleSplit}`, {
	paddingRight: "0.75rem",
	paddingLeft: "0.75rem",
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group { width: 100%; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btnGroup}`, {
	width: "100%",
})
// SOURCE CSS:
// .btn-group-vertical > .btn:not(:first-child) { margin-top: calc(-1 * var(--bs-border-width)); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group:not(:first-child) { margin-top: calc(-1 * var(--bs-border-width)); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
// SOURCE CSS:
// .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) { border-bottom-right-radius: 0; border-bottom-left-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btn}:not(:last-child):not(${cyborgScope}${dropdownToggle})`, {
	borderBottomRightRadius: 0,
	borderBottomLeftRadius: 0,
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group:not(:last-child) > .btn { border-bottom-right-radius: 0; border-bottom-left-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btnGroup}:not(:last-child) > ${cyborgScope}${btn}`, {
	borderBottomRightRadius: 0,
	borderBottomLeftRadius: 0,
})
// SOURCE CSS:
// .btn-group-vertical > .btn:nth-child(n+3) { border-top-left-radius: 0; border-top-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
})
// SOURCE CSS:
// .btn-group-vertical > :not(.btn-check) + .btn { border-top-left-radius: 0; border-top-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > :not(${cyborgScope}${btnCheck}) + ${cyborgScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group:not(:first-child) > .btn { border-top-left-radius: 0; border-top-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cyborgScope}${btnGroup}:not(:first-child) > ${cyborgScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
})
// SOURCE CSS:
// .btn .badge { position: relative; top: -1px; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${btn} ${cyborgScope}${badge}`, {
	position: "relative",
	top: "-1px",
})

// ── Theme paint footers (cascade after variant blocks) ─────────────────────────
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${btn}`, {
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${btn}:hover`, {
	borderColor: varBsBtnHoverBorderColor,
})
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${btn}${btnDisabledHook}`, {
	borderColor: varBsBtnDisabledBorderColor,
})
