import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBodyBg,
	varBsEmphasisColor,
	varBsEmphasisColorRgb,
	varBsHighlightBg,
	varBsHighlightColor,
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
import { solarScope } from '../scope.css'

// Helper to strip `var(` prefix/suffix for use in other var() calls
const cssVarName = (token: string) => token.slice(4, -1)

const headingBase = {
	marginTop: 0,
	marginBottom: '0.5rem',
	fontWeight: 500,
	lineHeight: 1.2,
	color: 'inherit',
} as const

const displayBase = {
	fontWeight: 300,
	lineHeight: 1.2,
} as const

// Source CSS literal conversion for generic hr.
globalStyle(`${solarScope}${horizontalRule}`, {
	margin: '1rem 0',
	color: 'inherit',
	border: 0,
	borderTop: `${varBsBorderWidth} solid`,
	opacity: 0.25,
})

// Source CSS literal conversion for `.card > hr`.
globalStyle(`${solarScope}${horizontalRuleCard}`, {
	marginRight: 0,
	marginLeft: 0,
})

// Source CSS literal conversion for generic p.
globalStyle(`${solarScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

// Source CSS literal conversion for generic a and a:hover.
globalStyle(`${solarScope}${link}`, {
	color: varBsLinkColor,
	textDecoration: 'underline',
})

globalStyle(`${solarScope}${link}:hover`, {
	color: varBsLinkHoverColor,
})

// Source CSS literal conversion for `.small, small { font-size: 0.875em }`.
globalStyle(`${solarScope}${small}`, {
	fontSize: '0.875em',
})

globalStyle(`${solarScope} b, ${solarScope} strong`, {
	fontWeight: 'bolder',
})

globalStyle(`${solarScope}${h1}`, {
	...headingBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${solarScope}${h2}`, {
	...headingBase,
	fontSize: 'calc(1.325rem + 0.9vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${solarScope}${h3}`, {
	...headingBase,
	fontSize: 'calc(1.3rem + 0.6vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${solarScope}${h4}`, {
	...headingBase,
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${solarScope}${h5}`, {
	...headingBase,
	fontSize: '1.25rem',
})

globalStyle(`${solarScope}${h6}`, {
	...headingBase,
	fontSize: '1rem',
})

// ─── Display headings ─────────────────────────────────────────────────────────

globalStyle(`${solarScope}${display1}`, {
	...displayBase,
	fontSize: 'calc(1.625rem + 4.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '5rem' } },
})

globalStyle(`${solarScope}${display2}`, {
	...displayBase,
	fontSize: 'calc(1.575rem + 3.9vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4.5rem' } },
})

globalStyle(`${solarScope}${display3}`, {
	...displayBase,
	fontSize: 'calc(1.525rem + 3.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4rem' } },
})

globalStyle(`${solarScope}${display4}`, {
	...displayBase,
	fontSize: 'calc(1.475rem + 2.7vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3.5rem' } },
})

globalStyle(`${solarScope}${display5}`, {
	...displayBase,
	fontSize: 'calc(1.425rem + 2.1vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3rem' } },
})

globalStyle(`${solarScope}${display6}`, {
	...displayBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '2.5rem' } },
})

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${solarScope}${markText}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${solarScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${solarScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${solarScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#839496',
})

globalStyle(`${solarScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${solarScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${solarScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${solarScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${solarScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${solarScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${solarScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

// ─── Images ───────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${solarScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

// ─── Figures ──────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${figure}`, {
	display: 'inline-block',
	margin: '0 0 1rem',
})

globalStyle(`${solarScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: 1,
})

globalStyle(`${solarScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Placeholder images ───────────────────────────────────────────────────────

globalStyle(`${solarScope}${bdPlaceholderImg}`, {
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

globalStyle(`${solarScope}${bdPlaceholderImgLg}`, {
	'@media': { '(min-width: 768px)': { fontSize: '3.5rem' } },
})

globalStyle(`${solarScope}${mediaMiddle}`, {
	verticalAlign: 'middle',
})

globalStyle(`${solarScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

// Bootstrap reboot: thead, tbody, tfoot, tr { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${solarScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${solarScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: td, th { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${solarScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: th { border-color: inherit; border-style: solid; border-width: 0; text-align: inherit }
globalStyle(`${solarScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	textAlign: 'inherit',
})

globalStyle(`${solarScope}${tableElement} > thead`, {
	verticalAlign: 'bottom',
})

globalStyle(`${solarScope}${tableElement} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${solarScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: '#073642',
		[varBsTableAccentBg]: 'rgba(255, 255, 255, 0.05)',
		[varBsTableStripedColor]: 'initial',
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: 'initial',
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: 'initial',
		[varBsTableHoverBg]: 'rgba(255, 255, 255, 0.075)',
	},
	width: '100%',
	marginBottom: '1rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${solarScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${solarScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${solarScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})

globalStyle(`${solarScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${solarScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${solarScope}${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${solarScope}${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${solarScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#073642',
		[varBsTableBorderColor]: '#395e68',
		[varBsTableStripedBg]: '#13404b',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#204a55',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#1a4550',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#b58900',
		[varBsTableBorderColor]: '#c4a133',
		[varBsTableStripedBg]: '#b98f0d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#bc951a',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#bb9213',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#839496',
		[varBsTableBorderColor]: '#9ca9ab',
		[varBsTableStripedBg]: '#89999b',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#8f9fa1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#8c9c9e',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#d33682',
		[varBsTableBorderColor]: '#dc5e9b',
		[varBsTableStripedBg]: '#d54088',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#d74a8f',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#d6458b',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#2aa198',
		[varBsTableBorderColor]: '#55b4ad',
		[varBsTableStripedBg]: '#35a69d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#3faaa2',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#3aa8a0',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#cb4b16',
		[varBsTableBorderColor]: '#d56f45',
		[varBsTableStripedBg]: '#ce5422',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#d05d2d',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#cf5927',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})
// Source CSS: code { font-family: var(--bs-font-monospace); font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
globalStyle(`${solarScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
globalStyle(`${solarScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#268bd2',
		[varBsTableBorderColor]: '#51a2db',
		[varBsTableStripedBg]: '#3191d4',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#3c97d7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#3694d5',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fdf6e3',
		[varBsTableBorderColor]: '#cac5b6',
		[varBsTableStripedBg]: '#f0ead8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e4ddcc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#eae4d2',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

