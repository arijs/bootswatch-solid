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
import { materiaScope } from '../../scope.css'

// ─── Lead ─────────────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: 300,
})

// ─── Inline text elements ─────────────────────────────────────────────────────

globalStyle(`${materiaScope}${markText}`, {
	padding: '0.1875em',
	color: '#444',
	backgroundColor: '#ffeacc',
})

globalStyle(`${materiaScope}${smallText}`, {
	fontSize: '0.875em',
})

// ─── Blockquote ───────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${blockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${blockquote} > :last-child`, {
	marginBottom: 0,
})

globalStyle(`${materiaScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#666',
})

globalStyle(`${materiaScope}${blockquoteFooter}::before`, {
	content: '"—\\00a0"',
})

globalStyle(`${materiaScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})
