import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { flatlyScope } from '../../scope.css'

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

globalStyle(`${flatlyScope}${table}`, {
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

globalStyle(`${flatlyScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${flatlyScope}${table} > ${flatlyScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${flatlyScope}${table} > ${flatlyScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${flatlyScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${flatlyScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${flatlyScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${flatlyScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${flatlyScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${flatlyScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${flatlyScope}${tableStriped} > ${flatlyScope}${tableSection} > ${flatlyScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${flatlyScope}${tableStripedColumns} > :not(caption) > ${flatlyScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${flatlyScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${flatlyScope}${tableHover} > ${flatlyScope}${tableSection} > ${flatlyScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${flatlyScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#2c3e50',
		[varBsTableBorderColor]: '#566573',
		[varBsTableStripedBg]: '#374859',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#415162',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#3c4c5d',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${flatlyScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#95a5a6',
		[varBsTableBorderColor]: '#aab7b8',
		[varBsTableStripedBg]: '#9aaaaa',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#a0aeaf',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#9dacad',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${flatlyScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#18bc9c',
		[varBsTableBorderColor]: '#46c9b0',
		[varBsTableStripedBg]: '#24bfa1',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#2fc3a6',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#29c1a3',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${flatlyScope}${tableInfo}`, {
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

globalStyle(`${flatlyScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#f39c12',
		[varBsTableBorderColor]: '#f5b041',
		[varBsTableStripedBg]: '#f4a11e',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#f4a62a',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#f4a324',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${flatlyScope}${tableDanger}`, {
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

globalStyle(`${flatlyScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ecf0f1',
		[varBsTableBorderColor]: '#bdc0c1',
		[varBsTableStripedBg]: '#e0e4e5',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d4d8d9',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#dadedf',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${flatlyScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#7b8a8b',
		[varBsTableBorderColor]: '#95a1a2',
		[varBsTableStripedBg]: '#829091',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#889697',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#859394',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${flatlyScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${flatlyScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${flatlyScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${flatlyScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${flatlyScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${flatlyScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})
