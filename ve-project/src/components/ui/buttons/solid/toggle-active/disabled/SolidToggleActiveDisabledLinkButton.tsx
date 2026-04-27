import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleActiveDisabledLinkButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnLink,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-disabled-link" checked autocomplete="off"  />
		<label class={`${btn} ${btnLink}`} for="id-btn-solid-toggle-active-disabled-link">Checked Toggle Link</label>
	</div>
	)
}

export default SolidToggleActiveDisabledLinkButton

// @screenshot *: 360x120 120
