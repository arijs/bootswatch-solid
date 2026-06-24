import { globalStyle } from '@vanilla-extract/css'
import { flatlyScope } from '../../scope.css'

import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusPill,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsDangerRgb,
	varBsDarkRgb,
	varBsInfoRgb,
	varBsLightRgb,
	varBsPrimaryRgb,
	varBsSecondaryColor,
	varBsSecondaryRgb,
	varBsSuccessRgb,
	varBsWarningRgb,
	varBsWhiteRgb,
} from '../../../../theme-contract/_vars.css'
import { varBsGutterX, varBsGutterY } from '../../../../theme-contract/layout/container.css'
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

globalStyle(`${flatlyScope}${row}`, {
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

globalStyle(`${flatlyScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${flatlyScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${flatlyScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${flatlyScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${flatlyScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${flatlyScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${flatlyScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${flatlyScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${flatlyScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${flatlyScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${flatlyScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${flatlyScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${flatlyScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${flatlyScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${flatlyScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${flatlyScope}${accordionFlush} > ${flatlyScope}${accordionItem} > ${flatlyScope}${accordionHeader} ${flatlyScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${flatlyScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${flatlyScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${flatlyScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${flatlyScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${flatlyScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${flatlyScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${flatlyScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${flatlyScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${flatlyScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${flatlyScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${flatlyScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${flatlyScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${flatlyScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${flatlyScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${flatlyScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${flatlyScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${flatlyScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${flatlyScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${flatlyScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${flatlyScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${flatlyScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${flatlyScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${flatlyScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${flatlyScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${flatlyScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${flatlyScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${flatlyScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${flatlyScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${flatlyScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${flatlyScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${flatlyScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${flatlyScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${flatlyScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${flatlyScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${flatlyScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${flatlyScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${flatlyScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${flatlyScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${flatlyScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${flatlyScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${flatlyScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${flatlyScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${flatlyScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${flatlyScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${flatlyScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${flatlyScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${flatlyScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${flatlyScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${flatlyScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${flatlyScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${flatlyScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${flatlyScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${flatlyScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${flatlyScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${flatlyScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${flatlyScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${flatlyScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${flatlyScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${flatlyScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${flatlyScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${flatlyScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${flatlyScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${flatlyScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${flatlyScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${flatlyScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${flatlyScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${flatlyScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${flatlyScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${flatlyScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${flatlyScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${flatlyScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${flatlyScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${flatlyScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${flatlyScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${flatlyScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${flatlyScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${flatlyScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${flatlyScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${flatlyScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${flatlyScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${flatlyScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${flatlyScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${flatlyScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${flatlyScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${flatlyScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${flatlyScope}${badge}${bgLight}`, {
	color: '#7b8a8b',
})
