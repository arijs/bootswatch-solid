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
import {
	collapse,
} from '../../../../theme-contract/ui/navbar/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/tables
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .table { --bs-table-color-type: initial; --bs-table-bg-type: initial; --bs-table-color-state: initial; --bs-table-bg-state: initial; --bs-table-color: var(--bs-emphasis-color); --bs-table-bg: var(--bs-body-bg); --bs-table-border-color: var(--bs-border-color); --bs-table-accent-bg: transparent; --bs-table-striped-color: var(--bs-emphasis-color); --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05); --bs-table-active-color: var(--bs-emphasis-color); --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1); --bs-table-hover-color: var(--bs-emphasis-color); --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075); width: 100%; margin-bottom: 1rem; vertical-align: top; border-color: var(--bs-table-border-color); }
globalStyle(`${cyborgScope}${table}`, {
	vars: {
		[varBsTableColorType]: "initial",
		[varBsTableBgType]: "initial",
		[varBsTableColorState]: "initial",
		[varBsTableBgState]: "initial",
		[varBsTableColor]: "initial",
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: "#282828",
		[varBsTableAccentBg]: "rgba(255, 255, 255, 0.05)",
		[varBsTableStripedColor]: "initial",
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: "initial",
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: "initial",
		[varBsTableHoverBg]: "rgba(255, 255, 255, 0.075)",
	},
	width: "100%",
	marginBottom: "1rem",
	verticalAlign: "top",
	borderColor: varBsTableBorderColor,
})

// Reboot: table element border model (components stamp tableElement on <table>).
globalStyle(`${cyborgScope}${tableElement}`, {
	borderCollapse: 'collapse',
	captionSide: 'bottom',
})

// Direct cell paint — compound table>section>row>cell selectors fail VE scope chaining in globalStyle.
// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle(`${cyborgScope}${tableHeaderCell}`, {
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
globalStyle(`${cyborgScope}${tableCell}`, {
	padding: "0.5rem 0.5rem",
	borderBottomWidth: varBsBorderWidth,
	borderBottomStyle: 'solid',
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${cyborgScope}${tableSm} ${cyborgScope}${tableHeaderCell}`, {
	padding: "0.25rem 0.25rem",
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${cyborgScope}${tableSm} ${cyborgScope}${tableCell}`, {
	padding: "0.25rem 0.25rem",
})

globalStyle(`${cyborgScope}${tableBordered} > ${cyborgScope}${tableSection}`, {
	borderWidth: `${varBsBorderWidth} 0`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${cyborgScope}${tableBordered} ${cyborgScope}${tableHeaderCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${cyborgScope}${tableBordered} ${cyborgScope}${tableCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle([
	`${cyborgScope}${table} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow} > ${cyborgScope}${tableCell}`,
	`${cyborgScope}${table} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow} > ${cyborgScope}${tableHeaderCell}`,
], {
	padding: "0.5rem 0.5rem",
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table > tbody { vertical-align: inherit; }
globalStyle(`${cyborgScope}${table} > ${cyborgScope}${tableSection}`, {
	verticalAlign: "inherit",
})

// SOURCE CSS:
// .table > thead { vertical-align: bottom; }
globalStyle(`${cyborgScope}${table} > ${cyborgScope}${tableSection}`, {
	verticalAlign: "bottom",
})

// SOURCE CSS:
// .table-borderless > :not(caption) > * > * { border-bottom-width: 0; }
globalStyle([
	`${cyborgScope}${tableBorderless} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow} > ${cyborgScope}${tableCell}`,
	`${cyborgScope}${tableBorderless} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow} > ${cyborgScope}${tableHeaderCell}`,
], {
	borderBottomWidth: 0,
})

// SOURCE CSS:
// .table-borderless > :not(:first-child) { border-top-width: 0; }
globalStyle(`${cyborgScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

// SOURCE CSS:
// .table-dark { --bs-table-color: #fff; --bs-table-bg: #212529; --bs-table-border-color: #4d5154; --bs-table-striped-bg: #2c3034; --bs-table-striped-color: #fff; --bs-table-active-bg: #373b3e; --bs-table-active-color: #fff; --bs-table-hover-bg: #323539; --bs-table-hover-color: #fff; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cyborgScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#adafae",
		[varBsTableBorderColor]: "#8a8c8b",
		[varBsTableStripedBg]: "#a4a6a5",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#9c9e9d",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#a0a2a1",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-hover > tbody > tr:hover > * { --bs-table-color-state: var(--bs-table-hover-color); --bs-table-bg-state: var(--bs-table-hover-bg); }
globalStyle([
	`${cyborgScope}${tableHover} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow}:hover > ${cyborgScope}${tableCell}`,
	`${cyborgScope}${tableHover} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow}:hover > ${cyborgScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

// SOURCE CSS:
// .table-danger { --bs-table-color: #000; --bs-table-bg: #f8d7da; --bs-table-border-color: #c6acae; --bs-table-striped-bg: #eccccf; --bs-table-striped-color: #000; --bs-table-active-bg: #dfc2c4; --bs-table-active-color: #000; --bs-table-hover-bg: #e5c7ca; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cyborgScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#cc0000",
		[varBsTableBorderColor]: "#d63333",
		[varBsTableStripedBg]: "#cf0d0d",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#d11a1a",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#d01313",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-info { --bs-table-color: #000; --bs-table-bg: #cff4fc; --bs-table-border-color: #a6c3ca; --bs-table-striped-bg: #c5e8ef; --bs-table-striped-color: #000; --bs-table-active-bg: #badce3; --bs-table-active-color: #000; --bs-table-hover-bg: #bfe2e9; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cyborgScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#9933cc",
		[varBsTableBorderColor]: "#ad5cd6",
		[varBsTableStripedBg]: "#9e3dcf",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#a347d1",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#a142d0",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-light { --bs-table-color: #000; --bs-table-bg: #f8f9fa; --bs-table-border-color: #c6c7c8; --bs-table-striped-bg: #ecedee; --bs-table-striped-color: #000; --bs-table-active-bg: #dfe0e1; --bs-table-active-color: #000; --bs-table-hover-bg: #e5e6e7; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cyborgScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#222",
		[varBsTableBorderColor]: "#4e4e4e",
		[varBsTableStripedBg]: "#2d2d2d",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#383838",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#333333",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-primary { --bs-table-color: #000; --bs-table-bg: #cfe2ff; --bs-table-border-color: #a6b5cc; --bs-table-striped-bg: #c5d7f2; --bs-table-striped-color: #000; --bs-table-active-bg: #bacbe6; --bs-table-active-color: #000; --bs-table-hover-bg: #bfd1ec; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cyborgScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#2a9fd6",
		[varBsTableBorderColor]: "#55b2de",
		[varBsTableStripedBg]: "#35a4d8",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#3fa9da",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#3aa6d9",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-secondary { --bs-table-color: #000; --bs-table-bg: #e2e3e5; --bs-table-border-color: #b5b6b7; --bs-table-striped-bg: #d7d8da; --bs-table-striped-color: #000; --bs-table-active-bg: #cbccce; --bs-table-active-color: #000; --bs-table-hover-bg: #d1d2d4; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cyborgScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#555555",
		[varBsTableBorderColor]: "#777777",
		[varBsTableStripedBg]: "#5e5e5e",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#666666",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#626262",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-success { --bs-table-color: #000; --bs-table-bg: #d1e7dd; --bs-table-border-color: #a7b9b1; --bs-table-striped-bg: #c7dbd2; --bs-table-striped-color: #000; --bs-table-active-bg: #bcd0c7; --bs-table-active-color: #000; --bs-table-hover-bg: #c1d6cc; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cyborgScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#77b300",
		[varBsTableBorderColor]: "#92c233",
		[varBsTableStripedBg]: "#7eb70d",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#85bb1a",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#81b913",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-warning { --bs-table-color: #000; --bs-table-bg: #fff3cd; --bs-table-border-color: #ccc2a4; --bs-table-striped-bg: #f2e7c3; --bs-table-striped-color: #000; --bs-table-active-bg: #e6dbb9; --bs-table-active-color: #000; --bs-table-hover-bg: #ece1be; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${cyborgScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#ff8800",
		[varBsTableBorderColor]: "#ffa033",
		[varBsTableStripedBg]: "#ff8e0d",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#ff941a",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#ff9113",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle([
	`${cyborgScope}${tableSm} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow} > ${cyborgScope}${tableCell}`,
	`${cyborgScope}${tableSm} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow} > ${cyborgScope}${tableHeaderCell}`,
], {
	padding: "0.25rem 0.25rem",
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * { border-width: var(--bs-border-width) 0; }
globalStyle(`${cyborgScope}${tableBordered} > :not(caption) > ${cyborgScope}${tableSection}`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle([
	`${cyborgScope}${tableBordered} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow} > ${cyborgScope}${tableCell}`,
	`${cyborgScope}${tableBordered} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow} > ${cyborgScope}${tableHeaderCell}`,
], {
	borderWidth: `0 ${varBsBorderWidth}`,
})

// SOURCE CSS:
// .table-striped > tbody > tr:nth-of-type(2n+1) > * { --bs-table-color-type: var(--bs-table-striped-color); --bs-table-bg-type: var(--bs-table-striped-bg); }
globalStyle([
	`${cyborgScope}${tableStriped} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow}:nth-of-type(2n+1) > ${cyborgScope}${tableCell}`,
	`${cyborgScope}${tableStriped} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow}:nth-of-type(2n+1) > ${cyborgScope}${tableHeaderCell}`,
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
	`${cyborgScope}${tableStriped} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow}:nth-of-type(odd) > ${cyborgScope}${tableCell}`,
	`${cyborgScope}${tableStriped} > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow}:nth-of-type(odd) > ${cyborgScope}${tableHeaderCell}`,
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
globalStyle(`.table-striped-columns > ${cyborgScope}${tableSection} > ${cyborgScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})
