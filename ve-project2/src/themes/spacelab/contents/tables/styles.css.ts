import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { spacelabScope } from '../../scope.css'

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

globalStyle(`${spacelabScope}${table}`, {
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

globalStyle(`${spacelabScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${spacelabScope}${table} > ${spacelabScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${spacelabScope}${table} > ${spacelabScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${spacelabScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${spacelabScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${spacelabScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${spacelabScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${spacelabScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${spacelabScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${spacelabScope}${tableStriped} > ${spacelabScope}${tableSection} > ${spacelabScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${spacelabScope}${tableStripedColumns} > :not(caption) > ${spacelabScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${spacelabScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${spacelabScope}${tableHover} > ${spacelabScope}${tableSection} > ${spacelabScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${spacelabScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#dae2eb',
		[varBsTableBorderColor]: '#aeb5bc',
		[varBsTableStripedBg]: '#cfd7df',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c4cbd4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#cad1d9',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${spacelabScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ebebeb',
		[varBsTableBorderColor]: '#bcbcbc',
		[varBsTableStripedBg]: '#dfdfdf',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d4d4d4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d9d9d9',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${spacelabScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d8f0d3',
		[varBsTableBorderColor]: '#adc0a9',
		[varBsTableStripedBg]: '#cde4c8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c2d8be',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c8dec3',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${spacelabScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d6ebfd',
		[varBsTableBorderColor]: '#abbcca',
		[varBsTableStripedBg]: '#cbdff0',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c1d4e4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c6d9ea',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${spacelabScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f6e3cc',
		[varBsTableBorderColor]: '#c5b6a3',
		[varBsTableStripedBg]: '#ead8c2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#ddccb8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e4d2bd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${spacelabScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f5cccc',
		[varBsTableBorderColor]: '#c4a3a3',
		[varBsTableStripedBg]: '#e9c2c2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#ddb8b8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e3bdbd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${spacelabScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#eee',
		[varBsTableBorderColor]: '#bebebe',
		[varBsTableStripedBg]: '#e2e2e2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d6d6d6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: 'gainsboro',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${spacelabScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#333',
		[varBsTableBorderColor]: '#5c5c5c',
		[varBsTableStripedBg]: '#3d3d3d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#474747',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#424242',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${spacelabScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${spacelabScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${spacelabScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${spacelabScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${spacelabScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${spacelabScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${spacelabScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#777',
	},
})

globalStyle(`${spacelabScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#777',
	},
})

globalStyle(`${spacelabScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#777',
	},
})

globalStyle(`${spacelabScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#777',
	},
})

globalStyle(`${spacelabScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#777',
	},
})

globalStyle(`${spacelabScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#777',
	},
})

globalStyle(`${spacelabScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#777',
	},
})
