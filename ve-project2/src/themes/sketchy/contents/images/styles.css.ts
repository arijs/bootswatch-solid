import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderRadius,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import {
	figure,
	figureCaption,
	figureImg,
	imgFluid,
	imgThumbnail,
	rounded,
} from '../../../../theme-contract/contents/images/contract.css'
import { sketchyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/images
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// figure { margin: 0 0 1rem; }
// [UNMAPPED_SELECTOR] element selector "figure" — map to a contract class
globalStyle(`figure`, {
	margin: "0 0 1rem",
})

// SOURCE CSS:
// img { vertical-align: middle; }
// [UNMAPPED_SELECTOR] element selector "img" — map to a contract class
globalStyle(`img`, {
	verticalAlign: "middle",
})

// SOURCE CSS:
// svg { vertical-align: middle; }
// [UNMAPPED_SELECTOR] element selector "svg" — map to a contract class
globalStyle(`svg`, {
	verticalAlign: "middle",
})

// SOURCE CSS:
// .img-fluid { max-width: 100%; height: auto; }
globalStyle(`${sketchyScope}${imgFluid}`, {
	maxWidth: "100%",
	height: "auto",
})

// SOURCE CSS:
// .figure { display: inline-block; }
globalStyle(`${sketchyScope}${figure}`, {
	display: "inline-block",
})

// SOURCE CSS:
// .figure-img { margin-bottom: 0.5rem; line-height: 1; }
globalStyle(`${sketchyScope}${figureImg}`, {
	marginBottom: "0.5rem",
	lineHeight: 1,
})

// SOURCE CSS:
// .figure-caption { font-size: 0.875em; color: var(--bs-secondary-color); }
globalStyle(`${sketchyScope}${figureCaption}`, {
	fontSize: "0.875em",
	color: varBsSecondaryColor,
})

// SOURCE CSS:
// .rounded { border-radius: var(--bs-border-radius) !important; }
globalStyle(`${sketchyScope}${rounded}`, {
	borderRadius: "var(--bs-border-radius) !important",
})

// SOURCE CSS:
// .img-thumbnail { padding: 0.25rem; background-color: var(--bs-body-bg); border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); max-width: 100%; height: auto; }
globalStyle(`${sketchyScope}${imgThumbnail}`, {
	padding: "0.25rem",
	backgroundColor: varBsBodyBg,
	border: "var(--bs-border-width) solid var(--bs-border-color)",
	borderRadius: varBsBorderRadius,
	maxWidth: "100%",
	height: "auto",
})
