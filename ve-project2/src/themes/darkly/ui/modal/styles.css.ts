import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
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
import { darklyScope } from '../../scope.css'

globalStyle(`${darklyScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

globalStyle(`${darklyScope}${modal}${fade}:not(${modalShowHook})`, {
	opacity: 0,
})

globalStyle(`${darklyScope}${modal}`, {
	vars: {
		[varBsModalZindex]: 1055,
		[varBsModalWidth]: "500px",
		[varBsModalPadding]: "1rem",
		[varBsModalMargin]: "0.5rem",
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: "#303030",
		[varBsModalBorderColor]: "#444",
		[varBsModalBorderWidth]: varBsBorderWidth,
		[varBsModalBorderRadius]: varBsBorderRadiusLg,
		[varBsModalBoxShadow]: varBsBoxShadowSm,
		[varBsModalInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - (${varBsBorderWidth}))`,
		[varBsModalHeaderPaddingX]: "1rem",
		[varBsModalHeaderPaddingY]: "1rem",
		[varBsModalHeaderPadding]: "1rem 1rem",
		[varBsModalHeaderBorderColor]: "#444",
		[varBsModalHeaderBorderWidth]: varBsBorderWidth,
		[varBsModalTitleLineHeight]: 1.5,
		[varBsModalFooterGap]: "0.5rem",
		[varBsModalFooterBg]: "",
		[varBsModalFooterBorderColor]: "#444",
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

globalStyle(`${darklyScope}${modalDialog}`, {
	position: "relative",
	width: "auto",
	margin: varBsModalMargin,
	pointerEvents: "none",
})

globalStyle(`${darklyScope}${modal}${fade} ${darklyScope}${modalDialog}`, {
	transform: "translate(0, -50px)",
	transition: "transform 0.3s ease-out",
})

globalStyle(`${darklyScope}${modal}${modalShowHook} ${darklyScope}${modalDialog}`, {
	transform: "none",
})

globalStyle(`${darklyScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${darklyScope}${modalDialogScrollable} ${darklyScope}${modalContent}`, {
	maxHeight: "100%",
	overflow: "hidden",
})

globalStyle(`${darklyScope}${modalDialogScrollable} ${darklyScope}${modalBody}`, {
	overflowY: "auto",
})

globalStyle(`${darklyScope}${modalDialogCentered}`, {
	display: "flex",
	alignItems: "center",
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${darklyScope}${modalContent}`, {
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

globalStyle(`${darklyScope}${modalBackdrop}`, {
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

globalStyle(`${darklyScope}${modalBackdrop}${fade}:not(${modalShowHook})`, {
	opacity: 0,
})

globalStyle(`${darklyScope}${modalBackdrop}${fade}${modalShowHook}`, {
	opacity: 0.5,
})

globalStyle(`${darklyScope}${modalBackdrop}${modalShowHook}`, {
	opacity: 0.5,
})

globalStyle(`${darklyScope}${modalHeader}`, {
	display: "flex",
	flexShrink: 0,
	alignItems: "center",
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${darklyScope}${modalHeader} ${darklyScope}${alertBtnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: "auto",
})

globalStyle(`${darklyScope}${h5}${modalTitle}`, {
	marginBottom: 0,
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${darklyScope}${h4}${modalTitle}`, {
	marginBottom: 0,
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${darklyScope}${modalBody}`, {
	position: "relative",
	flex: "1 1 auto",
	padding: varBsModalPadding,
})

globalStyle(`${darklyScope}${modalBody} p`, {
	marginTop: 0,
	marginBottom: "1rem",
})

globalStyle(`${darklyScope}${modalFooter}`, {
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

globalStyle(`${darklyScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`${darklyScope}${dFlex}`, {
	display: "flex !important",
})

globalStyle(`${darklyScope}${flexWrap}`, {
	flexWrap: "wrap !important",
})

globalStyle(`${darklyScope}${justifyContentBetween}`, {
	justifyContent: "space-between !important",
})

globalStyle(`${darklyScope}${modalFullscreen}`, {
	width: "100vw",
	maxWidth: "none",
	height: "100%",
	margin: 0,
})

globalStyle(`${darklyScope}${modalFullscreen} ${darklyScope}${modalContent}`, {
	height: "100%",
	border: 0,
	borderRadius: 0,
})

globalStyle(`${darklyScope}${modalFullscreen} ${darklyScope}${modalHeader}`, {
	borderRadius: 0,
})

globalStyle(`${darklyScope}${modalFullscreen} ${darklyScope}${modalFooter}`, {
	borderRadius: 0,
})

globalStyle(`${darklyScope}${modalFullscreen} ${darklyScope}${modalBody}`, {
	overflowY: "auto",
})

globalStyle(`${darklyScope}${modal}.modal-static ${darklyScope}${modalDialog}`, {
	transform: "scale(1.02)",
})
