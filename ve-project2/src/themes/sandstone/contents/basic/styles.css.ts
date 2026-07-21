import { globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${sandstoneScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${sandstoneScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${sandstoneScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${sandstoneScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${sandstoneScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#8e8c84',
})

globalStyle(`${sandstoneScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${sandstoneScope}${smallText}`, {
	fontSize: '0.875em',
})
