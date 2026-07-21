import { globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${cyborgScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${cyborgScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${cyborgScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${cyborgScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${cyborgScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#555',
})

globalStyle(`${cyborgScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${cyborgScope}${smallText}`, {
	fontSize: '0.875em',
})
