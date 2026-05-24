import { globalStyle } from '@vanilla-extract/css'
import {
	listInline,
	listInlineItem,
	listUnstyled,
} from '../../../../theme-contract/contents/lists/contract.css'
import { sandstoneScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/lists
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// ol { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ol`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// ul { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ul`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// dl { margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "dl" — map to a contract class
globalStyle(`dl`, {
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// .list-inline { padding-left: 0; list-style: none; }
globalStyle(`${sandstoneScope}${listInline}`, {
	paddingLeft: 0,
	listStyle: "none",
})

// SOURCE CSS:
// .list-inline-item { display: inline-block; }
globalStyle(`${sandstoneScope}${listInlineItem}`, {
	display: "inline-block",
})

// SOURCE CSS:
// .list-inline-item:not(:last-child) { margin-right: 0.5rem; }
globalStyle(`${sandstoneScope}${listInlineItem}:not(:last-child)`, {
	marginRight: "0.5rem",
})

// SOURCE CSS:
// ol ol { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ol ol`, {
	marginBottom: 0,
})

// SOURCE CSS:
// ul ul { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ul ul`, {
	marginBottom: 0,
})

// SOURCE CSS:
// ol ul { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ol ul`, {
	marginBottom: 0,
})

// SOURCE CSS:
// ul ol { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ul ol`, {
	marginBottom: 0,
})

// SOURCE CSS:
// .list-unstyled { padding-left: 0; list-style: none; }
globalStyle(`${sandstoneScope}${listUnstyled}`, {
	paddingLeft: 0,
	listStyle: "none",
})
