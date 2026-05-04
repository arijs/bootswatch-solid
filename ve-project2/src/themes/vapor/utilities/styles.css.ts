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
	textDark,
	textMuted,
	visuallyHidden,
	fwBold,
} from '../../../theme-contract/utilities/contract.css'
import { vaporScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${vaporScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
	textShadow: '0 0 1px rgba(21, 104, 94, 0.3), 0 0 2px rgba(21, 104, 94, 0.3), 0 0 5px rgba(21, 104, 94, 0.2)',
})

// .text-dark uses dark glow text-shadow in Vapor
globalStyle(`${vaporScope}${textDark}`, {
	textShadow: '0 0 1px rgba(23, 2, 41, 0.3), 0 0 2px rgba(23, 2, 41, 0.3), 0 0 5px rgba(23, 2, 41, 0.2)',
})

globalStyle(`${vaporScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${vaporScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${vaporScope}${positionRelative}`, {
	position: 'relative',
})

globalStyle(`${vaporScope}${overflowXHidden}`, {
	overflowX: 'hidden',
})

globalStyle(`${vaporScope}${row}`, {
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

globalStyle(`${vaporScope}${row} > *`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${vaporScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${vaporScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${vaporScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
		[varBsGutterY]: '0',
	},
})

globalStyle(`${vaporScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${vaporScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.3333%',
		},
	},
})

globalStyle(`${vaporScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.6667%',
		},
	},
})

// Bootstrap utility parity:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${vaporScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${vaporScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

// Bootstrap utility parity:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${vaporScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${vaporScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${vaporScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${vaporScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${vaporScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${vaporScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${vaporScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${vaporScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${vaporScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${stickyXlTop}`, {
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
globalStyle(`${vaporScope}${visuallyHidden}`, {
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
