import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${morphScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${morphScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${morphScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${morphScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${morphScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#7f8a99',
})

globalStyle(`${morphScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${morphScope}${smallText}`, {
	fontSize: '0.875em',
})
