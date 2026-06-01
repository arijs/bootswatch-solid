import { globalStyle } from '@vanilla-extract/css'
import {
	varBsHeadingColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsCarouselCaptionColor,
	varBsCarouselControlIconFilter,
	varBsCarouselIndicatorActiveBg,
} from '../../../../theme-contract/ui/carousel/_vars.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
import {
	carousel,
	carouselActive,
	carouselCaption,
	carouselControlNext,
	carouselControlNextIcon,
	carouselControlPrev,
	carouselControlPrevIcon,
	carouselDark,
	carouselFade,
	carouselIndicators,
	carouselInner,
	carouselItem,
	carouselItemEnd,
	carouselItemNext,
	carouselItemPrev,
	carouselItemStart,
} from '../../../../theme-contract/ui/carousel/contract.css'
import {
	visuallyHidden,
} from '../../../../theme-contract/utilities/contract.css'
import { cosmoScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/carousel
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${cosmoScope}${h6}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
globalStyle(`${cosmoScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.25rem",
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${cosmoScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${cosmoScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${cosmoScope}${h2}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${cosmoScope}${h1}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .carousel { position: relative; }
globalStyle(`${cosmoScope}${carousel}`, {
	position: "relative",
})

// SOURCE CSS:
// .carousel-inner { position: relative; width: 100%; overflow: hidden; }
globalStyle(`${cosmoScope}${carouselInner}`, {
	position: "relative",
	width: "100%",
	overflow: "hidden",
})

// SOURCE CSS:
// .carousel-inner::after { display: block; clear: both; content: ""; }
globalStyle(`${cosmoScope}${carouselInner}::after`, {
	display: "block",
	clear: "both",
	content: "\"\"",
})

// SOURCE CSS:
// .carousel-item { position: relative; display: none; float: left; width: 100%; margin-right: -100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; transition: transform 0.6s ease-in-out; }
globalStyle(`${cosmoScope}${carouselItem}`, {
	position: "relative",
	display: "none",
	float: "left",
	width: "100%",
	marginRight: "-100%",
	WebkitBackfaceVisibility: "hidden",
	backfaceVisibility: "hidden",
	transition: "transform 0.6s ease-in-out",
})

// SOURCE CSS:
// .carousel-item.active { display: block; }
globalStyle(`${cosmoScope}${carouselItem}${carouselActive}`, {
	display: "block",
})

// SOURCE CSS:
// .carousel-item-next { display: block; }
globalStyle(`${cosmoScope}${carouselItemNext}`, {
	display: "block",
})

// SOURCE CSS:
// .carousel-item-prev { display: block; }
globalStyle(`${cosmoScope}${carouselItemPrev}`, {
	display: "block",
})

// SOURCE CSS:
// .carousel-item-next:not(.carousel-item-start) { transform: translateX(100%); }
globalStyle(`${cosmoScope}${carouselItemNext}:not(${cosmoScope}${carouselItemStart})`, {
	transform: "translateX(100%)",
})

// SOURCE CSS:
// .carousel-item-prev:not(.carousel-item-end) { transform: translateX(-100%); }
globalStyle(`${cosmoScope}${carouselItemPrev}:not(${cosmoScope}${carouselItemEnd})`, {
	transform: "translateX(-100%)",
})

// SOURCE CSS:
// .carousel-fade .carousel-item.active { z-index: 1; opacity: 1; }
globalStyle(`${cosmoScope}${carouselFade} ${cosmoScope}${carouselItem}${carouselActive}`, {
	zIndex: 1,
	opacity: 1,
})

// SOURCE CSS:
// .carousel-fade .carousel-item-next.carousel-item-start { z-index: 1; opacity: 1; }
globalStyle(`${cosmoScope}${carouselFade} ${cosmoScope}${carouselItemNext}${carouselItemStart}`, {
	zIndex: 1,
	opacity: 1,
})

// SOURCE CSS:
// .carousel-fade .carousel-item-prev.carousel-item-end { z-index: 1; opacity: 1; }
globalStyle(`${cosmoScope}${carouselFade} ${cosmoScope}${carouselItemPrev}${carouselItemEnd}`, {
	zIndex: 1,
	opacity: 1,
})

// SOURCE CSS:
// .carousel-fade .active.carousel-item-start { z-index: 0; opacity: 0; transition: opacity 0s 0.6s; }
globalStyle(`${cosmoScope}${carouselFade} ${carouselActive}${carouselItemStart}`, {
	zIndex: 0,
	opacity: 0,
	transition: "opacity 0s 0.6s",
})

// SOURCE CSS:
// .carousel-fade .active.carousel-item-end { z-index: 0; opacity: 0; transition: opacity 0s 0.6s; }
globalStyle(`${cosmoScope}${carouselFade} ${carouselActive}${carouselItemEnd}`, {
	zIndex: 0,
	opacity: 0,
	transition: "opacity 0s 0.6s",
})

// SOURCE CSS:
// .carousel-control-prev { position: absolute; top: 0; bottom: 0; z-index: 1; display: flex; align-items: center; justify-content: center; width: 15%; padding: 0; color: #fff; text-align: center; background: none; filter: var(--bs-carousel-control-icon-filter); border: 0; opacity: 0.5; transition: opacity 0.15s ease; left: 0; }
globalStyle(`${cosmoScope}${carouselControlPrev}`, {
	position: "absolute",
	top: 0,
	bottom: 0,
	zIndex: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "15%",
	padding: 0,
	color: "#fff",
	textAlign: "center",
	background: "none",
	filter: varBsCarouselControlIconFilter,
	border: 0,
	opacity: 0.5,
	transition: "opacity 0.15s ease",
	left: 0,
})

// SOURCE CSS:
// .carousel-control-next { position: absolute; top: 0; bottom: 0; z-index: 1; display: flex; align-items: center; justify-content: center; width: 15%; padding: 0; color: #fff; text-align: center; background: none; filter: var(--bs-carousel-control-icon-filter); border: 0; opacity: 0.5; transition: opacity 0.15s ease; right: 0; }
globalStyle(`${cosmoScope}${carouselControlNext}`, {
	position: "absolute",
	top: 0,
	bottom: 0,
	zIndex: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "15%",
	padding: 0,
	color: "#fff",
	textAlign: "center",
	background: "none",
	filter: varBsCarouselControlIconFilter,
	border: 0,
	opacity: 0.5,
	transition: "opacity 0.15s ease",
	right: 0,
})

// SOURCE CSS:
// .carousel-control-prev:hover { color: #fff; text-decoration: none; outline: 0; opacity: 0.9; }
globalStyle(`${cosmoScope}${carouselControlPrev}:hover`, {
	color: "#fff",
	textDecoration: "none",
	outline: 0,
	opacity: 0.9,
})

// SOURCE CSS:
// .carousel-control-prev:focus { color: #fff; text-decoration: none; outline: 0; opacity: 0.9; }
globalStyle(`${cosmoScope}${carouselControlPrev}:focus`, {
	color: "#fff",
	textDecoration: "none",
	outline: 0,
	opacity: 0.9,
})

// SOURCE CSS:
// .carousel-control-next:hover { color: #fff; text-decoration: none; outline: 0; opacity: 0.9; }
globalStyle(`${cosmoScope}${carouselControlNext}:hover`, {
	color: "#fff",
	textDecoration: "none",
	outline: 0,
	opacity: 0.9,
})

// SOURCE CSS:
// .carousel-control-next:focus { color: #fff; text-decoration: none; outline: 0; opacity: 0.9; }
globalStyle(`${cosmoScope}${carouselControlNext}:focus`, {
	color: "#fff",
	textDecoration: "none",
	outline: 0,
	opacity: 0.9,
})

// SOURCE CSS:
// .carousel-control-prev-icon { display: inline-block; width: 2rem; height: 2rem; background-repeat: no-repeat; background-position: 50%; background-size: 100% 100%; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e"); }
globalStyle(`${cosmoScope}${carouselControlPrevIcon}`, {
	display: "inline-block",
	width: "2rem",
	height: "2rem",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "50%",
	backgroundSize: "100% 100%",
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e\")",
})

// SOURCE CSS:
// .carousel-control-next-icon { display: inline-block; width: 2rem; height: 2rem; background-repeat: no-repeat; background-position: 50%; background-size: 100% 100%; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e"); }
globalStyle(`${cosmoScope}${carouselControlNextIcon}`, {
	display: "inline-block",
	width: "2rem",
	height: "2rem",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "50%",
	backgroundSize: "100% 100%",
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e\")",
})

// SOURCE CSS:
// .carousel-indicators { position: absolute; right: 0; bottom: 0; left: 0; z-index: 2; display: flex; justify-content: center; padding: 0; margin-right: 15%; margin-bottom: 1rem; margin-left: 15%; }
globalStyle(`${cosmoScope}${carouselIndicators}`, {
	position: "absolute",
	right: 0,
	bottom: 0,
	left: 0,
	zIndex: 2,
	display: "flex",
	justifyContent: "center",
	padding: 0,
	marginRight: "15%",
	marginBottom: "1rem",
	marginLeft: "15%",
})

// SOURCE CSS:
// .carousel-indicators [data-bs-target] { box-sizing: content-box; flex: 0 1 auto; width: 30px; height: 3px; padding: 0; margin-right: 3px; margin-left: 3px; text-indent: -999px; cursor: pointer; background-color: var(--bs-carousel-indicator-active-bg); background-clip: padding-box; border: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; opacity: 0.5; transition: opacity 0.6s ease; }
// [UNMAPPED_SELECTOR] element selector "[data-bs-target]" — map to a contract class
globalStyle(`${cosmoScope}${carouselIndicators} [data-bs-target]`, {
	boxSizing: "content-box",
	flex: "0 1 auto",
	width: "30px",
	height: "3px",
	padding: 0,
	marginRight: "3px",
	marginLeft: "3px",
	textIndent: "-999px",
	cursor: "pointer",
	backgroundColor: varBsCarouselIndicatorActiveBg,
	backgroundClip: "padding-box",
	border: 0,
	borderTop: "10px solid transparent",
	borderBottom: "10px solid transparent",
	opacity: 0.5,
	transition: "opacity 0.6s ease",
})

// SOURCE CSS:
// .carousel-indicators .active { opacity: 1; }
globalStyle(`${cosmoScope}${carouselIndicators} ${carouselActive}`, {
	opacity: 1,
})

// SOURCE CSS:
// .carousel-caption { position: absolute; right: 15%; bottom: 1.25rem; left: 15%; padding-top: 1.25rem; padding-bottom: 1.25rem; color: var(--bs-carousel-caption-color); text-align: center; }
globalStyle(`${cosmoScope}${carouselCaption}`, {
	position: "absolute",
	right: "15%",
	bottom: "1.25rem",
	left: "15%",
	paddingTop: "1.25rem",
	paddingBottom: "1.25rem",
	color: varBsCarouselCaptionColor,
	textAlign: "center",
})

// SOURCE CSS:
// .visually-hidden { width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }
globalStyle(`${cosmoScope}${visuallyHidden}`, {
	width: "1px !important",
	height: "1px !important",
	padding: "0 !important",
	margin: "-1px !important",
	overflow: "hidden !important",
	clip: "rect(0, 0, 0, 0) !important",
	whiteSpace: "nowrap !important",
	border: "0 !important",
})

// SOURCE CSS:
// .visually-hidden:not(caption) { position: absolute !important; }
// [UNMAPPED_SELECTOR] element selector "caption" — map to a contract class
globalStyle(`${cosmoScope}${visuallyHidden}:not(caption)`, {
	position: "absolute !important",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .carousel.pointer-event { touch-action: pan-y; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".pointer-event" — no contract mapping
globalStyle(`${cosmoScope}${carousel}.pointer-event`, {
	touchAction: "pan-y",
})
// SOURCE CSS:
// .carousel-fade .carousel-item { opacity: 0; transition-property: opacity; transform: none; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cosmoScope}${carouselFade} ${cosmoScope}${carouselItem}`, {
	opacity: 0,
	transitionProperty: "opacity",
	transform: "none",
})
// SOURCE CSS:
// .carousel-dark { --bs-carousel-indicator-active-bg: #000; --bs-carousel-caption-color: #000; --bs-carousel-control-icon-filter: invert(1) grayscale(100); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cosmoScope}${carouselDark}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: "#000",
		[varBsCarouselCaptionColor]: "#000",
		[varBsCarouselControlIconFilter]: "invert(1) grayscale(100)",
	},
})
