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
import { solarScope } from '../../scope.css'

globalStyle(`${solarScope}${actionsRow}`, {
	display: 'flex',
})

globalStyle(`${solarScope}${justifyContentBetween}`, {
	justifyContent: 'space-between',
})

globalStyle(`${solarScope}${flexWrap}`, {
	flexWrap: 'wrap',
})

globalStyle(`${solarScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${solarScope}${modal}`, {
	vars: {
		[varBsModalZindex]: '1055',
		[varBsModalWidth]: '500px',
		[varBsModalPadding]: '1rem',
		[varBsModalMargin]: '0.5rem',
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: '#073642',
		[varBsModalBorderColor]: '#002b36',
		[varBsModalBorderWidth]: varBsBorderWidth,
		[varBsModalBorderRadius]: varBsBorderRadiusLg,
		[varBsModalBoxShadow]: varBsBoxShadowSm,
		[varBsModalInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - (${varBsBorderWidth}))`,
		[varBsModalHeaderPaddingX]: '1rem',
		[varBsModalHeaderPaddingY]: '1rem',
		[varBsModalHeaderPadding]: '1rem 1rem',
		[varBsModalHeaderBorderColor]: '#002b36',
		[varBsModalHeaderBorderWidth]: varBsBorderWidth,
		[varBsModalTitleLineHeight]: '1.5',
		[varBsModalFooterGap]: '0.5rem',
		[varBsModalFooterBg]: 'transparent',
		[varBsModalFooterBorderColor]: '#002b36',
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

globalStyle(`${solarScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${solarScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${solarScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${solarScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: 0,
})

globalStyle(`${solarScope}${modalContent}`, {
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

globalStyle(`${solarScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: 0,
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${solarScope}${modalHeader} ${modalTitle}`, {
	marginBottom: 0,
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${solarScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${solarScope}${modalBody} p`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${solarScope}${modalFooter}`, {
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

globalStyle(`${solarScope}${fade}:not(.${modalShowHook})`, {
	opacity: 0,
})

globalStyle(`${solarScope}${modal}.${modalShowHook}`, {
	display: 'block',
})

globalStyle(`${solarScope}${modalFade}.${fade} .${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${solarScope}${modal}.${modalShowHook} .${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${solarScope}${modalDialogScrollable} ${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${solarScope}${modalDialogScrollable} ${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${solarScope}${modalFullscreen} ${modalContent}`, {
	height: '100%',
	border: 0,
	borderRadius: 0,
})

globalStyle(`${solarScope}${modalFullscreen} ${modalHeader}, ${solarScope}${modalFullscreen} ${modalFooter}`, {
	borderRadius: 0,
})

globalStyle(`${solarScope}${modalFullscreen} ${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${solarScope}${modalHeader} ${alertBtnClose}`, {
	position: 'relative',
	top: 'auto',
	right: 'auto',
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${solarScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`body.${modalOpenHook}`, {
	overflow: 'hidden',
})

globalStyle(`${solarScope}${modalBackdrop}`, {
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

globalStyle(`${solarScope}${modalBackdrop}.${fade}`, {
	opacity: 0,
})

globalStyle(`${solarScope}${modalBackdrop}.${modalShowHook}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${solarScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${solarScope}${modalFade}.${fade} .${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${solarScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${solarScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${solarScope}${modalFullscreen}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: 'unset',
		},
	},
})

