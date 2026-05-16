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
import { solarScope } from '../../scope.css'

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${solarScope}${markText}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${solarScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${solarScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${solarScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#839496',
})

globalStyle(`${solarScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// Source CSS: code { font-family: var(--bs-font-monospace); font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
globalStyle(`${solarScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
