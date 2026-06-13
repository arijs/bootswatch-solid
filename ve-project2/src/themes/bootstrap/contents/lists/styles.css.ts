import { globalStyle } from '@vanilla-extract/css'
import {
	listBase,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'
import { bootstrapScope } from '../../scope.css'

// SOURCE CSS:
// ol, ul { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
globalStyle(`${bootstrapScope}${listBase}`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// ol ol, ul ul, ol ul, ul ol { margin-bottom: 0; }
globalStyle(`${bootstrapScope}${listNested}`, {
	marginBottom: 0,
})

// SOURCE CSS:
// .list-unstyled { padding-left: 0; list-style: none; }
globalStyle(`${bootstrapScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: "none",
})

// SOURCE CSS:
// .list-inline { padding-left: 0; list-style: none; }
globalStyle(`${bootstrapScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: "none",
})

// SOURCE CSS:
// .list-inline-item { display: inline-block; }
globalStyle(`${bootstrapScope}${listInlineItem}`, {
	display: "inline-block",
})

// SOURCE CSS:
// .list-inline-item:not(:last-child) { margin-right: 0.5rem; }
globalStyle(`${bootstrapScope}${listInlineItem}:not(:last-child)`, {
	marginRight: "0.5rem",
})
