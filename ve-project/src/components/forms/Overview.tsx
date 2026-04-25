import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BasicForm from './overview/BasicForm'
import Checkbox from './overview/Checkbox'
import FileInput from './overview/FileInput'
import RadioButtons from './overview/RadioButtons'
import RangeInput from './overview/RangeInput'
import SwitchCheckbox from './overview/SwitchCheckbox'

const Overview: Component = () => (
	<article class="my-3" id="overview">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Overview</h3>
			<DocLink href="/forms/overview" />
			<DocLink href="/forms/overview/basic-form">Basic Form</DocLink>
			<DocLink href="/forms/overview/checkbox">Checkbox</DocLink>
			<DocLink href="/forms/overview/radio-buttons">Radio Buttons</DocLink>
			<DocLink href="/forms/overview/switch-checkbox">Switch Checkbox</DocLink>
			<DocLink href="/forms/overview/file-input">File Input</DocLink>
			<DocLink href="/forms/overview/range-input">Range Input</DocLink>
		</div>

		<div>
			<BasicForm />
			<Checkbox />
			<RadioButtons />
			<SwitchCheckbox />
			<FileInput />
			<RangeInput />
		</div>
	</article>
)

export default Overview
