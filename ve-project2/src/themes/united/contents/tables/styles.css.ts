import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { unitedScope } from '../../scope.css'

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

globalStyle(`${unitedScope}${table}`, {
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

globalStyle(`${unitedScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${unitedScope}${table} > ${unitedScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${unitedScope}${table} > ${unitedScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${unitedScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${unitedScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${unitedScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${unitedScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${unitedScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${unitedScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${unitedScope}${tableStriped} > ${unitedScope}${tableSection} > ${unitedScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${unitedScope}${tableStripedColumns} > :not(caption) > ${unitedScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${unitedScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${unitedScope}${tableHover} > ${unitedScope}${tableSection} > ${unitedScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${unitedScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fbddd2',
		[varBsTableBorderColor]: '#c9b1a8',
		[varBsTableStripedBg]: '#eed2c8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e2c7bd',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e8ccc2',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${unitedScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#efedec',
		[varBsTableBorderColor]: '#bfbebd',
		[varBsTableStripedBg]: '#e3e1e0',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d7d5d4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#dddbda',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${unitedScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d7f0db',
		[varBsTableBorderColor]: '#acc0af',
		[varBsTableStripedBg]: '#cce4d0',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c2d8c5',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c7decb',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${unitedScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
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

globalStyle(`${unitedScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fcf1d8',
		[varBsTableBorderColor]: '#cac1ad',
		[varBsTableStripedBg]: '#efe5cd',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e3d9c2',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e9dfc8',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${unitedScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f9d7d5',
		[varBsTableBorderColor]: '#c7acaa',
		[varBsTableStripedBg]: '#edccca',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e0c2c0',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e6c7c5',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${unitedScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e9ecef',
		[varBsTableBorderColor]: '#babdbf',
		[varBsTableStripedBg]: '#dde0e3',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d2d4d7',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d8dadd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${unitedScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#772953',
		[varBsTableBorderColor]: '#925475',
		[varBsTableStripedBg]: '#7e345c',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#853e64',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#813960',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${unitedScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${unitedScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${unitedScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${unitedScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${unitedScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${unitedScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${unitedScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#333',
	},
})

globalStyle(`${unitedScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#333',
	},
})

globalStyle(`${unitedScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#333',
	},
})

globalStyle(`${unitedScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#333',
	},
})

globalStyle(`${unitedScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#333',
	},
})

globalStyle(`${unitedScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#333',
	},
})

globalStyle(`${unitedScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#333',
	},
})
