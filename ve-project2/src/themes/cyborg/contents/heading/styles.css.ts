import { globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${cyborgScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH1}`, {
	fontSize: 'calc(1.525rem + 3.3vw)',
})

globalStyle(`${cyborgScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH2}`, {
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${cyborgScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH3}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${cyborgScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH4}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${cyborgScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH5}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${cyborgScope}${clsH5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH6}`, {
	fontSize: '1rem',
})
