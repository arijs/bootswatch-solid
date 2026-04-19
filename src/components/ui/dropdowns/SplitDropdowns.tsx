import type { Component } from 'solid-js'

const SplitDropdowns: Component = () => (
	<div class="bd-example container-fluid">
		<div class="btn-group">
			<button type="button" class="btn btn-primary">
				Primary
			</button>
			<button
				type="button"
				class="btn btn-primary dropdown-toggle dropdown-toggle-split"
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
		<div class="btn-group">
			<button type="button" class="btn btn-info">
				Info
			</button>
			<button
				type="button"
				class="btn btn-info dropdown-toggle dropdown-toggle-split"
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
		<div class="btn-group">
			<button type="button" class="btn btn-warning">
				Warning
			</button>
			<button
				type="button"
				class="btn btn-warning dropdown-toggle dropdown-toggle-split"
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
		<div class="btn-group">
			<button type="button" class="btn btn-danger">
				Danger
			</button>
			<button
				type="button"
				class="btn btn-danger dropdown-toggle dropdown-toggle-split"
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

export default SplitDropdowns
