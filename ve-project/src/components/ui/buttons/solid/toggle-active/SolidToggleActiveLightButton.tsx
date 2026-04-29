import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleActiveLightButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnLight } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-active-light"
				checked
				autocomplete="off"
			/>
			<label class={`${btn} ${btnLight}`} for="id-btn-solid-toggle-active-light">
				Checked Toggle Light
			</label>
		</div>
	)
}

export default SolidToggleActiveLightButton

// @screenshot *: 360x120 120
