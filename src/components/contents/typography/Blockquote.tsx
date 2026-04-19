import type { Component } from 'solid-js'

const Blockquote: Component = () => (
	<div class="bd-example container-fluid">
		<blockquote class="blockquote">
			<p>A well-known quote, contained in a blockquote element.</p>
			<footer class="blockquote-footer">
				Someone famous in <cite title="Source Title">Source Title</cite>
			</footer>
		</blockquote>
	</div>
)

export default Blockquote
