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
import { bootstrapScope } from '../../scope.css'

globalStyle(`${bootstrapScope}${actionsRow}`, {
	display: 'flex',
})

globalStyle(`${bootstrapScope}${justifyContentBetween}`, {
	justifyContent: 'space-between',
})

globalStyle(`${bootstrapScope}${flexWrap}`, {
	flexWrap: 'wrap',
})

globalStyle(`${bootstrapScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${bootstrapScope}${modal}`, {
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

globalStyle(`${bootstrapScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${bootstrapScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${bootstrapScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${bootstrapScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: 0,
})

globalStyle(`${bootstrapScope}${modalContent}`, {
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

globalStyle(`${bootstrapScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: 0,
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${bootstrapScope}${modalHeader} ${modalTitle}`, {
	marginBottom: 0,
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${bootstrapScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${bootstrapScope}${modalBody} p`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${bootstrapScope}${modalFooter}`, {
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

globalStyle(`${bootstrapScope}${fade}:not(.${modalShowHook})`, {
	opacity: 0,
})

globalStyle(`${bootstrapScope}${modal}.${modalShowHook}`, {
	display: 'block',
})

globalStyle(`${bootstrapScope}${modalFade}.${fade} .${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${bootstrapScope}${modal}.${modalShowHook} .${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${bootstrapScope}${modalDialogScrollable} ${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${bootstrapScope}${modalDialogScrollable} ${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${bootstrapScope}${modalFullscreen} ${modalContent}`, {
	height: '100%',
	border: 0,
	borderRadius: 0,
})

globalStyle(`${bootstrapScope}${modalFullscreen} ${modalHeader}, ${bootstrapScope}${modalFullscreen} ${modalFooter}`, {
	borderRadius: 0,
})

globalStyle(`${bootstrapScope}${modalFullscreen} ${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${bootstrapScope}${modalHeader} ${alertBtnClose}`, {
	position: 'relative',
	top: 'auto',
	right: 'auto',
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${bootstrapScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`body.${modalOpenHook}`, {
	overflow: 'hidden',
})

globalStyle(`${bootstrapScope}${modalBackdrop}`, {
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

globalStyle(`${bootstrapScope}${modalBackdrop}.${fade}`, {
	opacity: 0,
})

globalStyle(`${bootstrapScope}${modalBackdrop}.${modalShowHook}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${bootstrapScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${bootstrapScope}${modalFade}.${fade} .${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${bootstrapScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${bootstrapScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${bootstrapScope}${modalFullscreen}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: 'unset',
		},
	},
})
