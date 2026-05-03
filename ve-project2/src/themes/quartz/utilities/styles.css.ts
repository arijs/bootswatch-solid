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
import { quartzScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${quartzScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${quartzScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${quartzScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${quartzScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${quartzScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${quartzScope}${row}`, {
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

globalStyle(`${quartzScope}${row} > *`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
	paddingLeft: 'calc(var(--bs-gutter-x) * 0.5)',
	marginTop: 'var(--bs-gutter-y)',
})

globalStyle(`${quartzScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${quartzScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${quartzScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${g0}`, {
	vars: {
		'--bs-gutter-x': '0',
		'--bs-gutter-y': '0',
	},
})

globalStyle(`${quartzScope}${g4}`, {
	vars: {
		'--bs-gutter-x': '3rem',
		'--bs-gutter-y': '3rem',
	},
})

globalStyle(`${quartzScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.3333%',
		},
	},
})

globalStyle(`${quartzScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.6667%',
		},
	},
})

// Quartz utility parity:
// .px-3 { padding-right: 2rem !important; padding-left: 2rem !important; }
globalStyle(`${quartzScope}${px3}`, {
	paddingRight: '2rem !important',
	paddingLeft: '2rem !important',
})

globalStyle(`${quartzScope}${px2}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

// Bootstrap utility parity in Quartz:
// .mb-3 { margin-bottom: 2rem !important; }
globalStyle(`${quartzScope}${mb3}`, {
	marginBottom: '2rem !important',
})

globalStyle(`${quartzScope}${mb2}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${quartzScope}${me2}`, {
	marginRight: '1rem !important',
})

globalStyle(`${quartzScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${quartzScope}${mt5}`, {
	marginTop: '6rem !important',
})

globalStyle(`${quartzScope}${pt3}`, {
	paddingTop: '2rem !important',
})

globalStyle(`${quartzScope}${pb2}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${quartzScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${quartzScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${stickyXlTop}`, {
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
globalStyle(`${quartzScope}${visuallyHidden}`, {
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
