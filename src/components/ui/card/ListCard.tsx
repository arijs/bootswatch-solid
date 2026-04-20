import type { Component } from 'solid-js'

const ListCard: Component = () => (
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">Card title</h5>
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</p>
		</div>
		<ul class="list-group list-group-flush">
			<li class="list-group-item">An item</li>
			<li class="list-group-item">A second item</li>
			<li class="list-group-item">A third item</li>
		</ul>
		<div class="card-body">
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="card-link">
				Card link
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="card-link">
				Another link
			</a>
		</div>
	</div>
)

export default ListCard

// @screenshot *: 360x318 318
// @screenshot brite: 360x279 279
// @screenshot cosmo: 360x294 294
// @screenshot cyborg: 360x320 320
// @screenshot journal: 360x316 316
// @screenshot litera: 360x326 326
// @screenshot lumen: 360x294 294
// @screenshot lux: 360x308 308
// @screenshot materia: 360x314 314
// @screenshot morph: 360x344 344
// @screenshot quartz: 360x416 416
// @screenshot sketchy: 360x300 300
// @screenshot solar: 360x294 294
// @screenshot vapor: 360x320 320
// @screenshot yeti: 360x309 309
// @screenshot zephyr: 360x366 366
