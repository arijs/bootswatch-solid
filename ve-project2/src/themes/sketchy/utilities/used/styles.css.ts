import { globalStyle } from '@vanilla-extract/css'
import { sketchyScope } from '../../scope.css'

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

globalStyle(`${sketchyScope}${row}`, {
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

globalStyle(`${sketchyScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${sketchyScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${sketchyScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${sketchyScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${sketchyScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${sketchyScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${sketchyScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${sketchyScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${sketchyScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${sketchyScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${sketchyScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${sketchyScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${sketchyScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${sketchyScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${sketchyScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${sketchyScope}${accordionFlush} > ${sketchyScope}${accordionItem} > ${sketchyScope}${accordionHeader} ${sketchyScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
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

globalStyle(`${sketchyScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${sketchyScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${sketchyScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${sketchyScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${sketchyScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${sketchyScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${sketchyScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${sketchyScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${sketchyScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${sketchyScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${sketchyScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${sketchyScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${sketchyScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${sketchyScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${sketchyScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${sketchyScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${sketchyScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${sketchyScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${sketchyScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${sketchyScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${sketchyScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${sketchyScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${sketchyScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${sketchyScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${sketchyScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${sketchyScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${sketchyScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${sketchyScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${sketchyScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${sketchyScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${sketchyScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${sketchyScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${sketchyScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${sketchyScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${sketchyScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${sketchyScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${sketchyScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${sketchyScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${sketchyScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${sketchyScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${sketchyScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${sketchyScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${sketchyScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${sketchyScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${sketchyScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${sketchyScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${sketchyScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${sketchyScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${sketchyScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${sketchyScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${sketchyScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${sketchyScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${sketchyScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${sketchyScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${sketchyScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${sketchyScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sketchyScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sketchyScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sketchyScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sketchyScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sketchyScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sketchyScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sketchyScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sketchyScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sketchyScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${sketchyScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sketchyScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sketchyScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sketchyScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sketchyScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sketchyScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sketchyScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sketchyScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sketchyScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${sketchyScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${sketchyScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${sketchyScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${sketchyScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
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

globalStyle(`${sketchyScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${sketchyScope}${navbar}${bgLight}`, {
	borderColor: '#333',
})

globalStyle(`${sketchyScope}${badge}${bgLight}`, {
	color: '#555',
})
