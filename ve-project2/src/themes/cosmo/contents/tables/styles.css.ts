import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { cosmoScope } from '../../scope.css'

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

globalStyle(`${cosmoScope}${table}`, {
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

globalStyle(`${cosmoScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${cosmoScope}${table} > ${cosmoScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${cosmoScope}${table} > ${cosmoScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${cosmoScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${cosmoScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${cosmoScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${cosmoScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${cosmoScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${cosmoScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${cosmoScope}${tableStriped} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${cosmoScope}${tableStripedColumns} > :not(caption) > ${cosmoScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${cosmoScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${cosmoScope}${tableHover} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${cosmoScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d4e6f9',
		[varBsTableBorderColor]: '#aab8c7',
		[varBsTableStripedBg]: '#c9dbed',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bfcfe0',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c4d5e6',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cosmoScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d7d8d8',
		[varBsTableBorderColor]: '#acadad',
		[varBsTableStripedBg]: '#cccdcd',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c2c2c2',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c7c8c8',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cosmoScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d9f0d1',
		[varBsTableBorderColor]: '#aec0a7',
		[varBsTableStripedBg]: '#cee4c7',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c3d8bc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c9dec1',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cosmoScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ebddf1',
		[varBsTableBorderColor]: '#bcb1c1',
		[varBsTableStripedBg]: '#dfd2e5',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d4c7d9',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d9ccdf',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cosmoScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ffe3d1',
		[varBsTableBorderColor]: '#ccb6a7',
		[varBsTableStripedBg]: '#f2d8c7',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6ccbc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ecd2c1',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cosmoScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ffccd7',
		[varBsTableBorderColor]: '#cca3ac',
		[varBsTableStripedBg]: '#f2c2cc',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6b8c2',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ecbdc7',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cosmoScope}${tableLight}`, {
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

globalStyle(`${cosmoScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#373a3c',
		[varBsTableBorderColor]: '#5f6163',
		[varBsTableStripedBg]: '#414446',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#4b4e50',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#46494b',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cosmoScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${cosmoScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${cosmoScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${cosmoScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${cosmoScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${cosmoScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${cosmoScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#373a3c',
	},
})

globalStyle(`${cosmoScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#373a3c',
	},
})

globalStyle(`${cosmoScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#373a3c',
	},
})

globalStyle(`${cosmoScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#373a3c',
	},
})

globalStyle(`${cosmoScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#373a3c',
	},
})

globalStyle(`${cosmoScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#373a3c',
	},
})

globalStyle(`${cosmoScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#373a3c',
	},
})
