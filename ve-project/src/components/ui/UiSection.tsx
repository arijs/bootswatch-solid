import type { Component } from 'solid-js'
import Badge from './Badge'
import Buttons from './Buttons'
import Dropdowns from './Dropdowns'

const UiSection: Component = () => (
	<section id="ui">
		<h2>UI</h2>
		<Badge />
		<Buttons />
		<Dropdowns />
	</section>
)

export default UiSection
