import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

import { varBsBodyBg, varBsBorderWidth, varBsEmphasisColorRgb } from '../../../../theme-contract/_vars.css'
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
	tableCell,
	tableHead,
	tableHeaderCell,
	tableRow,
	tableSection,
} from '../../../../theme-contract/contents/tables/contract.css'

import {
	table,
	tableActive,
	tableBordered,
	tableBorderless,
	tableDanger,
	tableDark,
	tableGroupDivider,
	tableHover,
	tableInfo,
	tableLight,
	tablePrimary,
	tableResponsive,
	tableResponsiveLg,
	tableResponsiveMd,
	tableResponsiveSm,
	tableResponsiveXl,
	tableResponsiveXxl,
	tableSecondary,
	tableSm,
	tableStriped,
	tableStripedColumns,
	tableSuccess,
	tableWarning,
} from '../../../../theme-contract/contents/tables/contract.css'

globalStyle(`${luxScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: 'rgba(0, 0, 0, 0.05)',
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

globalStyle(`${luxScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${luxScope}${table} > ${luxScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${luxScope}${table} > ${luxScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${luxScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${luxScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${luxScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${luxScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${luxScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${luxScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${luxScope}${tableStriped} > ${luxScope}${tableSection} > ${luxScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${luxScope}${tableStripedColumns} > :not(caption) > ${luxScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${luxScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${luxScope}${tableHover} > ${luxScope}${tableSection} > ${luxScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${luxScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d1d1d1',
		[varBsTableBorderColor]: '#a7a7a7',
		[varBsTableStripedBg]: '#c7c7c7',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bcbcbc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c1c1c1',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: 'white',
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

globalStyle(`${luxScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#dbf2e3',
		[varBsTableBorderColor]: '#afc2b6',
		[varBsTableStripedBg]: '#d0e6d8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c5dacc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#cbe0d2',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d2ebf5',
		[varBsTableBorderColor]: '#a8bcc4',
		[varBsTableStripedBg]: '#c8dfe9',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bdd4dd',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c2d9e3',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fcefdc',
		[varBsTableBorderColor]: '#cabfb0',
		[varBsTableStripedBg]: '#efe3d1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e3d7c6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e9ddcc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
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

globalStyle(`${luxScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f0f1f2',
		[varBsTableBorderColor]: '#c0c1c2',
		[varBsTableStripedBg]: '#e4e5e6',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d8d9da',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#dedfe0',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#343a40',
		[varBsTableBorderColor]: '#5d6166',
		[varBsTableStripedBg]: '#3e444a',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#484e53',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#43494e',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${luxScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${table} ${luxScope}${tableHeaderCell}`, {
	padding: '1.5rem',
})

globalStyle(`${luxScope}${table} ${luxScope}${tableCell}`, {
	padding: '1.5rem',
})

globalStyle(`${luxScope}${tableSm} ${luxScope}${tableHeaderCell}`, {
	padding: '0.75rem',
})

globalStyle(`${luxScope}${tableSm} ${luxScope}${tableCell}`, {
	padding: '0.75rem',
})

globalStyle(`${luxScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})
