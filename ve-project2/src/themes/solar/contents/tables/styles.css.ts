import { globalStyle } from '@vanilla-extract/css'
import {
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
import { solarScope } from '../../scope.css'

const cssVarName = (token: string) => token.slice(4, -1)

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

// Bootstrap reboot: thead, tbody, tfoot, tr { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${solarScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${solarScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: td, th { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${solarScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: th { border-color: inherit; border-style: solid; border-width: 0; text-align: inherit }
globalStyle(`${solarScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	textAlign: 'inherit',
})

globalStyle(`${solarScope}${tableElement} > thead`, {
	verticalAlign: 'bottom',
})

globalStyle(`${solarScope}${tableElement} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${solarScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: '#073642',
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

globalStyle(`${solarScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${solarScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${solarScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${solarScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})

globalStyle(`${solarScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${solarScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${solarScope}${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${solarScope}${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${solarScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#073642',
		[varBsTableBorderColor]: '#395e68',
		[varBsTableStripedBg]: '#13404b',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#204a55',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#1a4550',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#b58900',
		[varBsTableBorderColor]: '#c4a133',
		[varBsTableStripedBg]: '#b98f0d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#bc951a',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#bb9213',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#839496',
		[varBsTableBorderColor]: '#9ca9ab',
		[varBsTableStripedBg]: '#89999b',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#8f9fa1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#8c9c9e',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#d33682',
		[varBsTableBorderColor]: '#dc5e9b',
		[varBsTableStripedBg]: '#d54088',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#d74a8f',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#d6458b',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#2aa198',
		[varBsTableBorderColor]: '#55b4ad',
		[varBsTableStripedBg]: '#35a69d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#3faaa2',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#3aa8a0',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#cb4b16',
		[varBsTableBorderColor]: '#d56f45',
		[varBsTableStripedBg]: '#ce5422',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#d05d2d',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#cf5927',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})
globalStyle(`${solarScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#268bd2',
		[varBsTableBorderColor]: '#51a2db',
		[varBsTableStripedBg]: '#3191d4',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#3c97d7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#3694d5',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${solarScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fdf6e3',
		[varBsTableBorderColor]: '#cac5b6',
		[varBsTableStripedBg]: '#f0ead8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e4ddcc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#eae4d2',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})
