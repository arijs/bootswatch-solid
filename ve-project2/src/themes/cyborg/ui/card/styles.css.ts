import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsCardHeight,
	varBsEmphasisColor,
	varBsGutterX,
	varBsGutterY,
	varBsSecondaryBg,
	varBsSecondaryColor,
	varBsTertiaryBg,
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
	varBsCardBg,
	varBsCardBorderColor,
	varBsCardBorderRadius,
	varBsCardBorderWidth,
	varBsCardBoxShadow,
	varBsCardCapBg,
	varBsCardCapColor,
	varBsCardCapPaddingX,
	varBsCardCapPaddingY,
	varBsCardColor,
	varBsCardGroupMargin,
	varBsCardImgOverlayPadding,
	varBsCardInnerBorderRadius,
	varBsCardSpacerX,
	varBsCardSpacerY,
	varBsCardSubtitleColor,
	varBsCardTitleColor,
	varBsCardTitleSpacerY,
} from '../../../../theme-contract/ui/card/_vars.css'
import {
	varBsListGroupActionActiveBg,
	varBsListGroupActionActiveColor,
	varBsListGroupActionColor,
	varBsListGroupActionHoverBg,
	varBsListGroupActionHoverColor,
	varBsListGroupActiveBg,
	varBsListGroupActiveBorderColor,
	varBsListGroupActiveColor,
	varBsListGroupBg,
	varBsListGroupBorderColor,
	varBsListGroupBorderRadius,
	varBsListGroupBorderWidth,
	varBsListGroupColor,
	varBsListGroupDisabledBg,
	varBsListGroupDisabledColor,
	varBsListGroupItemPaddingX,
	varBsListGroupItemPaddingY,
} from '../../../../theme-contract/ui/list-group/_vars.css'
import {
	horizontalRule,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	fieldset,
} from '../../../../theme-contract/forms/contract.css'
import {
	btn,
	btnActiveHook,
	btnCheck,
	btnDisabledHook,
	btnPrimary,
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	cardHeaderTabs,
} from '../../../../theme-contract/ui/card-tabs/contract.css'
import {
	card,
	cardBody,
	cardFooter,
	cardHeader,
	cardImg,
	cardImgBottom,
	cardImgTop,
	cardLink,
	cardSubtitle,
	cardText,
	cardTitle,
} from '../../../../theme-contract/ui/card/contract.css'
import {
	btnShowHook,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	listGroup,
	listGroupFlush,
	listGroupItem,
	listGroupItemDisabled,
} from '../../../../theme-contract/ui/list-group/contract.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	nav,
	navLink,
	navLinkActive,
	navTabs,
} from '../../../../theme-contract/ui/navs/contract.css'
import {
	col,
	g0,
	g4,
	overflowXHidden,
	positionRelative,
	row,
	rowCols1,
	textMuted,
} from '../../../../theme-contract/utilities/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/card
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// .row { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; display: flex; flex-wrap: wrap; margin-top: calc(-1 * var(--bs-gutter-y)); margin-right: calc(-0.5 * var(--bs-gutter-x)); margin-left: calc(-0.5 * var(--bs-gutter-x)); }
globalStyle(`${cyborgScope}${row}`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	display: "flex",
	flexWrap: "wrap",
	marginTop: `calc(-1 * ${varBsGutterY})`,
	marginRight: `calc(-0.5 * ${varBsGutterX})`,
	marginLeft: `calc(-0.5 * ${varBsGutterX})`,
})

// SOURCE CSS:
// .row > * { flex-shrink: 0; width: 100%; max-width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-top: var(--bs-gutter-y); }
globalStyle(`${cyborgScope}${row} > ${cyborgScope}${col}`, {
	flexShrink: 0,
	width: "100%",
	maxWidth: "100%",
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

// SOURCE CSS:
// .col { flex: 1 0 0; }
globalStyle(`${cyborgScope}${col}`, {
	flex: "1 0 0",
})

// SOURCE CSS:
// .row-cols-1 > * { flex: 0 0 auto; width: 100%; }
globalStyle(`${cyborgScope}${rowCols1} > ${cyborgScope}${col}`, {
	flex: "0 0 auto",
	width: "100%",
})

// SOURCE CSS:
// .g-0 { --bs-gutter-x: 0; --bs-gutter-y: 0; }
globalStyle(`${cyborgScope}${g0}`, {
	vars: {
		[varBsGutterX]: 0,
		[varBsGutterY]: 0,
	},
})

// SOURCE CSS:
// .g-4 { --bs-gutter-x: 1.5rem; --bs-gutter-y: 1.5rem; }
globalStyle(`${cyborgScope}${g4}`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: "1.5rem",
	},
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
// .card { --bs-card-spacer-y: 1rem; --bs-card-spacer-x: 1rem; --bs-card-title-spacer-y: 0.5rem; --bs-card-title-color: ; --bs-card-subtitle-color: ; --bs-card-border-width: var(--bs-border-width); --bs-card-border-color: var(--bs-border-color-translucent); --bs-card-border-radius: var(--bs-border-radius); --bs-card-box-shadow: ; --bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width))); --bs-card-cap-padding-y: 0.5rem; --bs-card-cap-padding-x: 1rem; --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03); --bs-card-cap-color: ; --bs-card-height: ; --bs-card-color: ; --bs-card-bg: var(--bs-body-bg); --bs-card-img-overlay-padding: 1rem; --bs-card-group-margin: 0.75rem; position: relative; display: flex; flex-direction: column; min-width: 0; height: var(--bs-card-height); color: var(--bs-body-color); word-wrap: break-word; background-color: var(--bs-card-bg); background-clip: border-box; border: var(--bs-card-border-width) solid var(--bs-card-border-color); border-radius: var(--bs-card-border-radius); }
// [UNMAPPED_VAR] --bs-card-height
globalStyle(`${cyborgScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: "1rem",
		[varBsCardSpacerX]: "1rem",
		[varBsCardTitleSpacerY]: "0.5rem",
		[varBsCardTitleColor]: "",
		[varBsCardSubtitleColor]: "",
		[varBsCardBorderWidth]: varBsBorderWidth,
		[varBsCardBorderColor]: varBsBorderColorTranslucent,
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardBoxShadow]: "",
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
		[varBsCardCapPaddingY]: "0.5rem",
		[varBsCardCapPaddingX]: "1rem",
		[varBsCardCapBg]: `rgba(${varBsBodyColorRgb}, 0.03)`,
		[varBsCardCapColor]: "",
		[varBsCardColor]: "",
		[varBsCardBg]: "#282828",
		[varBsCardImgOverlayPadding]: "1rem",
		[varBsCardGroupMargin]: "0.75rem",
	},
	position: "relative",
	display: "flex",
	flexDirection: "column",
	minWidth: 0,
	height: varBsCardHeight,
	color: varBsBodyColor,
	wordWrap: "break-word",
	backgroundColor: varBsCardBg,
	backgroundClip: "border-box",
	border: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
	borderRadius: varBsCardBorderRadius,
})

// SOURCE CSS:
// .card > .list-group { border-top: inherit; border-bottom: inherit; }
globalStyle(`${cyborgScope}${card} > ${cyborgScope}${listGroup}`, {
	borderTop: "inherit",
	borderBottom: "inherit",
})

// SOURCE CSS:
// .card > .list-group:first-child { border-top-width: 0; border-top-left-radius: var(--bs-card-inner-border-radius); border-top-right-radius: var(--bs-card-inner-border-radius); }
globalStyle(`${cyborgScope}${card} > ${cyborgScope}${listGroup}:first-child`, {
	borderTopWidth: 0,
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

// SOURCE CSS:
// .card > .list-group:last-child { border-bottom-width: 0; border-bottom-right-radius: var(--bs-card-inner-border-radius); border-bottom-left-radius: var(--bs-card-inner-border-radius); }
globalStyle(`${cyborgScope}${card} > ${cyborgScope}${listGroup}:last-child`, {
	borderBottomWidth: 0,
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

// SOURCE CSS:
// .card-body { flex: 1 1 auto; padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x); color: var(--bs-card-color); }
globalStyle(`${cyborgScope}${cardBody}`, {
	flex: "1 1 auto",
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

// SOURCE CSS:
// .card-title { margin-bottom: var(--bs-card-title-spacer-y); color: var(--bs-card-title-color); }
globalStyle(`${cyborgScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

// SOURCE CSS:
// .card-text:last-child { margin-bottom: 0; }
globalStyle(`${cyborgScope}${cardText}:last-child`, {
	marginBottom: 0,
})

// SOURCE CSS:
// .card-link + .card-link { margin-left: var(--bs-card-spacer-x); }
globalStyle(`${cyborgScope}${cardLink} + ${cyborgScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

// SOURCE CSS:
// .card-header { padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x); margin-bottom: 0; color: var(--bs-card-cap-color); background-color: var(--bs-card-cap-bg); border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color); }
globalStyle(`${cyborgScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: 0,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

// SOURCE CSS:
// .card-header:first-child { border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0; }
globalStyle(`${cyborgScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

// SOURCE CSS:
// .card-footer { padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x); color: var(--bs-card-cap-color); background-color: var(--bs-card-cap-bg); border-top: var(--bs-card-border-width) solid var(--bs-card-border-color); }
globalStyle(`${cyborgScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

// SOURCE CSS:
// .card-footer:last-child { border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius); }
globalStyle(`${cyborgScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

// SOURCE CSS:
// .card-img { width: 100%; border-top-left-radius: var(--bs-card-inner-border-radius); border-top-right-radius: var(--bs-card-inner-border-radius); }
globalStyle(`${cyborgScope}${cardImg}`, {
	width: "100%",
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

// SOURCE CSS:
// .card-img-top { width: 100%; border-top-left-radius: var(--bs-card-inner-border-radius); border-top-right-radius: var(--bs-card-inner-border-radius); }
globalStyle(`${cyborgScope}${cardImgTop}`, {
	width: "100%",
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

// SOURCE CSS:
// .card-img-bottom { width: 100%; }
globalStyle(`${cyborgScope}${cardImgBottom}`, {
	width: "100%",
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

// SOURCE CSS:
// .list-group { --bs-list-group-color: var(--bs-body-color); --bs-list-group-bg: var(--bs-body-bg); --bs-list-group-border-color: var(--bs-border-color); --bs-list-group-border-width: var(--bs-border-width); --bs-list-group-border-radius: var(--bs-border-radius); --bs-list-group-item-padding-x: 1rem; --bs-list-group-item-padding-y: 0.5rem; --bs-list-group-action-color: var(--bs-secondary-color); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-tertiary-bg); --bs-list-group-action-active-color: var(--bs-body-color); --bs-list-group-action-active-bg: var(--bs-secondary-bg); --bs-list-group-disabled-color: var(--bs-secondary-color); --bs-list-group-disabled-bg: var(--bs-body-bg); --bs-list-group-active-color: #fff; --bs-list-group-active-bg: #0d6efd; --bs-list-group-active-border-color: #0d6efd; display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; border-radius: var(--bs-list-group-border-radius); }
globalStyle(`${cyborgScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: varBsBodyColor,
		[varBsListGroupBg]: varBsBodyBg,
		[varBsListGroupBorderColor]: varBsBorderColor,
		[varBsListGroupBorderWidth]: varBsBorderWidth,
		[varBsListGroupBorderRadius]: varBsBorderRadius,
		[varBsListGroupItemPaddingX]: "1rem",
		[varBsListGroupItemPaddingY]: "0.5rem",
		[varBsListGroupActionColor]: varBsSecondaryColor,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsTertiaryBg,
		[varBsListGroupActionActiveColor]: varBsBodyColor,
		[varBsListGroupActionActiveBg]: varBsSecondaryBg,
		[varBsListGroupDisabledColor]: varBsSecondaryColor,
		[varBsListGroupDisabledBg]: varBsBodyBg,
		[varBsListGroupActiveColor]: "#fff",
		[varBsListGroupActiveBg]: "#0d6efd",
		[varBsListGroupActiveBorderColor]: "#0d6efd",
	},
	display: "flex",
	flexDirection: "column",
	paddingLeft: 0,
	marginBottom: 0,
	borderRadius: varBsListGroupBorderRadius,
})

// SOURCE CSS:
// .list-group-item { position: relative; display: block; padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x); color: var(--bs-list-group-color); text-decoration: none; background-color: var(--bs-list-group-bg); border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color); }
globalStyle(`${cyborgScope}${listGroupItem}`, {
	position: "relative",
	display: "block",
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: "none",
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

// SOURCE CSS:
// .list-group-item:first-child { border-top-left-radius: inherit; border-top-right-radius: inherit; }
globalStyle(`${cyborgScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: "inherit",
	borderTopRightRadius: "inherit",
})

// SOURCE CSS:
// .list-group-item:last-child { border-bottom-right-radius: inherit; border-bottom-left-radius: inherit; }
globalStyle(`${cyborgScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: "inherit",
	borderBottomLeftRadius: "inherit",
})

// SOURCE CSS:
// .list-group-item.disabled { color: var(--bs-list-group-disabled-color); pointer-events: none; background-color: var(--bs-list-group-disabled-bg); }
globalStyle(`${cyborgScope}${listGroupItem}${listGroupItemDisabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsListGroupDisabledBg,
})

// SOURCE CSS:
// .list-group-item:disabled { color: var(--bs-list-group-disabled-color); pointer-events: none; background-color: var(--bs-list-group-disabled-bg); }
globalStyle(`${cyborgScope}${listGroupItem}:disabled`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsListGroupDisabledBg,
})

// SOURCE CSS:
// .list-group-item + .list-group-item { border-top-width: 0; }
globalStyle(`${cyborgScope}${listGroupItem} + ${cyborgScope}${listGroupItem}`, {
	borderTopWidth: 0,
})

// SOURCE CSS:
// .list-group-flush { border-radius: 0; }
globalStyle(`${cyborgScope}${listGroupFlush}`, {
	borderRadius: 0,
})

// SOURCE CSS:
// .list-group-flush > .list-group-item { border-width: 0 0 var(--bs-list-group-border-width); }
globalStyle(`${cyborgScope}${listGroupFlush} > ${cyborgScope}${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

// SOURCE CSS:
// .list-group-flush > .list-group-item:last-child { border-bottom-width: 0; }
globalStyle(`${cyborgScope}${listGroupFlush} > ${cyborgScope}${listGroupItem}:last-child`, {
	borderBottomWidth: 0,
})

// SOURCE CSS:
// .overflow-x-hidden { overflow-x: hidden !important; }
globalStyle(`${cyborgScope}${overflowXHidden}`, {
	overflowX: "hidden !important",
})

// SOURCE CSS:
// .position-relative { position: relative !important; }
globalStyle(`${cyborgScope}${positionRelative}`, {
	position: "relative !important",
})

// SOURCE CSS:
// .text-muted { --bs-text-opacity: 1; color: var(--bs-secondary-color) !important; }
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`${cyborgScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

// SOURCE CSS:
// .card-header-tabs { margin-right: calc(-0.5 * var(--bs-card-cap-padding-x)); margin-bottom: calc(-1 * var(--bs-card-cap-padding-y)); margin-left: calc(-0.5 * var(--bs-card-cap-padding-x)); border-bottom: 0; }
globalStyle(`${cyborgScope}${nav}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: 0,
})

// Card-header-tabs active tab styling lives in ui/navs (Bootswatch blue delta, higher cascade).

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .card > hr { margin-right: 0; margin-left: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${card} > ${cyborgScope}${horizontalRule}`, {
	marginRight: 0,
	marginLeft: 0,
})
// SOURCE CSS:
// .card > .card-header + .list-group { border-top: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${card} > ${cyborgScope}${cardHeader} + ${cyborgScope}${listGroup}`, {
	borderTop: 0,
})
// SOURCE CSS:
// .card > .list-group + .card-footer { border-top: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${card} > ${cyborgScope}${listGroup} + ${cyborgScope}${cardFooter}`, {
	borderTop: 0,
})
// SOURCE CSS:
// .card-subtitle { margin-top: calc(-0.5 * var(--bs-card-title-spacer-y)); margin-bottom: 0; color: var(--bs-card-subtitle-color); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: 0,
	color: varBsCardSubtitleColor,
})
// SOURCE CSS:
// .card-group > .card { margin-bottom: var(--bs-card-group-margin); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".card-group" — no contract mapping
globalStyle(`.card-group > ${cyborgScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})
