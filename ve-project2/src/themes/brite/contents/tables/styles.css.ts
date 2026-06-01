import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderWidth,
	varBsEmphasisColor,
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
import { briteScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/tables
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .table { --bs-table-color-type: initial; --bs-table-bg-type: initial; --bs-table-color-state: initial; --bs-table-bg-state: initial; --bs-table-color: var(--bs-emphasis-color); --bs-table-bg: var(--bs-body-bg); --bs-table-border-color: var(--bs-border-color); --bs-table-accent-bg: transparent; --bs-table-striped-color: var(--bs-emphasis-color); --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05); --bs-table-active-color: var(--bs-emphasis-color); --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1); --bs-table-hover-color: var(--bs-emphasis-color); --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075); width: 100%; margin-bottom: 1rem; vertical-align: top; border-color: var(--bs-table-border-color); }
globalStyle(`${briteScope}${table}`, {
	vars: {
		[varBsTableColorType]: "initial",
		[varBsTableBgType]: "initial",
		[varBsTableColorState]: "initial",
		[varBsTableBgState]: "initial",
		[varBsTableColor]: varBsEmphasisColor,
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: "#000",
		[varBsTableAccentBg]: "transparent",
		[varBsTableStripedColor]: varBsEmphasisColor,
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: varBsEmphasisColor,
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: varBsEmphasisColor,
		[varBsTableHoverBg]: `rgba(${varBsEmphasisColorRgb}, 0)`,
	},
	width: "100%",
	marginBottom: "1rem",
	verticalAlign: "top",
	borderColor: varBsTableBorderColor,
	border: "2px solid #000",
})

// Reboot: table element border model (components stamp tableElement on <table>).
globalStyle(`${briteScope}${tableElement}`, {
	borderCollapse: 'collapse',
	captionSide: 'bottom',
})

// Direct cell paint — compound table>section>row>cell selectors fail VE scope chaining in globalStyle.
// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle(`${briteScope}${tableHeaderCell}`, {
	padding: "0.75rem 0.75rem",
	textAlign: 'left',
	borderBottomWidth: "1px",
	borderBottomStyle: 'solid',
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle(`${briteScope}${tableCell}`, {
	padding: "0.75rem 0.75rem",
	borderBottomWidth: "1px",
	borderBottomStyle: 'solid',
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${briteScope}${tableSm} ${briteScope}${tableHeaderCell}`, {
	padding: "0.25rem 0.25rem",
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${briteScope}${tableSm} ${briteScope}${tableCell}`, {
	padding: "0.25rem 0.25rem",
})

globalStyle(`${briteScope}${tableBordered} > ${briteScope}${tableSection}`, {
	borderWidth: `${varBsBorderWidth} 0`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${briteScope}${tableBordered} ${briteScope}${tableHeaderCell}`, {
	borderWidth: "0 1px",
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${briteScope}${tableBordered} ${briteScope}${tableCell}`, {
	borderWidth: "0 1px",
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle([
	`${briteScope}${table} > ${briteScope}${tableSection} > ${briteScope}${tableRow} > ${briteScope}${tableCell}`,
	`${briteScope}${table} > ${briteScope}${tableSection} > ${briteScope}${tableRow} > ${briteScope}${tableHeaderCell}`,
], {
	padding: "0.75rem 0.75rem",
	color: "var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)))",
	backgroundColor: varBsTableBg,
	borderBottomWidth: "1px",
	boxShadow: "inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))",
})

// SOURCE CSS:
// .table > tbody { vertical-align: inherit; }
globalStyle(`${briteScope}${table} > ${briteScope}${tableSection}`, {
	verticalAlign: "inherit",
})

// SOURCE CSS:
// .table > thead { vertical-align: bottom; }
globalStyle(`${briteScope}${table} > ${briteScope}${tableSection}`, {
	verticalAlign: "bottom",
})

// SOURCE CSS:
// .table-borderless > :not(caption) > * > * { border-bottom-width: 0; }
globalStyle([
	`${briteScope}${tableBorderless} > ${briteScope}${tableSection} > ${briteScope}${tableRow} > ${briteScope}${tableCell}`,
	`${briteScope}${tableBorderless} > ${briteScope}${tableSection} > ${briteScope}${tableRow} > ${briteScope}${tableHeaderCell}`,
], {
	borderBottomWidth: 0,
})

// SOURCE CSS:
// .table-borderless > :not(:first-child) { border-top-width: 0; }
globalStyle(`${briteScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

// SOURCE CSS:
// .table-dark { --bs-table-color: #fff; --bs-table-bg: #212529; --bs-table-border-color: #4d5154; --bs-table-striped-bg: #2c3034; --bs-table-striped-color: #fff; --bs-table-active-bg: #373b3e; --bs-table-active-color: #fff; --bs-table-hover-bg: #323539; --bs-table-hover-color: #fff; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${briteScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#000",
		[varBsTableBorderColor]: "white",
		[varBsTableStripedBg]: "#0d0d0d",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#1a1a1a",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "black",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-hover > tbody > tr:hover > * { --bs-table-color-state: var(--bs-table-hover-color); --bs-table-bg-state: var(--bs-table-hover-bg); }
globalStyle([
	`${briteScope}${tableHover} > ${briteScope}${tableSection} > ${briteScope}${tableRow}:hover > ${briteScope}${tableCell}`,
	`${briteScope}${tableHover} > ${briteScope}${tableSection} > ${briteScope}${tableRow}:hover > ${briteScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

// SOURCE CSS:
// .table-danger { --bs-table-color: #000; --bs-table-bg: #f8d7da; --bs-table-border-color: #c6acae; --bs-table-striped-bg: #eccccf; --bs-table-striped-color: #000; --bs-table-active-bg: #dfc2c4; --bs-table-active-color: #000; --bs-table-hover-bg: #e5c7ca; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${briteScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#f56565",
		[varBsTableBorderColor]: "black",
		[varBsTableStripedBg]: "#e96060",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#dd5b5b",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#f56565",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-info { --bs-table-color: #000; --bs-table-bg: #cff4fc; --bs-table-border-color: #a6c3ca; --bs-table-striped-bg: #c5e8ef; --bs-table-striped-color: #000; --bs-table-active-bg: #badce3; --bs-table-active-color: #000; --bs-table-hover-bg: #bfe2e9; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${briteScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#22d2ed",
		[varBsTableBorderColor]: "black",
		[varBsTableStripedBg]: "#20c8e1",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#1fbdd5",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#22d2ed",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-light { --bs-table-color: #000; --bs-table-bg: #f8f9fa; --bs-table-border-color: #c6c7c8; --bs-table-striped-bg: #ecedee; --bs-table-striped-color: #000; --bs-table-active-bg: #dfe0e1; --bs-table-active-color: #000; --bs-table-hover-bg: #e5e6e7; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${briteScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#e9ecef",
		[varBsTableBorderColor]: "black",
		[varBsTableStripedBg]: "#dde0e3",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#d2d4d7",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#e9ecef",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-primary { --bs-table-color: #000; --bs-table-bg: #cfe2ff; --bs-table-border-color: #a6b5cc; --bs-table-striped-bg: #c5d7f2; --bs-table-striped-color: #000; --bs-table-active-bg: #bacbe6; --bs-table-active-color: #000; --bs-table-hover-bg: #bfd1ec; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${briteScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#a2e436",
		[varBsTableBorderColor]: "black",
		[varBsTableStripedBg]: "#9ad933",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#92cd31",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#a2e436",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-secondary { --bs-table-color: #000; --bs-table-bg: #e2e3e5; --bs-table-border-color: #b5b6b7; --bs-table-striped-bg: #d7d8da; --bs-table-striped-color: #000; --bs-table-active-bg: #cbccce; --bs-table-active-color: #000; --bs-table-hover-bg: #d1d2d4; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${briteScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#fff",
		[varBsTableBorderColor]: "black",
		[varBsTableStripedBg]: "#f2f2f2",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#e6e6e6",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "white",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-success { --bs-table-color: #000; --bs-table-bg: #d1e7dd; --bs-table-border-color: #a7b9b1; --bs-table-striped-bg: #c7dbd2; --bs-table-striped-color: #000; --bs-table-active-bg: #bcd0c7; --bs-table-active-color: #000; --bs-table-hover-bg: #c1d6cc; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${briteScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#68d391",
		[varBsTableBorderColor]: "black",
		[varBsTableStripedBg]: "#63c88a",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#5ebe83",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#68d391",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-warning { --bs-table-color: #000; --bs-table-bg: #fff3cd; --bs-table-border-color: #ccc2a4; --bs-table-striped-bg: #f2e7c3; --bs-table-striped-color: #000; --bs-table-active-bg: #e6dbb9; --bs-table-active-color: #000; --bs-table-hover-bg: #ece1be; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${briteScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#ffc700",
		[varBsTableBorderColor]: "black",
		[varBsTableStripedBg]: "#f2bd00",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#e6b300",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#ffc700",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle([
	`${briteScope}${tableSm} > ${briteScope}${tableSection} > ${briteScope}${tableRow} > ${briteScope}${tableCell}`,
	`${briteScope}${tableSm} > ${briteScope}${tableSection} > ${briteScope}${tableRow} > ${briteScope}${tableHeaderCell}`,
], {
	padding: "0.25rem 0.25rem",
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * { border-width: var(--bs-border-width) 0; }
globalStyle(`${briteScope}${tableBordered} > :not(caption) > ${briteScope}${tableSection}`, {
	borderWidth: "1px 0",
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle([
	`${briteScope}${tableBordered} > ${briteScope}${tableSection} > ${briteScope}${tableRow} > ${briteScope}${tableCell}`,
	`${briteScope}${tableBordered} > ${briteScope}${tableSection} > ${briteScope}${tableRow} > ${briteScope}${tableHeaderCell}`,
], {
	borderWidth: "0 1px",
})

// SOURCE CSS:
// .table-striped > tbody > tr:nth-of-type(2n+1) > * { --bs-table-color-type: var(--bs-table-striped-color); --bs-table-bg-type: var(--bs-table-striped-bg); }
globalStyle([
	`${briteScope}${tableStriped} > ${briteScope}${tableSection} > ${briteScope}${tableRow}:nth-of-type(2n+1) > ${briteScope}${tableCell}`,
	`${briteScope}${tableStriped} > ${briteScope}${tableSection} > ${briteScope}${tableRow}:nth-of-type(2n+1) > ${briteScope}${tableHeaderCell}`,
], {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})
