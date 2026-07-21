import { globalStyle } from '@vanilla-extract/css'
import { simplexScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${simplexScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${simplexScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${simplexScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${simplexScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${simplexScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#777',
})

globalStyle(`${simplexScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${simplexScope}${smallText}`, {
	fontSize: '0.875em',
})
