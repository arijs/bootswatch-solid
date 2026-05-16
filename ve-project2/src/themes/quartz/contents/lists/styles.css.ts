import { globalStyle } from '@vanilla-extract/css'
import {
	listBase,
	listInline,
	listInlineItem,
	listIndented,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/contract.css'
import { quartzScope } from '../../scope.css'

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${quartzScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${quartzScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${quartzScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${quartzScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${quartzScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${quartzScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})
