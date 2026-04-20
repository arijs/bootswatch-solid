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
