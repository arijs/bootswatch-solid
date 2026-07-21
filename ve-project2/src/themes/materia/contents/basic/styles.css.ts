import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${materiaScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${materiaScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${materiaScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${materiaScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#666',
})

globalStyle(`${materiaScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${materiaScope}${smallText}`, {
	fontSize: '0.875em',
})
