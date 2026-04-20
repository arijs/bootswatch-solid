import type { Component } from 'solid-js'

const BasicNav: Component = () => (
	<div class="bd-example container-fluid">
		<nav class="nav">
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				class="nav-link active"
				aria-current="page"
				href="#"
				onClick={(e) => e.preventDefault()}
			>
				Active
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a class="nav-link" href="#" onClick={(e) => e.preventDefault()}>
				Link
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a class="nav-link" href="#" onClick={(e) => e.preventDefault()}>
				Link
			</a>
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
		</nav>
	</div>
)

export default BasicNav

// @screenshot *: 360x120 120

