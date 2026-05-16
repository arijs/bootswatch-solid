import { globalStyle } from '@vanilla-extract/css'
import {
	listBase,
	listInline,
	listInlineItem,
	listIndented,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/contract.css'
import { materiaScope } from '../../scope.css'

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${materiaScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${materiaScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${materiaScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${materiaScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${materiaScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${materiaScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})
