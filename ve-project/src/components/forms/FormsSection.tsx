import type { Component } from 'solid-js'
import DisabledForms from './DisabledForms'
import FloatingLabels from './FloatingLabels'
import InputGroup from './InputGroup'
import Overview from './Overview'
import Sizing from './Sizing'
import Validation from './Validation'

const FormsSection: Component = () => (
	<section id="forms">
		<h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Forms</h2>
		<Overview />
		<DisabledForms />
		<Sizing />
		<InputGroup />
		<FloatingLabels />
		<Validation />
	</section>
)

export default FormsSection
