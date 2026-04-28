import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import { useVeContentsThemeClasses } from '../../themes/runtime/hooks'
import CarouselExample from './carousel/CarouselExample'

const Carousel: Component = () => {
	const cls = useVeContentsThemeClasses()

	return (
		<article class={cls.my3} id="carousel">
			<div class={`${cls.bdHeading} ${cls.stickyXlTop} ${cls.alignSelfStart} ${cls.mt5} ${cls.mb3} ${cls.mtXl0} ${cls.mbXl2}`}>
				<h3 class={cls.h3}>Carousel</h3>
				<DocLink href="/ui/carousel" />
				<DocLink href="/ui/carousel/carousel-example">Carousel</DocLink>
			</div>

			<div>
				<CarouselExample />
			</div>
		</article>
	)
}

export default Carousel
