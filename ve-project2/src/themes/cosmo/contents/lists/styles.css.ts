import { globalStyle } from '@vanilla-extract/css'
import { cosmoScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${cosmoScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${cosmoScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${cosmoScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${cosmoScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${cosmoScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${cosmoScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${cosmoScope}${listIndented}`, {
	paddingLeft: '2rem',
})
