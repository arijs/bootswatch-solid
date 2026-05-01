import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleLightButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnLight } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-light"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnLight}`} for="id-btn-solid-toggle-light">
				Toggle Light
			</label>
		</div>
	)
}

export default SolidToggleLightButton

// @screenshot *: 360x120 120
