import { globalStyle } from '@vanilla-extract/css'
import { bootstrapScope } from '../../scope.css'

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

globalStyle(`${bootstrapScope}${row}`, {
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

globalStyle(`${bootstrapScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${bootstrapScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${bootstrapScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${bootstrapScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${bootstrapScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${bootstrapScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${bootstrapScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${bootstrapScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${bootstrapScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${bootstrapScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${bootstrapScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${bootstrapScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${bootstrapScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${bootstrapScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${bootstrapScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${bootstrapScope}${accordionFlush} > ${bootstrapScope}${accordionItem} > ${bootstrapScope}${accordionHeader} ${bootstrapScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${bootstrapScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${bootstrapScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${bootstrapScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${bootstrapScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${bootstrapScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${bootstrapScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${bootstrapScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${bootstrapScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${bootstrapScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${bootstrapScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${bootstrapScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${bootstrapScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${bootstrapScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${bootstrapScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${bootstrapScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${bootstrapScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${bootstrapScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${bootstrapScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${bootstrapScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${bootstrapScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${bootstrapScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${bootstrapScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${bootstrapScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${bootstrapScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${bootstrapScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${bootstrapScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${bootstrapScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${bootstrapScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${bootstrapScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${bootstrapScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${bootstrapScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${bootstrapScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${bootstrapScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${bootstrapScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${bootstrapScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${bootstrapScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${bootstrapScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${bootstrapScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${bootstrapScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${bootstrapScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${bootstrapScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${bootstrapScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${bootstrapScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${bootstrapScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${bootstrapScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${bootstrapScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${bootstrapScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${bootstrapScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${bootstrapScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${bootstrapScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${bootstrapScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${bootstrapScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${bootstrapScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${bootstrapScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${bootstrapScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${bootstrapScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${bootstrapScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${bootstrapScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${bootstrapScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${bootstrapScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${bootstrapScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${bootstrapScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${bootstrapScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${bootstrapScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${bootstrapScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${bootstrapScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${bootstrapScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${bootstrapScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})
