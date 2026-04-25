import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import FloatingLabelsExample from './floating-labels/FloatingLabelsExample'

const FloatingLabels: Component = () => (
	<article class="my-3" id="floating-labels">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Floating labels</h3>
			<DocLink href="/forms/floating-labels" />
			<DocLink href="/forms/floating-labels/floating-labels-example">Floating Labels</DocLink>
		</div>

		<div>
			<FloatingLabelsExample />
		</div>
	</article>
)

export default FloatingLabels
