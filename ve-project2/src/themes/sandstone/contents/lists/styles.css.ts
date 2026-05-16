import { globalStyle } from '@vanilla-extract/css'
import {
	listBase,
	listInline,
	listInlineItem,
	listIndented,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/contract.css'
import { sandstoneScope } from '../../scope.css'

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${sandstoneScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${sandstoneScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${sandstoneScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${sandstoneScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${sandstoneScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${sandstoneScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})
