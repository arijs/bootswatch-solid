import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import HeadingBadges from './badge/HeadingBadges'
import PillBadges from './badge/PillBadges'

const Badge: Component = () => (
	<article class="my-3" id="badge">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Badge</h3>
			<DocLink href="/ui/badge" />
			<DocLink href="/ui/badge/heading-badges">Heading Badges</DocLink>
			<DocLink href="/ui/badge/pill-badges">Pill Badges</DocLink>
		</div>

		<div>
			<HeadingBadges />
			<PillBadges />
		</div>
	</article>
)

export default Badge
