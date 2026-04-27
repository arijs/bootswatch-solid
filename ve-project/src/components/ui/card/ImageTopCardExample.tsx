import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import ImageTopCard from './ImageTopCard'

const ImageTopCardExample: Component = () => (
	<div class={`${bsTheme} ${body}`}>
		<ImageTopCard />
	</div>
)

export default ImageTopCardExample
