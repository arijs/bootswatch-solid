import { globalStyle } from '@vanilla-extract/css'
import { mintyScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${mintyScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${mintyScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${mintyScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${mintyScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${mintyScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#888',
})

globalStyle(`${mintyScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${mintyScope}${smallText}`, {
	fontSize: '0.875em',
})
