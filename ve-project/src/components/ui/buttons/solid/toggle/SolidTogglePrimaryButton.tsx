import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidTogglePrimaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnPrimary } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-primary"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnPrimary}`} for="id-btn-solid-toggle-primary">
				Toggle Primary
			</label>
		</div>
	)
}

export default SolidTogglePrimaryButton

// @screenshot *: 360x120 120
