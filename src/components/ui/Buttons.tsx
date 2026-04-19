import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'

const Buttons: Component = () => (
	<article class="my-3" id="buttons">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Buttons</h3>
			<DocLink href="/ui/buttons" />
		</div>

		<div>
			<div class="bd-example">
				<button type="button" class="btn btn-primary">
					Primary
				</button>
				<button type="button" class="btn btn-secondary">
					Secondary
				</button>
				<button type="button" class="btn btn-success">
					Success
				</button>
				<button type="button" class="btn btn-danger">
					Danger
				</button>
				<button type="button" class="btn btn-warning">
					Warning
				</button>
				<button type="button" class="btn btn-info">
					Info
				</button>
				<button type="button" class="btn btn-light">
					Light
				</button>
				<button type="button" class="btn btn-dark">
					Dark
				</button>

				<button type="button" class="btn btn-link">
					Link
				</button>
			</div>

			<div class="bd-example">
				<button type="button" class="btn btn-outline-primary">
					Primary
				</button>
				<button type="button" class="btn btn-outline-secondary">
					Secondary
				</button>
				<button type="button" class="btn btn-outline-success">
					Success
				</button>
				<button type="button" class="btn btn-outline-danger">
					Danger
				</button>
				<button type="button" class="btn btn-outline-warning">
					Warning
				</button>
				<button type="button" class="btn btn-outline-info">
					Info
				</button>
				<button type="button" class="btn btn-outline-light">
					Light
				</button>
				<button type="button" class="btn btn-outline-dark">
					Dark
				</button>
			</div>

			<div class="bd-example">
				<button type="button" class="btn btn-primary btn-sm">
					Small button
				</button>
				<button type="button" class="btn btn-primary">
					Standard button
				</button>
				<button type="button" class="btn btn-primary btn-lg">
					Large button
				</button>
			</div>
		</div>
	</article>
)

export default Buttons
