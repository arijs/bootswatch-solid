import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderWidth,
	varBsBodyBg,
	varBsEmphasisColorRgb,
} from '../../../../theme-contract/_vars.css'
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
} from '../../../../theme-contract/contents/_vars.css'
import {
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
} from '../../../../theme-contract/contents/contract.css'
import { sketchyScope } from '../../scope.css'

const cssVarName = (token: string) => token.slice(4, -1)

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`${sketchyScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${sketchyScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${sketchyScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${sketchyScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	textAlign: 'inherit',
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
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: '#333',
		[varBsTableAccentBg]: 'transparent',
		[varBsTableStripedColor]: 'initial',
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: 'initial',
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: 'initial',
		[varBsTableHoverBg]: '#fff',
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

globalStyle(`${sketchyScope}${tableBordered}`, {
	overflow: 'hidden',
	borderSpacing: 0,
	borderCollapse: 'separate',
	backgroundColor: '#333',
	borderRadius: '5px 25px 5px 25px / 25px 5px 25px 5px',
})

globalStyle(`${sketchyScope}${tableBordered} th, ${sketchyScope}${tableBordered} td`, {
	borderRadius: '5px 5px 25px 4px / 5px 4px 3px 5px',
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
		[varBsTableBg]: '#555',
		[varBsTableBorderColor]: '#777777',
		[varBsTableStripedBg]: '#5e5e5e',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#666666',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#626262',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope} table th, ${sketchyScope} table td`, {
	backgroundColor: '#fff',
})

globalStyle(
	`${sketchyScope}${tableDark} th, ${sketchyScope}${tableDark} td, ${sketchyScope}${tableDark}${tableHover} .table-active:hover > th, ${sketchyScope}${tableDark}${tableHover} .table-active:hover > td`,
	{
		backgroundColor: '#333',
	},
)

globalStyle(`${sketchyScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#212529',
		[varBsTableBg]: '#d6d6d6',
		[varBsTableBorderColor]: '#ababab',
		[varBsTableStripedBg]: '#cbcbcb',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#c1c1c1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#c6c6c6',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#212529',
		[varBsTableBg]: '#dddddd',
		[varBsTableBorderColor]: '#b1b1b1',
		[varBsTableStripedBg]: '#d2d2d2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c7c7c7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#cccccc',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#212529',
		[varBsTableBg]: '#f8d7da',
		[varBsTableBorderColor]: '#c6acae',
		[varBsTableStripedBg]: '#eccccf',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfc2c4',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#e5c7ca',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#212529',
		[varBsTableBg]: '#d4edda',
		[varBsTableBorderColor]: '#aabeae',
		[varBsTableStripedBg]: '#c9e1cf',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bfd5c4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c4dbca',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#212529',
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
		[varBsTableColor]: '#212529',
		[varBsTableBg]: '#d1ecf1',
		[varBsTableBorderColor]: '#a7bdc1',
		[varBsTableStripedBg]: '#c7e0e5',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bcd4d9',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c1dadf',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#212529',
		[varBsTableBg]: '#fff',
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
