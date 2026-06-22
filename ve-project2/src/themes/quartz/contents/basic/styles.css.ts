import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${quartzScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${quartzScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${quartzScope}${clsBlockquote}`, {
	marginBottom: '2rem',
	fontSize: '1.25rem',
})

globalStyle(`${quartzScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${quartzScope}${blockquoteFooter}`, {
	marginTop: '-2rem',
	marginBottom: '2rem',
	fontSize: '0.875em',
	color: 'rgba(255, 255, 255, 0.7)',
})

globalStyle(`${quartzScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${quartzScope}${smallText}`, {
	fontSize: '0.875em',
})
