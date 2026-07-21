import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { darklyScope } from '../../scope.css'

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

globalStyle(`${darklyScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: '#444',
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

globalStyle(`${darklyScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${darklyScope}${table} > ${darklyScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${darklyScope}${table} > ${darklyScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${darklyScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${darklyScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${darklyScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${darklyScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${darklyScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${darklyScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${darklyScope}${tableStriped} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${darklyScope}${tableStripedColumns} > :not(caption) > ${darklyScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${darklyScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${darklyScope}${tableHover} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${darklyScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#375a7f',
		[varBsTableBorderColor]: '#5f7b99',
		[varBsTableStripedBg]: '#416285',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#4b6b8c',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#466689',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#444444',
		[varBsTableBorderColor]: 'dimgray',
		[varBsTableStripedBg]: '#4d4d4d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#575757',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#525252',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#00bc8c',
		[varBsTableBorderColor]: '#33c9a3',
		[varBsTableStripedBg]: '#0dbf92',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#1ac398',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#13c195',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#3498db',
		[varBsTableBorderColor]: '#5dade2',
		[varBsTableStripedBg]: '#3e9ddd',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#48a2df',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#43a0de',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#f39c12',
		[varBsTableBorderColor]: '#f5b041',
		[varBsTableStripedBg]: '#f4a11e',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#f4a62a',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#f4a324',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#e74c3c',
		[varBsTableBorderColor]: '#ec7063',
		[varBsTableStripedBg]: '#e85546',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#e95e50',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#e9594b',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableLight}`, {
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

globalStyle(`${darklyScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#303030',
		[varBsTableBorderColor]: '#595959',
		[varBsTableStripedBg]: '#3a3a3a',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#454545',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#404040',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${darklyScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${darklyScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${darklyScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${darklyScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${darklyScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})
