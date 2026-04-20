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
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</p>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="btn btn-primary">
				Go somewhere
			</a>
		</div>
	</div>
)

export default ImageTopCard

// @screenshot *: 360x372 372
// @screenshot brite: 360x347 347
// @screenshot cosmo: 360x348 348
// @screenshot cyborg: 360x374 374
// @screenshot journal: 360x370 370
// @screenshot litera: 360x382 382
// @screenshot lumen: 360x350 350
// @screenshot lux: 360x376 376
// @screenshot materia: 360x382 382
// @screenshot morph: 360x404 404
// @screenshot quartz: 360x414 414
// @screenshot sandstone: 360x370 370
// @screenshot sketchy: 360x352 352
// @screenshot slate: 360x384 384
// @screenshot solar: 360x348 348
// @screenshot zephyr: 360x373 373
