import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleLinkButton: Component = () => {
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
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-link" autocomplete="off" />
		<label class={`${btn} ${btnLink}`} for="id-btn-solid-toggle-link">Toggle Link</label>
	</div>
	)
}

export default SolidToggleLinkButton

// @screenshot *: 360x120 120
