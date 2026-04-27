import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsFocusRingColor,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsPrimary,
	varBsSecondaryBg,
	varBsSecondaryColor,
	varBsWhite,
} from '../../../../theme-contract/_vars.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
	varBsNavLinkFontSize,
	varBsNavLinkFontWeight,
	varBsNavLinkHoverColor,
	varBsNavLinkPaddingX,
	varBsNavLinkPaddingY,
	varBsNavPillsBorderRadius,
	varBsNavPillsLinkActiveBg,
	varBsNavPillsLinkActiveColor,
	varBsNavTabsBorderColor,
	varBsNavTabsBorderRadius,
	varBsNavTabsBorderWidth,
	varBsNavTabsLinkActiveBg,
	varBsNavTabsLinkActiveBorderColor,
	varBsNavTabsLinkActiveColor,
	varBsNavTabsLinkHoverBorderColor,
} from '../../../../theme-contract/ui/nav/_vars.css'

export const navItemShow = style({})
export const navLinkActive = style({})
export const navLinkDisabled = style({})
export const show = style({})

export const navButtonReset = style({
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	textTransform: 'none',
	appearance: 'button',
	borderRadius: 0,
	selectors: {
		'&:not(:disabled)': {
			cursor: 'pointer',
		},
	},
})

export const navItem = style({})

export const nav = style({
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontSize]: '',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: varBsSecondaryColor,
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: 0,
	marginTop: 0,
	marginBottom: 0,
	listStyle: 'none',
})

export const navLink = style({
	display: 'block',
	padding: `${varBsNavLinkPaddingY} ${varBsNavLinkPaddingX}`,
	fontSize: varBsNavLinkFontSize,
	fontWeight: varBsNavLinkFontWeight,
	color: varBsNavLinkColor,
	textDecoration: 'none',
	background: 'none',
	border: 0,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
	selectors: {
		'&:hover, &:focus': {
			color: varBsNavLinkHoverColor,
		},
		'&:focus-visible': {
			outline: 0,
			boxShadow: `0 0 0 0.25rem ${varBsFocusRingColor}`,
		},
		[`&${navLinkDisabled}, &:disabled`]: {
			color: varBsNavLinkDisabledColor,
			pointerEvents: 'none',
			cursor: 'default',
		},
	},
})

export const navTabs = style({
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${navTabs} ${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${navTabs} ${navLink}:hover, ${navTabs} ${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${navTabs} ${navLink}${navLinkActive}, ${navTabs} ${navItemShow} ${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

export const navPills = style({
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: varBsWhite,
		[varBsNavPillsLinkActiveBg]: varBsPrimary,
	},
})

globalStyle(`${navPills} ${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${navPills} ${navLink}${navLinkActive}, ${navPills} ${navItemShow} > ${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

export const fade = style({
	transition: 'opacity 0.15s linear',
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${fade}:not(${show})`, {
	opacity: 0,
})

export const tabContent = style({})

export const tabPane = style({
	display: 'none',
})

export const tabPaneActive = style({
	display: 'block',
})