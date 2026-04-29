import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckPrimaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnPrimary } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button type="button" class={`${btn} ${btnPrimary} pwhook-btn`} data-bs-toggle="button">
				Primary
			</button>
		</div>
	)
}

export default SolidCheckPrimaryButton

// @screenshot *: 360x120 120
