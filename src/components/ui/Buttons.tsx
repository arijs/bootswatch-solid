import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import ButtonSizes from './buttons/ButtonSizes'
import OutlineButtons from './buttons/OutlineButtons'
import SolidButtons from './buttons/SolidButtons'

const Buttons: Component = () => (
	<article class="my-3" id="buttons">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Buttons</h3>
			<DocLink href="/ui/buttons" />
			<DocLink href="/ui/buttons/solid-buttons">Solid Buttons</DocLink>
			<DocLink href="/ui/buttons/outline-buttons">Outline Buttons</DocLink>
			<DocLink href="/ui/buttons/button-sizes">Button Sizes</DocLink>
		</div>

		<div>
			<SolidButtons />
			<OutlineButtons />
			<ButtonSizes />
		</div>
	</article>
)

export default Buttons
