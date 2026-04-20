import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import CarouselExample from './carousel/CarouselExample'

const Carousel: Component = () => (
	<article class="my-3" id="carousel">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Carousel</h3>
			<DocLink href="/ui/carousel" />
			<DocLink href="/ui/carousel/carousel-example">Carousel</DocLink>
		</div>

		<div>
			<CarouselExample />
		</div>
	</article>
)

export default Carousel
