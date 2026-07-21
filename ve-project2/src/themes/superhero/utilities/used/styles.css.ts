import { globalStyle } from '@vanilla-extract/css'
import { superheroScope } from '../../scope.css'

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
import { table } from '../../../../theme-contract/contents/tables/contract.css'
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

globalStyle(`${superheroScope}${row}`, {
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

globalStyle(`${superheroScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${superheroScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${superheroScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${superheroScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${superheroScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${superheroScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${superheroScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${superheroScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${superheroScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${superheroScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${superheroScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${superheroScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${superheroScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${superheroScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${superheroScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${superheroScope}${accordionFlush} > ${superheroScope}${accordionItem} > ${superheroScope}${accordionHeader} ${superheroScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${superheroScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${superheroScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${superheroScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${superheroScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${superheroScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${superheroScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${superheroScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${superheroScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${superheroScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${superheroScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${superheroScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${superheroScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${superheroScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${superheroScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${superheroScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${superheroScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${superheroScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${superheroScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${superheroScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${superheroScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${superheroScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${superheroScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${superheroScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${superheroScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${superheroScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${superheroScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${superheroScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${superheroScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${superheroScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${superheroScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${superheroScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${superheroScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${superheroScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${superheroScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${superheroScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${superheroScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${superheroScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${superheroScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${superheroScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${superheroScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${superheroScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${superheroScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${superheroScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${superheroScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${superheroScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${superheroScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${superheroScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${superheroScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${superheroScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${superheroScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${superheroScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${superheroScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${superheroScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${superheroScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${superheroScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${superheroScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${superheroScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${superheroScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${superheroScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${superheroScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${superheroScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${superheroScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${superheroScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${superheroScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${superheroScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${superheroScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${superheroScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${superheroScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${superheroScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${superheroScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${superheroScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${superheroScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${superheroScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${superheroScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${superheroScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${superheroScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${superheroScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${superheroScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${superheroScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${superheroScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${superheroScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${superheroScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${superheroScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${superheroScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${superheroScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${superheroScope}${textSecondary}`, {
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${superheroScope}${table} ${superheroScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.4)',
})
