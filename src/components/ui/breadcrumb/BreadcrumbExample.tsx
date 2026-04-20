import type { Component } from 'solid-js'

const BreadcrumbExample: Component = () => (
	<div class="bd-example container-fluid">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a href="#" onClick={(e) => e.preventDefault()}>
						Home
					</a>
				</li>
				<li class="breadcrumb-item">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a href="#" onClick={(e) => e.preventDefault()}>
						Library
					</a>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					Data
				</li>
			</ol>
		</nav>
	</div>
)

export default BreadcrumbExample

// @screenshot *: 360x120 120

