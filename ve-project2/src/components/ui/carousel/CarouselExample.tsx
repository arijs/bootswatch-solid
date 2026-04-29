import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	carousel,
	carouselCaption,
	carouselControlNext,
	carouselControlNextIcon,
	carouselControlPrev,
	carouselControlPrevIcon,
	carouselIndicatorActive,
	carouselIndicators,
	carouselInner,
	carouselItem,
	carouselItemActive,
	carouselSlide,
} from '../../../theme-contract/ui/carousel/contract.css'

const CarouselExample: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${carousel} ${carouselSlide}`}>
				<div class={`${theme} ${carouselIndicators}`}>
					<button
						type="button"
						class={`${theme} ${carouselIndicatorActive}`}
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button type="button" aria-label="Slide 2" />
					<button type="button" aria-label="Slide 3" />
				</div>
				<div class={`${theme} ${carouselInner}`}>
					<div class={`${theme} ${carouselItem} ${carouselItemActive}`}>
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
						<div class={`${theme} ${carouselCaption}`}>
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
					<div class={`${theme} ${carouselItem}`}>
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
						<div class={`${theme} ${carouselCaption}`}>
							<h5>Second slide label</h5>
							<p>Some representative placeholder content for the second slide.</p>
						</div>
					</div>
					<div class={`${theme} ${carouselItem}`}>
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
						<div class={`${theme} ${carouselCaption}`}>
							<h5>Third slide label</h5>
							<p>Some representative placeholder content for the third slide.</p>
						</div>
					</div>
				</div>
				<button
					class={`${theme} ${carouselControlPrev}`}
					type="button"
					aria-label="Previous"
				>
					<span class={`${theme} ${carouselControlPrevIcon}`} aria-hidden="true" />
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class={`${theme} ${carouselControlNext}`}
					type="button"
					aria-label="Next"
				>
					<span class={`${theme} ${carouselControlNextIcon}`} aria-hidden="true" />
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	)
}

export default CarouselExample

// @screenshot *: 360x400 476
