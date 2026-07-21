import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${morphScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${morphScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${morphScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${morphScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${morphScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${morphScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${morphScope}${listIndented}`, {
	paddingLeft: '2rem',
})
