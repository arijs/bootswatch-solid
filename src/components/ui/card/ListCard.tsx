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
