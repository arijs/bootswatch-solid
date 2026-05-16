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
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	link,
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
import { vaporScope } from '../../scope.css'

const cssVarName = (token: string) => token.slice(4, -1)

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${vaporScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

// Bootstrap reboot: thead, tbody, tfoot, tr { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${vaporScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${vaporScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: td, th { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${vaporScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: th { border-color: inherit; border-style: solid; border-width: 0; text-align: inherit }
globalStyle(`${vaporScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	textAlign: 'inherit',
})

globalStyle(`${vaporScope}${tableElement} > thead`, {
	verticalAlign: 'bottom',
})

globalStyle(`${vaporScope}${tableElement} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${vaporScope}${table}`, {
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

globalStyle(`${vaporScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${vaporScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${vaporScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${vaporScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})

globalStyle(`${vaporScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${vaporScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${vaporScope}${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${vaporScope}${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${vaporScope}${tableElement}, ${vaporScope}${table}`, {
	textShadow:
		'0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#170229',
		[varBsTableBorderColor]: '#453554',
		[varBsTableStripedBg]: '#230f34',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#2e1b3e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#281539',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#6f42c1',
		[varBsTableBorderColor]: '#8c68cd',
		[varBsTableStripedBg]: '#764bc4',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#7d55c7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#7a50c6',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ea39b8',
		[varBsTableBorderColor]: '#ee61c6',
		[varBsTableStripedBg]: '#eb43bc',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ec4dbf',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ec48bd',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#e44c55',
		[varBsTableBorderColor]: '#e97077',
		[varBsTableStripedBg]: '#e5555e',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#e75e66',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#e65962',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#3cf281',
		[varBsTableBorderColor]: '#63f59a',
		[varBsTableStripedBg]: '#46f387',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#50f38e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#4bf38a',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableWarning}`, {
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
globalStyle(`${vaporScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#1ba2f6',
		[varBsTableBorderColor]: '#49b5f8',
		[varBsTableStripedBg]: '#26a7f6',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#32abf7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#2ca9f7',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#44d9e8',
		[varBsTableBorderColor]: '#69e1ed',
		[varBsTableStripedBg]: '#4ddbe9',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#57ddea',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#52dcea',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(
	`${vaporScope}${h1}, ${vaporScope}${h2}, ${vaporScope}${h3}, ${vaporScope}${h4}, ${vaporScope}${h5}, ${vaporScope}${h6}`,
	{
		textShadow:
			'0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
	},
)

globalStyle(`${vaporScope}${link}`, {
	textShadow:
		'0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)',
})

// horizontalRule Vapor override consolidated into the rule at line 112.
