import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { sketchyScope } from '../../scope.css'

import { varBsBodyBg, varBsEmphasisColorRgb } from '../../../../theme-contract/_vars.css'
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

globalStyle(`${sketchyScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: '#333',
		[varBsTableAccentBg]: 'transparent',
		[varBsTableStripedColor]: 'initial',
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: 'initial',
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: 'initial',
		[varBsTableHoverBg]: '#fff',
	},
	width: '100%',
	marginBottom: '1rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: '2px',
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${sketchyScope}${table} > ${sketchyScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${sketchyScope}${table} > ${sketchyScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${sketchyScope}${tableGroupDivider}`, {
	borderTop: 'calc(2px * 2) solid currentcolor',
})

globalStyle(`${sketchyScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${sketchyScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: '2px 0',
})

globalStyle(`${sketchyScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: '0 2px',
})

globalStyle(`${sketchyScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${sketchyScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${sketchyScope}${tableStriped} > ${sketchyScope}${tableSection} > ${sketchyScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${sketchyScope}${tableStripedColumns} > :not(caption) > ${sketchyScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${sketchyScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${sketchyScope}${tableHover} > ${sketchyScope}${tableSection} > ${sketchyScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${sketchyScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d6d6d6',
		[varBsTableBorderColor]: '#ababab',
		[varBsTableStripedBg]: '#cbcbcb',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#c1c1c1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#c6c6c6',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#dddddd',
		[varBsTableBorderColor]: '#b1b1b1',
		[varBsTableStripedBg]: '#d2d2d2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c7c7c7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#cccccc',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d4edda',
		[varBsTableBorderColor]: '#aabeae',
		[varBsTableStripedBg]: '#c9e1cf',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bfd5c4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c4dbca',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d1ecf1',
		[varBsTableBorderColor]: '#a7bdc1',
		[varBsTableStripedBg]: '#c7e0e5',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bcd4d9',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c1dadf',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableWarning}`, {
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

globalStyle(`${sketchyScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f8d7da',
		[varBsTableBorderColor]: '#c6acae',
		[varBsTableStripedBg]: '#eccccf',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfc2c4',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#e5c7ca',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sketchyScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fff',
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

globalStyle(`${sketchyScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#555',
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

globalStyle(`${sketchyScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${sketchyScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sketchyScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sketchyScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sketchyScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sketchyScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${sketchyScope}${tableBordered}`, {
	overflow: 'hidden',
	borderSpacing: '0',
	borderCollapse: 'separate',
	backgroundColor: '#333',
	borderRadius: '5px 25px 5px 25px/25px 5px 25px 5px',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableHeaderCell}`, {
	borderRadius: '5px 5px 25px 4px/5px 4px 3px 5px',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableCell}`, {
	borderRadius: '5px 5px 25px 4px/5px 4px 3px 5px',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableSuccess} ${sketchyScope}${tableCell}`, {
	color: '#fff',
	backgroundColor: '#28a745',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableSuccess} ${sketchyScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#28a745',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableSuccess}:hover ${sketchyScope}${tableCell}`, {
	color: '#fff',
	backgroundColor: '#28a745',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableSuccess}:hover ${sketchyScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#28a745',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableInfo} ${sketchyScope}${tableCell}`, {
	color: '#fff',
	backgroundColor: '#17a2b8',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableInfo} ${sketchyScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#17a2b8',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableInfo}:hover ${sketchyScope}${tableCell}`, {
	color: '#fff',
	backgroundColor: '#17a2b8',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableInfo}:hover ${sketchyScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#17a2b8',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableWarning} ${sketchyScope}${tableCell}`, {
	color: '#fff',
	backgroundColor: '#ffc107',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableWarning} ${sketchyScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#ffc107',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableWarning}:hover ${sketchyScope}${tableCell}`, {
	color: '#fff',
	backgroundColor: '#ffc107',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableWarning}:hover ${sketchyScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#ffc107',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableDanger} ${sketchyScope}${tableCell}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableDanger} ${sketchyScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableDanger}:hover ${sketchyScope}${tableCell}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
})

globalStyle(`${sketchyScope}${tableBordered} ${sketchyScope}${tableDanger}:hover ${sketchyScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
})

globalStyle(`${sketchyScope}${tableDark} ${sketchyScope}${tableHeaderCell}`, {
	backgroundColor: '#333',
})

globalStyle(`${sketchyScope}${tableDark} ${sketchyScope}${tableCell}`, {
	backgroundColor: '#333',
})

globalStyle(`${sketchyScope}${tableDark}${tableHover} ${sketchyScope}${tableActive}:hover > ${sketchyScope}${tableHeaderCell}`, {
	backgroundColor: '#333',
})

globalStyle(`${sketchyScope}${tableDark}${tableHover} ${sketchyScope}${tableActive}:hover > ${sketchyScope}${tableCell}`, {
	backgroundColor: '#333',
})

globalStyle(`${sketchyScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#212529',
	},
})

globalStyle(`${sketchyScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#212529',
	},
})

globalStyle(`${sketchyScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#212529',
	},
})

globalStyle(`${sketchyScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#212529',
	},
})

globalStyle(`${sketchyScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#212529',
	},
})

globalStyle(`${sketchyScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#212529',
	},
})

globalStyle(`${sketchyScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#212529',
	},
})
