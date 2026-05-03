import { globalStyle } from '@vanilla-extract/css'
import { varBsSecondaryColor } from '../../../theme-contract/_vars.css'
import {
	alignSelfStart,
	mb3,
	mbXl2,
	mbXl5,
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
import { sketchyScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${sketchyScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${sketchyScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

// Bootstrap utility parity:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${sketchyScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${sketchyScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

// Bootstrap utility parity in Sketchy:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${sketchyScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${sketchyScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${sketchyScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${sketchyScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${sketchyScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${sketchyScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${sketchyScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${sketchyScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${sketchyScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${sketchyScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${sketchyScope}${stickyXlTop}`, {
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
globalStyle(`${sketchyScope}${visuallyHidden}`, {
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
