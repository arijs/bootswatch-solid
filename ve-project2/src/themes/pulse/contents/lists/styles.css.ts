import { globalStyle } from '@vanilla-extract/css'
import { pulseScope } from '../../scope.css'

import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'

globalStyle(`${pulseScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${pulseScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${pulseScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${pulseScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${pulseScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${pulseScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${pulseScope}${listIndented}`, {
	paddingLeft: '2rem',
})
