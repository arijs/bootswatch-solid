import type { Component } from 'solid-js'

const FeaturedCard: Component = () => (
	<div class="card">
		<div class="card-header">Featured</div>
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
		<div class="card-footer text-muted">2 days ago</div>
	</div>
)

export default FeaturedCard
