import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderColor,
	varBsBorderWidth,
	varBsBodyBg,
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
	tableBordered,
	tableBorderless,
	tableCell,
	tableDanger,
	tableDark,
	tableElement,
	tableHeaderCell,
	tableHover,
	tableInfo,
	tableLight,
	tablePrimary,
	tableRow,
	tableSecondary,
	tableSection,
	tableSm,
	tableStriped,
	tableSuccess,
	tableWarning,
	table,
} from '../../../../theme-contract/contents/contract.css'
import { quartzScope } from '../../scope.css'

const cssVarName = (token: string) => token.slice(4, -1)

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

// Bootstrap reboot: thead, tbody, tfoot, tr { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${quartzScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${quartzScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: td, th { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${quartzScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: th { border-color: inherit; border-style: solid; border-width: 0; text-align: inherit }
globalStyle(`${quartzScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	textAlign: 'inherit',
})

globalStyle(`${quartzScope}${tableElement} > thead`, {
	verticalAlign: 'bottom',
})

globalStyle(`${quartzScope}${tableElement} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${quartzScope}${table}`, {
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
	marginBottom: '2rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${quartzScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${quartzScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${quartzScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})

globalStyle(`${quartzScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${quartzScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${quartzScope}${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${quartzScope}${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${quartzScope}${tableDark}`, {
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

globalStyle(`${quartzScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#e83283',
		[varBsTableBorderColor]: '#ed5b9c',
		[varBsTableStripedBg]: '#e93c89',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ea478f',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ea418c',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: 'rgba(255,255,255,0.4)',
		[varBsTableBorderColor]: 'rgba(255,255,255,0.52)',
		[varBsTableStripedBg]: 'rgba(255,255,255,0.43)',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: 'rgba(255,255,255,0.46)',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: 'rgba(255,255,255,0.445)',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#fd7e14',
		[varBsTableBorderColor]: '#fd9843',
		[varBsTableStripedBg]: '#fd8420',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#fd8b2c',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#fd8826',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#41d7a7',
		[varBsTableBorderColor]: '#67dfb9',
		[varBsTableStripedBg]: '#4bd9ab',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#54dbb0',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#4fdaae',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableWarning}`, {
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
globalStyle(`${quartzScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#39cbfb',
		[varBsTableBorderColor]: '#61d5fc',
		[varBsTableStripedBg]: '#43cefb',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#4dd0fb',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#48cffb',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e9e9e8',
		[varBsTableBorderColor]: '#bababa',
		[varBsTableStripedBg]: '#dddddc',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d2d2d1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#d8d8d7',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})
