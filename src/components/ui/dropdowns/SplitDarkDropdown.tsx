import type { Component } from 'solid-js'

const SplitDarkDropdown: Component = () => (
	<div class="bd-example container-fluid">
		<div class="btn-group">
			<button type="button" class="btn btn-dark">
				Dark
			</button>
			<button
				type="button"
				class="btn btn-dark dropdown-toggle dropdown-toggle-split pwhook-dropdown-toggle"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				<span class="visually-hidden">Toggle Dropdown</span>
			</button>
			<ul class="dropdown-menu pwhook-dropdown-menu">
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

export default SplitDarkDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x154 154
// @screenshot quartz/opened-dropdown: 360x188 188
// @screenshot vapor/opened-dropdown: 360x150 150
// @screenshot sketchy/opened-dropdown: 360x158 158
// @screenshot slate/opened-dropdown: 360x166 166
// @screenshot sandstone/opened-dropdown: 360x146 146
// @screenshot materia/opened-dropdown: 360x164 164
// @screenshot brite/opened-dropdown: 360x153 149
// @screenshot lux/opened-dropdown: 360x153 153
// @screenshot superhero/opened-dropdown: 360x145 145
