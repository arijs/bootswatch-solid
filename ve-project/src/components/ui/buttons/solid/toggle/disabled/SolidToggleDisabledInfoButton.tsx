import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledInfoButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnInfo } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-disabled-info"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnInfo}`} for="id-btn-solid-toggle-disabled-info">
				Toggle Info
			</label>
		</div>
	)
}

export default SolidToggleDisabledInfoButton

// @screenshot *: 360x120 120
