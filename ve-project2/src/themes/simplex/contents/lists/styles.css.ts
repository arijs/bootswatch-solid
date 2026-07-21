import { globalStyle } from '@vanilla-extract/css'
import { simplexScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${simplexScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${simplexScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${simplexScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${simplexScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${simplexScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${simplexScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${simplexScope}${listIndented}`, {
	paddingLeft: '2rem',
})
