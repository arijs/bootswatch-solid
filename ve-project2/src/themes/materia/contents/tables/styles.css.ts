import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

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
	tableCell,
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
import { theadInverse } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${materiaScope}${table}`, {
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

globalStyle(`${materiaScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${materiaScope}${table} > ${materiaScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${materiaScope}${table} > ${materiaScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${materiaScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${materiaScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${materiaScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${materiaScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${materiaScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${materiaScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${materiaScope}${tableStriped} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${materiaScope}${tableStripedColumns} > :not(caption) > ${materiaScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${materiaScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${materiaScope}${tableHover} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${materiaScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d3eafd',
		[varBsTableBorderColor]: '#a9bbca',
		[varBsTableStripedBg]: '#c8def0',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bed3e4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c3d8ea',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: 'white',
		[varBsTableBorderColor]: '#cccccc',
		[varBsTableStripedBg]: '#f2f2f2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6e6e6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ececec',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#dbefdc',
		[varBsTableBorderColor]: '#afbfb0',
		[varBsTableStripedBg]: '#d0e3d1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c5d7c6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#cbddcc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ebd4ef',
		[varBsTableBorderColor]: '#bcaabf',
		[varBsTableStripedBg]: '#dfc9e3',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d4bfd7',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d9c4dd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ffeacc',
		[varBsTableBorderColor]: '#ccbba3',
		[varBsTableStripedBg]: '#f2dec2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6d3b8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ecd8bd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fad2d3',
		[varBsTableBorderColor]: '#c8a8a9',
		[varBsTableStripedBg]: '#eec8c8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e1bdbe',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e7c2c3',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableLight}`, {
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

globalStyle(`${materiaScope}${tableDark}`, {
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

globalStyle(`${materiaScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${materiaScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${tableHover} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow}`, {
	transition: 'background-color 0.2s, color 0.2s',
})

globalStyle(`${materiaScope}${tableHover} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow} > ${materiaScope}${tableHeaderCell}`, {
	transition: 'background-color 0.2s, color 0.2s',
})

globalStyle(`${materiaScope}${tableHover} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow} > ${materiaScope}${tableCell}`, {
	transition: 'background-color 0.2s, color 0.2s',
})

globalStyle(`${materiaScope}${theadInverse} ${materiaScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#2196f3',
})

globalStyle(`${materiaScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})
