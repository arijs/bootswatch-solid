import { globalStyle } from '@vanilla-extract/css'
import {
	listBase,
	listInline,
	listInlineItem,
	listIndented,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/contract.css'
import { slateScope } from '../../scope.css'

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${slateScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${slateScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${slateScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${slateScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${slateScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${slateScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${slateScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})
