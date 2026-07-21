import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/contract.css'
import { elLi, elOl } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { active } from '../../../theme-contract/literal/contract.css'
import {
	breadcrumb,
	breadcrumbItem,
	breadcrumbItemActive,
} from '../../../theme-contract/ui/breadcrumb/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/breadcrumb',
	'contents/basic',
	'utilities/used',
]

const BreadcrumbExample: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<nav aria-label="breadcrumb">
				<ol class={`${theme} ${breadcrumb} ${elOl}`}>
					<li class={`${theme} ${breadcrumbItem} ${elLi}`}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={`${theme} ${link}`} href="#" onClick={(e) => e.preventDefault()}>
							Home
						</a>
					</li>
					<li class={`${theme} ${breadcrumbItem} ${elLi}`}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={`${theme} ${link}`} href="#" onClick={(e) => e.preventDefault()}>
							Library
						</a>
					</li>
					<li
						class={`${theme} ${breadcrumbItem} ${breadcrumbItemActive} ${active} ${elLi}`}
						aria-current="page"
					>
						Data
					</li>
				</ol>
			</nav>
		</div>
	)
}

export default BreadcrumbExample

// @screenshot *: 360x120 120
