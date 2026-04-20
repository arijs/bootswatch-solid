import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import FigureExample from './figures/FigureExample'

const Figures: Component = () => (
	<article class="my-3" id="figures">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Figures</h3>
			<DocLink href="/contents/figures" />
			<DocLink href="/contents/figures/figure-example">Figure</DocLink>
		</div>

		<div>
			<FigureExample />
		</div>
	</article>
)

export default Figures
