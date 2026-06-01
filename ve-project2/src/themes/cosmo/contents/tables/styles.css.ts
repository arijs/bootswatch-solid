import { globalStyle } from '@vanilla-extract/css'
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
import {
	collapse,
} from '../../../../theme-contract/ui/navbar/contract.css'
import { cosmoScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/tables
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .table { --bs-table-color-type: initial; --bs-table-bg-type: initial; --bs-table-color-state: initial; --bs-table-bg-state: initial; --bs-table-color: var(--bs-emphasis-color); --bs-table-bg: var(--bs-body-bg); --bs-table-border-color: var(--bs-border-color); --bs-table-accent-bg: transparent; --bs-table-striped-color: var(--bs-emphasis-color); --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05); --bs-table-active-color: var(--bs-emphasis-color); --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1); --bs-table-hover-color: var(--bs-emphasis-color); --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075); width: 100%; margin-bottom: 1rem; vertical-align: top; border-color: var(--bs-table-border-color); }
globalStyle(`${cosmoScope}${table}`, {
	vars: {
		[varBsTableColorType]: "initial",
		[varBsTableBgType]: "initial",
		[varBsTableColorState]: "initial",
		[varBsTableBgState]: "initial",
		[varBsTableColor]: "initial",
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: varBsBorderColor,
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

// Reboot: table element border model (components stamp tableElement on <table>).
globalStyle(`${cosmoScope}${tableElement}`, {
	borderCollapse: 'collapse',
	captionSide: 'bottom',
})

// Direct cell paint — compound table>section>row>cell selectors fail VE scope chaining in globalStyle.
// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle(`${cosmoScope}${tableHeaderCell}`, {
	padding: "0.5rem 0.5rem",
	textAlign: 'left',
	borderBottomWidth: varBsBorderWidth,
	borderBottomStyle: 'solid',
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle(`${cosmoScope}${tableCell}`, {
	padding: "0.5rem 0.5rem",
	borderBottomWidth: varBsBorderWidth,
	borderBottomStyle: 'solid',
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${cosmoScope}${tableSm} ${cosmoScope}${tableHeaderCell}`, {
	padding: "0.25rem 0.25rem",
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${cosmoScope}${tableSm} ${cosmoScope}${tableCell}`, {
	padding: "0.25rem 0.25rem",
})

globalStyle(`${cosmoScope}${tableBordered} > ${cosmoScope}${tableSection}`, {
	borderWidth: `${varBsBorderWidth} 0`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${cosmoScope}${tableBordered} ${cosmoScope}${tableHeaderCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${cosmoScope}${tableBordered} ${cosmoScope}${tableCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle([
	`${cosmoScope}${table} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow} > ${cosmoScope}${tableCell}`,
	`${cosmoScope}${table} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow} > ${cosmoScope}${tableHeaderCell}`,
], {
	padding: "0.5rem 0.5rem",
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table > tbody { vertical-align: inherit; }
globalStyle(`${cosmoScope}${table} > ${cosmoScope}${tableSection}`, {
	verticalAlign: "inherit",
})

// SOURCE CSS:
// .table > thead { vertical-align: bottom; }
globalStyle(`${cosmoScope}${table} > ${cosmoScope}${tableSection}`, {
	verticalAlign: "bottom",
})

// SOURCE CSS:
// .table-borderless > :not(caption) > * > * { border-bottom-width: 0; }
globalStyle([
	`${cosmoScope}${tableBorderless} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow} > ${cosmoScope}${tableCell}`,
	`${cosmoScope}${tableBorderless} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow} > ${cosmoScope}${tableHeaderCell}`,
], {
	borderBottomWidth: 0,
})

// SOURCE CSS:
// .table-borderless > :not(:first-child) { border-top-width: 0; }
globalStyle(`${cosmoScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

// SOURCE CSS:
// .table-dark { --bs-table-color: #fff; --bs-table-bg: #212529; --bs-table-border-color: #4d5154; --bs-table-striped-bg: #2c3034; --bs-table-striped-color: #fff; --bs-table-active-bg: #373b3e; --bs-table-active-color: #fff; --bs-table-hover-bg: #323539; --bs-table-hover-color: #fff; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cosmoScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#373a3c",
		[varBsTableBorderColor]: "#5f6163",
		[varBsTableStripedBg]: "#414446",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#4b4e50",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#46494b",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-hover > tbody > tr:hover > * { --bs-table-color-state: var(--bs-table-hover-color); --bs-table-bg-state: var(--bs-table-hover-bg); }
globalStyle([
	`${cosmoScope}${tableHover} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow}:hover > ${cosmoScope}${tableCell}`,
	`${cosmoScope}${tableHover} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow}:hover > ${cosmoScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

// SOURCE CSS:
// .table-danger { --bs-table-color: #000; --bs-table-bg: #f8d7da; --bs-table-border-color: #c6acae; --bs-table-striped-bg: #eccccf; --bs-table-striped-color: #000; --bs-table-active-bg: #dfc2c4; --bs-table-active-color: #000; --bs-table-hover-bg: #e5c7ca; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cosmoScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: "#373a3c",
		[varBsTableBg]: "#ffccd7",
		[varBsTableBorderColor]: "#cca3ac",
		[varBsTableStripedBg]: "#f2c2cc",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#e6b8c2",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#ecbdc7",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-info { --bs-table-color: #000; --bs-table-bg: #cff4fc; --bs-table-border-color: #a6c3ca; --bs-table-striped-bg: #c5e8ef; --bs-table-striped-color: #000; --bs-table-active-bg: #badce3; --bs-table-active-color: #000; --bs-table-hover-bg: #bfe2e9; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cosmoScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: "#373a3c",
		[varBsTableBg]: "#ebddf1",
		[varBsTableBorderColor]: "#bcb1c1",
		[varBsTableStripedBg]: "#dfd2e5",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#d4c7d9",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#d9ccdf",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-light { --bs-table-color: #000; --bs-table-bg: #f8f9fa; --bs-table-border-color: #c6c7c8; --bs-table-striped-bg: #ecedee; --bs-table-striped-color: #000; --bs-table-active-bg: #dfe0e1; --bs-table-active-color: #000; --bs-table-hover-bg: #e5e6e7; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cosmoScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: "#373a3c",
		[varBsTableBg]: "#f8f9fa",
		[varBsTableBorderColor]: "#c6c7c8",
		[varBsTableStripedBg]: "#ecedee",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#dfe0e1",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#e5e6e7",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-primary { --bs-table-color: #000; --bs-table-bg: #cfe2ff; --bs-table-border-color: #a6b5cc; --bs-table-striped-bg: #c5d7f2; --bs-table-striped-color: #000; --bs-table-active-bg: #bacbe6; --bs-table-active-color: #000; --bs-table-hover-bg: #bfd1ec; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cosmoScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: "#373a3c",
		[varBsTableBg]: "#d4e6f9",
		[varBsTableBorderColor]: "#aab8c7",
		[varBsTableStripedBg]: "#c9dbed",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#bfcfe0",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#c4d5e6",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-secondary { --bs-table-color: #000; --bs-table-bg: #e2e3e5; --bs-table-border-color: #b5b6b7; --bs-table-striped-bg: #d7d8da; --bs-table-striped-color: #000; --bs-table-active-bg: #cbccce; --bs-table-active-color: #000; --bs-table-hover-bg: #d1d2d4; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cosmoScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: "#373a3c",
		[varBsTableBg]: "#d7d8d8",
		[varBsTableBorderColor]: "#acadad",
		[varBsTableStripedBg]: "#cccdcd",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#c2c2c2",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#c7c8c8",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-success { --bs-table-color: #000; --bs-table-bg: #d1e7dd; --bs-table-border-color: #a7b9b1; --bs-table-striped-bg: #c7dbd2; --bs-table-striped-color: #000; --bs-table-active-bg: #bcd0c7; --bs-table-active-color: #000; --bs-table-hover-bg: #c1d6cc; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cosmoScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: "#373a3c",
		[varBsTableBg]: "#d9f0d1",
		[varBsTableBorderColor]: "#aec0a7",
		[varBsTableStripedBg]: "#cee4c7",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#c3d8bc",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#c9dec1",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-warning { --bs-table-color: #000; --bs-table-bg: #fff3cd; --bs-table-border-color: #ccc2a4; --bs-table-striped-bg: #f2e7c3; --bs-table-striped-color: #000; --bs-table-active-bg: #e6dbb9; --bs-table-active-color: #000; --bs-table-hover-bg: #ece1be; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cosmoScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: "#373a3c",
		[varBsTableBg]: "#ffe3d1",
		[varBsTableBorderColor]: "#ccb6a7",
		[varBsTableStripedBg]: "#f2d8c7",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#e6ccbc",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#ecd2c1",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle([
	`${cosmoScope}${tableSm} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow} > ${cosmoScope}${tableCell}`,
	`${cosmoScope}${tableSm} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow} > ${cosmoScope}${tableHeaderCell}`,
], {
	padding: "0.25rem 0.25rem",
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * { border-width: var(--bs-border-width) 0; }
globalStyle(`${cosmoScope}${tableBordered} > :not(caption) > ${cosmoScope}${tableSection}`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle([
	`${cosmoScope}${tableBordered} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow} > ${cosmoScope}${tableCell}`,
	`${cosmoScope}${tableBordered} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow} > ${cosmoScope}${tableHeaderCell}`,
], {
	borderWidth: `0 ${varBsBorderWidth}`,
})

// SOURCE CSS:
// .table-striped > tbody > tr:nth-of-type(2n+1) > * { --bs-table-color-type: var(--bs-table-striped-color); --bs-table-bg-type: var(--bs-table-striped-bg); }
globalStyle([
	`${cosmoScope}${tableStriped} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow}:nth-of-type(2n+1) > ${cosmoScope}${tableCell}`,
	`${cosmoScope}${tableStriped} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow}:nth-of-type(2n+1) > ${cosmoScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .table-striped > tbody > tr:nth-of-type(odd) > * { --bs-table-color-type: var(--bs-table-striped-color); --bs-table-bg-type: var(--bs-table-striped-bg); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle([
	`${cosmoScope}${tableStriped} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow}:nth-of-type(odd) > ${cosmoScope}${tableCell}`,
	`${cosmoScope}${tableStriped} > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow}:nth-of-type(odd) > ${cosmoScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})
// SOURCE CSS:
// .table-striped-columns > :not(caption) > tr > :nth-child(even) { --bs-table-color-type: var(--bs-table-striped-color); --bs-table-bg-type: var(--bs-table-striped-bg); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".table-striped-columns" — no contract mapping
globalStyle(`.table-striped-columns > ${cosmoScope}${tableSection} > ${cosmoScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})
