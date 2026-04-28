import * as bootstrap from 'bootstrap'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'
import type { VeCarouselThemeContract } from '../../../themes/runtime/contracts'

interface VeCarouselRuntimeClasses extends Pick<
	VeCarouselThemeContract,
	| 'carousel'
	| 'carouselActive'
	| 'carouselIndicators'
	| 'carouselItem'
	| 'carouselItemEnd'
	| 'carouselItemNext'
	| 'carouselItemPrev'
	| 'carouselItemStart'
	| 'carouselSlide'
> {}

export function createVeCarousel(runtimeClasses: VeCarouselRuntimeClasses): typeof bootstrap.Carousel {
	return (bootstrap.Carousel as unknown as BootstrapWithDefaults<typeof bootstrap.Carousel>).extendDefaultConfig({
		CLASS_NAME_CAROUSEL: runtimeClasses.carousel,
		CLASS_NAME_ACTIVE: `${runtimeClasses.carouselActive} pwhook-carousel-active`,
		CLASS_NAME_SLIDE: runtimeClasses.carouselSlide,
		CLASS_NAME_END: runtimeClasses.carouselItemEnd,
		CLASS_NAME_START: runtimeClasses.carouselItemStart,
		CLASS_NAME_NEXT: runtimeClasses.carouselItemNext,
		CLASS_NAME_PREV: runtimeClasses.carouselItemPrev,
		SELECTOR_ITEM: `.${runtimeClasses.carouselItem}`,
		SELECTOR_ACTIVE: '.pwhook-carousel-active',
		SELECTOR_ACTIVE_ITEM: `.pwhook-carousel-active.${runtimeClasses.carouselItem}`,
		SELECTOR_ITEM_IMG: `.${runtimeClasses.carouselItem} img`,
		SELECTOR_INDICATORS: `.${runtimeClasses.carouselIndicators}`,
	}) as typeof bootstrap.Carousel
}

export function configureVeCarousel(runtimeClasses: VeCarouselRuntimeClasses): typeof bootstrap.Carousel {
	const VeCarousel = createVeCarousel(runtimeClasses)

	// Re-register data API handlers so carousels use VE class selectors.
	// @ts-expect-error bootstrap exposes this in runtime but not in types
	VeCarousel.destroy()
	// @ts-expect-error bootstrap exposes this in runtime but not in types
	VeCarousel.init()

	// Expose VeCarousel globally so test scripts can access it
	if (typeof window !== 'undefined') {
		;(window as Window & { VeCarousel?: typeof bootstrap.Carousel }).VeCarousel = VeCarousel
	}

	return VeCarousel
}