import { globalStyle } from '@vanilla-extract/css'
import { varBsHighlightBg, varBsHighlightColor } from '../../../../theme-contract/_vars.css'
import {
	blockquote,
	blockquoteFooter,
	lead,
	markText,
	smallText,
	inlineCode,
} from '../../../../theme-contract/contents/contract.css'
import { varBsCodeColor, varBsFontMonospace } from '../../../../theme-contract/_vars.css'
import { vaporScope } from '../../scope.css'

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${vaporScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${vaporScope}${markText}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${vaporScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${vaporScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${vaporScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${vaporScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: 'rgba(50, 251, 226, 0.3)',
	textShadow:
		'0 0 1px rgba(21, 104, 94, 0.3), 0 0 2px rgba(21, 104, 94, 0.3), 0 0 5px rgba(21, 104, 94, 0.2)',
})

globalStyle(`${vaporScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// Source CSS: code { font-family: var(--bs-font-monospace); font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
globalStyle(`${vaporScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
