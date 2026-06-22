import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'
import { card } from '../../../../theme-contract/ui/card/contract.css'

globalStyle(`${morphScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${morphScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${morphScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${morphScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${morphScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${morphScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${morphScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${morphScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${morphScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${morphScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`${morphScope}${card} ${morphScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${clsH6}`, {
	color: 'inherit',
})
