import { globalStyle } from '@vanilla-extract/css'
import { h4 } from '../../../../theme-contract/contents/contract.css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsPrimaryBgSubtle,
	varBsPrimaryRgb,
	varBsPrimaryTextEmphasis,
} from '../../../../theme-contract/_vars.css'
import {
	accordion,
	accordionBody,
	accordionButton,
	accordionButtonCollapsed,
	accordionCollapse,
	accordionCollapseShow,
	accordionCollapsing,
	accordionHeader,
	accordionItem,
} from '../../../../theme-contract/ui/accordion/contract.css'
import {
	varBsAccordionActiveBg,
	varBsAccordionActiveColor,
	varBsAccordionBg,
	varBsAccordionBodyPaddingX,
	varBsAccordionBodyPaddingY,
	varBsAccordionBorderColor,
	varBsAccordionBorderRadius,
	varBsAccordionBorderWidth,
	varBsAccordionBtnActiveIcon,
	varBsAccordionBtnBg,
	varBsAccordionBtnColor,
	varBsAccordionBtnFocusBoxShadow,
	varBsAccordionBtnIcon,
	varBsAccordionBtnIconTransform,
	varBsAccordionBtnIconTransition,
	varBsAccordionBtnIconWidth,
	varBsAccordionBtnPaddingX,
	varBsAccordionBtnPaddingY,
	varBsAccordionColor,
	varBsAccordionInnerBorderRadius,
	varBsAccordionTransition,
} from '../../../../theme-contract/ui/accordion/_vars.css'
import { quartzScope } from '../../scope.css'

// Quartz icon SVGs: white chevron (normal), dark-pink (#5d1434) chevron (active)
const quartzBtnIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")"
const quartzBtnActiveIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%235d1434' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")"

globalStyle(`${quartzScope}${accordion}`, {
	vars: {
		[varBsAccordionColor]: varBsBodyColor,
		[varBsAccordionBg]: varBsBodyBg,
		[varBsAccordionTransition]:
			'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease',
		[varBsAccordionBorderColor]: varBsBorderColor,
		[varBsAccordionBorderWidth]: varBsBorderWidth,
		[varBsAccordionBorderRadius]: varBsBorderRadius,
		[varBsAccordionInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
		[varBsAccordionBtnPaddingX]: '1.25rem',
		[varBsAccordionBtnPaddingY]: '1rem',
		[varBsAccordionBtnColor]: varBsBodyColor,
		[varBsAccordionBtnBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsAccordionBtnIcon]: quartzBtnIcon,
		[varBsAccordionBtnIconWidth]: '1.25rem',
		[varBsAccordionBtnIconTransform]: 'rotate(-180deg)',
		[varBsAccordionBtnIconTransition]: 'transform 0.2s ease-in-out',
		[varBsAccordionBtnActiveIcon]: quartzBtnActiveIcon,
		[varBsAccordionBtnFocusBoxShadow]: `0 0 0 0.25rem rgba(${varBsPrimaryRgb}, 0.25)`,
		[varBsAccordionBodyPaddingX]: '1.25rem',
		[varBsAccordionBodyPaddingY]: '1rem',
		[varBsAccordionActiveColor]: '#fff',
		[varBsAccordionActiveBg]: '#e83283',
	},
})

// Quartz: accordion-item gets glass treatment but with box-shadow: none
globalStyle(`${quartzScope}${accordionItem}`, {
	border: 'none',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	backdropFilter: 'blur(5px)',
	boxShadow: 'none',
	color: varBsAccordionColor,
})

globalStyle(`${quartzScope}${accordionItem}:first-of-type`, {
	borderTopLeftRadius: varBsAccordionBorderRadius,
	borderTopRightRadius: varBsAccordionBorderRadius,
})

globalStyle(`${quartzScope}${accordionItem}:not(:first-of-type)`, {
	borderTop: 0,
})

globalStyle(`${quartzScope}${accordionItem}:last-of-type`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${quartzScope}${accordionHeader}`, {
	marginBottom: 0,
})

globalStyle(`${quartzScope}${accordionHeader}${h4}`, {
	marginBottom: 0,
})

globalStyle(`${quartzScope}${accordionButton}`, {
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	padding: `${varBsAccordionBtnPaddingY} ${varBsAccordionBtnPaddingX}`,
	fontSize: '1rem',
	fontFamily: 'inherit',
	fontWeight: 400,
	lineHeight: 'inherit',
	color: varBsAccordionBtnColor,
	textAlign: 'left',
	backgroundColor: varBsAccordionBtnBg,
	border: 0,
	borderRadius: 0,
	overflowAnchor: 'none',
	transition: 'none',
})

globalStyle(`${quartzScope}${accordionButton}:not(${accordionButtonCollapsed})`, {
	color: varBsAccordionActiveColor,
	backgroundColor: varBsAccordionActiveBg,
	boxShadow: `inset 0 calc(-1 * ${varBsAccordionBorderWidth}) 0 ${varBsAccordionBorderColor}`,
	borderBottomRightRadius: 0,
	borderBottomLeftRadius: 0,
})

globalStyle(`${quartzScope}${accordionButton}:focus`, {
	zIndex: 3,
	outline: 0,
	boxShadow: varBsAccordionBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${accordionButton}:hover`, {
	zIndex: 2,
})

globalStyle(`${quartzScope}${accordionButton}::after`, {
	flexShrink: 0,
	width: varBsAccordionBtnIconWidth,
	height: varBsAccordionBtnIconWidth,
	marginLeft: 'auto',
	content: '',
	backgroundImage: varBsAccordionBtnIcon,
	backgroundRepeat: 'no-repeat',
	backgroundSize: varBsAccordionBtnIconWidth,
	transition: varBsAccordionBtnIconTransition,
})

globalStyle(`${quartzScope}${accordionButton}:not(${accordionButtonCollapsed})::after`, {
	backgroundImage: varBsAccordionBtnActiveIcon,
	transform: varBsAccordionBtnIconTransform,
})

globalStyle(`${quartzScope}${accordionCollapse}:not(${accordionCollapseShow})`, {
	display: 'none',
})

globalStyle(`${quartzScope}${accordionCollapsing}`, {
	height: 0,
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(
	`${quartzScope}${accordionItem}:first-of-type > ${accordionHeader} ${accordionButton}`,
	{
		borderTopLeftRadius: varBsAccordionInnerBorderRadius,
		borderTopRightRadius: varBsAccordionInnerBorderRadius,
	},
)

globalStyle(
	`${quartzScope}${accordionItem}:last-of-type > ${accordionHeader} ${accordionButton}${accordionButtonCollapsed}`,
	{
		borderBottomRightRadius: varBsAccordionInnerBorderRadius,
		borderBottomLeftRadius: varBsAccordionInnerBorderRadius,
	},
)

globalStyle(`${quartzScope}${accordionItem}:last-of-type > ${accordionCollapse}`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${quartzScope}${accordionBody}`, {
	padding: `${varBsAccordionBodyPaddingY} ${varBsAccordionBodyPaddingX}`,
})
