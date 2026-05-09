import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBodyBg,
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
import { materiaScope } from '../scope.css'

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

globalStyle(`${materiaScope}${horizontalRule}`, {
	margin: '1rem 0',
	color: 'inherit',
	border: 0,
	borderTop: `${varBsBorderWidth} solid`,
	opacity: 0.25,
})

globalStyle(`${materiaScope}${horizontalRuleCard}`, {
	marginRight: 0,
	marginLeft: 0,
})

globalStyle(`${materiaScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: '1em',
})

globalStyle(`${materiaScope}${link}`, {
	color: varBsLinkColor,
	textDecoration: 'underline',
})

globalStyle(`${materiaScope}${link}:hover`, {
	color: varBsLinkHoverColor,
})

globalStyle(`${materiaScope}${small}`, {
	fontSize: '0.875em',
})

globalStyle(`${materiaScope}${h1}`, {
	...headingBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '2.5rem' } },
})

globalStyle(`${materiaScope}${h2}`, {
	...headingBase,
	fontSize: 'calc(1.325rem + 0.9vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '2rem' } },
})

globalStyle(`${materiaScope}${h3}`, {
	...headingBase,
	fontSize: 'calc(1.3rem + 0.6vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '1.75rem' } },
})

globalStyle(`${materiaScope}${h4}`, {
	...headingBase,
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '1.5rem' } },
})

globalStyle(`${materiaScope}${h5}`, {
	...headingBase,
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${h6}`, {
	...headingBase,
	fontSize: '1rem',
})

// ─── Display headings ─────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${display1}`, {
	...displayBase,
	fontSize: 'calc(1.625rem + 4.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '5rem' } },
})

globalStyle(`${materiaScope}${display2}`, {
	...displayBase,
	fontSize: 'calc(1.575rem + 3.9vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4.5rem' } },
})

globalStyle(`${materiaScope}${display3}`, {
	...displayBase,
	fontSize: 'calc(1.525rem + 3.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4rem' } },
})

globalStyle(`${materiaScope}${display4}`, {
	...displayBase,
	fontSize: 'calc(1.475rem + 2.7vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3.5rem' } },
})

globalStyle(`${materiaScope}${display5}`, {
	...displayBase,
	fontSize: 'calc(1.425rem + 2.1vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3rem' } },
})

globalStyle(`${materiaScope}${display6}`, {
	...displayBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '2.5rem' } },
})

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${materiaScope}${markText}`, {
	padding: '0.1875em',
	color: '#444',
	backgroundColor: '#ffeacc',
})

globalStyle(`${materiaScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${materiaScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#666',
})

globalStyle(`${materiaScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${materiaScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${materiaScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${materiaScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${materiaScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${materiaScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${materiaScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

// ─── Images ───────────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${materiaScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

// ─── Figures ──────────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${figure}`, {
	display: 'inline-block',
	margin: '0 0 1rem',
})

globalStyle(`${materiaScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: 1,
})

globalStyle(`${materiaScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Placeholder images ───────────────────────────────────────────────────────

globalStyle(`${materiaScope}${bdPlaceholderImg}`, {
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

globalStyle(`${materiaScope}${bdPlaceholderImgLg}`, {
	'@media': { '(min-width: 768px)': { fontSize: '3.5rem' } },
})

globalStyle(`${materiaScope}${mediaMiddle}`, {
	verticalAlign: 'middle',
})

globalStyle(`${materiaScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`${materiaScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${materiaScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${materiaScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${materiaScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	textAlign: 'inherit',
})

globalStyle(`${materiaScope}${tableElement} > thead`, {
	verticalAlign: 'bottom',
})

globalStyle(`${materiaScope}${tableElement} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${materiaScope}${table}`, {
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

globalStyle(`${materiaScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${materiaScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${materiaScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${materiaScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})

globalStyle(`${materiaScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${materiaScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${materiaScope}${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${materiaScope}${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

// ─── Table colour variants (values from screenshots/materia/bootstrap.css) ────

globalStyle(`${materiaScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#222',
		[varBsTableBorderColor]: '#4e4e4e',
		[varBsTableStripedBg]: '#2d2d2d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#383838',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#333333',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#444',
		[varBsTableBg]: '#d3eafd',
		[varBsTableBorderColor]: '#a9bbca',
		[varBsTableStripedBg]: '#c8def0',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bed3e4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c3d8ea',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#444',
		[varBsTableBg]: '#ffffff',
		[varBsTableBorderColor]: '#cccccc',
		[varBsTableStripedBg]: '#f2f2f2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6e6e6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ececec',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#444',
		[varBsTableBg]: '#fad2d3',
		[varBsTableBorderColor]: '#c8a8a9',
		[varBsTableStripedBg]: '#eec8c8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e1bdbe',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e7c2c3',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#444',
		[varBsTableBg]: '#dbefdc',
		[varBsTableBorderColor]: '#afbfb0',
		[varBsTableStripedBg]: '#d0e3d1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c5d7c6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#cbddcc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#444',
		[varBsTableBg]: '#ffeacc',
		[varBsTableBorderColor]: '#ccbba3',
		[varBsTableStripedBg]: '#f2dec2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6d3b8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ecd8bd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#444',
		[varBsTableBg]: '#ebd4ef',
		[varBsTableBorderColor]: '#bcaabf',
		[varBsTableStripedBg]: '#dfc9e3',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d4bfd7',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d9c4dd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#444',
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

// ─── Inline code ──────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

