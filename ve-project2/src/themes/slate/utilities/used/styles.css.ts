import { globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../../scope.css'

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
import { navLink, navTabs, tabContent } from '../../../../theme-contract/ui/navs/contract.css'
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

globalStyle(`${slateScope}${row}`, {
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

globalStyle(`${slateScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${slateScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${slateScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${slateScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${slateScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${slateScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${slateScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${slateScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${slateScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${slateScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${slateScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${slateScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${slateScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${slateScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${slateScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${slateScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${slateScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${slateScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${slateScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${tabContent} > ${slateScope}${active}`, {
	display: 'block',
})

globalStyle(`${slateScope}${accordionFlush} > ${slateScope}${accordionItem} > ${slateScope}${accordionHeader} ${slateScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${slateScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${slateScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${slateScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${slateScope}${listGroupItem} + ${slateScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${slateScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${slateScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${slateScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${slateScope}${listGroupHorizontal} > ${slateScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${slateScope}${listGroupHorizontal} > ${slateScope}${listGroupItem} + ${slateScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${slateScope}${listGroupHorizontalSm} > ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${slateScope}${listGroupHorizontalSm} > ${slateScope}${listGroupItem} + ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${slateScope}${listGroupHorizontalMd} > ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${slateScope}${listGroupHorizontalMd} > ${slateScope}${listGroupItem} + ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${slateScope}${listGroupHorizontalLg} > ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${slateScope}${listGroupHorizontalLg} > ${slateScope}${listGroupItem} + ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${slateScope}${listGroupHorizontalXl} > ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${slateScope}${listGroupHorizontalXl} > ${slateScope}${listGroupItem} + ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${slateScope}${listGroupHorizontalXxl} > ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${slateScope}${listGroupHorizontalXxl} > ${slateScope}${listGroupItem} + ${slateScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${slateScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${slateScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${slateScope}${carouselFade} ${slateScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${slateScope}${carouselIndicators} ${slateScope}${active}`, {
	opacity: '1',
})

globalStyle(`${slateScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${slateScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${slateScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${slateScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${slateScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${slateScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${slateScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${slateScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${slateScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${slateScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${slateScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${slateScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${slateScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${slateScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${slateScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${slateScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${slateScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${slateScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${slateScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${slateScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${slateScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${slateScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${slateScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${slateScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${slateScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${slateScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${slateScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${slateScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${slateScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${slateScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${slateScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${slateScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${slateScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${slateScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${slateScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${slateScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${slateScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${slateScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${slateScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${slateScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${slateScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${slateScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${slateScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${slateScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${slateScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${slateScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${slateScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${slateScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${slateScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${slateScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${slateScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${slateScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${slateScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${slateScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${slateScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${slateScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${slateScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${slateScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${slateScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${slateScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${slateScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${slateScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${slateScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${slateScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${slateScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${slateScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${slateScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${slateScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${slateScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${slateScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${slateScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${slateScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${slateScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${slateScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${slateScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${slateScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${slateScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${slateScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${slateScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${slateScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${slateScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${slateScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${slateScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${slateScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${slateScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${slateScope}${btn}:not([disabled]):not(${disabled})${active}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
	boxShadow: 'none',
})

globalStyle(`${slateScope}${btn}${disabled}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
	boxShadow: 'none',
})

globalStyle(`${slateScope}${btn}:not([disabled]):not(${disabled}):active`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btn}:not([disabled]):not(${disabled}):active:hover`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btn}:not([disabled]):not(${disabled})${active}:hover`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btnPrimary}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnPrimary}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#25282c, #292c30 40%, #2b2f32)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnPrimary}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#25282c, #292c30 40%, #2b2f32)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#666d72, #6e757a 40%, #737a80)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#4e5357, #555b5f 40%, #5a6065)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#4e5357, #555b5f 40%, #5a6065)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#52a552, #58b058 40%, #5cb85c)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#3f7d3f, #458945 40%, #499149)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#3f7d3f, #458945 40%, #499149)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#4ca1ba, #52adc8 40%, #56b4d1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#3a7b8e, #40869b 40%, #438ea4)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#3a7b8e, #40869b 40%, #438ea4)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#d07c05, #df8505 40%, #e98b06)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#9f5f04, #ae6804 40%, #b86e04)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#9f5f04, #ae6804 40%, #b86e04)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#c8504c, #d65652 40%, #e05956)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#983d3a, #a74340 40%, #b04643)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#983d3a, #a74340 40%, #b04643)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#c4c6c9, #d2d4d7 40%, #dbdee1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#959799, #a3a5a7 40%, #acafb1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#959799, #a3a5a7 40%, #acafb1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#212428, #23272b 40%, #25282d)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#191c1f, #1b1e22 40%, #1d2024)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#191c1f, #1b1e22 40%, #1d2024)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnGroup} ${slateScope}${btn}${active}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btnGroupVertical} ${slateScope}${btn}${active}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}:not([disabled]):not(${disabled}):focus`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}:not([disabled]):not(${disabled}):active`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}:not([disabled]):not(${disabled})${active}`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})

globalStyle(`${slateScope}${badge}${bgLight}`, {
	color: '#272b30',
})
