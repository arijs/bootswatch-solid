import { globalStyle } from '@vanilla-extract/css'
import { bootstrapScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${bootstrapScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${bootstrapScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${bootstrapScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${bootstrapScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${bootstrapScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#6c757d',
})

globalStyle(`${bootstrapScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${bootstrapScope}${smallText}`, {
	fontSize: '0.875em',
})
