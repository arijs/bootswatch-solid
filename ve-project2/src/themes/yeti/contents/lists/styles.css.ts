import { globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${yetiScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${yetiScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${yetiScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${yetiScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${yetiScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${yetiScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${yetiScope}${listIndented}`, {
	paddingLeft: '2rem',
})
