import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

import { varBsCarouselCaptionColor, varBsCarouselControlIconFilter, varBsCarouselIndicatorActiveBg } from '../../../../theme-contract/ui/carousel/_vars.css'

import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'

import {
	active,
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'
import {
	carousel,
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

globalStyle(`${materiaScope}${carousel}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${carouselInner}`, {
	position: 'relative',
	width: '100%',
	overflow: 'hidden',
})

globalStyle(`${materiaScope}${carouselInner}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${materiaScope}${carouselItem}`, {
	position: 'relative',
	display: 'none',
	float: 'left',
	width: '100%',
	marginRight: '-100%',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
	transition: 'transform 0.6s ease-in-out',
})

globalStyle(`${materiaScope}${carouselItem}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${carouselItemNext}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${carouselItemPrev}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${carouselItemNext}:not(${carouselItemStart})`, {
	transform: 'translateX(100%)',
})

globalStyle(`${materiaScope}${active}${carouselItemEnd}`, {
	transform: 'translateX(100%)',
})

globalStyle(`${materiaScope}${carouselItemPrev}:not(${carouselItemEnd})`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${materiaScope}${active}${carouselItemStart}`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${carouselItem}`, {
	opacity: '0',
	transitionProperty: 'opacity',
	transform: 'none',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${carouselItemNext}${carouselItemStart}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${carouselItemPrev}${carouselItemEnd}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${active}${carouselItemStart}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${active}${carouselItemEnd}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${active}${carouselItemStart}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${active}${carouselItemEnd}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselControlPrev}`, {
	position: 'absolute',
	top: '0',
	bottom: '0',
	zIndex: '1',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '15%',
	padding: '0',
	color: '#fff',
	textAlign: 'center',
	background: 'none',
	filter: varBsCarouselControlIconFilter,
	border: '0',
	opacity: '0.5',
	transition: 'opacity 0.15s ease',
})

globalStyle(`${materiaScope}${carouselControlNext}`, {
	position: 'absolute',
	top: '0',
	bottom: '0',
	zIndex: '1',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '15%',
	padding: '0',
	color: '#fff',
	textAlign: 'center',
	background: 'none',
	filter: varBsCarouselControlIconFilter,
	border: '0',
	opacity: '0.5',
	transition: 'opacity 0.15s ease',
})

globalStyle(`${materiaScope}${carouselControlPrev}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselControlNext}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselControlPrev}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${materiaScope}${carouselControlPrev}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${materiaScope}${carouselControlNext}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${materiaScope}${carouselControlNext}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${materiaScope}${carouselControlPrev}`, {
	left: '0',
	backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.001))',
})

globalStyle(`${materiaScope}${carouselControlNext}`, {
	right: '0',
	backgroundImage: 'linear-gradient(270deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.001))',
})

globalStyle(`${materiaScope}${carouselControlPrevIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${materiaScope}${carouselControlNextIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${materiaScope}${carouselControlPrevIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0\'/%3e%3c/svg%3e") ',
})

globalStyle(`${materiaScope}${carouselControlNextIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e") ',
})

globalStyle(`${materiaScope}${carouselIndicators}`, {
	position: 'absolute',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '2',
	display: 'flex',
	justifyContent: 'center',
	padding: '0',
	marginRight: '15%',
	marginBottom: '1rem',
	marginLeft: '15%',
})

globalStyle(`${materiaScope}${carouselIndicators} ${materiaScope}[data-bs-target]`, {
	boxSizing: 'content-box',
	flex: '0 1 auto',
	width: '30px',
	height: '3px',
	padding: '0',
	marginRight: '3px',
	marginLeft: '3px',
	textIndent: '-999px',
	cursor: 'pointer',
	backgroundColor: varBsCarouselIndicatorActiveBg,
	backgroundClip: 'padding-box',
	border: '0',
	borderTop: '10px solid transparent',
	borderBottom: '10px solid transparent',
	opacity: '0.5',
	transition: 'opacity 0.6s ease',
})

globalStyle(`${materiaScope}${carouselIndicators} ${materiaScope}[data-bs-target]`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselIndicators} ${materiaScope}${active}`, {
	opacity: '1',
})

globalStyle(`${materiaScope}${carouselCaption}`, {
	position: 'absolute',
	right: '15%',
	bottom: '1.25rem',
	left: '15%',
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	color: varBsCarouselCaptionColor,
	textAlign: 'center',
})

globalStyle(`${materiaScope}${carouselDark}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
	},
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h1}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h2}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h3}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h4}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h5}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h6}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH6}`, {
	color: 'inherit',
})
