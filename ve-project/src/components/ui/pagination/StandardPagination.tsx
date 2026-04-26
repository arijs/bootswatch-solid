import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { pagination, pageItem, pageLink } from '../../../themes/bootstrap/ui/pagination/base.css'

const StandardPagination: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<nav aria-label="Standard pagination example">
			<ul class={`${pagination} pwhook-pagination`}>
				<li class={pageItem}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={pageLink} href="#" onClick={(e) => e.preventDefault()} aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li class={pageItem}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={pageLink} href="#" onClick={(e) => e.preventDefault()}>
						1
					</a>
				</li>
				<li class={pageItem}>
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
					<a class={pageLink} href="#" onClick={(e) => e.preventDefault()} aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
)

export default StandardPagination

// @screenshot *: 360x120 120
