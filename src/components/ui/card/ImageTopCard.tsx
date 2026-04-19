import type { Component } from 'solid-js'

const ImageTopCard: Component = () => (
	<div class="card">
		<svg
			class="bd-placeholder-img card-img-top"
			width="100%"
			height="180"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Placeholder: Image cap"
			preserveAspectRatio="xMidYMid slice"
			tabindex="0"
		>
			<title>Placeholder</title>
			<rect width="100%" height="100%" fill="#868e96" />
			<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
				Image cap
			</text>
		</svg>

		<div class="card-body">
			<h5 class="card-title">Card title</h5>
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk of the card's
				content.
			</p>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="btn btn-primary">
				Go somewhere
			</a>
		</div>
	</div>
)

export default ImageTopCard
