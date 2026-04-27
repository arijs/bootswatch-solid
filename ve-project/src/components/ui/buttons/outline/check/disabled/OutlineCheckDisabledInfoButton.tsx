import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineCheckDisabledInfoButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnOutlineInfo,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineInfo} pwhook-btn`} data-bs-toggle="button">
			Info
		</button>
	</div>
	)
}

export default OutlineCheckDisabledInfoButton

// @screenshot *: 360x120 120
