import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import InvalidCheckboxes from './validation/InvalidCheckboxes'
import InvalidRadios from './validation/InvalidRadios'
import InvalidStateZip from './validation/InvalidStateZip'
import InvalidUsernameCity from './validation/InvalidUsernameCity'
import ValidCheckboxes from './validation/ValidCheckboxes'
import ValidNames from './validation/ValidNames'
import ValidRadios from './validation/ValidRadios'

const Validation: Component = () => (
	<article class="my-3" id="validation">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Validation</h3>
			<DocLink href="/forms/validation" />
			<DocLink href="/forms/validation/valid-names">Valid Names</DocLink>
			<DocLink href="/forms/validation/invalid-username-city">
				Invalid Username and City
			</DocLink>
			<DocLink href="/forms/validation/invalid-state-zip">Invalid State and Zip</DocLink>
			<DocLink href="/forms/validation/invalid-checkboxes">Invalid Checkboxes</DocLink>
			<DocLink href="/forms/validation/invalid-radios">Invalid Radios</DocLink>
			<DocLink href="/forms/validation/valid-checkboxes">Valid Checkboxes</DocLink>
			<DocLink href="/forms/validation/valid-radios">Valid Radios</DocLink>
		</div>

		<div>
			<ValidNames />
			<InvalidUsernameCity />
			<InvalidStateZip />
			<InvalidCheckboxes />
			<InvalidRadios />
			<ValidCheckboxes />
			<ValidRadios />
		</div>
	</article>
)

export default Validation
