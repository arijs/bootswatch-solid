import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleDangerButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnDanger } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-danger"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnDanger}`} for="id-btn-solid-toggle-danger">
				Toggle Danger
			</label>
		</div>
	)
}

export default SolidToggleDangerButton

// @screenshot *: 360x120 120
