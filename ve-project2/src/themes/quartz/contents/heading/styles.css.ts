import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${quartzScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${quartzScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${quartzScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${quartzScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${quartzScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${quartzScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${quartzScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${quartzScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${quartzScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${quartzScope}${clsH6}`, {
	fontSize: '1rem',
})
