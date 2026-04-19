import type { Component } from 'solid-js'

const SmallPagination: Component = () => (
	<div class="bd-example container-fluid">
		<nav aria-label="Pagination example">
			<ul class="pagination pagination-sm">
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
			</ul>
		</nav>
	</div>
)

export default SmallPagination
