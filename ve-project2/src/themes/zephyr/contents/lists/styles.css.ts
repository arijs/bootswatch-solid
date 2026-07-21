import { globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${zephyrScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${zephyrScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${zephyrScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${zephyrScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${zephyrScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${zephyrScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${zephyrScope}${listIndented}`, {
	paddingLeft: '2rem',
})
