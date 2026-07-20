import { globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../../scope.css'

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
import { navbar } from '../../../../theme-contract/ui/navbar/contract.css'
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

globalStyle(`${cyborgScope}${row}`, {
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

globalStyle(`${cyborgScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${cyborgScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${cyborgScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${cyborgScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${cyborgScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${cyborgScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${cyborgScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${cyborgScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${cyborgScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${cyborgScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${cyborgScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${cyborgScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${cyborgScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${cyborgScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${cyborgScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${cyborgScope}${accordionFlush} > ${cyborgScope}${accordionItem} > ${cyborgScope}${accordionHeader} ${cyborgScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${cyborgScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${cyborgScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${cyborgScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${cyborgScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${cyborgScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${cyborgScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${cyborgScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${cyborgScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${cyborgScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${cyborgScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${cyborgScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${cyborgScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${cyborgScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${cyborgScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${cyborgScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${cyborgScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${cyborgScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${cyborgScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${cyborgScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${cyborgScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${cyborgScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${cyborgScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${cyborgScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${cyborgScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${cyborgScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${cyborgScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${cyborgScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${cyborgScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${cyborgScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${cyborgScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${cyborgScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${cyborgScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${cyborgScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${cyborgScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${cyborgScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${cyborgScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${cyborgScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${cyborgScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${cyborgScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${cyborgScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${cyborgScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${cyborgScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${cyborgScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${cyborgScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${cyborgScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${cyborgScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${cyborgScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${cyborgScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${cyborgScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${cyborgScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${cyborgScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${cyborgScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${cyborgScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${cyborgScope}${fs4}`, {
	fontSize: 'calc(1.325rem + 0.9vw) !important',
})

globalStyle(`${cyborgScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${cyborgScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${cyborgScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${cyborgScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${cyborgScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${cyborgScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${cyborgScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${cyborgScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${cyborgScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${cyborgScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${cyborgScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${cyborgScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${cyborgScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${cyborgScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${cyborgScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${cyborgScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${cyborgScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${cyborgScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${cyborgScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${cyborgScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${cyborgScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${cyborgScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${cyborgScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${cyborgScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${cyborgScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${cyborgScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${cyborgScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${cyborgScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${cyborgScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${cyborgScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${cyborgScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem !important',
		},
	},
})

globalStyle(`${cyborgScope}${navbar}${bgPrimary}`, {
	border: '1px solid #282828',
})

globalStyle(`${cyborgScope}${navbar}${bgDark}`, {
	backgroundColor: '#060606 !important',
	border: '1px solid #282828',
})

globalStyle(`${cyborgScope}${navbar}${bgLight}`, {
	backgroundColor: '#888 !important',
})

globalStyle(`${cyborgScope}${badge}${bgDark}`, {
	color: '#212529',
})
