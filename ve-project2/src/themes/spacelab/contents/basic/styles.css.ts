import { globalStyle } from '@vanilla-extract/css'
import { spacelabScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${spacelabScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${spacelabScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${spacelabScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${spacelabScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${spacelabScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#777',
})

globalStyle(`${spacelabScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${spacelabScope}${smallText}`, {
	fontSize: '0.875em',
})
