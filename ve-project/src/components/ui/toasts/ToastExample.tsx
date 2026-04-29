import { type Component, onSettled } from 'solid-js'
import { useVeToastThemeClasses } from '../../../themes/runtime/hooks'
import { createVeToast } from './ve-toast'

const ToastExample: Component = () => {
	const cls = useVeToastThemeClasses()
	const VeToast = createVeToast(cls)
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
		<div
			class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid} ${cls.toastExample}`}
		>
			<div
				class={`${cls.toast} ${cls.toastRuntime} pwhook-toast`}
				ref={toastNode}
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class={cls.toastHeader}>
					<svg
						class={`${cls.bdPlaceholderImg} ${cls.placeholderIcon}`}
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						preserveAspectRatio="xMidYMid slice"
						tabindex="0"
					>
						<rect width="100%" height="100%" fill="#007aff" />
					</svg>
					<strong class={cls.toastBrand}>Bootstrap</strong>
					<small class={cls.toastTimestamp}>11 mins ago</small>
					<button
						type="button"
						class={cls.btnClose}
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class={cls.toastBody}>Hello, world! This is a toast message.</div>
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
