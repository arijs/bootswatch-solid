import type { Component } from 'solid-js'
import { useVeProgressThemeClasses } from '../../../themes/runtime/hooks'

const Progress75: Component = () => {
	const cls = useVeProgressThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={cls.progress}>
				<div class={`${cls.progressBar} ${cls.progressBarWarning} ${cls.progressBarTextDark}`} style={{ width: '75%' }}>
					75%
				</div>
			</div>
		</div>
	)
}

export default Progress75

// @screenshot *: 360x120 120
