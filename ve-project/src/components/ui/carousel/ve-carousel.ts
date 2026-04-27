import * as bootstrap from 'bootstrap'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'
import {
	carousel,
	carouselActive,
	carouselIndicators,
	carouselItem,
	carouselItemEnd,
	carouselItemNext,
	carouselItemPrev,
	carouselItemStart,
	carouselSlide,
} from '../../../themes/bootstrap/ui/carousel/base.css'

const VeCarousel = (bootstrap.Carousel as unknown as BootstrapWithDefaults<typeof bootstrap.Carousel>).extendDefaultConfig({
	CLASS_NAME_CAROUSEL: carousel,
	// CLASS_NAME_ACTIVE: 'pwhook-carousel-active',
	CLASS_NAME_ACTIVE: `${carouselActive} pwhook-carousel-active`,
	CLASS_NAME_SLIDE: carouselSlide,
	CLASS_NAME_END: carouselItemEnd,
	CLASS_NAME_START: carouselItemStart,
	CLASS_NAME_NEXT: carouselItemNext,
	CLASS_NAME_PREV: carouselItemPrev,
	SELECTOR_ITEM: `.${carouselItem}`,
	SELECTOR_ACTIVE: '.pwhook-carousel-active',
	SELECTOR_ACTIVE_ITEM: `.pwhook-carousel-active.${carouselItem}`,
	SELECTOR_ITEM_IMG: `.${carouselItem} img`,
	SELECTOR_INDICATORS: `.${carouselIndicators}`,
}) as typeof bootstrap.Carousel

// Re-register data API handlers so carousels use VE class selectors.
// @ts-expect-error bootstrap exposes this in runtime but not in types
VeCarousel.destroy()
// @ts-expect-error bootstrap exposes this in runtime but not in types
VeCarousel.init()

// Expose VeCarousel globally so test scripts can access it
if (typeof window !== 'undefined') {
	;(window as any).VeCarousel = VeCarousel
}

export { VeCarousel }