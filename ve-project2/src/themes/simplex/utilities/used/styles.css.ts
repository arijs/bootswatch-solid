import { globalStyle } from '@vanilla-extract/css'
import { simplexScope } from '../../scope.css'

import {
	varBsBorderColor,
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
import { badge } from '../../../../theme-contract/ui/badge/contract.css'
import { breadcrumbItem } from '../../../../theme-contract/ui/breadcrumb/contract.css'
import { btnGroup } from '../../../../theme-contract/ui/button-group/contract.css'
import { btn, btnSecondary } from '../../../../theme-contract/ui/buttons/contract.css'
import { carouselFade, carouselIndicators, carouselItem } from '../../../../theme-contract/ui/carousel/contract.css'
import { dropdownItem } from '../../../../theme-contract/ui/dropdowns/contract.css'
import { listGroupItem, listGroupItemAction } from '../../../../theme-contract/ui/list-group/contract.css'
import { navbar } from '../../../../theme-contract/ui/navbar/contract.css'
import { tabContent } from '../../../../theme-contract/ui/navs/contract.css'
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

globalStyle(`${simplexScope}${row}`, {
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

globalStyle(`${simplexScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${simplexScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${simplexScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${simplexScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${simplexScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${simplexScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${simplexScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${simplexScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${simplexScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${simplexScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${simplexScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${simplexScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${simplexScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${simplexScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${simplexScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${simplexScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${simplexScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${simplexScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${simplexScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${simplexScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${tabContent} > ${simplexScope}${active}`, {
	display: 'block',
})

globalStyle(`${simplexScope}${accordionFlush} > ${simplexScope}${accordionItem} > ${simplexScope}${accordionHeader} ${simplexScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${simplexScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${simplexScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${simplexScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${simplexScope}${listGroupItem} + ${simplexScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${simplexScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${simplexScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${simplexScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${simplexScope}${listGroupHorizontal} > ${simplexScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${simplexScope}${listGroupHorizontal} > ${simplexScope}${listGroupItem} + ${simplexScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${simplexScope}${listGroupHorizontalSm} > ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${simplexScope}${listGroupHorizontalSm} > ${simplexScope}${listGroupItem} + ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${simplexScope}${listGroupHorizontalMd} > ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${simplexScope}${listGroupHorizontalMd} > ${simplexScope}${listGroupItem} + ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${simplexScope}${listGroupHorizontalLg} > ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${simplexScope}${listGroupHorizontalLg} > ${simplexScope}${listGroupItem} + ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${simplexScope}${listGroupHorizontalXl} > ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${simplexScope}${listGroupHorizontalXl} > ${simplexScope}${listGroupItem} + ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${simplexScope}${listGroupHorizontalXxl} > ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${simplexScope}${listGroupHorizontalXxl} > ${simplexScope}${listGroupItem} + ${simplexScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${simplexScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${simplexScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${simplexScope}${carouselFade} ${simplexScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${simplexScope}${carouselIndicators} ${simplexScope}${active}`, {
	opacity: '1',
})

globalStyle(`${simplexScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${simplexScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${simplexScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${simplexScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${simplexScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${simplexScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${simplexScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${simplexScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${simplexScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${simplexScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${simplexScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${simplexScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${simplexScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${simplexScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${simplexScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${simplexScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${simplexScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${simplexScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${simplexScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${simplexScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${simplexScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${simplexScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${simplexScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${simplexScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${simplexScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${simplexScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${simplexScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${simplexScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${simplexScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${simplexScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${simplexScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${simplexScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${simplexScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${simplexScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${simplexScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${simplexScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${simplexScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${simplexScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${simplexScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${simplexScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${simplexScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${simplexScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${simplexScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${simplexScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${simplexScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${simplexScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${simplexScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${simplexScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${simplexScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${simplexScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${simplexScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${simplexScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${simplexScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${simplexScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${simplexScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${simplexScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${simplexScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${simplexScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${simplexScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${simplexScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${simplexScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${simplexScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${simplexScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${simplexScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${simplexScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${simplexScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${simplexScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${simplexScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${simplexScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${simplexScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${simplexScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${simplexScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${simplexScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${simplexScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${simplexScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${simplexScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${simplexScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${simplexScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${simplexScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${simplexScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${simplexScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${simplexScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${simplexScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${simplexScope}${navbar}${bgPrimary}`, {
	borderColor: '#bd1e0d !important',
})

globalStyle(`${simplexScope}${navbar}${bgDark}`, {
	borderColor: '#303234 !important',
})

globalStyle(`${simplexScope}${navbar}${bgLight}`, {
	borderColor: '#dedede',
})

globalStyle(`${simplexScope}${btnSecondary}:not([disabled]):not(${disabled}):active`, {
	boxShadow: '0 0 0 0.2rem rgba(221, 221, 221, 0.5)',
})

globalStyle(`${simplexScope}${btnSecondary}:not([disabled]):not(${disabled})${active}`, {
	boxShadow: '0 0 0 0.2rem rgba(221, 221, 221, 0.5)',
})

globalStyle(`${simplexScope}${textSecondary}`, {
	color: '#777 !important',
})

globalStyle(`${simplexScope}${badge}${bgSecondary}`, {
	color: '#373a3c',
})

globalStyle(`${simplexScope}${badge}${bgLight}`, {
	color: '#373a3c',
})
