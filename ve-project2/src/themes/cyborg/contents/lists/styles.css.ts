import { globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${cyborgScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${cyborgScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${cyborgScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${cyborgScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${cyborgScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${cyborgScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${cyborgScope}${listIndented}`, {
	paddingLeft: '2rem',
})
