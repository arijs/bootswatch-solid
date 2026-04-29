import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleDisabledSuccessButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineSuccess } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-disabled-success"
				autocomplete="off"
			/>
			<label
				class={`${btn} ${btnOutlineSuccess}`}
				for="id-btn-outline-toggle-disabled-success"
			>
				Toggle Success
			</label>
		</div>
	)
}

export default OutlineToggleDisabledSuccessButton

// @screenshot *: 360x120 120
