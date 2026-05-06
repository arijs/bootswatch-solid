import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadiusLg,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsBoxShadowSm,
} from '../../../../theme-contract/_vars.css'
import {
	actionsRow,
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
	modalFade,
	modalFooter,
	modalFullscreen,
	modalHeader,
	modalOpenHook,
	modalShowHook,
	modalTitle,
} from '../../../../theme-contract/ui/modal/contract.css'
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
import { alertBtnClose } from '../../../../theme-contract/ui/alerts/contract.css'
import { sandstoneScope } from '../../scope.css'

globalStyle(`${sandstoneScope}${actionsRow}`, {
	display: 'flex',
})

globalStyle(`${sandstoneScope}${justifyContentBetween}`, {
	justifyContent: 'space-between',
})

globalStyle(`${sandstoneScope}${flexWrap}`, {
	flexWrap: 'wrap',
})

globalStyle(`${sandstoneScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${sandstoneScope}${modal}`, {
	vars: {
		[varBsModalZindex]: '1055',
		[varBsModalWidth]: '500px',
		[varBsModalPadding]: '1rem',
		[varBsModalMargin]: '0.5rem',
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: varBsBodyBg,
		[varBsModalBorderColor]: varBsBorderColorTranslucent,
		[varBsModalBorderWidth]: varBsBorderWidth,
		[varBsModalBorderRadius]: varBsBorderRadiusLg,
		[varBsModalBoxShadow]: varBsBoxShadowSm,
		[varBsModalInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - (${varBsBorderWidth}))`,
		[varBsModalHeaderPaddingX]: '1rem',
		[varBsModalHeaderPaddingY]: '1rem',
		[varBsModalHeaderPadding]: '1rem 1rem',
		[varBsModalHeaderBorderColor]: varBsBorderColor,
		[varBsModalHeaderBorderWidth]: varBsBorderWidth,
		[varBsModalTitleLineHeight]: '1.5',
		[varBsModalFooterGap]: '0.5rem',
		[varBsModalFooterBg]: 'transparent',
		[varBsModalFooterBorderColor]: varBsBorderColor,
		[varBsModalFooterBorderWidth]: varBsBorderWidth,
	},
	position: 'fixed',
	top: 0,
	left: 0,
	zIndex: varBsModalZindex,
	display: 'none',
	width: '100%',
	height: '100%',
	overflowX: 'hidden',
	overflowY: 'auto',
	outline: 0,
})

globalStyle(`${sandstoneScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${sandstoneScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${sandstoneScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${sandstoneScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: 0,
})

globalStyle(`${sandstoneScope}${modalContent}`, {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	color: varBsModalColor,
	pointerEvents: 'auto',
	backgroundColor: varBsModalBg,
	backgroundClip: 'padding-box',
	border: `${varBsModalBorderWidth} solid ${varBsModalBorderColor}`,
	borderRadius: varBsModalBorderRadius,
	outline: 0,
})

globalStyle(`${sandstoneScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: 0,
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${sandstoneScope}${modalHeader} ${modalTitle}`, {
	marginBottom: 0,
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${sandstoneScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${sandstoneScope}${modalBody} p`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${sandstoneScope}${modalFooter}`, {
	display: 'flex',
	flexShrink: 0,
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: `calc(${varBsModalPadding} - ${varBsModalFooterGap} * 0.5)`,
	backgroundColor: varBsModalFooterBg,
	borderTop: `${varBsModalFooterBorderWidth} solid ${varBsModalFooterBorderColor}`,
	borderBottomRightRadius: varBsModalInnerBorderRadius,
	borderBottomLeftRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${sandstoneScope}${fade}:not(.${modalShowHook})`, {
	opacity: 0,
})

globalStyle(`${sandstoneScope}${modal}.${modalShowHook}`, {
	display: 'block',
})

globalStyle(`${sandstoneScope}${modalFade}.${fade} .${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${sandstoneScope}${modal}.${modalShowHook} .${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${sandstoneScope}${modalDialogScrollable} ${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${sandstoneScope}${modalDialogScrollable} ${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${sandstoneScope}${modalFullscreen} ${modalContent}`, {
	height: '100%',
	border: 0,
	borderRadius: 0,
})

globalStyle(`${sandstoneScope}${modalFullscreen} ${modalHeader}, ${sandstoneScope}${modalFullscreen} ${modalFooter}`, {
	borderRadius: 0,
})

globalStyle(`${sandstoneScope}${modalFullscreen} ${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${sandstoneScope}${modalHeader} ${alertBtnClose}`, {
	position: 'relative',
	top: 'auto',
	right: 'auto',
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${sandstoneScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`body.${modalOpenHook}`, {
	overflow: 'hidden',
})

globalStyle(`${sandstoneScope}${modalBackdrop}`, {
	vars: {
		[varBsBackdropZindex]: '1050',
		[varBsBackdropBg]: '#000',
		[varBsBackdropOpacity]: '0.5',
	},
	position: 'fixed',
	top: 0,
	left: 0,
	zIndex: varBsBackdropZindex,
	width: '100vw',
	height: '100vh',
	backgroundColor: varBsBackdropBg,
})

globalStyle(`${sandstoneScope}${modalBackdrop}.${fade}`, {
	opacity: 0,
})

globalStyle(`${sandstoneScope}${modalBackdrop}.${modalShowHook}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${sandstoneScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${sandstoneScope}${modalFade}.${fade} .${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${sandstoneScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${sandstoneScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${sandstoneScope}${modalFullscreen}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: 'unset',
		},
	},
})

