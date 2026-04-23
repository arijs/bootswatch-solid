import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBodyBg,
	varBsEmphasisColor,
	varBsEmphasisColorRgb,
	varBsHeadingColor,
	varBsSecondaryColor,
} from '../../../theme-contract/_vars.css'
import {
	varBsTableAccentBg,
	varBsTableActiveBg,
	varBsTableActiveColor,
	varBsTableBg,
	varBsTableBgState,
	varBsTableBgType,
	varBsTableBorderColor,
	varBsTableColor,
	varBsTableColorState,
	varBsTableColorType,
	varBsTableHoverBg,
	varBsTableHoverColor,
	varBsTableStripedBg,
	varBsTableStripedColor,
} from '../../../theme-contract/contents/_vars.css'

const headingBase = {
	marginTop: 0,
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: 1.2,
	color: varBsHeadingColor,
} as const

const displayBase = {
	fontWeight: '300',
	lineHeight: 1.2,
} as const

const cssVarName = (token: string) => token.slice(4, -1)

export const alignSelfStart = style({
	alignSelf: 'flex-start !important',
})

export const bdExample = style({})
export const bdHeading = style({})

export const bdPlaceholderImg = style({
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

export const bdPlaceholderImgLg = style({
	'@media': {
		'(min-width: 768px)': {
			fontSize: '3.5rem',
		},
	},
})

export const blockquote = style({
	marginBottom: '1rem',
	fontSize: '1.25rem',
})
globalStyle(`${blockquote} > :last-child`, {
	marginBottom: 0,
})

export const blockquoteFooter = style({
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#6c757d',
})
globalStyle(`${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

export const display1 = style({
	...displayBase,
	fontSize: 'calc(1.625rem + 4.5vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '5rem',
		},
	},
})

export const display2 = style({
	...displayBase,
	fontSize: 'calc(1.575rem + 3.9vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4.5rem',
		},
	},
})

export const display3 = style({
	...displayBase,
	fontSize: 'calc(1.525rem + 3.3vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

export const display4 = style({
	...displayBase,
	fontSize: 'calc(1.475rem + 2.7vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3.5rem',
		},
	},
})

export const display5 = style({
	...displayBase,
	fontSize: 'calc(1.425rem + 2.1vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

export const display6 = style({
	...displayBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

export const figure = style({
	display: 'inline-block',
})

export const figureCaption = style({
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

export const figureImg = style({
	marginBottom: '0.5rem',
	lineHeight: 1,
})

export const fwBold = style({
	fontWeight: '700 !important',
})

export const h1 = style({
	...headingBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

export const h2 = style({
	...headingBase,
	fontSize: 'calc(1.325rem + 0.9vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

export const h3 = style({
	...headingBase,
	fontSize: 'calc(1.3rem + 0.6vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

export const h4 = style({
	...headingBase,
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

export const h5 = style({
	...headingBase,
	fontSize: '1.25rem',
})

export const h6 = style({
	...headingBase,
	fontSize: '1rem',
})

export const imgFluid = style({
	maxWidth: '100%',
	height: 'auto',
})

export const imgThumbnail = style({
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

export const lead = style({
	fontSize: '1.25rem',
	fontWeight: '300',
})

export const listInline = style({
	paddingLeft: 0,
	listStyle: 'none',
})

export const listInlineItem = style({
	display: 'inline-block',
})
globalStyle(`${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

export const listUnstyled = style({
	paddingLeft: 0,
	listStyle: 'none',
})

export const mb3 = style({
	marginBottom: '1rem !important',
})

export const mbXl2 = style({
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

export const mt5 = style({
	marginTop: '3rem !important',
})

export const mtXl0 = style({
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

export const my3 = style({
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

export const pb2 = style({
	paddingBottom: '0.5rem !important',
})

export const pbXl3 = style({
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

export const pt3 = style({
	paddingTop: '1rem !important',
})

export const ptXl5 = style({
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

export const pwhookTableHover = style({})

export const rounded = style({
	borderRadius: `${varBsBorderRadius} !important`,
})

export const stickyXlTop = style({
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: 0,
			zIndex: 1020,
		},
	},
})

export const table = style({
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: varBsEmphasisColor,
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: varBsBorderColor,
		[varBsTableAccentBg]: 'transparent',
		[varBsTableStripedColor]: varBsEmphasisColor,
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: varBsEmphasisColor,
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: varBsEmphasisColor,
		[varBsTableHoverBg]: `rgba(${varBsEmphasisColorRgb}, 0.075)`,
	},
	width: '100%',
	marginBottom: '1rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow:
		`inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${table} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${table} > thead`, {
	verticalAlign: 'bottom',
})

export const tableBordered = style({})
globalStyle(`${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})
globalStyle(`${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

export const tableBorderless = style({})
globalStyle(`${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})
globalStyle(`${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

export const tableDanger = style({
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f8d7da',
		[varBsTableBorderColor]: '#c6acae',
		[varBsTableStripedBg]: '#eccccf',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfc2c4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e5c7ca',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

export const tableDark = style({
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#212529',
		[varBsTableBorderColor]: '#4d5154',
		[varBsTableStripedBg]: '#2c3034',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#373b3e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#323539',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

export const tableHover = style({})
globalStyle(`${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

export const tableInfo = style({
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#cff4fc',
		[varBsTableBorderColor]: '#a6c3ca',
		[varBsTableStripedBg]: '#c5e8ef',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#badce3',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#bfe2e9',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

export const tableLight = style({
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f8f9fa',
		[varBsTableBorderColor]: '#c6c7c8',
		[varBsTableStripedBg]: '#ecedee',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfe0e1',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e5e6e7',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

export const tablePrimary = style({
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#cfe2ff',
		[varBsTableBorderColor]: '#a6b5cc',
		[varBsTableStripedBg]: '#c5d7f2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bacbe6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#bfd1ec',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

export const tableSecondary = style({
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e2e3e5',
		[varBsTableBorderColor]: '#b5b6b7',
		[varBsTableStripedBg]: '#d7d8da',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#cbccce',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d1d2d4',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

export const tableSm = style({})
globalStyle(`${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

export const tableStriped = style({})
globalStyle(`${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

export const tableSuccess = style({
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d1e7dd',
		[varBsTableBorderColor]: '#a7b9b1',
		[varBsTableStripedBg]: '#c7dbd2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bcd0c7',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c1d6cc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

export const tableWarning = style({
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fff3cd',
		[varBsTableBorderColor]: '#ccc2a4',
		[varBsTableStripedBg]: '#f2e7c3',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6dbb9',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ece1be',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})
