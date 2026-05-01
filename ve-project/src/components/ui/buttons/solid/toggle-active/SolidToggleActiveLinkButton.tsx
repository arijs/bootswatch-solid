import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleActiveLinkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnLink } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-active-link"
				checked
				autocomplete="off"
			/>
			<label class={`${btn} ${btnLink}`} for="id-btn-solid-toggle-active-link">
				Checked Toggle Link
			</label>
		</div>
	)
}

export default SolidToggleActiveLinkButton

// @screenshot *: 360x120 120
