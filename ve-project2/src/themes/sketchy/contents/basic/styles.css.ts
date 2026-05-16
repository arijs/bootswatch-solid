import { globalStyle } from '@vanilla-extract/css'
import { varBsCodeColor, varBsFontMonospace } from '../../../../theme-contract/_vars.css'
import {
	blockquote,
	blockquoteFooter,
	lead,
	markText,
	smallText,
	inlineCode,
} from '../../../../theme-contract/contents/contract.css'
import { sketchyScope } from '../../scope.css'

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${markText}`, {
	padding: '0.1875em',
	color: '#212529',
	backgroundColor: '#fff3cd',
})

globalStyle(`${sketchyScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${sketchyScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${sketchyScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#6c757d',
})

globalStyle(`${sketchyScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// Source CSS: code { font-family: var(--bs-font-monospace); font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
globalStyle(`${sketchyScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
