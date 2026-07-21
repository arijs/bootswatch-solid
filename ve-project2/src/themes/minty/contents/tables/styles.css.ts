import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { mintyScope } from '../../scope.css'

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

globalStyle(`${mintyScope}${table}`, {
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

globalStyle(`${mintyScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${mintyScope}${table} > ${mintyScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${mintyScope}${table} > ${mintyScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${mintyScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${mintyScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${mintyScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${mintyScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${mintyScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${mintyScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${mintyScope}${tableStriped} > ${mintyScope}${tableSection} > ${mintyScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${mintyScope}${tableStripedColumns} > :not(caption) > ${mintyScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${mintyScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${mintyScope}${tableHover} > ${mintyScope}${tableSection} > ${mintyScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${mintyScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#78c2ad',
		[varBsTableBorderColor]: '#93cebd',
		[varBsTableStripedBg]: '#7fc5b1',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#86c8b5',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#82c7b3',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${mintyScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#f3969a',
		[varBsTableBorderColor]: '#f5abae',
		[varBsTableStripedBg]: '#f49b9f',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#f4a1a4',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#f49ea2',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${mintyScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#56cc9d',
		[varBsTableBorderColor]: '#78d6b1',
		[varBsTableStripedBg]: '#5ecfa2',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#67d1a7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#63d0a4',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${mintyScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#6cc3d5',
		[varBsTableBorderColor]: '#89cfdd',
		[varBsTableStripedBg]: '#73c6d7',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#7bc9d9',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#77c8d8',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${mintyScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ffce67',
		[varBsTableBorderColor]: '#ffd885',
		[varBsTableStripedBg]: '#ffd06f',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#ffd376',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ffd272',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${mintyScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ff7851',
		[varBsTableBorderColor]: '#ff9374',
		[varBsTableStripedBg]: '#ff7f5a',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ff8662',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ff825e',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${mintyScope}${tableLight}`, {
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

globalStyle(`${mintyScope}${tableDark}`, {
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

globalStyle(`${mintyScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${mintyScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${mintyScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${mintyScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${mintyScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${mintyScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${mintyScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#888',
	},
})
