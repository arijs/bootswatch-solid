import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledDangerButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnDanger } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-disabled-danger"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnDanger}`} for="id-btn-solid-toggle-disabled-danger">
				Toggle Danger
			</label>
		</div>
	)
}

export default SolidToggleDisabledDangerButton

// @screenshot *: 360x120 120
