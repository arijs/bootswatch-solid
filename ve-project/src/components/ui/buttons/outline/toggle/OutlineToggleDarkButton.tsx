import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleDarkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineDark } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-dark"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineDark}`} for="id-btn-outline-toggle-dark">
				Toggle Dark
			</label>
		</div>
	)
}

export default OutlineToggleDarkButton

// @screenshot *: 360x120 120
