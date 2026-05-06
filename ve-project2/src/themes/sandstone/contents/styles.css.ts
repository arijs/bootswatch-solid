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
	tableCell,
	tableDanger,
	tableDark,
	tableElement,
	tableHeaderCell,
	tableHover,
	tableInfo,
	tableLight,
	tablePrimary,
	tableRow,
	tableSecondary,
	tableSection,
	tableSm,
	tableStriped,
	tableSuccess,
	tableWarning,
	table,
	inlineCode,
} from '../../../theme-contract/contents/contract.css'
import {
	varBsCodeColor,
	varBsFontMonospace,
} from '../../../theme-contract/_vars.css'
import { sandstoneScope } from '../scope.css'

// Helper to strip `var(` prefix/suffix for use in other var() calls
const cssVarName = (token: string) => token.slice(4, -1)

const headingBase = {
	marginTop: 0,
	marginBottom: '0.5rem',
	fontWeight: 400,
	lineHeight: 1.2,
	color: 'inherit',
} as const

const displayBase = {
	fontWeight: 300,
	lineHeight: 1.2,
} as const

// Source CSS literal conversion for generic hr.
globalStyle(`${sandstoneScope}${horizontalRule}`, {
	margin: '1rem 0',
	color: 'inherit',
	border: 0,
	borderTop: `${varBsBorderWidth} solid`,
	opacity: 0.25,
})

// Source CSS literal conversion for `.card > hr`.
globalStyle(`${sandstoneScope}${horizontalRuleCard}`, {
	marginRight: 0,
	marginLeft: 0,
})

// Source CSS literal conversion for generic p.
globalStyle(`${sandstoneScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

// Source CSS literal conversion for generic a and a:hover.
globalStyle(`${sandstoneScope}${link}`, {
	color: varBsLinkColor,
	textDecoration: 'underline',
})

globalStyle(`${sandstoneScope}${link}:hover`, {
	color: varBsLinkHoverColor,
})

// Source CSS literal conversion for `.small, small { font-size: 0.875em }`.
globalStyle(`${sandstoneScope}${small}`, {
	fontSize: '0.875em',
})

globalStyle(`${sandstoneScope}${h1}`, {
	...headingBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${sandstoneScope}${h2}`, {
	...headingBase,
	fontSize: 'calc(1.325rem + 0.9vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${sandstoneScope}${h3}`, {
	...headingBase,
	fontSize: 'calc(1.3rem + 0.6vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${sandstoneScope}${h4}`, {
	...headingBase,
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${sandstoneScope}${h5}`, {
	...headingBase,
	fontSize: '1.25rem',
})

globalStyle(`${sandstoneScope}${h6}`, {
	...headingBase,
	fontSize: '1rem',
})

// ─── Display headings ─────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${display1}`, {
	...displayBase,
	fontSize: 'calc(1.625rem + 4.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '5rem' } },
})

globalStyle(`${sandstoneScope}${display2}`, {
	...displayBase,
	fontSize: 'calc(1.575rem + 3.9vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4.5rem' } },
})

globalStyle(`${sandstoneScope}${display3}`, {
	...displayBase,
	fontSize: 'calc(1.525rem + 3.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4rem' } },
})

globalStyle(`${sandstoneScope}${display4}`, {
	...displayBase,
	fontSize: 'calc(1.475rem + 2.7vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3.5rem' } },
})

globalStyle(`${sandstoneScope}${display5}`, {
	...displayBase,
	fontSize: 'calc(1.425rem + 2.1vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3rem' } },
})

globalStyle(`${sandstoneScope}${display6}`, {
	...displayBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '2.5rem' } },
})

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${markText}`, {
	padding: '0.1875em',
	color: '#3e3f3a',
	backgroundColor: '#fff3cd',
})

globalStyle(`${sandstoneScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${sandstoneScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${sandstoneScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#8e8c84',
})

globalStyle(`${sandstoneScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${sandstoneScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${sandstoneScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${sandstoneScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${sandstoneScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${sandstoneScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${sandstoneScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

// ─── Images ───────────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${sandstoneScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

// ─── Figures ──────────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${figure}`, {
	display: 'inline-block',
	margin: '0 0 1rem',
})

globalStyle(`${sandstoneScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: 1,
})

globalStyle(`${sandstoneScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Placeholder images ───────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${bdPlaceholderImg}`, {
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

globalStyle(`${sandstoneScope}${bdPlaceholderImgLg}`, {
	'@media': { '(min-width: 768px)': { fontSize: '3.5rem' } },
})

globalStyle(`${sandstoneScope}${mediaMiddle}`, {
	verticalAlign: 'middle',
})

globalStyle(`${sandstoneScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

// Bootstrap reboot: thead, tbody, tfoot, tr { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${sandstoneScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${sandstoneScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: td, th { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${sandstoneScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: th { border-color: inherit; border-style: solid; border-width: 0; text-align: inherit }
globalStyle(`${sandstoneScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	textAlign: 'inherit',
})

globalStyle(`${sandstoneScope}${tableElement} > thead`, {
	verticalAlign: 'bottom',
})

globalStyle(`${sandstoneScope}${tableElement} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${sandstoneScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: varBsBorderColor,
		[varBsTableAccentBg]: 'transparent',
		[varBsTableStripedColor]: 'initial',
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: 'initial',
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: 'initial',
		[varBsTableHoverBg]: `rgba(${varBsEmphasisColorRgb}, 0.075)`,
	},
	width: '100%',
	marginBottom: '1rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${sandstoneScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${sandstoneScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${sandstoneScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})

globalStyle(`${sandstoneScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${sandstoneScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${sandstoneScope}${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${sandstoneScope}${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${sandstoneScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#3e3f3a',
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

globalStyle(`${sandstoneScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#d6dfe7',
		[varBsTableBorderColor]: '#abb2b9',
		[varBsTableStripedBg]: '#cbd4db',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c1c9d0',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c6ced6',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#e8e8e6',
		[varBsTableBorderColor]: '#babab8',
		[varBsTableStripedBg]: '#dcdcdb',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d1d1cf',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d7d7d5',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#f7dddc',
		[varBsTableBorderColor]: '#c6b1b0',
		[varBsTableStripedBg]: '#ebd2d1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dec7c6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e4cccc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#e9f3db',
		[varBsTableBorderColor]: '#bac2af',
		[varBsTableStripedBg]: '#dde7d0',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d2dbc5',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d8e1cb',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#fde5d8',
		[varBsTableBorderColor]: '#cab7ad',
		[varBsTableStripedBg]: '#f0dacd',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e4cec2',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ead4c8',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})
// Source CSS: code { font-family: var(--bs-font-monospace); font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
globalStyle(`${sandstoneScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
globalStyle(`${sandstoneScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#d4eef9',
		[varBsTableBorderColor]: '#aabec7',
		[varBsTableStripedBg]: '#c9e2ed',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bfd6e0',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c4dce6',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#f8f5f0',
		[varBsTableBorderColor]: '#c6c4c0',
		[varBsTableStripedBg]: '#ece9e4',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfddd8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e5e3de',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})



