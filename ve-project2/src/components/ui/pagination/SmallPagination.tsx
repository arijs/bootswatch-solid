import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	pageItem,
	pageItemActive,
	pageLink,
	pagination,
	paginationSm,
} from '../../../theme-contract/ui/pagination/contract.css'

const SmallPagination: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<nav aria-label="Pagination example">
					<ul class={`${theme} ${pagination} ${paginationSm}`}>
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a class={`${theme} ${pageLink}`} href="#" onClick={(e) => e.preventDefault()}>
								1
							</a>
						</li>
						<li class={`${theme} ${pageItem} ${pageItemActive}`} aria-current="page">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a class={`${theme} ${pageLink}`} href="#" onClick={(e) => e.preventDefault()}>
								2
							</a>
						</li>
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a class={`${theme} ${pageLink}`} href="#" onClick={(e) => e.preventDefault()}>
								3
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default SmallPagination

// @screenshot *: 360x120 120
