import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { solarScope } from '../../scope.css'

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

globalStyle(`${solarScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: '#073642',
		[varBsTableAccentBg]: 'rgba(255, 255, 255, 0.05)',
		[varBsTableStripedColor]: 'initial',
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: 'initial',
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: 'initial',
		[varBsTableHoverBg]: 'rgba(255, 255, 255, 0.075)',
	},
	width: '100%',
	marginBottom: '1rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${solarScope}${table} > ${solarScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${solarScope}${table} > ${solarScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${solarScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${solarScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${solarScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${solarScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${solarScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${solarScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${solarScope}${tableStriped} > ${solarScope}${tableSection} > ${solarScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${solarScope}${tableStripedColumns} > :not(caption) > ${solarScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${solarScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${solarScope}${tableHover} > ${solarScope}${tableSection} > ${solarScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${solarScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#b58900',
		[varBsTableBorderColor]: '#c4a133',
		[varBsTableStripedBg]: '#b98f0d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#bc951a',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#bb9213',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#839496',
		[varBsTableBorderColor]: '#9ca9ab',
		[varBsTableStripedBg]: '#89999b',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#8f9fa1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#8c9c9e',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#2aa198',
		[varBsTableBorderColor]: '#55b4ad',
		[varBsTableStripedBg]: '#35a69d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#3faaa2',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#3aa8a0',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#268bd2',
		[varBsTableBorderColor]: '#51a2db',
		[varBsTableStripedBg]: '#3191d4',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#3c97d7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#3694d5',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#cb4b16',
		[varBsTableBorderColor]: '#d56f45',
		[varBsTableStripedBg]: '#ce5422',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#d05d2d',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#cf5927',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#d33682',
		[varBsTableBorderColor]: '#dc5e9b',
		[varBsTableStripedBg]: '#d54088',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#d74a8f',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#d6458b',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fdf6e3',
		[varBsTableBorderColor]: '#cac5b6',
		[varBsTableStripedBg]: '#f0ead8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e4ddcc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#eae4d2',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#073642',
		[varBsTableBorderColor]: '#395e68',
		[varBsTableStripedBg]: '#13404b',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#204a55',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#1a4550',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${solarScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${solarScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${solarScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${solarScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${solarScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})
