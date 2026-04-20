import type { Component } from 'solid-js'

const StandardPagination: Component = () => (
	<div class="bd-example container-fluid">
		<nav aria-label="Standard pagination example">
			<ul class="pagination">
				<li class="page-item">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class="page-link"
						href="#"
						onClick={(e) => e.preventDefault()}
						aria-label="Previous"
					>
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li class="page-item">
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class="page-link" href="#" onClick={(e) => e.preventDefault()}>
						1
					</a>
				</li>
				<li class="page-item">
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
					<a
						class="page-link"
						href="#"
						onClick={(e) => e.preventDefault()}
						aria-label="Next"
					>
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
)

export default StandardPagination

// @screenshot *: 360x120 120
