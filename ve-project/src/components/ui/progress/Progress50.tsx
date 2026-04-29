import type { Component } from 'solid-js'
import { useVeProgressThemeClasses } from '../../../themes/runtime/hooks'

const Progress50: Component = () => {
	const cls = useVeProgressThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={cls.progress}>
				<div
					class={`${cls.progressBar} ${cls.progressBarInfo} ${cls.progressBarTextDark}`}
					style={{ width: '50%' }}
				>
					50%
				</div>
			</div>
		</div>
	)
}

export default Progress50

// @screenshot *: 360x120 120
