import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineCheckPrimaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnOutlinePrimary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnOutlinePrimary} pwhook-btn`} data-bs-toggle="button">
			Primary
		</button>
	</div>
	)
}

export default OutlineCheckPrimaryButton

// @screenshot *: 360x120 120
