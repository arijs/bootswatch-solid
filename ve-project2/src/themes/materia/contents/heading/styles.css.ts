import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderWidth,
	varBsLinkColor,
	varBsLinkHoverColor,
} from '../../../../theme-contract/_vars.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	horizontalRule,
	horizontalRuleCard,
	link,
	paragraph,
	small,
} from '../../../../theme-contract/contents/contract.css'
import { materiaScope } from '../../scope.css'

const headingBase = {
	marginTop: 0,
	marginBottom: '0.5rem',
	fontWeight: 500,
	lineHeight: 1.2,
	color: 'inherit',
} as const

globalStyle(`${materiaScope}${horizontalRule}`, {
	margin: '1rem 0',
	color: 'inherit',
	border: 0,
	borderTop: `${varBsBorderWidth} solid`,
	opacity: 0.25,
})

globalStyle(`${materiaScope}${horizontalRuleCard}`, {
	marginRight: 0,
	marginLeft: 0,
})

globalStyle(`${materiaScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: '1em',
})

globalStyle(`${materiaScope}${link}`, {
	color: varBsLinkColor,
	textDecoration: 'underline',
})

globalStyle(`${materiaScope}${link}:hover`, {
	color: varBsLinkHoverColor,
})

globalStyle(`${materiaScope}${small}`, {
	fontSize: '0.875em',
})

globalStyle(`${materiaScope}${h1}`, {
	...headingBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '2.5rem' } },
})

globalStyle(`${materiaScope}${h2}`, {
	...headingBase,
	fontSize: 'calc(1.325rem + 0.9vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '2rem' } },
})

globalStyle(`${materiaScope}${h3}`, {
	...headingBase,
	fontSize: 'calc(1.3rem + 0.6vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '1.75rem' } },
})

globalStyle(`${materiaScope}${h4}`, {
	...headingBase,
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '1.5rem' } },
})

globalStyle(`${materiaScope}${h5}`, {
	...headingBase,
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${h6}`, {
	...headingBase,
	fontSize: '1rem',
})
