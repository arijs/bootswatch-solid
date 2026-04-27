import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import FeaturedCard from './FeaturedCard'

const FeaturedCardExample: Component = () => (
	<div class={`${bsTheme} ${body}`}>
		<FeaturedCard />
	</div>
)

export default FeaturedCardExample
