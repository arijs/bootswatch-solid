import { createMemo, merge } from 'solid-js'
import './Spinner.css'
import type { Component } from 'solid-js'

const Spinner: Component<{
	scale?: number
	radius?: number
	strokeWidth?: number
	stroke?: string
}> = (props) => {
	const merged = merge({ scale: 1, radius: 100, strokeWidth: 28 }, props)
	const scaledRadius = createMemo(() => merged.radius / merged.scale)

	return (
		<div class={`spinner-container`}>
			<div class={`spinner-container-layer`}>
				<div class={`spinner-container-layer-left`}>
					<svg
						class={`svg`}
						aria-hidden="true"
						// @ts-expect-error focusable is a SVG attribute
						focusable="false"
						viewBox={`0 0 ${2 * scaledRadius()} ${2 * scaledRadius()}`}
						xmlns="http://www.w3.org/2000/svg"
						style={{ color: merged.stroke }}
					>
						<circle
							fill="none"
							stroke="currentColor"
							stroke-width={merged.strokeWidth}
							stroke-linecap="butt"
							cx={scaledRadius()}
							cy={scaledRadius()}
							r={merged.radius - merged.strokeWidth / 2}
							stroke-dasharray={`${4.91 * merged.radius}`}
							stroke-dashoffset={`${2.46 * merged.radius}`}
						/>
					</svg>
				</div>
				<div class={`spinner-container-layer-patch`}>
					<svg
						class={`svg`}
						aria-hidden="true"
						// @ts-expect-error focusable is a SVG attribute
						focusable="false"
						viewBox={`0 0 ${2 * scaledRadius()} ${2 * scaledRadius()}`}
						xmlns="http://www.w3.org/2000/svg"
						style={{ color: merged.stroke }}
					>
						<circle
							fill="none"
							stroke="currentColor"
							stroke-width={merged.strokeWidth}
							stroke-linecap="butt"
							cx={scaledRadius()}
							cy={scaledRadius()}
							r={merged.radius - merged.strokeWidth / 2}
							stroke-dasharray={`${4.91 * merged.radius}`}
							stroke-dashoffset={`${2.46 * merged.radius}`}
						/>
					</svg>
				</div>
				<div class={`spinner-container-layer-right`}>
					<svg
						class={`svg`}
						aria-hidden="true"
						// @ts-expect-error focusable is a SVG attribute
						focusable="false"
						viewBox={`0 0 ${2 * scaledRadius()} ${2 * scaledRadius()}`}
						xmlns="http://www.w3.org/2000/svg"
						style={{ color: merged.stroke }}
					>
						<circle
							fill="none"
							stroke="currentColor"
							stroke-width={merged.strokeWidth}
							stroke-linecap="butt"
							cx={scaledRadius()}
							cy={scaledRadius()}
							r={merged.radius - merged.strokeWidth / 2}
							stroke-dasharray={`${4.91 * merged.radius}`}
							stroke-dashoffset={`${2.46 * merged.radius}`}
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Spinner
