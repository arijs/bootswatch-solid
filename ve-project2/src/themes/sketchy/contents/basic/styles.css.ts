import { globalStyle } from '@vanilla-extract/css'
import { sketchyScope } from '../../scope.css'

import { blockquoteFooter, lead, smallText } from '../../../../theme-contract/contents/basic/contract.css'
import { clsBlockquote, clsSmall } from '../../../../theme-contract/literal/contract.css'

globalStyle(`${sketchyScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${sketchyScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${sketchyScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${sketchyScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${sketchyScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#868e96',
})

globalStyle(`${sketchyScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${sketchyScope}${smallText}`, {
	fontSize: '0.875em',
})
