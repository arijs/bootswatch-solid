import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import AlignedDropdown from './dropdowns/AlignedDropdown'
import DirectionalDropdowns from './dropdowns/DirectionalDropdowns'
import SizesDropdowns from './dropdowns/SizesDropdowns'
import SplitDropdowns from './dropdowns/SplitDropdowns'

const Dropdowns: Component = () => (
	<article class="my-3" id="dropdowns">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Dropdowns</h3>
			<DocLink href="/ui/dropdowns" />
			<DocLink href="/ui/dropdowns/sizes-dropdowns">Sizes Dropdowns</DocLink>
			<DocLink href="/ui/dropdowns/split-dropdowns">Split Dropdowns</DocLink>
			<DocLink href="/ui/dropdowns/directional-dropdowns">Directional Dropdowns</DocLink>
			<DocLink href="/ui/dropdowns/aligned-dropdown">Aligned Dropdown</DocLink>
		</div>

		<div>
			<SizesDropdowns />
			<SplitDropdowns />
			<DirectionalDropdowns />
			<AlignedDropdown />
		</div>
	</article>
)

export default Dropdowns
