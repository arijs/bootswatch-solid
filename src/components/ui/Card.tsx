import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'

const Card: Component = () => (
	<article class="my-3" id="card">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Card</h3>
			<DocLink href="/ui/card" />
		</div>

		<div>
			<div class="bd-example">
				<div class="row  row-cols-1 row-cols-md-2 g-4">
					<div class="col">
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
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									href="#"
									onClick={(e) => e.preventDefault()}
									class="btn btn-primary"
								>
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card">
							<div class="card-header">Featured</div>
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									href="#"
									onClick={(e) => e.preventDefault()}
									class="btn btn-primary"
								>
									Go somewhere
								</a>
							</div>
							<div class="card-footer text-muted">2 days ago</div>
						</div>
					</div>
					<div class="col">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
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
					</div>
					<div class="col">
						<div class="card">
							<div class="row g-0">
								<div class="col-md-4">
									<svg
										class="bd-placeholder-img"
										width="100%"
										height="250"
										xmlns="http://www.w3.org/2000/svg"
										aria-label="Placeholder: Image"
										preserveAspectRatio="xMidYMid slice"
										tabindex="0"
									>
										<title>Placeholder</title>
										<rect width="100%" height="100%" fill="#868e96" />
										<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
											Image
										</text>
									</svg>
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h5 class="card-title">Card title</h5>
										<p class="card-text">
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</p>
										<p class="card-text">
											<small class="text-muted">
												Last updated 3 mins ago
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
)

export default Card
