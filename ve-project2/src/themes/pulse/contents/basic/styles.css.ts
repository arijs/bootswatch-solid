import { globalStyle } from '@vanilla-extract/css'
import { pulseScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${pulseScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${pulseScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${pulseScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${pulseScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${pulseScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#868e96',
})

globalStyle(`${pulseScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${pulseScope}${smallText}`, {
	fontSize: '0.875em',
})
