import type { Component } from 'solid-js'
import { onSettled, useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import {
	h5,
	paragraph,
} from '../../../theme-contract/contents/contract.css'
import {
	elButton,
	elSvg,
} from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { active, dBlock, dMdBlock, dNone, w100 } from '../../../theme-contract/literal/contract.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
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
import { visuallyHidden } from '../../../theme-contract/utilities/contract.css'
import { configureVeCarousel } from './ve-carousel'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/carousel',
	'contents/basic',
	'contents/heading',
	'contents/images',
	'utilities',
]

const CarouselExample: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
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
		<div class={`bd-example-ve2 ${theme} ${bodyText} ${containerFluid}`}>
			<div
				ref={carouselRef}
				id="carouselExampleCaptions"
				class={`${theme} ${carousel} ${carouselSlide} pwhook-carousel`}
				data-bs-ride="carousel"
			>
				<div class={`${theme} ${carouselIndicators}`}>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						class={`${theme} ${elButton} ${carouselActive} ${active} pwhook-carousel-indicator pwhook-carousel-active`}
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						class={`${theme} ${elButton} pwhook-carousel-indicator`}
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						class={`${theme} ${elButton} pwhook-carousel-indicator`}
						aria-label="Slide 3"
					/>
				</div>
				<div class={`${theme} ${carouselInner}`}>
					<div
						class={`${theme} ${carouselItem} ${carouselActive} ${active} pwhook-carousel-item pwhook-carousel-active`}
					>
						<svg
							class={`bd-placeholder-img bd-placeholder-img-lg ${theme} ${elSvg} ${dBlock} ${w100}`}
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
						<div
							class={`${theme} ${carouselCaption} ${carouselCaptionResponsive} ${dNone} ${dMdBlock}`}
						>
							<h5 class={`${theme} ${h5}`}>First slide label</h5>
							<p class={`${theme} ${paragraph}`}>
								Some representative placeholder content for the first slide.
							</p>
						</div>
					</div>
					<div class={`${theme} ${carouselItem} pwhook-carousel-item`}>
						<svg
							class={`bd-placeholder-img bd-placeholder-img-lg ${theme} ${elSvg} ${dBlock} ${w100}`}
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
						<div
							class={`${theme} ${carouselCaption} ${carouselCaptionResponsive} ${dNone} ${dMdBlock}`}
						>
							<h5 class={`${theme} ${h5}`}>Second slide label</h5>
							<p class={`${theme} ${paragraph}`}>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div class={`${theme} ${carouselItem} pwhook-carousel-item`}>
						<svg
							class={`bd-placeholder-img bd-placeholder-img-lg ${theme} ${elSvg} ${dBlock} ${w100}`}
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
						<div
							class={`${theme} ${carouselCaption} ${carouselCaptionResponsive} ${dNone} ${dMdBlock}`}
						>
							<h5 class={`${theme} ${h5}`}>Third slide label</h5>
							<p class={`${theme} ${paragraph}`}>
								Some representative placeholder content for the third slide.
							</p>
						</div>
					</div>
				</div>
				<button
					class={`${theme} ${elButton} ${carouselControlPrev} pwhook-carousel-control pwhook-carousel-control-prev`}
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span class={`${theme} ${carouselControlPrevIcon}`} aria-hidden="true" />
					<span class={`${theme} ${visuallyHidden}`}>Previous</span>
				</button>
				<button
					class={`${theme} ${elButton} ${carouselControlNext} pwhook-carousel-control pwhook-carousel-control-next`}
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span class={`${theme} ${carouselControlNextIcon}`} aria-hidden="true" />
					<span class={`${theme} ${visuallyHidden}`}>Next</span>
				</button>
			</div>
		</div>
	)
}

export default CarouselExample

// @screenshot *: 360x400 476
