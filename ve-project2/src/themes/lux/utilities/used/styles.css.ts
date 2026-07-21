import { globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusPill,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsDangerRgb,
	varBsDarkRgb,
	varBsGutterX,
	varBsGutterY,
	varBsInfoRgb,
	varBsLightRgb,
	varBsPrimaryRgb,
	varBsSecondaryColor,
	varBsSecondaryRgb,
	varBsSuccessRgb,
	varBsWarningRgb,
	varBsWhiteRgb,
} from '../../../../theme-contract/_vars.css'
import { varBsBgOpacity, varBsBorderOpacity, varBsTextOpacity } from '../../../../theme-contract/utilities/generated/_vars.css'

import { rounded } from '../../../../theme-contract/contents/images/contract.css'
import {
	alignItemsStretch,
	alignTop,
	bgDanger,
	bgInfo,
	bgLight,
	bgPrimary,
	bgSecondary,
	bgSuccess,
	bgWarning,
	border,
	borderBottom,
	borderDark,
	dBlock,
	dInlineBlock,
	dInlineFlex,
	dLgNone,
	dMdBlock,
	dNone,
	end0,
	flexColumn,
	flexRow,
	fs4,
	justifyContentCenter,
	justifyContentEnd,
	justifyContentStart,
	mb0,
	mb4,
	mb5,
	ms3,
	mt3,
	my2,
	my3,
	pb3,
	pb5,
	positionAbsolute,
	ps3,
	pt4,
	py3,
	roundedPill,
	textCenter,
	textDanger,
	textInfo,
	textLight,
	textPrimary,
	textSecondary,
	textSuccess,
	textWarning,
	textWhite,
	top0,
	w100,
	w25,
	w50,
	w75,
} from '../../../../theme-contract/literal/contract.css'
import { badge } from '../../../../theme-contract/ui/badge/contract.css'
import { flexWrap } from '../../../../theme-contract/ui/modal/contract.css'
import {
	alignItemsCenter,
	alignSelfStart,
	bgDark,
	col,
	colMd3,
	colMd4,
	colMd6,
	colMd8,
	colSm6,
	dFlex,
	fwBold,
	g0,
	g3,
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
	p5,
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
} from '../../../../theme-contract/utilities/contract.css'

globalStyle(`${luxScope}${row}`, {
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

globalStyle(`${luxScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${luxScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${luxScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${luxScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${luxScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${luxScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${luxScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${luxScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${luxScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${luxScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${luxScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${luxScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${luxScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${luxScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${luxScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${luxScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${luxScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${luxScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${luxScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${luxScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${luxScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${luxScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${luxScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${luxScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${luxScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${luxScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${luxScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${luxScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${luxScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${luxScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${luxScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${luxScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${luxScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${luxScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${luxScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${luxScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${luxScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${luxScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${luxScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${luxScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${luxScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${luxScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${luxScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${luxScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${luxScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${luxScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${luxScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${luxScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${luxScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${luxScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${luxScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${luxScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${luxScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${luxScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${luxScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${luxScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${luxScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${luxScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${luxScope}${fs4}`, {
	fontSize: '1.25rem !important',
})

globalStyle(`${luxScope}${fwBold}`, {
	fontWeight: '600 !important',
})

globalStyle(`${luxScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${luxScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${luxScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${bgLight}`, {
	border: '1px solid rgba(0, 0, 0, 0.1)',
})

globalStyle(`${luxScope}${textSecondary}`, {
	color: '#55595c !important',
})

globalStyle(`${luxScope}${badge}${bgSecondary}`, {
	color: '#343a40',
})

globalStyle(`${luxScope}${badge}${bgLight}`, {
	color: '#343a40',
})
