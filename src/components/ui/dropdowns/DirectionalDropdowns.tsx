import type { Component } from 'solid-js'

const DirectionalDropdowns: Component = () => (
	<div class="bd-example container-fluid">
		<div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
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
			<div class="dropup">
				<button
					class="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropupMenuButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Dropup button
				</button>
				<ul class="dropdown-menu" aria-labelledby="dropupMenuButton">
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
			<div class="dropstart">
				<button
					class="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropstartMenuButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Dropstart button
				</button>
				<ul class="dropdown-menu" aria-labelledby="dropstartMenuButton">
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
	</div>
)

export default DirectionalDropdowns
