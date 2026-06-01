import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
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
	table,
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
} from '../../../../theme-contract/contents/tables/contract.css'
import { darklyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/tables
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .table { --bs-table-color-type: initial; --bs-table-bg-type: initial; --bs-table-color-state: initial; --bs-table-bg-state: initial; --bs-table-color: initial; --bs-table-bg: var(--bs-body-bg); --bs-table-border-color: #444; ...
globalStyle(`${darklyScope}${table}`, {
	vars: {
		[varBsTableColorType]: "initial",
		[varBsTableBgType]: "initial",
		[varBsTableColorState]: "initial",
		[varBsTableBgState]: "initial",
		[varBsTableColor]: "initial",
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: "#444",
		[varBsTableAccentBg]: "transparent",
		[varBsTableStripedColor]: "initial",
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: "initial",
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: "initial",
		[varBsTableHoverBg]: `rgba(${varBsEmphasisColorRgb}, 0.075)`,
	},
	width: "100%",
	marginBottom: "1rem",
	verticalAlign: "top",
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableElement}`, {
	borderCollapse: 'collapse',
	captionSide: 'bottom',
})

globalStyle(`${darklyScope}${tableHeaderCell}`, {
	padding: "0.5rem 0.5rem",
	textAlign: 'left',
	borderBottomWidth: varBsBorderWidth,
	borderBottomStyle: 'solid',
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

globalStyle(`${darklyScope}${tableCell}`, {
	padding: "0.5rem 0.5rem",
	borderBottomWidth: varBsBorderWidth,
	borderBottomStyle: 'solid',
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

globalStyle(`${darklyScope}${tableSm} ${darklyScope}${tableHeaderCell}`, {
	padding: "0.25rem 0.25rem",
})

globalStyle(`${darklyScope}${tableSm} ${darklyScope}${tableCell}`, {
	padding: "0.25rem 0.25rem",
})

globalStyle(`${darklyScope}${tableBordered} > ${darklyScope}${tableSection}`, {
	borderWidth: `${varBsBorderWidth} 0`,
	borderStyle: 'solid',
})

globalStyle(`${darklyScope}${tableBordered} ${darklyScope}${tableHeaderCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

globalStyle(`${darklyScope}${tableBordered} ${darklyScope}${tableCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

globalStyle([
	`${darklyScope}${table} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow} > ${darklyScope}${tableCell}`,
	`${darklyScope}${table} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow} > ${darklyScope}${tableHeaderCell}`,
], {
	padding: "0.5rem 0.5rem",
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

globalStyle(`${darklyScope}${table} > ${darklyScope}${tableSection}`, {
	verticalAlign: "inherit",
})

globalStyle([
	`${darklyScope}${tableBorderless} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow} > ${darklyScope}${tableCell}`,
	`${darklyScope}${tableBorderless} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow} > ${darklyScope}${tableHeaderCell}`,
], {
	borderBottomWidth: 0,
})

globalStyle(`${darklyScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

globalStyle(`${darklyScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#375a7f",
		[varBsTableBorderColor]: "#5f7b99",
		[varBsTableStripedBg]: "#416285",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#4b6b8c",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#466689",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#444444",
		[varBsTableBorderColor]: "dimgray",
		[varBsTableStripedBg]: "#4d4d4d",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#575757",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#525252",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#00bc8c",
		[varBsTableBorderColor]: "#33c9a3",
		[varBsTableStripedBg]: "#0dbf92",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#1ac398",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#13c195",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#3498db",
		[varBsTableBorderColor]: "#5dade2",
		[varBsTableStripedBg]: "#3e9ddd",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#48a2df",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#43a0de",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#f39c12",
		[varBsTableBorderColor]: "#f5b041",
		[varBsTableStripedBg]: "#f4a11e",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#f4a62a",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#f4a324",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#e74c3c",
		[varBsTableBorderColor]: "#ec7063",
		[varBsTableStripedBg]: "#e85546",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#e95e50",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#e9594b",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#adb5bd",
		[varBsTableBorderColor]: "#bdc4ca",
		[varBsTableStripedBg]: "#b1b9c0",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#b5bcc4",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#b3bbc2",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${darklyScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#303030",
		[varBsTableBorderColor]: "#595959",
		[varBsTableStripedBg]: "#3a3a3a",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#454545",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#404040",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle([
	`${darklyScope}${tableHover} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow}:hover > ${darklyScope}${tableCell}`,
	`${darklyScope}${tableHover} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow}:hover > ${darklyScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle([
	`${darklyScope}${tableStriped} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow}:nth-of-type(2n+1) > ${darklyScope}${tableCell}`,
	`${darklyScope}${tableStriped} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow}:nth-of-type(2n+1) > ${darklyScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle([
	`${darklyScope}${tableSm} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow} > ${darklyScope}${tableCell}`,
	`${darklyScope}${tableSm} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow} > ${darklyScope}${tableHeaderCell}`,
], {
	padding: "0.25rem 0.25rem",
})

globalStyle(`${darklyScope}${tableBordered} > :not(caption) > ${darklyScope}${tableSection}`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle([
	`${darklyScope}${tableBordered} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow} > ${darklyScope}${tableCell}`,
	`${darklyScope}${tableBordered} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow} > ${darklyScope}${tableHeaderCell}`,
], {
	borderWidth: `0 ${varBsBorderWidth}`,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
globalStyle([
	`${darklyScope}${tableStriped} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow}:nth-of-type(odd) > ${darklyScope}${tableCell}`,
	`${darklyScope}${tableStriped} > ${darklyScope}${tableSection} > ${darklyScope}${tableRow}:nth-of-type(odd) > ${darklyScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`.table-striped-columns > ${darklyScope}${tableSection} > ${darklyScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})
