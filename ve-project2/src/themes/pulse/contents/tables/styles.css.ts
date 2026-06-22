import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { pulseScope } from '../../scope.css'

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

globalStyle(`${pulseScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: 'rgba(0, 0, 0, 0.05)',
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

globalStyle(`${pulseScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${pulseScope}${table} > ${pulseScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${pulseScope}${table} > ${pulseScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${pulseScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${pulseScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${pulseScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${pulseScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${pulseScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${pulseScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${pulseScope}${tableStriped} > ${pulseScope}${tableSection} > ${pulseScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${pulseScope}${tableStripedColumns} > :not(caption) > ${pulseScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${pulseScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${pulseScope}${tableHover} > ${pulseScope}${tableSection} > ${pulseScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${pulseScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ded6ea',
		[varBsTableBorderColor]: '#b2abbb',
		[varBsTableStripedBg]: '#d3cbde',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c8c1d3',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#cdc6d8',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${pulseScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#eee9f6',
		[varBsTableBorderColor]: '#bebac5',
		[varBsTableStripedBg]: '#e2ddea',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d6d2dd',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#dcd8e4',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${pulseScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d0f1dd',
		[varBsTableBorderColor]: '#a6c1b1',
		[varBsTableStripedBg]: '#c6e5d2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bbd9c7',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c0dfcc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${pulseScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ccebf8',
		[varBsTableBorderColor]: '#a3bcc6',
		[varBsTableStripedBg]: '#c2dfec',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#b8d4df',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#bdd9e5',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${pulseScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fcedd2',
		[varBsTableBorderColor]: '#cabea8',
		[varBsTableStripedBg]: '#efe1c8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e3d5bd',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e9dbc2',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${pulseScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fed7d7',
		[varBsTableBorderColor]: '#cbacac',
		[varBsTableStripedBg]: '#f1cccc',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e5c2c2',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ebc7c7',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${pulseScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f9f8fc',
		[varBsTableBorderColor]: '#c7c6ca',
		[varBsTableStripedBg]: '#edecef',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e0dfe3',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e6e5e9',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${pulseScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#17141f',
		[varBsTableBorderColor]: '#45434c',
		[varBsTableStripedBg]: '#23202a',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#2e2c35',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#282630',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${pulseScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${pulseScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${pulseScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${pulseScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${pulseScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${pulseScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${pulseScope}${table} ${pulseScope}${theadDark} ${pulseScope}${tableHeaderCell}`, {
	backgroundColor: '#a991d4',
	borderColor: 'rgba(0, 0, 0, 0.05)',
})

globalStyle(`${pulseScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${pulseScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${pulseScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${pulseScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${pulseScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${pulseScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${pulseScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})
