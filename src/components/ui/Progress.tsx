import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BasicProgress from './progress/BasicProgress'
import StripedProgress from './progress/StripedProgress'

const Progress: Component = () => (
	<article class="my-3" id="progress">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Progress</h3>
			<DocLink href="/ui/progress" />
			<DocLink href="/ui/progress/basic-progress">Basic Progress</DocLink>
			<DocLink href="/ui/progress/striped-progress">Striped Progress</DocLink>
		</div>

		<div>
			<BasicProgress />
			<StripedProgress />
		</div>
	</article>
)

export default Progress
