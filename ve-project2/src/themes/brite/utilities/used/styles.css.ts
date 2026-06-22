import { globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

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
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'
import { carouselFade, carouselIndicators, carouselItem } from '../../../../theme-contract/ui/carousel/contract.css'
import { dropdownItem } from '../../../../theme-contract/ui/dropdowns/contract.css'
import { listGroupItem, listGroupItemAction } from '../../../../theme-contract/ui/list-group/contract.css'
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

globalStyle(`${briteScope}${row}`, {
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

globalStyle(`${briteScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${briteScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${briteScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${briteScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${briteScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${briteScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${briteScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${briteScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${briteScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${briteScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${briteScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${briteScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${briteScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${briteScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${briteScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${briteScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${briteScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${briteScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${briteScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${briteScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${tabContent} > ${briteScope}${active}`, {
	display: 'block',
})

globalStyle(`${briteScope}${accordionFlush} > ${briteScope}${accordionItem} > ${briteScope}${accordionHeader} ${briteScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${briteScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${briteScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${briteScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${briteScope}${listGroupItem} + ${briteScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${briteScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${briteScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${briteScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${briteScope}${listGroupHorizontal} > ${briteScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${briteScope}${listGroupHorizontal} > ${briteScope}${listGroupItem} + ${briteScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${briteScope}${listGroupHorizontalSm} > ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${briteScope}${listGroupHorizontalSm} > ${briteScope}${listGroupItem} + ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${briteScope}${listGroupHorizontalMd} > ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${briteScope}${listGroupHorizontalMd} > ${briteScope}${listGroupItem} + ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${briteScope}${listGroupHorizontalLg} > ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${briteScope}${listGroupHorizontalLg} > ${briteScope}${listGroupItem} + ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${briteScope}${listGroupHorizontalXl} > ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${briteScope}${listGroupHorizontalXl} > ${briteScope}${listGroupItem} + ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${briteScope}${listGroupHorizontalXxl} > ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${briteScope}${listGroupHorizontalXxl} > ${briteScope}${listGroupItem} + ${briteScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${briteScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${briteScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${briteScope}${carouselFade} ${briteScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${briteScope}${carouselIndicators} ${briteScope}${active}`, {
	opacity: '1',
})

globalStyle(`${briteScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${briteScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${briteScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${briteScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${briteScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${briteScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${briteScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${briteScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${briteScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${briteScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${briteScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${briteScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${briteScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${briteScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${briteScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${briteScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${briteScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${briteScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${briteScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${briteScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${briteScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${briteScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${briteScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${briteScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${briteScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${briteScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${briteScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${briteScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${briteScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${briteScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${briteScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${briteScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${briteScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${briteScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${briteScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${briteScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${briteScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${briteScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${briteScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${briteScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${briteScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${briteScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${briteScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${briteScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${briteScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${briteScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${briteScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${briteScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${briteScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${briteScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${briteScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${briteScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${briteScope}${fs4}`, {
	fontSize: 'calc(1.25625rem + 0.075vw) !important',
})

globalStyle(`${briteScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${briteScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${briteScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${briteScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${briteScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${briteScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${briteScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${briteScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${briteScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${briteScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${briteScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${briteScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${briteScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${briteScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${briteScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${briteScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${briteScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${briteScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${briteScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${briteScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${briteScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${briteScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${briteScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${briteScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${briteScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${briteScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${briteScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${briteScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${briteScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${briteScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.3125rem !important',
		},
	},
})

globalStyle(`${briteScope}${btn}${disabled}`, {
	borderColor: '#000',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}${active}`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btn}${active}`, {
	borderColor: '#000',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${breadcrumbItem}${active}`, {
	vars: {
		[varBsBreadcrumbItemActiveColor]: '#fff',
	},
})

globalStyle(`${briteScope}${badge}${bgDark}`, {
	color: '#fff',
})
