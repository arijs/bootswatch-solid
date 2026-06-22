import { globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../../scope.css'

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

globalStyle(`${zephyrScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${zephyrScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${zephyrScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${zephyrScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${zephyrScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${zephyrScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${zephyrScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${zephyrScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${zephyrScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${zephyrScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${zephyrScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${zephyrScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${zephyrScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${zephyrScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${zephyrScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${zephyrScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`${zephyrScope}${listGroupItem} ${zephyrScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${listGroupItem} ${zephyrScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${listGroupItem} ${zephyrScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${listGroupItem} ${zephyrScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${listGroupItem} ${zephyrScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${listGroupItem} ${zephyrScope}${clsH6}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${card} ${zephyrScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${card} ${zephyrScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${card} ${zephyrScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${card} ${zephyrScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${card} ${zephyrScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${zephyrScope}${card} ${zephyrScope}${clsH6}`, {
	color: 'inherit',
})
