import { globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${ceruleanScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${ceruleanScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${ceruleanScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${ceruleanScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${ceruleanScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${ceruleanScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${ceruleanScope}${listIndented}`, {
	paddingLeft: '2rem',
})
