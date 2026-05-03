import { globalStyle } from '@vanilla-extract/css'
import { varBsSecondaryColor } from '../../../theme-contract/_vars.css'
import {
	alignSelfStart,
	dFlex,
	mb2,
	mb3,
	mbLg0,
	mbXl2,
	mbXl5,
	me2,
	meAuto,
	mt5,
	mtXl0,
	pb2,
	pbXl3,
	pt3,
	ptXl5,
	px2,
	px3,
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

// Bootstrap utility parity:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${quartzScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
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
