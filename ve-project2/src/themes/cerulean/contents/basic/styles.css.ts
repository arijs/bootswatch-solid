import { globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${ceruleanScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${ceruleanScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${ceruleanScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${ceruleanScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${ceruleanScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#868e96',
})

globalStyle(`${ceruleanScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${ceruleanScope}${smallText}`, {
	fontSize: '0.875em',
})
