import { globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${luxScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${luxScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${luxScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${luxScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${luxScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${luxScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${luxScope}${listIndented}`, {
	paddingLeft: '2rem',
})
