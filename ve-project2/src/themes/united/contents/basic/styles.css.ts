import { globalStyle } from '@vanilla-extract/css'
import { unitedScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${unitedScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${unitedScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${unitedScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${unitedScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${unitedScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#868e96',
})

globalStyle(`${unitedScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${unitedScope}${smallText}`, {
	fontSize: '0.875em',
})
