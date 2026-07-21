import { globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../../scope.css'

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

globalStyle(`${zephyrScope}${row}`, {
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

globalStyle(`${zephyrScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${zephyrScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${zephyrScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${zephyrScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${zephyrScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${zephyrScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${zephyrScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${zephyrScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${zephyrScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${zephyrScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${zephyrScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${zephyrScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${zephyrScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${zephyrScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${zephyrScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${zephyrScope}${accordionFlush} > ${zephyrScope}${accordionItem} > ${zephyrScope}${accordionHeader} ${zephyrScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${zephyrScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${zephyrScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${zephyrScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${zephyrScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${zephyrScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${zephyrScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${zephyrScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${zephyrScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${zephyrScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${zephyrScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${zephyrScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${zephyrScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${zephyrScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${zephyrScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${zephyrScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${zephyrScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${zephyrScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${zephyrScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${zephyrScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${zephyrScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${zephyrScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${zephyrScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${zephyrScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${zephyrScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${zephyrScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${zephyrScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${zephyrScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${zephyrScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${zephyrScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${zephyrScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${zephyrScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${zephyrScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${zephyrScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${zephyrScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${zephyrScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${zephyrScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${zephyrScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${zephyrScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${zephyrScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${zephyrScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${zephyrScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${zephyrScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${zephyrScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${zephyrScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${zephyrScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${zephyrScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${zephyrScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${zephyrScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${zephyrScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${zephyrScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${zephyrScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${zephyrScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${zephyrScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${zephyrScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${zephyrScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${zephyrScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${zephyrScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${zephyrScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${zephyrScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${zephyrScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${zephyrScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${zephyrScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${zephyrScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${zephyrScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${zephyrScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${zephyrScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${zephyrScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${zephyrScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${zephyrScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${zephyrScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${zephyrScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${zephyrScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${zephyrScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${zephyrScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${zephyrScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${zephyrScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${zephyrScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${zephyrScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${zephyrScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${zephyrScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${zephyrScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${zephyrScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${zephyrScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${zephyrScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${zephyrScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${zephyrScope}${badge}${bgSecondary}`, {
	color: '#212529',
})

globalStyle(`${zephyrScope}${badge}${bgLight}`, {
	color: '#212529',
})
