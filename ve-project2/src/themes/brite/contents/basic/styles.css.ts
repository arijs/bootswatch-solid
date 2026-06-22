import { globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${briteScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${briteScope}${lead}`, {
	fontSize: '1.09375rem',
	fontWeight: '400',
})

globalStyle(`${briteScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.09375rem',
})

globalStyle(`${briteScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${briteScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#868e96',
})

globalStyle(`${briteScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${briteScope}${smallText}`, {
	fontSize: '0.875em',
})
