import { globalStyle } from '@vanilla-extract/css'
import { cosmoScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${cosmoScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cosmoScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cosmoScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cosmoScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cosmoScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cosmoScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cosmoScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${cosmoScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${cosmoScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${cosmoScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${cosmoScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${cosmoScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${cosmoScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${cosmoScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${cosmoScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${cosmoScope}${clsH6}`, {
	fontSize: '1rem',
})
