import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsCarouselCaptionColor,
	varBsCarouselIndicatorActiveBg,
} from '../../../../theme-contract/_vars.css'

export const carousel = style({
	position: 'relative',
})

export const carouselSlide = style({})

export const carouselInner = style({
	position: 'relative',
	width: '100%',
	overflow: 'hidden',
})

globalStyle(`${carouselInner}::after`, {
	display: 'block',
	clear: 'both',
	content: '',
})

export const carouselItem = style({
	position: 'relative',
	display: 'none',
	float: 'left',
	width: '100%',
	marginRight: '-100%',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
	transition: 'transform 0.6s ease-in-out',
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

export const carouselActive = style({})

export const carouselItemNext = style({})

export const carouselItemPrev = style({})

export const carouselItemStart = style({})

export const carouselItemEnd = style({})

const carouselHookActive = 'pwhook-carousel-active'

globalStyle(
	`${carouselItem}.${carouselActive}, ${carouselItem}.${carouselHookActive}, ${carouselItem}.${carouselItemNext}, ${carouselItem}.${carouselItemPrev}`,
	{
		display: 'block',
	},
)

globalStyle(
	`${carouselItem}.${carouselItemNext}:not(.${carouselItemStart}), .${carouselActive}.${carouselItemEnd}, .${carouselHookActive}.${carouselItemEnd}`,
	{
		transform: 'translateX(100%)',
	},
)

globalStyle(
	`${carouselItem}.${carouselItemPrev}:not(.${carouselItemEnd}), .${carouselActive}.${carouselItemStart}, .${carouselHookActive}.${carouselItemStart}`,
	{
		transform: 'translateX(-100%)',
	},
)

const carouselControlBase = {
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
	border: 0,
	opacity: 0.5,
	transition: 'opacity 0.15s ease',
	selectors: {
		'&:hover, &:focus': {
			color: '#fff',
			textDecoration: 'none',
			outline: 0,
			opacity: 0.9,
		},
	},
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
} as const

export const carouselControlPrev = style({
	...carouselControlBase,
	left: 0,
})

export const carouselControlNext = style({
	...carouselControlBase,
	right: 0,
})

const carouselControlIconBase = {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
} as const

export const carouselControlPrevIcon = style({
	...carouselControlIconBase,
	backgroundImage:
		"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e\")",
})

export const carouselControlNextIcon = style({
	...carouselControlIconBase,
	backgroundImage:
		"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e\")",
})

export const carouselIndicators = style({
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

export const carouselIndicatorsTarget = style({
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
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(
	`${carouselIndicatorsTarget}.${carouselActive}, ${carouselIndicatorsTarget}.${carouselHookActive}`,
	{
		opacity: 1,
	},
)

export const carouselCaption = style({
	position: 'absolute',
	right: '15%',
	bottom: '1.25rem',
	left: '15%',
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	color: varBsCarouselCaptionColor,
	textAlign: 'center',
})

export const carouselCaptionResponsive = style({
	display: 'none !important',
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

export const carouselSlideImage = style({
	display: 'block !important',
	width: '100% !important',
})
