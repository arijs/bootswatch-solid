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
import { ceruleanScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/tables
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .table { --bs-table-color-type: initial; --bs-table-bg-type: initial; --bs-table-color-state: initial; --bs-table-bg-state: initial; --bs-table-color: var(--bs-emphasis-color); --bs-table-bg: var(--bs-body-bg); --bs-table-border-color: var(--bs-border-color); --bs-table-accent-bg: transparent; --bs-table-striped-color: var(--bs-emphasis-color); --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05); --bs-table-active-color: var(--bs-emphasis-color); --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1); --bs-table-hover-color: var(--bs-emphasis-color); --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075); width: 100%; margin-bottom: 1rem; vertical-align: top; border-color: var(--bs-table-border-color); }
globalStyle(`${ceruleanScope}${table}`, {
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
globalStyle(`${ceruleanScope}${tableElement}`, {
	borderCollapse: 'collapse',
	captionSide: 'bottom',
})

// Direct cell paint — compound table>section>row>cell selectors fail VE scope chaining in globalStyle.
// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle(`${ceruleanScope}${tableHeaderCell}`, {
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
globalStyle(`${ceruleanScope}${tableCell}`, {
	padding: "0.5rem 0.5rem",
	borderBottomWidth: varBsBorderWidth,
	borderBottomStyle: 'solid',
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${ceruleanScope}${tableSm} ${ceruleanScope}${tableHeaderCell}`, {
	padding: "0.25rem 0.25rem",
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${ceruleanScope}${tableSm} ${ceruleanScope}${tableCell}`, {
	padding: "0.25rem 0.25rem",
})

globalStyle(`${ceruleanScope}${tableBordered} > ${ceruleanScope}${tableSection}`, {
	borderWidth: `${varBsBorderWidth} 0`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${ceruleanScope}${tableBordered} ${ceruleanScope}${tableHeaderCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${ceruleanScope}${tableBordered} ${ceruleanScope}${tableCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle([
	`${ceruleanScope}${table} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow} > ${ceruleanScope}${tableCell}`,
	`${ceruleanScope}${table} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow} > ${ceruleanScope}${tableHeaderCell}`,
], {
	padding: "0.5rem 0.5rem",
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table > tbody { vertical-align: inherit; }
globalStyle(`${ceruleanScope}${table} > ${ceruleanScope}${tableSection}`, {
	verticalAlign: "inherit",
})

// SOURCE CSS:
// .table > thead { vertical-align: bottom; }
globalStyle(`${ceruleanScope}${table} > ${ceruleanScope}${tableSection}`, {
	verticalAlign: "bottom",
})

// SOURCE CSS:
// .table-borderless > :not(caption) > * > * { border-bottom-width: 0; }
globalStyle([
	`${ceruleanScope}${tableBorderless} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow} > ${ceruleanScope}${tableCell}`,
	`${ceruleanScope}${tableBorderless} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow} > ${ceruleanScope}${tableHeaderCell}`,
], {
	borderBottomWidth: 0,
})

// SOURCE CSS:
// .table-borderless > :not(:first-child) { border-top-width: 0; }
globalStyle(`${ceruleanScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

// SOURCE CSS:
// .table-dark { --bs-table-color: #fff; --bs-table-bg: #212529; --bs-table-border-color: #4d5154; --bs-table-striped-bg: #2c3034; --bs-table-striped-color: #fff; --bs-table-active-bg: #373b3e; --bs-table-active-color: #fff; --bs-table-hover-bg: #323539; --bs-table-hover-color: #fff; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${ceruleanScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#343a40",
		[varBsTableBorderColor]: "#5d6166",
		[varBsTableStripedBg]: "#3e444a",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#484e53",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#43494e",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-hover > tbody > tr:hover > * { --bs-table-color-state: var(--bs-table-hover-color); --bs-table-bg-state: var(--bs-table-hover-bg); }
globalStyle([
	`${ceruleanScope}${tableHover} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow}:hover > ${ceruleanScope}${tableCell}`,
	`${ceruleanScope}${tableHover} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow}:hover > ${ceruleanScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

// SOURCE CSS:
// .table-danger { --bs-table-color: #000; --bs-table-bg: #f8d7da; --bs-table-border-color: #c6acae; --bs-table-striped-bg: #eccccf; --bs-table-striped-color: #000; --bs-table-active-bg: #dfc2c4; --bs-table-active-color: #000; --bs-table-hover-bg: #e5c7ca; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${ceruleanScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: "#495057",
		[varBsTableBg]: "#f4d2d3",
		[varBsTableBorderColor]: "#c3a8a9",
		[varBsTableStripedBg]: "#e8c8c8",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#dcbdbe",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#e2c2c3",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-info { --bs-table-color: #000; --bs-table-bg: #cff4fc; --bs-table-border-color: #a6c3ca; --bs-table-striped-bg: #c5e8ef; --bs-table-striped-color: #000; --bs-table-active-bg: #badce3; --bs-table-active-color: #000; --bs-table-hover-bg: #bfe2e9; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${ceruleanScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: "#495057",
		[varBsTableBg]: "#cdd8e3",
		[varBsTableBorderColor]: "#a4adb6",
		[varBsTableStripedBg]: "#c3cdd8",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#b9c2cc",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#bec8d2",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-light { --bs-table-color: #000; --bs-table-bg: #f8f9fa; --bs-table-border-color: #c6c7c8; --bs-table-striped-bg: #ecedee; --bs-table-striped-color: #000; --bs-table-active-bg: #dfe0e1; --bs-table-active-color: #000; --bs-table-hover-bg: #e5e6e7; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${ceruleanScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: "#495057",
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
globalStyle(`${ceruleanScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: "#495057",
		[varBsTableBg]: "#d5edfa",
		[varBsTableBorderColor]: "#aabec8",
		[varBsTableStripedBg]: "#cae1ee",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#c0d5e1",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#c5dbe7",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-secondary { --bs-table-color: #000; --bs-table-bg: #e2e3e5; --bs-table-border-color: #b5b6b7; --bs-table-striped-bg: #d7d8da; --bs-table-striped-color: #000; --bs-table-active-bg: #cbccce; --bs-table-active-color: #000; --bs-table-hover-bg: #d1d2d4; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${ceruleanScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: "#495057",
		[varBsTableBg]: "#fbfbfc",
		[varBsTableBorderColor]: "#c9c9ca",
		[varBsTableStripedBg]: "#eeeeef",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#e2e2e3",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#e8e8e9",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-success { --bs-table-color: #000; --bs-table-bg: #d1e7dd; --bs-table-border-color: #a7b9b1; --bs-table-striped-bg: #c7dbd2; --bs-table-striped-color: #000; --bs-table-active-bg: #bcd0c7; --bs-table-active-color: #000; --bs-table-hover-bg: #c1d6cc; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${ceruleanScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: "#495057",
		[varBsTableBg]: "#e3eed7",
		[varBsTableBorderColor]: "#b6beac",
		[varBsTableStripedBg]: "#d8e2cc",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#ccd6c2",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#d2dcc7",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-warning { --bs-table-color: #000; --bs-table-bg: #fff3cd; --bs-table-border-color: #ccc2a4; --bs-table-striped-bg: #f2e7c3; --bs-table-striped-color: #000; --bs-table-active-bg: #e6dbb9; --bs-table-active-color: #000; --bs-table-hover-bg: #ece1be; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${ceruleanScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: "#495057",
		[varBsTableBg]: "#f8ddcc",
		[varBsTableBorderColor]: "#c6b1a3",
		[varBsTableStripedBg]: "#ecd2c2",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#dfc7b8",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#e5ccbd",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle([
	`${ceruleanScope}${tableSm} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow} > ${ceruleanScope}${tableCell}`,
	`${ceruleanScope}${tableSm} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow} > ${ceruleanScope}${tableHeaderCell}`,
], {
	padding: "0.25rem 0.25rem",
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * { border-width: var(--bs-border-width) 0; }
globalStyle(`${ceruleanScope}${tableBordered} > :not(caption) > ${ceruleanScope}${tableSection}`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle([
	`${ceruleanScope}${tableBordered} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow} > ${ceruleanScope}${tableCell}`,
	`${ceruleanScope}${tableBordered} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow} > ${ceruleanScope}${tableHeaderCell}`,
], {
	borderWidth: `0 ${varBsBorderWidth}`,
})

// SOURCE CSS:
// .table-striped > tbody > tr:nth-of-type(2n+1) > * { --bs-table-color-type: var(--bs-table-striped-color); --bs-table-bg-type: var(--bs-table-striped-bg); }
globalStyle([
	`${ceruleanScope}${tableStriped} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow}:nth-of-type(2n+1) > ${ceruleanScope}${tableCell}`,
	`${ceruleanScope}${tableStriped} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow}:nth-of-type(2n+1) > ${ceruleanScope}${tableHeaderCell}`,
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
	`${ceruleanScope}${tableStriped} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow}:nth-of-type(odd) > ${ceruleanScope}${tableCell}`,
	`${ceruleanScope}${tableStriped} > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow}:nth-of-type(odd) > ${ceruleanScope}${tableHeaderCell}`,
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
globalStyle(`.table-striped-columns > ${ceruleanScope}${tableSection} > ${ceruleanScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})
