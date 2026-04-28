import type { Component } from 'solid-js'
import { useVeSpinnerThemeClasses } from '../../../themes/runtime/hooks'

const BorderDangerSpinner: Component = () => {
	const cls = useVeSpinnerThemeClasses()

	return (
<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
<div class={`${cls.spinnerBorder} ${cls.textDanger}`}>
<span class={cls.visuallyHidden}>Loading...</span>
</div>
</div>
)
}

export default BorderDangerSpinner

// @screenshot *: 360x120 120
