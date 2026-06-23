import { globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

import {
	varBsBodyColor,
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

import { link } from '../../../../theme-contract/contents/basic/contract.css'
import { elSpan } from '../../../../theme-contract/global-elements/contract.css'

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
	pager,
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
import {
	btn,
	btnDanger,
	btnDark,
	btnInfo,
	btnLight,
	btnPrimary,
	btnSecondary,
	btnSuccess,
	btnWarning,
} from '../../../../theme-contract/ui/buttons/contract.css'
import { carouselFade, carouselIndicators, carouselItem } from '../../../../theme-contract/ui/carousel/contract.css'
import { dropdownItem } from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	listGroupItem,
	listGroupItemAction,
	listGroupItemDanger,
	listGroupItemSuccess,
	listGroupItemWarning,
} from '../../../../theme-contract/ui/list-group/contract.css'
import { flexWrap } from '../../../../theme-contract/ui/modal/contract.css'
import { navbar } from '../../../../theme-contract/ui/navbar/contract.css'
import { navLink, navTabs, tabContent } from '../../../../theme-contract/ui/navs/contract.css'
import { pagination } from '../../../../theme-contract/ui/pagination/contract.css'
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

globalStyle(`${lumenScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${lumenScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${lumenScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${lumenScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${tabContent} > ${lumenScope}${active}`, {
	display: 'block',
})

globalStyle(`${lumenScope}${accordionFlush} > ${lumenScope}${accordionItem} > ${lumenScope}${accordionHeader} ${lumenScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${lumenScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${lumenScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${lumenScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${lumenScope}${listGroupItem} + ${lumenScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${lumenScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${lumenScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${lumenScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${lumenScope}${listGroupHorizontal} > ${lumenScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${lumenScope}${listGroupHorizontal} > ${lumenScope}${listGroupItem} + ${lumenScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${lumenScope}${listGroupHorizontalSm} > ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${lumenScope}${listGroupHorizontalSm} > ${lumenScope}${listGroupItem} + ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${lumenScope}${listGroupHorizontalMd} > ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${lumenScope}${listGroupHorizontalMd} > ${lumenScope}${listGroupItem} + ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${lumenScope}${listGroupHorizontalLg} > ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${lumenScope}${listGroupHorizontalLg} > ${lumenScope}${listGroupItem} + ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${lumenScope}${listGroupHorizontalXl} > ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${lumenScope}${listGroupHorizontalXl} > ${lumenScope}${listGroupItem} + ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${lumenScope}${listGroupHorizontalXxl} > ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${lumenScope}${listGroupHorizontalXxl} > ${lumenScope}${listGroupItem} + ${lumenScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${lumenScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${lumenScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${lumenScope}${carouselFade} ${lumenScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${lumenScope}${carouselIndicators} ${lumenScope}${active}`, {
	opacity: '1',
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

globalStyle(`${lumenScope}${btn}:not(${disabled}):hover`, {
	marginTop: '1px',
	borderBottomWidth: '3px',
})

globalStyle(`${lumenScope}${btn}:not(${disabled}):active`, {
	marginTop: '2px',
	borderBottomWidth: '2px',
})

globalStyle(`${lumenScope}${btnPrimary}:not(${disabled}):hover`, {
	borderColor: '#137ea7',
})

globalStyle(`${lumenScope}${btnPrimary}:not(${disabled}):active`, {
	borderColor: '#137ea7',
})

globalStyle(`${lumenScope}${btnSecondary}:not(${disabled}):hover`, {
	borderColor: '#d8d8d8',
})

globalStyle(`${lumenScope}${btnSecondary}:not(${disabled}):active`, {
	borderColor: '#d8d8d8',
})

globalStyle(`${lumenScope}${btnSuccess}:not(${disabled}):hover`, {
	borderColor: '#24a428',
})

globalStyle(`${lumenScope}${btnSuccess}:not(${disabled}):active`, {
	borderColor: '#24a428',
})

globalStyle(`${lumenScope}${btnInfo}:not(${disabled}):hover`, {
	borderColor: '#69b6d4',
})

globalStyle(`${lumenScope}${btnInfo}:not(${disabled}):active`, {
	borderColor: '#69b6d4',
})

globalStyle(`${lumenScope}${btnWarning}:not(${disabled}):hover`, {
	borderColor: '#e67818',
})

globalStyle(`${lumenScope}${btnWarning}:not(${disabled}):active`, {
	borderColor: '#e67818',
})

globalStyle(`${lumenScope}${btnDanger}:not(${disabled}):hover`, {
	borderColor: '#e63b31',
})

globalStyle(`${lumenScope}${btnDanger}:not(${disabled}):active`, {
	borderColor: '#e63b31',
})

globalStyle(`${lumenScope}${btnLight}:not(${disabled}):hover`, {
	borderColor: '#dddddd',
})

globalStyle(`${lumenScope}${btnLight}:not(${disabled}):active`, {
	borderColor: '#dddddd',
})

globalStyle(`${lumenScope}${btnDark}:not(${disabled}):hover`, {
	borderColor: '#4d4d4d',
})

globalStyle(`${lumenScope}${btnDark}:not(${disabled}):active`, {
	borderColor: '#4d4d4d',
})

globalStyle(`${lumenScope}${textSecondary}`, {
	color: '#555 !important',
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}:not(${disabled}):hover`, {
	paddingBottom: 'calc(0.5rem + 6px)',
	marginTop: '0',
	color: varBsBodyColor,
	borderBottomColor: 'transparent',
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}:not(${disabled}):focus`, {
	paddingBottom: 'calc(0.5rem + 6px)',
	marginTop: '0',
	color: varBsBodyColor,
	borderBottomColor: 'transparent',
})

globalStyle(`${lumenScope}${pagination} > ${lumenScope}${disabled} > ${lumenScope}${link}:hover`, {
	top: '0',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pagination} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}:hover`, {
	top: '0',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pagination} > ${lumenScope}${disabled} > ${lumenScope}${link}:active`, {
	top: '0',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pagination} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}:active`, {
	top: '0',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${link}`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${link}:hover`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${link}:active`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}:hover`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}:active`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${badge}${bgSecondary}`, {
	color: '#555',
})

globalStyle(`${lumenScope}${badge}${bgLight}`, {
	color: '#555',
})

globalStyle(`${lumenScope}${link}${listGroupItemSuccess}${active}`, {
	backgroundColor: '#28b62c',
})

globalStyle(`${lumenScope}${link}${listGroupItemSuccess}${active}:hover`, {
	backgroundColor: '#24a428',
})

globalStyle(`${lumenScope}${link}${listGroupItemSuccess}${active}:focus`, {
	backgroundColor: '#24a428',
})

globalStyle(`${lumenScope}${link}${listGroupItemWarning}${active}`, {
	backgroundColor: '#ff851b',
})

globalStyle(`${lumenScope}${link}${listGroupItemWarning}${active}:hover`, {
	backgroundColor: '#e67818',
})

globalStyle(`${lumenScope}${link}${listGroupItemWarning}${active}:focus`, {
	backgroundColor: '#e67818',
})

globalStyle(`${lumenScope}${link}${listGroupItemDanger}${active}`, {
	backgroundColor: '#ff4136',
})

globalStyle(`${lumenScope}${link}${listGroupItemDanger}${active}:hover`, {
	backgroundColor: '#e63b31',
})

globalStyle(`${lumenScope}${link}${listGroupItemDanger}${active}:focus`, {
	backgroundColor: '#e63b31',
})
