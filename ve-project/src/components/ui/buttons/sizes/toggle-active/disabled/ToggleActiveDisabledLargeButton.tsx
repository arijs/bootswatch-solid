import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const ToggleActiveDisabledLargeButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnLg, btnPrimary } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-sizes-toggle-active-disabled-large"
				checked
				autocomplete="off"
			/>
			<label
				class={`${btn} ${btnPrimary} ${btnLg}`}
				for="id-btn-sizes-toggle-active-disabled-large"
			>
				Checked Toggle Large button
			</label>
		</div>
	)
}

export default ToggleActiveDisabledLargeButton

// @screenshot *: 360x120 120
