import { globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${literaScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${literaScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${literaScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${literaScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${literaScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${literaScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${literaScope}${listIndented}`, {
	paddingLeft: '2rem',
})
