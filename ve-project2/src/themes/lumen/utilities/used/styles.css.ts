import { globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

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

globalStyle(`${lumenScope}${row}`, {
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

globalStyle(`${lumenScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${lumenScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${lumenScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${lumenScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${lumenScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${lumenScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${lumenScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${lumenScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${lumenScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${lumenScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${lumenScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${lumenScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${lumenScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${lumenScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${lumenScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${lumenScope}${accordionFlush} > ${lumenScope}${accordionItem} > ${lumenScope}${accordionHeader} ${lumenScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${lumenScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${lumenScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${lumenScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${lumenScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${lumenScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${lumenScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${lumenScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${lumenScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${lumenScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${lumenScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${lumenScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${lumenScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${lumenScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${lumenScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${lumenScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${lumenScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${lumenScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${lumenScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${lumenScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${lumenScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${lumenScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${lumenScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${lumenScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${lumenScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${lumenScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${lumenScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${lumenScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${lumenScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${lumenScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${lumenScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${lumenScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${lumenScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${lumenScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${lumenScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${lumenScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${lumenScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${lumenScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${lumenScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${lumenScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${lumenScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${lumenScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${lumenScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${lumenScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${lumenScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${lumenScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${lumenScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${lumenScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${lumenScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${lumenScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${lumenScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${lumenScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${lumenScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${lumenScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${lumenScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${lumenScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${lumenScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${lumenScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${lumenScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${lumenScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${lumenScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${lumenScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${lumenScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${lumenScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${lumenScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${lumenScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${lumenScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${lumenScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${lumenScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${lumenScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${lumenScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${lumenScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${lumenScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${lumenScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${lumenScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${lumenScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${lumenScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${lumenScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${lumenScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${lumenScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${lumenScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${lumenScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${lumenScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${lumenScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${lumenScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${lumenScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${lumenScope}${navbar}${bgPrimary}`, {
	borderColor: '#137ea7',
})

globalStyle(`${lumenScope}${navbar}${bgSecondary}`, {
	borderColor: '#d8d8d8',
})

globalStyle(`${lumenScope}${navbar}${bgSuccess}`, {
	borderColor: '#24a428',
})

globalStyle(`${lumenScope}${navbar}${bgInfo}`, {
	borderColor: '#69b6d4',
})

globalStyle(`${lumenScope}${navbar}${bgWarning}`, {
	borderColor: '#e67818',
})

globalStyle(`${lumenScope}${navbar}${bgDanger}`, {
	borderColor: '#e63b31',
})

globalStyle(`${lumenScope}${navbar}${bgLight}`, {
	borderColor: '#dddddd',
})

globalStyle(`${lumenScope}${navbar}${bgDark}`, {
	borderColor: '#4d4d4d',
})

globalStyle(`${lumenScope}${textSecondary}`, {
	color: '#555 !important',
})

globalStyle(`${lumenScope}${badge}${bgSecondary}`, {
	color: '#555',
})

globalStyle(`${lumenScope}${badge}${bgLight}`, {
	color: '#555',
})
