import { type Component, onSettled, useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { bdPlaceholderImg } from '../../../theme-contract/contents/images/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { alertBtnClose } from '../../../theme-contract/ui/alerts/contract.css'
import { inputFontFamily } from '../../../theme-contract/ui/buttons/contract.css'
import {
	placeholderIcon,
	toast,
	toastBody,
	toastBrand,
	toastExample,
	toastFade,
	toastHeader,
	toastHide,
	toastRuntime,
	toastShow,
	toastShowing,
	toastTimestamp,
} from '../../../theme-contract/ui/toasts/contract.css'
import { createVeToast } from './ve-toast'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/toasts',
	'ui/buttons',
	'ui/alerts',
	'contents/basic',
	'contents/images',
	'utilities',
]

const ToastExample: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const VeToast = createVeToast({
		toastFade,
		toastHide,
		toastShow,
		toastShowing,
	})
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
		<div class={`bd-example-ve2 ${theme} ${containerFluid} ${toastExample}`}>
			<div
				class={`${theme} ${toast} ${toastRuntime} pwhook-toast`}
				ref={toastNode}
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class={`${theme} ${toastHeader}`}>
					<svg
						class={`${theme} ${bdPlaceholderImg} ${placeholderIcon}`}
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						preserveAspectRatio="xMidYMid slice"
						tabindex="0"
					>
						<rect width="100%" height="100%" fill="#007aff" />
					</svg>
					<strong class={`${theme} ${toastBrand}`}>Bootstrap</strong>
					<small class={`${theme} ${toastTimestamp}`}>11 mins ago</small>
					<button
						type="button"
						class={`${theme} ${alertBtnClose} ${inputFontFamily}`}
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class={`${theme} ${toastBody}`}>Hello, world! This is a toast message.</div>
			</div>
		</div>
	)
}

export default ToastExample

// @screenshot *: 360x181 257
