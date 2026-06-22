import { globalStyle } from '@vanilla-extract/css'
import { superheroScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${superheroScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${superheroScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${superheroScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${superheroScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${superheroScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#4e5d6c',
})

globalStyle(`${superheroScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${superheroScope}${blockquoteFooter}`, {
	color: '#ebebeb',
})

globalStyle(`${superheroScope}${smallText}`, {
	fontSize: '0.875em',
})
