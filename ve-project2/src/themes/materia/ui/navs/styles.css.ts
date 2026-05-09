import { globalStyle } from '@vanilla-extract/css'
import {
	nav,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navPills,
	navTabs,
} from '../../../../theme-contract/ui/navs/contract.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
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
} from '../../../../theme-contract/ui/navs/_vars.css'
import {
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBodyBg,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsPrimary,
	varBsSecondaryBg,
} from '../../../../theme-contract/_vars.css'
import { materiaScope } from '../../scope.css'

globalStyle(`${materiaScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: '#bbb',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: 0,
	marginBottom: 0,
	listStyle: 'none',
})

globalStyle(`${materiaScope}${navLink}`, {
	display: 'block',
	padding: `${varBsNavLinkPaddingY} ${varBsNavLinkPaddingX}`,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	fontWeight: varBsNavLinkFontWeight,
	lineHeight: 'inherit',
	color: varBsNavLinkColor,
	textDecoration: 'none',
	background: 'none',
	appearance: 'none',
	border: 0,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${navLink}:hover, ${materiaScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${materiaScope}${navLink}:focus-visible`, {
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(
	`${materiaScope}${navLink}${navLinkDisabled}, ${materiaScope}${navLink}:disabled`,
	{
		color: varBsNavLinkDisabledColor,
		pointerEvents: 'none',
		cursor: 'default',
	},
)

globalStyle(`${materiaScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: 'transparent',
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} transparent`,
		[varBsNavTabsLinkActiveColor]: '#444',
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: 'transparent',
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${materiaScope}${navTabs} ${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${materiaScope}${navTabs} ${navLink}:hover, ${materiaScope}${navTabs} ${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${materiaScope}${navTabs} ${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// Materia tab style: underline active/hover state and remove tab borders.
globalStyle(
	`${materiaScope}${navTabs} ${navLink}, ${materiaScope}${navTabs} ${navLink}:focus`,
	{
		marginRight: 0,
		color: '#444',
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'inset 0 -1px 0 #ddd',
		transition: 'color 0.2s, box-shadow 0.2s',
	},
)

globalStyle(
	`${materiaScope}${navTabs} ${navLink}:hover, ${materiaScope}${navTabs} ${navLink}:focus:hover`,
	{
		color: '#2196f3',
		backgroundColor: 'transparent',
		boxShadow: 'inset 0 -2px 0 #2196f3',
	},
)

globalStyle(
	`${materiaScope}${navTabs} ${navLink}${navLinkActive}, ${materiaScope}${navTabs} ${navLink}${navLinkActive}:focus`,
	{
		color: '#2196f3',
		border: 'none',
		boxShadow: 'inset 0 -2px 0 #2196f3',
	},
)

globalStyle(
	`${materiaScope}${navTabs} ${navLink}${navLinkActive}:hover, ${materiaScope}${navTabs} ${navLink}${navLinkActive}:focus:hover`,
	{
		color: '#2196f3',
		border: 'none',
	},
)

globalStyle(`${materiaScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: varBsPrimary,
	},
})

globalStyle(`${materiaScope}${navPills} ${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${materiaScope}${navPills} ${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
	backgroundImage: 'var(--bs-gradient)',
})

