import { globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${lumenScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${lumenScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${lumenScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${lumenScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${lumenScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#999',
})

globalStyle(`${lumenScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${lumenScope}${blockquoteFooter}`, {
	color: '#999',
})

globalStyle(`${lumenScope}${smallText}`, {
	fontSize: '0.875em',
})
