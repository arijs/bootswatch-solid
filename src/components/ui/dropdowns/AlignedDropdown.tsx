import type { Component } from 'solid-js'

const AlignedDropdown: Component = () => (
	<div class="bd-example container-fluid">
		<div class="btn-group">
			<div class="dropdown">
				<button
					class="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownRightMenuButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					End-aligned menu
				</button>
				<ul
					class="dropdown-menu dropdown-menu-end"
					aria-labelledby="dropdownRightMenuButton"
				>
					<li>
						<h6 class="dropdown-header">Dropdown header</h6>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
							Action
						</a>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
							Another action
						</a>
					</li>
					<li>
						<hr class="dropdown-divider" />
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
							Separated link
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
)

export default AlignedDropdown

// @screenshot bootstrap: 360x120 120
