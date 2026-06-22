import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${quartzScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${quartzScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${quartzScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${quartzScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${quartzScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${quartzScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${quartzScope}${listIndented}`, {
	paddingLeft: '2rem',
})
