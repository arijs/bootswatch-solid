import { globalStyle } from '@vanilla-extract/css'
import {
	listBase,
	listInline,
	listInlineItem,
	listIndented,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/contract.css'
import { sketchyScope } from '../../scope.css'

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${sketchyScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${sketchyScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${sketchyScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${sketchyScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${sketchyScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${sketchyScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})
