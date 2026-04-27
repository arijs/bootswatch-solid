import type { Component } from 'solid-js'
import { useVePaginationThemeClasses } from '../../../themes/runtime/hooks'

const SmallPagination: Component = () => {
	const { body, containerFluid, bsTheme, pagination, paginationSmall, pageItem, pageItemActive, pageLink } = useVePaginationThemeClasses()

	return (
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
}

export default SmallPagination

// @screenshot *: 360x120 120
