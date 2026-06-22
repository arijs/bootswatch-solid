import { globalStyle } from '@vanilla-extract/css'
import { solarScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${solarScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${solarScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${solarScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${solarScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${solarScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#839496',
})

globalStyle(`${solarScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${solarScope}${smallText}`, {
	fontSize: '0.875em',
})
