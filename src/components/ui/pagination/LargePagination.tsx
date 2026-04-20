import type { Component } from 'solid-js'

const LargePagination: Component = () => (
	<div class="bd-example container-fluid">
		<nav aria-label="Another pagination example">
			<ul class="pagination pagination-lg flex-wrap">
				<li class="page-item disabled">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class="page-link"
						href="#"
						onClick={(e) => e.preventDefault()}
						tabindex="-1"
						aria-disabled="true"
					>
						Previous
					</a>
				</li>
				<li class="page-item">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class="page-link" href="#" onClick={(e) => e.preventDefault()}>
						1
					</a>
				</li>
				<li class="page-item active" aria-current="page">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class="page-link" href="#" onClick={(e) => e.preventDefault()}>
						2
					</a>
				</li>
				<li class="page-item">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class="page-link" href="#" onClick={(e) => e.preventDefault()}>
						3
					</a>
				</li>
				<li class="page-item">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class="page-link" href="#" onClick={(e) => e.preventDefault()}>
						Next
					</a>
				</li>
			</ul>
		</nav>
	</div>
)

export default LargePagination

// @screenshot *: 360x120 120
// @screenshot morph: 360x156 156
