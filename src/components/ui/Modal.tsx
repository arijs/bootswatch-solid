import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'

const Modal: Component = () => (
	<article class="my-3" id="modal">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Modal</h3>
			<DocLink href="/ui/modal" />
		</div>

		<div>
			<div class="bd-example">
				<div class="d-flex justify-content-between flex-wrap">
					<button
						type="button"
						class="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#exampleModalDefault"
					>
						Launch demo modal
					</button>
					<button
						type="button"
						class="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#staticBackdropLive"
					>
						Launch static backdrop modal
					</button>
					<button
						type="button"
						class="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#exampleModalCenteredScrollable"
					>
						Vertically centered scrollable modal
					</button>
					<button
						type="button"
						class="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#exampleModalFullscreen"
					>
						Full screen
					</button>
				</div>
			</div>
		</div>
	</article>
)

export default Modal
