import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderWidth,
	varBsLinkColor,
	varBsLinkHoverColor,
} from '../../../theme-contract/_vars.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	horizontalRuleCard,
	horizontalRule,
	link,
	paragraph,
	small,
} from '../../../theme-contract/contents/contract.css'
import { bootstrapScope } from '../scope.css'

const headingBase = {
	marginTop: 0,
	marginBottom: '0.5rem',
	fontWeight: 500,
	lineHeight: 1.2,
	color: 'inherit',
} as const

// Source CSS literal conversion for generic hr.
globalStyle(`${bootstrapScope}${horizontalRule}`, {
	margin: '1rem 0',
	color: 'inherit',
	border: 0,
	borderTop: `${varBsBorderWidth} solid`,
	opacity: 0.25,
})

// Source CSS literal conversion for `.card > hr`.
globalStyle(`${bootstrapScope}${horizontalRuleCard}`, {
	marginRight: 0,
	marginLeft: 0,
})

// Source CSS literal conversion for generic p.
globalStyle(`${bootstrapScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

// Source CSS literal conversion for generic a and a:hover.
globalStyle(`${bootstrapScope}${link}`, {
	color: varBsLinkColor,
	textDecoration: 'underline',
})

globalStyle(`${bootstrapScope}${link}:hover`, {
	color: varBsLinkHoverColor,
})

// Source CSS literal conversion for `.small, small { font-size: 0.875em }`.
globalStyle(`${bootstrapScope}${small}`, {
	fontSize: '0.875em',
})

globalStyle(`${bootstrapScope}${h1}`, {
	...headingBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${bootstrapScope}${h2}`, {
	...headingBase,
	fontSize: 'calc(1.325rem + 0.9vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${bootstrapScope}${h3}`, {
	...headingBase,
	fontSize: 'calc(1.3rem + 0.6vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${bootstrapScope}${h4}`, {
	...headingBase,
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${bootstrapScope}${h5}`, {
	...headingBase,
	fontSize: '1.25rem',
})

globalStyle(`${bootstrapScope}${h6}`, {
	...headingBase,
	fontSize: '1rem',
})
