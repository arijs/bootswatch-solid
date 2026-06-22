import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { vaporScope } from '../../scope.css'

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

globalStyle(`${vaporScope}${table}`, {
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

globalStyle(`${vaporScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${vaporScope}${table} > ${vaporScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${vaporScope}${table} > ${vaporScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${vaporScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${vaporScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${vaporScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${vaporScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${vaporScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${vaporScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${vaporScope}${tableStriped} > ${vaporScope}${tableSection} > ${vaporScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${vaporScope}${tableStripedColumns} > :not(caption) > ${vaporScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${vaporScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${vaporScope}${tableHover} > ${vaporScope}${tableSection} > ${vaporScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${vaporScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#6f42c1',
		[varBsTableBorderColor]: '#8c68cd',
		[varBsTableStripedBg]: '#764bc4',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#7d55c7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#7a50c6',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ea39b8',
		[varBsTableBorderColor]: '#ee61c6',
		[varBsTableStripedBg]: '#eb43bc',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ec4dbf',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ec48bd',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#3cf281',
		[varBsTableBorderColor]: '#63f59a',
		[varBsTableStripedBg]: '#46f387',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#50f38e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#4bf38a',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#1ba2f6',
		[varBsTableBorderColor]: '#49b5f8',
		[varBsTableStripedBg]: '#26a7f6',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#32abf7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#2ca9f7',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ffc107',
		[varBsTableBorderColor]: '#ffcd39',
		[varBsTableStripedBg]: '#ffc413',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ffc720',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ffc61a',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#e44c55',
		[varBsTableBorderColor]: '#e97077',
		[varBsTableStripedBg]: '#e5555e',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#e75e66',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#e65962',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#44d9e8',
		[varBsTableBorderColor]: '#69e1ed',
		[varBsTableStripedBg]: '#4ddbe9',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#57ddea',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#52dcea',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#170229',
		[varBsTableBorderColor]: '#453554',
		[varBsTableStripedBg]: '#230f34',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#2e1b3e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#281539',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${vaporScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${table}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})
