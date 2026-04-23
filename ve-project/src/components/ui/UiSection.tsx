import type { Component } from 'solid-js'
import Buttons from './Buttons'

const UiSection: Component = () => (
	<section id="ui">
		<h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">UI</h2>
		<Buttons />
	</section>
)

export default UiSection
