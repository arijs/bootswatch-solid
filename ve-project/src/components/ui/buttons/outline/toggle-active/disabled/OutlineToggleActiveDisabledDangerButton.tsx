import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleActiveDisabledDangerButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnOutlineDanger,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-disabled-danger" checked autocomplete="off"  />
		<label class={`${btn} ${btnOutlineDanger}`} for="id-btn-outline-toggle-active-disabled-danger">Checked Toggle Danger</label>
	</div>
	)
}

export default OutlineToggleActiveDisabledDangerButton

// @screenshot *: 360x120 120
