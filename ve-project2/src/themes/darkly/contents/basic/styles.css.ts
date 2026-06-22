import { globalStyle } from '@vanilla-extract/css'
import { darklyScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${darklyScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${darklyScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${darklyScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${darklyScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${darklyScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#888',
})

globalStyle(`${darklyScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${darklyScope}${blockquoteFooter}`, {
	color: '#888',
})

globalStyle(`${darklyScope}${smallText}`, {
	fontSize: '0.875em',
})
