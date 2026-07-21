import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../../scope.css'

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

globalStyle(`${cyborgScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: '#282828',
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

globalStyle(`${cyborgScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${cyborgScope}${table} > ${cyborgScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${cyborgScope}${table} > ${cyborgScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${cyborgScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${cyborgScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${cyborgScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${cyborgScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${cyborgScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${cyborgScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${cyborgScope}${tableStriped} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${cyborgScope}${tableStripedColumns} > :not(caption) > ${cyborgScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${cyborgScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${cyborgScope}${tableHover} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${cyborgScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#2a9fd6',
		[varBsTableBorderColor]: '#55b2de',
		[varBsTableStripedBg]: '#35a4d8',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#3fa9da',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#3aa6d9',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cyborgScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#555555',
		[varBsTableBorderColor]: '#777777',
		[varBsTableStripedBg]: '#5e5e5e',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#666666',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#626262',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cyborgScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#77b300',
		[varBsTableBorderColor]: '#92c233',
		[varBsTableStripedBg]: '#7eb70d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#85bb1a',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#81b913',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cyborgScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#9933cc',
		[varBsTableBorderColor]: '#ad5cd6',
		[varBsTableStripedBg]: '#9e3dcf',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#a347d1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#a142d0',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cyborgScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ff8800',
		[varBsTableBorderColor]: '#ffa033',
		[varBsTableStripedBg]: '#ff8e0d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ff941a',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ff9113',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cyborgScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#cc0000',
		[varBsTableBorderColor]: '#d63333',
		[varBsTableStripedBg]: '#cf0d0d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#d11a1a',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#d01313',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cyborgScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#222',
		[varBsTableBorderColor]: '#4e4e4e',
		[varBsTableStripedBg]: '#2d2d2d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#383838',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#333333',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cyborgScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#adafae',
		[varBsTableBorderColor]: '#8a8c8b',
		[varBsTableStripedBg]: '#a4a6a5',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#9c9e9d',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#a0a2a1',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${cyborgScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${cyborgScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${cyborgScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${cyborgScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${cyborgScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${cyborgScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})
