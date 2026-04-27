import type { Component } from 'solid-js'
import { onSettled } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import {
	bdPlaceholderImg,
	bdPlaceholderImgLg,
	h5,
	paragraph,
} from '../../../themes/bootstrap/contents/generated.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { visuallyHidden } from '../../../themes/bootstrap/ui/dropdowns/base.css'
import {
	carousel,
	carouselActive,
	carouselCaption,
	carouselCaptionResponsive,
	carouselControlNext,
	carouselControlNextIcon,
	carouselControlPrev,
	carouselControlPrevIcon,
	carouselIndicators,
	carouselIndicatorsTarget,
	carouselInner,
	carouselItem,
	carouselSlide,
	carouselSlideImage,
} from '../../../themes/bootstrap/ui/carousel/base.css'
import './ve-carousel'

const CarouselExample: Component = () => {
	onSettled(() => {
		// Ensure carousel is initialized with VeCarousel configuration
		const carouselElement = document.getElementById('carouselExampleCaptions')
		if (carouselElement && (window as any).VeCarousel) {
			;(window as any).VeCarousel.getOrCreateInstance(carouselElement)
		}
	})

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<div id="carouselExampleCaptions" class={`${carousel} ${carouselSlide} pwhook-carousel`} data-bs-ride="carousel">
			<div class={`${carouselIndicators} pwhook-carousel-indicators`}>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					class={`${carouselIndicatorsTarget} ${carouselActive} pwhook-carousel-indicator pwhook-carousel-active`}
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					class={`${carouselIndicatorsTarget} pwhook-carousel-indicator`}
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					class={`${carouselIndicatorsTarget} pwhook-carousel-indicator`}
					aria-label="Slide 3"
				></button>
			</div>
			<div class={carouselInner}>
				<div class={`${carouselItem} ${carouselActive} pwhook-carousel-item pwhook-carousel-active`}>
					<svg
						class={`${bdPlaceholderImg} ${bdPlaceholderImgLg} ${carouselSlideImage}`}
						width="800"
						height="400"
						xmlns="http://www.w3.org/2000/svg"
						aria-label="Placeholder: First slide"
						preserveAspectRatio="xMidYMid slice"
						tabindex="0"
					>
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#777" />
						<text x="50%" y="50%" fill="#555" dy=".3em">
							First slide
						</text>
					</svg>

					<div class={`${carouselCaption} ${carouselCaptionResponsive}`}>
						<h5 class={h5}>First slide label</h5>
						<p class={paragraph}>Some representative placeholder content for the first slide.</p>
					</div>
				</div>
				<div class={`${carouselItem} pwhook-carousel-item`}>
					<svg
						class={`${bdPlaceholderImg} ${bdPlaceholderImgLg} ${carouselSlideImage}`}
						width="800"
						height="400"
						xmlns="http://www.w3.org/2000/svg"
						aria-label="Placeholder: Second slide"
						preserveAspectRatio="xMidYMid slice"
						tabindex="0"
					>
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#666" />
						<text x="50%" y="50%" fill="#444" dy=".3em">
							Second slide
						</text>
					</svg>

					<div class={`${carouselCaption} ${carouselCaptionResponsive}`}>
						<h5 class={h5}>Second slide label</h5>
						<p class={paragraph}>Some representative placeholder content for the second slide.</p>
					</div>
				</div>
				<div class={`${carouselItem} pwhook-carousel-item`}>
					<svg
						class={`${bdPlaceholderImg} ${bdPlaceholderImgLg} ${carouselSlideImage}`}
						width="800"
						height="400"
						xmlns="http://www.w3.org/2000/svg"
						aria-label="Placeholder: Third slide"
						preserveAspectRatio="xMidYMid slice"
						tabindex="0"
					>
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#555" />
						<text x="50%" y="50%" fill="#333" dy=".3em">
							Third slide
						</text>
					</svg>

					<div class={`${carouselCaption} ${carouselCaptionResponsive}`}>
						<h5 class={h5}>Third slide label</h5>
						<p class={paragraph}>Some representative placeholder content for the third slide.</p>
					</div>
				</div>
			</div>
			<button
				class={`${carouselControlPrev} pwhook-carousel-control pwhook-carousel-control-prev`}
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev"
			>
				<span class={carouselControlPrevIcon} aria-hidden="true"></span>
				<span class={visuallyHidden}>Previous</span>
			</button>
			<button
				class={`${carouselControlNext} pwhook-carousel-control pwhook-carousel-control-next`}
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next"
			>
				<span class={carouselControlNextIcon} aria-hidden="true"></span>
				<span class={visuallyHidden}>Next</span>
			</button>
			</div>
		</div>
	)
}

export default CarouselExample

// @screenshot *: 360x400 476
