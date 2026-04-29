import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledBaseButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-disabled-base"
				autocomplete="off"
			/>
			<label class={`${btn}`} for="id-btn-solid-toggle-disabled-base">
				Toggle Button
			</label>
		</div>
	)
}

export default SolidToggleDisabledBaseButton

// @screenshot *: 360x120 120
