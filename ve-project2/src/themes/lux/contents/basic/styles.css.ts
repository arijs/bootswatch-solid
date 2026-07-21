import { globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${luxScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${luxScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${luxScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${luxScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#919aa1',
})

globalStyle(`${luxScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${luxScope}${smallText}`, {
	fontSize: '0.875em',
})
