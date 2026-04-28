import type { Component } from 'solid-js'
import { useVeAlertThemeClasses } from '../../../themes/runtime/hooks'

const WarningAlert: Component = () => {
	const cls = useVeAlertThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={`${cls.alert} ${cls.alertWarning} ${cls.alertDismissible} ${cls.fade} ${cls.show}`}>
				A simple warning alert with{' '}
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a href="#" onClick={(e) => e.preventDefault()} class={cls.alertLink}>
					an example link
				</a>
				. Give it a click if you like.
				<button type="button" class={cls.btnClose} data-bs-dismiss="alert" data-bs-target={`.${cls.alert}`} aria-label="Close" />
			</div>
		</div>
	)
}

export default WarningAlert

// @screenshot *: 360x120 120
// @screenshot quartz: 360x136 136
