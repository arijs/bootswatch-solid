import { globalStyle } from '@vanilla-extract/css'
import { journalScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'

globalStyle(`${journalScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`${journalScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`${journalScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`${journalScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`${journalScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`${journalScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`${journalScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${journalScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${journalScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${journalScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${journalScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${journalScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${journalScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${journalScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${journalScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${journalScope}${clsH6}`, {
	fontSize: '1rem',
})
