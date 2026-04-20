import type { Component } from 'solid-js'

const FigureExample: Component = () => (
	<div class="bd-example container-fluid">
		<figure class="figure">
			<svg
				class="bd-placeholder-img figure-img img-fluid rounded"
				width="400"
				height="300"
				xmlns="http://www.w3.org/2000/svg"
				aria-label="Placeholder: 400x300"
				preserveAspectRatio="xMidYMid slice"
				tabindex="0"
			>
				<title>Placeholder</title>
				<rect width="100%" height="100%" fill="#868e96" />
				<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
					400x300
				</text>
			</svg>

			<figcaption class="figure-caption">A caption for the above image.</figcaption>
		</figure>
	</div>
)

export default FigureExample

// @screenshot *: 360x297 373
