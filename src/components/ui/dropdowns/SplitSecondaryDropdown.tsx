import type { Component } from 'solid-js'

const SplitSecondaryDropdown: Component = () => (
	<div class="bd-example container-fluid">
		<div class="btn-group">
			<button type="button" class="btn btn-secondary">
				Secondary
			</button>
			<button
				type="button"
				class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				<span class="visually-hidden">Toggle Dropdown</span>
			</button>
			<ul class="dropdown-menu">
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
			</ul>
		</div>
	</div>
)

export default SplitSecondaryDropdown

// @screenshot *: 360x120 120
