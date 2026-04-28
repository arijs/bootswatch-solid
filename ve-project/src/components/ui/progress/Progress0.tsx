import type { Component } from 'solid-js'
import { useVeProgressThemeClasses } from '../../../themes/runtime/hooks'

const Progress0: Component = () => {
	const cls = useVeProgressThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={cls.progress}>
				<div class={cls.progressBar} style={{ width: '0' }}>
					0%
				</div>
			</div>
		</div>
	)
}

export default Progress0

// @screenshot *: 360x120 120
