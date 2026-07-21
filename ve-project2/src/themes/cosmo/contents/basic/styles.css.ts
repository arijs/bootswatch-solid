import { globalStyle } from '@vanilla-extract/css'
import { cosmoScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${cosmoScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${cosmoScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${cosmoScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${cosmoScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${cosmoScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#868e96',
})

globalStyle(`${cosmoScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${cosmoScope}${smallText}`, {
	fontSize: '0.875em',
})
