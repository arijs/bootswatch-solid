import { globalStyle } from '@vanilla-extract/css'
import { varBsLinkColor, varBsLinkHoverColor } from '../../../../theme-contract/_vars.css'
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
import { vaporScope } from '../../scope.css'

const headingBase = {
	marginTop: 0,
	marginBottom: '0.5rem',
	fontWeight: 500,
	lineHeight: 1.2,
	color: 'inherit',
	textShadow:
		'0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
} as const

// Source CSS literal conversion for generic hr. Vapor hard-codes a 1px top rule
// even though --bs-border-width is 0 in this theme.
globalStyle(`${vaporScope}${horizontalRule}`, {
	margin: '1rem 0',
	color: 'inherit',
	border: 0,
	borderTop: '1px solid',
	borderTopColor: '#6f42c1',
	opacity: 1,
	boxShadow:
		'0 0 2px rgba(111,66,193,0.9), 0 0 4px rgba(111,66,193,0.4), 0 0 1rem rgba(111,66,193,0.3)',
})

// Source CSS literal conversion for `.card > hr`.
globalStyle(`${vaporScope}${horizontalRuleCard}`, {
	marginRight: 0,
	marginLeft: 0,
})

// Source CSS literal conversion for generic p.
globalStyle(`${vaporScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

// Source CSS literal conversion for generic a and a:hover.
globalStyle(`${vaporScope}${link}`, {
	color: varBsLinkColor,
	textDecoration: 'underline',
})

globalStyle(`${vaporScope}${link}:hover`, {
	color: varBsLinkHoverColor,
})

// Source CSS literal conversion for `.small, small { font-size: 0.875em }`.
globalStyle(`${vaporScope}${small}`, {
	fontSize: '0.875em',
})

globalStyle(`${vaporScope}${h1}`, {
	...headingBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${vaporScope}${h2}`, {
	...headingBase,
	fontSize: 'calc(1.325rem + 0.9vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${vaporScope}${h3}`, {
	...headingBase,
	fontSize: 'calc(1.3rem + 0.6vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${vaporScope}${h4}`, {
	...headingBase,
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${vaporScope}${h5}`, {
	...headingBase,
	fontSize: '1.25rem',
})

globalStyle(`${vaporScope}${h6}`, {
	...headingBase,
	fontSize: '1rem',
})
