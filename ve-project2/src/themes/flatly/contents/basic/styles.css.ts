import { globalStyle } from '@vanilla-extract/css'
import { flatlyScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${flatlyScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${flatlyScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${flatlyScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${flatlyScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${flatlyScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#95a5a6',
})

globalStyle(`${flatlyScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${flatlyScope}${smallText}`, {
	fontSize: '0.875em',
})
