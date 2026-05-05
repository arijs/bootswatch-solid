import { globalStyle } from '@vanilla-extract/css'
import { varBsGutterX, varBsGutterY, varBsSecondaryColor } from '../../../theme-contract/_vars.css'
import {
	alignSelfStart,
	col,
	colMd4,
	colMd8,
	dFlex,
	g0,
	g4,
	mb2,
	mb3,
	mbLg0,
	mbXl2,
	mbXl5,
	me2,
	meAuto,
	mt5,
	mtXl0,
	overflowXHidden,
	pb2,
	pbXl3,
	positionRelative,
	pt3,
	ptXl5,
	px2,
	px3,
	row,
	rowCols1,
	rowColsMd2,
	stickyXlTop,
	textMuted,
	visuallyHidden,
	fwBold,
} from '../../../theme-contract/utilities/contract.css'
import { solarScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${solarScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${solarScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${solarScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${solarScope}${positionRelative}`, {
	position: 'relative',
})

globalStyle(`${solarScope}${overflowXHidden}`, {
	overflowX: 'hidden',
})

globalStyle(`${solarScope}${row}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '0',
	},
	display: 'flex',
	flexWrap: 'wrap',
	marginTop: `calc(-1 * ${varBsGutterY})`,
	marginRight: `calc(-0.5 * ${varBsGutterX})`,
	marginLeft: `calc(-0.5 * ${varBsGutterX})`,
})

globalStyle(`${solarScope}${row} > *`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${solarScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${solarScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${solarScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${solarScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
		[varBsGutterY]: '0',
	},
})

globalStyle(`${solarScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${solarScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.3333%',
		},
	},
})

globalStyle(`${solarScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.6667%',
		},
	},
})

// Bootstrap utility parity:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${solarScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${solarScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

// Bootstrap utility parity:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${solarScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${solarScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${solarScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${solarScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${solarScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${solarScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${solarScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${solarScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${solarScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${solarScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${solarScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${solarScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${solarScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${solarScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${solarScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

// Bootstrap utility parity:
// .visually-hidden { position: absolute !important; width: 1px !important; ... }
globalStyle(`${solarScope}${visuallyHidden}`, {
	position: 'absolute !important' as 'absolute',
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

