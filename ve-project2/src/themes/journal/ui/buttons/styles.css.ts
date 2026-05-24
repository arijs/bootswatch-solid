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
	link,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	fieldset,
} from '../../../../theme-contract/forms/contract.css'
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
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import { journalScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/buttons
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .btn { --bs-btn-padding-x: 0.75rem; --bs-btn-padding-y: 0.375rem; --bs-btn-font-family: ; --bs-btn-font-size: 1rem; --bs-btn-font-weight: 400; --bs-btn-line-height: 1.5; --bs-btn-color: var(--bs-body-color); --bs-btn-bg: transparent; --bs-btn-border-width: var(--bs-border-width); --bs-btn-border-color: transparent; --bs-btn-border-radius: var(--bs-border-radius); --bs-btn-hover-border-color: transparent; --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); --bs-btn-disabled-opacity: 0.65; --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5); display: inline-block; padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x); font-family: var(--bs-btn-font-family); font-size: var(--bs-btn-font-size); font-weight: var(--bs-btn-font-weight); line-height: var(--bs-btn-line-height); color: var(--bs-btn-color); text-align: center; text-decoration: none; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; user-select: none; border: var(--bs-btn-border-width) solid var(--bs-btn-border-color); border-radius: var(--bs-btn-border-radius); background-color: var(--bs-btn-bg); transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${journalScope}${btn}`, {
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
globalStyle(`${journalScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS:
// .btn:focus-visible { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${journalScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked + .btn { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${journalScope}${btnCheck}:checked + ${journalScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`:not(${journalScope}${btnCheck}) + ${journalScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn:first-child:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${journalScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${journalScope}${btn}${btnActiveHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${journalScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn-check:checked + .btn:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${journalScope}${btnCheck}:checked + ${journalScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`:not(${journalScope}${btnCheck}) + ${journalScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:first-child:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${journalScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${journalScope}${btn}.active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.show:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${journalScope}${btn}${btnShowHook}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${journalScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// .btn.disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${journalScope}${btn}.disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// fieldset:disabled .btn { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
// [UNMAPPED_SELECTOR] element selector "fieldset:disabled" — map to a contract class
globalStyle(`fieldset:disabled ${journalScope}${btn}`, {
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
globalStyle(`${journalScope}${btnSecondary}`, {
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
// .btn-group { position: relative; display: inline-flex; vertical-align: middle; border-radius: var(--bs-border-radius); }
globalStyle(`${journalScope}${btnGroup}`, {
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
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
})

// SOURCE CSS:
// .btn-group-vertical > .btn { position: relative; flex: 1 1 auto; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${journalScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
})

// SOURCE CSS:
// .btn-group > .btn-check:checked + .btn { z-index: 1; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btnCheck}:checked + ${journalScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn-check:focus + .btn { z-index: 1; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btnCheck}:focus + ${journalScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:hover { z-index: 1; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:focus { z-index: 1; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:active { z-index: 1; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn.active { z-index: 1; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:checked + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${journalScope}${btnCheck}:checked + ${journalScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:focus + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${journalScope}${btnCheck}:focus + ${journalScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:hover { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${journalScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:focus { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${journalScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${journalScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn.active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${journalScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
globalStyle(`${journalScope}${btnToolbar}`, {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "flex-start",
})

// SOURCE CSS:
// .btn-group > :not(.btn-check:first-child) + .btn { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${journalScope}${btnGroup} > :not(${journalScope}${btnCheck}:first-child) + ${journalScope}${btn}`, {
	marginLeft: "calc(-1 * var(--bs-border-width))",
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btnGroup}:not(:first-child)`, {
	marginLeft: "calc(-1 * var(--bs-border-width))",
})

// SOURCE CSS:
// .btn-group > .btn:not(:last-child):not(.dropdown-toggle) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:not(:last-child):not(.dropdown-toggle)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn.dropdown-toggle-split:first-child { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}.dropdown-toggle-split:first-child`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:last-child) > .btn { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btnGroup}:not(:last-child) > ${journalScope}${btn}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn:nth-child(n+3) { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-group > :not(.btn-check) + .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${journalScope}${btnGroup} > :not(${journalScope}${btnCheck}) + ${journalScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) > .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btnGroup}:not(:first-child) > ${journalScope}${btn}`, {
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
globalStyle(`[type="submit"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .btn-outline-danger { --bs-btn-color: #dc3545; --bs-btn-border-color: #dc3545; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #dc3545; --bs-btn-hover-border-color: #dc3545; --bs-btn-focus-shadow-rgb: 220, 53, 69; --bs-btn-active-color: #fff; --bs-btn-active-bg: #dc3545; --bs-btn-active-border-color: #dc3545; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #dc3545; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #dc3545; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: "#dc3545",
		[varBsBtnBorderColor]: "#dc3545",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#dc3545",
		[varBsBtnHoverBorderColor]: "#dc3545",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#dc3545",
		[varBsBtnActiveBorderColor]: "#dc3545",
		[varBsBtnDisabledColor]: "#dc3545",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#dc3545",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-dark { --bs-btn-color: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #212529; --bs-btn-hover-border-color: #212529; --bs-btn-focus-shadow-rgb: 33, 37, 41; --bs-btn-active-color: #fff; --bs-btn-active-bg: #212529; --bs-btn-active-border-color: #212529; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #212529; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #212529; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: "#212529",
		[varBsBtnBorderColor]: "#212529",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#212529",
		[varBsBtnHoverBorderColor]: "#212529",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#212529",
		[varBsBtnActiveBorderColor]: "#212529",
		[varBsBtnDisabledColor]: "#212529",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#212529",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-info { --bs-btn-color: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #0dcaf0; --bs-btn-hover-border-color: #0dcaf0; --bs-btn-focus-shadow-rgb: 13, 202, 240; --bs-btn-active-color: #000; --bs-btn-active-bg: #0dcaf0; --bs-btn-active-border-color: #0dcaf0; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0dcaf0; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0dcaf0; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: "#0dcaf0",
		[varBsBtnBorderColor]: "#0dcaf0",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#0dcaf0",
		[varBsBtnHoverBorderColor]: "#0dcaf0",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#0dcaf0",
		[varBsBtnActiveBorderColor]: "#0dcaf0",
		[varBsBtnDisabledColor]: "#0dcaf0",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#0dcaf0",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-light { --bs-btn-color: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #f8f9fa; --bs-btn-hover-border-color: #f8f9fa; --bs-btn-focus-shadow-rgb: 248, 249, 250; --bs-btn-active-color: #000; --bs-btn-active-bg: #f8f9fa; --bs-btn-active-border-color: #f8f9fa; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #f8f9fa; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #f8f9fa; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: "#f8f9fa",
		[varBsBtnBorderColor]: "#f8f9fa",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#f8f9fa",
		[varBsBtnHoverBorderColor]: "#f8f9fa",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#f8f9fa",
		[varBsBtnActiveBorderColor]: "#f8f9fa",
		[varBsBtnDisabledColor]: "#f8f9fa",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#f8f9fa",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-primary { --bs-btn-color: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0d6efd; --bs-btn-hover-border-color: #0d6efd; --bs-btn-focus-shadow-rgb: 13, 110, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0d6efd; --bs-btn-active-border-color: #0d6efd; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0d6efd; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0d6efd; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: "#0d6efd",
		[varBsBtnBorderColor]: "#0d6efd",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#0d6efd",
		[varBsBtnHoverBorderColor]: "#0d6efd",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#0d6efd",
		[varBsBtnActiveBorderColor]: "#0d6efd",
		[varBsBtnDisabledColor]: "#0d6efd",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#0d6efd",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-secondary { --bs-btn-color: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #6c757d; --bs-btn-hover-border-color: #6c757d; --bs-btn-focus-shadow-rgb: 108, 117, 125; --bs-btn-active-color: #fff; --bs-btn-active-bg: #6c757d; --bs-btn-active-border-color: #6c757d; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #6c757d; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: "#6c757d",
		[varBsBtnBorderColor]: "#6c757d",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#6c757d",
		[varBsBtnHoverBorderColor]: "#6c757d",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#6c757d",
		[varBsBtnActiveBorderColor]: "#6c757d",
		[varBsBtnDisabledColor]: "#6c757d",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#6c757d",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-success { --bs-btn-color: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #198754; --bs-btn-hover-border-color: #198754; --bs-btn-focus-shadow-rgb: 25, 135, 84; --bs-btn-active-color: #fff; --bs-btn-active-bg: #198754; --bs-btn-active-border-color: #198754; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #198754; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #198754; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: "#198754",
		[varBsBtnBorderColor]: "#198754",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#198754",
		[varBsBtnHoverBorderColor]: "#198754",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#198754",
		[varBsBtnActiveBorderColor]: "#198754",
		[varBsBtnDisabledColor]: "#198754",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#198754",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-warning { --bs-btn-color: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffc107; --bs-btn-hover-border-color: #ffc107; --bs-btn-focus-shadow-rgb: 255, 193, 7; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffc107; --bs-btn-active-border-color: #ffc107; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #ffc107; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #ffc107; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: "#ffc107",
		[varBsBtnBorderColor]: "#ffc107",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#ffc107",
		[varBsBtnHoverBorderColor]: "#ffc107",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#ffc107",
		[varBsBtnActiveBorderColor]: "#ffc107",
		[varBsBtnDisabledColor]: "#ffc107",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#ffc107",
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
globalStyle(`${journalScope}${btnCheck}`, {
	position: "absolute",
	clip: "rect(0, 0, 0, 0)",
	pointerEvents: "none",
})

// SOURCE CSS:
// .btn-check[disabled] + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${journalScope}${btnCheck}[disabled] + ${journalScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check:disabled + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${journalScope}${btnCheck}:disabled + ${journalScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check + .btn:hover { color: var(--bs-btn-color); background-color: var(--bs-btn-bg); border-color: var(--bs-btn-border-color); }
globalStyle(`${journalScope}${btnCheck} + ${journalScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

// SOURCE CSS:
// .btn-check:focus-visible + .btn { border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${journalScope}${btnCheck}:focus-visible + ${journalScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked:focus-visible + .btn { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${journalScope}${btnCheck}:checked:focus-visible + ${journalScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0b5ed7; --bs-btn-hover-border-color: #0a58ca; --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#0d6efd",
		[varBsBtnBorderColor]: "#0d6efd",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#0b5ed7",
		[varBsBtnHoverBorderColor]: "#0a58ca",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#0a58ca",
		[varBsBtnActiveBorderColor]: "#0a53be",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#0d6efd",
		[varBsBtnDisabledBorderColor]: "#0d6efd",
	},
})

// SOURCE CSS:
// .btn-lg { --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
globalStyle(`${journalScope}${btnLg}`, {
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
globalStyle(`.btn-group-lg > ${journalScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: "0.5rem",
		[varBsBtnPaddingX]: "1rem",
		[varBsBtnFontSize]: "1.25rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .btn-sm { --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
globalStyle(`${journalScope}${btnSm}`, {
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
globalStyle(`.btn-group-sm > ${journalScope}${btn}`, {
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
globalStyle(`${journalScope}${btnDanger}`, {
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
// .btn-dark { --bs-btn-color: #fff; --bs-btn-bg: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #424649; --bs-btn-hover-border-color: #373b3e; --bs-btn-focus-shadow-rgb: 66, 70, 73; --bs-btn-active-color: #fff; --bs-btn-active-bg: #4d5154; --bs-btn-active-border-color: #373b3e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #212529; --bs-btn-disabled-border-color: #212529; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#212529",
		[varBsBtnBorderColor]: "#212529",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#424649",
		[varBsBtnHoverBorderColor]: "#373b3e",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#4d5154",
		[varBsBtnActiveBorderColor]: "#373b3e",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#212529",
		[varBsBtnDisabledBorderColor]: "#212529",
	},
})

// SOURCE CSS:
// .btn-info { --bs-btn-color: #000; --bs-btn-bg: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #31d2f2; --bs-btn-hover-border-color: #25cff2; --bs-btn-focus-shadow-rgb: 11, 172, 204; --bs-btn-active-color: #000; --bs-btn-active-bg: #3dd5f3; --bs-btn-active-border-color: #25cff2; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #0dcaf0; --bs-btn-disabled-border-color: #0dcaf0; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#0dcaf0",
		[varBsBtnBorderColor]: "#0dcaf0",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#31d2f2",
		[varBsBtnHoverBorderColor]: "#25cff2",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#3dd5f3",
		[varBsBtnActiveBorderColor]: "#25cff2",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#0dcaf0",
		[varBsBtnDisabledBorderColor]: "#0dcaf0",
	},
})

// SOURCE CSS:
// .btn-light { --bs-btn-color: #000; --bs-btn-bg: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #d3d4d5; --bs-btn-hover-border-color: #c6c7c8; --bs-btn-focus-shadow-rgb: 211, 212, 213; --bs-btn-active-color: #000; --bs-btn-active-bg: #c6c7c8; --bs-btn-active-border-color: #babbbc; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #f8f9fa; --bs-btn-disabled-border-color: #f8f9fa; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#f8f9fa",
		[varBsBtnBorderColor]: "#f8f9fa",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#d3d4d5",
		[varBsBtnHoverBorderColor]: "#c6c7c8",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#c6c7c8",
		[varBsBtnActiveBorderColor]: "#babbbc",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#f8f9fa",
		[varBsBtnDisabledBorderColor]: "#f8f9fa",
	},
})

// SOURCE CSS:
// .btn-link { --bs-btn-font-weight: 400; --bs-btn-color: var(--bs-link-color); --bs-btn-bg: transparent; --bs-btn-border-color: transparent; --bs-btn-hover-color: var(--bs-link-hover-color); --bs-btn-hover-border-color: transparent; --bs-btn-active-color: var(--bs-link-hover-color); --bs-btn-active-border-color: transparent; --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-border-color: transparent; --bs-btn-box-shadow: 0 0 0 #000; --bs-btn-focus-shadow-rgb: 49, 132, 253; text-decoration: underline; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
globalStyle(`${journalScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: 400,
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: "transparent",
		[varBsBtnBorderColor]: "transparent",
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: "transparent",
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: "transparent",
		[varBsBtnDisabledColor]: "#6c757d",
		[varBsBtnDisabledBorderColor]: "transparent",
		[varBsBtnBoxShadow]: "0 0 0 #000",
	},
	textDecoration: "underline",
})

// SOURCE CSS:
// .btn-link:focus-visible { color: var(--bs-btn-color); }
globalStyle(`${journalScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-link:hover { color: var(--bs-btn-hover-color); }
globalStyle(`${journalScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

// SOURCE CSS:
// .btn-success { --bs-btn-color: #fff; --bs-btn-bg: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #157347; --bs-btn-hover-border-color: #146c43; --bs-btn-focus-shadow-rgb: 60, 153, 110; --bs-btn-active-color: #fff; --bs-btn-active-bg: #146c43; --bs-btn-active-border-color: #13653f; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #198754; --bs-btn-disabled-border-color: #198754; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#198754",
		[varBsBtnBorderColor]: "#198754",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#157347",
		[varBsBtnHoverBorderColor]: "#146c43",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#146c43",
		[varBsBtnActiveBorderColor]: "#13653f",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#198754",
		[varBsBtnDisabledBorderColor]: "#198754",
	},
})

// SOURCE CSS:
// .btn-warning { --bs-btn-color: #000; --bs-btn-bg: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffca2c; --bs-btn-hover-border-color: #ffc720; --bs-btn-focus-shadow-rgb: 217, 164, 6; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffcd39; --bs-btn-active-border-color: #ffc720; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #ffc107; --bs-btn-disabled-border-color: #ffc107; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${journalScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: "#000",
		[varBsBtnBg]: "#ffc107",
		[varBsBtnBorderColor]: "#ffc107",
		[varBsBtnHoverColor]: "#000",
		[varBsBtnHoverBg]: "#ffca2c",
		[varBsBtnHoverBorderColor]: "#ffc720",
		[varBsBtnActiveColor]: "#000",
		[varBsBtnActiveBg]: "#ffcd39",
		[varBsBtnActiveBorderColor]: "#ffc720",
		[varBsBtnDisabledColor]: "#000",
		[varBsBtnDisabledBg]: "#ffc107",
		[varBsBtnDisabledBorderColor]: "#ffc107",
	},
})

// SOURCE CSS:
// .btn-close { --bs-btn-close-color: #000; --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e"); --bs-btn-close-opacity: 0.5; --bs-btn-close-hover-opacity: 0.75; --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-btn-close-focus-opacity: 1; --bs-btn-close-disabled-opacity: 0.25; box-sizing: content-box; width: 1em; height: 1em; padding: 0.25em 0.25em; color: var(--bs-btn-close-color); background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat; filter: var(--bs-btn-close-filter); border: 0; border-radius: 0.375rem; opacity: var(--bs-btn-close-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close`, {
	vars: {
		[varBsBtnCloseColor]: "#000",
		[varBsBtnCloseBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e\")",
		[varBsBtnCloseOpacity]: 0.5,
		[varBsBtnCloseHoverOpacity]: 0.75,
		[varBsBtnCloseFocusShadow]: "0 0 0 0.25rem rgba(235, 104, 100, 0.25)",
		[varBsBtnCloseFocusOpacity]: 1,
		[varBsBtnCloseDisabledOpacity]: 0.25,
	},
	boxSizing: "content-box",
	width: "1em",
	height: "1em",
	padding: "0.25em 0.25em",
	color: varBsBtnCloseColor,
	background: "transparent var(--bs-btn-close-bg) center/1em auto no-repeat",
	filter: varBsBtnCloseFilter,
	border: 0,
	borderRadius: "0.375rem",
	opacity: varBsBtnCloseOpacity,
})

// SOURCE CSS:
// .btn-close:hover { color: var(--bs-btn-close-color); text-decoration: none; opacity: var(--bs-btn-close-hover-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: "none",
	opacity: varBsBtnCloseHoverOpacity,
})

// SOURCE CSS:
// .btn-close:focus { outline: 0; box-shadow: var(--bs-btn-close-focus-shadow); opacity: var(--bs-btn-close-focus-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close:focus`, {
	outline: 0,
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

// SOURCE CSS:
// .btn-close:disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close:disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .btn-close.disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close.disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .btn-toolbar .input-group
// [DELTA] unmapped selector: .btn-sm + .dropdown-toggle-split
// [DELTA] unmapped selector: .btn-group-sm > .btn + .dropdown-toggle-split
// [DELTA] unmapped selector: .btn-lg + .dropdown-toggle-split
// [DELTA] unmapped selector: .btn-group-lg > .btn + .dropdown-toggle-split
// [DELTA] unmapped selector: .btn-group-vertical > .btn-group
// [DELTA] unmapped selector: .btn-group-vertical > .btn:not(:first-child)
// [DELTA] unmapped selector: .btn-group-vertical > .btn-group:not(:first-child)
// [DELTA] unmapped selector: .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle)
// [DELTA] unmapped selector: .btn-group-vertical > .btn-group:not(:last-child) > .btn
// [DELTA] unmapped selector: .btn-group-vertical > .btn:nth-child(n+3)
// [DELTA] unmapped selector: .btn-group-vertical > :not(.btn-check) + .btn
// [DELTA] unmapped selector: .btn-group-vertical > .btn-group:not(:first-child) > .btn
// [DELTA] unmapped selector: .btn .badge
// [DELTA] unmapped selector: .btn-close-white
