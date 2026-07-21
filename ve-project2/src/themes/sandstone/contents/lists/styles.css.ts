import { globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${sandstoneScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${sandstoneScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${sandstoneScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${sandstoneScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${sandstoneScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${sandstoneScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${sandstoneScope}${listIndented}`, {
	paddingLeft: '2rem',
})
