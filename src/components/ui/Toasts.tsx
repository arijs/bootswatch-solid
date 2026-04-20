import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import ToastExample from './toasts/ToastExample'

const Toasts: Component = () => (
	<article class="my-3" id="toasts">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Toasts</h3>
			<DocLink href="/ui/toasts" />
			<DocLink href="/ui/toasts/toast-example">Toast</DocLink>
		</div>

		<div>
			<ToastExample />
		</div>
	</article>
)

export default Toasts
