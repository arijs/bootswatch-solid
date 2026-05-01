import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	pageItem,
	pageLink,
	pagination,
} from '../../../theme-contract/ui/pagination/contract.css'

const StandardPagination: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<nav aria-label="Standard pagination example">
					<ul class={`${theme} ${pagination}`}>
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
								aria-label="Previous"
							>
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a class={`${theme} ${pageLink}`} href="#" onClick={(e) => e.preventDefault()}>
								1
							</a>
						</li>
						<li class={`${theme} ${pageItem}`}>
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
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${pageLink}`}
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
		</div>
	)
}

export default StandardPagination

// @screenshot *: 360x120 120
