import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import {
	alignSelfStart,
	bdHeading,
	h3,
	mb3,
	mbXl2,
	mt5,
	mtXl0,
	my3,
	stickyXlTop,
} from '../../themes/bootstrap/contents/generated.css'
import CarouselExample from './carousel/CarouselExample'

const Carousel: Component = () => (
	<article class={my3} id="carousel">
		<div class={`${bdHeading} ${stickyXlTop} ${alignSelfStart} ${mt5} ${mb3} ${mtXl0} ${mbXl2}`}>
			<h3 class={h3}>Carousel</h3>
			<DocLink href="/ui/carousel" />
			<DocLink href="/ui/carousel/carousel-example">Carousel</DocLink>
		</div>

		<div>
			<CarouselExample />
		</div>
	</article>
)

export default Carousel
