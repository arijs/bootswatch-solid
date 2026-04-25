import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import LargeControls from './sizing/LargeControls'
import SmallControls from './sizing/SmallControls'

const Sizing: Component = () => (
	<article class="my-3" id="sizing">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Sizing</h3>
			<DocLink href="/forms/sizing" />
			<DocLink href="/forms/sizing/large-controls">Large Controls</DocLink>
			<DocLink href="/forms/sizing/small-controls">Small Controls</DocLink>
		</div>

		<div>
			<LargeControls />
			<SmallControls />
		</div>
	</article>
)

export default Sizing
