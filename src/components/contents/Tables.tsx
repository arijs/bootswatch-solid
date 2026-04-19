import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import DarkBorderless from './tables/DarkBorderless'
import HoverDangerVariant from './tables/HoverDangerVariant'
import HoverDarkVariant from './tables/HoverDarkVariant'
import HoverDefaultVariant from './tables/HoverDefaultVariant'
import HoverInfoVariant from './tables/HoverInfoVariant'
import HoverLightVariant from './tables/HoverLightVariant'
import HoverPrimaryVariant from './tables/HoverPrimaryVariant'
import HoverSecondaryVariant from './tables/HoverSecondaryVariant'
import HoverSuccessVariant from './tables/HoverSuccessVariant'
import HoverVariants from './tables/HoverVariants'
import HoverWarningVariant from './tables/HoverWarningVariant'
import SmallBordered from './tables/SmallBordered'
import Striped from './tables/Striped'

const Tables: Component = () => (
	<article class="my-3" id="tables">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Tables</h3>
			<DocLink href="/contents/tables" />
			<DocLink href="/contents/tables/striped">Striped</DocLink>
			<DocLink href="/contents/tables/dark-borderless">Dark Borderless</DocLink>
			<DocLink href="/contents/tables/hover-variants">Hover Variants</DocLink>
			<DocLink href="/contents/tables/hover-default-variant">Hover Default Variant</DocLink>
			<DocLink href="/contents/tables/hover-primary-variant">Hover Primary Variant</DocLink>
			<DocLink href="/contents/tables/hover-secondary-variant">
				Hover Secondary Variant
			</DocLink>
			<DocLink href="/contents/tables/hover-success-variant">Hover Success Variant</DocLink>
			<DocLink href="/contents/tables/hover-danger-variant">Hover Danger Variant</DocLink>
			<DocLink href="/contents/tables/hover-warning-variant">Hover Warning Variant</DocLink>
			<DocLink href="/contents/tables/hover-info-variant">Hover Info Variant</DocLink>
			<DocLink href="/contents/tables/hover-light-variant">Hover Light Variant</DocLink>
			<DocLink href="/contents/tables/hover-dark-variant">Hover Dark Variant</DocLink>
			<DocLink href="/contents/tables/small-bordered">Small Bordered</DocLink>
		</div>

		<div>
			<Striped />
			<DarkBorderless />
			<HoverVariants />
			<HoverDefaultVariant />
			<HoverPrimaryVariant />
			<HoverSecondaryVariant />
			<HoverSuccessVariant />
			<HoverDangerVariant />
			<HoverWarningVariant />
			<HoverInfoVariant />
			<HoverLightVariant />
			<HoverDarkVariant />
			<SmallBordered />
		</div>
	</article>
)

export default Tables
