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
import { sandstoneScope } from '../../scope.css'

const cssVarName = (token: string) => token.slice(4, -1)

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

// Bootstrap reboot: thead, tbody, tfoot, tr { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${sandstoneScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${sandstoneScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: td, th { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${sandstoneScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: th { border-color: inherit; border-style: solid; border-width: 0; text-align: inherit }
globalStyle(`${sandstoneScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	textAlign: 'inherit',
})

globalStyle(`${sandstoneScope}${tableElement} > thead`, {
	verticalAlign: 'bottom',
})

globalStyle(`${sandstoneScope}${tableElement} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${sandstoneScope}${table}`, {
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

globalStyle(`${sandstoneScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${sandstoneScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${sandstoneScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${sandstoneScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})

globalStyle(`${sandstoneScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${sandstoneScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${sandstoneScope}${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${sandstoneScope}${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${sandstoneScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#3e3f3a',
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

globalStyle(`${sandstoneScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#d6dfe7',
		[varBsTableBorderColor]: '#abb2b9',
		[varBsTableStripedBg]: '#cbd4db',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c1c9d0',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c6ced6',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#e8e8e6',
		[varBsTableBorderColor]: '#babab8',
		[varBsTableStripedBg]: '#dcdcdb',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d1d1cf',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d7d7d5',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#f7dddc',
		[varBsTableBorderColor]: '#c6b1b0',
		[varBsTableStripedBg]: '#ebd2d1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dec7c6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e4cccc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#e9f3db',
		[varBsTableBorderColor]: '#bac2af',
		[varBsTableStripedBg]: '#dde7d0',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d2dbc5',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d8e1cb',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#fde5d8',
		[varBsTableBorderColor]: '#cab7ad',
		[varBsTableStripedBg]: '#f0dacd',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e4cec2',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ead4c8',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})
globalStyle(`${sandstoneScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#d4eef9',
		[varBsTableBorderColor]: '#aabec7',
		[varBsTableStripedBg]: '#c9e2ed',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bfd6e0',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c4dce6',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${sandstoneScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#3e3f3a',
		[varBsTableBg]: '#f8f5f0',
		[varBsTableBorderColor]: '#c6c4c0',
		[varBsTableStripedBg]: '#ece9e4',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfddd8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e5e3de',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})
