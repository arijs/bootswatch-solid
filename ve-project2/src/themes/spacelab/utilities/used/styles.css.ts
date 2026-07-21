import { globalStyle } from '@vanilla-extract/css'
import { spacelabScope } from '../../scope.css'

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

globalStyle(`${spacelabScope}${row}`, {
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

globalStyle(`${spacelabScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${spacelabScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${spacelabScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${spacelabScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${spacelabScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${spacelabScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${spacelabScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${spacelabScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${spacelabScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${spacelabScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${spacelabScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${spacelabScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${spacelabScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${spacelabScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${spacelabScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${spacelabScope}${accordionFlush} > ${spacelabScope}${accordionItem} > ${spacelabScope}${accordionHeader} ${spacelabScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${spacelabScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${spacelabScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${spacelabScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${spacelabScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${spacelabScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${spacelabScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${spacelabScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${spacelabScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${spacelabScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${spacelabScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${spacelabScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${spacelabScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${spacelabScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${spacelabScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${spacelabScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${spacelabScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${spacelabScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${spacelabScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${spacelabScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${spacelabScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${spacelabScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${spacelabScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${spacelabScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${spacelabScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${spacelabScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${spacelabScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${spacelabScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${spacelabScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${spacelabScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${spacelabScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${spacelabScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${spacelabScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${spacelabScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${spacelabScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${spacelabScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${spacelabScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${spacelabScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${spacelabScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${spacelabScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${spacelabScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${spacelabScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${spacelabScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${spacelabScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${spacelabScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${spacelabScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${spacelabScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${spacelabScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${spacelabScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${spacelabScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${spacelabScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${spacelabScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${spacelabScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${spacelabScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${spacelabScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${spacelabScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${spacelabScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${spacelabScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${spacelabScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${spacelabScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${spacelabScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${spacelabScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${spacelabScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${spacelabScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${spacelabScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${navbar}${bgPrimary}`, {
	backgroundImage: 'linear-gradient(#7191b3, #446e9b 50%, #3f658f)',
	filter: 'none',
	border: '1px solid #36587c',
})

globalStyle(`${spacelabScope}${navbar}${bgSecondary}`, {
	backgroundImage: 'linear-gradient(#b1b1b1, #999 50%, #8d8d8d)',
	filter: 'none',
	border: '1px solid #7a7a7a',
})

globalStyle(`${spacelabScope}${navbar}${bgSuccess}`, {
	backgroundImage: 'linear-gradient(#6bc756, #3cb521 50%, #37a71e)',
	filter: 'none',
	border: '1px solid #30911a',
})

globalStyle(`${spacelabScope}${navbar}${bgInfo}`, {
	backgroundImage: 'linear-gradient(#64b1f6, #3399f3 50%, #2f8de0)',
	filter: 'none',
	border: '1px solid #297ac2',
})

globalStyle(`${spacelabScope}${navbar}${bgWarning}`, {
	backgroundImage: 'linear-gradient(#de963d, #d47500 50%, #c36c00)',
	filter: 'none',
	border: '1px solid #aa5e00',
})

globalStyle(`${spacelabScope}${navbar}${bgDanger}`, {
	backgroundImage: 'linear-gradient(#d93f3d, #cd0200 50%, #bd0200)',
	filter: 'none',
	border: '1px solid #a40200',
})

globalStyle(`${spacelabScope}${navbar}${bgLight}`, {
	backgroundImage: 'linear-gradient(#f2f2f2, #eee 50%, #dbdbdb)',
	filter: 'none',
	border: '1px solid #bebebe',
})

globalStyle(`${spacelabScope}${navbar}${bgDark}`, {
	backgroundImage: 'linear-gradient(#646464, #333 50%, #2f2f2f)',
	filter: 'none',
	border: '1px solid #292929',
})

globalStyle(`${spacelabScope}${badge}${bgLight}`, {
	color: '#333',
})
