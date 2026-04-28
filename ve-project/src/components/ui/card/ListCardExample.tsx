import type { Component } from 'solid-js'
import { useVeGlobalThemeClasses } from '../../../themes/runtime/hooks'
import ListCard from './ListCard'

const ListCardExample: Component = () => {
	const cls = useVeGlobalThemeClasses()

	return (
		<div class={`${cls.bsTheme} ${cls.body}`}>
			<ListCard />
		</div>
	)
}

export default ListCardExample
