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

// @screenshot *: 360x1488 1488
// @screenshot brite: 360x1382 1382
// @screenshot cyborg: 360x1496 1496
// @screenshot journal: 360x1480 1480
// @screenshot litera: 360x1556 1556
// @screenshot lumen: 360x1492 1492
// @screenshot lux: 360x1499 1499
// @screenshot materia: 360x1500 1500
// @screenshot morph: 360x1631 1631
// @screenshot quartz: 360x1800 1800
// @screenshot sandstone: 360x1484 1484
// @screenshot simplex: 360x1512 1512
// @screenshot sketchy: 360x1434 1434
// @screenshot slate: 360x1512 1512
// @screenshot spacelab: 360x1512 1512
// @screenshot vapor: 360x1494 1494
// @screenshot yeti: 360x1503 1503
// @screenshot zephyr: 360x1594 1594
