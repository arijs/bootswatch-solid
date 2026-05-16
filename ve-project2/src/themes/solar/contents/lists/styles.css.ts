import { globalStyle } from '@vanilla-extract/css'
import {
	listBase,
	listInline,
	listInlineItem,
	listIndented,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/contract.css'
import { solarScope } from '../../scope.css'

// ─── Lists ────────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${listBase}`, {
	marginTop: 0,
	marginBottom: '1rem',
})

globalStyle(`${solarScope}${listNested}`, {
	marginBottom: 0,
})

globalStyle(`${solarScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${solarScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${solarScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${solarScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${solarScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})
