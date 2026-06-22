import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { journalScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderWidth,
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

import { tableHead, tableRow, tableSection } from '../../../../theme-contract/contents/tables/contract.css'

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

globalStyle(`${journalScope}${table}`, {
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

globalStyle(`${journalScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${journalScope}${table} > ${journalScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${journalScope}${table} > ${journalScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${journalScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${journalScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${journalScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${journalScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${journalScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${journalScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${journalScope}${tableStriped} > ${journalScope}${tableSection} > ${journalScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${journalScope}${tableStripedColumns} > :not(caption) > ${journalScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${journalScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${journalScope}${tableHover} > ${journalScope}${tableSection} > ${journalScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${journalScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fbe1e0',
		[varBsTableBorderColor]: '#c9b4b3',
		[varBsTableStripedBg]: '#eed6d5',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#e2cbca',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#e8d0cf',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${journalScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#eeeeee',
		[varBsTableBorderColor]: '#bebebe',
		[varBsTableStripedBg]: '#e2e2e2',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#d6d6d6',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: 'gainsboro',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${journalScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d3f0db',
		[varBsTableBorderColor]: '#a9c0af',
		[varBsTableStripedBg]: '#c8e4d0',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#bed8c5',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#c3decb',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${journalScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#d6e0eb',
		[varBsTableBorderColor]: '#dee6ef',
		[varBsTableStripedBg]: '#d8e2ec',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#dae3ed',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#d9e2ed',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${journalScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fdfad3',
		[varBsTableBorderColor]: '#cac8a9',
		[varBsTableStripedBg]: '#f0eec8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e4e1be',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#eae7c3',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${journalScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fde4cc',
		[varBsTableBorderColor]: '#cab6a3',
		[varBsTableStripedBg]: '#f0d9c2',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#e4cdb8',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ead3bd',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${journalScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f8f9fa',
		[varBsTableBorderColor]: '#c6c7c8',
		[varBsTableStripedBg]: '#ecedee',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfe0e1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#e5e6e7',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${journalScope}${tableDark}`, {
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

globalStyle(`${journalScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${journalScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${journalScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${journalScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${journalScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${journalScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${journalScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})

globalStyle(`${journalScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})

globalStyle(`${journalScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})

globalStyle(`${journalScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})

globalStyle(`${journalScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})

globalStyle(`${journalScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})

globalStyle(`${journalScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})
