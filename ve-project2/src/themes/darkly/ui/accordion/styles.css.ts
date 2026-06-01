import { globalStyle } from '@vanilla-extract/css'
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
import {
	h4,
} from '../../../../theme-contract/contents/heading/contract.css'
import {
	accordion,
	accordionBody,
	accordionButton,
	accordionButtonCollapsed,
	accordionCollapse,
	accordionCollapseShow,
	accordionHeader,
	accordionItem,
} from '../../../../theme-contract/ui/accordion/contract.css'
import {
	collapse,
} from '../../../../theme-contract/ui/navbar/contract.css'
import { darklyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/accordion
// Review [UNMAPPED] and [DELTA] comments before committing.

globalStyle(`${darklyScope}${collapse}:not(${accordionCollapseShow})`, {
	display: "none",
})

globalStyle(`${darklyScope}${accordion}`, {
	vars: {
		[varBsAccordionColor]: varBsBodyColor,
		[varBsAccordionBg]: varBsBodyBg,
		[varBsAccordionTransition]: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease",
		[varBsAccordionBorderColor]: varBsBorderColor,
		[varBsAccordionBorderWidth]: varBsBorderWidth,
		[varBsAccordionBorderRadius]: varBsBorderRadius,
		[varBsAccordionInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
		[varBsAccordionBtnPaddingX]: "1.25rem",
		[varBsAccordionBtnPaddingY]: "1rem",
		[varBsAccordionBtnColor]: varBsBodyColor,
		[varBsAccordionBtnBg]: varBsAccordionBg,
		[varBsAccordionBtnIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
		[varBsAccordionBtnIconWidth]: "1.25rem",
		[varBsAccordionBtnIconTransform]: "rotate(-180deg)",
		[varBsAccordionBtnIconTransition]: "transform 0.2s ease-in-out",
		[varBsAccordionBtnActiveIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23162433' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
		[varBsAccordionBtnFocusBoxShadow]: "0 0 0 0.25rem rgba(55, 90, 127, 0.25)",
		[varBsAccordionBodyPaddingX]: "1.25rem",
		[varBsAccordionBodyPaddingY]: "1rem",
		[varBsAccordionActiveColor]: "#162433",
		[varBsAccordionActiveBg]: "#d7dee5",
	},
})

globalStyle(`${darklyScope}${accordionButton}`, {
	position: "relative",
	display: "flex",
	alignItems: "center",
	width: "100%",
	padding: `${varBsAccordionBtnPaddingY} ${varBsAccordionBtnPaddingX}`,
	fontSize: "1rem",
	color: varBsAccordionBtnColor,
	textAlign: "left",
	backgroundColor: varBsAccordionBtnBg,
	border: 0,
	borderRadius: 0,
	overflowAnchor: "none",
	transition: varBsAccordionTransition,
})

globalStyle(`${darklyScope}${accordionButton}:not(${accordionButtonCollapsed})`, {
	color: varBsAccordionActiveColor,
	backgroundColor: varBsAccordionActiveBg,
	boxShadow: `inset 0 calc(-1 * ${varBsAccordionBorderWidth}) 0 ${varBsAccordionBorderColor}`,
})

globalStyle(`${darklyScope}${accordionButton}:not(${accordionButtonCollapsed})::after`, {
	backgroundImage: varBsAccordionBtnActiveIcon,
	transform: varBsAccordionBtnIconTransform,
})

globalStyle(`${darklyScope}${accordionButton}::after`, {
	flexShrink: 0,
	width: varBsAccordionBtnIconWidth,
	height: varBsAccordionBtnIconWidth,
	marginLeft: "auto",
	content: "\"\"",
	backgroundImage: varBsAccordionBtnIcon,
	backgroundRepeat: "no-repeat",
	backgroundSize: varBsAccordionBtnIconWidth,
	transition: varBsAccordionBtnIconTransition,
})

globalStyle(`${darklyScope}${accordionButton}:hover`, {
	zIndex: 2,
})

globalStyle(`${darklyScope}${accordionButton}:focus`, {
	zIndex: 3,
	outline: 0,
	boxShadow: varBsAccordionBtnFocusBoxShadow,
})

globalStyle(`${darklyScope}${accordionHeader}`, {
	marginBottom: 0,
})

globalStyle(`${darklyScope}${accordionHeader}${h4}`, {
	marginBottom: 0,
})

globalStyle(`${darklyScope}${accordionItem}`, {
	color: varBsAccordionColor,
	backgroundColor: varBsAccordionBg,
	border: `${varBsAccordionBorderWidth} solid ${varBsAccordionBorderColor}`,
})

globalStyle(`${darklyScope}${accordionItem}:first-of-type`, {
	borderTopLeftRadius: varBsAccordionBorderRadius,
	borderTopRightRadius: varBsAccordionBorderRadius,
})

globalStyle(`${darklyScope}${accordionItem}:first-of-type > ${darklyScope}${accordionHeader} ${darklyScope}${accordionButton}`, {
	borderTopLeftRadius: varBsAccordionInnerBorderRadius,
	borderTopRightRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${darklyScope}${accordionItem}:not(:first-of-type)`, {
	borderTop: 0,
})

globalStyle(`${darklyScope}${accordionItem}:last-of-type`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${darklyScope}${accordionItem}:last-of-type > ${darklyScope}${accordionHeader} ${darklyScope}${accordionButton}${accordionButtonCollapsed}`, {
	borderBottomRightRadius: varBsAccordionInnerBorderRadius,
	borderBottomLeftRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${darklyScope}${accordionItem}:last-of-type > ${darklyScope}${accordionCollapse}`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${darklyScope}${accordionBody}`, {
	padding: `${varBsAccordionBodyPaddingY} ${varBsAccordionBodyPaddingX}`,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
globalStyle(`.accordion-flush > ${darklyScope}${accordionItem}`, {
	borderRight: 0,
	borderLeft: 0,
	borderRadius: 0,
})

globalStyle(`.accordion-flush > ${darklyScope}${accordionItem}:first-child`, {
	borderTop: 0,
})

globalStyle(`.accordion-flush > ${darklyScope}${accordionItem}:last-child`, {
	borderBottom: 0,
})

globalStyle(`.accordion-flush > ${darklyScope}${accordionItem} > ${darklyScope}${accordionCollapse}`, {
	borderRadius: 0,
})

globalStyle(`.accordion-flush > ${darklyScope}${accordionItem} > ${darklyScope}${accordionHeader} ${darklyScope}${accordionButton}`, {
	borderRadius: 0,
})

globalStyle(`.accordion-flush > ${darklyScope}${accordionItem} > ${darklyScope}${accordionHeader} ${darklyScope}${accordionButton}${accordionButtonCollapsed}`, {
	borderRadius: 0,
})
