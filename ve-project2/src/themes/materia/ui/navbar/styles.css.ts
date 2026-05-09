import { globalStyle } from '@vanilla-extract/css'
import {
	navbar,
	navbarBgLight,
	navbarBrand,
	navbarCollapse,
	navbarDarkBgPrimary,
	navbarExpandLg,
	navbarNav,
	navbarToggler,
	navbarTogglerIcon,
} from '../../../../theme-contract/ui/navbar/contract.css'
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
} from '../../../../theme-contract/ui/navbar/_vars.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
	varBsNavLinkFontWeight,
	varBsNavLinkHoverColor,
	varBsNavLinkPaddingX,
	varBsNavLinkPaddingY,
} from '../../../../theme-contract/ui/navs/_vars.css'
import {
	varBsBorderWidth,
	varBsEmphasisColorRgb,
	varBsGradient,
} from '../../../../theme-contract/_vars.css'
import { containerFluid } from '../../../../theme-contract/layout/container.css'
import { formControl } from '../../../../theme-contract/forms/contract.css'
import { navLink, navLinkActive } from '../../../../theme-contract/ui/navs/contract.css'
import { materiaScope } from '../../scope.css'

globalStyle(`${materiaScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: '0',
		[varBsNavbarPaddingY]: '1rem',
		[varBsNavbarColor]: `rgba(${varBsEmphasisColorRgb}, 0.65)`,
		[varBsNavbarHoverColor]: `rgba(${varBsEmphasisColorRgb}, 0.8)`,
		[varBsNavbarDisabledColor]: `rgba(${varBsEmphasisColorRgb}, 0.3)`,
		[varBsNavbarActiveColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandPaddingY]: '0.3125rem',
		[varBsNavbarBrandMarginEnd]: '1rem',
		[varBsNavbarBrandFontSize]: '1.25rem',
		[varBsNavbarBrandColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandHoverColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarNavLinkPaddingX]: '0.5rem',
		[varBsNavbarTogglerPaddingY]: '0.25rem',
		[varBsNavbarTogglerPaddingX]: '0.75rem',
		[varBsNavbarTogglerFontSize]: '1.25rem',
		[varBsNavbarTogglerIconBg]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2868, 68, 68, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
		[varBsNavbarTogglerBorderColor]: `rgba(${varBsEmphasisColorRgb}, 0.15)`,
		[varBsNavbarTogglerBorderRadius]: '0.25rem',
		[varBsNavbarTogglerFocusWidth]: '0.25rem',
		[varBsNavbarTogglerTransition]: 'box-shadow 0.15s ease-in-out',
	},
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: `${varBsNavbarPaddingY} ${varBsNavbarPaddingX}`,
	backgroundImage: varBsGradient,
	border: 'none',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
})

globalStyle(`${materiaScope}${navbar} > ${materiaScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${materiaScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: '24px',
	color: varBsNavbarBrandColor,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
})

globalStyle(`${materiaScope}${navbarBrand}:hover, ${materiaScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${materiaScope}${navbarNav}`, {
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
	paddingLeft: 0,
	marginBottom: 0,
	listStyle: 'none',
})

globalStyle(`${materiaScope}${navbarNav} ${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${materiaScope}${navbarNav} .dropdown-menu`, {
	position: 'static',
})

globalStyle(`${materiaScope}${navbarNav} ${navLink}`, {
	paddingTop: '0.9rem',
	paddingBottom: '0.9rem',
})

globalStyle(`${materiaScope}${navbarCollapse}`, {
	display: 'none',
	flexGrow: 1,
	flexBasis: '100%',
	alignItems: 'center',
})

globalStyle(`${materiaScope}${navbarToggler}`, {
	padding: `${varBsNavbarTogglerPaddingY} ${varBsNavbarTogglerPaddingX}`,
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: 1,
	color: varBsNavbarColor,
	backgroundColor: 'transparent',
	border: `${varBsBorderWidth} solid ${varBsNavbarTogglerBorderColor}`,
	borderRadius: varBsNavbarTogglerBorderRadius,
	transition: varBsNavbarTogglerTransition,
})

globalStyle(`${materiaScope}${navbarToggler}:hover`, {
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${navbarToggler}:focus`, {
	textDecoration: 'none',
	outline: 0,
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

globalStyle(`${materiaScope}${navbarTogglerIcon}`, {
	display: 'inline-block',
	width: '1.5em',
	height: '1.5em',
	verticalAlign: 'middle',
	backgroundImage: varBsNavbarTogglerIconBg,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: '100%',
})

globalStyle(`${materiaScope}${navbarExpandLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${navbarNav}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${navbarNav} .dropdown-menu`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${navbarNav} ${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${navbarCollapse}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${navbarToggler}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbar}${navbarBgLight}`, {
	backgroundColor: '#f8f9fa',
})

globalStyle(`${materiaScope}${navbar}${navbarDarkBgPrimary}`, {
	vars: {
		[varBsNavbarColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsNavbarHoverColor]: '#fff',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.25)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: 'rgba(255, 255, 255, 0.1)',
		[varBsNavbarTogglerIconBg]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
	},
	backgroundColor: '#2196f3',
})

globalStyle(
	`${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='search'], ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='text'], ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='password'], ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='email'], ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='number'], ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='tel']`,
	{
		color: '#fff',
		boxShadow: '0 -1px 0 rgba(255, 255, 255, 0.5) inset',
	},
)

globalStyle(
	`${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='search']:focus, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='text']:focus, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='password']:focus, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='email']:focus, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='number']:focus, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='tel']:focus`,
	{
		boxShadow: '0 -2px 0 rgb(255, 255, 255) inset',
	},
)

globalStyle(
	`${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='search']::placeholder, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='text']::placeholder, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='password']::placeholder, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='email']::placeholder, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='number']::placeholder, ${materiaScope}${navbar}${navbarDarkBgPrimary} input[type='tel']::placeholder`,
	{
		color: 'rgba(255, 255, 255, 0.5)',
	},
)

globalStyle(`${materiaScope}${navbar} ${formControl}`, {
	letterSpacing: '0.1px',
})

