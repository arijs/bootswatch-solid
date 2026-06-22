import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

import {
	varBsBorderColor,
	varBsBorderRadiusPill,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsDangerRgb,
	varBsDarkRgb,
	varBsGradient,
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
import { elInput } from '../../../../theme-contract/global-elements/contract.css'

import { formCheckInput, formSwitch } from '../../../../theme-contract/forms/contract.css'
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
	btnLink,
	btnOutlineDanger,
	btnOutlineDark,
	btnOutlineInfo,
	btnOutlineLight,
	btnOutlinePrimary,
	btnOutlineSecondary,
	btnOutlineSuccess,
	btnOutlineWarning,
	btnPrimary,
	btnSecondary,
	btnSuccess,
	btnWarning,
} from '../../../../theme-contract/ui/buttons/contract.css'
import { card } from '../../../../theme-contract/ui/card/contract.css'
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

globalStyle(`${materiaScope}${row}`, {
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

globalStyle(`${materiaScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${materiaScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${materiaScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${materiaScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${materiaScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${materiaScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${materiaScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${materiaScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${materiaScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${materiaScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	backgroundImage: 'none',
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${materiaScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
	backgroundImage: 'none',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${tabContent} > ${materiaScope}${active}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${accordionFlush} > ${materiaScope}${accordionItem} > ${materiaScope}${accordionHeader} ${materiaScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${materiaScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${materiaScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${materiaScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${materiaScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${materiaScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${materiaScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${materiaScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${materiaScope}${carouselIndicators} ${materiaScope}${active}`, {
	opacity: '1',
})

globalStyle(`${materiaScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${materiaScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${materiaScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${materiaScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${materiaScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${materiaScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${materiaScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${materiaScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${materiaScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${materiaScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${materiaScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${materiaScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${materiaScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${materiaScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${materiaScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${materiaScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${materiaScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${materiaScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${materiaScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${materiaScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${materiaScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${materiaScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${materiaScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${materiaScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${materiaScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${materiaScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${materiaScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${materiaScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${materiaScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${materiaScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${materiaScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${materiaScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${materiaScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${materiaScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${materiaScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${materiaScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${materiaScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${materiaScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${materiaScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${materiaScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${materiaScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${materiaScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${materiaScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${materiaScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${materiaScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${materiaScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${materiaScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${materiaScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${materiaScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${materiaScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${materiaScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${materiaScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${materiaScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${materiaScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${materiaScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${materiaScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=search]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=text]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=password]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=email]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=number]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=tel]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=search]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=text]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=password]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=email]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=number]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=tel]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=search]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=text]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=password]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=email]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=number]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=tel]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=search]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=text]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=password]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=email]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=number]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=tel]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=search]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=text]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=password]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=email]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=number]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=tel]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=search]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=text]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=password]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=email]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=number]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=tel]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=search]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=text]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=password]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=email]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=number]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=tel]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=search]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=text]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=password]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=email]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=number]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=tel]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${btnPrimary}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnSecondary}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnSuccess}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnInfo}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineInfo}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnWarning}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineWarning}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnDanger}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDanger}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnDark}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDark}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnLight}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineLight}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnLink}${disabled}:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${btnLink}${disabled}:active:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${btnSecondary}${disabled}`, {
	color: 'rgba(0, 0, 0, 0.4)',
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	opacity: '1',
})

globalStyle(`${materiaScope}${btnSecondary}${disabled}:hover`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${btnSecondary}${disabled}:focus`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${textSecondary}`, {
	color: '#bbb !important',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:hover:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus:not(${disabled})::after`, {
	boxShadow: '0 0 0 9px rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked:hover:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked:focus:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked:focus:not(${disabled})::after`, {
	boxShadow: '0 0 0 9px rgba(33, 150, 243, 0.2)',
})

globalStyle(`${materiaScope}${badge}${bgSecondary}`, {
	color: '#222',
})

globalStyle(`${materiaScope}${badge}${bgLight}`, {
	color: '#222',
})

globalStyle(`${materiaScope}${card}${borderDark}`, {
	borderWidth: '1px',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h6}`, {
	color: '#fff',
})
