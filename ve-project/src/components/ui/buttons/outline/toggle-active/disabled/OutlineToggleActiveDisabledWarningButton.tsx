import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleActiveDisabledWarningButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineWarning } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-active-disabled-warning"
				checked
				autocomplete="off"
			/>
			<label
				class={`${btn} ${btnOutlineWarning}`}
				for="id-btn-outline-toggle-active-disabled-warning"
			>
				Checked Toggle Warning
			</label>
		</div>
	)
}

export default OutlineToggleActiveDisabledWarningButton

// @screenshot *: 360x120 120
