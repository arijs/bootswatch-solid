import { globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${sandstoneScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${sandstoneScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${sandstoneScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${sandstoneScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${sandstoneScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${sandstoneScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${sandstoneScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${sandstoneScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${sandstoneScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${sandstoneScope}${clsH6}`, {
	fontSize: '1rem',
})
