import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/basic/contract.css'
import { elLi } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { flexWrap } from '../../../theme-contract/ui/modal/contract.css'
import {
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
	pagination,
	paginationLg,
} from '../../../theme-contract/ui/pagination/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/pagination',
	'contents/basic',
	'utilities',
]

const LargePagination: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<nav aria-label="Another pagination example">
					<ul class={`${theme} ${pagination} ${paginationLg} ${flexWrap}`}>
						<li class={`${theme} ${pageItem} ${elLi} ${pageItemDisabled}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
								tabindex="-1"
								aria-disabled="true"
							>
								Previous
							</a>
						</li>
						<li class={`${theme} ${pageItem} ${elLi}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								1
							</a>
						</li>
						<li
							class={`${theme} ${pageItem} ${elLi} ${pageItemActive}`}
							aria-current="page"
						>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								2
							</a>
						</li>
						<li class={`${theme} ${pageItem} ${elLi}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								3
							</a>
						</li>
						<li class={`${theme} ${pageItem} ${elLi}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${link} ${pageLink}`}
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								Next
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default LargePagination

// @screenshot *: 360x120 120
// @screenshot morph: 360x156 156
