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
import { tooltipVe } from '../../../theme-contract/ui/tooltips/contract.css'
import { dropdownItem, dropdownMenu } from '../../../theme-contract/ui/dropdowns/contract.css'
import { pagination } from '../../../theme-contract/ui/pagination/contract.css'
import { breadcrumb } from '../../../theme-contract/ui/breadcrumb/contract.css'
import { navLink, navPills, navTabs } from '../../../theme-contract/ui/navs/contract.css'
import { btn } from '../../../theme-contract/ui/buttons/contract.css'
import { navbar, navbarNav } from '../../../theme-contract/ui/navbar/contract.css'
import { sandstoneScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${sandstoneScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${sandstoneScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${sandstoneScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${sandstoneScope}${positionRelative}`, {
	position: 'relative',
})

globalStyle(`${sandstoneScope}${overflowXHidden}`, {
	overflowX: 'hidden',
})

globalStyle(`${sandstoneScope}${row}`, {
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

globalStyle(`${sandstoneScope}${row} > *`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${sandstoneScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${sandstoneScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${sandstoneScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${sandstoneScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
		[varBsGutterY]: '0',
	},
})

globalStyle(`${sandstoneScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${sandstoneScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.3333%',
		},
	},
})

globalStyle(`${sandstoneScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.6667%',
		},
	},
})

// Bootstrap utility parity:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${sandstoneScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${sandstoneScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

// Bootstrap utility parity:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${sandstoneScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${sandstoneScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${sandstoneScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${sandstoneScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${sandstoneScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${sandstoneScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${sandstoneScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${sandstoneScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${sandstoneScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${sandstoneScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${sandstoneScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${sandstoneScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${sandstoneScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${sandstoneScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${sandstoneScope}${stickyXlTop}`, {
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
globalStyle(`${sandstoneScope}${visuallyHidden}`, {
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

// Sandstone source CSS applies an uppercase typography treatment to navigation/
// action components, so register it once at theme scope.
globalStyle(
	[
		`${sandstoneScope}${tooltipVe}`,
		`${sandstoneScope}${dropdownMenu} ${dropdownItem}`,
		`${sandstoneScope}${pagination}`,
		`${sandstoneScope}${breadcrumb}`,
		`${sandstoneScope}${navPills} ${navLink}`,
		`${sandstoneScope}${navTabs} ${navLink}`,
		`${sandstoneScope}${btn}`,
		`${sandstoneScope}${navbar} ${navLink}`,
		`${sandstoneScope}${navbarNav} ${navLink}`,
	].join(', '),
	{
		fontSize: '13px',
		fontWeight: '500',
		lineHeight: '22px',
		textTransform: 'uppercase',
	},
)

globalStyle(`${sandstoneScope}${breadcrumb}`, {
	border: '1px solid #dfd7ca',
})

// Sandstone removes the border on button hover
globalStyle(`${sandstoneScope}${btn}:hover`, {
	borderColor: 'transparent',
})

