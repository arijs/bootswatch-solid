import { globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${slateScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${slateScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${slateScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${slateScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${slateScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${slateScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${slateScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${slateScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${slateScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${slateScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${slateScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${slateScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${slateScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${slateScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${slateScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${slateScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`${slateScope}${clsH1}`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`${slateScope}${clsH2}`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`${slateScope}${clsH3}`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`${slateScope}${clsH4}`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`${slateScope}${clsH5}`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`${slateScope}${clsH6}`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})
