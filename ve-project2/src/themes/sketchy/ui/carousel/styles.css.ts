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
import { sketchyScope } from '../../scope.css'

// ── Root vars (light theme) ───────────────────────────────────────────────────

globalStyle(`${sketchyScope}${carousel}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${sketchyScope}${carousel}`, {
	position: 'relative',
})

globalStyle(`${sketchyScope}${carousel}.pointer-event`, {
	touchAction: 'pan-y',
})

globalStyle(`${sketchyScope}${carouselInner}`, {
	position: 'relative',
	width: '100%',
	overflow: 'hidden',
})
globalStyle(`${sketchyScope}${carouselInner}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${sketchyScope}${carouselItem}`, {
	position: 'relative',
	display: 'none',
	float: 'left',
	width: '100%',
	marginRight: '-100%',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
	transition: 'transform 0.6s ease-in-out',
})

globalStyle(
	`${sketchyScope}${carouselItem}${carouselActive}, ${sketchyScope}${carouselItemNext}, ${sketchyScope}${carouselItemPrev}`,
	{ display: 'block' },
)

globalStyle(
	`${sketchyScope}${carouselItemNext}:not(${carouselItemStart}), ${sketchyScope}${carouselActive}${carouselItemEnd}`,
	{ transform: 'translateX(100%)' },
)

globalStyle(
	`${sketchyScope}${carouselItemPrev}:not(${carouselItemEnd}), ${sketchyScope}${carouselActive}${carouselItemStart}`,
	{ transform: 'translateX(-100%)' },
)

globalStyle(`${sketchyScope}${carouselFade} ${carouselItem}`, {
	opacity: 0,
	transitionProperty: 'opacity',
	transform: 'none',
})

globalStyle(
	[
		`${sketchyScope}${carouselFade} ${carouselItem}${carouselActive}`,
		`${sketchyScope}${carouselFade} ${carouselItemNext}${carouselItemStart}`,
		`${sketchyScope}${carouselFade} ${carouselItemPrev}${carouselItemEnd}`,
	].join(', '),
	{ zIndex: 1, opacity: 1 },
)

globalStyle(
	[
		`${sketchyScope}${carouselFade} ${carouselActive}${carouselItemStart}`,
		`${sketchyScope}${carouselFade} ${carouselActive}${carouselItemEnd}`,
	].join(', '),
	{ zIndex: 0, opacity: 0, transition: 'opacity 0s 0.6s' },
)

globalStyle(
	`${sketchyScope}${carouselControlPrev}, ${sketchyScope}${carouselControlNext}`,
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

globalStyle(
	[
		`${sketchyScope}${carouselControlPrev}:hover`,
		`${sketchyScope}${carouselControlPrev}:focus`,
		`${sketchyScope}${carouselControlNext}:hover`,
		`${sketchyScope}${carouselControlNext}:focus`,
	].join(', '),
	{ color: '#fff', textDecoration: 'none', outline: 0, opacity: 0.9 },
)

globalStyle(`${sketchyScope}${carouselControlPrev}`, { left: 0 })
globalStyle(`${sketchyScope}${carouselControlNext}`, { right: 0 })

globalStyle(
	`${sketchyScope}${carouselControlPrevIcon}, ${sketchyScope}${carouselControlNextIcon}`,
	{
		display: 'inline-block',
		width: '2rem',
		height: '2rem',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: '100% 100%',
	},
)

globalStyle(`${sketchyScope}${carouselControlPrevIcon}`, {
	backgroundImage:
		"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e\")",
})

globalStyle(`${sketchyScope}${carouselControlNextIcon}`, {
	backgroundImage:
		"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e\")",
})

globalStyle(`${sketchyScope}${carouselIndicators}`, {
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

globalStyle(`${sketchyScope}${carouselIndicators} [data-bs-target]`, {
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

globalStyle(`${sketchyScope}${carouselIndicators} ${carouselActive}`, {
	opacity: 1,
})

globalStyle(`${sketchyScope}${carouselCaption}`, {
	position: 'absolute',
	right: '15%',
	bottom: '1.25rem',
	left: '15%',
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	color: varBsCarouselCaptionColor,
	textAlign: 'center',
})

globalStyle(`${sketchyScope}${carouselDark}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
	},
})
