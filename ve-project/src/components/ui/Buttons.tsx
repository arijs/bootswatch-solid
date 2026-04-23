import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import SolidPrimaryButton from './solid/SolidPrimaryButton'

const buttonExamples: Array<{
	href: string
	label: string
	component: Component
}> = [
	{ href: '/ui/buttons/solid/primary-button', label: 'Solid Primary Button', component: SolidPrimaryButton },
]

const Buttons: Component = () => (
	<article class="my-3" id="buttons">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Buttons</h3>
			<DocLink href="/ui/buttons" />
			{buttonExamples.map((entry) => (
				<DocLink href={entry.href}>{entry.label}</DocLink>
			))}
		</div>

		<div>
			{buttonExamples.map(({label, component: Component}) => (
				<>
					<h4>{label}</h4>
					<Component />
				</>
			))}
		</div>
	</article>
)

export default Buttons
