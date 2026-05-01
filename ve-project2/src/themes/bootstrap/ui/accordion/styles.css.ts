import { globalStyle } from '@vanilla-extract/css'
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
import { bootstrapScope } from '../../scope.css'

globalStyle(`${bootstrapScope}${accordion}`, {
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

globalStyle(`${bootstrapScope}${accordionItem}`, {
	color: varBsAccordionColor,
	backgroundColor: varBsAccordionBg,
	border: `${varBsAccordionBorderWidth} solid ${varBsAccordionBorderColor}`,
})

globalStyle(`${bootstrapScope}${accordionItem}:first-of-type`, {
	borderTopLeftRadius: varBsAccordionBorderRadius,
	borderTopRightRadius: varBsAccordionBorderRadius,
})

globalStyle(`${bootstrapScope}${accordionItem}:not(:first-of-type)`, {
	borderTop: 0,
})

globalStyle(`${bootstrapScope}${accordionItem}:last-of-type`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${bootstrapScope}${accordionHeader}`, {
	marginBottom: 0,
})

globalStyle(`${bootstrapScope}${accordionButton}`, {
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
})

globalStyle(`${bootstrapScope}${accordionButton}:not(${accordionButtonCollapsed})`, {
	color: varBsAccordionActiveColor,
	backgroundColor: varBsAccordionActiveBg,
	boxShadow: `inset 0 calc(-1 * ${varBsAccordionBorderWidth}) 0 ${varBsAccordionBorderColor}`,
	borderBottomRightRadius: 0,
	borderBottomLeftRadius: 0,
})

globalStyle(`${bootstrapScope}${accordionButton}:focus`, {
	zIndex: 3,
	outline: 0,
	boxShadow: varBsAccordionBtnFocusBoxShadow,
})

globalStyle(`${bootstrapScope}${accordionButton}:hover`, {
	zIndex: 2,
})

globalStyle(`${bootstrapScope}${accordionButton}::after`, {
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

globalStyle(`${bootstrapScope}${accordionButton}:not(${accordionButtonCollapsed})::after`, {
	backgroundImage: varBsAccordionBtnActiveIcon,
	transform: varBsAccordionBtnIconTransform,
})

globalStyle(`${bootstrapScope}${accordionCollapse}:not(${accordionCollapseShow})`, {
	display: 'none',
})

globalStyle(`${bootstrapScope}${accordionCollapsing}`, {
	height: 0,
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(
	`${bootstrapScope}${accordionItem}:first-of-type > ${accordionHeader} ${accordionButton}`,
	{
		borderTopLeftRadius: varBsAccordionInnerBorderRadius,
		borderTopRightRadius: varBsAccordionInnerBorderRadius,
	},
)

globalStyle(
	`${bootstrapScope}${accordionItem}:last-of-type > ${accordionHeader} ${accordionButton}${accordionButtonCollapsed}`,
	{
		borderBottomRightRadius: varBsAccordionInnerBorderRadius,
		borderBottomLeftRadius: varBsAccordionInnerBorderRadius,
	},
)

globalStyle(`${bootstrapScope}${accordionItem}:last-of-type > ${accordionCollapse}`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${bootstrapScope}${accordionBody}`, {
	padding: `${varBsAccordionBodyPaddingY} ${varBsAccordionBodyPaddingX}`,
})

globalStyle(`${bootstrapScope}${accordionBody} code`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
