import type { Component } from 'solid-js'

const DismissibleAlerts: Component = () => (
	<div class="bd-example container-fluid">
		<div class="alert alert-primary alert-dismissible fade show">
			A simple primary alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div class="alert alert-secondary alert-dismissible fade show">
			A simple secondary alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div class="alert alert-success alert-dismissible fade show">
			A simple success alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div class="alert alert-danger alert-dismissible fade show">
			A simple danger alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div class="alert alert-warning alert-dismissible fade show">
			A simple warning alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div class="alert alert-info alert-dismissible fade show">
			A simple info alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div class="alert alert-light alert-dismissible fade show">
			A simple light alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div class="alert alert-dark alert-dismissible fade show">
			A simple dark alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
	</div>
)

export default DismissibleAlerts
