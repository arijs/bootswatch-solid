import type { Component } from 'solid-js'
import { containerFluid } from '../../themes/bootstrap/container.css'
import { bsTheme } from '../../themes/bootstrap/_vars.css'
import FormsSection from './FormsSection'

const FormsPage: Component = () => (
	<div class={`${bsTheme} ${containerFluid}`}>
		<FormsSection />
	</div>
)

export default FormsPage
