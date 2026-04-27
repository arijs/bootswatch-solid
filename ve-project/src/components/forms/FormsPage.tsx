import type { Component } from 'solid-js'
import FormsSection from './FormsSection'
import { useVeFormsThemeClasses } from '../../themes/runtime/hooks'

const FormsPage: Component = () => {
	const { bsTheme, containerFluid } = useVeFormsThemeClasses()

	return (
		<div class={`${bsTheme} ${containerFluid}`}>
			<FormsSection />
		</div>
	)
}

export default FormsPage
