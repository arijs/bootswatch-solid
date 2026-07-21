import { globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${briteScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${briteScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${briteScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${briteScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${briteScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${briteScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${briteScope}${listIndented}`, {
	paddingLeft: '2rem',
})
