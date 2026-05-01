import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const ToggleActiveDisabledSmallButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnPrimary, btnSm } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-sizes-toggle-active-disabled-small"
				checked
				autocomplete="off"
			/>
			<label
				class={`${btn} ${btnPrimary} ${btnSm}`}
				for="id-btn-sizes-toggle-active-disabled-small"
			>
				Checked Toggle Small button
			</label>
		</div>
	)
}

export default ToggleActiveDisabledSmallButton

// @screenshot *: 360x120 120
