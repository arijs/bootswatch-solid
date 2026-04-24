import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import DangerAlert from './alerts/DangerAlert'
import DarkAlert from './alerts/DarkAlert'
import HeadingAlert from './alerts/HeadingAlert'
import InfoAlert from './alerts/InfoAlert'
import LightAlert from './alerts/LightAlert'
import PrimaryAlert from './alerts/PrimaryAlert'
import SecondaryAlert from './alerts/SecondaryAlert'
import SuccessAlert from './alerts/SuccessAlert'
import WarningAlert from './alerts/WarningAlert'

const Alerts: Component = () => (
	<article class="my-3" id="alerts">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Alerts</h3>
			<DocLink href="/ui/alerts" />
			<DocLink href="/ui/alerts/primary-alert">Primary</DocLink>
			<DocLink href="/ui/alerts/secondary-alert">Secondary</DocLink>
			<DocLink href="/ui/alerts/success-alert">Success</DocLink>
			<DocLink href="/ui/alerts/danger-alert">Danger</DocLink>
			<DocLink href="/ui/alerts/warning-alert">Warning</DocLink>
			<DocLink href="/ui/alerts/info-alert">Info</DocLink>
			<DocLink href="/ui/alerts/light-alert">Light</DocLink>
			<DocLink href="/ui/alerts/dark-alert">Dark</DocLink>
			<DocLink href="/ui/alerts/heading-alert">Heading Alert</DocLink>
		</div>

		<div>
			<PrimaryAlert />
			<SecondaryAlert />
			<SuccessAlert />
			<DangerAlert />
			<WarningAlert />
			<InfoAlert />
			<LightAlert />
			<DarkAlert />
			<HeadingAlert />
		</div>
	</article>
)

export default Alerts
