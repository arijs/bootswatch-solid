import { globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
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

globalStyle(`${lumenScope}${modalFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${lumenScope}${modalFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${lumenScope}${modalFade}:not(${modalShowHook})`, {
	opacity: '0',
})

globalStyle(`${lumenScope}${modal}`, {
	vars: {
		[varBsModalZindex]: '1055',
		[varBsModalWidth]: '500px',
		[varBsModalPadding]: '1rem',
		[varBsModalMargin]: '0.5rem',
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: varBsBodyBg,
		[varBsModalBorderColor]: 'rgba(0, 0, 0, 0.1)',
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

globalStyle(`${lumenScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${lumenScope}${modal}${modalFade} ${lumenScope}${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${lumenScope}${modal}${modalFade} ${lumenScope}${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${lumenScope}${modal}${modalShowHook} ${lumenScope}${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${lumenScope}${modal}${modalStatic} ${lumenScope}${modalDialog}`, {
	transform: 'scale(1.02)',
})

globalStyle(`${lumenScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${lumenScope}${modalDialogScrollable} ${lumenScope}${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${lumenScope}${modalDialogScrollable} ${lumenScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${lumenScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${lumenScope}${modalContent}`, {
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

globalStyle(`${lumenScope}${modalBackdrop}`, {
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

globalStyle(`${lumenScope}${modalBackdrop}${modalFade}`, {
	opacity: '0',
})

globalStyle(`${lumenScope}${modalBackdrop}${modalShowHook}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${lumenScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: '0',
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${lumenScope}${modalTitle}`, {
	marginBottom: '0',
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${lumenScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${lumenScope}${modalFooter}`, {
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

globalStyle(`${lumenScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`${lumenScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${lumenScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${lumenScope}${modalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalWidth]: '300px',
			},
		},
	},
})

globalStyle(`${lumenScope}${modalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${lumenScope}${modalXl}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${lumenScope}${modalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsModalWidth]: '1140px',
			},
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: '0',
})

globalStyle(`${lumenScope}${modalFullscreen} ${lumenScope}${modalContent}`, {
	height: '100%',
	border: '0',
	borderRadius: '0',
})

globalStyle(`${lumenScope}${modalFullscreen} ${lumenScope}${modalHeader}`, {
	borderRadius: '0',
})

globalStyle(`${lumenScope}${modalFullscreen} ${lumenScope}${modalFooter}`, {
	borderRadius: '0',
})

globalStyle(`${lumenScope}${modalFullscreen} ${lumenScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${lumenScope}${modalFullscreenSmDown}`, {
	'@media': {
		'(max-width: 575.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenSmDown} ${lumenScope}${modalContent}`, {
	'@media': {
		'(max-width: 575.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenSmDown} ${lumenScope}${modalHeader}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenSmDown} ${lumenScope}${modalFooter}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenSmDown} ${lumenScope}${modalBody}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenMdDown}`, {
	'@media': {
		'(max-width: 767.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenMdDown} ${lumenScope}${modalContent}`, {
	'@media': {
		'(max-width: 767.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenMdDown} ${lumenScope}${modalHeader}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenMdDown} ${lumenScope}${modalFooter}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenMdDown} ${lumenScope}${modalBody}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenLgDown}`, {
	'@media': {
		'(max-width: 991.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenLgDown} ${lumenScope}${modalContent}`, {
	'@media': {
		'(max-width: 991.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenLgDown} ${lumenScope}${modalHeader}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenLgDown} ${lumenScope}${modalFooter}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenLgDown} ${lumenScope}${modalBody}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXlDown}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXlDown} ${lumenScope}${modalContent}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXlDown} ${lumenScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXlDown} ${lumenScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXlDown} ${lumenScope}${modalBody}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXxlDown}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXxlDown} ${lumenScope}${modalContent}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXxlDown} ${lumenScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXxlDown} ${lumenScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${lumenScope}${modalFullscreenXxlDown} ${lumenScope}${modalBody}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${lumenScope}${justifyContentBetween}`, {
	justifyContent: 'space-between !important',
})
