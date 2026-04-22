import type { Component } from 'solid-js'

const SplitSuccessDropdown: Component = () => (
	<div class="bd-example container-fluid">
		<div class="btn-group">
			<button type="button" class="btn btn-success">
				Success
			</button>
			<button
				type="button"
				class="btn btn-success dropdown-toggle dropdown-toggle-split"
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

export default SplitSuccessDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x154 154
// @screenshot quartz/opened-dropdown: 360x188 188
// @screenshot vapor/opened-dropdown: 360x150 150
