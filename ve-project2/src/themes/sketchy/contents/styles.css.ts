import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBodyBg,
	varBsEmphasisColor,
	varBsEmphasisColorRgb,
	varBsLinkColor,
	varBsLinkHoverColor,
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
import {
	bdPlaceholderImg,
	bdPlaceholderImgLg,
	blockquote,
	blockquoteFooter,
	display1,
	display2,
	display3,
	display4,
	display5,
	display6,
	figure,
	figureCaption,
	figureImg,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	horizontalRule,
	horizontalRuleCard,
	imgFluid,
	imgThumbnail,
	lead,
	link,
	listBase,
	listInline,
	listInlineItem,
	listIndented,
	listNested,
	listUnstyled,
	markText,
	mediaMiddle,
	paragraph,
	rounded,
	small,
	smallText,
	tableBordered,
	tableBorderless,
	tableDanger,
	tableDark,
	tableElement,
	tableHover,
	tableInfo,
	tableLight,
	tablePrimary,
	tableSecondary,
	tableSm,
	tableStriped,
	tableSuccess,
	tableWarning,
	table,
} from '../../../theme-contract/contents/contract.css'
import { sketchyScope } from '../scope.css'

const cssVarName = (token: string) => token.slice(4, -1)

const headingBase = {
	marginTop: 0,
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: 500,
	lineHeight: 1.2,
	color: 'inherit',
} as const

const displayBase = {
	fontWeight: 300,
	lineHeight: 1.2,
} as const

// Source CSS literal conversion for generic hr.
globalStyle(`${sketchyScope}${horizontalRule}`, {
	margin: '1rem 0',
	color: 'inherit',
	border: 0,
	borderTop: `${varBsBorderWidth} solid`,
	opacity: 0.25,
})

// Source CSS literal conversion for `.card > hr`.
globalStyle(`${sketchyScope}${horizontalRuleCard}`, {
	marginRight: 0,
	marginLeft: 0,
})

// Source CSS literal conversion for generic p.
globalStyle(`${sketchyScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

// Source CSS literal conversion for generic a and a:hover.
globalStyle(`${sketchyScope}${link}`, {
	color: varBsLinkColor,
	textDecoration: 'underline',
})

globalStyle(`${sketchyScope}${link}:hover`, {
	color: varBsLinkHoverColor,
})

// Source CSS literal conversion for `.small, small { font-size: 0.875em }`.
globalStyle(`${sketchyScope}${small}`, {
	fontSize: '0.875em',
})

globalStyle(`${sketchyScope}${h1}`, {
	...headingBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${sketchyScope}${h2}`, {
	...headingBase,
	fontSize: 'calc(1.325rem + 0.9vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${sketchyScope}${h3}`, {
	...headingBase,
	fontSize: 'calc(1.3rem + 0.6vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${sketchyScope}${h4}`, {
	...headingBase,
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${sketchyScope}${h5}`, {
	...headingBase,
	fontSize: '1.25rem',
})

globalStyle(`${sketchyScope}${h6}`, {
	...headingBase,
	fontSize: '1rem',
})

// ─── Display headings ─────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${display1}`, {
	...displayBase,
	fontSize: 'calc(1.625rem + 4.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '5rem' } },
})

globalStyle(`${sketchyScope}${display2}`, {
	...displayBase,
	fontSize: 'calc(1.575rem + 3.9vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4.5rem' } },
})

globalStyle(`${sketchyScope}${display3}`, {
	...displayBase,
	fontSize: 'calc(1.525rem + 3.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4rem' } },
})

globalStyle(`${sketchyScope}${display4}`, {
	...displayBase,
	fontSize: 'calc(1.475rem + 2.7vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3.5rem' } },
})

globalStyle(`${sketchyScope}${display5}`, {
	...displayBase,
	fontSize: 'calc(1.425rem + 2.1vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3rem' } },
})

globalStyle(`${sketchyScope}${display6}`, {
	...displayBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '2.5rem' } },
})

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${markText}`, {
	padding: '0.1875em',
	color: '#212529',
	backgroundColor: '#fff3cd',
})

globalStyle(`${sketchyScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${sketchyScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${sketchyScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#6c757d',
})

globalStyle(`${sketchyScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${sketchyScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${sketchyScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${sketchyScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${sketchyScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${sketchyScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${sketchyScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

// ─── Images ───────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${sketchyScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

// ─── Figures ──────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${figure}`, {
	display: 'inline-block',
	margin: '0 0 1rem',
})

globalStyle(`${sketchyScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: 1,
})

globalStyle(`${sketchyScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Placeholder images ───────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${bdPlaceholderImg}`, {
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

globalStyle(`${sketchyScope}${bdPlaceholderImgLg}`, {
	'@media': { '(min-width: 768px)': { fontSize: '3.5rem' } },
})

globalStyle(`${sketchyScope}${mediaMiddle}`, {
	verticalAlign: 'middle',
})

globalStyle(`${sketchyScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`${sketchyScope}${tableElement} > thead`, {
	verticalAlign: 'bottom',
})

globalStyle(`${sketchyScope}${tableElement} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${sketchyScope}${table}`, {
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

globalStyle(`${sketchyScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${sketchyScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${sketchyScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${sketchyScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})

globalStyle(`${sketchyScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${sketchyScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${sketchyScope}${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${sketchyScope}${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${sketchyScope}${tableDark}`, {
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

globalStyle(`${sketchyScope}${tablePrimary}`, {
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

globalStyle(`${sketchyScope}${tableSecondary}`, {
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

globalStyle(`${sketchyScope}${tableDanger}`, {
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

globalStyle(`${sketchyScope}${tableSuccess}`, {
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

globalStyle(`${sketchyScope}${tableWarning}`, {
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

globalStyle(`${sketchyScope}${tableInfo}`, {
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

globalStyle(`${sketchyScope}${tableLight}`, {
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
