import { globalStyle } from '@vanilla-extract/css'
import { spacelabScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${spacelabScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${spacelabScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${spacelabScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${spacelabScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${spacelabScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${spacelabScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${spacelabScope}${listIndented}`, {
	paddingLeft: '2rem',
})
