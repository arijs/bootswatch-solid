import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleActiveDisabledWarningButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnWarning } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-warning"
				checked
				autocomplete="off"
			/>
			<label class={`${btn} ${btnWarning}`} for="id-btn-solid-toggle-active-disabled-warning">
				Checked Toggle Warning
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledWarningButton

// @screenshot *: 360x120 120
