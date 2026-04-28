import type { Component } from 'solid-js'
import { useVeGlobalThemeClasses } from '../../themes/runtime/hooks'
import Alerts from './Alerts'

const AlertsPage: Component = () => {
	const cls = useVeGlobalThemeClasses()

	return (
		<div class={`${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<Alerts />
		</div>
	)
}

export default AlertsPage
