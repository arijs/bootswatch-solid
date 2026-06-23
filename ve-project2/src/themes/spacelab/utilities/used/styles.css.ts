import { globalStyle } from '@vanilla-extract/css'
import { spacelabScope } from '../../scope.css'

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
import { listGroupItem, listGroupItemAction } from '../../../../theme-contract/ui/list-group/contract.css'
import { flexWrap } from '../../../../theme-contract/ui/modal/contract.css'
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

globalStyle(`${spacelabScope}${row}`, {
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

globalStyle(`${spacelabScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${spacelabScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${spacelabScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${spacelabScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${spacelabScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${spacelabScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${spacelabScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${spacelabScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${spacelabScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${spacelabScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${spacelabScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${spacelabScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${spacelabScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${spacelabScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${spacelabScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${spacelabScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${spacelabScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${spacelabScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${spacelabScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${spacelabScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${tabContent} > ${spacelabScope}${active}`, {
	display: 'block',
})

globalStyle(`${spacelabScope}${accordionFlush} > ${spacelabScope}${accordionItem} > ${spacelabScope}${accordionHeader} ${spacelabScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${spacelabScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${spacelabScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${spacelabScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${spacelabScope}${listGroupItem} + ${spacelabScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${spacelabScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${spacelabScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${spacelabScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${spacelabScope}${listGroupHorizontal} > ${spacelabScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${spacelabScope}${listGroupHorizontal} > ${spacelabScope}${listGroupItem} + ${spacelabScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${spacelabScope}${listGroupHorizontalSm} > ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${spacelabScope}${listGroupHorizontalSm} > ${spacelabScope}${listGroupItem} + ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${spacelabScope}${listGroupHorizontalMd} > ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${spacelabScope}${listGroupHorizontalMd} > ${spacelabScope}${listGroupItem} + ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${spacelabScope}${listGroupHorizontalLg} > ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${spacelabScope}${listGroupHorizontalLg} > ${spacelabScope}${listGroupItem} + ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${spacelabScope}${listGroupHorizontalXl} > ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${spacelabScope}${listGroupHorizontalXl} > ${spacelabScope}${listGroupItem} + ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${spacelabScope}${listGroupHorizontalXxl} > ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${spacelabScope}${listGroupHorizontalXxl} > ${spacelabScope}${listGroupItem} + ${spacelabScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${spacelabScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${spacelabScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${spacelabScope}${carouselFade} ${spacelabScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${spacelabScope}${carouselIndicators} ${spacelabScope}${active}`, {
	opacity: '1',
})

globalStyle(`${spacelabScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${spacelabScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${spacelabScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${spacelabScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${spacelabScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${spacelabScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${spacelabScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${spacelabScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${spacelabScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${spacelabScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${spacelabScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${spacelabScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${spacelabScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${spacelabScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${spacelabScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${spacelabScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${spacelabScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${spacelabScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${spacelabScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${spacelabScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${spacelabScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${spacelabScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${spacelabScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${spacelabScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${spacelabScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${spacelabScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${spacelabScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${spacelabScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${spacelabScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${spacelabScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${spacelabScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${spacelabScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${spacelabScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${spacelabScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${spacelabScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${spacelabScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${spacelabScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${spacelabScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${spacelabScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${spacelabScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${spacelabScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${spacelabScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${spacelabScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${spacelabScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${spacelabScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${spacelabScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${spacelabScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${spacelabScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${spacelabScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${spacelabScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${spacelabScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${spacelabScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${spacelabScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${spacelabScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${spacelabScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${spacelabScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${spacelabScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${spacelabScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${spacelabScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${spacelabScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${spacelabScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${spacelabScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${spacelabScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${spacelabScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${spacelabScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${spacelabScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${spacelabScope}${navbar}${bgPrimary}`, {
	backgroundImage: 'linear-gradient(#7191b3, #446e9b 50%, #3f658f)',
	filter: 'none',
	border: '1px solid #36587c',
})

globalStyle(`${spacelabScope}${navbar}${bgSecondary}`, {
	backgroundImage: 'linear-gradient(#b1b1b1, #999 50%, #8d8d8d)',
	filter: 'none',
	border: '1px solid #7a7a7a',
})

globalStyle(`${spacelabScope}${navbar}${bgSuccess}`, {
	backgroundImage: 'linear-gradient(#6bc756, #3cb521 50%, #37a71e)',
	filter: 'none',
	border: '1px solid #30911a',
})

globalStyle(`${spacelabScope}${navbar}${bgInfo}`, {
	backgroundImage: 'linear-gradient(#64b1f6, #3399f3 50%, #2f8de0)',
	filter: 'none',
	border: '1px solid #297ac2',
})

globalStyle(`${spacelabScope}${navbar}${bgWarning}`, {
	backgroundImage: 'linear-gradient(#de963d, #d47500 50%, #c36c00)',
	filter: 'none',
	border: '1px solid #aa5e00',
})

globalStyle(`${spacelabScope}${navbar}${bgDanger}`, {
	backgroundImage: 'linear-gradient(#d93f3d, #cd0200 50%, #bd0200)',
	filter: 'none',
	border: '1px solid #a40200',
})

globalStyle(`${spacelabScope}${navbar}${bgLight}`, {
	backgroundImage: 'linear-gradient(#f2f2f2, #eee 50%, #dbdbdb)',
	filter: 'none',
	border: '1px solid #bebebe',
})

globalStyle(`${spacelabScope}${navbar}${bgDark}`, {
	backgroundImage: 'linear-gradient(#646464, #333 50%, #2f2f2f)',
	filter: 'none',
	border: '1px solid #292929',
})

globalStyle(`${spacelabScope}${btnPrimary}:not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#6d8aaa, #3f658f 50%, #3a5d84)',
	filter: 'none',
	border: '1px solid #325172',
})

globalStyle(`${spacelabScope}${btnSecondary}:not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#a8a8a8, #8d8d8d 50%, #828282)',
	filter: 'none',
	border: '1px solid #717171',
})

globalStyle(`${spacelabScope}${btnSuccess}:not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#67bc54, #37a71e 50%, #339a1c)',
	filter: 'none',
	border: '1px solid #2c8618',
})

globalStyle(`${spacelabScope}${btnInfo}:not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#61a8e7, #2f8de0 50%, #2b82ce)',
	filter: 'none',
	border: '1px solid #2671b3',
})

globalStyle(`${spacelabScope}${btnWarning}:not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#d18f3d, #c36c00 50%, #b36300)',
	filter: 'none',
	border: '1px solid #9c5600',
})

globalStyle(`${spacelabScope}${btnDanger}:not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#cd3f3d, #bd0200 50%, #ae0200)',
	filter: 'none',
	border: '1px solid #970200',
})

globalStyle(`${spacelabScope}${btnLight}:not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#e4e4e4, #dbdbdb 50%, #c9c9c9)',
	filter: 'none',
	border: '1px solid #afafaf',
})

globalStyle(`${spacelabScope}${btnDark}:not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#616161, #2f2f2f 50%, #2b2b2b)',
	filter: 'none',
	border: '1px solid #262626',
})

globalStyle(`${spacelabScope}${badge}${bgLight}`, {
	color: '#333',
})
