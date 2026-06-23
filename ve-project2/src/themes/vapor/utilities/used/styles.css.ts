import { globalStyle } from '@vanilla-extract/css'
import { vaporScope } from '../../scope.css'

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
import { varBsBtnCloseDisabledOpacity } from '../../../../theme-contract/ui/alerts/_vars.css'
import { varBsBreadcrumbItemActiveColor } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveColor,
	varBsBtnDisabledBg,
	varBsBtnDisabledBorderColor,
	varBsBtnDisabledColor,
	varBsBtnDisabledOpacity,
	varBsBtnFocusBoxShadow,
} from '../../../../theme-contract/ui/buttons/_vars.css'
import { varBsDropdownLinkActiveBg, varBsDropdownLinkActiveColor, varBsDropdownLinkDisabledColor } from '../../../../theme-contract/ui/dropdowns/_vars.css'
import {
	varBsListGroupActionActiveBg,
	varBsListGroupActionActiveColor,
	varBsListGroupActionHoverBg,
	varBsListGroupActionHoverColor,
	varBsListGroupActiveBg,
	varBsListGroupActiveBorderColor,
	varBsListGroupActiveColor,
	varBsListGroupBorderWidth,
	varBsListGroupDisabledBg,
	varBsListGroupDisabledColor,
} from '../../../../theme-contract/ui/list-group/_vars.css'
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
	active,
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
	btnClose,
	btnGroupVertical,
	collapsed,
	dBlock,
	dInlineBlock,
	dInlineFlex,
	dLgNone,
	dMdBlock,
	dNone,
	disabled,
	end0,
	flexColumn,
	flexRow,
	fs4,
	justifyContentCenter,
	justifyContentEnd,
	justifyContentStart,
	listGroupHorizontal,
	listGroupHorizontalLg,
	listGroupHorizontalMd,
	listGroupHorizontalSm,
	listGroupHorizontalXl,
	listGroupHorizontalXxl,
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
import { breadcrumbItem } from '../../../../theme-contract/ui/breadcrumb/contract.css'
import { btnGroup } from '../../../../theme-contract/ui/button-group/contract.css'
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'
import { card } from '../../../../theme-contract/ui/card/contract.css'
import { carouselFade, carouselIndicators, carouselItem } from '../../../../theme-contract/ui/carousel/contract.css'
import { dropdownItem } from '../../../../theme-contract/ui/dropdowns/contract.css'
import { listGroupItem, listGroupItemAction } from '../../../../theme-contract/ui/list-group/contract.css'
import { flexWrap } from '../../../../theme-contract/ui/modal/contract.css'
import { navbar } from '../../../../theme-contract/ui/navbar/contract.css'
import { tabContent } from '../../../../theme-contract/ui/navs/contract.css'
import { progressBar } from '../../../../theme-contract/ui/progress/contract.css'
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

globalStyle(`${vaporScope}${row}`, {
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

globalStyle(`${vaporScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${vaporScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${vaporScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${vaporScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${vaporScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${vaporScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${vaporScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${vaporScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${vaporScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${vaporScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${vaporScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${vaporScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${tabContent} > ${vaporScope}${active}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${accordionFlush} > ${vaporScope}${accordionItem} > ${vaporScope}${accordionHeader} ${vaporScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${vaporScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${vaporScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${vaporScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${vaporScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${vaporScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${vaporScope}${listGroupHorizontal} > ${vaporScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${vaporScope}${listGroupHorizontal} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${vaporScope}${listGroupHorizontalSm} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalSm} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalMd} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalMd} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalLg} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalLg} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXl} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXl} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXxl} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXxl} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${vaporScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${carouselFade} ${vaporScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${vaporScope}${carouselIndicators} ${vaporScope}${active}`, {
	opacity: '1',
})

globalStyle(`${vaporScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${vaporScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${vaporScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${vaporScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${vaporScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${vaporScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${vaporScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${vaporScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${vaporScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${vaporScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${vaporScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${vaporScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${vaporScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${vaporScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${vaporScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${vaporScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${vaporScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${vaporScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${vaporScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${vaporScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${vaporScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${vaporScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${vaporScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${vaporScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${vaporScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${vaporScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${vaporScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${vaporScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${vaporScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${vaporScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${vaporScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${vaporScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${vaporScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${vaporScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${vaporScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${vaporScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${vaporScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${vaporScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${vaporScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${vaporScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${vaporScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${vaporScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${vaporScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${vaporScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${vaporScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${vaporScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${vaporScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${vaporScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${vaporScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${vaporScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${vaporScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${vaporScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${vaporScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${vaporScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${vaporScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${vaporScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${vaporScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${textPrimary}`, {
	textShadow: '0 0 1px rgba(111, 66, 193, 0.3), 0 0 2px rgba(111, 66, 193, 0.3), 0 0 5px rgba(111, 66, 193, 0.2)',
})

globalStyle(`${vaporScope}${textSecondary}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`${vaporScope}${textSuccess}`, {
	textShadow: '0 0 1px rgba(60, 242, 129, 0.3), 0 0 2px rgba(60, 242, 129, 0.3), 0 0 5px rgba(60, 242, 129, 0.2)',
})

globalStyle(`${vaporScope}${textInfo}`, {
	textShadow: '0 0 1px rgba(27, 162, 246, 0.3), 0 0 2px rgba(27, 162, 246, 0.3), 0 0 5px rgba(27, 162, 246, 0.2)',
})

globalStyle(`${vaporScope}${textWarning}`, {
	textShadow: '0 0 1px rgba(255, 193, 7, 0.3), 0 0 2px rgba(255, 193, 7, 0.3), 0 0 5px rgba(255, 193, 7, 0.2)',
})

globalStyle(`${vaporScope}${textDanger}`, {
	textShadow: '0 0 1px rgba(228, 76, 85, 0.3), 0 0 2px rgba(228, 76, 85, 0.3), 0 0 5px rgba(228, 76, 85, 0.2)',
})

globalStyle(`${vaporScope}${textLight}`, {
	textShadow: '0 0 1px rgba(68, 217, 232, 0.3), 0 0 2px rgba(68, 217, 232, 0.3), 0 0 5px rgba(68, 217, 232, 0.2)',
})

globalStyle(`${vaporScope}${textDark}`, {
	textShadow: '0 0 1px rgba(23, 2, 41, 0.3), 0 0 2px rgba(23, 2, 41, 0.3), 0 0 5px rgba(23, 2, 41, 0.2)',
})

globalStyle(`${vaporScope}${textWhite}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textMuted}`, {
	textShadow: '0 0 1px rgba(21, 104, 94, 0.3), 0 0 2px rgba(21, 104, 94, 0.3), 0 0 5px rgba(21, 104, 94, 0.2)',
})

globalStyle(`${vaporScope}${navbar}${bgPrimary}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgSecondary}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgLight}`, {
	boxShadow: '0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4), 0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgDark}`, {
	boxShadow: '0 0 2px rgba(23, 2, 41, 0.9), 0 0 4px rgba(23, 2, 41, 0.4), 0 0 1rem rgba(23, 2, 41, 0.3), 0 0 4rem rgba(23, 2, 41, 0.1)',
})

globalStyle(`${vaporScope}${breadcrumbItem}${active}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`${vaporScope}${progressBar}${bgPrimary}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgSecondary}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgLight}`, {
	boxShadow: '0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4), 0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgDark}`, {
	boxShadow: '0 0 2px rgba(23, 2, 41, 0.9), 0 0 4px rgba(23, 2, 41, 0.4), 0 0 1rem rgba(23, 2, 41, 0.3), 0 0 4rem rgba(23, 2, 41, 0.1)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card}${borderDark}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})
