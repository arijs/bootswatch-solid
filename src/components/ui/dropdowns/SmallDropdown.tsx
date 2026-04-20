import type { Component } from 'solid-js'

const SmallDropdown: Component = () => (
	<div class="bd-example container-fluid">
		<div class="dropdown">
			<button
				class="btn btn-secondary btn-sm dropdown-toggle"
				type="button"
				id="dropdownMenuButtonSM"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Dropdown button
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
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
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
						Something else here
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
)

export default SmallDropdown

// @screenshot bootstrap: 360x120 120
