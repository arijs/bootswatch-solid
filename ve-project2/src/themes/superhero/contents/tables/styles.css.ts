import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { superheroScope } from '../../scope.css'

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
import { theadDark } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${superheroScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: 'rgba(0, 0, 0, 0.15)',
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

globalStyle(`${superheroScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${superheroScope}${table} > ${superheroScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${superheroScope}${table} > ${superheroScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${superheroScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${superheroScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${superheroScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${superheroScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${superheroScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${superheroScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${superheroScope}${tableStriped} > ${superheroScope}${tableSection} > ${superheroScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${superheroScope}${tableStripedColumns} > :not(caption) > ${superheroScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${superheroScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${superheroScope}${tableHover} > ${superheroScope}${tableSection} > ${superheroScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${superheroScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#df6919',
		[varBsTableBorderColor]: '#e58747',
		[varBsTableStripedBg]: '#e17125',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#e27830',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#e1742a',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${superheroScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#4e5d6c',
		[varBsTableBorderColor]: '#717d89',
		[varBsTableStripedBg]: '#576573',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#606d7b',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#5b6977',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${superheroScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#5cb85c',
		[varBsTableBorderColor]: '#7dc67d',
		[varBsTableStripedBg]: '#64bc64',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#6cbf6c',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#68bd68',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${superheroScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#5bc0de',
		[varBsTableBorderColor]: '#7ccde5',
		[varBsTableStripedBg]: '#63c3e0',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#6bc6e1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#67c5e0',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${superheroScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ffc107',
		[varBsTableBorderColor]: '#ffcd39',
		[varBsTableStripedBg]: '#ffc413',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#ffc720',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ffc61a',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${superheroScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#d9534f',
		[varBsTableBorderColor]: '#e17572',
		[varBsTableStripedBg]: '#db5c58',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#dd6461',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#dc605c',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${superheroScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#abb6c2',
		[varBsTableBorderColor]: '#bcc5ce',
		[varBsTableStripedBg]: '#afbac5',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#b3bdc8',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#b1bbc7',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${superheroScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#20374c',
		[varBsTableBorderColor]: '#4d5f70',
		[varBsTableStripedBg]: '#2b4155',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#364b5e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#314659',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${superheroScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${superheroScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${superheroScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${superheroScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${superheroScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${superheroScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${superheroScope}${table}`, {
	fontSize: '0.875rem',
})

globalStyle(`${superheroScope}${table} ${superheroScope}${theadDark} ${superheroScope}${tableHeaderCell}`, {
	color: '#fff',
})
