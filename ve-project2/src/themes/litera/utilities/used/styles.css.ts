import { globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

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
	accordionFlush,
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
	collapsed,
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
import { accordionButton, accordionHeader, accordionItem } from '../../../../theme-contract/ui/accordion/contract.css'
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

globalStyle(`${literaScope}${row}`, {
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

globalStyle(`${literaScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${literaScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${literaScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${literaScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${literaScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${literaScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${literaScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${literaScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${literaScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${literaScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${literaScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${literaScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${literaScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${literaScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${literaScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${literaScope}${accordionFlush} > ${literaScope}${accordionItem} > ${literaScope}${accordionHeader} ${literaScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${literaScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${literaScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${literaScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${literaScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${literaScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${literaScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${literaScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${literaScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${literaScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${literaScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${literaScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${literaScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${literaScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${literaScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${literaScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${literaScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${literaScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${literaScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${literaScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${literaScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${literaScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${literaScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${literaScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${literaScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${literaScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${literaScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${literaScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${literaScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${literaScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${literaScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${literaScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${literaScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${literaScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${literaScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${literaScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${literaScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${literaScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${literaScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${literaScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${literaScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${literaScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${literaScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${literaScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${literaScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${literaScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${literaScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${literaScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${literaScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${literaScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${literaScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${literaScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${literaScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${literaScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${literaScope}${fs4}`, {
	fontSize: 'calc(1.29rem + 0.48vw) !important',
})

globalStyle(`${literaScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${literaScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${literaScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${literaScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${literaScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${literaScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${literaScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${literaScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${literaScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${literaScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${literaScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${literaScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${literaScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${literaScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${literaScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${literaScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${literaScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${literaScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${literaScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${literaScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${literaScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${literaScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${literaScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${literaScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${literaScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${literaScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${literaScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${literaScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${literaScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${literaScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${literaScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.65rem !important',
		},
	},
})

globalStyle(`${literaScope}${badge}${bgLight}`, {
	color: '#343a40',
})
