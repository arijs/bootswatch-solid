import type { Component } from 'solid-js'
import { useVeGlobalThemeClasses } from '../../../themes/runtime/hooks'
import FeaturedCard from './FeaturedCard'

const FeaturedCardExample: Component = () => {
	const cls = useVeGlobalThemeClasses()

	return (
		<div class={`${cls.bsTheme} ${cls.body}`}>
			<FeaturedCard />
		</div>
	)
}

export default FeaturedCardExample
