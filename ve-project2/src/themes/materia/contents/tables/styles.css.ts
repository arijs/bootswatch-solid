import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderColor,
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
import { materiaScope } from '../../scope.css'

const cssVarName = (token: string) => token.slice(4, -1)

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
