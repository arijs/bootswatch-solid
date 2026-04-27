import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineCheckActiveDisabledInfoButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnOutlineInfo,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineInfo} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Info
		</button>
	</div>
	)
}

export default OutlineCheckActiveDisabledInfoButton

// @screenshot *: 360x120 120
