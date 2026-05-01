import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineDisabledInfoButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineInfo } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button disabled type="button" class={`${btn} ${btnOutlineInfo} pwhook-btn`}>
				Info
			</button>
		</div>
	)
}

export default OutlineDisabledInfoButton

// @screenshot *: 360x120 120
