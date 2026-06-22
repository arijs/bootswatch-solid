import { globalStyle } from '@vanilla-extract/css'
import { vaporScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${vaporScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${vaporScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${vaporScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${vaporScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${vaporScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: 'rgba(50, 251, 226, 0.3)',
})

globalStyle(`${vaporScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${vaporScope}${blockquoteFooter}`, {
	textShadow: '0 0 1px rgba(21, 104, 94, 0.3), 0 0 2px rgba(21, 104, 94, 0.3), 0 0 5px rgba(21, 104, 94, 0.2)',
})

globalStyle(`${vaporScope}${smallText}`, {
	fontSize: '0.875em',
})
