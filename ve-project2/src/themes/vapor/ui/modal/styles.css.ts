import { globalStyle } from '@vanilla-extract/css'
import { vaporScope } from '../../scope.css'

import {
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

import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
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

globalStyle(`${vaporScope}${modalFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${vaporScope}${modalFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${modalFade}:not(${modalShowHook})`, {
	opacity: '0',
})

globalStyle(`${vaporScope}${modal}`, {
	vars: {
		[varBsModalZindex]: '1055',
		[varBsModalWidth]: '500px',
		[varBsModalPadding]: '1rem',
		[varBsModalMargin]: '0.5rem',
		[varBsModalColor]: '#fff',
		[varBsModalBg]: '#6f42c1',
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

globalStyle(`${vaporScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${vaporScope}${modal}${modalFade} ${vaporScope}${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${vaporScope}${modal}${modalFade} ${vaporScope}${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${modal}${modalShowHook} ${vaporScope}${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${vaporScope}${modal}${modalStatic} ${vaporScope}${modalDialog}`, {
	transform: 'scale(1.02)',
})

globalStyle(`${vaporScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${vaporScope}${modalDialogScrollable} ${vaporScope}${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${vaporScope}${modalDialogScrollable} ${vaporScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${vaporScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${vaporScope}${modalContent}`, {
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

globalStyle(`${vaporScope}${modalBackdrop}`, {
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

globalStyle(`${vaporScope}${modalBackdrop}${modalFade}`, {
	opacity: '0',
})

globalStyle(`${vaporScope}${modalBackdrop}${modalShowHook}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${vaporScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: '0',
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${vaporScope}${modalTitle}`, {
	marginBottom: '0',
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${vaporScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${vaporScope}${modalFooter}`, {
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

globalStyle(`${vaporScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`${vaporScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${vaporScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalWidth]: '300px',
			},
		},
	},
})

globalStyle(`${vaporScope}${modalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${vaporScope}${modalXl}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${vaporScope}${modalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsModalWidth]: '1140px',
			},
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: '0',
})

globalStyle(`${vaporScope}${modalFullscreen} ${vaporScope}${modalContent}`, {
	height: '100%',
	border: '0',
	borderRadius: '0',
})

globalStyle(`${vaporScope}${modalFullscreen} ${vaporScope}${modalHeader}`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}${modalFullscreen} ${vaporScope}${modalFooter}`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}${modalFullscreen} ${vaporScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${vaporScope}${modalFullscreenSmDown}`, {
	'@media': {
		'(max-width: 575.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenSmDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 575.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenSmDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenSmDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenSmDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown}`, {
	'@media': {
		'(max-width: 767.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 767.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown}`, {
	'@media': {
		'(max-width: 991.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 991.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentBetween}`, {
	justifyContent: 'space-between !important',
})

globalStyle(`${vaporScope}${modal}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modalContent}`, {
	boxShadow: '0 0 2rem rgba(125, 85, 199, 0.4), 0 0 8rem rgba(125, 85, 199, 0.3)',
})
