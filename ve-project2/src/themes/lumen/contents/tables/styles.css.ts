import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

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

globalStyle(`${lumenScope}${table}`, {
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

globalStyle(`${lumenScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${lumenScope}${table} > ${lumenScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${lumenScope}${table} > ${lumenScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${lumenScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${lumenScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${lumenScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${lumenScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${lumenScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${lumenScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${lumenScope}${tableStriped} > ${lumenScope}${tableSection} > ${lumenScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${lumenScope}${tableStripedColumns} > :not(caption) > ${lumenScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${lumenScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${lumenScope}${tableHover} > ${lumenScope}${tableSection} > ${lumenScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${lumenScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#158cba',
		[varBsTableBorderColor]: '#44a3c8',
		[varBsTableStripedBg]: '#2192bd',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#2c98c1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#2795bf',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${lumenScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f0f0f0',
		[varBsTableBorderColor]: 'silver',
		[varBsTableStripedBg]: '#e4e4e4',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d8d8d8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#dedede',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${lumenScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#28b62c',
		[varBsTableBorderColor]: '#53c556',
		[varBsTableStripedBg]: '#33ba37',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#3ebd41',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#38bb3c',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${lumenScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#75caeb',
		[varBsTableBorderColor]: '#91d5ef',
		[varBsTableStripedBg]: '#7ccdec',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#83cfed',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#7fceed',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${lumenScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ff851b',
		[varBsTableBorderColor]: '#ff9d49',
		[varBsTableStripedBg]: '#ff8b26',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ff9132',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ff8e2c',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${lumenScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ff4136',
		[varBsTableBorderColor]: '#ff675e',
		[varBsTableStripedBg]: '#ff4b40',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ff544a',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ff4f45',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${lumenScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f6f6f6',
		[varBsTableBorderColor]: '#c5c5c5',
		[varBsTableStripedBg]: '#eaeaea',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dddddd',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e4e4e4',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${lumenScope}${tableDark}`, {
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

globalStyle(`${lumenScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${lumenScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${lumenScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${lumenScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${lumenScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${lumenScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${lumenScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})

globalStyle(`${lumenScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})
