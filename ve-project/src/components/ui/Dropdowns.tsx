import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import AlignedDropdown from './dropdowns/AlignedDropdown'
import EndDropdown from './dropdowns/EndDropdown'
import LargeDropdown from './dropdowns/LargeDropdown'
import NormalDropdown from './dropdowns/NormalDropdown'
import SmallDropdown from './dropdowns/SmallDropdown'
import SplitDangerDropdown from './dropdowns/SplitDangerDropdown'
import SplitDarkDropdown from './dropdowns/SplitDarkDropdown'
import SplitInfoDropdown from './dropdowns/SplitInfoDropdown'
import SplitLightDropdown from './dropdowns/SplitLightDropdown'
import SplitPrimaryDropdown from './dropdowns/SplitPrimaryDropdown'
import SplitSecondaryDropdown from './dropdowns/SplitSecondaryDropdown'
import SplitSuccessDropdown from './dropdowns/SplitSuccessDropdown'
import SplitWarningDropdown from './dropdowns/SplitWarningDropdown'
import StartDropdown from './dropdowns/StartDropdown'
import UpDropdown from './dropdowns/UpDropdown'

const Dropdowns: Component = () => (
	<article class="my-3" id="dropdowns">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Dropdowns</h3>
			<DocLink href="/ui/dropdowns" />
			<DocLink href="/ui/dropdowns/small-dropdown">Small Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/normal-dropdown">Normal Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/large-dropdown">Large Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/split-primary-dropdown">Split Primary Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/split-secondary-dropdown">
				Split Secondary Dropdown
			</DocLink>
			<DocLink href="/ui/dropdowns/split-success-dropdown">Split Success Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/split-info-dropdown">Split Info Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/split-warning-dropdown">Split Warning Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/split-danger-dropdown">Split Danger Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/split-light-dropdown">Split Light Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/split-dark-dropdown">Split Dark Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/end-dropdown">End Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/up-dropdown">Up Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/start-dropdown">Start Dropdown</DocLink>
			<DocLink href="/ui/dropdowns/aligned-dropdown">Aligned Dropdown</DocLink>
		</div>

		<div>
			<SmallDropdown />
			<NormalDropdown />
			<LargeDropdown />
			<SplitPrimaryDropdown />
			<SplitSecondaryDropdown />
			<SplitSuccessDropdown />
			<SplitInfoDropdown />
			<SplitWarningDropdown />
			<SplitDangerDropdown />
			<SplitLightDropdown />
			<SplitDarkDropdown />
			<EndDropdown />
			<UpDropdown />
			<StartDropdown />
			<AlignedDropdown />
		</div>
	</article>
)

export default Dropdowns
