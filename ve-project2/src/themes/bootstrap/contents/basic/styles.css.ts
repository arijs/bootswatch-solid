import { globalStyle } from '@vanilla-extract/css'
import {
	blockquote,
	blockquoteFooter,
	link,
	lead,
	markText,
	smallText,
	inlineCode,
} from '../../../../theme-contract/contents/contract.css'
import {
	varBsCodeColor,
	varBsFontMonospace,
	varBsLinkColor,
	varBsLinkHoverColor,
} from '../../../../theme-contract/_vars.css'
import { bootstrapScope } from '../../scope.css'

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${markText}`, {
	padding: '0.1875em',
	color: '#212529',
	backgroundColor: '#fff3cd',
})

globalStyle(`${bootstrapScope}${smallText}`, {
	fontSize: '0.875em',
})

globalStyle(`${bootstrapScope}${link}`, {
	color: varBsLinkColor,
	textDecoration: 'underline',
})

globalStyle(`${bootstrapScope}${link}:hover`, {
	color: varBsLinkHoverColor,
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${bootstrapScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${bootstrapScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#6c757d',
})

globalStyle(`${bootstrapScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// Source CSS: code { font-family: var(--bs-font-monospace); font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
globalStyle(`${bootstrapScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
