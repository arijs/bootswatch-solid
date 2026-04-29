import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleActiveInfoButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnInfo } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-active-info"
				checked
				autocomplete="off"
			/>
			<label class={`${btn} ${btnInfo}`} for="id-btn-solid-toggle-active-info">
				Checked Toggle Info
			</label>
		</div>
	)
}

export default SolidToggleActiveInfoButton

// @screenshot *: 360x120 120
