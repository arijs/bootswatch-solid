import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import {
	flexWrap,
	pagination,
	paginationLarge,
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
} from '../../../themes/bootstrap/ui/pagination/base.css'

const LargePagination: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<nav aria-label="Another pagination example">
			<ul class={`${pagination} ${paginationLarge} ${flexWrap} pwhook-pagination`}>
				<li class={`${pageItem} ${pageItemDisabled}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class={pageLink}
						href="#"
						onClick={(e) => e.preventDefault()}
						tabIndex={-1}
						aria-disabled="true"
					>
						Previous
					</a>
				</li>
				<li class={pageItem}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={pageLink} href="#" onClick={(e) => e.preventDefault()}>
						1
					</a>
				</li>
				<li class={`${pageItem} ${pageItemActive}`} aria-current="page">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={pageLink} href="#" onClick={(e) => e.preventDefault()}>
						2
					</a>
				</li>
				<li class={pageItem}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={pageLink} href="#" onClick={(e) => e.preventDefault()}>
						3
					</a>
				</li>
				<li class={pageItem}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={pageLink} href="#" onClick={(e) => e.preventDefault()}>
						Next
					</a>
				</li>
			</ul>
		</nav>
	</div>
)

export default LargePagination

// @screenshot *: 360x120 120
// @screenshot morph: 360x156 156
