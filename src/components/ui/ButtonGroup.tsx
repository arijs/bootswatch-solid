import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'

const ButtonGroup: Component = () => (
	<article class="my-3" id="button-group">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Button group</h3>
			<DocLink href="/ui/button-group" />
		</div>

		<div>
			<div class="bd-example container-fluid">
				<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
					<fieldset class="btn-group me-2" aria-label="First group">
						<button type="button" class="btn btn-secondary">
							1
						</button>
						<button type="button" class="btn btn-secondary">
							2
						</button>
						<button type="button" class="btn btn-secondary">
							3
						</button>
						<button type="button" class="btn btn-secondary">
							4
						</button>
					</fieldset>
					<fieldset class="btn-group me-2" aria-label="Second group">
						<button type="button" class="btn btn-secondary">
							5
						</button>
						<button type="button" class="btn btn-secondary">
							6
						</button>
						<button type="button" class="btn btn-secondary">
							7
						</button>
					</fieldset>
					<fieldset class="btn-group" aria-label="Third group">
						<button type="button" class="btn btn-secondary">
							8
						</button>
					</fieldset>
				</div>
			</div>
		</div>
	</article>
)

export default ButtonGroup

// @screenshot bootstrap: 360x120 120
