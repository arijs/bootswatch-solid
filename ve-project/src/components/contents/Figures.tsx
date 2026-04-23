import type { Component } from 'solid-js'
import { alignSelfStart, bdHeading, mb3, mbXl2, mt5, mtXl0, my3, stickyXlTop } from '../../themes/bootstrap/contents/generated.css'
import DocLink from '../common/DocLink'
import FigureExample from './figures/FigureExample'

const Figures: Component = () => (
	<article class={`my-3 ${my3}`} id="figures">
		<div class={`bd-heading ${bdHeading} sticky-xl-top ${stickyXlTop} align-self-start ${alignSelfStart} mt-5 ${mt5} mb-3 ${mb3} mt-xl-0 ${mtXl0} mb-xl-2 ${mbXl2}`}>
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
