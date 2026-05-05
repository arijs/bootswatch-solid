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
import { slateScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${slateScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${slateScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${slateScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${slateScope}${positionRelative}`, {
	position: 'relative',
})

globalStyle(`${slateScope}${overflowXHidden}`, {
	overflowX: 'hidden',
})

globalStyle(`${slateScope}${row}`, {
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

globalStyle(`${slateScope}${row} > *`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${slateScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${slateScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${slateScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${slateScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
		[varBsGutterY]: '0',
	},
})

globalStyle(`${slateScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${slateScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.3333%',
		},
	},
})

globalStyle(`${slateScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.6667%',
		},
	},
})

// Bootstrap utility parity:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${slateScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${slateScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

// Bootstrap utility parity:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${slateScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${slateScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${slateScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${slateScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${slateScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${slateScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${slateScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${slateScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${slateScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${slateScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${slateScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${slateScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${slateScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${slateScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${slateScope}${stickyXlTop}`, {
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
globalStyle(`${slateScope}${visuallyHidden}`, {
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
