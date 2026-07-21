import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { bootstrapScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderWidth,
	varBsEmphasisColor,
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

globalStyle(`${bootstrapScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: varBsEmphasisColor,
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: varBsBorderColor,
		[varBsTableAccentBg]: 'transparent',
		[varBsTableStripedColor]: varBsEmphasisColor,
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: varBsEmphasisColor,
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: varBsEmphasisColor,
		[varBsTableHoverBg]: `rgba(${varBsEmphasisColorRgb}, 0.075)`,
	},
	width: '100%',
	marginBottom: '1rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${bootstrapScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${bootstrapScope}${table} > ${bootstrapScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${bootstrapScope}${table} > ${bootstrapScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${bootstrapScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${bootstrapScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${bootstrapScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${bootstrapScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${bootstrapScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${bootstrapScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${bootstrapScope}${tableStriped} > ${bootstrapScope}${tableSection} > ${bootstrapScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${bootstrapScope}${tableStripedColumns} > :not(caption) > ${bootstrapScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${bootstrapScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${bootstrapScope}${tableHover} > ${bootstrapScope}${tableSection} > ${bootstrapScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${bootstrapScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#cfe2ff',
		[varBsTableBorderColor]: '#a6b5cc',
		[varBsTableStripedBg]: '#c5d7f2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bacbe6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#bfd1ec',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${bootstrapScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e2e3e5',
		[varBsTableBorderColor]: '#b5b6b7',
		[varBsTableStripedBg]: '#d7d8da',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#cbccce',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d1d2d4',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${bootstrapScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d1e7dd',
		[varBsTableBorderColor]: '#a7b9b1',
		[varBsTableStripedBg]: '#c7dbd2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bcd0c7',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c1d6cc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${bootstrapScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#cff4fc',
		[varBsTableBorderColor]: '#a6c3ca',
		[varBsTableStripedBg]: '#c5e8ef',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#badce3',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#bfe2e9',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${bootstrapScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fff3cd',
		[varBsTableBorderColor]: '#ccc2a4',
		[varBsTableStripedBg]: '#f2e7c3',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6dbb9',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ece1be',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${bootstrapScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f8d7da',
		[varBsTableBorderColor]: '#c6acae',
		[varBsTableStripedBg]: '#eccccf',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfc2c4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e5c7ca',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${bootstrapScope}${tableLight}`, {
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

globalStyle(`${bootstrapScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#212529',
		[varBsTableBorderColor]: '#4d5154',
		[varBsTableStripedBg]: '#2c3034',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#373b3e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#323539',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${bootstrapScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${bootstrapScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${bootstrapScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${bootstrapScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${bootstrapScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${bootstrapScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})
