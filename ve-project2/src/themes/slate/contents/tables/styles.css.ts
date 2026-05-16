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
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
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
import { slateScope } from '../../scope.css'

const cssVarName = (token: string) => token.slice(4, -1)

// ─── Tables ───────────────────────────────────────────────────────────────────

globalStyle(`${slateScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

// Bootstrap reboot: thead, tbody, tfoot, tr { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${slateScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(`${slateScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: td, th { border-color: inherit; border-style: solid; border-width: 0 }
globalStyle(`${slateScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
})

// Bootstrap reboot: th { border-color: inherit; border-style: solid; border-width: 0; text-align: inherit }
globalStyle(`${slateScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	textAlign: 'inherit',
})

globalStyle(`${slateScope}${tableElement} > thead`, {
	verticalAlign: 'bottom',
})

globalStyle(`${slateScope}${tableElement} > tbody`, {
	verticalAlign: 'inherit',
})

globalStyle(`${slateScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: 'rgba(0, 0, 0, 0.6)',
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

globalStyle(`${slateScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: `var(${cssVarName(varBsTableColorState)}, var(${cssVarName(varBsTableColorType)}, ${varBsTableColor}))`,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px var(${cssVarName(varBsTableBgState)}, var(${cssVarName(varBsTableBgType)}, ${varBsTableAccentBg}))`,
})

globalStyle(`${slateScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${slateScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${slateScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: 0,
})

globalStyle(`${slateScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${slateScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${slateScope}${tableStriped} > tbody > tr:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${slateScope}${tableHover} > tbody > tr:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${slateScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#272b30',
		[varBsTableBorderColor]: '#525559',
		[varBsTableStripedBg]: '#32363a',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#3d4045',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#373b40',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${slateScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#3a3f44',
		[varBsTableBorderColor]: '#616569',
		[varBsTableStripedBg]: '#44494d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#4e5257',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#494d52',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${slateScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#7a8288',
		[varBsTableBorderColor]: '#959ba0',
		[varBsTableStripedBg]: '#81888e',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#878f94',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#848b91',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${slateScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ee5f5b',
		[varBsTableBorderColor]: '#f17f7c',
		[varBsTableStripedBg]: '#ef6763',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#f06f6b',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ef6b67',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${slateScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#62c462',
		[varBsTableBorderColor]: '#81d081',
		[varBsTableStripedBg]: '#6ac76a',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#72ca72',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#6ec86e',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${slateScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#f89406',
		[varBsTableBorderColor]: '#f9a938',
		[varBsTableStripedBg]: '#f89912',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#f99f1f',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#f99c19',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})
globalStyle(`${slateScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#5bc0de',
		[varBsTableBorderColor]: '#7ccde5',
		[varBsTableStripedBg]: '#63c3e0',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#6bc6e1',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#67c5e0',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${slateScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e9ecef',
		[varBsTableBorderColor]: '#babdbf',
		[varBsTableStripedBg]: '#dde0e3',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d2d4d7',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d8dadd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// ── Slate: heading text-shadow ────────────────────────────────────────────────
globalStyle([h1, h2, h3, h4, h5, h6].map((heading) => `${slateScope}${heading}`).join(', '), {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})
