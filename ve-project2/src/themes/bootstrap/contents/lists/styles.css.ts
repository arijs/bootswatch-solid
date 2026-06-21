import { globalStyle } from '@vanilla-extract/css'
import { bootstrapScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${bootstrapScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${bootstrapScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${bootstrapScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${bootstrapScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${bootstrapScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${bootstrapScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${bootstrapScope}${listIndented}`, {
	paddingLeft: '2rem',
})
