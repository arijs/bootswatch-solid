import { globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${literaScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH1}`, {
	fontSize: 'calc(1.4rem + 1.8vw)',
})

globalStyle(`${literaScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.75rem',
		},
	},
})

globalStyle(`${literaScope}${clsH2}`, {
	fontSize: 'calc(1.345rem + 1.14vw)',
})

globalStyle(`${literaScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.2rem',
		},
	},
})

globalStyle(`${literaScope}${clsH3}`, {
	fontSize: 'calc(1.3175rem + 0.81vw)',
})

globalStyle(`${literaScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.925rem',
		},
	},
})

globalStyle(`${literaScope}${clsH4}`, {
	fontSize: 'calc(1.29rem + 0.48vw)',
})

globalStyle(`${literaScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.65rem',
		},
	},
})

globalStyle(`${literaScope}${clsH5}`, {
	fontSize: 'calc(1.2625rem + 0.15vw)',
})

globalStyle(`${literaScope}${clsH5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}${clsH6}`, {
	fontSize: '1.1rem',
})
