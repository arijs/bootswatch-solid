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
import { sketchyScope } from '../../scope.css'

// ─── Images ───────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${sketchyScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

// SOURCE CSS: .img-thumbnail { border-radius: 255px 25px 225px 25px/25px 225px 25px 255px; }
globalStyle(`${sketchyScope}${imgThumbnail}`, {
	borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
})

// ─── Figures ──────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${figure}`, {
	display: 'inline-block',
	margin: '0 0 1rem',
})

globalStyle(`${sketchyScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: 1,
})

globalStyle(`${sketchyScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Placeholder images ───────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${bdPlaceholderImg}`, {
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

globalStyle(`${sketchyScope}${bdPlaceholderImgLg}`, {
	'@media': { '(min-width: 768px)': { fontSize: '3.5rem' } },
})

globalStyle(`${sketchyScope}${mediaMiddle}`, {
	verticalAlign: 'middle',
})

globalStyle(`${sketchyScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})
