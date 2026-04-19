import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BorderDangerSpinner from './spinners/BorderDangerSpinner'
import BorderDarkSpinner from './spinners/BorderDarkSpinner'
import BorderInfoSpinner from './spinners/BorderInfoSpinner'
import BorderLightSpinner from './spinners/BorderLightSpinner'
import BorderPrimarySpinner from './spinners/BorderPrimarySpinner'
import BorderSecondarySpinner from './spinners/BorderSecondarySpinner'
import BorderSuccessSpinner from './spinners/BorderSuccessSpinner'
import BorderWarningSpinner from './spinners/BorderWarningSpinner'
import GrowDangerSpinner from './spinners/GrowDangerSpinner'
import GrowDarkSpinner from './spinners/GrowDarkSpinner'
import GrowInfoSpinner from './spinners/GrowInfoSpinner'
import GrowLightSpinner from './spinners/GrowLightSpinner'
import GrowPrimarySpinner from './spinners/GrowPrimarySpinner'
import GrowSecondarySpinner from './spinners/GrowSecondarySpinner'
import GrowSuccessSpinner from './spinners/GrowSuccessSpinner'
import GrowWarningSpinner from './spinners/GrowWarningSpinner'

const Spinners: Component = () => (
	<article class="my-3" id="spinners">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Spinners</h3>
			<DocLink href="/ui/spinners" />
			<DocLink href="/ui/spinners/border-primary-spinner">Border Primary Spinner</DocLink>
			<DocLink href="/ui/spinners/border-secondary-spinner">Border Secondary Spinner</DocLink>
			<DocLink href="/ui/spinners/border-success-spinner">Border Success Spinner</DocLink>
			<DocLink href="/ui/spinners/border-danger-spinner">Border Danger Spinner</DocLink>
			<DocLink href="/ui/spinners/border-warning-spinner">Border Warning Spinner</DocLink>
			<DocLink href="/ui/spinners/border-info-spinner">Border Info Spinner</DocLink>
			<DocLink href="/ui/spinners/border-light-spinner">Border Light Spinner</DocLink>
			<DocLink href="/ui/spinners/border-dark-spinner">Border Dark Spinner</DocLink>
			<DocLink href="/ui/spinners/grow-primary-spinner">Grow Primary Spinner</DocLink>
			<DocLink href="/ui/spinners/grow-secondary-spinner">Grow Secondary Spinner</DocLink>
			<DocLink href="/ui/spinners/grow-success-spinner">Grow Success Spinner</DocLink>
			<DocLink href="/ui/spinners/grow-danger-spinner">Grow Danger Spinner</DocLink>
			<DocLink href="/ui/spinners/grow-warning-spinner">Grow Warning Spinner</DocLink>
			<DocLink href="/ui/spinners/grow-info-spinner">Grow Info Spinner</DocLink>
			<DocLink href="/ui/spinners/grow-light-spinner">Grow Light Spinner</DocLink>
			<DocLink href="/ui/spinners/grow-dark-spinner">Grow Dark Spinner</DocLink>
		</div>

		<div>
			<BorderPrimarySpinner />
			<BorderSecondarySpinner />
			<BorderSuccessSpinner />
			<BorderDangerSpinner />
			<BorderWarningSpinner />
			<BorderInfoSpinner />
			<BorderLightSpinner />
			<BorderDarkSpinner />
			<GrowPrimarySpinner />
			<GrowSecondarySpinner />
			<GrowSuccessSpinner />
			<GrowDangerSpinner />
			<GrowWarningSpinner />
			<GrowInfoSpinner />
			<GrowLightSpinner />
			<GrowDarkSpinner />
		</div>
	</article>
)

export default Spinners
