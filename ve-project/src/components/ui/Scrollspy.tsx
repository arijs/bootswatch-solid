import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import ScrollspyExample from './scrollspy/ScrollspyExample'

const Scrollspy: Component = () => (
	<article id="scrollspy">
		<div>
			<h3>Scrollspy</h3>
			<DocLink href="/ui/scrollspy" />
			<DocLink href="/ui/scrollspy/scrollspy-example">Scrollspy</DocLink>
		</div>

		<div>
			<ScrollspyExample />
		</div>
	</article>
)

export default Scrollspy
