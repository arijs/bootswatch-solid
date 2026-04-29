import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const ToggleActiveLargeButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnLg, btnPrimary } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-sizes-toggle-active-large"
				checked
				autocomplete="off"
			/>
			<label class={`${btn} ${btnPrimary} ${btnLg}`} for="id-btn-sizes-toggle-active-large">
				Checked Toggle Large button
			</label>
		</div>
	)
}

export default ToggleActiveLargeButton

// @screenshot *: 360x120 120
