import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'
import {
	varBsNavbarActiveColor,
	varBsNavbarBrandColor,
	varBsNavbarBrandFontSize,
	varBsNavbarBrandHoverColor,
	varBsNavbarBrandMarginEnd,
	varBsNavbarBrandPaddingY,
	varBsNavbarColor,
	varBsNavbarDisabledColor,
	varBsNavbarHoverColor,
	varBsNavbarNavLinkPaddingX,
	varBsNavbarPaddingX,
	varBsNavbarPaddingY,
	varBsNavbarTogglerBorderColor,
	varBsNavbarTogglerBorderRadius,
	varBsNavbarTogglerFocusWidth,
	varBsNavbarTogglerFontSize,
	varBsNavbarTogglerIconBg,
	varBsNavbarTogglerPaddingX,
	varBsNavbarTogglerPaddingY,
	varBsNavbarTogglerTransition,
	varBsScrollHeight,
} from '../../../../theme-contract/ui/navbar/_vars.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
	varBsNavLinkFontWeight,
	varBsNavLinkHoverColor,
	varBsNavLinkPaddingX,
	varBsNavLinkPaddingY,
} from '../../../../theme-contract/ui/navs/_vars.css'

import { link } from '../../../../theme-contract/contents/basic/contract.css'

import { containerFluid } from '../../../../theme-contract/layout/container.css'
import {
	navbarDark,
	navbarExpand,
	navbarExpandMd,
	navbarExpandSm,
	navbarExpandXl,
	navbarExpandXxl,
} from '../../../../theme-contract/literal/contract.css'
import {
	navbar,
	navbarBrand,
	navbarCollapse,
	navbarExpandLg,
	navbarNav,
	navbarNavScroll,
	navbarText,
	navbarToggler,
	navbarTogglerIcon,
} from '../../../../theme-contract/ui/navbar/contract.css'

globalStyle(`${briteScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: '0',
		[varBsNavbarPaddingY]: '0.75rem',
		[varBsNavbarColor]: '#000',
		[varBsNavbarHoverColor]: '#000',
		[varBsNavbarDisabledColor]: 'rgba(0, 0, 0, 0.3)',
		[varBsNavbarActiveColor]: '#000',
		[varBsNavbarBrandPaddingY]: '0.3359375rem',
		[varBsNavbarBrandMarginEnd]: '1rem',
		[varBsNavbarBrandFontSize]: '1.09375rem',
		[varBsNavbarBrandColor]: '#000',
		[varBsNavbarBrandHoverColor]: '#000',
		[varBsNavbarNavLinkPaddingX]: '1rem',
		[varBsNavbarTogglerPaddingY]: '0.25rem',
		[varBsNavbarTogglerPaddingX]: '0.75rem',
		[varBsNavbarTogglerFontSize]: '1.09375rem',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'%23000\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
		[varBsNavbarTogglerBorderColor]: '#000',
		[varBsNavbarTogglerBorderRadius]: varBsBorderRadius,
		[varBsNavbarTogglerFocusWidth]: '1px',
		[varBsNavbarTogglerTransition]: 'box-shadow 0.15s ease-in-out',
	},
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: `${varBsNavbarPaddingY} ${varBsNavbarPaddingX}`,
})

globalStyle(`${briteScope}${navbar} > ${briteScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${briteScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: varBsNavbarBrandFontSize,
	color: varBsNavbarBrandColor,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
})

globalStyle(`${briteScope}${navbarBrand}:hover`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${briteScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${briteScope}${navbarNav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '0',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsNavbarColor,
		[varBsNavLinkHoverColor]: varBsNavbarHoverColor,
		[varBsNavLinkDisabledColor]: varBsNavbarDisabledColor,
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${briteScope}${navbarText}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsNavbarColor,
})

globalStyle(`${briteScope}${navbarText} :where(${briteScope}${link})`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${briteScope}${navbarText} ${briteScope}${link}:hover`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${briteScope}${navbarText} ${briteScope}${link}:focus`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${briteScope}${navbarCollapse}`, {
	flexGrow: '1',
	flexBasis: '100%',
	alignItems: 'center',
})

globalStyle(`${briteScope}${navbarToggler}`, {
	padding: `${varBsNavbarTogglerPaddingY} ${varBsNavbarTogglerPaddingX}`,
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: '1',
	color: varBsNavbarColor,
	backgroundColor: 'transparent',
	border: `${varBsBorderWidth} solid ${varBsNavbarTogglerBorderColor}`,
	borderRadius: varBsNavbarTogglerBorderRadius,
	transition: varBsNavbarTogglerTransition,
})

globalStyle(`${briteScope}${navbarToggler}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${navbarToggler}:hover`, {
	textDecoration: 'none',
})

globalStyle(`${briteScope}${navbarToggler}:focus`, {
	textDecoration: 'none',
	outline: '0',
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

globalStyle(`${briteScope}${navbarTogglerIcon}`, {
	display: 'inline-block',
	width: '1.5em',
	height: '1.5em',
	verticalAlign: 'middle',
	backgroundImage: varBsNavbarTogglerIconBg,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: '100%',
})

globalStyle(`${briteScope}${navbarNavScroll}`, {
	maxHeight: fallbackVar(varBsScrollHeight, '75vh'),
	overflowY: 'auto',
})

globalStyle(`${briteScope}${navbarExpandSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandSm} ${briteScope}${navbarNav}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandSm} ${briteScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 576px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandSm} ${briteScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandSm} ${briteScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandMd} ${briteScope}${navbarNav}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandMd} ${briteScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 768px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandMd} ${briteScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandMd} ${briteScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandLg} ${briteScope}${navbarNav}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandLg} ${briteScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 992px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandLg} ${briteScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandLg} ${briteScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXl} ${briteScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXl} ${briteScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1200px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXl} ${briteScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXl} ${briteScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXxl} ${briteScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXxl} ${briteScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1400px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXxl} ${briteScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXxl} ${briteScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${briteScope}${navbarExpand}`, {
	flexWrap: 'nowrap',
	justifyContent: 'flex-start',
})

globalStyle(`${briteScope}${navbarExpand} ${briteScope}${navbarNav}`, {
	flexDirection: 'row',
})

globalStyle(`${briteScope}${navbarExpand} ${briteScope}${navbarNavScroll}`, {
	overflow: 'visible',
})

globalStyle(`${briteScope}${navbarExpand} ${briteScope}${navbarCollapse}`, {
	display: 'flex !important',
	flexBasis: 'auto',
})

globalStyle(`${briteScope}${navbarExpand} ${briteScope}${navbarToggler}`, {
	display: 'none',
})

globalStyle(`${briteScope}${navbarDark}`, {
	vars: {
		[varBsNavbarColor]: '#fff',
		[varBsNavbarHoverColor]: '#fff',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.3)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: '#fff',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'%23fff\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${briteScope}${navbar}[data-bs-theme=dark]`, {
	vars: {
		[varBsNavbarColor]: '#fff',
		[varBsNavbarHoverColor]: '#fff',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.3)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: '#fff',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'%23fff\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${navbarTogglerIcon}`, {
	vars: {
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'%23fff\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${briteScope}${navbar}`, {
	fontSize: '1.09375rem',
	fontWeight: '500',
	border: '2px solid #000',
})

globalStyle(`${briteScope}${navbarToggler}`, {
	vars: {
		[varBsBorderWidth]: '2px',
	},
})
