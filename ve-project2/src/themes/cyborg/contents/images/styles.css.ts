import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import {
	bdPlaceholderImg,
	figure,
	figureCaption,
	figureImg,
	imgFluid,
	imgThumbnail,
	rounded,
} from '../../../../theme-contract/contents/images/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/images
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// img { vertical-align: middle; }
globalStyle(`${cyborgScope}${bdPlaceholderImg}`, {
	verticalAlign: "middle",
})

// SOURCE CSS:
// svg { vertical-align: middle; }
globalStyle(`${cyborgScope}${bdPlaceholderImg}`, {
	verticalAlign: "middle",
})

// SOURCE CSS:
// .img-fluid { max-width: 100%; height: auto; }
globalStyle(`${cyborgScope}${imgFluid}`, {
	maxWidth: "100%",
	height: "auto",
})

// SOURCE CSS:
// .figure { display: inline-block; }
globalStyle(`${cyborgScope}${figure}`, {
	display: "inline-block",
})

// SOURCE CSS:
// .figure-img { margin-bottom: 0.5rem; line-height: 1; }
globalStyle(`${cyborgScope}${figureImg}`, {
	marginBottom: "0.5rem",
	lineHeight: 1,
})

// SOURCE CSS:
// .figure-caption { font-size: 0.875em; color: var(--bs-secondary-color); }
globalStyle(`${cyborgScope}${figureCaption}`, {
	fontSize: "0.875em",
	color: varBsSecondaryColor,
})

// SOURCE CSS:
// .rounded { border-radius: var(--bs-border-radius) !important; }
globalStyle(`${cyborgScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

// SOURCE CSS:
// .img-thumbnail { padding: 0.25rem; background-color: var(--bs-body-bg); border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); max-width: 100%; height: auto; }
globalStyle(`${cyborgScope}${imgThumbnail}`, {
	padding: "0.25rem",
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: "100%",
	height: "auto",
})
