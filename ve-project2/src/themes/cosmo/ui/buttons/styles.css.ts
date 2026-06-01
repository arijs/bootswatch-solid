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
import { cosmoScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/buttons
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// button { border-radius: 0; margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; appearance: button; }
globalStyle(`${cosmoScope}${inputFontFamily}`, {
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
globalStyle(`${cosmoScope}${inputFontFamily}:focus:not(:focus-visible)`, {
	outline: 0,
})

// SOURCE CSS:
// input { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
globalStyle(`${cosmoScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// select { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; }
globalStyle(`${cosmoScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
})

// SOURCE CSS:
// optgroup { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
globalStyle(`${cosmoScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
globalStyle(`${cosmoScope}${inputFontFamily}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// button:not(:disabled) { cursor: pointer; }
globalStyle(`${cosmoScope}${inputFontFamily}:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .btn { --bs-btn-padding-x: 0.75rem; --bs-btn-padding-y: 0.375rem; --bs-btn-font-family: ; --bs-btn-font-size: 1rem; --bs-btn-font-weight: 400; --bs-btn-line-height: 1.5; --bs-btn-color: var(--bs-body-color); --bs-btn-bg: transparent; --bs-btn-border-width: var(--bs-border-width); --bs-btn-border-color: transparent; --bs-btn-border-radius: var(--bs-border-radius); --bs-btn-hover-border-color: transparent; --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); --bs-btn-disabled-opacity: 0.65; --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5); display: inline-block; padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x); font-family: var(--bs-btn-font-family); font-size: var(--bs-btn-font-size); font-weight: var(--bs-btn-font-weight); line-height: var(--bs-btn-line-height); color: var(--bs-btn-color); text-align: center; text-decoration: none; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; user-select: none; border: var(--bs-btn-border-width) solid var(--bs-btn-border-color); border-radius: var(--bs-btn-border-radius); background-color: var(--bs-btn-bg); transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${cosmoScope}${btn}`, {
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
globalStyle(`${cosmoScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS:
// .btn:focus-visible { color: var(--bs-btn-hover-color); background-color: var(--bs-btn-hover-bg); border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cosmoScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked + .btn { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${cosmoScope}${btnCheck}:checked + ${cosmoScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`:not(${cosmoScope}${btnCheck}) + ${cosmoScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn:first-child:active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${cosmoScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.active { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${cosmoScope}${btn}${btnActiveHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); }
globalStyle(`${cosmoScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

// SOURCE CSS:
// .btn-check:checked + .btn:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cosmoScope}${btnCheck}:checked + ${cosmoScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// :not(.btn-check) + .btn:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`:not(${cosmoScope}${btnCheck}) + ${cosmoScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:first-child:active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cosmoScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.active:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cosmoScope}${btn}${btnActiveHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn.show:focus-visible { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cosmoScope}${btn}${btnShowHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${cosmoScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// .btn.disabled { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
globalStyle(`${cosmoScope}${btn}${btnDisabledHook}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS:
// fieldset:disabled .btn { color: var(--bs-btn-disabled-color); pointer-events: none; background-color: var(--bs-btn-disabled-bg); border-color: var(--bs-btn-disabled-border-color); opacity: var(--bs-btn-disabled-opacity); }
// [UNMAPPED_SELECTOR] element selector "fieldset:disabled" — map to a contract class
globalStyle(`fieldset:disabled ${cosmoScope}${btn}`, {
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
globalStyle(`${cosmoScope}${btn}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#373a3c",
		[varBsBtnBorderColor]: "#373a3c",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#2f3133",
		[varBsBtnHoverBorderColor]: "#2c2e30",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#2c2e30",
		[varBsBtnActiveBorderColor]: "#292c2d",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#373a3c",
		[varBsBtnDisabledBorderColor]: "#373a3c",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-group { position: relative; display: inline-flex; vertical-align: middle; border-radius: var(--bs-border-radius); }
globalStyle(`${cosmoScope}${btnGroup}`, {
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
	borderRadius: varBsBorderRadius,
})

// SOURCE CSS:
// .btn-group > .btn { position: relative; flex: 1 1 auto; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
})

// SOURCE CSS:
// .btn-group-vertical > .btn { position: relative; flex: 1 1 auto; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btn}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "100%",
})

// SOURCE CSS:
// .btn-group > .btn-check:checked + .btn { z-index: 1; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btnCheck}:checked + ${cosmoScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn-check:focus + .btn { z-index: 1; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btnCheck}:focus + ${cosmoScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:hover { z-index: 1; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:focus { z-index: 1; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn:active { z-index: 1; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group > .btn.active { z-index: 1; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:checked + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btnCheck}:checked + ${cosmoScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn-check:focus + .btn { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btnCheck}:focus + ${cosmoScope}${btn}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:hover { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btn}:hover`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:focus { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btn}:focus`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn:active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btn}:active`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-group-vertical > .btn.active { z-index: 1; }
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btn}${btnActiveHook}`, {
	zIndex: 1,
})

// SOURCE CSS:
// .btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
globalStyle(`${cosmoScope}${btnToolbar}`, {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "flex-start",
})

// SOURCE CSS:
// .btn-group > :not(.btn-check:first-child) + .btn { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${cosmoScope}${btnGroup} > :not(${cosmoScope}${btnCheck}:first-child) + ${cosmoScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

// SOURCE CSS:
// .btn-group > .btn:not(:last-child):not(.dropdown-toggle) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}:not(:last-child):not(${cosmoScope}${dropdownToggle})`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
})

// SOURCE CSS:
// .btn-group > .btn.dropdown-toggle-split:first-child { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:last-child) > .btn { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btnGroup}:not(:last-child) > ${cosmoScope}${btn}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
})

// SOURCE CSS:
// .btn-group > .btn:nth-child(n+3) { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
})

// SOURCE CSS:
// .btn-group > :not(.btn-check) + .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${cosmoScope}${btnGroup} > :not(${cosmoScope}${btnCheck}) + ${cosmoScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
})

// SOURCE CSS:
// .btn-group > .btn-group:not(:first-child) > .btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btnGroup}:not(:first-child) > ${cosmoScope}${btn}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
})

// SOURCE CSS:
// .btn-outline-danger { --bs-btn-color: #dc3545; --bs-btn-border-color: #dc3545; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #dc3545; --bs-btn-hover-border-color: #dc3545; --bs-btn-focus-shadow-rgb: 220, 53, 69; --bs-btn-active-color: #fff; --bs-btn-active-bg: #dc3545; --bs-btn-active-border-color: #dc3545; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #dc3545; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #dc3545; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: "#ff0039",
		[varBsBtnBorderColor]: "#ff0039",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#ff0039",
		[varBsBtnHoverBorderColor]: "#ff0039",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#ff0039",
		[varBsBtnActiveBorderColor]: "#ff0039",
		[varBsBtnDisabledColor]: "#ff0039",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#ff0039",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-dark { --bs-btn-color: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #212529; --bs-btn-hover-border-color: #212529; --bs-btn-focus-shadow-rgb: 33, 37, 41; --bs-btn-active-color: #fff; --bs-btn-active-bg: #212529; --bs-btn-active-border-color: #212529; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #212529; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #212529; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: "#373a3c",
		[varBsBtnBorderColor]: "#373a3c",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#373a3c",
		[varBsBtnHoverBorderColor]: "#373a3c",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#373a3c",
		[varBsBtnActiveBorderColor]: "#373a3c",
		[varBsBtnDisabledColor]: "#373a3c",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#373a3c",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-info { --bs-btn-color: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #0dcaf0; --bs-btn-hover-border-color: #0dcaf0; --bs-btn-focus-shadow-rgb: 13, 202, 240; --bs-btn-active-color: #000; --bs-btn-active-bg: #0dcaf0; --bs-btn-active-border-color: #0dcaf0; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0dcaf0; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0dcaf0; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: "#9954bb",
		[varBsBtnBorderColor]: "#9954bb",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#9954bb",
		[varBsBtnHoverBorderColor]: "#9954bb",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#9954bb",
		[varBsBtnActiveBorderColor]: "#9954bb",
		[varBsBtnDisabledColor]: "#9954bb",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#9954bb",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-light { --bs-btn-color: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #f8f9fa; --bs-btn-hover-border-color: #f8f9fa; --bs-btn-focus-shadow-rgb: 248, 249, 250; --bs-btn-active-color: #000; --bs-btn-active-bg: #f8f9fa; --bs-btn-active-border-color: #f8f9fa; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #f8f9fa; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #f8f9fa; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnOutlineLight}`, {
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
globalStyle(`${cosmoScope}${btn}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: "#2780e3",
		[varBsBtnBorderColor]: "#2780e3",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#2780e3",
		[varBsBtnHoverBorderColor]: "#2780e3",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#2780e3",
		[varBsBtnActiveBorderColor]: "#2780e3",
		[varBsBtnDisabledColor]: "#2780e3",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#2780e3",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-secondary { --bs-btn-color: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #6c757d; --bs-btn-hover-border-color: #6c757d; --bs-btn-focus-shadow-rgb: 108, 117, 125; --bs-btn-active-color: #fff; --bs-btn-active-bg: #6c757d; --bs-btn-active-border-color: #6c757d; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #6c757d; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: "#373a3c",
		[varBsBtnBorderColor]: "#373a3c",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#373a3c",
		[varBsBtnHoverBorderColor]: "#373a3c",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#373a3c",
		[varBsBtnActiveBorderColor]: "#373a3c",
		[varBsBtnDisabledColor]: "#373a3c",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#373a3c",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-success { --bs-btn-color: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #198754; --bs-btn-hover-border-color: #198754; --bs-btn-focus-shadow-rgb: 25, 135, 84; --bs-btn-active-color: #fff; --bs-btn-active-bg: #198754; --bs-btn-active-border-color: #198754; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #198754; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #198754; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: "#3fb618",
		[varBsBtnBorderColor]: "#3fb618",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#3fb618",
		[varBsBtnHoverBorderColor]: "#3fb618",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#3fb618",
		[varBsBtnActiveBorderColor]: "#3fb618",
		[varBsBtnDisabledColor]: "#3fb618",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#3fb618",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-outline-warning { --bs-btn-color: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffc107; --bs-btn-hover-border-color: #ffc107; --bs-btn-focus-shadow-rgb: 255, 193, 7; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffc107; --bs-btn-active-border-color: #ffc107; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #ffc107; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #ffc107; --bs-gradient: none; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: "#ff7518",
		[varBsBtnBorderColor]: "#ff7518",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#ff7518",
		[varBsBtnHoverBorderColor]: "#ff7518",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#ff7518",
		[varBsBtnActiveBorderColor]: "#ff7518",
		[varBsBtnDisabledColor]: "#ff7518",
		[varBsBtnDisabledBg]: "transparent",
		[varBsBtnDisabledBorderColor]: "#ff7518",
		[varBsGradient]: "none",
	},
})

// SOURCE CSS:
// .btn-check { position: absolute; clip: rect(0, 0, 0, 0); pointer-events: none; }
globalStyle(`${cosmoScope}${btnCheck}`, {
	position: "absolute",
	clip: "rect(0, 0, 0, 0)",
	pointerEvents: "none",
})

// SOURCE CSS:
// .btn-check[disabled] + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${cosmoScope}${btnCheck}[disabled] + ${cosmoScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check:disabled + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${cosmoScope}${btnCheck}:disabled + ${cosmoScope}${btn}`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.65,
})

// SOURCE CSS:
// .btn-check + .btn:hover { color: var(--bs-btn-color); background-color: var(--bs-btn-bg); border-color: var(--bs-btn-border-color); }
globalStyle(`${cosmoScope}${btnCheck} + ${cosmoScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

// SOURCE CSS:
// .btn-check:focus-visible + .btn { border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cosmoScope}${btnCheck}:focus-visible + ${cosmoScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked:focus-visible + .btn { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${cosmoScope}${btnCheck}:checked:focus-visible + ${cosmoScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0b5ed7; --bs-btn-hover-border-color: #0a58ca; --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#2780e3",
		[varBsBtnBorderColor]: "#2780e3",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#216dc1",
		[varBsBtnHoverBorderColor]: "#1f66b6",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#1f66b6",
		[varBsBtnActiveBorderColor]: "#1d60aa",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#2780e3",
		[varBsBtnDisabledBorderColor]: "#2780e3",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-lg { --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
globalStyle(`${cosmoScope}${btn}${btnLg}`, {
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
globalStyle(`.btn-group-lg > ${cosmoScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: "0.5rem",
		[varBsBtnPaddingX]: "1rem",
		[varBsBtnFontSize]: "1.25rem",
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .btn-sm { --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
globalStyle(`${cosmoScope}${btn}${btnSm}`, {
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
globalStyle(`.btn-group-sm > ${cosmoScope}${btn}`, {
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
globalStyle(`${cosmoScope}${btn}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#ff0039",
		[varBsBtnBorderColor]: "#ff0039",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#d90030",
		[varBsBtnHoverBorderColor]: "#cc002e",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#cc002e",
		[varBsBtnActiveBorderColor]: "#bf002b",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#ff0039",
		[varBsBtnDisabledBorderColor]: "#ff0039",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-dark { --bs-btn-color: #fff; --bs-btn-bg: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #424649; --bs-btn-hover-border-color: #373b3e; --bs-btn-focus-shadow-rgb: 66, 70, 73; --bs-btn-active-color: #fff; --bs-btn-active-bg: #4d5154; --bs-btn-active-border-color: #373b3e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #212529; --bs-btn-disabled-border-color: #212529; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnDark}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#373a3c",
		[varBsBtnBorderColor]: "#373a3c",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#555859",
		[varBsBtnHoverBorderColor]: "#4b4e50",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#5f6163",
		[varBsBtnActiveBorderColor]: "#4b4e50",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#373a3c",
		[varBsBtnDisabledBorderColor]: "#373a3c",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-info { --bs-btn-color: #000; --bs-btn-bg: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #31d2f2; --bs-btn-hover-border-color: #25cff2; --bs-btn-focus-shadow-rgb: 11, 172, 204; --bs-btn-active-color: #000; --bs-btn-active-bg: #3dd5f3; --bs-btn-active-border-color: #25cff2; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #0dcaf0; --bs-btn-disabled-border-color: #0dcaf0; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#9954bb",
		[varBsBtnBorderColor]: "#9954bb",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#82479f",
		[varBsBtnHoverBorderColor]: "#7a4396",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#7a4396",
		[varBsBtnActiveBorderColor]: "#733f8c",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#9954bb",
		[varBsBtnDisabledBorderColor]: "#9954bb",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-light { --bs-btn-color: #000; --bs-btn-bg: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #d3d4d5; --bs-btn-hover-border-color: #c6c7c8; --bs-btn-focus-shadow-rgb: 211, 212, 213; --bs-btn-active-color: #000; --bs-btn-active-bg: #c6c7c8; --bs-btn-active-border-color: #babbbc; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #f8f9fa; --bs-btn-disabled-border-color: #f8f9fa; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnLight}`, {
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
})

// SOURCE CSS:
// .btn-link { --bs-btn-font-weight: 400; --bs-btn-color: var(--bs-link-color); --bs-btn-bg: transparent; --bs-btn-border-color: transparent; --bs-btn-hover-color: var(--bs-link-hover-color); --bs-btn-hover-border-color: transparent; --bs-btn-active-color: var(--bs-link-hover-color); --bs-btn-active-border-color: transparent; --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-border-color: transparent; --bs-btn-box-shadow: 0 0 0 #000; --bs-btn-focus-shadow-rgb: 49, 132, 253; text-decoration: underline; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
globalStyle(`${cosmoScope}${btn}${btnLink}`, {
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
globalStyle(`${cosmoScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-link:hover { color: var(--bs-btn-hover-color); }
globalStyle(`${cosmoScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

// SOURCE CSS:
// .btn-success { --bs-btn-color: #fff; --bs-btn-bg: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #157347; --bs-btn-hover-border-color: #146c43; --bs-btn-focus-shadow-rgb: 60, 153, 110; --bs-btn-active-color: #fff; --bs-btn-active-bg: #146c43; --bs-btn-active-border-color: #13653f; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #198754; --bs-btn-disabled-border-color: #198754; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#3fb618",
		[varBsBtnBorderColor]: "#3fb618",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#369b14",
		[varBsBtnHoverBorderColor]: "#329213",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#329213",
		[varBsBtnActiveBorderColor]: "#2f8912",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#3fb618",
		[varBsBtnDisabledBorderColor]: "#3fb618",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-warning { --bs-btn-color: #000; --bs-btn-bg: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffca2c; --bs-btn-hover-border-color: #ffc720; --bs-btn-focus-shadow-rgb: 217, 164, 6; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffcd39; --bs-btn-active-border-color: #ffc720; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #ffc107; --bs-btn-disabled-border-color: #ffc107; }
// [UNMAPPED_VAR] --bs-btn-focus-shadow-rgb
// [UNMAPPED_VAR] --bs-btn-active-shadow
globalStyle(`${cosmoScope}${btn}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: "#fff",
		[varBsBtnBg]: "#ff7518",
		[varBsBtnBorderColor]: "#ff7518",
		[varBsBtnHoverColor]: "#fff",
		[varBsBtnHoverBg]: "#d96314",
		[varBsBtnHoverBorderColor]: "#cc5e13",
		[varBsBtnActiveColor]: "#fff",
		[varBsBtnActiveBg]: "#cc5e13",
		[varBsBtnActiveBorderColor]: "#bf5812",
		[varBsBtnDisabledColor]: "#fff",
		[varBsBtnDisabledBg]: "#ff7518",
		[varBsBtnDisabledBorderColor]: "#ff7518",
	},
	backgroundColor: varBsBtnBg,
	color: varBsBtnColor,
})

// SOURCE CSS:
// .btn-close { --bs-btn-close-color: #000; --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e"); --bs-btn-close-opacity: 0.5; --bs-btn-close-hover-opacity: 0.75; --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-btn-close-focus-opacity: 1; --bs-btn-close-disabled-opacity: 0.25; box-sizing: content-box; width: 1em; height: 1em; padding: 0.25em 0.25em; color: var(--bs-btn-close-color); background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat; filter: var(--bs-btn-close-filter); border: 0; border-radius: 0.375rem; opacity: var(--bs-btn-close-opacity); }
globalStyle(`${cosmoScope}${alertBtnClose}`, {
	vars: {
		[varBsBtnCloseColor]: "#000",
		[varBsBtnCloseBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e\")",
		[varBsBtnCloseOpacity]: 0.5,
		[varBsBtnCloseHoverOpacity]: 0.75,
		[varBsBtnCloseFocusShadow]: "0 0 0 0.25rem rgba(39, 128, 227, 0.25)",
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
globalStyle(`${cosmoScope}${alertBtnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: "none",
	opacity: varBsBtnCloseHoverOpacity,
})

// SOURCE CSS:
// .btn-close:focus { outline: 0; box-shadow: var(--bs-btn-close-focus-shadow); opacity: var(--bs-btn-close-focus-opacity); }
globalStyle(`${cosmoScope}${alertBtnClose}:focus`, {
	outline: 0,
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

// SOURCE CSS:
// .btn-close:disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${cosmoScope}${alertBtnClose}:disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .btn-close.disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${cosmoScope}${alertBtnClose}${alertBtnCloseDisabledHook}`, {
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
globalStyle(`${cosmoScope}${btnToolbar} ${cosmoScope}${inputGroup}`, {
	width: "auto",
})
// SOURCE CSS:
// .btn-sm + .dropdown-toggle-split { padding-right: 0.375rem; padding-left: 0.375rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cosmoScope}${btnSm} + ${cosmoScope}${dropdownToggleSplit}`, {
	paddingRight: "0.375rem",
	paddingLeft: "0.375rem",
})
// SOURCE CSS:
// .btn-group-sm > .btn + .dropdown-toggle-split { padding-right: 0.375rem; padding-left: 0.375rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-sm" — no contract mapping
globalStyle(`.btn-group-sm > ${cosmoScope}${btn} + ${cosmoScope}${dropdownToggleSplit}`, {
	paddingRight: "0.375rem",
	paddingLeft: "0.375rem",
})
// SOURCE CSS:
// .btn-lg + .dropdown-toggle-split { padding-right: 0.75rem; padding-left: 0.75rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cosmoScope}${btnLg} + ${cosmoScope}${dropdownToggleSplit}`, {
	paddingRight: "0.75rem",
	paddingLeft: "0.75rem",
})
// SOURCE CSS:
// .btn-group-lg > .btn + .dropdown-toggle-split { padding-right: 0.75rem; padding-left: 0.75rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-lg" — no contract mapping
globalStyle(`.btn-group-lg > ${cosmoScope}${btn} + ${cosmoScope}${dropdownToggleSplit}`, {
	paddingRight: "0.75rem",
	paddingLeft: "0.75rem",
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group { width: 100%; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btnGroup}`, {
	width: "100%",
})
// SOURCE CSS:
// .btn-group-vertical > .btn:not(:first-child) { margin-top: calc(-1 * var(--bs-border-width)); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
// SOURCE CSS:
// .btn-group-vertical > .btn-group:not(:first-child) { margin-top: calc(-1 * var(--bs-border-width)); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".btn-group-vertical" — no contract mapping
globalStyle(`.btn-group-vertical > ${cosmoScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
// SOURCE CSS:
// .btn .badge { position: relative; top: -1px; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cosmoScope}${btn} ${cosmoScope}${badge}`, {
	position: "relative",
	top: "-1px",
})

// ── Theme paint footers (cascade after variant blocks) ─────────────────────────
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cosmoScope}${btn}`, {
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cosmoScope}${btn}:hover`, {
	borderColor: varBsBtnHoverBorderColor,
})
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cosmoScope}${btn}${btnDisabledHook}`, {
	borderColor: varBsBtnDisabledBorderColor,
})
