import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'

const Breadcrumb: Component = () => (
	<article class="my-3" id="breadcrumb">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Breadcrumb</h3>
			<DocLink href="/ui/breadcrumb" />
		</div>

		<div>
			<div class="bd-example container-fluid">
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a href="#" onClick={(e) => e.preventDefault()}>
								Home
							</a>
						</li>
						<li class="breadcrumb-item">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a href="#" onClick={(e) => e.preventDefault()}>
								Library
							</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							Data
						</li>
					</ol>
				</nav>
			</div>
		</div>
	</article>
)

export default Breadcrumb

// @screenshot bootstrap: 360x120 120
