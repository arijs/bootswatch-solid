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
import { bootstrapScope } from '../../scope.css'

// ─── Images ───────────────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${bootstrapScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

// ─── Figures ──────────────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${figure}`, {
	display: 'inline-block',
	margin: '0 0 1rem',
})

globalStyle(`${bootstrapScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: 1,
})

globalStyle(`${bootstrapScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Placeholder images ───────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${bdPlaceholderImg}`, {
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

globalStyle(`${bootstrapScope}${bdPlaceholderImgLg}`, {
	'@media': { '(min-width: 768px)': { fontSize: '3.5rem' } },
})

globalStyle(`${bootstrapScope}${mediaMiddle}`, {
	verticalAlign: 'middle',
})

globalStyle(`${bootstrapScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})
