import { globalStyle } from '@vanilla-extract/css'
import { simplexScope } from '../../scope.css'

import {
	display1,
	display2,
	display3,
	display4,
	display5,
	display6,
} from '../../../../theme-contract/contents/display/contract.css'

globalStyle(`${simplexScope}${display1}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.625rem + 4.5vw)',
})

globalStyle(`${simplexScope}${display1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '5rem',
		},
	},
})

globalStyle(`${simplexScope}${display2}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.575rem + 3.9vw)',
})

globalStyle(`${simplexScope}${display2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4.5rem',
		},
	},
})

globalStyle(`${simplexScope}${display3}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.525rem + 3.3vw)',
})

globalStyle(`${simplexScope}${display3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

globalStyle(`${simplexScope}${display4}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.475rem + 2.7vw)',
})

globalStyle(`${simplexScope}${display4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3.5rem',
		},
	},
})

globalStyle(`${simplexScope}${display5}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${simplexScope}${display5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${simplexScope}${display6}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${simplexScope}${display6}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})
