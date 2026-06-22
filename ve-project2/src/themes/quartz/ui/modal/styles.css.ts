import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

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

import { link } from '../../../../theme-contract/contents/basic/contract.css'

import {
	modalFullscreenLgDown,
	modalFullscreenMdDown,
	modalFullscreenSmDown,
	modalFullscreenXlDown,
	modalFullscreenXxlDown,
	modalLg,
	modalSm,
	modalStatic,
	modalXl,
} from '../../../../theme-contract/literal/contract.css'
import {
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
	modalShowHook,
	modalTitle,
} from '../../../../theme-contract/ui/modal/contract.css'

globalStyle(`${quartzScope}${modalFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${quartzScope}${modalFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${modalFade}:not(${modalShowHook})`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${modal}`, {
	vars: {
		[varBsModalZindex]: '1055',
		[varBsModalWidth]: '500px',
		[varBsModalPadding]: '2rem',
		[varBsModalMargin]: '0.5rem',
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: varBsBodyBg,
		[varBsModalBorderColor]: varBsBorderColorTranslucent,
		[varBsModalBorderWidth]: varBsBorderWidth,
		[varBsModalBorderRadius]: varBsBorderRadiusLg,
		[varBsModalBoxShadow]: varBsBoxShadowSm,
		[varBsModalInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - (${varBsBorderWidth}))`,
		[varBsModalHeaderPaddingX]: '2rem',
		[varBsModalHeaderPaddingY]: '2rem',
		[varBsModalHeaderPadding]: '2rem 2rem',
		[varBsModalHeaderBorderColor]: varBsBorderColor,
		[varBsModalHeaderBorderWidth]: varBsBorderWidth,
		[varBsModalTitleLineHeight]: '1.5',
		[varBsModalFooterGap]: '0.5rem',
		[varBsModalFooterBg]: '',
		[varBsModalFooterBorderColor]: varBsBorderColor,
		[varBsModalFooterBorderWidth]: varBsBorderWidth,
	},
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: varBsModalZindex,
	display: 'none',
	width: '100%',
	height: '100%',
	overflowX: 'hidden',
	overflowY: 'auto',
	outline: '0',
})

globalStyle(`${quartzScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${quartzScope}${modal}${modalFade} ${quartzScope}${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${quartzScope}${modal}${modalFade} ${quartzScope}${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${modal}${modalShowHook} ${quartzScope}${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${quartzScope}${modal}${modalStatic} ${quartzScope}${modalDialog}`, {
	transform: 'scale(1.02)',
})

globalStyle(`${quartzScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${quartzScope}${modalDialogScrollable} ${quartzScope}${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${quartzScope}${modalDialogScrollable} ${quartzScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${quartzScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${quartzScope}${modalContent}`, {
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
	outline: '0',
})

globalStyle(`${quartzScope}${modalBackdrop}`, {
	vars: {
		[varBsBackdropZindex]: '1050',
		[varBsBackdropBg]: '#000',
		[varBsBackdropOpacity]: '0.5',
	},
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: varBsBackdropZindex,
	width: '100vw',
	height: '100vh',
	backgroundColor: varBsBackdropBg,
})

globalStyle(`${quartzScope}${modalBackdrop}${modalFade}`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${modalBackdrop}${modalShowHook}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${quartzScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: '0',
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${quartzScope}${modalTitle}`, {
	marginBottom: '0',
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${quartzScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${quartzScope}${modalFooter}`, {
	display: 'flex',
	flexShrink: '0',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: `calc(${varBsModalPadding} - ${varBsModalFooterGap} * 0.5)`,
	backgroundColor: varBsModalFooterBg,
	borderTop: `${varBsModalFooterBorderWidth} solid ${varBsModalFooterBorderColor}`,
	borderBottomRightRadius: varBsModalInnerBorderRadius,
	borderBottomLeftRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${quartzScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`${quartzScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${quartzScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalWidth]: '300px',
			},
		},
	},
})

globalStyle(`${quartzScope}${modalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${quartzScope}${modalXl}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${quartzScope}${modalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsModalWidth]: '1140px',
			},
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: '0',
})

globalStyle(`${quartzScope}${modalFullscreen} ${quartzScope}${modalContent}`, {
	height: '100%',
	border: '0',
	borderRadius: '0',
})

globalStyle(`${quartzScope}${modalFullscreen} ${quartzScope}${modalHeader}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${modalFullscreen} ${quartzScope}${modalFooter}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${modalFullscreen} ${quartzScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${quartzScope}${modalFullscreenSmDown}`, {
	'@media': {
		'(max-width: 575.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenSmDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 575.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenSmDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenSmDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenSmDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown}`, {
	'@media': {
		'(max-width: 767.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 767.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown}`, {
	'@media': {
		'(max-width: 991.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 991.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${quartzScope}${justifyContentBetween}`, {
	justifyContent: 'space-between !important',
})

globalStyle(`${quartzScope}${modalContent}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${modalContent} ${quartzScope}${link}`, {
	color: '#fff',
})
