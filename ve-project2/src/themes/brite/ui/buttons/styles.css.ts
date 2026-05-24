import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderColor,
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
	link,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	fieldset,
} from '../../../../theme-contract/forms/contract.css'
import {
	alertBtnClose,
} from '../../../../theme-contract/ui/alerts/contract.css'
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
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
	dropdown,
	dropdownToggle,
	dropdownToggleSplit,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import { briteScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/buttons
// Review [UNMAPPED] and [DELTA] comments before committing.

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
	color: "#000",
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
})

// SOURCE CSS:
// .btn-group { position: relative; display: inline-flex; vertical-align: middle; border-radius: var(--bs-border-radius); }
globalStyle(`${briteScope}${btnGroup}`, {
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
	borderRadius: varBsBorderRadius,
})

// SOURCE CSS:
// .btn-group-vertical { position: relative; display: inline-flex; vertical-align: middle; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical`, {
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
})

// SOURCE CSS:
// .btn-group > .btn { position: relative; flex: 1 1 auto; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
})

// SOURCE CSS:
// .btn-group-vertical > .btn { position: relative; flex: 1 1 auto; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${briteScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
})

// SOURCE CSS:
// .btn-group > .btn-check:checked + .btn { z-index: 1; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn-check:focus + .btn { z-index: 1; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnCheck}:focus + ${briteScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:hover { z-index: 1; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:focus { z-index: 1; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:active { z-index: 1; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn.active { z-index: 1; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:checked + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:focus + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${briteScope}${btnCheck}:focus + ${briteScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:hover { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${briteScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:focus { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${briteScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${briteScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn.active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${briteScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
globalStyle(`${briteScope}${btnToolbar}`, {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "flex-start",
})

// SOURCE CSS:
// .btn-group > :not(.btn-check:first-child) + .btn { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${briteScope}${btnGroup} > :not(${briteScope}${btnCheck}:first-child) + ${briteScope}${btn}`, {
	marginLeft: `calc(-1 * 2px)`,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * 2px)`,
})

// SOURCE CSS:
// .btn-group > .btn:not(:last-child):not(.dropdown-toggle) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:not(:last-child):not(${briteScope}${dropdownToggle})`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn.dropdown-toggle-split:first-child { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:last-child) > .btn { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnGroup}:not(:last-child) > ${briteScope}${btn}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn:nth-child(n+3) { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-group > :not(.btn-check) + .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${briteScope}${btnGroup} > :not(${briteScope}${btnCheck}) + ${briteScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) > .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnGroup}:not(:first-child) > ${briteScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
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
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .btn-outline-danger { --bs-btn-color: #dc3545; --bs-btn-border-color: #dc3545; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #dc3545; --bs-btn-hover-border-color: #dc3545; --bs-btn-focus-shadow-rgb: 220, 53, 69; --bs-btn-active-color: #fff; --bs-btn-active-bg: #dc3545; --bs-btn-active-border-color: #dc3545; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #dc3545; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #dc3545; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: "#f56565",
		[varBsBtnBorderColor]: "#f56565",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#f56565",
		[varBsBtnHoverBorderColor]: "#f56565",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#f56565",
		[varBsBtnActiveBorderColor]: "#f56565",
		[varBsBtnDisabledColor]: "#f56565",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#f56565",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-dark { --bs-btn-color: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #212529; --bs-btn-hover-border-color: #212529; --bs-btn-focus-shadow-rgb: 33, 37, 41; --bs-btn-active-color: #fff; --bs-btn-active-bg: #212529; --bs-btn-active-border-color: #212529; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #212529; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #212529; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBorderColor]: "#000",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#000",
		[varBsBtnHoverBorderColor]: "#000",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#000",
		[varBsBtnActiveBorderColor]: "#000",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#000",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-info { --bs-btn-color: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #0dcaf0; --bs-btn-hover-border-color: #0dcaf0; --bs-btn-focus-shadow-rgb: 13, 202, 240; --bs-btn-active-color: #000; --bs-btn-active-bg: #0dcaf0; --bs-btn-active-border-color: #0dcaf0; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0dcaf0; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0dcaf0; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: "#22d2ed",
		[varBsBtnBorderColor]: "#22d2ed",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#22d2ed",
		[varBsBtnHoverBorderColor]: "#22d2ed",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#22d2ed",
		[varBsBtnActiveBorderColor]: "#22d2ed",
		[varBsBtnDisabledColor]: "#22d2ed",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#22d2ed",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-light { --bs-btn-color: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #f8f9fa; --bs-btn-hover-border-color: #f8f9fa; --bs-btn-focus-shadow-rgb: 248, 249, 250; --bs-btn-active-color: #000; --bs-btn-active-bg: #f8f9fa; --bs-btn-active-border-color: #f8f9fa; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #f8f9fa; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #f8f9fa; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: "#e9ecef",
		[varBsBtnBorderColor]: "#e9ecef",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#e9ecef",
		[varBsBtnHoverBorderColor]: "#e9ecef",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#e9ecef",
		[varBsBtnActiveBorderColor]: "#e9ecef",
		[varBsBtnDisabledColor]: "#e9ecef",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#e9ecef",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-primary { --bs-btn-color: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0d6efd; --bs-btn-hover-border-color: #0d6efd; --bs-btn-focus-shadow-rgb: 13, 110, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0d6efd; --bs-btn-active-border-color: #0d6efd; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0d6efd; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0d6efd; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: "#a2e436",
		[varBsBtnBorderColor]: "#a2e436",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#a2e436",
		[varBsBtnHoverBorderColor]: "#a2e436",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#a2e436",
		[varBsBtnActiveBorderColor]: "#a2e436",
		[varBsBtnDisabledColor]: "#a2e436",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#a2e436",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-secondary { --bs-btn-color: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #6c757d; --bs-btn-hover-border-color: #6c757d; --bs-btn-focus-shadow-rgb: 108, 117, 125; --bs-btn-active-color: #fff; --bs-btn-active-bg: #6c757d; --bs-btn-active-border-color: #6c757d; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #6c757d; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBorderColor]: "#fff",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#fff",
		[varBsBtnHoverBorderColor]: "#fff",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#fff",
		[varBsBtnActiveBorderColor]: "#fff",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#fff",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-success { --bs-btn-color: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #198754; --bs-btn-hover-border-color: #198754; --bs-btn-focus-shadow-rgb: 25, 135, 84; --bs-btn-active-color: #fff; --bs-btn-active-bg: #198754; --bs-btn-active-border-color: #198754; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #198754; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #198754; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: "#68d391",
		[varBsBtnBorderColor]: "#68d391",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#68d391",
		[varBsBtnHoverBorderColor]: "#68d391",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#68d391",
		[varBsBtnActiveBorderColor]: "#68d391",
		[varBsBtnDisabledColor]: "#68d391",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#68d391",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-warning { --bs-btn-color: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffc107; --bs-btn-hover-border-color: #ffc107; --bs-btn-focus-shadow-rgb: 255, 193, 7; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffc107; --bs-btn-active-border-color: #ffc107; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #ffc107; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #ffc107; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: "#ffc700",
		[varBsBtnBorderColor]: "#ffc700",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#ffc700",
		[varBsBtnHoverBorderColor]: "#ffc700",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#ffc700",
		[varBsBtnActiveBorderColor]: "#ffc700",
		[varBsBtnDisabledColor]: "#ffc700",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#ffc700",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// label { display: inline-block; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`label`, {
	display: "inline-block",
})

// SOURCE CSS:
// .btn-check { position: absolute; clip: rect(0, 0, 0, 0); pointer-events: none; }
globalStyle(`${briteScope}${btnCheck}`, {
	position: "absolute",
	clip: "rect(0, 0, 0, 0)",
	pointerEvents: "none",
})

// SOURCE CSS:
// .btn-check[disabled] + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${briteScope}${btnCheck}[disabled] + ${briteScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check:disabled + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${briteScope}${btnCheck}:disabled + ${briteScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check + .btn:hover { color: var(--bs-btn-color); background-color: var(--bs-btn-bg); border-color: var(--bs-btn-border-color); }
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btn}:hover`, {
	color: "#000",
	backgroundColor: varBsBtnBg,
	borderColor: "#000",
})

// SOURCE CSS:
// .btn-check:focus-visible + .btn { border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${briteScope}${btnCheck}:focus-visible + ${briteScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked:focus-visible + .btn { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${briteScope}${btnCheck}:checked:focus-visible + ${briteScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0b5ed7; --bs-btn-hover-border-color: #0a58ca; --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btn}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#a2e436",
		[varBsBtnBorderColor]: "#a2e436",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#b0e854",
		[varBsBtnHoverBorderColor]: "#abe74a",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#b5e95e",
		[varBsBtnActiveBorderColor]: "#abe74a",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#a2e436",
		[varBsBtnDisabledBorderColor]: "#a2e436",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-lg { --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
globalStyle(`${briteScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: "0.75rem",
		[varBsBtnPaddingX]: "1.25rem",
		[varBsBtnFontSize]: "0.875rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .btn-group-lg > .btn { --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
// [UNMAPPED_SELECTOR] class ".btn-group-lg" — no contract mapping
globalStyle(`.btn-group-lg > ${briteScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: "0.75rem",
		[varBsBtnPaddingX]: "1.25rem",
		[varBsBtnFontSize]: "0.875rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .btn-sm { --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
globalStyle(`${briteScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: "0.25rem",
		[varBsBtnPaddingX]: "0.75rem",
		[varBsBtnFontSize]: "0.765625rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

// SOURCE CSS:
// .btn-group-sm > .btn { --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
// [UNMAPPED_SELECTOR] class ".btn-group-sm" — no contract mapping
globalStyle(`.btn-group-sm > ${briteScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: "0.25rem",
		[varBsBtnPaddingX]: "0.75rem",
		[varBsBtnFontSize]: "0.765625rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

// SOURCE CSS:
// .btn-danger { --bs-btn-color: #fff; --bs-btn-bg: #dc3545; --bs-btn-border-color: #dc3545; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #bb2d3b; --bs-btn-hover-border-color: #b02a37; --bs-btn-focus-shadow-rgb: 225, 83, 97; --bs-btn-active-color: #fff; --bs-btn-active-bg: #b02a37; --bs-btn-active-border-color: #a52834; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #dc3545; --bs-btn-disabled-border-color: #dc3545; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btn}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#f56565",
		[varBsBtnBorderColor]: "#f56565",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#f77c7c",
		[varBsBtnHoverBorderColor]: "#f67474",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#f78484",
		[varBsBtnActiveBorderColor]: "#f67474",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#f56565",
		[varBsBtnDisabledBorderColor]: "#f56565",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-dark { --bs-btn-color: #fff; --bs-btn-bg: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #424649; --bs-btn-hover-border-color: #373b3e; --bs-btn-focus-shadow-rgb: 66, 70, 73; --bs-btn-active-color: #fff; --bs-btn-active-bg: #4d5154; --bs-btn-active-border-color: #373b3e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #212529; --bs-btn-disabled-border-color: #212529; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btn}${btnDark}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#000",
		[varBsBtnBorderColor]: "#000",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#262626",
		[varBsBtnHoverBorderColor]: "#1a1a1a",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#333333",
		[varBsBtnActiveBorderColor]: "#1a1a1a",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#000",
		[varBsBtnDisabledBorderColor]: "#000",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-info { --bs-btn-color: #000; --bs-btn-bg: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #31d2f2; --bs-btn-hover-border-color: #25cff2; --bs-btn-focus-shadow-rgb: 11, 172, 204; --bs-btn-active-color: #000; --bs-btn-active-bg: #3dd5f3; --bs-btn-active-border-color: #25cff2; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #0dcaf0; --bs-btn-disabled-border-color: #0dcaf0; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btn}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#22d2ed",
		[varBsBtnBorderColor]: "#22d2ed",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#43d9f0",
		[varBsBtnHoverBorderColor]: "#38d7ef",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#4edbf1",
		[varBsBtnActiveBorderColor]: "#38d7ef",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#22d2ed",
		[varBsBtnDisabledBorderColor]: "#22d2ed",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-light { --bs-btn-color: #000; --bs-btn-bg: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #d3d4d5; --bs-btn-hover-border-color: #c6c7c8; --bs-btn-focus-shadow-rgb: 211, 212, 213; --bs-btn-active-color: #000; --bs-btn-active-bg: #c6c7c8; --bs-btn-active-border-color: #babbbc; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #f8f9fa; --bs-btn-disabled-border-color: #f8f9fa; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btn}${btnLight}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#e9ecef",
		[varBsBtnBorderColor]: "#e9ecef",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#c6c9cb",
		[varBsBtnHoverBorderColor]: "#babdbf",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#babdbf",
		[varBsBtnActiveBorderColor]: "#afb1b3",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#e9ecef",
		[varBsBtnDisabledBorderColor]: "#e9ecef",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-link { --bs-btn-font-weight: 400; --bs-btn-color: var(--bs-link-color); --bs-btn-bg: transparent; --bs-btn-border-color: transparent; --bs-btn-hover-color: var(--bs-link-hover-color); --bs-btn-hover-border-color: transparent; --bs-btn-active-color: var(--bs-link-hover-color); --bs-btn-active-border-color: transparent; --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-border-color: transparent; --bs-btn-box-shadow: 0 0 0 #000; --bs-btn-focus-shadow-rgb: 49, 132, 253; text-decoration: underline; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
globalStyle(`${briteScope}${btn}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: 400,
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: "transparent",
		[varBsBtnBorderColor]: "transparent",
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: "transparent",
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: "transparent",
		[varBsBtnDisabledColor]: "#868e96",
		[varBsBtnDisabledBorderColor]: "transparent",
		[varBsBtnBoxShadow]: "0 0 0 #000",
	},
	textDecoration: "underline",
	backgroundColor: varBsBtnBg,
	color: "#000",
})

// SOURCE CSS:
// .btn-link:focus-visible { color: var(--bs-btn-color); }
globalStyle(`${briteScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-link:hover { color: var(--bs-btn-hover-color); }
globalStyle(`${briteScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

// SOURCE CSS:
// .btn-success { --bs-btn-color: #fff; --bs-btn-bg: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #157347; --bs-btn-hover-border-color: #146c43; --bs-btn-focus-shadow-rgb: 60, 153, 110; --bs-btn-active-color: #fff; --bs-btn-active-bg: #146c43; --bs-btn-active-border-color: #13653f; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #198754; --bs-btn-disabled-border-color: #198754; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btn}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#68d391",
		[varBsBtnBorderColor]: "#68d391",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#7fdaa2",
		[varBsBtnHoverBorderColor]: "#77d79c",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#86dca7",
		[varBsBtnActiveBorderColor]: "#77d79c",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#68d391",
		[varBsBtnDisabledBorderColor]: "#68d391",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-warning { --bs-btn-color: #000; --bs-btn-bg: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffca2c; --bs-btn-hover-border-color: #ffc720; --bs-btn-focus-shadow-rgb: 217, 164, 6; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffcd39; --bs-btn-active-border-color: #ffc720; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #ffc107; --bs-btn-disabled-border-color: #ffc107; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${briteScope}${btn}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#ffc700",
		[varBsBtnBorderColor]: "#ffc700",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#ffcf26",
		[varBsBtnHoverBorderColor]: "#ffcd1a",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#ffd233",
		[varBsBtnActiveBorderColor]: "#ffcd1a",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#ffc700",
		[varBsBtnDisabledBorderColor]: "#ffc700",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-close { --bs-btn-close-color: #000; --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e"); --bs-btn-close-opacity: 0.5; --bs-btn-close-hover-opacity: 0.75; --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-btn-close-focus-opacity: 1; --bs-btn-close-disabled-opacity: 0.25; box-sizing: content-box; width: 1em; height: 1em; padding: 0.25em 0.25em; color: var(--bs-btn-close-color); background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat; filter: var(--bs-btn-close-filter); border: 0; border-radius: 0.375rem; opacity: var(--bs-btn-close-opacity); }
globalStyle(`${briteScope}${alertBtnClose}`, {
	vars: {
		[varBsBtnCloseColor]: "#000",
		[varBsBtnCloseBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e\")",
		[varBsBtnCloseOpacity]: 0.5,
		[varBsBtnCloseHoverOpacity]: 0.75,
		[varBsBtnCloseFocusShadow]: "0 0 0 1px #000",
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
globalStyle(`${briteScope}${alertBtnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: "none",
	opacity: varBsBtnCloseHoverOpacity,
})

// SOURCE CSS:
// .btn-close:focus { outline: 0; box-shadow: var(--bs-btn-close-focus-shadow); opacity: var(--bs-btn-close-focus-opacity); }
globalStyle(`${briteScope}${alertBtnClose}:focus`, {
	outline: 0,
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

// SOURCE CSS:
// .btn-close:disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${briteScope}${alertBtnClose}:disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .btn-close.disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
// [UNMAPPED_SELECTOR] state class ".disabled" — no contract mapping
globalStyle(`${briteScope}${alertBtnClose}.disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .btn-group .btn { margin-left: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnGroup} ${briteScope}${btn}`, {
	marginLeft: 0,
})
// SOURCE CSS:
// .btn-group .btn:hover { z-index: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnGroup} ${briteScope}${btn}:hover`, {
	zIndex: 0,
})
// SOURCE CSS:
// .btn-group .btn:active { z-index: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnGroup} ${briteScope}${btn}:active`, {
	zIndex: 0,
})
// SOURCE CSS:
// .btn-group .btn:focus { z-index: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnGroup} ${briteScope}${btn}:focus`, {
	zIndex: 0,
})
// SOURCE CSS:
// .btn-group-vertical .btn:hover { z-index: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical ${briteScope}${btn}:hover`, {
	zIndex: 0,
})
// SOURCE CSS:
// .btn-group-vertical .btn:active { z-index: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical ${briteScope}${btn}:active`, {
	zIndex: 0,
})
// SOURCE CSS:
// .btn-group-vertical .btn:focus { z-index: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical ${briteScope}${btn}:focus`, {
	zIndex: 0,
})
// SOURCE CSS:
// .btn-outline-danger:hover { box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnOutlineDanger}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn-outline-dark:hover { box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnOutlineDark}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn-outline-info:hover { box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnOutlineInfo}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn-outline-light:hover { box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnOutlineLight}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn-outline-primary:hover { box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnOutlinePrimary}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn-outline-secondary:hover { box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnOutlineSecondary}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn-outline-success:hover { box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnOutlineSuccess}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn-outline-warning:hover { box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnOutlineWarning}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn-check + .btn-danger:hover { background-color: #f56565; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnDanger}:hover`, {
	backgroundColor: "#f56565",
})
// SOURCE CSS:
// .btn-check + .btn-outline-danger:hover { background-color: #f56565; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineDanger}:hover`, {
	backgroundColor: "#f56565",
})
// SOURCE CSS:
// .btn-check + .btn { border-color: #000; box-shadow: 3px 3px 0 0 var(--bs-border-color); transform: translate(-3px, -3px); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btn}`, {
	borderColor: "#000",
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: "translate(-3px, -3px)",
})
// SOURCE CSS:
// .btn-check + .btn-dark:hover { background-color: #000; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnDark}:hover`, {
	backgroundColor: "#000",
})
// SOURCE CSS:
// .btn-check + .btn-outline-dark:hover { background-color: #000; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineDark}:hover`, {
	backgroundColor: "#000",
})
// SOURCE CSS:
// .btn-check + .btn-info:hover { background-color: #22d2ed; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnInfo}:hover`, {
	backgroundColor: "#22d2ed",
})
// SOURCE CSS:
// .btn-check + .btn-outline-info:hover { background-color: #22d2ed; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineInfo}:hover`, {
	backgroundColor: "#22d2ed",
})
// SOURCE CSS:
// .btn-check + .btn-light:hover { background-color: #e9ecef; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnLight}:hover`, {
	backgroundColor: "#e9ecef",
})
// SOURCE CSS:
// .btn-check + .btn-outline-light:hover { background-color: #e9ecef; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineLight}:hover`, {
	backgroundColor: "#e9ecef",
})
// SOURCE CSS:
// .btn-check + .btn-primary:hover { background-color: #a2e436; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnPrimary}:hover`, {
	backgroundColor: "#a2e436",
})
// SOURCE CSS:
// .btn-check + .btn-outline-primary:hover { background-color: #a2e436; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlinePrimary}:hover`, {
	backgroundColor: "#a2e436",
})
// SOURCE CSS:
// .btn-check + .btn-secondary:hover { background-color: #fff; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnSecondary}:hover`, {
	backgroundColor: "#fff",
})
// SOURCE CSS:
// .btn-check + .btn-outline-secondary:hover { background-color: #fff; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineSecondary}:hover`, {
	backgroundColor: "#fff",
})
// SOURCE CSS:
// .btn-check + .btn-success:hover { background-color: #68d391; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnSuccess}:hover`, {
	backgroundColor: "#68d391",
})
// SOURCE CSS:
// .btn-check + .btn-outline-success:hover { background-color: #68d391; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineSuccess}:hover`, {
	backgroundColor: "#68d391",
})
// SOURCE CSS:
// .btn-check + .btn-warning:hover { background-color: #ffc700; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnWarning}:hover`, {
	backgroundColor: "#ffc700",
})
// SOURCE CSS:
// .btn-check + .btn-outline-warning:hover { background-color: #ffc700; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineWarning}:hover`, {
	backgroundColor: "#ffc700",
})
