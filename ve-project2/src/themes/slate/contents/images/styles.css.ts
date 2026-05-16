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
import { slateScope } from '../../scope.css'

// ─── Images ───────────────────────────────────────────────────────────────────

globalStyle(`${slateScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${slateScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

// ─── Figures ──────────────────────────────────────────────────────────────────

globalStyle(`${slateScope}${figure}`, {
	display: 'inline-block',
	margin: '0 0 1rem',
})

globalStyle(`${slateScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: 1,
})

globalStyle(`${slateScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Placeholder images ───────────────────────────────────────────────────────

globalStyle(`${slateScope}${bdPlaceholderImg}`, {
	fontSize: '1.125rem',
	textAnchor: 'middle',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
})

globalStyle(`${slateScope}${bdPlaceholderImgLg}`, {
	'@media': { '(min-width: 768px)': { fontSize: '3.5rem' } },
})

globalStyle(`${slateScope}${mediaMiddle}`, {
	verticalAlign: 'middle',
})

globalStyle(`${slateScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})
