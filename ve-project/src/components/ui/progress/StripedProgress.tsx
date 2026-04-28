import type { Component } from 'solid-js'
import { useVeProgressThemeClasses } from '../../../themes/runtime/hooks'

const StripedProgress: Component = () => {
	const cls = useVeProgressThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={cls.progress}>
				<div class={cls.progressBar} style={{ width: '15%' }}></div>
				<div
					class={`${cls.progressBar} ${cls.progressBarStriped} ${cls.progressBarAnimated} ${cls.progressBarSuccess}`}
					style={{ width: '40%' }}
				></div>
			</div>
		</div>
	)
}

export default StripedProgress

// @screenshot *: 360x120 120
