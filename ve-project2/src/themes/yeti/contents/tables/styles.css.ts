import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../../scope.css'

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

globalStyle(`${yetiScope}${table}`, {
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

globalStyle(`${yetiScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${yetiScope}${table} > ${yetiScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${yetiScope}${table} > ${yetiScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${yetiScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${yetiScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${yetiScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${yetiScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${yetiScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${yetiScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${yetiScope}${tableStriped} > ${yetiScope}${tableSection} > ${yetiScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${yetiScope}${tableStripedColumns} > :not(caption) > ${yetiScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${yetiScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${yetiScope}${tableHover} > ${yetiScope}${tableSection} > ${yetiScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${yetiScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#008cba',
		[varBsTableBorderColor]: '#33a3c8',
		[varBsTableStripedBg]: '#0d92bd',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#1a98c1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#1395bf',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${yetiScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#eeeeee',
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

globalStyle(`${yetiScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#43ac6a',
		[varBsTableBorderColor]: '#69bd88',
		[varBsTableStripedBg]: '#4cb071',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#56b479',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#51b275',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${yetiScope}${tableInfo}`, {
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

globalStyle(`${yetiScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#e99002',
		[varBsTableBorderColor]: '#eda635',
		[varBsTableStripedBg]: '#ea960f',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#eb9b1b',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#eb9815',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${yetiScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#f04124',
		[varBsTableBorderColor]: '#f36750',
		[varBsTableStripedBg]: '#f14b2f',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#f2543a',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#f14f34',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${yetiScope}${tableLight}`, {
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

globalStyle(`${yetiScope}${tableDark}`, {
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

globalStyle(`${yetiScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${yetiScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${yetiScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${yetiScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${yetiScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${yetiScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${yetiScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})

globalStyle(`${yetiScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#222',
	},
})
