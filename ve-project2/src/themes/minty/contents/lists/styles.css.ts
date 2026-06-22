import { globalStyle } from '@vanilla-extract/css'
import { mintyScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${mintyScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${mintyScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${mintyScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${mintyScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${mintyScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${mintyScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${mintyScope}${listIndented}`, {
	paddingLeft: '2rem',
})
