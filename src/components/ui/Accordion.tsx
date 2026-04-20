import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import AccordionExample from './accordion/AccordionExample'

const Accordion: Component = () => (
	<article class="my-3" id="accordion">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Accordion</h3>
			<DocLink href="/ui/accordion" />
			<DocLink href="/ui/accordion/accordion-example">Accordion</DocLink>
		</div>

		<div>
			<AccordionExample />
		</div>
	</article>
)

export default Accordion

