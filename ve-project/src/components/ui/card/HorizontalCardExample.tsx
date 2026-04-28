import type { Component } from 'solid-js'
import { useVeGlobalThemeClasses } from '../../../themes/runtime/hooks'
import HorizontalCard from './HorizontalCard'

const HorizontalCardExample: Component = () => {
	const cls = useVeGlobalThemeClasses()

	return (
		<div class={`${cls.bsTheme} ${cls.body}`}>
			<HorizontalCard />
		</div>
	)
}

export default HorizontalCardExample
