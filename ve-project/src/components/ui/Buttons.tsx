import { For, type Component } from 'solid-js'
import DocLink from '../common/DocLink'
import { buttonLinks } from './buttons/buttonLinks'

const Buttons: Component = () => (
	<article class="my-3" id="buttons">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Buttons</h3>
			<DocLink href="/ui/buttons" />
			<For each={buttonLinks}>{(entry) => <DocLink href={entry().href}>{entry().label}</DocLink>}</For>
		</div>
	</article>
)

export default Buttons
