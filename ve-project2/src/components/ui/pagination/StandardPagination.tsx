import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/basic/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { pageItem, pageLink, pagination } from '../../../theme-contract/ui/pagination/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/pagination',
	'contents/basic',
	'utilities',
]

const StandardPagination: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<nav aria-label="Standard pagination example">
					<ul class={`${theme} ${pagination}`}>
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
								aria-label="Previous"
							>
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								1
							</a>
						</li>
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								2
							</a>
						</li>
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								3
							</a>
						</li>
						<li class={`${theme} ${pageItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
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
