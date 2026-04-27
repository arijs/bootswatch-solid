import { onSettled, type Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdPlaceholderImg } from '../../../themes/bootstrap/contents/generated.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { btnClose } from '../../../themes/bootstrap/ui/alerts/base.css'
import {
	placeholderIcon,
	toast,
	toastBody,
	toastBrand,
	toastExample,
	toastHeader,
	toastRuntime,
	toastTimestamp,
} from '../../../themes/bootstrap/ui/toasts/base.css'
import { VeToast } from './ve-toast'

const ToastExample: Component = () => {
	let toastNode!: HTMLDivElement

	onSettled(() => {
		const toastInstance = new VeToast(toastNode, {
			autohide: false,
		})

		toastInstance.show()

		return () => {
			toastInstance.dispose()
		}
	})

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid} ${toastExample}`}>
			<div
				class={`${toast} ${toastRuntime} pwhook-toast`}
				ref={toastNode}
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class={toastHeader}>
					<svg
						class={`${bdPlaceholderImg} ${placeholderIcon}`}
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						preserveAspectRatio="xMidYMid slice"
						tabindex="0"
					>
						<rect width="100%" height="100%" fill="#007aff" />
					</svg>
					<strong class={toastBrand}>Bootstrap</strong>
					<small class={toastTimestamp}>11 mins ago</small>
					<button
						type="button"
						class={btnClose}
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class={toastBody}>Hello, world! This is a toast message.</div>
			</div>
		</div>
	)
}

export default ToastExample

// @screenshot *: 360x181 257
// @screenshot brite: 360x184 184
// @screenshot lux: 360x199 199
// @screenshot morph: 360x178 178
// @screenshot quartz: 360x331 331
// @screenshot simplex: 360x202 202
// @screenshot sketchy: 360x184 184
// @screenshot spacelab: 360x202 202
// @screenshot vapor: 360x178 178
// @screenshot yeti: 360x202 202
// @screenshot zephyr: 360x202 202
