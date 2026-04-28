import type { Component } from 'solid-js'
import { useVeBreadcrumbThemeClasses } from '../../../themes/runtime/hooks'

const BreadcrumbExample: Component = () => {
	const cls = useVeBreadcrumbThemeClasses()

	return (
		<div class={`bd-example ${cls.containerFluid} ${cls.bsTheme} ${cls.body}`}>
			<nav aria-label="breadcrumb">
				<ol class={`${cls.listBase} ${cls.breadcrumb}`}>
					<li class={cls.breadcrumbItem}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={cls.link} href="#" onClick={(e) => e.preventDefault()}>
							Home
						</a>
					</li>
					<li class={cls.breadcrumbItem}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={cls.link} href="#" onClick={(e) => e.preventDefault()}>
							Library
						</a>
					</li>
					<li class={`${cls.breadcrumbItem} ${cls.breadcrumbItemActive}`} aria-current="page">
						Data
					</li>
				</ol>
			</nav>
		</div>
	)
}

export default BreadcrumbExample

// @screenshot *: 360x120 120
