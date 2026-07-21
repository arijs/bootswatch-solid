import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

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

globalStyle(`${literaScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: 'rgba(0, 0, 0, 0.1)',
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

globalStyle(`${literaScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${literaScope}${table} > ${literaScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${literaScope}${table} > ${literaScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${literaScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${literaScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${literaScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${literaScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${literaScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${literaScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${literaScope}${tableStriped} > ${literaScope}${tableSection} > ${literaScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${literaScope}${tableStripedColumns} > :not(caption) > ${literaScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${literaScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${literaScope}${tableHover} > ${literaScope}${tableSection} > ${literaScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${literaScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#4582ec',
		[varBsTableBorderColor]: '#6a9bf0',
		[varBsTableStripedBg]: '#4e88ed',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#588fee',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#538bed',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${literaScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#adb5bd',
		[varBsTableBorderColor]: '#bdc4ca',
		[varBsTableStripedBg]: '#b1b9c0',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#b5bcc4',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#b3bbc2',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${literaScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#02b875',
		[varBsTableBorderColor]: '#35c691',
		[varBsTableStripedBg]: '#0fbc7c',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#1bbf83',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#15bd7f',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${literaScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#17a2b8',
		[varBsTableBorderColor]: '#45b5c6',
		[varBsTableStripedBg]: '#23a7bc',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#2eabbf',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#28a9bd',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${literaScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#f0ad4e',
		[varBsTableBorderColor]: '#f3bd71',
		[varBsTableStripedBg]: '#f1b157',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#f2b560',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#f1b35b',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${literaScope}${tableDanger}`, {
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

globalStyle(`${literaScope}${tableLight}`, {
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

globalStyle(`${literaScope}${tableDark}`, {
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

globalStyle(`${literaScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${literaScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${literaScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${literaScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${literaScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${literaScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${literaScope}${table}`, {
	fontSize: '0.9625rem',
})
