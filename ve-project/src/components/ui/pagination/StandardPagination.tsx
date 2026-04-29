import type { Component } from 'solid-js'
import { useVePaginationThemeClasses } from '../../../themes/runtime/hooks'

const StandardPagination: Component = () => {
	const { body, containerFluid, bsTheme, pagination, pageItem, pageLink } =
		useVePaginationThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<nav aria-label="Standard pagination example">
				<ul class={`${pagination} pwhook-pagination`}>
					<li class={pageItem}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a
							class={pageLink}
							href="#"
							onClick={(e) => e.preventDefault()}
							aria-label="Previous"
						>
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
						<a
							class={pageLink}
							href="#"
							onClick={(e) => e.preventDefault()}
							aria-label="Next"
						>
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default StandardPagination

// @screenshot *: 360x120 120
