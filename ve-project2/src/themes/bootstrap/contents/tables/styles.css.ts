import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
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
import { bootstrapScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/tables
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .table { --bs-table-color-type: initial; --bs-table-bg-type: initial; --bs-table-color-state: initial; --bs-table-bg-state: initial; --bs-table-color: var(--bs-emphasis-color); --bs-table-bg: var(--bs-body-bg); --bs-table-border-color: var(--bs-border-color); --bs-table-accent-bg: transparent; --bs-table-striped-color: var(--bs-emphasis-color); --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05); --bs-table-active-color: var(--bs-emphasis-color); --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1); --bs-table-hover-color: var(--bs-emphasis-color); --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075); width: 100%; margin-bottom: 1rem; vertical-align: top; border-color: var(--bs-table-border-color); }
globalStyle(`${bootstrapScope}${table}`, {
	vars: {
		[varBsTableColorType]: "initial",
		[varBsTableBgType]: "initial",
		[varBsTableColorState]: "initial",
		[varBsTableBgState]: "initial",
		[varBsTableColor]: varBsEmphasisColor,
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: varBsBorderColor,
		[varBsTableAccentBg]: "transparent",
		[varBsTableStripedColor]: varBsEmphasisColor,
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: varBsEmphasisColor,
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: varBsEmphasisColor,
		[varBsTableHoverBg]: `rgba(${varBsEmphasisColorRgb}, 0.075)`,
	},
	width: "100%",
	marginBottom: "1rem",
	verticalAlign: "top",
	borderColor: varBsTableBorderColor,
})

// Reboot: table element border model (components stamp tableElement on <table>).
globalStyle(`${bootstrapScope}${tableElement}`, {
	borderCollapse: 'collapse',
	captionSide: 'bottom',
})

// Direct cell paint — compound table>section>row>cell selectors fail VE scope chaining in globalStyle.
// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle(`${bootstrapScope}${tableHeaderCell}`, {
	padding: '0.5rem 0.5rem',
	textAlign: 'left',
	borderColor: 'inherit',
	borderBottomWidth: varBsBorderWidth,
	borderBottomStyle: 'solid',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

// SOURCE CSS:
// .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color))); background-color: var(--bs-table-bg); border-bottom-width: var(--bs-border-width); box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg))); }
globalStyle(`${bootstrapScope}${tableCell}`, {
	padding: '0.5rem 0.5rem',
	borderColor: 'inherit',
	borderBottomWidth: varBsBorderWidth,
	borderBottomStyle: 'solid',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${bootstrapScope}${tableSm} ${bootstrapScope}${tableHeaderCell}`, {
	padding: '0.25rem 0.25rem',
})

// SOURCE CSS:
// .table-sm > :not(caption) > * > * { padding: 0.25rem 0.25rem; }
globalStyle(`${bootstrapScope}${tableSm} ${bootstrapScope}${tableCell}`, {
	padding: '0.25rem 0.25rem',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * { border-width: var(--bs-border-width) 0; }
// Bootstrap targets rows (tr), not sections (tbody/thead). Rows get top/bottom borders.
globalStyle(`${bootstrapScope}${tableBordered} ${bootstrapScope}${tableRow}`, {
	borderWidth: `${varBsBorderWidth} 0`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${bootstrapScope}${tableBordered} ${bootstrapScope}${tableHeaderCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

// SOURCE CSS:
// .table-bordered > :not(caption) > * > * { border-width: 0 var(--bs-border-width); }
globalStyle(`${bootstrapScope}${tableBordered} ${bootstrapScope}${tableCell}`, {
	borderWidth: `0 ${varBsBorderWidth}`,
	borderStyle: 'solid',
})

// NOTE: compound table>section>row>cell selectors in array-form globalStyle produce broken CSS
// (missing leading dots). Rules below use flat cell class selectors instead.

// SOURCE CSS:
// .table > tbody { vertical-align: inherit; }
// Reboot: thead, tbody, tfoot { border-color: inherit; }
globalStyle(`${bootstrapScope}${table} > ${bootstrapScope}${tableSection}`, {
	verticalAlign: "inherit",
	borderColor: 'inherit',
})

// SOURCE CSS:
// .table > thead { vertical-align: bottom; }
globalStyle(`${bootstrapScope}${table} > ${bootstrapScope}${tableSection}`, {
	verticalAlign: "bottom",
})

// Reboot: tr { border-color: inherit; }
globalStyle(`${bootstrapScope}${tableRow}`, {
	borderColor: 'inherit',
})

// SOURCE CSS:
// .table-borderless > :not(caption) > * > * { border-bottom-width: 0; }
globalStyle(`${bootstrapScope}${tableBorderless} ${bootstrapScope}${tableHeaderCell}`, {
	borderBottomWidth: 0,
})
globalStyle(`${bootstrapScope}${tableBorderless} ${bootstrapScope}${tableCell}`, {
	borderBottomWidth: 0,
})

// SOURCE CSS:
// .table-borderless > :not(:first-child) { border-top-width: 0; }
globalStyle(`${bootstrapScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: 0,
})

// SOURCE CSS:
// .table-dark { --bs-table-color: #fff; --bs-table-bg: #212529; --bs-table-border-color: #4d5154; --bs-table-striped-bg: #2c3034; --bs-table-striped-color: #fff; --bs-table-active-bg: #373b3e; --bs-table-active-color: #fff; --bs-table-hover-bg: #323539; --bs-table-hover-color: #fff; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${bootstrapScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: "#fff",
		[varBsTableBg]: "#212529",
		[varBsTableBorderColor]: "#4d5154",
		[varBsTableStripedBg]: "#2c3034",
		[varBsTableStripedColor]: "#fff",
		[varBsTableActiveBg]: "#373b3e",
		[varBsTableActiveColor]: "#fff",
		[varBsTableHoverBg]: "#323539",
		[varBsTableHoverColor]: "#fff",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-hover > tbody > tr:hover > * { --bs-table-color-state: var(--bs-table-hover-color); --bs-table-bg-state: var(--bs-table-hover-bg); }
globalStyle(`${bootstrapScope}${tableHover} ${bootstrapScope}${tableRow}:hover ${bootstrapScope}${tableHeaderCell}`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})
globalStyle(`${bootstrapScope}${tableHover} ${bootstrapScope}${tableRow}:hover ${bootstrapScope}${tableCell}`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

// SOURCE CSS:
// .table-danger { --bs-table-color: #000; --bs-table-bg: #f8d7da; --bs-table-border-color: #c6acae; --bs-table-striped-bg: #eccccf; --bs-table-striped-color: #000; --bs-table-active-bg: #dfc2c4; --bs-table-active-color: #000; --bs-table-hover-bg: #e5c7ca; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${bootstrapScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#f8d7da",
		[varBsTableBorderColor]: "#c6acae",
		[varBsTableStripedBg]: "#eccccf",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#dfc2c4",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#e5c7ca",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-info { --bs-table-color: #000; --bs-table-bg: #cff4fc; --bs-table-border-color: #a6c3ca; --bs-table-striped-bg: #c5e8ef; --bs-table-striped-color: #000; --bs-table-active-bg: #badce3; --bs-table-active-color: #000; --bs-table-hover-bg: #bfe2e9; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${bootstrapScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#cff4fc",
		[varBsTableBorderColor]: "#a6c3ca",
		[varBsTableStripedBg]: "#c5e8ef",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#badce3",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#bfe2e9",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-light { --bs-table-color: #000; --bs-table-bg: #f8f9fa; --bs-table-border-color: #c6c7c8; --bs-table-striped-bg: #ecedee; --bs-table-striped-color: #000; --bs-table-active-bg: #dfe0e1; --bs-table-active-color: #000; --bs-table-hover-bg: #e5e6e7; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${bootstrapScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: "#000",
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
globalStyle(`${bootstrapScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#cfe2ff",
		[varBsTableBorderColor]: "#a6b5cc",
		[varBsTableStripedBg]: "#c5d7f2",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#bacbe6",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#bfd1ec",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-secondary { --bs-table-color: #000; --bs-table-bg: #e2e3e5; --bs-table-border-color: #b5b6b7; --bs-table-striped-bg: #d7d8da; --bs-table-striped-color: #000; --bs-table-active-bg: #cbccce; --bs-table-active-color: #000; --bs-table-hover-bg: #d1d2d4; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${bootstrapScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#e2e3e5",
		[varBsTableBorderColor]: "#b5b6b7",
		[varBsTableStripedBg]: "#d7d8da",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#cbccce",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#d1d2d4",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-success { --bs-table-color: #000; --bs-table-bg: #d1e7dd; --bs-table-border-color: #a7b9b1; --bs-table-striped-bg: #c7dbd2; --bs-table-striped-color: #000; --bs-table-active-bg: #bcd0c7; --bs-table-active-color: #000; --bs-table-hover-bg: #c1d6cc; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${bootstrapScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#d1e7dd",
		[varBsTableBorderColor]: "#a7b9b1",
		[varBsTableStripedBg]: "#c7dbd2",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#bcd0c7",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#c1d6cc",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

// SOURCE CSS:
// .table-warning { --bs-table-color: #000; --bs-table-bg: #fff3cd; --bs-table-border-color: #ccc2a4; --bs-table-striped-bg: #f2e7c3; --bs-table-striped-color: #000; --bs-table-active-bg: #e6dbb9; --bs-table-active-color: #000; --bs-table-hover-bg: #ece1be; --bs-table-hover-color: #000; color: var(--bs-table-color); border-color: var(--bs-table-border-color); }
globalStyle(`${bootstrapScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: "#000",
		[varBsTableBg]: "#fff3cd",
		[varBsTableBorderColor]: "#ccc2a4",
		[varBsTableStripedBg]: "#f2e7c3",
		[varBsTableStripedColor]: "#000",
		[varBsTableActiveBg]: "#e6dbb9",
		[varBsTableActiveColor]: "#000",
		[varBsTableHoverBg]: "#ece1be",
		[varBsTableHoverColor]: "#000",
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})


// SOURCE CSS:
// .table-striped > tbody > tr:nth-of-type(2n+1) > * { --bs-table-color-type: var(--bs-table-striped-color); --bs-table-bg-type: var(--bs-table-striped-bg); }
globalStyle(`${bootstrapScope}${tableStriped} ${bootstrapScope}${tableRow}:nth-of-type(2n+1) ${bootstrapScope}${tableHeaderCell}`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})
globalStyle(`${bootstrapScope}${tableStriped} ${bootstrapScope}${tableRow}:nth-of-type(2n+1) ${bootstrapScope}${tableCell}`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})
