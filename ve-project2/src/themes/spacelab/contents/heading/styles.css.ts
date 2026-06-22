import { globalStyle } from '@vanilla-extract/css'
import { spacelabScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'
import { card } from '../../../../theme-contract/ui/card/contract.css'
import { listGroupItem } from '../../../../theme-contract/ui/list-group/contract.css'

globalStyle(`${spacelabScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${spacelabScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${spacelabScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${spacelabScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${spacelabScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${spacelabScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${spacelabScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${spacelabScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${spacelabScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${spacelabScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${spacelabScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${spacelabScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${spacelabScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${spacelabScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${spacelabScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${spacelabScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`${spacelabScope}${card} ${spacelabScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${card} ${spacelabScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${card} ${spacelabScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${card} ${spacelabScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${card} ${spacelabScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${card} ${spacelabScope}${clsH6}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${listGroupItem} ${spacelabScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${listGroupItem} ${spacelabScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${listGroupItem} ${spacelabScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${listGroupItem} ${spacelabScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${listGroupItem} ${spacelabScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${spacelabScope}${listGroupItem} ${spacelabScope}${clsH6}`, {
	color: 'inherit',
})
