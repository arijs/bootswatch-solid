import type { Component } from 'solid-js'
import { useVeProgressThemeClasses } from '../../../themes/runtime/hooks'

const Progress100: Component = () => {
	const cls = useVeProgressThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={cls.progress}>
				<div
					class={`${cls.progressBar} ${cls.progressBarDanger}`}
					style={{ width: '100%' }}
				>
					100%
				</div>
			</div>
		</div>
	)
}

export default Progress100

// @screenshot *: 360x120 120
