import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleActiveDisabledPrimaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnPrimary } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-primary"
				checked
				autocomplete="off"
			/>
			<label class={`${btn} ${btnPrimary}`} for="id-btn-solid-toggle-active-disabled-primary">
				Checked Toggle Primary
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
