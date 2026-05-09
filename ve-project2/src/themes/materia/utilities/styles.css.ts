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
import { materiaScope } from '../scope.css'

globalStyle(`${materiaScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${materiaScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${materiaScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${materiaScope}${positionRelative}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${overflowXHidden}`, {
	overflowX: 'hidden',
})

globalStyle(`${materiaScope}${row}`, {
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

globalStyle(`${materiaScope}${row} > *`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${materiaScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${materiaScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${materiaScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
		[varBsGutterY]: '0',
	},
})

globalStyle(`${materiaScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${materiaScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.3333%',
		},
	},
})

globalStyle(`${materiaScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.6667%',
		},
	},
})

globalStyle(`${materiaScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${materiaScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${materiaScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${materiaScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${materiaScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${materiaScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${materiaScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${materiaScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${materiaScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${materiaScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${materiaScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${visuallyHidden}`, {
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

