import { globalStyle } from '@vanilla-extract/css'
import { journalScope } from '../../scope.css'

import {
	display1,
	display2,
	display3,
	display4,
	display5,
	display6,
} from '../../../../theme-contract/contents/display/contract.css'

globalStyle(`${journalScope}${display1}`, {
	fontWeight: '300',
	lineHeight: '1.1',
	fontSize: 'calc(1.625rem + 4.5vw)',
})

globalStyle(`${journalScope}${display1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '5rem',
		},
	},
})

globalStyle(`${journalScope}${display2}`, {
	fontWeight: '300',
	lineHeight: '1.1',
	fontSize: 'calc(1.575rem + 3.9vw)',
})

globalStyle(`${journalScope}${display2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4.5rem',
		},
	},
})

globalStyle(`${journalScope}${display3}`, {
	fontWeight: '300',
	lineHeight: '1.1',
	fontSize: 'calc(1.525rem + 3.3vw)',
})

globalStyle(`${journalScope}${display3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

globalStyle(`${journalScope}${display4}`, {
	fontWeight: '300',
	lineHeight: '1.1',
	fontSize: 'calc(1.475rem + 2.7vw)',
})

globalStyle(`${journalScope}${display4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3.5rem',
		},
	},
})

globalStyle(`${journalScope}${display5}`, {
	fontWeight: '300',
	lineHeight: '1.1',
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${journalScope}${display5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${journalScope}${display6}`, {
	fontWeight: '300',
	lineHeight: '1.1',
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${journalScope}${display6}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})
