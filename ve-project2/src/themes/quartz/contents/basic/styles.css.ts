import { globalStyle } from '@vanilla-extract/css'
import { varBsHighlightColor, varBsHighlightBg } from '../../../../theme-contract/_vars.css'
import {
	blockquote,
	blockquoteFooter,
	lead,
	markText,
	smallText,
	inlineCode,
} from '../../../../theme-contract/contents/contract.css'
import { varBsCodeColor, varBsFontMonospace } from '../../../../theme-contract/_vars.css'
import { quartzScope } from '../../scope.css'

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${quartzScope}${markText}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${quartzScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${blockquote}`, {
	marginBottom: '2rem',
	fontSize: '1.25rem',
})

globalStyle(`${quartzScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${quartzScope}${blockquoteFooter}`, {
	marginTop: '-2rem',
	marginBottom: '2rem',
	fontSize: '0.875em',
	color: 'rgba(255,255,255,0.7)',
})

globalStyle(`${quartzScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// Source CSS: code { font-family: var(--bs-font-monospace); font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
globalStyle(`${quartzScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
