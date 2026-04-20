import type { Component } from 'solid-js'

const Thumbnail: Component = () => (
	<div class="bd-example container-fluid">
		<svg
			class="bd-placeholder-img img-thumbnail"
			width="200"
			height="200"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
			preserveAspectRatio="xMidYMid slice"
			tabindex="0"
		>
			<title>
				A generic square placeholder image with a white border around it, making it resemble
				a photograph taken with an old instant camera
			</title>
			<rect width="100%" height="100%" fill="#868e96" />
			<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
				200x200
			</text>
		</svg>
	</div>
)

export default Thumbnail

// @screenshot *: 360x200 200
