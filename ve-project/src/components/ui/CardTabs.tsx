import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import CardTabsExample from './card-tabs/CardTabsExample'

const CardTabs: Component = () => (
	<article id="card-tabs">
		<div>
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
