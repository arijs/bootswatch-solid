import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleDisabledDarkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineDark } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-disabled-dark"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineDark}`} for="id-btn-outline-toggle-disabled-dark">
				Toggle Dark
			</label>
		</div>
	)
}

export default OutlineToggleDisabledDarkButton

// @screenshot *: 360x120 120
