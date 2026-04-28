import type { Component } from 'solid-js'
import { useVeGlobalThemeClasses } from '../../../themes/runtime/hooks'
import ImageTopCard from './ImageTopCard'

const ImageTopCardExample: Component = () => {
	const cls = useVeGlobalThemeClasses()

	return (
		<div class={`${cls.bsTheme} ${cls.body}`}>
			<ImageTopCard />
		</div>
	)
}

export default ImageTopCardExample
