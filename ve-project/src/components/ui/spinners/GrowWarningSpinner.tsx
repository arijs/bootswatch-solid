import type { Component } from 'solid-js'
import { useVeSpinnerThemeClasses } from '../../../themes/runtime/hooks'

const GrowWarningSpinner: Component = () => {
	const cls = useVeSpinnerThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={`${cls.spinnerGrow} ${cls.textWarning}`}>
				<span class={cls.visuallyHidden}>Loading...</span>
			</div>
		</div>
	)
}

export default GrowWarningSpinner

// @screenshot *: 360x120 120
