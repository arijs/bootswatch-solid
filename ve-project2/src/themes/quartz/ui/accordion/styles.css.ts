import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
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

import { link } from '../../../../theme-contract/contents/basic/contract.css'

import { accordionFlush } from '../../../../theme-contract/literal/contract.css'
import {
	accordion,
	accordionBody,
	accordionButton,
	accordionButtonCollapsed,
	accordionCollapse,
	accordionHeader,
	accordionItem,
} from '../../../../theme-contract/ui/accordion/contract.css'

globalStyle(`${quartzScope}${accordion}`, {
	vars: {
		[varBsAccordionColor]: varBsBodyColor,
		[varBsAccordionBg]: varBsBodyBg,
		[varBsAccordionTransition]: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease',
		[varBsAccordionBorderColor]: varBsBorderColor,
		[varBsAccordionBorderWidth]: varBsBorderWidth,
		[varBsAccordionBorderRadius]: varBsBorderRadius,
		[varBsAccordionInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
		[varBsAccordionBtnPaddingX]: '1.25rem',
		[varBsAccordionBtnPaddingY]: '1rem',
		[varBsAccordionBtnColor]: varBsBodyColor,
		[varBsAccordionBtnBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnIconWidth]: '1.25rem',
		[varBsAccordionBtnIconTransform]: 'rotate(-180deg)',
		[varBsAccordionBtnIconTransition]: 'transform 0.2s ease-in-out',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%235d1434\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnFocusBoxShadow]: '0 0 0 0.25rem rgba(232, 50, 131, 0.25)',
		[varBsAccordionBodyPaddingX]: '1.25rem',
		[varBsAccordionBodyPaddingY]: '1rem',
		[varBsAccordionActiveColor]: '#fff',
		[varBsAccordionActiveBg]: '#e83283',
	},
})

globalStyle(`${quartzScope}${accordionButton}`, {
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	padding: `${varBsAccordionBtnPaddingY} ${varBsAccordionBtnPaddingX}`,
	fontSize: '1rem',
	color: varBsAccordionBtnColor,
	textAlign: 'left',
	backgroundColor: varBsAccordionBtnBg,
	border: '0',
	borderRadius: '0',
	overflowAnchor: 'none',
	transition: varBsAccordionTransition,
})

globalStyle(`${quartzScope}${accordionButton}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${accordionButton}:not(${accordionButtonCollapsed})`, {
	color: varBsAccordionActiveColor,
	backgroundColor: varBsAccordionActiveBg,
	boxShadow: `inset 0 calc(-1 * ${varBsAccordionBorderWidth}) 0 ${varBsAccordionBorderColor}`,
})

globalStyle(`${quartzScope}${accordionButton}:not(${accordionButtonCollapsed})::after`, {
	backgroundImage: varBsAccordionBtnActiveIcon,
	transform: varBsAccordionBtnIconTransform,
})

globalStyle(`${quartzScope}${accordionButton}::after`, {
	flexShrink: '0',
	width: varBsAccordionBtnIconWidth,
	height: varBsAccordionBtnIconWidth,
	marginLeft: 'auto',
	content: '""',
	backgroundImage: varBsAccordionBtnIcon,
	backgroundRepeat: 'no-repeat',
	backgroundSize: varBsAccordionBtnIconWidth,
	transition: varBsAccordionBtnIconTransition,
})

globalStyle(`${quartzScope}${accordionButton}::after`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${accordionButton}:hover`, {
	zIndex: '2',
})

globalStyle(`${quartzScope}${accordionButton}:focus`, {
	zIndex: '3',
	outline: '0',
	boxShadow: varBsAccordionBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${accordionHeader}`, {
	marginBottom: '0',
})

globalStyle(`${quartzScope}${accordionItem}`, {
	color: varBsAccordionColor,
	backgroundColor: varBsAccordionBg,
	border: `${varBsAccordionBorderWidth} solid ${varBsAccordionBorderColor}`,
})

globalStyle(`${quartzScope}${accordionItem}:first-of-type`, {
	borderTopLeftRadius: varBsAccordionBorderRadius,
	borderTopRightRadius: varBsAccordionBorderRadius,
})

globalStyle(`${quartzScope}${accordionItem}:first-of-type > ${quartzScope}${accordionHeader} ${quartzScope}${accordionButton}`, {
	borderTopLeftRadius: varBsAccordionInnerBorderRadius,
	borderTopRightRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${quartzScope}${accordionItem}:not(:first-of-type)`, {
	borderTop: '0',
})

globalStyle(`${quartzScope}${accordionItem}:last-of-type`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${quartzScope}${accordionItem}:last-of-type > ${quartzScope}${accordionHeader} ${quartzScope}${accordionButton}${accordionButtonCollapsed}`, {
	borderBottomRightRadius: varBsAccordionInnerBorderRadius,
	borderBottomLeftRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${quartzScope}${accordionItem}:last-of-type > ${quartzScope}${accordionCollapse}`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${quartzScope}${accordionBody}`, {
	padding: `${varBsAccordionBodyPaddingY} ${varBsAccordionBodyPaddingX}`,
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem}`, {
	borderRight: '0',
	borderLeft: '0',
	borderRadius: '0',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem}:first-child`, {
	borderTop: '0',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem}:last-child`, {
	borderBottom: '0',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem} > ${quartzScope}${accordionCollapse}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem} > ${quartzScope}${accordionHeader} ${quartzScope}${accordionButton}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}[data-bs-theme=dark] ${quartzScope}${accordionButton}::after`, {
	vars: {
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23f184b5\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23f184b5\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${accordionItem}`, {
	border: 'none',
	boxShadow: 'none',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${accordionItem} ${quartzScope}${link}`, {
	color: '#fff',
})
