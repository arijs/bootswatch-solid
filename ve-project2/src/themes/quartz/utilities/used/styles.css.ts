import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

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

import { link } from '../../../../theme-contract/contents/basic/contract.css'

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
	borderDanger,
	borderDark,
	borderInfo,
	borderLight,
	borderPrimary,
	borderSecondary,
	borderSuccess,
	borderWarning,
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
	popover,
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
import { alert } from '../../../../theme-contract/ui/alerts/contract.css'
import { badge } from '../../../../theme-contract/ui/badge/contract.css'
import { breadcrumbItem } from '../../../../theme-contract/ui/breadcrumb/contract.css'
import { btnGroup } from '../../../../theme-contract/ui/button-group/contract.css'
import { btn, btnSecondary } from '../../../../theme-contract/ui/buttons/contract.css'
import { card } from '../../../../theme-contract/ui/card/contract.css'
import { carouselFade, carouselIndicators, carouselItem } from '../../../../theme-contract/ui/carousel/contract.css'
import { dropdownItem, dropdownMenu } from '../../../../theme-contract/ui/dropdowns/contract.css'
import { listGroup, listGroupItem, listGroupItemAction } from '../../../../theme-contract/ui/list-group/contract.css'
import { modalContent } from '../../../../theme-contract/ui/modal/contract.css'
import {
	navItem,
	navLink,
	navLinkActive,
	navTabs,
	show,
	tabContent,
} from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvas } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toast } from '../../../../theme-contract/ui/toasts/contract.css'
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

globalStyle(`${quartzScope}${row}`, {
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

globalStyle(`${quartzScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${quartzScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${quartzScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${quartzScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${quartzScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${quartzScope}${g3}`, {
	vars: {
		[varBsGutterX]: '2rem',
	},
})

globalStyle(`${quartzScope}${g3}`, {
	vars: {
		[varBsGutterY]: '2rem',
	},
})

globalStyle(`${quartzScope}${g4}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${quartzScope}${g4}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${quartzScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${quartzScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${quartzScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${tabContent} > ${quartzScope}${active}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem} > ${quartzScope}${accordionHeader} ${quartzScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${quartzScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${quartzScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${quartzScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${quartzScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${quartzScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${quartzScope}${listGroupHorizontal} > ${quartzScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${quartzScope}${listGroupHorizontal} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${quartzScope}${listGroupHorizontalSm} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalSm} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalMd} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalMd} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalLg} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalLg} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXl} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXl} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXxl} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXxl} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${quartzScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${carouselFade} ${quartzScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${quartzScope}${carouselIndicators} ${quartzScope}${active}`, {
	opacity: '1',
})

globalStyle(`${quartzScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${quartzScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${quartzScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${quartzScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${quartzScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${quartzScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${quartzScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${quartzScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${quartzScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${quartzScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${quartzScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${quartzScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${quartzScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${quartzScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${quartzScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${quartzScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${quartzScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${quartzScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${quartzScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${quartzScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${quartzScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${quartzScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${quartzScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${quartzScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${quartzScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${quartzScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${quartzScope}${my2}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${quartzScope}${my3}`, {
	marginTop: '2rem !important',
	marginBottom: '2rem !important',
})

globalStyle(`${quartzScope}${mt3}`, {
	marginTop: '2rem !important',
})

globalStyle(`${quartzScope}${mt5}`, {
	marginTop: '6rem !important',
})

globalStyle(`${quartzScope}${me2}`, {
	marginRight: '1rem !important',
})

globalStyle(`${quartzScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${quartzScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${quartzScope}${mb2}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${quartzScope}${mb3}`, {
	marginBottom: '2rem !important',
})

globalStyle(`${quartzScope}${mb4}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${quartzScope}${mb5}`, {
	marginBottom: '6rem !important',
})

globalStyle(`${quartzScope}${ms3}`, {
	marginLeft: '2rem !important',
})

globalStyle(`${quartzScope}${p5}`, {
	padding: '6rem !important',
})

globalStyle(`${quartzScope}${px2}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${quartzScope}${px3}`, {
	paddingRight: '2rem !important',
	paddingLeft: '2rem !important',
})

globalStyle(`${quartzScope}${py3}`, {
	paddingTop: '2rem !important',
	paddingBottom: '2rem !important',
})

globalStyle(`${quartzScope}${pt3}`, {
	paddingTop: '2rem !important',
})

globalStyle(`${quartzScope}${pt4}`, {
	paddingTop: '3rem !important',
})

globalStyle(`${quartzScope}${pb2}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${quartzScope}${pb3}`, {
	paddingBottom: '2rem !important',
})

globalStyle(`${quartzScope}${pb5}`, {
	paddingBottom: '6rem !important',
})

globalStyle(`${quartzScope}${ps3}`, {
	paddingLeft: '2rem !important',
})

globalStyle(`${quartzScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${quartzScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${quartzScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${quartzScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${quartzScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${btnSecondary}${disabled}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${dropdownMenu} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${alert} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${badge}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '.4',
	},
})

globalStyle(`${quartzScope}${badge}${bgLight}`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${listGroup} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${bgPrimary}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgSuccess}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgInfo}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgWarning}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgDanger}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgLight}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgDark}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${borderPrimary} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderSecondary} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderSuccess} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderInfo} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderWarning} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderDanger} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderLight} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderDark}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderDark} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderDark} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${accordionItem} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${toast} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${popover} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${modalContent} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${offcanvas} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})
