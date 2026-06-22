import { globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

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

globalStyle(`${luxScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH1}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${luxScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${luxScope}${clsH2}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${luxScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${luxScope}${clsH3}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${luxScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${luxScope}${clsH4}`, {
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${clsH5}`, {
	fontSize: '1rem',
})

globalStyle(`${luxScope}${clsH6}`, {
	fontSize: '0.75rem',
})

globalStyle(`${luxScope}${clsH1}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH2}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH3}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH4}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH5}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH6}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH6}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH6}`, {
	color: 'inherit',
})
