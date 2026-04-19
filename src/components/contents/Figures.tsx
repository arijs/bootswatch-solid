import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'

const Figures: Component = () => (
	<article class="my-3" id="figures">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Figures</h3>
			<DocLink href="/contents/figures" />
		</div>

		<div>
			<div class="bd-example">
				<figure class="figure">
					<svg
						class="bd-placeholder-img figure-img img-fluid rounded"
						width="400"
						height="300"
						xmlns="http://www.w3.org/2000/svg"
						aria-label="Placeholder: 400x300"
						preserveAspectRatio="xMidYMid slice"
						tabindex="0"
					>
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#868e96" />
						<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
							400x300
						</text>
					</svg>

					<figcaption class="figure-caption">A caption for the above image.</figcaption>
				</figure>
			</div>
		</div>
	</article>
)

export default Figures
