import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	breadcrumb,
	breadcrumbItem,
	breadcrumbItemActive,
} from '../../../theme-contract/ui/breadcrumb/contract.css'

const BreadcrumbExample: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<nav aria-label="breadcrumb">
				<ol class={`${theme} ${breadcrumb}`}>
					<li class={breadcrumbItem}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a href="#" onClick={(e) => e.preventDefault()}>
							Home
						</a>
					</li>
					<li class={breadcrumbItem}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a href="#" onClick={(e) => e.preventDefault()}>
							Library
						</a>
					</li>
					<li class={`${breadcrumbItem} ${breadcrumbItemActive}`} aria-current="page">
						Data
					</li>
				</ol>
			</nav>
		</div>
	)
}

export default BreadcrumbExample

// @screenshot *: 360x120 120
