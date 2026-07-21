import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../../scope.css'

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

globalStyle(`${sandstoneScope}${table}`, {
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

globalStyle(`${sandstoneScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${sandstoneScope}${table} > ${sandstoneScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${sandstoneScope}${table} > ${sandstoneScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${sandstoneScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${sandstoneScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${sandstoneScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${sandstoneScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${sandstoneScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${sandstoneScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${sandstoneScope}${tableStriped} > ${sandstoneScope}${tableSection} > ${sandstoneScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${sandstoneScope}${tableStripedColumns} > :not(caption) > ${sandstoneScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${sandstoneScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${sandstoneScope}${tableHover} > ${sandstoneScope}${tableSection} > ${sandstoneScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${sandstoneScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d6dfe7',
		[varBsTableBorderColor]: '#abb2b9',
		[varBsTableStripedBg]: '#cbd4db',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c1c9d0',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c6ced6',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e8e8e6',
		[varBsTableBorderColor]: '#babab8',
		[varBsTableStripedBg]: '#dcdcdb',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d1d1cf',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d7d7d5',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e9f3db',
		[varBsTableBorderColor]: '#bac2af',
		[varBsTableStripedBg]: '#dde7d0',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d2dbc5',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d8e1cb',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d4eef9',
		[varBsTableBorderColor]: '#aabec7',
		[varBsTableStripedBg]: '#c9e2ed',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bfd6e0',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c4dce6',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fde5d8',
		[varBsTableBorderColor]: '#cab7ad',
		[varBsTableStripedBg]: '#f0dacd',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e4cec2',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ead4c8',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f7dddc',
		[varBsTableBorderColor]: '#c6b1b0',
		[varBsTableStripedBg]: '#ebd2d1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dec7c6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e4cccc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f8f5f0',
		[varBsTableBorderColor]: '#c6c4c0',
		[varBsTableStripedBg]: '#ece9e4',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfddd8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e5e3de',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#3e3f3a',
		[varBsTableBorderColor]: '#656561',
		[varBsTableStripedBg]: '#484944',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#51524e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#4c4d49',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${sandstoneScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sandstoneScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sandstoneScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sandstoneScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sandstoneScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sandstoneScope}${table} ${sandstoneScope}${theadDark} ${sandstoneScope}${tableHeaderCell}`, {
	backgroundColor: '#3e3f3a',
})

globalStyle(`${sandstoneScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
	},
})

globalStyle(`${sandstoneScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
	},
})

globalStyle(`${sandstoneScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
	},
})

globalStyle(`${sandstoneScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
	},
})

globalStyle(`${sandstoneScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
	},
})

globalStyle(`${sandstoneScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
	},
})

globalStyle(`${sandstoneScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
	},
})
