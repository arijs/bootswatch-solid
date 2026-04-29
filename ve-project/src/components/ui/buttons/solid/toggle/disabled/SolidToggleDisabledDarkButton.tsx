import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledDarkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnDark } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-disabled-dark"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnDark}`} for="id-btn-solid-toggle-disabled-dark">
				Toggle Dark
			</label>
		</div>
	)
}

export default SolidToggleDisabledDarkButton

// @screenshot *: 360x120 120
