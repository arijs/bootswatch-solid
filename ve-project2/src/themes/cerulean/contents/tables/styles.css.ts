import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../../scope.css'

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

globalStyle(`${ceruleanScope}${table}`, {
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

globalStyle(`${ceruleanScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${ceruleanScope}${table} > ${ceruleanScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${ceruleanScope}${table} > ${ceruleanScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${ceruleanScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${ceruleanScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${ceruleanScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${ceruleanScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${ceruleanScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${ceruleanScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${ceruleanScope}${tableStriped} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${ceruleanScope}${tableStripedColumns} > :not(caption) > ${ceruleanScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${ceruleanScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${ceruleanScope}${tableHover} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${ceruleanScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d5edfa',
		[varBsTableBorderColor]: '#aabec8',
		[varBsTableStripedBg]: '#cae1ee',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c0d5e1',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c5dbe7',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${ceruleanScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fbfbfc',
		[varBsTableBorderColor]: '#c9c9ca',
		[varBsTableStripedBg]: '#eeeeef',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e2e2e3',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e8e8e9',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${ceruleanScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e3eed7',
		[varBsTableBorderColor]: '#b6beac',
		[varBsTableStripedBg]: '#d8e2cc',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#ccd6c2',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d2dcc7',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${ceruleanScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#cdd8e3',
		[varBsTableBorderColor]: '#a4adb6',
		[varBsTableStripedBg]: '#c3cdd8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#b9c2cc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#bec8d2',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${ceruleanScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f8ddcc',
		[varBsTableBorderColor]: '#c6b1a3',
		[varBsTableStripedBg]: '#ecd2c2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfc7b8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e5ccbd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${ceruleanScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f4d2d3',
		[varBsTableBorderColor]: '#c3a8a9',
		[varBsTableStripedBg]: '#e8c8c8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dcbdbe',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e2c2c3',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${ceruleanScope}${tableLight}`, {
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

globalStyle(`${ceruleanScope}${tableDark}`, {
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

globalStyle(`${ceruleanScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${ceruleanScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${ceruleanScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${ceruleanScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${ceruleanScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${ceruleanScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${ceruleanScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#495057',
	},
})

globalStyle(`${ceruleanScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#495057',
	},
})

globalStyle(`${ceruleanScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#495057',
	},
})

globalStyle(`${ceruleanScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#495057',
	},
})

globalStyle(`${ceruleanScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#495057',
	},
})

globalStyle(`${ceruleanScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#495057',
	},
})

globalStyle(`${ceruleanScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#495057',
	},
})
