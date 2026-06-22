import { globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${zephyrScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${zephyrScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${zephyrScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${zephyrScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${zephyrScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#6c757d',
})

globalStyle(`${zephyrScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${zephyrScope}${smallText}`, {
	fontSize: '0.875em',
})
