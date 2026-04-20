import type { Component } from 'solid-js'
import FeaturedCard from './FeaturedCard'
import HorizontalCard from './HorizontalCard'
import ImageTopCard from './ImageTopCard'
import ListCard from './ListCard'

const CardsGrid: Component = () => (
	<div class="bd-example container-fluid position-relative overflow-x-hidden">
		<div class="row row-cols-1 row-cols-md-2 g-4">
			<div class="col">
				<ImageTopCard />
			</div>
			<div class="col">
				<FeaturedCard />
			</div>
			<div class="col">
				<ListCard />
			</div>
			<div class="col">
				<HorizontalCard />
			</div>
		</div>
	</div>
)

export default CardsGrid
