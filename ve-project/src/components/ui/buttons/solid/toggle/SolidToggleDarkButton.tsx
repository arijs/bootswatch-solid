import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleDarkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnDark } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-dark"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnDark}`} for="id-btn-solid-toggle-dark">
				Toggle Dark
			</label>
		</div>
	)
}

export default SolidToggleDarkButton

// @screenshot *: 360x120 120
