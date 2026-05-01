import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleActiveDisabledPrimaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlinePrimary } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-active-disabled-primary"
				checked
				autocomplete="off"
			/>
			<label
				class={`${btn} ${btnOutlinePrimary}`}
				for="id-btn-outline-toggle-active-disabled-primary"
			>
				Checked Toggle Primary
			</label>
		</div>
	)
}

export default OutlineToggleActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
