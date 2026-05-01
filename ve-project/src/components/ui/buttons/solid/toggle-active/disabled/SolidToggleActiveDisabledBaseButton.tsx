import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleActiveDisabledBaseButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-base"
				checked
				autocomplete="off"
			/>
			<label class={`${btn}`} for="id-btn-solid-toggle-active-disabled-base">
				Checked Toggle Button
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledBaseButton

// @screenshot *: 360x120 120
