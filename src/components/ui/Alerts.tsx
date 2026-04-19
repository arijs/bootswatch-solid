import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import DismissibleAlerts from './alerts/DismissibleAlerts'
import HeadingAlert from './alerts/HeadingAlert'

const Alerts: Component = () => (
	<article class="my-3" id="alerts">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Alerts</h3>
			<DocLink href="/ui/alerts" />
			<DocLink href="/ui/alerts/dismissible-alerts">Dismissible Alerts</DocLink>
			<DocLink href="/ui/alerts/heading-alert">Heading Alert</DocLink>
		</div>

		<div>
			<DismissibleAlerts />
			<HeadingAlert />
		</div>
	</article>
)

export default Alerts
