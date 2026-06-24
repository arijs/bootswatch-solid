import { globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../../scope.css'

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

globalStyle(`${sandstoneScope}${row}`, {
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

globalStyle(`${sandstoneScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${sandstoneScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${sandstoneScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${sandstoneScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${sandstoneScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${sandstoneScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${sandstoneScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${sandstoneScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${sandstoneScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${sandstoneScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${sandstoneScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${sandstoneScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${sandstoneScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${sandstoneScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${sandstoneScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${sandstoneScope}${accordionFlush} > ${sandstoneScope}${accordionItem} > ${sandstoneScope}${accordionHeader} ${sandstoneScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${sandstoneScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${sandstoneScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${sandstoneScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${sandstoneScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${sandstoneScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${sandstoneScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${sandstoneScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${sandstoneScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${sandstoneScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${sandstoneScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${sandstoneScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${sandstoneScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${sandstoneScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${sandstoneScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${sandstoneScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${sandstoneScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${sandstoneScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${sandstoneScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${sandstoneScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${sandstoneScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${sandstoneScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${sandstoneScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${sandstoneScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${sandstoneScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${sandstoneScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${sandstoneScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${sandstoneScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${sandstoneScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${sandstoneScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${sandstoneScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${sandstoneScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${sandstoneScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${sandstoneScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${sandstoneScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${sandstoneScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${sandstoneScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${sandstoneScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${sandstoneScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${sandstoneScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${sandstoneScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${sandstoneScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${sandstoneScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${sandstoneScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${sandstoneScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${sandstoneScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${sandstoneScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${sandstoneScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${sandstoneScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${sandstoneScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${sandstoneScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${sandstoneScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${sandstoneScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${sandstoneScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${sandstoneScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${sandstoneScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${sandstoneScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${sandstoneScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${sandstoneScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${sandstoneScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${sandstoneScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${sandstoneScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${sandstoneScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${sandstoneScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${sandstoneScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${sandstoneScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${sandstoneScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${sandstoneScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${sandstoneScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${sandstoneScope}${badge}${bgLight}`, {
	color: '#3e3f3a',
})
