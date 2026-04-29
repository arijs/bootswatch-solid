import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledLinkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnLink } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-disabled-link"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnLink}`} for="id-btn-solid-toggle-disabled-link">
				Toggle Link
			</label>
		</div>
	)
}

export default SolidToggleDisabledLinkButton

// @screenshot *: 360x120 120
