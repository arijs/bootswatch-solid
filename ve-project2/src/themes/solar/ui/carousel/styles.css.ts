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
	paragraph,
} from '../../../../theme-contract/contents/basic/contract.css'
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
	carouselCaption,
	carouselControlNext,
	carouselControlNextIcon,
	carouselControlPrev,
	carouselControlPrevIcon,
	carouselFade,
	carouselIndicators,
	carouselInner,
	carouselItem,
	carouselItemNext,
	carouselItemPrev,
} from '../../../../theme-contract/ui/carousel/contract.css'
import {
	fade,
} from '../../../../theme-contract/ui/modal/contract.css'
import { solarScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/carousel
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${solarScope}${h6}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h6" — no contract mapping
globalStyle(`.h6`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
globalStyle(`${solarScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.25rem",
})

// SOURCE CSS:
// .h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
// [UNMAPPED_SELECTOR] class ".h5" — no contract mapping
globalStyle(`.h5`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.25rem",
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${solarScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h4" — no contract mapping
globalStyle(`.h4`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${solarScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h3" — no contract mapping
globalStyle(`.h3`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${solarScope}${h2}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h2" — no contract mapping
globalStyle(`.h2`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${solarScope}${h1}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h1" — no contract mapping
globalStyle(`.h1`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// p { margin-top: 0; margin-bottom: 1rem; }
globalStyle(`${solarScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: "1rem",
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
// button { border-radius: 0; margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; appearance: button; }
// [UNMAPPED_SELECTOR] element selector "button" — map to a contract class
globalStyle(`button`, {
	borderRadius: 0,
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
	appearance: "button",
})

// SOURCE CSS:
// button:focus:not(:focus-visible) { outline: 0; }
// [UNMAPPED_SELECTOR] element selector "button:focus:not(:focus-visible)" — map to a contract class
globalStyle(`button:focus:not(:focus-visible)`, {
	outline: 0,
})

// SOURCE CSS:
// input { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "input" — map to a contract class
globalStyle(`input`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// select { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; }
// [UNMAPPED_SELECTOR] element selector "select" — map to a contract class
globalStyle(`select`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
})

// SOURCE CSS:
// optgroup { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "optgroup" — map to a contract class
globalStyle(`optgroup`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// [type="button"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="button"]" — map to a contract class
globalStyle(`[type="button"]`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="reset"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]" — map to a contract class
globalStyle(`[type="reset"]`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="submit"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]" — map to a contract class
globalStyle(`[type="submit"]`, {
	appearance: "button",
})

// SOURCE CSS:
// button:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "button:not(:disabled)" — map to a contract class
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="button"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="button"]:not(:disabled)" — map to a contract class
globalStyle(`[type="button"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="reset"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]:not(:disabled)" — map to a contract class
globalStyle(`[type="reset"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="submit"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]:not(:disabled)" — map to a contract class
globalStyle(`[type="submit"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .carousel { position: relative; }
globalStyle(`${solarScope}${carousel}`, {
	position: "relative",
})

// SOURCE CSS:
// .carousel-inner { position: relative; width: 100%; overflow: hidden; }
globalStyle(`${solarScope}${carouselInner}`, {
	position: "relative",
	width: "100%",
	overflow: "hidden",
})

// SOURCE CSS:
// .carousel-inner::after { display: block; clear: both; content: ""; }
globalStyle(`${solarScope}${carouselInner}::after`, {
	display: "block",
	clear: "both",
	content: "\"\"",
})

// SOURCE CSS:
// .carousel-item { position: relative; display: none; float: left; width: 100%; margin-right: -100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; transition: transform 0.6s ease-in-out; }
globalStyle(`${solarScope}${carouselItem}`, {
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
globalStyle(`${solarScope}${carouselItem}.active`, {
	display: "block",
})

// SOURCE CSS:
// .carousel-item-next { display: block; }
globalStyle(`${solarScope}${carouselItemNext}`, {
	display: "block",
})

// SOURCE CSS:
// .carousel-item-prev { display: block; }
globalStyle(`${solarScope}${carouselItemPrev}`, {
	display: "block",
})

// SOURCE CSS:
// .carousel-item-next:not(.carousel-item-start) { transform: translateX(100%); }
globalStyle(`${solarScope}${carouselItemNext}:not(.carousel-item-start)`, {
	transform: "translateX(100%)",
})

// SOURCE CSS:
// .active.carousel-item-end { transform: translateX(100%); }
// [UNMAPPED_SELECTOR] class ".active" — no contract mapping
globalStyle(`.active.carousel-item-end`, {
	transform: "translateX(100%)",
})

// SOURCE CSS:
// .carousel-item-prev:not(.carousel-item-end) { transform: translateX(-100%); }
globalStyle(`${solarScope}${carouselItemPrev}:not(.carousel-item-end)`, {
	transform: "translateX(-100%)",
})

// SOURCE CSS:
// .active.carousel-item-start { transform: translateX(-100%); }
// [UNMAPPED_SELECTOR] class ".active" — no contract mapping
globalStyle(`.active.carousel-item-start`, {
	transform: "translateX(-100%)",
})

// SOURCE CSS:
// .carousel-fade .carousel-item.active { z-index: 1; opacity: 1; }
globalStyle(`${solarScope}${carouselFade} ${solarScope}${carouselItem}.active`, {
	zIndex: 1,
	opacity: 1,
})

// SOURCE CSS:
// .carousel-fade .carousel-item-next.carousel-item-start { z-index: 1; opacity: 1; }
globalStyle(`${solarScope}${carouselFade} ${solarScope}${carouselItemNext}.carousel-item-start`, {
	zIndex: 1,
	opacity: 1,
})

// SOURCE CSS:
// .carousel-fade .carousel-item-prev.carousel-item-end { z-index: 1; opacity: 1; }
globalStyle(`${solarScope}${carouselFade} ${solarScope}${carouselItemPrev}.carousel-item-end`, {
	zIndex: 1,
	opacity: 1,
})

// SOURCE CSS:
// .carousel-fade .active.carousel-item-start { z-index: 0; opacity: 0; transition: opacity 0s 0.6s; }
// [UNMAPPED_SELECTOR] class ".active" — no contract mapping
globalStyle(`${solarScope}${carouselFade} .active.carousel-item-start`, {
	zIndex: 0,
	opacity: 0,
	transition: "opacity 0s 0.6s",
})

// SOURCE CSS:
// .carousel-fade .active.carousel-item-end { z-index: 0; opacity: 0; transition: opacity 0s 0.6s; }
// [UNMAPPED_SELECTOR] class ".active" — no contract mapping
globalStyle(`${solarScope}${carouselFade} .active.carousel-item-end`, {
	zIndex: 0,
	opacity: 0,
	transition: "opacity 0s 0.6s",
})

// SOURCE CSS:
// .carousel-control-prev { position: absolute; top: 0; bottom: 0; z-index: 1; display: flex; align-items: center; justify-content: center; width: 15%; padding: 0; color: #fff; text-align: center; background: none; filter: var(--bs-carousel-control-icon-filter); border: 0; opacity: 0.5; transition: opacity 0.15s ease; left: 0; }
globalStyle(`${solarScope}${carouselControlPrev}`, {
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
globalStyle(`${solarScope}${carouselControlNext}`, {
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
globalStyle(`${solarScope}${carouselControlPrev}:hover`, {
	color: "#fff",
	textDecoration: "none",
	outline: 0,
	opacity: 0.9,
})

// SOURCE CSS:
// .carousel-control-prev:focus { color: #fff; text-decoration: none; outline: 0; opacity: 0.9; }
globalStyle(`${solarScope}${carouselControlPrev}:focus`, {
	color: "#fff",
	textDecoration: "none",
	outline: 0,
	opacity: 0.9,
})

// SOURCE CSS:
// .carousel-control-next:hover { color: #fff; text-decoration: none; outline: 0; opacity: 0.9; }
globalStyle(`${solarScope}${carouselControlNext}:hover`, {
	color: "#fff",
	textDecoration: "none",
	outline: 0,
	opacity: 0.9,
})

// SOURCE CSS:
// .carousel-control-next:focus { color: #fff; text-decoration: none; outline: 0; opacity: 0.9; }
globalStyle(`${solarScope}${carouselControlNext}:focus`, {
	color: "#fff",
	textDecoration: "none",
	outline: 0,
	opacity: 0.9,
})

// SOURCE CSS:
// .carousel-control-prev-icon { display: inline-block; width: 2rem; height: 2rem; background-repeat: no-repeat; background-position: 50%; background-size: 100% 100%; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e"); }
globalStyle(`${solarScope}${carouselControlPrevIcon}`, {
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
globalStyle(`${solarScope}${carouselControlNextIcon}`, {
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
globalStyle(`${solarScope}${carouselIndicators}`, {
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
globalStyle(`${solarScope}${carouselIndicators} [data-bs-target]`, {
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
// [UNMAPPED_SELECTOR] class ".active" — no contract mapping
globalStyle(`${solarScope}${carouselIndicators} .active`, {
	opacity: 1,
})

// SOURCE CSS:
// .carousel-caption { position: absolute; right: 15%; bottom: 1.25rem; left: 15%; padding-top: 1.25rem; padding-bottom: 1.25rem; color: var(--bs-carousel-caption-color); text-align: center; }
globalStyle(`${solarScope}${carouselCaption}`, {
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
// [UNMAPPED_SELECTOR] class ".visually-hidden" — no contract mapping
globalStyle(`.visually-hidden`, {
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
// .visually-hidden-focusable:not(:focus):not(:focus-within) { width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }
// [UNMAPPED_SELECTOR] class ".visually-hidden-focusable" — no contract mapping
globalStyle(`.visually-hidden-focusable:not(:focus):not(:focus-within)`, {
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
// [UNMAPPED_SELECTOR] class ".visually-hidden" — no contract mapping
globalStyle(`.visually-hidden:not(caption)`, {
	position: "absolute !important",
})

// SOURCE CSS:
// .visually-hidden-focusable:not(:focus):not(:focus-within):not(caption) { position: absolute !important; }
// [UNMAPPED_SELECTOR] class ".visually-hidden-focusable" — no contract mapping
globalStyle(`.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption)`, {
	position: "absolute !important",
})

// SOURCE CSS:
// .d-block { display: block !important; }
// [UNMAPPED_SELECTOR] class ".d-block" — no contract mapping
globalStyle(`.d-block`, {
	display: "block !important",
})

// SOURCE CSS:
// .d-none { display: none !important; }
// [UNMAPPED_SELECTOR] class ".d-none" — no contract mapping
globalStyle(`.d-none`, {
	display: "none !important",
})

// SOURCE CSS:
// .w-100 { width: 100% !important; }
// [UNMAPPED_SELECTOR] class ".w-100" — no contract mapping
globalStyle(`.w-100`, {
	width: "100% !important",
})
