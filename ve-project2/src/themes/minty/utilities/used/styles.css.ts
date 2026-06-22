import { globalStyle } from '@vanilla-extract/css'
import { mintyScope } from '../../scope.css'

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
import { btn, btnLink } from '../../../../theme-contract/ui/buttons/contract.css'
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

globalStyle(`${mintyScope}${row}`, {
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

globalStyle(`${mintyScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${mintyScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${mintyScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${mintyScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${mintyScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${mintyScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${mintyScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${mintyScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${mintyScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${mintyScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${mintyScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${mintyScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${mintyScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${mintyScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${mintyScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${mintyScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${mintyScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${mintyScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${mintyScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${mintyScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${tabContent} > ${mintyScope}${active}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${accordionFlush} > ${mintyScope}${accordionItem} > ${mintyScope}${accordionHeader} ${mintyScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${mintyScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${mintyScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${mintyScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${mintyScope}${listGroupItem} + ${mintyScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${mintyScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${mintyScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${mintyScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${mintyScope}${listGroupHorizontal} > ${mintyScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${mintyScope}${listGroupHorizontal} > ${mintyScope}${listGroupItem} + ${mintyScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${mintyScope}${listGroupHorizontalSm} > ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${mintyScope}${listGroupHorizontalSm} > ${mintyScope}${listGroupItem} + ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${mintyScope}${listGroupHorizontalMd} > ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${mintyScope}${listGroupHorizontalMd} > ${mintyScope}${listGroupItem} + ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${mintyScope}${listGroupHorizontalLg} > ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${mintyScope}${listGroupHorizontalLg} > ${mintyScope}${listGroupItem} + ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${mintyScope}${listGroupHorizontalXl} > ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${mintyScope}${listGroupHorizontalXl} > ${mintyScope}${listGroupItem} + ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${mintyScope}${listGroupHorizontalXxl} > ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${mintyScope}${listGroupHorizontalXxl} > ${mintyScope}${listGroupItem} + ${mintyScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${mintyScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${mintyScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${carouselFade} ${mintyScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${mintyScope}${carouselIndicators} ${mintyScope}${active}`, {
	opacity: '1',
})

globalStyle(`${mintyScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${mintyScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${mintyScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${mintyScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${mintyScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${mintyScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${mintyScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${mintyScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${mintyScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${mintyScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${mintyScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${mintyScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${mintyScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${mintyScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${mintyScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${mintyScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${mintyScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${mintyScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${mintyScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${mintyScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${mintyScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${mintyScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${mintyScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${mintyScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${mintyScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${mintyScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${mintyScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${mintyScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${mintyScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${mintyScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${mintyScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${mintyScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${mintyScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${mintyScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${mintyScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${mintyScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${mintyScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${mintyScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${mintyScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${mintyScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${mintyScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${mintyScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${mintyScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${mintyScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${mintyScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${mintyScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${mintyScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${mintyScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${mintyScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${mintyScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${mintyScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${mintyScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${mintyScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${mintyScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${mintyScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${mintyScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${mintyScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${mintyScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${mintyScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${mintyScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${mintyScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${mintyScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${mintyScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${mintyScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${mintyScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${mintyScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${mintyScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${mintyScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${mintyScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${mintyScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${mintyScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${mintyScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${mintyScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${mintyScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${mintyScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${mintyScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${mintyScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${mintyScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${mintyScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${mintyScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${mintyScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${mintyScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${mintyScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${mintyScope}${btnLink}${disabled}:hover`, {
	color: '#888',
})

globalStyle(`${mintyScope}${badge}${bgLight}`, {
	color: '#5a5a5a',
})
