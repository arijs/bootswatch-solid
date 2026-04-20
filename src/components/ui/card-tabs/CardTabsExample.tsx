import type { Component } from 'solid-js'

const CardTabsExample: Component = () => (
	<div class="bd-example container-fluid">
		<div class="row g-4">
			<div class="col">
				<div class="card text-center">
					<div class="card-header">
						<ul class="nav nav-tabs card-header-tabs">
							<li class="nav-item">
								<button
									class="nav-link active"
									type="button"
									aria-current="true"
								>
									Active
								</button>
							</li>
							<li class="nav-item">
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a class="nav-link" href="#">
									Link
								</a>
							</li>
							<li class="nav-item">
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a class="nav-link disabled" aria-disabled="true" href="#">
									Disabled
								</a>
							</li>
						</ul>
					</div>
					<div class="card-body">
						<h5 class="card-title">Special title treatment</h5>
						<p class="card-text">
							With supporting text below as a natural lead-in to additional
							content.
						</p>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a href="#" class="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default CardTabsExample

// @screenshot *: 360x242 294
// @screenshot brite: 360x259 259
// @screenshot cyborg: 360x244 244
// @screenshot darkly: 360x283 283
// @screenshot flatly: 360x283 283
// @screenshot journal: 360x240 240
// @screenshot litera: 360x248 248
// @screenshot lumen: 360x250 250
// @screenshot lux: 360x284 284
// @screenshot materia: 360x249 249
// @screenshot morph: 360x277 277
// @screenshot pulse: 360x241 241
// @screenshot quartz: 360x313 313
// @screenshot sandstone: 360x238 238
// @screenshot simplex: 360x255 255
// @screenshot sketchy: 360x248 248
// @screenshot slate: 360x254 254
// @screenshot zephyr: 360x266 266
