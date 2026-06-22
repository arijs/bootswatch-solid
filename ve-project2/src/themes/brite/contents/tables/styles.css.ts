import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

import { varBsBodyBg, varBsEmphasisColor, varBsEmphasisColorRgb } from '../../../../theme-contract/_vars.css'
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

globalStyle(`${briteScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: varBsEmphasisColor,
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: '#000',
		[varBsTableAccentBg]: 'transparent',
		[varBsTableStripedColor]: varBsEmphasisColor,
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: varBsEmphasisColor,
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: varBsEmphasisColor,
		[varBsTableHoverBg]: `rgba(${varBsEmphasisColorRgb}, 0)`,
	},
	width: '100%',
	marginBottom: '1rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${briteScope}${table} > :not(caption) > * > *`, {
	padding: '0.75rem 0.75rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: '1px',
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${briteScope}${table} > ${briteScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${briteScope}${table} > ${briteScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${briteScope}${tableGroupDivider}`, {
	borderTop: 'calc(1px * 2) solid currentcolor',
})

globalStyle(`${briteScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${briteScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: '1px 0',
})

globalStyle(`${briteScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: '0 1px',
})

globalStyle(`${briteScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${briteScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${briteScope}${tableStriped} > ${briteScope}${tableSection} > ${briteScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${briteScope}${tableStripedColumns} > :not(caption) > ${briteScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${briteScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${briteScope}${tableHover} > ${briteScope}${tableSection} > ${briteScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${briteScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#a2e436',
		[varBsTableBorderColor]: 'black',
		[varBsTableStripedBg]: '#9ad933',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#92cd31',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#a2e436',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${briteScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fff',
		[varBsTableBorderColor]: 'black',
		[varBsTableStripedBg]: '#f2f2f2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6e6e6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: 'white',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${briteScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#68d391',
		[varBsTableBorderColor]: 'black',
		[varBsTableStripedBg]: '#63c88a',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#5ebe83',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#68d391',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${briteScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#22d2ed',
		[varBsTableBorderColor]: 'black',
		[varBsTableStripedBg]: '#20c8e1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#1fbdd5',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#22d2ed',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${briteScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ffc700',
		[varBsTableBorderColor]: 'black',
		[varBsTableStripedBg]: '#f2bd00',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6b300',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ffc700',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${briteScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f56565',
		[varBsTableBorderColor]: 'black',
		[varBsTableStripedBg]: '#e96060',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dd5b5b',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#f56565',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${briteScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e9ecef',
		[varBsTableBorderColor]: 'black',
		[varBsTableStripedBg]: '#dde0e3',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d2d4d7',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e9ecef',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${briteScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#000',
		[varBsTableBorderColor]: 'white',
		[varBsTableStripedBg]: '#0d0d0d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#1a1a1a',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: 'black',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${briteScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${briteScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${briteScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${briteScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${briteScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${briteScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${briteScope}${table}`, {
	border: '2px solid #000',
})
