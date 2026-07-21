import { globalStyle } from '@vanilla-extract/css'
import { darklyScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${darklyScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${darklyScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${darklyScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${darklyScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${darklyScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${darklyScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${darklyScope}${listIndented}`, {
	paddingLeft: '2rem',
})
