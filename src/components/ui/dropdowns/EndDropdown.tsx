import type { Component } from 'solid-js'

const EndDropdown: Component = () => (
	<div class="bd-example container-fluid">
		<div class="dropend">
			<button
				class="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropendMenuButton"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Dropend button
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropendMenuButton">
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

export default EndDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x196 196
// @screenshot quartz/opened-dropdown: 360x242 242
// @screenshot vapor/opened-dropdown: 360x194 194
