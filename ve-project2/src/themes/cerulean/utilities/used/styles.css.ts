import { globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../../scope.css'

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

import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'

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
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
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

globalStyle(`${ceruleanScope}${row}`, {
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

globalStyle(`${ceruleanScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${ceruleanScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${ceruleanScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${ceruleanScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${ceruleanScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${ceruleanScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${ceruleanScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${ceruleanScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${ceruleanScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${ceruleanScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${ceruleanScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${ceruleanScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${ceruleanScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${ceruleanScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${ceruleanScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${ceruleanScope}${accordionFlush} > ${ceruleanScope}${accordionItem} > ${ceruleanScope}${accordionHeader} ${ceruleanScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${ceruleanScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${ceruleanScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${ceruleanScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${ceruleanScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${ceruleanScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${ceruleanScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${ceruleanScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${ceruleanScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${ceruleanScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${ceruleanScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${ceruleanScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${ceruleanScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${ceruleanScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${ceruleanScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${ceruleanScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${ceruleanScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${ceruleanScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${ceruleanScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${ceruleanScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${ceruleanScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${ceruleanScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${ceruleanScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${ceruleanScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${ceruleanScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${ceruleanScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${ceruleanScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${ceruleanScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${ceruleanScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${ceruleanScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${ceruleanScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${ceruleanScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${ceruleanScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${ceruleanScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${ceruleanScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${ceruleanScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${ceruleanScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${ceruleanScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${ceruleanScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${ceruleanScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${ceruleanScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${ceruleanScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${ceruleanScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${ceruleanScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${ceruleanScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${ceruleanScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${ceruleanScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${ceruleanScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${ceruleanScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${ceruleanScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${ceruleanScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${ceruleanScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${ceruleanScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${ceruleanScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${ceruleanScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${ceruleanScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${ceruleanScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${ceruleanScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${ceruleanScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${ceruleanScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${ceruleanScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${ceruleanScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${ceruleanScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${ceruleanScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${ceruleanScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${ceruleanScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${ceruleanScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${ceruleanScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${ceruleanScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${ceruleanScope}${navbar}${bgPrimary}`, {
	backgroundImage: 'linear-gradient(#50b3eb, #2fa4e7 60%, #2c9ad9)',
})

globalStyle(`${ceruleanScope}${navbar}${bgSecondary}`, {
	backgroundImage: 'linear-gradient(#edeff2, #e9ecef 60%, #dbdee1)',
})

globalStyle(`${ceruleanScope}${navbar}${bgSuccess}`, {
	backgroundImage: 'linear-gradient(#89b659, #73a839 60%, #6c9e36)',
})

globalStyle(`${ceruleanScope}${navbar}${bgInfo}`, {
	backgroundImage: 'linear-gradient(#2b5b89, #033c73 60%, #03386c)',
})

globalStyle(`${ceruleanScope}${navbar}${bgWarning}`, {
	backgroundImage: 'linear-gradient(#e27129, #dd5600 60%, #d05100)',
})

globalStyle(`${ceruleanScope}${navbar}${bgDanger}`, {
	backgroundImage: 'linear-gradient(#d04045, #c71c22 60%, #bb1a20)',
})

globalStyle(`${ceruleanScope}${navbar}${bgLight}`, {
	backgroundImage: 'linear-gradient(#f9fafb, #f8f9fa 60%, #e9eaeb)',
})

globalStyle(`${ceruleanScope}${navbar}${bgDark}`, {
	backgroundImage: 'linear-gradient(#545a5f, #343a40 60%, #31373c)',
})

globalStyle(`${ceruleanScope}${textSecondary}`, {
	color: '#adb5bd !important',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${badge}${bgSecondary}`, {
	color: '#343a40',
})

globalStyle(`${ceruleanScope}${badge}${bgLight}`, {
	color: '#343a40',
})
