import { globalStyle } from '@vanilla-extract/css'
import { sketchyScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${sketchyScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sketchyScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sketchyScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sketchyScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sketchyScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sketchyScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sketchyScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${sketchyScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${sketchyScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${sketchyScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${sketchyScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${sketchyScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${sketchyScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${sketchyScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${sketchyScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${sketchyScope}${clsH6}`, {
	fontSize: '1rem',
})
