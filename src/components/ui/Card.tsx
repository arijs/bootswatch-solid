import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import FeaturedCard from './card/FeaturedCard'
import HorizontalCard from './card/HorizontalCard'
import ImageTopCard from './card/ImageTopCard'
import ListCard from './card/ListCard'

const Card: Component = () => (
	<article class="my-3" id="card">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Card</h3>
			<DocLink href="/ui/card" />
			<DocLink href="/ui/card/image-top-card">Image Top Card</DocLink>
			<DocLink href="/ui/card/featured-card">Featured Card</DocLink>
			<DocLink href="/ui/card/list-card">List Card</DocLink>
			<DocLink href="/ui/card/horizontal-card">Horizontal Card</DocLink>
		</div>

		<div>
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
		</div>
	</article>
)

export default Card
