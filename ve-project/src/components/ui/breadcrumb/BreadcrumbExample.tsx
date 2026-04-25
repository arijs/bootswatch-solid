import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { breadcrumb, breadcrumbItem, breadcrumbItemActive } from '../../../themes/bootstrap/ui/breadcrumb/base.css'

const BreadcrumbExample: Component = () => (
	<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
		<nav aria-label="breadcrumb">
			<ol class={breadcrumb}>
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

export default BreadcrumbExample

// @screenshot *: 360x120 120
