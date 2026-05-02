import { globalStyle } from '@vanilla-extract/css'
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
	carouselSlide,
} from '../../../../theme-contract/ui/carousel/contract.css'
import {
	varBsCarouselCaptionColor,
	varBsCarouselControlIconFilter,
	varBsCarouselIndicatorActiveBg,
} from '../../../../theme-contract/ui/carousel/_vars.css'
import { quartzScope } from '../../scope.css'

// ── Root vars (light theme) ───────────────────────────────────────────────────

// SOURCE CSS (:root, [data-bs-theme=light]):
//   --bs-carousel-indicator-active-bg: #fff;
//   --bs-carousel-caption-color: #fff;
//   --bs-carousel-control-icon-filter: ;
globalStyle(`${quartzScope}${carousel}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

// ── .carousel ─────────────────────────────────────────────────────────────────

// SOURCE CSS: .carousel { position: relative; }
globalStyle(`${quartzScope}${carousel}`, {
	position: 'relative',
})

// SOURCE CSS: .carousel.pointer-event { touch-action: pan-y; }
// (pointer-event is not a separate contract class — it's a browser-applied class,
//  so we target it via a plain descendent selector on the scope element)
globalStyle(`${quartzScope}${carousel}.pointer-event`, {
	touchAction: 'pan-y',
})

// ── .carousel-inner ───────────────────────────────────────────────────────────

// SOURCE CSS:
// .carousel-inner { position: relative; width: 100%; overflow: hidden; }
// .carousel-inner::after { display: block; clear: both; content: ""; }
globalStyle(`${quartzScope}${carouselInner}`, {
	position: 'relative',
	width: '100%',
	overflow: 'hidden',
})
globalStyle(`${quartzScope}${carouselInner}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

// ── .carousel-item ────────────────────────────────────────────────────────────

// SOURCE CSS:
// .carousel-item { position: relative; display: none; float: left;
//   width: 100%; margin-right: -100%;
//   -webkit-backface-visibility: hidden; backface-visibility: hidden;
//   transition: transform 0.6s ease-in-out; }
globalStyle(`${quartzScope}${carouselItem}`, {
	position: 'relative',
	display: 'none',
	float: 'left',
	width: '100%',
	marginRight: '-100%',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
	transition: 'transform 0.6s ease-in-out',
})

// SOURCE CSS:
// .carousel-item.active, .carousel-item-next, .carousel-item-prev { display: block; }
globalStyle(
	`${quartzScope}${carouselItem}${carouselActive}, ${quartzScope}${carouselItemNext}, ${quartzScope}${carouselItemPrev}`,
	{ display: 'block' },
)

// SOURCE CSS:
// .carousel-item-next:not(.carousel-item-start), .active.carousel-item-end {
//   transform: translateX(100%); }
globalStyle(
	`${quartzScope}${carouselItemNext}:not(${carouselItemStart}), ${quartzScope}${carouselActive}${carouselItemEnd}`,
	{ transform: 'translateX(100%)' },
)

// SOURCE CSS:
// .carousel-item-prev:not(.carousel-item-end), .active.carousel-item-start {
//   transform: translateX(-100%); }
globalStyle(
	`${quartzScope}${carouselItemPrev}:not(${carouselItemEnd}), ${quartzScope}${carouselActive}${carouselItemStart}`,
	{ transform: 'translateX(-100%)' },
)

// ── .carousel-fade ────────────────────────────────────────────────────────────

// SOURCE CSS:
// .carousel-fade .carousel-item { opacity: 0; transition-property: opacity; transform: none; }
globalStyle(`${quartzScope}${carouselFade} ${carouselItem}`, {
	opacity: 0,
	transitionProperty: 'opacity',
	transform: 'none',
})

// SOURCE CSS:
// .carousel-fade .carousel-item.active,
// .carousel-fade .carousel-item-next.carousel-item-start,
// .carousel-fade .carousel-item-prev.carousel-item-end { z-index: 1; opacity: 1; }
globalStyle(
	[
		`${quartzScope}${carouselFade} ${carouselItem}${carouselActive}`,
		`${quartzScope}${carouselFade} ${carouselItemNext}${carouselItemStart}`,
		`${quartzScope}${carouselFade} ${carouselItemPrev}${carouselItemEnd}`,
	].join(', '),
	{ zIndex: 1, opacity: 1 },
)

// SOURCE CSS:
// .carousel-fade .active.carousel-item-start, .carousel-fade .active.carousel-item-end {
//   z-index: 0; opacity: 0; transition: opacity 0s 0.6s; }
globalStyle(
	[
		`${quartzScope}${carouselFade} ${carouselActive}${carouselItemStart}`,
		`${quartzScope}${carouselFade} ${carouselActive}${carouselItemEnd}`,
	].join(', '),
	{ zIndex: 0, opacity: 0, transition: 'opacity 0s 0.6s' },
)

// ── .carousel-control-prev / .carousel-control-next ──────────────────────────

// SOURCE CSS:
// .carousel-control-prev, .carousel-control-next {
//   position: absolute; top: 0; bottom: 0; z-index: 1;
//   display: flex; align-items: center; justify-content: center;
//   width: 15%; padding: 0; color: #fff; text-align: center;
//   background: none; filter: var(--bs-carousel-control-icon-filter);
//   border: 0; opacity: 0.5; transition: opacity 0.15s ease; }
globalStyle(
	`${quartzScope}${carouselControlPrev}, ${quartzScope}${carouselControlNext}`,
	{
		position: 'absolute',
		top: 0,
		bottom: 0,
		zIndex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '15%',
		padding: 0,
		color: '#fff',
		textAlign: 'center',
		background: 'none',
		filter: varBsCarouselControlIconFilter,
		border: 0,
		opacity: 0.5,
		transition: 'opacity 0.15s ease',
	},
)

// SOURCE CSS:
// .carousel-control-prev:hover, .carousel-control-prev:focus,
// .carousel-control-next:hover, .carousel-control-next:focus {
//   color: #fff; text-decoration: none; outline: 0; opacity: 0.9; }
globalStyle(
	[
		`${quartzScope}${carouselControlPrev}:hover`,
		`${quartzScope}${carouselControlPrev}:focus`,
		`${quartzScope}${carouselControlNext}:hover`,
		`${quartzScope}${carouselControlNext}:focus`,
	].join(', '),
	{ color: '#fff', textDecoration: 'none', outline: 0, opacity: 0.9 },
)

// SOURCE CSS: .carousel-control-prev { left: 0; }
globalStyle(`${quartzScope}${carouselControlPrev}`, { left: 0 })

// SOURCE CSS: .carousel-control-next { right: 0; }
globalStyle(`${quartzScope}${carouselControlNext}`, { right: 0 })

// ── .carousel-control-prev-icon / .carousel-control-next-icon ────────────────

// SOURCE CSS:
// .carousel-control-prev-icon, .carousel-control-next-icon {
//   display: inline-block; width: 2rem; height: 2rem;
//   background-repeat: no-repeat; background-position: 50%;
//   background-size: 100% 100%; }
globalStyle(
	`${quartzScope}${carouselControlPrevIcon}, ${quartzScope}${carouselControlNextIcon}`,
	{
		display: 'inline-block',
		width: '2rem',
		height: '2rem',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: '100% 100%',
	},
)

// SOURCE CSS: .carousel-control-prev-icon { background-image: url("..."); }
globalStyle(`${quartzScope}${carouselControlPrevIcon}`, {
	backgroundImage:
		"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e\")",
})

// SOURCE CSS: .carousel-control-next-icon { background-image: url("..."); }
globalStyle(`${quartzScope}${carouselControlNextIcon}`, {
	backgroundImage:
		"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e\")",
})

// ── .carousel-indicators ──────────────────────────────────────────────────────

// SOURCE CSS:
// .carousel-indicators { position: absolute; right: 0; bottom: 0; left: 0;
//   z-index: 2; display: flex; justify-content: center; padding: 0;
//   margin-right: 15%; margin-bottom: 1rem; margin-left: 15%; }
globalStyle(`${quartzScope}${carouselIndicators}`, {
	position: 'absolute',
	right: 0,
	bottom: 0,
	left: 0,
	zIndex: 2,
	display: 'flex',
	justifyContent: 'center',
	padding: 0,
	marginRight: '15%',
	marginBottom: '1rem',
	marginLeft: '15%',
})

// SOURCE CSS:
// .carousel-indicators [data-bs-target] {
//   box-sizing: content-box; flex: 0 1 auto; width: 30px; height: 3px;
//   padding: 0; margin-right: 3px; margin-left: 3px; text-indent: -999px;
//   cursor: pointer; background-color: var(--bs-carousel-indicator-active-bg);
//   background-clip: padding-box; border: 0;
//   border-top: 10px solid transparent; border-bottom: 10px solid transparent;
//   opacity: 0.5; transition: opacity 0.6s ease; }
globalStyle(`${quartzScope}${carouselIndicators} [data-bs-target]`, {
	boxSizing: 'content-box',
	flex: '0 1 auto',
	width: '30px',
	height: '3px',
	padding: 0,
	marginRight: '3px',
	marginLeft: '3px',
	textIndent: '-999px',
	cursor: 'pointer',
	backgroundColor: varBsCarouselIndicatorActiveBg,
	backgroundClip: 'padding-box',
	border: 0,
	borderTop: '10px solid transparent',
	borderBottom: '10px solid transparent',
	opacity: 0.5,
	transition: 'opacity 0.6s ease',
})

// SOURCE CSS: .carousel-indicators .active { opacity: 1; }
globalStyle(`${quartzScope}${carouselIndicators} ${carouselActive}`, {
	opacity: 1,
})

// ── .carousel-caption ─────────────────────────────────────────────────────────

// SOURCE CSS:
// .carousel-caption { position: absolute; right: 15%; bottom: 1.25rem; left: 15%;
//   padding-top: 1.25rem; padding-bottom: 1.25rem;
//   color: var(--bs-carousel-caption-color); text-align: center; }
globalStyle(`${quartzScope}${carouselCaption}`, {
	position: 'absolute',
	right: '15%',
	bottom: '1.25rem',
	left: '15%',
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	color: varBsCarouselCaptionColor,
	textAlign: 'center',
})

// ── .carousel-dark ────────────────────────────────────────────────────────────

// SOURCE CSS:
// .carousel-dark {
//   --bs-carousel-indicator-active-bg: #000;
//   --bs-carousel-caption-color: #000;
//   --bs-carousel-control-icon-filter: invert(1) grayscale(100); }
globalStyle(`${quartzScope}${carouselDark}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
	},
})
