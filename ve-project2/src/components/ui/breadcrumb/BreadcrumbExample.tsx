import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { link } from '../../../theme-contract/contents/contract.css'
import {
	breadcrumb,
	breadcrumbItem,
	breadcrumbItemActive,
} from '../../../theme-contract/ui/breadcrumb/contract.css'

const BreadcrumbExample: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<nav aria-label="breadcrumb">
				<ol class={`${theme} ${breadcrumb}`}>
					<li class={`${theme} ${breadcrumbItem}`}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={`${theme} ${link}`} href="#" onClick={(e) => e.preventDefault()}>
							Home
						</a>
					</li>
					<li class={`${theme} ${breadcrumbItem}`}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={`${theme} ${link}`} href="#" onClick={(e) => e.preventDefault()}>
							Library
						</a>
					</li>
					<li class={`${theme} ${breadcrumbItem} ${breadcrumbItemActive}`} aria-current="page">
						Data
					</li>
				</ol>
			</nav>
		</div>
	)
}

export default BreadcrumbExample

// @screenshot *: 360x120 120
