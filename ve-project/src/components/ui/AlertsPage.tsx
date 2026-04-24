import type { Component } from 'solid-js'
import { body } from '../../themes/bootstrap/body.css'
import { containerFluid } from '../../themes/bootstrap/container.css'
import { bsTheme } from '../../themes/bootstrap/_vars.css'
import Alerts from './Alerts'

const AlertsPage: Component = () => (
	<div class={`${bsTheme} ${body} ${containerFluid}`}>
		<Alerts />
	</div>
)

export default AlertsPage
