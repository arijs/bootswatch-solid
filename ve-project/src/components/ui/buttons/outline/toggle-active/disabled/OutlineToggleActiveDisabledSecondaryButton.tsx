import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleActiveDisabledSecondaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineSecondary } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-active-disabled-secondary"
				checked
				autocomplete="off"
			/>
			<label
				class={`${btn} ${btnOutlineSecondary}`}
				for="id-btn-outline-toggle-active-disabled-secondary"
			>
				Checked Toggle Secondary
			</label>
		</div>
	)
}

export default OutlineToggleActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
