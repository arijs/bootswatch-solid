import type { Component } from 'solid-js'

const LargeDropdown: Component = () => (
	<div class="bd-example container-fluid">
		<div class="dropdown">
			<button
				class="btn btn-secondary btn-lg dropdown-toggle pwhook-dropdown-toggle"
				type="button"
				id="dropdownMenuButtonLG"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Dropdown button
			</button>
			<ul class="dropdown-menu pwhook-dropdown-menu" aria-labelledby="dropdownMenuButtonLG">
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

export default LargeDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x246 246
// @screenshot quartz/opened-dropdown: 360x290 290
// @screenshot vapor/opened-dropdown: 360x242 242
