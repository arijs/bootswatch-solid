import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleActiveWarningButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnWarning } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-active-warning"
				checked
				autocomplete="off"
			/>
			<label class={`${btn} ${btnWarning}`} for="id-btn-solid-toggle-active-warning">
				Checked Toggle Warning
			</label>
		</div>
	)
}

export default SolidToggleActiveWarningButton

// @screenshot *: 360x120 120
