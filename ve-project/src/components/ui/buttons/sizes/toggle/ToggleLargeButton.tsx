import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const ToggleLargeButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnLg, btnPrimary } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-sizes-toggle-large"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnPrimary} ${btnLg}`} for="id-btn-sizes-toggle-large">
				Toggle Large button
			</label>
		</div>
	)
}

export default ToggleLargeButton

// @screenshot *: 360x120 120
