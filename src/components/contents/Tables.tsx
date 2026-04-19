import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import DarkBorderless from './tables/DarkBorderless'
import HoverVariants from './tables/HoverVariants'
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
			<DocLink href="/contents/tables/small-bordered">Small Bordered</DocLink>
		</div>

		<div>
			<Striped />
			<DarkBorderless />
			<HoverVariants />
			<SmallBordered />
		</div>
	</article>
)

export default Tables
