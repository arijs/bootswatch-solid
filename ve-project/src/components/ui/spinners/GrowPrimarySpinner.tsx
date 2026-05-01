import type { Component } from 'solid-js'
import { useVeSpinnerThemeClasses } from '../../../themes/runtime/hooks'

const GrowPrimarySpinner: Component = () => {
	const cls = useVeSpinnerThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={`${cls.spinnerGrow} ${cls.textPrimary}`}>
				<span class={cls.visuallyHidden}>Loading...</span>
			</div>
		</div>
	)
}

export default GrowPrimarySpinner

// @screenshot *: 360x120 120
