import { globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${yetiScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${yetiScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${yetiScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${yetiScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${yetiScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${yetiScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${yetiScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${yetiScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${yetiScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${yetiScope}${clsH6}`, {
	fontSize: '1rem',
})
