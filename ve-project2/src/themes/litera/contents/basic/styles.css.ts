import { globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${literaScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${literaScope}${lead}`, {
	fontSize: 'calc(1.2625rem + 0.15vw)',
	fontWeight: '300',
})

globalStyle(`${literaScope}${lead}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: 'calc(1.2625rem + 0.15vw)',
})

globalStyle(`${literaScope}${clsBlockquote}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${literaScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#868e96',
})

globalStyle(`${literaScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${literaScope}${lead}`, {
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
	color: '#868e96',
})

globalStyle(`${literaScope}${smallText}`, {
	fontSize: '0.875em',
})
