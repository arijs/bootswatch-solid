import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import {
	pagination,
	paginationSmall,
	pageItem,
	pageItemActive,
	pageLink,
} from '../../../themes/bootstrap/ui/pagination/base.css'

const SmallPagination: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<nav aria-label="Pagination example">
			<ul class={`${pagination} ${paginationSmall} pwhook-pagination`}>
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
			</ul>
		</nav>
	</div>
)

export default SmallPagination

// @screenshot *: 360x120 120
