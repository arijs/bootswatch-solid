import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import ListCard from './ListCard'

const ListCardExample: Component = () => (
	<div class={`${bsTheme} ${body}`}>
		<ListCard />
	</div>
)

export default ListCardExample
