import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineCheckDangerButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineDanger } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnOutlineDanger} pwhook-btn`}
				data-bs-toggle="button"
			>
				Danger
			</button>
		</div>
	)
}

export default OutlineCheckDangerButton

// @screenshot *: 360x120 120
