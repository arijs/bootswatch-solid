import { globalStyle } from '@vanilla-extract/css'
import { journalScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${journalScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${journalScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${journalScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${journalScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${journalScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#777',
})

globalStyle(`${journalScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${journalScope}${smallText}`, {
	fontSize: '0.875em',
})
