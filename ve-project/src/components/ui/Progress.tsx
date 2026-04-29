import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import Progress0 from './progress/Progress0'
import Progress25 from './progress/Progress25'
import Progress50 from './progress/Progress50'
import Progress75 from './progress/Progress75'
import Progress100 from './progress/Progress100'
import StripedProgress from './progress/StripedProgress'

const Progress: Component = () => (
	<article class="my-3" id="progress">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Progress</h3>
			<DocLink href="/ui/progress" />
			<DocLink href="/ui/progress/progress-0">Progress 0</DocLink>
			<DocLink href="/ui/progress/progress-25">Progress 25</DocLink>
			<DocLink href="/ui/progress/progress-50">Progress 50</DocLink>
			<DocLink href="/ui/progress/progress-75">Progress 75</DocLink>
			<DocLink href="/ui/progress/progress-100">Progress 100</DocLink>
			<DocLink href="/ui/progress/striped-progress">Striped Progress</DocLink>
		</div>

		<div>
			<Progress0 />
			<Progress25 />
			<Progress50 />
			<Progress75 />
			<Progress100 />
			<StripedProgress />
		</div>
	</article>
)

export default Progress
