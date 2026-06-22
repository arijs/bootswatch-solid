import { globalStyle } from '@vanilla-extract/css'
import { solarScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${solarScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${solarScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${solarScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${solarScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${solarScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${solarScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${solarScope}${listIndented}`, {
	paddingLeft: '2rem',
})
