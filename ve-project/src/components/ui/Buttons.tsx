import { type Component, For } from 'solid-js'
import DocLink from '../common/DocLink'
import { buttonLinks } from './buttons/buttonLinks'

const Buttons: Component = () => (
	<article id="buttons">
		<div>
			<h3>Buttons</h3>
			<DocLink href="/ui/buttons" />
			<For each={buttonLinks}>
				{(entry) => <DocLink href={entry().href}>{entry().label}</DocLink>}
			</For>
		</div>
	</article>
)

export default Buttons
