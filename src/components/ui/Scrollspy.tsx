import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import ScrollspyExample from './scrollspy/ScrollspyExample'

const Scrollspy: Component = () => (
	<article class="my-3" id="scrollspy">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
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
