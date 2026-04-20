import type { Component } from 'solid-js'

const PillNav: Component = () => (
	<div class="bd-example container-fluid">
		<ul class="nav nav-pills">
			<li class="nav-item">
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					class="nav-link active"
					aria-current="page"
					href="#"
					onClick={(e) => e.preventDefault()}
				>
					Active
				</a>
			</li>
			<li class="nav-item">
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a class="nav-link" href="#" onClick={(e) => e.preventDefault()}>
					Link
				</a>
			</li>
			<li class="nav-item">
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a class="nav-link" href="#" onClick={(e) => e.preventDefault()}>
					Link
				</a>
			</li>
			<li class="nav-item">
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					class="nav-link disabled"
					href="#"
					onClick={(e) => e.preventDefault()}
					tabindex="-1"
					aria-disabled="true"
				>
					Disabled
				</a>
			</li>
		</ul>
	</div>
)

export default PillNav

// @screenshot *: 360x120 120

