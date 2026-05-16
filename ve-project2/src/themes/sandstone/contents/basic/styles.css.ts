import { globalStyle } from '@vanilla-extract/css'
import {
	blockquote,
	blockquoteFooter,
	lead,
	markText,
	smallText,
	inlineCode,
} from '../../../../theme-contract/contents/contract.css'
import { varBsCodeColor, varBsFontMonospace } from '../../../../theme-contract/_vars.css'
import { sandstoneScope } from '../../scope.css'

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${markText}`, {
	padding: '0.1875em',
	color: '#3e3f3a',
	backgroundColor: '#fff3cd',
})

globalStyle(`${sandstoneScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${sandstoneScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${sandstoneScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#8e8c84',
})

globalStyle(`${sandstoneScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

// Source CSS: code { font-family: var(--bs-font-monospace); font-size: 0.875em; color: var(--bs-code-color); word-wrap: break-word; }
globalStyle(`${sandstoneScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
