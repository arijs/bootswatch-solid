import type { Component } from 'solid-js'
import { onSettled } from 'solid-js'
import { useVeCarouselThemeClasses } from '../../../themes/runtime/hooks'
import { configureVeCarousel } from './ve-carousel'

const CarouselExample: Component = () => {
	const cls = useVeCarouselThemeClasses()
	const VeCarousel = configureVeCarousel(cls)
	let carouselRef: HTMLDivElement | undefined
	onSettled(() => {
		if (carouselRef) {
			VeCarousel.getOrCreateInstance(carouselRef)
		}
	})

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div
				ref={carouselRef}
				id="carouselExampleCaptions"
				class={`${cls.carousel} ${cls.carouselSlide} pwhook-carousel`}
				data-bs-ride="carousel"
			>
				<div class={`${cls.carouselIndicators} pwhook-carousel-indicators`}>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						class={`${cls.carouselIndicatorsTarget} ${cls.carouselActive} pwhook-carousel-indicator pwhook-carousel-active`}
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						class={`${cls.carouselIndicatorsTarget} pwhook-carousel-indicator`}
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						class={`${cls.carouselIndicatorsTarget} pwhook-carousel-indicator`}
						aria-label="Slide 3"
					></button>
				</div>
				<div class={cls.carouselInner}>
					<div
						class={`${cls.carouselItem} ${cls.carouselActive} pwhook-carousel-item pwhook-carousel-active`}
					>
						<svg
							class={`${cls.bdPlaceholderImg} ${cls.bdPlaceholderImgLg} ${cls.carouselSlideImage}`}
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

						<div class={`${cls.carouselCaption} ${cls.carouselCaptionResponsive}`}>
							<h5 class={cls.h5}>First slide label</h5>
							<p class={cls.paragraph}>
								Some representative placeholder content for the first slide.
							</p>
						</div>
					</div>
					<div class={`${cls.carouselItem} pwhook-carousel-item`}>
						<svg
							class={`${cls.bdPlaceholderImg} ${cls.bdPlaceholderImgLg} ${cls.carouselSlideImage}`}
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

						<div class={`${cls.carouselCaption} ${cls.carouselCaptionResponsive}`}>
							<h5 class={cls.h5}>Second slide label</h5>
							<p class={cls.paragraph}>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div class={`${cls.carouselItem} pwhook-carousel-item`}>
						<svg
							class={`${cls.bdPlaceholderImg} ${cls.bdPlaceholderImgLg} ${cls.carouselSlideImage}`}
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

						<div class={`${cls.carouselCaption} ${cls.carouselCaptionResponsive}`}>
							<h5 class={cls.h5}>Third slide label</h5>
							<p class={cls.paragraph}>
								Some representative placeholder content for the third slide.
							</p>
						</div>
					</div>
				</div>
				<button
					class={`${cls.carouselControlPrev} pwhook-carousel-control pwhook-carousel-control-prev`}
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span class={cls.carouselControlPrevIcon} aria-hidden="true"></span>
					<span class={cls.visuallyHidden}>Previous</span>
				</button>
				<button
					class={`${cls.carouselControlNext} pwhook-carousel-control pwhook-carousel-control-next`}
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span class={cls.carouselControlNextIcon} aria-hidden="true"></span>
					<span class={cls.visuallyHidden}>Next</span>
				</button>
			</div>
		</div>
	)
}

export default CarouselExample

// @screenshot *: 360x400 476
