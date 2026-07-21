import { globalStyle } from '@vanilla-extract/css'
import { journalScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${journalScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${journalScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${journalScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${journalScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${journalScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${journalScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${journalScope}${listIndented}`, {
	paddingLeft: '2rem',
})
