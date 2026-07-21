import { globalStyle } from '@vanilla-extract/css'
import { flatlyScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${flatlyScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${flatlyScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${flatlyScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${flatlyScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${flatlyScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${flatlyScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${flatlyScope}${listIndented}`, {
	paddingLeft: '2rem',
})
