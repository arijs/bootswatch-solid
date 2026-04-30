import type { Component } from 'solid-js'
import { onSettled, useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { visuallyHidden } from '../../../theme-contract/utilities/contract.css'
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
	carouselInner,
	carouselItem,
	carouselItemEnd,
	carouselItemNext,
	carouselItemPrev,
	carouselItemStart,
	carouselSlide,
} from '../../../theme-contract/ui/carousel/contract.css'
import { configureVeCarousel } from './ve-carousel'
import { containerFluid } from '../../../theme-contract/layout/container.css'

const CarouselExample: Component = () => {
	const theme = useContext(ThemeContext)
	const VeCarousel = configureVeCarousel({
		carousel,
		carouselActive,
		carouselIndicators,
		carouselItem,
		carouselItemEnd,
		carouselItemNext,
		carouselItemPrev,
		carouselItemStart,
		carouselSlide,
	})
	let carouselRef: HTMLDivElement | undefined
	onSettled(() => {
		if (carouselRef) {
			VeCarousel.getOrCreateInstance(carouselRef)
		}
	})

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div
				ref={carouselRef}
				id="carouselExampleCaptionsVe2"
				class={`${theme} ${carousel} ${carouselSlide} pwhook-carousel`}
				data-bs-ride="carousel"
			>
				<div class={`${theme} ${carouselIndicators}`}>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptionsVe2"
						data-bs-slide-to="0"
						class={`${theme} ${carouselActive} pwhook-carousel-indicator pwhook-carousel-active`}
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptionsVe2"
						data-bs-slide-to="1"
						class={`${theme} pwhook-carousel-indicator`}
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptionsVe2"
						data-bs-slide-to="2"
						class={`${theme} pwhook-carousel-indicator`}
						aria-label="Slide 3"
					/>
				</div>
				<div class={`${theme} ${carouselInner}`}>
					<div class={`${theme} ${carouselItem} ${carouselActive} pwhook-carousel-item pwhook-carousel-active`}>
						<svg
							class="d-block w-100"
							style={{ display: 'block', width: '100%' }}
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
							<div class={`${theme} ${carouselCaption} ${carouselCaptionResponsive}`}>
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
					<div class={`${theme} ${carouselItem} pwhook-carousel-item`}>
						<svg
							class="d-block w-100"
							style={{ display: 'block', width: '100%' }}
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
							<div class={`${theme} ${carouselCaption} ${carouselCaptionResponsive}`}>
							<h5>Second slide label</h5>
							<p>Some representative placeholder content for the second slide.</p>
						</div>
					</div>
					<div class={`${theme} ${carouselItem} pwhook-carousel-item`}>
						<svg
							class="d-block w-100"
							style={{ display: 'block', width: '100%' }}
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
							<div class={`${theme} ${carouselCaption} ${carouselCaptionResponsive}`}>
							<h5>Third slide label</h5>
							<p>Some representative placeholder content for the third slide.</p>
						</div>
					</div>
				</div>
				<button
					class={`${theme} ${carouselControlPrev} pwhook-carousel-control pwhook-carousel-control-prev`}
					type="button"
					data-bs-target="#carouselExampleCaptionsVe2"
					data-bs-slide="prev"
				>
					<span class={`${theme} ${carouselControlPrevIcon}`} aria-hidden="true" />
					<span class={visuallyHidden}>Previous</span>
				</button>
				<button
					class={`${theme} ${carouselControlNext} pwhook-carousel-control pwhook-carousel-control-next`}
					type="button"
					data-bs-target="#carouselExampleCaptionsVe2"
					data-bs-slide="next"
				>
					<span class={`${theme} ${carouselControlNextIcon}`} aria-hidden="true" />
					<span class={visuallyHidden}>Next</span>
				</button>
			</div>
		</div>
	)
}

export default CarouselExample

// @screenshot *: 360x400 476
