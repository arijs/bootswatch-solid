import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import LargeButton from './buttons/LargeButton'
import OutlineDangerButton from './buttons/OutlineDangerButton'
import OutlineDarkButton from './buttons/OutlineDarkButton'
import OutlineInfoButton from './buttons/OutlineInfoButton'
import OutlineLightButton from './buttons/OutlineLightButton'
import OutlinePrimaryButton from './buttons/OutlinePrimaryButton'
import OutlineSecondaryButton from './buttons/OutlineSecondaryButton'
import OutlineSuccessButton from './buttons/OutlineSuccessButton'
import OutlineWarningButton from './buttons/OutlineWarningButton'
import SmallButton from './buttons/SmallButton'
import SolidDangerButton from './buttons/SolidDangerButton'
import SolidDarkButton from './buttons/SolidDarkButton'
import SolidInfoButton from './buttons/SolidInfoButton'
import SolidLightButton from './buttons/SolidLightButton'
import SolidLinkButton from './buttons/SolidLinkButton'
import SolidPrimaryButton from './buttons/SolidPrimaryButton'
import SolidSecondaryButton from './buttons/SolidSecondaryButton'
import SolidSuccessButton from './buttons/SolidSuccessButton'
import SolidWarningButton from './buttons/SolidWarningButton'

const Buttons: Component = () => (
	<article class="my-3" id="buttons">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Buttons</h3>
			<DocLink href="/ui/buttons" />
			<DocLink href="/ui/buttons/solid-primary-button">Solid Primary Button</DocLink>
			<DocLink href="/ui/buttons/solid-secondary-button">Solid Secondary Button</DocLink>
			<DocLink href="/ui/buttons/solid-success-button">Solid Success Button</DocLink>
			<DocLink href="/ui/buttons/solid-danger-button">Solid Danger Button</DocLink>
			<DocLink href="/ui/buttons/solid-warning-button">Solid Warning Button</DocLink>
			<DocLink href="/ui/buttons/solid-info-button">Solid Info Button</DocLink>
			<DocLink href="/ui/buttons/solid-light-button">Solid Light Button</DocLink>
			<DocLink href="/ui/buttons/solid-dark-button">Solid Dark Button</DocLink>
			<DocLink href="/ui/buttons/solid-link-button">Solid Link Button</DocLink>
			<DocLink href="/ui/buttons/outline-primary-button">Outline Primary Button</DocLink>
			<DocLink href="/ui/buttons/outline-secondary-button">Outline Secondary Button</DocLink>
			<DocLink href="/ui/buttons/outline-success-button">Outline Success Button</DocLink>
			<DocLink href="/ui/buttons/outline-danger-button">Outline Danger Button</DocLink>
			<DocLink href="/ui/buttons/outline-warning-button">Outline Warning Button</DocLink>
			<DocLink href="/ui/buttons/outline-info-button">Outline Info Button</DocLink>
			<DocLink href="/ui/buttons/outline-light-button">Outline Light Button</DocLink>
			<DocLink href="/ui/buttons/outline-dark-button">Outline Dark Button</DocLink>
			<DocLink href="/ui/buttons/small-button">Small Button</DocLink>
			<DocLink href="/ui/buttons/large-button">Large Button</DocLink>
		</div>

		<div>
			<SolidPrimaryButton />
			<SolidSecondaryButton />
			<SolidSuccessButton />
			<SolidDangerButton />
			<SolidWarningButton />
			<SolidInfoButton />
			<SolidLightButton />
			<SolidDarkButton />
			<SolidLinkButton />
			<OutlinePrimaryButton />
			<OutlineSecondaryButton />
			<OutlineSuccessButton />
			<OutlineDangerButton />
			<OutlineWarningButton />
			<OutlineInfoButton />
			<OutlineLightButton />
			<OutlineDarkButton />
			<SmallButton />
			<LargeButton />
		</div>
	</article>
)

export default Buttons
