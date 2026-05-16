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
import { solarScope } from '../../scope.css'

// ─── Images ───────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${solarScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

// ─── Figures ──────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${figure}`, {
	display: 'inline-block',
	margin: '0 0 1rem',
})

globalStyle(`${solarScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: 1,
})

globalStyle(`${solarScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Placeholder images ───────────────────────────────────────────────────────

globalStyle(`${solarScope}${bdPlaceholderImg}`, {
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

globalStyle(`${solarScope}${bdPlaceholderImgLg}`, {
	'@media': { '(min-width: 768px)': { fontSize: '3.5rem' } },
})

globalStyle(`${solarScope}${mediaMiddle}`, {
	verticalAlign: 'middle',
})

globalStyle(`${solarScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})
