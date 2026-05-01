import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../themes/runtime/hooks'

const OutlineDangerButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineDanger } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button type="button" class={`${btn} ${btnOutlineDanger} pwhook-btn`}>
				Danger
			</button>
		</div>
	)
}

export default OutlineDangerButton

// @screenshot *: 360x120 120
