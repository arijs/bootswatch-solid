import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadiusLg,
	varBsBorderWidth,
	varBsBoxShadowSm,
	varBsHeadingColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBackdropBg,
	varBsBackdropOpacity,
	varBsBackdropZindex,
	varBsModalBg,
	varBsModalBorderColor,
	varBsModalBorderRadius,
	varBsModalBorderWidth,
	varBsModalBoxShadow,
	varBsModalColor,
	varBsModalFooterBg,
	varBsModalFooterBorderColor,
	varBsModalFooterBorderWidth,
	varBsModalFooterGap,
	varBsModalHeaderBorderColor,
	varBsModalHeaderBorderWidth,
	varBsModalHeaderPadding,
	varBsModalHeaderPaddingX,
	varBsModalHeaderPaddingY,
	varBsModalInnerBorderRadius,
	varBsModalMargin,
	varBsModalPadding,
	varBsModalTitleLineHeight,
	varBsModalWidth,
	varBsModalZindex,
} from '../../../../theme-contract/ui/modal/_vars.css'
import {
	paragraph,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
import {
	btn,
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	fade,
	flexWrap,
	justifyContentBetween,
	modal,
	modalBackdrop,
	modalBody,
	modalContent,
	modalDialog,
	modalDialogCentered,
	modalDialogScrollable,
	modalFooter,
	modalFullscreen,
	modalHeader,
	modalTitle,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	dFlex,
} from '../../../../theme-contract/utilities/contract.css'
import { simplexScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/modal
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${simplexScope}${h6}`, {
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
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
globalStyle(`${simplexScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.25rem",
})

// SOURCE CSS:
// .h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
// [UNMAPPED_SELECTOR] class ".h5" — no contract mapping
globalStyle(`.h5`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.25rem",
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
globalStyle(`${simplexScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.275rem + 0.3vw)",
})

// SOURCE CSS:
// .h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
// [UNMAPPED_SELECTOR] class ".h4" — no contract mapping
globalStyle(`.h4`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.275rem + 0.3vw)",
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${simplexScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h3" — no contract mapping
globalStyle(`.h3`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${simplexScope}${h2}`, {
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
globalStyle(`${simplexScope}${h1}`, {
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
// p { margin-top: 0; margin-bottom: 1rem; }
globalStyle(`${simplexScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: "1rem",
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
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${simplexScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${simplexScope}${fade}:not(.show)`, {
	opacity: 0,
})

// SOURCE CSS:
// .modal { --bs-modal-zindex: 1055; --bs-modal-width: 500px; --bs-modal-padding: 1rem; --bs-modal-margin: 0.5rem; --bs-modal-color: var(--bs-body-color); --bs-modal-bg: var(--bs-body-bg); --bs-modal-border-color: var(--bs-border-color-translucent); --bs-modal-border-width: var(--bs-border-width); --bs-modal-border-radius: var(--bs-border-radius-lg); --bs-modal-box-shadow: var(--bs-box-shadow-sm); --bs-modal-inner-border-radius: calc(var(--bs-border-radius-lg) - (var(--bs-border-width))); --bs-modal-header-padding-x: 1rem; --bs-modal-header-padding-y: 1rem; --bs-modal-header-padding: 1rem 1rem; --bs-modal-header-border-color: var(--bs-border-color); --bs-modal-header-border-width: var(--bs-border-width); --bs-modal-title-line-height: 1.5; --bs-modal-footer-gap: 0.5rem; --bs-modal-footer-bg: ; --bs-modal-footer-border-color: var(--bs-border-color); --bs-modal-footer-border-width: var(--bs-border-width); position: fixed; top: 0; left: 0; z-index: var(--bs-modal-zindex); display: none; width: 100%; height: 100%; overflow-x: hidden; overflow-y: auto; outline: 0; }
globalStyle(`${simplexScope}${modal}`, {
	vars: {
		[varBsModalZindex]: 1055,
		[varBsModalWidth]: "500px",
		[varBsModalPadding]: "1rem",
		[varBsModalMargin]: "0.5rem",
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: varBsBodyBg,
		[varBsModalBorderColor]: varBsBorderColorTranslucent,
		[varBsModalBorderWidth]: varBsBorderWidth,
		[varBsModalBorderRadius]: varBsBorderRadiusLg,
		[varBsModalBoxShadow]: varBsBoxShadowSm,
		[varBsModalInnerBorderRadius]: "calc(var(--bs-border-radius-lg) - (var(--bs-border-width)))",
		[varBsModalHeaderPaddingX]: "1rem",
		[varBsModalHeaderPaddingY]: "1rem",
		[varBsModalHeaderPadding]: "1rem 1rem",
		[varBsModalHeaderBorderColor]: varBsBorderColor,
		[varBsModalHeaderBorderWidth]: varBsBorderWidth,
		[varBsModalTitleLineHeight]: 1.5,
		[varBsModalFooterGap]: "0.5rem",
		[varBsModalFooterBg]: "",
		[varBsModalFooterBorderColor]: varBsBorderColor,
		[varBsModalFooterBorderWidth]: varBsBorderWidth,
	},
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: varBsModalZindex,
	display: "none",
	width: "100%",
	height: "100%",
	overflowX: "hidden",
	overflowY: "auto",
	outline: 0,
})

// SOURCE CSS:
// .modal-dialog { position: relative; width: auto; margin: var(--bs-modal-margin); pointer-events: none; }
globalStyle(`${simplexScope}${modalDialog}`, {
	position: "relative",
	width: "auto",
	margin: varBsModalMargin,
	pointerEvents: "none",
})

// SOURCE CSS:
// .modal.fade .modal-dialog { transform: translate(0, -50px); transition: transform 0.3s ease-out; }
globalStyle(`${simplexScope}${modal}.fade ${simplexScope}${modalDialog}`, {
	transform: "translate(0, -50px)",
	transition: "transform 0.3s ease-out",
})

// SOURCE CSS:
// .modal.show .modal-dialog { transform: none; }
globalStyle(`${simplexScope}${modal}.show ${simplexScope}${modalDialog}`, {
	transform: "none",
})

// SOURCE CSS:
// .modal-dialog-scrollable { height: calc(100% - var(--bs-modal-margin) * 2); }
globalStyle(`${simplexScope}${modalDialogScrollable}`, {
	height: "calc(100% - var(--bs-modal-margin) * 2)",
})

// SOURCE CSS:
// .modal-dialog-scrollable .modal-content { max-height: 100%; overflow: hidden; }
globalStyle(`${simplexScope}${modalDialogScrollable} ${simplexScope}${modalContent}`, {
	maxHeight: "100%",
	overflow: "hidden",
})

// SOURCE CSS:
// .modal-dialog-scrollable .modal-body { overflow-y: auto; }
globalStyle(`${simplexScope}${modalDialogScrollable} ${simplexScope}${modalBody}`, {
	overflowY: "auto",
})

// SOURCE CSS:
// .modal-dialog-centered { display: flex; align-items: center; min-height: calc(100% - var(--bs-modal-margin) * 2); }
globalStyle(`${simplexScope}${modalDialogCentered}`, {
	display: "flex",
	alignItems: "center",
	minHeight: "calc(100% - var(--bs-modal-margin) * 2)",
})

// SOURCE CSS:
// .modal-content { position: relative; display: flex; flex-direction: column; width: 100%; color: var(--bs-modal-color); pointer-events: auto; background-color: var(--bs-modal-bg); background-clip: padding-box; border: var(--bs-modal-border-width) solid var(--bs-modal-border-color); border-radius: var(--bs-modal-border-radius); outline: 0; }
globalStyle(`${simplexScope}${modalContent}`, {
	position: "relative",
	display: "flex",
	flexDirection: "column",
	width: "100%",
	color: varBsModalColor,
	pointerEvents: "auto",
	backgroundColor: varBsModalBg,
	backgroundClip: "padding-box",
	border: "var(--bs-modal-border-width) solid var(--bs-modal-border-color)",
	borderRadius: varBsModalBorderRadius,
	outline: 0,
})

// SOURCE CSS:
// .modal-backdrop { --bs-backdrop-zindex: 1050; --bs-backdrop-bg: #000; --bs-backdrop-opacity: 0.5; position: fixed; top: 0; left: 0; z-index: var(--bs-backdrop-zindex); width: 100vw; height: 100vh; background-color: var(--bs-backdrop-bg); }
globalStyle(`${simplexScope}${modalBackdrop}`, {
	vars: {
		[varBsBackdropZindex]: 1050,
		[varBsBackdropBg]: "#000",
		[varBsBackdropOpacity]: 0.5,
	},
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: varBsBackdropZindex,
	width: "100vw",
	height: "100vh",
	backgroundColor: varBsBackdropBg,
})

// SOURCE CSS:
// .modal-backdrop.fade { opacity: 0; }
globalStyle(`${simplexScope}${modalBackdrop}.fade`, {
	opacity: 0,
})

// SOURCE CSS:
// .modal-backdrop.show { opacity: var(--bs-backdrop-opacity); }
globalStyle(`${simplexScope}${modalBackdrop}.show`, {
	opacity: varBsBackdropOpacity,
})

// SOURCE CSS:
// .modal-header { display: flex; flex-shrink: 0; align-items: center; padding: var(--bs-modal-header-padding); border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color); border-top-left-radius: var(--bs-modal-inner-border-radius); border-top-right-radius: var(--bs-modal-inner-border-radius); }
globalStyle(`${simplexScope}${modalHeader}`, {
	display: "flex",
	flexShrink: 0,
	alignItems: "center",
	padding: varBsModalHeaderPadding,
	borderBottom: "var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color)",
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

// SOURCE CSS:
// .modal-header .btn-close { padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5); margin-top: calc(-0.5 * var(--bs-modal-header-padding-y)); margin-right: calc(-0.5 * var(--bs-modal-header-padding-x)); margin-bottom: calc(-0.5 * var(--bs-modal-header-padding-y)); margin-left: auto; }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`${simplexScope}${modalHeader} .btn-close`, {
	padding: "calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5)",
	marginTop: "calc(-0.5 * var(--bs-modal-header-padding-y))",
	marginRight: "calc(-0.5 * var(--bs-modal-header-padding-x))",
	marginBottom: "calc(-0.5 * var(--bs-modal-header-padding-y))",
	marginLeft: "auto",
})

// SOURCE CSS:
// .modal-title { margin-bottom: 0; line-height: var(--bs-modal-title-line-height); }
globalStyle(`${simplexScope}${modalTitle}`, {
	marginBottom: 0,
	lineHeight: varBsModalTitleLineHeight,
})

// SOURCE CSS:
// .modal-body { position: relative; flex: 1 1 auto; padding: var(--bs-modal-padding); }
globalStyle(`${simplexScope}${modalBody}`, {
	position: "relative",
	flex: "1 1 auto",
	padding: varBsModalPadding,
})

// SOURCE CSS:
// .modal-footer { display: flex; flex-shrink: 0; flex-wrap: wrap; align-items: center; justify-content: flex-end; padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5); background-color: var(--bs-modal-footer-bg); border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color); border-bottom-right-radius: var(--bs-modal-inner-border-radius); border-bottom-left-radius: var(--bs-modal-inner-border-radius); }
globalStyle(`${simplexScope}${modalFooter}`, {
	display: "flex",
	flexShrink: 0,
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: "calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5)",
	backgroundColor: varBsModalFooterBg,
	borderTop: "var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color)",
	borderBottomRightRadius: varBsModalInnerBorderRadius,
	borderBottomLeftRadius: varBsModalInnerBorderRadius,
})

// SOURCE CSS:
// .modal-footer > * { margin: calc(var(--bs-modal-footer-gap) * 0.5); }
// [UNMAPPED_SELECTOR] element selector "*" — map to a contract class
globalStyle(`${simplexScope}${modalFooter} > *`, {
	margin: "calc(var(--bs-modal-footer-gap) * 0.5)",
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${simplexScope}${dFlex}`, {
	display: "flex !important",
})

// SOURCE CSS:
// .flex-wrap { flex-wrap: wrap !important; }
globalStyle(`${simplexScope}${flexWrap}`, {
	flexWrap: "wrap !important",
})

// SOURCE CSS:
// .justify-content-between { justify-content: space-between !important; }
globalStyle(`${simplexScope}${justifyContentBetween}`, {
	justifyContent: "space-between !important",
})

// SOURCE CSS:
// .modal-fullscreen { width: 100vw; max-width: none; height: 100%; margin: 0; }
globalStyle(`${simplexScope}${modalFullscreen}`, {
	width: "100vw",
	maxWidth: "none",
	height: "100%",
	margin: 0,
})

// SOURCE CSS:
// .modal-fullscreen .modal-content { height: 100%; border: 0; border-radius: 0; }
globalStyle(`${simplexScope}${modalFullscreen} ${simplexScope}${modalContent}`, {
	height: "100%",
	border: 0,
	borderRadius: 0,
})

// SOURCE CSS:
// .modal-fullscreen .modal-header { border-radius: 0; }
globalStyle(`${simplexScope}${modalFullscreen} ${simplexScope}${modalHeader}`, {
	borderRadius: 0,
})

// SOURCE CSS:
// .modal-fullscreen .modal-footer { border-radius: 0; }
globalStyle(`${simplexScope}${modalFullscreen} ${simplexScope}${modalFooter}`, {
	borderRadius: 0,
})

// SOURCE CSS:
// .modal-fullscreen .modal-body { overflow-y: auto; }
globalStyle(`${simplexScope}${modalFullscreen} ${simplexScope}${modalBody}`, {
	overflowY: "auto",
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .modal.modal-static .modal-dialog
