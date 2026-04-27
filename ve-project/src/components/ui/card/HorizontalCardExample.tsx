import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import HorizontalCard from './HorizontalCard'

const HorizontalCardExample: Component = () => (
	<div class={`${bsTheme} ${body}`}>
		<HorizontalCard />
	</div>
)

export default HorizontalCardExample
