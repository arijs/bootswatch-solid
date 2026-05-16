import { globalStyle } from '@vanilla-extract/css'
import {
	listBase,
	listInline,
	listInlineItem,
	listIndented,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/contract.css'
import { vaporScope } from '../../scope.css'

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${vaporScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${vaporScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${vaporScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${vaporScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${vaporScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${vaporScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${vaporScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})
