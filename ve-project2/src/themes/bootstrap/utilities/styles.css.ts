import { globalStyle } from '@vanilla-extract/css'
import { varBsSecondaryColor } from '../../../theme-contract/_vars.css'
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
import { bootstrapScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${bootstrapScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${bootstrapScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${bootstrapScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${bootstrapScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${bootstrapScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${bootstrapScope}${row}`, {
	vars: {
		'--bs-gutter-x': '1.5rem',
		'--bs-gutter-y': '0',
	},
	display: 'flex',
	flexWrap: 'wrap',
	marginTop: 'calc(-1 * var(--bs-gutter-y))',
	marginRight: 'calc(-0.5 * var(--bs-gutter-x))',
	marginLeft: 'calc(-0.5 * var(--bs-gutter-x))',
})

globalStyle(`${bootstrapScope}${row} > *`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
	paddingLeft: 'calc(var(--bs-gutter-x) * 0.5)',
	marginTop: 'var(--bs-gutter-y)',
})

globalStyle(`${bootstrapScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${bootstrapScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${bootstrapScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${bootstrapScope}${g0}`, {
	vars: {
		'--bs-gutter-x': '0',
		'--bs-gutter-y': '0',
	},
})

globalStyle(`${bootstrapScope}${g4}`, {
	vars: {
		'--bs-gutter-x': '1.5rem',
		'--bs-gutter-y': '1.5rem',
	},
})

globalStyle(`${bootstrapScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.3333%',
		},
	},
})

globalStyle(`${bootstrapScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.6667%',
		},
	},
})

// Bootstrap utility parity:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${bootstrapScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${bootstrapScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

// Bootstrap utility parity:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${bootstrapScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${bootstrapScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${bootstrapScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${bootstrapScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${bootstrapScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${bootstrapScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${bootstrapScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${bootstrapScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${bootstrapScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${bootstrapScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${bootstrapScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${bootstrapScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${bootstrapScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${bootstrapScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${bootstrapScope}${stickyXlTop}`, {
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
globalStyle(`${bootstrapScope}${visuallyHidden}`, {
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
