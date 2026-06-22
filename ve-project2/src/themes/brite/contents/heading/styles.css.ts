import { globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${briteScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${briteScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${briteScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${briteScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${briteScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${briteScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${briteScope}${clsH1}`, {
	fontSize: 'calc(1.34375rem + 1.125vw)',
})

globalStyle(`${briteScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.1875rem',
		},
	},
})

globalStyle(`${briteScope}${clsH2}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${briteScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${briteScope}${clsH3}`, {
	fontSize: 'calc(1.278125rem + 0.3375vw)',
})

globalStyle(`${briteScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.53125rem',
		},
	},
})

globalStyle(`${briteScope}${clsH4}`, {
	fontSize: 'calc(1.25625rem + 0.075vw)',
})

globalStyle(`${briteScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.3125rem',
		},
	},
})

globalStyle(`${briteScope}${clsH5}`, {
	fontSize: '1.09375rem',
})

globalStyle(`${briteScope}${clsH6}`, {
	fontSize: '0.875rem',
})
