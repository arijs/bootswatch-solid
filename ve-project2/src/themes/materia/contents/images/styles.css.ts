import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBodyBg,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import {
	bdPlaceholderImg,
	bdPlaceholderImgLg,
	figure,
	figureCaption,
	figureImg,
	imgFluid,
	imgThumbnail,
	mediaMiddle,
	rounded,
} from '../../../../theme-contract/contents/contract.css'
import { materiaScope } from '../../scope.css'

// ─── Images ───────────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${materiaScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

// ─── Figures ──────────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${figure}`, {
	display: 'inline-block',
	margin: '0 0 1rem',
})

globalStyle(`${materiaScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: 1,
})

globalStyle(`${materiaScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Placeholder images ───────────────────────────────────────────────────────

globalStyle(`${materiaScope}${bdPlaceholderImg}`, {
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

globalStyle(`${materiaScope}${bdPlaceholderImgLg}`, {
	'@media': { '(min-width: 768px)': { fontSize: '3.5rem' } },
})

globalStyle(`${materiaScope}${mediaMiddle}`, {
	verticalAlign: 'middle',
})

globalStyle(`${materiaScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})
