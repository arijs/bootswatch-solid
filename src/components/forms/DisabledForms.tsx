import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import DisabledCheckbox from './disabled/DisabledCheckbox'
import DisabledFieldset from './disabled/DisabledFieldset'
import DisabledFileRange from './disabled/DisabledFileRange'
import DisabledRadioButtons from './disabled/DisabledRadioButtons'
import DisabledSwitchCheckbox from './disabled/DisabledSwitchCheckbox'

const DisabledForms: Component = () => (
	<article class="my-3" id="disabled-forms">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Disabled forms</h3>
			<DocLink href="/forms/disabled" />
			<DocLink href="/forms/disabled/disabled-fieldset">Disabled Fieldset</DocLink>
			<DocLink href="/forms/disabled/disabled-checkbox">Disabled Checkbox</DocLink>
			<DocLink href="/forms/disabled/disabled-radio-buttons">Disabled Radio Buttons</DocLink>
			<DocLink href="/forms/disabled/disabled-switch-checkbox">
				Disabled Switch Checkbox
			</DocLink>
			<DocLink href="/forms/disabled/disabled-file-range">Disabled File and Range</DocLink>
		</div>

		<div>
			<DisabledFieldset />
			<DisabledCheckbox />
			<DisabledRadioButtons />
			<DisabledSwitchCheckbox />
			<DisabledFileRange />
		</div>
	</article>
)

export default DisabledForms
