import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import CardsGrid from './card/CardsGrid'

const Card: Component = () => (
	<article class="my-3" id="card">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Card</h3>
			<DocLink href="/ui/card" />
			<DocLink href="/ui/card/cards-grid">Cards Grid</DocLink>
			<DocLink href="/ui/card/image-top-card">Image Top Card</DocLink>
			<DocLink href="/ui/card/featured-card">Featured Card</DocLink>
			<DocLink href="/ui/card/list-card">List Card</DocLink>
			<DocLink href="/ui/card/horizontal-card">Horizontal Card</DocLink>
		</div>

		<div>
			<CardsGrid />
		</div>
	</article>
)

export default Card
