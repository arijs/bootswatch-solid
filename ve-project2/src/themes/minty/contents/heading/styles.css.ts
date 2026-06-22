import { globalStyle } from '@vanilla-extract/css'
import { mintyScope } from '../../scope.css'

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

globalStyle(`${mintyScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${mintyScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${mintyScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${mintyScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${mintyScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${mintyScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${mintyScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${mintyScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${mintyScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${mintyScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${mintyScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${mintyScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${mintyScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${mintyScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${mintyScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${mintyScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`${mintyScope}${card} ${mintyScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${card} ${mintyScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${card} ${mintyScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${card} ${mintyScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${card} ${mintyScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${card} ${mintyScope}${clsH6}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${listGroupItem} ${mintyScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${listGroupItem} ${mintyScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${listGroupItem} ${mintyScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${listGroupItem} ${mintyScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${listGroupItem} ${mintyScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${mintyScope}${listGroupItem} ${mintyScope}${clsH6}`, {
	color: 'inherit',
})
