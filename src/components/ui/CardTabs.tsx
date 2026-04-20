import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import CardTabsExample from './card-tabs/CardTabsExample'

const CardTabs: Component = () => (
	<article class="my-3" id="card-tabs">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Card Tabs</h3>
			<DocLink href="/ui/card-tabs" />
			<DocLink href="/ui/card-tabs/card-tabs-example">Card Tabs</DocLink>
		</div>

		<div>
			<CardTabsExample />
		</div>
	</article>
)

export default CardTabs

