import { globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${slateScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${slateScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${slateScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${slateScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${slateScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#7a8288',
})

globalStyle(`${slateScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${slateScope}${smallText}`, {
	fontSize: '0.875em',
})
