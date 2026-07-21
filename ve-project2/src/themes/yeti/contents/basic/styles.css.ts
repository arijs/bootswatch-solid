import { globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${yetiScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${yetiScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${yetiScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${yetiScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${yetiScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#888',
})

globalStyle(`${yetiScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${yetiScope}${blockquoteFooter}`, {
	color: '#888',
})

globalStyle(`${yetiScope}${smallText}`, {
	fontSize: '0.875em',
})
