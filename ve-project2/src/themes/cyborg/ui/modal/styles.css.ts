import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderColorTranslucent,
	varBsBorderRadiusLg,
	varBsBorderWidth,
	varBsBoxShadowSm,
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
	h4,
	h5,
} from '../../../../theme-contract/contents/heading/contract.css'
import {
	alertBtnClose,
} from '../../../../theme-contract/ui/alerts/contract.css'
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
	modalShowHook,
	modalTitle,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	dFlex,
} from '../../../../theme-contract/utilities/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/modal
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${cyborgScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${cyborgScope}${modal}${fade}:not(${modalShowHook})`, {
	opacity: 0,
})

// SOURCE CSS:
// .modal { --bs-modal-zindex: 1055; --bs-modal-width: 500px; --bs-modal-padding: 1rem; --bs-modal-margin: 0.5rem; --bs-modal-color: var(--bs-body-color); --bs-modal-bg: var(--bs-body-bg); --bs-modal-border-color: var(--bs-border-color-translucent); --bs-modal-border-width: var(--bs-border-width); --bs-modal-border-radius: var(--bs-border-radius-lg); --bs-modal-box-shadow: var(--bs-box-shadow-sm); --bs-modal-inner-border-radius: calc(var(--bs-border-radius-lg) - (var(--bs-border-width))); --bs-modal-header-padding-x: 1rem; --bs-modal-header-padding-y: 1rem; --bs-modal-header-padding: 1rem 1rem; --bs-modal-header-border-color: var(--bs-border-color); --bs-modal-header-border-width: var(--bs-border-width); --bs-modal-title-line-height: 1.5; --bs-modal-footer-gap: 0.5rem; --bs-modal-footer-bg: ; --bs-modal-footer-border-color: var(--bs-border-color); --bs-modal-footer-border-width: var(--bs-border-width); position: fixed; top: 0; left: 0; z-index: var(--bs-modal-zindex); display: none; width: 100%; height: 100%; overflow-x: hidden; overflow-y: auto; outline: 0; }
globalStyle(`${cyborgScope}${modal}${modalShowHook}`, {
	display: "block",
})

globalStyle(`${cyborgScope}${modal}[aria-hidden="true"]`, {
	display: "none !important",
})

globalStyle(`${cyborgScope}${modal}:not(${modalShowHook})`, {
	display: "none !important",
})

globalStyle(`${cyborgScope}${modal}`, {
	vars: {
		[varBsModalZindex]: 1055,
		[varBsModalWidth]: "500px",
		[varBsModalPadding]: "1rem",
		[varBsModalMargin]: "0.5rem",
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: "#222",
		[varBsModalBorderColor]: varBsBorderColorTranslucent,
		[varBsModalBorderWidth]: varBsBorderWidth,
		[varBsModalBorderRadius]: varBsBorderRadiusLg,
		[varBsModalBoxShadow]: varBsBoxShadowSm,
		[varBsModalInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - (${varBsBorderWidth}))`,
		[varBsModalHeaderPaddingX]: "1rem",
		[varBsModalHeaderPaddingY]: "1rem",
		[varBsModalHeaderPadding]: "1rem 1rem",
		[varBsModalHeaderBorderColor]: "#282828",
		[varBsModalHeaderBorderWidth]: varBsBorderWidth,
		[varBsModalTitleLineHeight]: 1.5,
		[varBsModalFooterGap]: "0.5rem",
		[varBsModalFooterBg]: "",
		[varBsModalFooterBorderColor]: "#282828",
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
globalStyle(`${cyborgScope}${modalDialog}`, {
	position: "relative",
	width: "auto",
	margin: varBsModalMargin,
	pointerEvents: "none",
})

// SOURCE CSS:
// .modal.fade .modal-dialog { transform: translate(0, -50px); transition: transform 0.3s ease-out; }
globalStyle(`${cyborgScope}${modal}${fade} ${cyborgScope}${modalDialog}`, {
	transform: "translate(0, -50px)",
	transition: "transform 0.3s ease-out",
})

// SOURCE CSS:
// .modal.show .modal-dialog { transform: none; }
globalStyle(`${cyborgScope}${modal}${modalShowHook} ${cyborgScope}${modalDialog}`, {
	transform: "none",
})

// SOURCE CSS:
// .modal-dialog-scrollable { height: calc(100% - var(--bs-modal-margin) * 2); }
globalStyle(`${cyborgScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

// SOURCE CSS:
// .modal-dialog-scrollable .modal-content { max-height: 100%; overflow: hidden; }
globalStyle(`${cyborgScope}${modalDialogScrollable} ${cyborgScope}${modalContent}`, {
	maxHeight: "100%",
	overflow: "hidden",
})

// SOURCE CSS:
// .modal-dialog-scrollable .modal-body { overflow-y: auto; }
globalStyle(`${cyborgScope}${modalDialogScrollable} ${cyborgScope}${modalBody}`, {
	overflowY: "auto",
})

// SOURCE CSS:
// .modal-dialog-centered { display: flex; align-items: center; min-height: calc(100% - var(--bs-modal-margin) * 2); }
globalStyle(`${cyborgScope}${modalDialogCentered}`, {
	display: "flex",
	alignItems: "center",
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

// SOURCE CSS:
// .modal-content { position: relative; display: flex; flex-direction: column; width: 100%; color: var(--bs-modal-color); pointer-events: auto; background-color: var(--bs-modal-bg); background-clip: padding-box; border: var(--bs-modal-border-width) solid var(--bs-modal-border-color); border-radius: var(--bs-modal-border-radius); outline: 0; }
globalStyle(`${cyborgScope}${modalContent}`, {
	position: "relative",
	display: "flex",
	flexDirection: "column",
	width: "100%",
	color: varBsModalColor,
	pointerEvents: "auto",
	backgroundColor: varBsModalBg,
	backgroundClip: "padding-box",
	border: `${varBsModalBorderWidth} solid ${varBsModalBorderColor}`,
	borderRadius: varBsModalBorderRadius,
	outline: 0,
})

// SOURCE CSS:
// .modal-backdrop { --bs-backdrop-zindex: 1050; --bs-backdrop-bg: #000; --bs-backdrop-opacity: 0.5; position: fixed; top: 0; left: 0; z-index: var(--bs-backdrop-zindex); width: 100vw; height: 100vh; background-color: var(--bs-backdrop-bg); }
globalStyle(`${cyborgScope}${modalBackdrop}`, {
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
globalStyle(`${cyborgScope}${modalBackdrop}${fade}:not(${modalShowHook})`, {
	opacity: 0,
})

// SOURCE CSS:
// .modal-backdrop.show { opacity: var(--bs-backdrop-opacity); }
globalStyle(`${cyborgScope}${modalBackdrop}${fade}${modalShowHook}`, {
	opacity: 0.5,
})

globalStyle(`${cyborgScope}${modalBackdrop}${modalShowHook}`, {
	opacity: 0.5,
})

// SOURCE CSS:
// .modal-header { display: flex; flex-shrink: 0; align-items: center; padding: var(--bs-modal-header-padding); border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color); border-top-left-radius: var(--bs-modal-inner-border-radius); border-top-right-radius: var(--bs-modal-inner-border-radius); }
globalStyle(`${cyborgScope}${modalHeader}`, {
	display: "flex",
	flexShrink: 0,
	alignItems: "center",
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

// SOURCE CSS:
// .modal-header .btn-close { padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5); margin-top: calc(-0.5 * var(--bs-modal-header-padding-y)); margin-right: calc(-0.5 * var(--bs-modal-header-padding-x)); margin-bottom: calc(-0.5 * var(--bs-modal-header-padding-y)); margin-left: auto; }
globalStyle(`${cyborgScope}${modalHeader} ${cyborgScope}${alertBtnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: "auto",
})

// SOURCE CSS:
// .modal-title { margin-bottom: 0; line-height: var(--bs-modal-title-line-height); }
globalStyle(`${cyborgScope}${h5}${modalTitle}`, {
	marginBottom: 0,
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${cyborgScope}${h4}${modalTitle}`, {
	marginBottom: 0,
	lineHeight: varBsModalTitleLineHeight,
})

// SOURCE CSS:
// .modal-body { position: relative; flex: 1 1 auto; padding: var(--bs-modal-padding); }
globalStyle(`${cyborgScope}${modalBody}`, {
	position: "relative",
	flex: "1 1 auto",
	padding: varBsModalPadding,
})

globalStyle(`${cyborgScope}${modalBody} p`, {
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// .modal-footer { display: flex; flex-shrink: 0; flex-wrap: wrap; align-items: center; justify-content: flex-end; padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5); background-color: var(--bs-modal-footer-bg); border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color); border-bottom-right-radius: var(--bs-modal-inner-border-radius); border-bottom-left-radius: var(--bs-modal-inner-border-radius); }
globalStyle(`${cyborgScope}${modalFooter}`, {
	display: "flex",
	flexShrink: 0,
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: `calc(${varBsModalPadding} - ${varBsModalFooterGap} * 0.5)`,
	backgroundColor: varBsModalFooterBg,
	borderTop: `${varBsModalFooterBorderWidth} solid ${varBsModalFooterBorderColor}`,
	borderBottomRightRadius: varBsModalInnerBorderRadius,
	borderBottomLeftRadius: varBsModalInnerBorderRadius,
})

// SOURCE CSS:
// .modal-footer > * { margin: calc(var(--bs-modal-footer-gap) * 0.5); }
// [UNMAPPED_SELECTOR] element selector "*" — map to a contract class
globalStyle(`${cyborgScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${cyborgScope}${dFlex}`, {
	display: "flex !important",
})

// SOURCE CSS:
// .flex-wrap { flex-wrap: wrap !important; }
globalStyle(`${cyborgScope}${flexWrap}`, {
	flexWrap: "wrap !important",
})

// SOURCE CSS:
// .justify-content-between { justify-content: space-between !important; }
globalStyle(`${cyborgScope}${justifyContentBetween}`, {
	justifyContent: "space-between !important",
})

// SOURCE CSS:
// .modal-fullscreen { width: 100vw; max-width: none; height: 100%; margin: 0; }
globalStyle(`${cyborgScope}${modalFullscreen}`, {
	width: "100vw",
	maxWidth: "none",
	height: "100%",
	margin: 0,
})

// SOURCE CSS:
// .modal-fullscreen .modal-content { height: 100%; border: 0; border-radius: 0; }
globalStyle(`${cyborgScope}${modalFullscreen} ${cyborgScope}${modalContent}`, {
	height: "100%",
	border: 0,
	borderRadius: 0,
})

// SOURCE CSS:
// .modal-fullscreen .modal-header { border-radius: 0; }
globalStyle(`${cyborgScope}${modalFullscreen} ${cyborgScope}${modalHeader}`, {
	borderRadius: 0,
})

// SOURCE CSS:
// .modal-fullscreen .modal-footer { border-radius: 0; }
globalStyle(`${cyborgScope}${modalFullscreen} ${cyborgScope}${modalFooter}`, {
	borderRadius: 0,
})

// SOURCE CSS:
// .modal-fullscreen .modal-body { overflow-y: auto; }
globalStyle(`${cyborgScope}${modalFullscreen} ${cyborgScope}${modalBody}`, {
	overflowY: "auto",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .modal.modal-static .modal-dialog { transform: scale(1.02); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".modal-static" — no contract mapping
globalStyle(`${cyborgScope}${modal}.modal-static ${cyborgScope}${modalDialog}`, {
	transform: "scale(1.02)",
})
