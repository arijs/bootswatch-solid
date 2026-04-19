import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BorderSpinners from './spinners/BorderSpinners'
import GrowSpinners from './spinners/GrowSpinners'

const Spinners: Component = () => (
	<article class="my-3" id="spinners">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Spinners</h3>
			<DocLink href="/ui/spinners" />
			<DocLink href="/ui/spinners/border-spinners">Border Spinners</DocLink>
			<DocLink href="/ui/spinners/grow-spinners">Grow Spinners</DocLink>
		</div>

		<div>
			<BorderSpinners />
			<GrowSpinners />
		</div>
	</article>
)

export default Spinners
