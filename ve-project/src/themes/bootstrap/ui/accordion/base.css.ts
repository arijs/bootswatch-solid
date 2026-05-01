import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsCodeColor,
	varBsFontMonospace,
	varBsPrimaryBgSubtle,
	varBsPrimaryRgb,
	varBsPrimaryTextEmphasis,
} from '../../../../theme-contract/_vars.css'
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

export const accordion = style({
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
		[varBsAccordionBtnBg]: varBsAccordionBg,
		[varBsAccordionBtnIcon]:
			"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
		[varBsAccordionBtnIconWidth]: '1.25rem',
		[varBsAccordionBtnIconTransform]: 'rotate(-180deg)',
		[varBsAccordionBtnIconTransition]: 'transform 0.2s ease-in-out',
		[varBsAccordionBtnActiveIcon]:
			"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23052c65' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
		[varBsAccordionBtnFocusBoxShadow]: `0 0 0 0.25rem rgba(${varBsPrimaryRgb}, 0.25)`,
		[varBsAccordionBodyPaddingX]: '1.25rem',
		[varBsAccordionBodyPaddingY]: '1rem',
		[varBsAccordionActiveColor]: varBsPrimaryTextEmphasis,
		[varBsAccordionActiveBg]: varBsPrimaryBgSubtle,
	},
})

export const accordionItem = style({
	color: varBsAccordionColor,
	backgroundColor: varBsAccordionBg,
	border: `${varBsAccordionBorderWidth} solid ${varBsAccordionBorderColor}`,
	selectors: {
		'&:first-of-type': {
			borderTopLeftRadius: varBsAccordionBorderRadius,
			borderTopRightRadius: varBsAccordionBorderRadius,
		},
		'&:not(:first-of-type)': {
			borderTop: 0,
		},
		'&:last-of-type': {
			borderBottomRightRadius: varBsAccordionBorderRadius,
			borderBottomLeftRadius: varBsAccordionBorderRadius,
		},
	},
})

export const accordionHeader = style({
	marginBottom: 0,
})

export const accordionButtonCollapsed = style({})

export const accordionButton = style({
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
	transition: varBsAccordionTransition,
	selectors: {
		[`&:not(${accordionButtonCollapsed})`]: {
			color: varBsAccordionActiveColor,
			backgroundColor: varBsAccordionActiveBg,
			boxShadow: `inset 0 calc(-1 * ${varBsAccordionBorderWidth}) 0 ${varBsAccordionBorderColor}`,
		},
		'&:focus': {
			zIndex: 3,
			outline: 0,
			boxShadow: varBsAccordionBtnFocusBoxShadow,
		},
		'&:hover': {
			zIndex: 2,
		},
		'&::after': {
			flexShrink: 0,
			width: varBsAccordionBtnIconWidth,
			height: varBsAccordionBtnIconWidth,
			marginLeft: 'auto',
			content: '',
			backgroundImage: varBsAccordionBtnIcon,
			backgroundRepeat: 'no-repeat',
			backgroundSize: varBsAccordionBtnIconWidth,
			transition: varBsAccordionBtnIconTransition,
		},
		[`&:not(${accordionButtonCollapsed})::after`]: {
			backgroundImage: varBsAccordionBtnActiveIcon,
			transform: varBsAccordionBtnIconTransform,
		},
	},
})

globalStyle(`${accordionButton}:not(${accordionButtonCollapsed})`, {
	borderBottomRightRadius: 0,
	borderBottomLeftRadius: 0,
})

export const accordionCollapse = style({})

export const accordionCollapseShow = style({})

export const accordionCollapsing = style({
	height: 0,
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${accordionCollapse}:not(${accordionCollapseShow})`, {
	display: 'none',
})

globalStyle(`${accordionItem}:first-of-type > ${accordionHeader} ${accordionButton}`, {
	borderTopLeftRadius: varBsAccordionInnerBorderRadius,
	borderTopRightRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(
	`${accordionItem}:last-of-type > ${accordionHeader} ${accordionButton}${accordionButtonCollapsed}`,
	{
		borderBottomRightRadius: varBsAccordionInnerBorderRadius,
		borderBottomLeftRadius: varBsAccordionInnerBorderRadius,
	},
)

globalStyle(`${accordionItem}:last-of-type > ${accordionCollapse}`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

export const accordionBody = style({
	padding: `${varBsAccordionBodyPaddingY} ${varBsAccordionBodyPaddingX}`,
})

globalStyle(`${accordionBody} code`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
