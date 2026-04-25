import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BreadcrumbExample from './breadcrumb/BreadcrumbExample'

const Breadcrumb: Component = () => (
	<article class="my-3" id="breadcrumb">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Breadcrumb</h3>
			<DocLink href="/ui/breadcrumb" />
			<DocLink href="/ui/breadcrumb/breadcrumb-example">Breadcrumb</DocLink>
		</div>

		<div>
			<BreadcrumbExample />
		</div>
	</article>
)

export default Breadcrumb
