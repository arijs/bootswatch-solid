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
import { ceruleanScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/buttons
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// button { border-radius: 0; margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; appearance: button; }
globalStyle(`${ceruleanScope}${inputFontFamily}`, {
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
globalStyle(`${ceruleanScope}${inputFontFamily}:focus:not(:focus-visible)`, {
	outline: 0,
})

// SOURCE CSS:
// input { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
globalStyle(`${ceruleanScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// select { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; }
globalStyle(`${ceruleanScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
})

// SOURCE CSS:
// optgroup { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
globalStyle(`${ceruleanScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
globalStyle(`${ceruleanScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// button:not(:disabled) { cursor: pointer; }
globalStyle(`${ceruleanScope}${inputFontFamily}:not(:disabled)`, {
	cursor: "pointer",
})

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
	textShadow: "0 1px 0 rgba(0, 0, 0, 0.05)",
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
// .btn-group { position: relative; display: inline-flex; vertical-align: middle; border-radius: var(--bs-border-radius); }
globalStyle(`${ceruleanScope}${btnGroup}`, {
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
	borderRadius: varBsBorderRadius,
})

// SOURCE CSS:
// .btn-group > .btn { position: relative; flex: 1 1 auto; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
})

// SOURCE CSS:
// .btn-group-vertical > .btn { position: relative; flex: 1 1 auto; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "100%",
})

// SOURCE CSS:
// .btn-group > .btn-check:checked + .btn { z-index: 1; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn-check:focus + .btn { z-index: 1; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btnCheck}:focus + ${ceruleanScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:hover { z-index: 1; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:focus { z-index: 1; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:active { z-index: 1; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn.active { z-index: 1; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:checked + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:focus + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btnCheck}:focus + ${ceruleanScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:hover { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:focus { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn.active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
globalStyle(`${ceruleanScope}${btnToolbar}`, {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "flex-start",
})

// SOURCE CSS:
// .btn-group > :not(.btn-check:first-child) + .btn { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${ceruleanScope}${btnGroup} > :not(${ceruleanScope}${btnCheck}:first-child) + ${ceruleanScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

// SOURCE CSS:
// .btn-group > .btn:not(:last-child):not(.dropdown-toggle) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:not(:last-child):not(${ceruleanScope}${dropdownToggle})`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn.dropdown-toggle-split:first-child { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:last-child) > .btn { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btnGroup}:not(:last-child) > ${ceruleanScope}${btn}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn:nth-child(n+3) { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-group > :not(.btn-check) + .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${ceruleanScope}${btnGroup} > :not(${ceruleanScope}${btnCheck}) + ${ceruleanScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) > .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btnGroup}:not(:first-child) > ${ceruleanScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-outline-danger { --bs-btn-color: #dc3545; --bs-btn-border-color: #dc3545; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #dc3545; --bs-btn-hover-border-color: #dc3545; --bs-btn-focus-shadow-rgb: 220, 53, 69; --bs-btn-active-color: #fff; --bs-btn-active-bg: #dc3545; --bs-btn-active-border-color: #dc3545; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #dc3545; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #dc3545; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: "#c71c22",
		[varBsBtnBorderColor]: "#c71c22",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#c71c22",
		[varBsBtnHoverBorderColor]: "#c71c22",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#c71c22",
		[varBsBtnActiveBorderColor]: "#c71c22",
		[varBsBtnDisabledColor]: "#c71c22",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#c71c22",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-dark { --bs-btn-color: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #212529; --bs-btn-hover-border-color: #212529; --bs-btn-focus-shadow-rgb: 33, 37, 41; --bs-btn-active-color: #fff; --bs-btn-active-bg: #212529; --bs-btn-active-border-color: #212529; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #212529; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #212529; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: "#343a40",
		[varBsBtnBorderColor]: "#343a40",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#343a40",
		[varBsBtnHoverBorderColor]: "#343a40",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#343a40",
		[varBsBtnActiveBorderColor]: "#343a40",
		[varBsBtnDisabledColor]: "#343a40",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#343a40",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-info { --bs-btn-color: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #0dcaf0; --bs-btn-hover-border-color: #0dcaf0; --bs-btn-focus-shadow-rgb: 13, 202, 240; --bs-btn-active-color: #000; --bs-btn-active-bg: #0dcaf0; --bs-btn-active-border-color: #0dcaf0; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0dcaf0; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0dcaf0; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: "#033c73",
		[varBsBtnBorderColor]: "#033c73",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#033c73",
		[varBsBtnHoverBorderColor]: "#033c73",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#033c73",
		[varBsBtnActiveBorderColor]: "#033c73",
		[varBsBtnDisabledColor]: "#033c73",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#033c73",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-light { --bs-btn-color: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #f8f9fa; --bs-btn-hover-border-color: #f8f9fa; --bs-btn-focus-shadow-rgb: 248, 249, 250; --bs-btn-active-color: #000; --bs-btn-active-bg: #f8f9fa; --bs-btn-active-border-color: #f8f9fa; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #f8f9fa; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #f8f9fa; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnOutlineLight}`, {
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
globalStyle(`${ceruleanScope}${btn}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: "#2fa4e7",
		[varBsBtnBorderColor]: "#2fa4e7",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#2fa4e7",
		[varBsBtnHoverBorderColor]: "#2fa4e7",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#2fa4e7",
		[varBsBtnActiveBorderColor]: "#2fa4e7",
		[varBsBtnDisabledColor]: "#2fa4e7",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#2fa4e7",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-secondary { --bs-btn-color: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #6c757d; --bs-btn-hover-border-color: #6c757d; --bs-btn-focus-shadow-rgb: 108, 117, 125; --bs-btn-active-color: #fff; --bs-btn-active-bg: #6c757d; --bs-btn-active-border-color: #6c757d; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #6c757d; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnOutlineSecondary}`, {
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
	color: "#495057",
})

// SOURCE CSS:
// .btn-outline-success { --bs-btn-color: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #198754; --bs-btn-hover-border-color: #198754; --bs-btn-focus-shadow-rgb: 25, 135, 84; --bs-btn-active-color: #fff; --bs-btn-active-bg: #198754; --bs-btn-active-border-color: #198754; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #198754; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #198754; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: "#73a839",
		[varBsBtnBorderColor]: "#73a839",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#73a839",
		[varBsBtnHoverBorderColor]: "#73a839",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#73a839",
		[varBsBtnActiveBorderColor]: "#73a839",
		[varBsBtnDisabledColor]: "#73a839",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#73a839",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-warning { --bs-btn-color: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffc107; --bs-btn-hover-border-color: #ffc107; --bs-btn-focus-shadow-rgb: 255, 193, 7; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffc107; --bs-btn-active-border-color: #ffc107; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #ffc107; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #ffc107; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: "#dd5600",
		[varBsBtnBorderColor]: "#dd5600",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#dd5600",
		[varBsBtnHoverBorderColor]: "#dd5600",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#dd5600",
		[varBsBtnActiveBorderColor]: "#dd5600",
		[varBsBtnDisabledColor]: "#dd5600",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#dd5600",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-check { position: absolute; clip: rect(0, 0, 0, 0); pointer-events: none; }
globalStyle(`${ceruleanScope}${btnCheck}`, {
	position: "absolute",
	clip: "rect(0, 0, 0, 0)",
	pointerEvents: "none",
})

// SOURCE CSS:
// .btn-check[disabled] + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${ceruleanScope}${btnCheck}[disabled] + ${ceruleanScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check:disabled + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${ceruleanScope}${btnCheck}:disabled + ${ceruleanScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check + .btn:hover { color: var(--bs-btn-color); background-color: var(--bs-btn-bg); border-color: var(--bs-btn-border-color); }
globalStyle(`${ceruleanScope}${btnCheck} + ${ceruleanScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

// SOURCE CSS:
// .btn-check:focus-visible + .btn { border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${ceruleanScope}${btnCheck}:focus-visible + ${ceruleanScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked:focus-visible + .btn { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${ceruleanScope}${btnCheck}:checked:focus-visible + ${ceruleanScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0b5ed7; --bs-btn-hover-border-color: #0a58ca; --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#2fa4e7",
		[varBsBtnBorderColor]: "#2fa4e7",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#288bc4",
		[varBsBtnHoverBorderColor]: "#2683b9",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#2683b9",
		[varBsBtnActiveBorderColor]: "#237bad",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#2fa4e7",
		[varBsBtnDisabledBorderColor]: "#2fa4e7",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
	backgroundImage: "linear-gradient(#50b3eb, #2fa4e7 60%, #2c9ad9)",
})

// SOURCE CSS:
// .btn-lg { --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
globalStyle(`${ceruleanScope}${btn}${btnLg}`, {
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
globalStyle(`.btn-group-lg > ${ceruleanScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: "0.5rem",
		[varBsBtnPaddingX]: "1rem",
		[varBsBtnFontSize]: "1.25rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .btn-sm { --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
globalStyle(`${ceruleanScope}${btn}${btnSm}`, {
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
globalStyle(`.btn-group-sm > ${ceruleanScope}${btn}`, {
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
globalStyle(`${ceruleanScope}${btn}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#c71c22",
		[varBsBtnBorderColor]: "#c71c22",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#a9181d",
		[varBsBtnHoverBorderColor]: "#9f161b",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#9f161b",
		[varBsBtnActiveBorderColor]: "#95151a",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#c71c22",
		[varBsBtnDisabledBorderColor]: "#c71c22",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
	backgroundImage: "linear-gradient(#d04045, #c71c22 60%, #bb1a20)",
})

// SOURCE CSS:
// .btn-dark { --bs-btn-color: #fff; --bs-btn-bg: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #424649; --bs-btn-hover-border-color: #373b3e; --bs-btn-focus-shadow-rgb: 66, 70, 73; --bs-btn-active-color: #fff; --bs-btn-active-bg: #4d5154; --bs-btn-active-border-color: #373b3e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #212529; --bs-btn-disabled-border-color: #212529; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnDark}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#343a40",
		[varBsBtnBorderColor]: "#343a40",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#52585d",
		[varBsBtnHoverBorderColor]: "#484e53",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#5d6166",
		[varBsBtnActiveBorderColor]: "#484e53",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#343a40",
		[varBsBtnDisabledBorderColor]: "#343a40",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
	backgroundImage: "linear-gradient(#545a5f, #343a40 60%, #31373c)",
})

// SOURCE CSS:
// .btn-info { --bs-btn-color: #000; --bs-btn-bg: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #31d2f2; --bs-btn-hover-border-color: #25cff2; --bs-btn-focus-shadow-rgb: 11, 172, 204; --bs-btn-active-color: #000; --bs-btn-active-bg: #3dd5f3; --bs-btn-active-border-color: #25cff2; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #0dcaf0; --bs-btn-disabled-border-color: #0dcaf0; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#033c73",
		[varBsBtnBorderColor]: "#033c73",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#033362",
		[varBsBtnHoverBorderColor]: "#02305c",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#02305c",
		[varBsBtnActiveBorderColor]: "#022d56",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#033c73",
		[varBsBtnDisabledBorderColor]: "#033c73",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
	backgroundImage: "linear-gradient(#2b5b89, #033c73 60%, #03386c)",
})

// SOURCE CSS:
// .btn-light { --bs-btn-color: #000; --bs-btn-bg: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #d3d4d5; --bs-btn-hover-border-color: #c6c7c8; --bs-btn-focus-shadow-rgb: 211, 212, 213; --bs-btn-active-color: #000; --bs-btn-active-bg: #c6c7c8; --bs-btn-active-border-color: #babbbc; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #f8f9fa; --bs-btn-disabled-border-color: #f8f9fa; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnLight}`, {
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
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
	backgroundImage: "linear-gradient(#f9fafb, #f8f9fa 60%, #e9eaeb)",
})

// SOURCE CSS:
// .btn-link { --bs-btn-font-weight: 400; --bs-btn-color: var(--bs-link-color); --bs-btn-bg: transparent; --bs-btn-border-color: transparent; --bs-btn-hover-color: var(--bs-link-hover-color); --bs-btn-hover-border-color: transparent; --bs-btn-active-color: var(--bs-link-hover-color); --bs-btn-active-border-color: transparent; --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-border-color: transparent; --bs-btn-box-shadow: 0 0 0 #000; --bs-btn-focus-shadow-rgb: 49, 132, 253; text-decoration: underline; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
globalStyle(`${ceruleanScope}${btn}${btnLink}`, {
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
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-link:focus-visible { color: var(--bs-btn-color); }
globalStyle(`${ceruleanScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-link:hover { color: var(--bs-btn-hover-color); }
globalStyle(`${ceruleanScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

// SOURCE CSS:
// .btn-success { --bs-btn-color: #fff; --bs-btn-bg: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #157347; --bs-btn-hover-border-color: #146c43; --bs-btn-focus-shadow-rgb: 60, 153, 110; --bs-btn-active-color: #fff; --bs-btn-active-bg: #146c43; --bs-btn-active-border-color: #13653f; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #198754; --bs-btn-disabled-border-color: #198754; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#73a839",
		[varBsBtnBorderColor]: "#73a839",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#628f30",
		[varBsBtnHoverBorderColor]: "#5c862e",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#5c862e",
		[varBsBtnActiveBorderColor]: "#567e2b",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#73a839",
		[varBsBtnDisabledBorderColor]: "#73a839",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
	backgroundImage: "linear-gradient(#89b659, #73a839 60%, #6c9e36)",
})

// SOURCE CSS:
// .btn-warning { --bs-btn-color: #000; --bs-btn-bg: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffca2c; --bs-btn-hover-border-color: #ffc720; --bs-btn-focus-shadow-rgb: 217, 164, 6; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffcd39; --bs-btn-active-border-color: #ffc720; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #ffc107; --bs-btn-disabled-border-color: #ffc107; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${ceruleanScope}${btn}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#dd5600",
		[varBsBtnBorderColor]: "#dd5600",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#bc4900",
		[varBsBtnHoverBorderColor]: "#b14500",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#b14500",
		[varBsBtnActiveBorderColor]: "#a64100",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#dd5600",
		[varBsBtnDisabledBorderColor]: "#dd5600",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
	backgroundImage: "linear-gradient(#e27129, #dd5600 60%, #d05100)",
})

// SOURCE CSS:
// .btn-close { --bs-btn-close-color: #000; --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e"); --bs-btn-close-opacity: 0.5; --bs-btn-close-hover-opacity: 0.75; --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-btn-close-focus-opacity: 1; --bs-btn-close-disabled-opacity: 0.25; box-sizing: content-box; width: 1em; height: 1em; padding: 0.25em 0.25em; color: var(--bs-btn-close-color); background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat; filter: var(--bs-btn-close-filter); border: 0; border-radius: 0.375rem; opacity: var(--bs-btn-close-opacity); }
globalStyle(`${ceruleanScope}${alertBtnClose}`, {
	vars: {
		[varBsBtnCloseColor]: "#000",
		[varBsBtnCloseBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e\")",
		[varBsBtnCloseOpacity]: 0.5,
		[varBsBtnCloseHoverOpacity]: 0.75,
		[varBsBtnCloseFocusShadow]: "0 0 0 0.25rem rgba(47, 164, 231, 0.25)",
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
globalStyle(`${ceruleanScope}${alertBtnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: "none",
	opacity: varBsBtnCloseHoverOpacity,
})

// SOURCE CSS:
// .btn-close:focus { outline: 0; box-shadow: var(--bs-btn-close-focus-shadow); opacity: var(--bs-btn-close-focus-opacity); }
globalStyle(`${ceruleanScope}${alertBtnClose}:focus`, {
	outline: 0,
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

// SOURCE CSS:
// .btn-close:disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${ceruleanScope}${alertBtnClose}:disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .btn-close.disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${ceruleanScope}${alertBtnClose}${alertBtnCloseDisabledHook}`, {
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
globalStyle(`${ceruleanScope}${btnToolbar} ${ceruleanScope}${inputGroup}`, {
	width: "auto",
})
// SOURCE CSS:
// .btn-sm + .dropdown-toggle-split { padding-right: 0.375rem; padding-left: 0.375rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnSm} + ${ceruleanScope}${dropdownToggleSplit}`, {
	paddingRight: "0.375rem",
	paddingLeft: "0.375rem",
})
// SOURCE CSS:
// .btn-group-sm > .btn + .dropdown-toggle-split { padding-right: 0.375rem; padding-left: 0.375rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-sm" — no contract mapping
globalStyle(`.btn-group-sm > ${ceruleanScope}${btn} + ${ceruleanScope}${dropdownToggleSplit}`, {
	paddingRight: "0.375rem",
	paddingLeft: "0.375rem",
})
// SOURCE CSS:
// .btn-lg + .dropdown-toggle-split { padding-right: 0.75rem; padding-left: 0.75rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnLg} + ${ceruleanScope}${dropdownToggleSplit}`, {
	paddingRight: "0.75rem",
	paddingLeft: "0.75rem",
})
// SOURCE CSS:
// .btn-group-lg > .btn + .dropdown-toggle-split { padding-right: 0.75rem; padding-left: 0.75rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-lg" — no contract mapping
globalStyle(`.btn-group-lg > ${ceruleanScope}${btn} + ${ceruleanScope}${dropdownToggleSplit}`, {
	paddingRight: "0.75rem",
	paddingLeft: "0.75rem",
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group { width: 100%; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btnGroup}`, {
	width: "100%",
})
// SOURCE CSS:
// .btn-group-vertical > .btn:not(:first-child) { margin-top: calc(-1 * var(--bs-border-width)); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group:not(:first-child) { margin-top: calc(-1 * var(--bs-border-width)); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
// SOURCE CSS:
// .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) { border-bottom-right-radius: 0; border-bottom-left-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btn}:not(:last-child):not(${ceruleanScope}${dropdownToggle})`, {
	borderBottomRightRadius: 0,
	borderBottomLeftRadius: 0,
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group:not(:last-child) > .btn { border-bottom-right-radius: 0; border-bottom-left-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btnGroup}:not(:last-child) > ${ceruleanScope}${btn}`, {
	borderBottomRightRadius: 0,
	borderBottomLeftRadius: 0,
})
// SOURCE CSS:
// .btn-group-vertical > .btn:nth-child(n+3) { border-top-left-radius: 0; border-top-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
})
// SOURCE CSS:
// .btn-group-vertical > :not(.btn-check) + .btn { border-top-left-radius: 0; border-top-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > :not(${ceruleanScope}${btnCheck}) + ${ceruleanScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group:not(:first-child) > .btn { border-top-left-radius: 0; border-top-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${ceruleanScope}${btnGroup}:not(:first-child) > ${ceruleanScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
})
// SOURCE CSS:
// .btn .badge { position: relative; top: -1px; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btn} ${ceruleanScope}${badge}`, {
	position: "relative",
	top: "-1px",
})
// SOURCE CSS:
// .btn-primary:hover { background-image: linear-gradient(#2fa4e7, #2d9cdb 60%, #288bc4); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnPrimary}:hover`, {
	backgroundImage: "linear-gradient(#2fa4e7, #2d9cdb 60%, #288bc4)",
})
// SOURCE CSS:
// .btn-primary:active { background-image: linear-gradient(#2683b9, #2683b9 60%, #2173a2); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnPrimary}:active`, {
	backgroundImage: "linear-gradient(#2683b9, #2683b9 60%, #2173a2)",
})
// SOURCE CSS:
// .btn-check:checked + .btn-primary { background-image: linear-gradient(#2683b9, #2683b9 60%, #2173a2); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnPrimary}`, {
	backgroundImage: "linear-gradient(#2683b9, #2683b9 60%, #2173a2)",
})
// SOURCE CSS:
// .btn-secondary:hover { background-image: linear-gradient(#e9ecef, #dde0e3 60%, #c6c9cb); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnSecondary}:hover`, {
	backgroundImage: "linear-gradient(#e9ecef, #dde0e3 60%, #c6c9cb)",
})
// SOURCE CSS:
// .btn-secondary:active { background-image: linear-gradient(#babdbf, #babdbf 60%, #a3a5a7); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnSecondary}:active`, {
	backgroundImage: "linear-gradient(#babdbf, #babdbf 60%, #a3a5a7)",
})
// SOURCE CSS:
// .btn-check:checked + .btn-secondary { background-image: linear-gradient(#babdbf, #babdbf 60%, #a3a5a7); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnSecondary}`, {
	backgroundImage: "linear-gradient(#babdbf, #babdbf 60%, #a3a5a7)",
})
// SOURCE CSS:
// .btn-success:hover { background-image: linear-gradient(#73a839, #6da036 60%, #628f30); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnSuccess}:hover`, {
	backgroundImage: "linear-gradient(#73a839, #6da036 60%, #628f30)",
})
// SOURCE CSS:
// .btn-success:active { background-image: linear-gradient(#5c862e, #5c862e 60%, #517628); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnSuccess}:active`, {
	backgroundImage: "linear-gradient(#5c862e, #5c862e 60%, #517628)",
})
// SOURCE CSS:
// .btn-check:checked + .btn-success { background-image: linear-gradient(#5c862e, #5c862e 60%, #517628); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnSuccess}`, {
	backgroundImage: "linear-gradient(#5c862e, #5c862e 60%, #517628)",
})
// SOURCE CSS:
// .btn-info:hover { background-image: linear-gradient(#033c73, #03396d 60%, #033362); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnInfo}:hover`, {
	backgroundImage: "linear-gradient(#033c73, #03396d 60%, #033362)",
})
// SOURCE CSS:
// .btn-info:active { background-image: linear-gradient(#02305c, #02305c 60%, #022a51); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnInfo}:active`, {
	backgroundImage: "linear-gradient(#02305c, #02305c 60%, #022a51)",
})
// SOURCE CSS:
// .btn-check:checked + .btn-info { background-image: linear-gradient(#02305c, #02305c 60%, #022a51); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnInfo}`, {
	backgroundImage: "linear-gradient(#02305c, #02305c 60%, #022a51)",
})
// SOURCE CSS:
// .btn-warning:hover { background-image: linear-gradient(#dd5600, #d25200 60%, #bc4900); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnWarning}:hover`, {
	backgroundImage: "linear-gradient(#dd5600, #d25200 60%, #bc4900)",
})
// SOURCE CSS:
// .btn-warning:active { background-image: linear-gradient(#b14500, #b14500 60%, #9b3c00); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnWarning}:active`, {
	backgroundImage: "linear-gradient(#b14500, #b14500 60%, #9b3c00)",
})
// SOURCE CSS:
// .btn-check:checked + .btn-warning { background-image: linear-gradient(#b14500, #b14500 60%, #9b3c00); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnWarning}`, {
	backgroundImage: "linear-gradient(#b14500, #b14500 60%, #9b3c00)",
})
// SOURCE CSS:
// .btn-danger:hover { background-image: linear-gradient(#c71c22, #bd1b20 60%, #a9181d); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnDanger}:hover`, {
	backgroundImage: "linear-gradient(#c71c22, #bd1b20 60%, #a9181d)",
})
// SOURCE CSS:
// .btn-danger:active { background-image: linear-gradient(#9f161b, #9f161b 60%, #8b1418); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnDanger}:active`, {
	backgroundImage: "linear-gradient(#9f161b, #9f161b 60%, #8b1418)",
})
// SOURCE CSS:
// .btn-check:checked + .btn-danger { background-image: linear-gradient(#9f161b, #9f161b 60%, #8b1418); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnDanger}`, {
	backgroundImage: "linear-gradient(#9f161b, #9f161b 60%, #8b1418)",
})
// SOURCE CSS:
// .btn-light:hover { background-image: linear-gradient(#f8f9fa, #ecedee 60%, #d3d4d5); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnLight}:hover`, {
	backgroundImage: "linear-gradient(#f8f9fa, #ecedee 60%, #d3d4d5)",
})
// SOURCE CSS:
// .btn-light:active { background-image: linear-gradient(#c6c7c8, #c6c7c8 60%, #aeaeaf); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnLight}:active`, {
	backgroundImage: "linear-gradient(#c6c7c8, #c6c7c8 60%, #aeaeaf)",
})
// SOURCE CSS:
// .btn-check:checked + .btn-light { background-image: linear-gradient(#c6c7c8, #c6c7c8 60%, #aeaeaf); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnLight}`, {
	backgroundImage: "linear-gradient(#c6c7c8, #c6c7c8 60%, #aeaeaf)",
})
// SOURCE CSS:
// .btn-dark:hover { background-image: linear-gradient(#343a40, #31373d 60%, #2c3136); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnDark}:hover`, {
	backgroundImage: "linear-gradient(#343a40, #31373d 60%, #2c3136)",
})
// SOURCE CSS:
// .btn-dark:active { background-image: linear-gradient(#2a2e33, #2a2e33 60%, #24292d); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnDark}:active`, {
	backgroundImage: "linear-gradient(#2a2e33, #2a2e33 60%, #24292d)",
})
// SOURCE CSS:
// .btn-check:checked + .btn-dark { background-image: linear-gradient(#2a2e33, #2a2e33 60%, #24292d); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnDark}`, {
	backgroundImage: "linear-gradient(#2a2e33, #2a2e33 60%, #24292d)",
})

// ── Theme paint footers (cascade after variant blocks) ─────────────────────────
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btn}`, {
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btn}:hover`, {
	borderColor: varBsBtnHoverBorderColor,
})
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${btn}${btnDisabledHook}`, {
	borderColor: varBsBtnDisabledBorderColor,
})
