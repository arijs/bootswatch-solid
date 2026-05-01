import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../themes/runtime/hooks'
import FormsSection from './FormsSection'

const FormsPage: Component = () => {
	const { bsTheme, containerFluid } = useVeFormsThemeClasses()

	return (
		<div class={`${bsTheme} ${containerFluid}`}>
			<FormsSection />
		</div>
	)
}

export default FormsPage
