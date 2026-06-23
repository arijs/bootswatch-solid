import { type Component, useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { small } from '../../../theme-contract/contents/basic/contract.css'
import { rounded } from '../../../theme-contract/contents/images/contract.css'
import {
	elButton,
	elStrong,
	elSvg,
} from '../../../theme-contract/global-elements/contract.css'
import { btnClose } from '../../../theme-contract/literal/contract.css'
import { alertBtnClose } from '../../../theme-contract/ui/alerts/contract.css'
import {
	toast,
	toastBody,
	toastFade,
	toastHeader,
	toastRuntime,
	toastShow,
} from '../../../theme-contract/ui/toasts/contract.css'
import {
	alignItemsCenter,
	bgDark,
	me2,
	meAuto,
	p5,
	textMuted,
} from '../../../theme-contract/utilities/contract.css'
import { createVeToast } from './ve-toast'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/toasts',
	'ui/buttons',
	'ui/alerts',
	'contents/basic',
	'utilities/used',
]

const ToastExample: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const VeToast = createVeToast()
	return (
		<div class={`bd-example ${theme} ${bgDark} ${p5} ${alignItemsCenter}`}>
			<div
				class={`${theme} ${toast} ${toastRuntime} ${toastFade} ${toastShow} pwhook-toast`}
				ref={(toastNode) => {
					new VeToast(toastNode, { autohide: false }).show()
				}}
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class={`${theme} ${toastHeader}`}>
					<svg
						class={`${theme} ${elSvg} ${rounded} ${me2}`}
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						preserveAspectRatio="xMidYMid slice"
						tabindex="0"
					>
						<rect width="100%" height="100%" fill="#007aff" />
					</svg>
					<strong class={`${theme} ${elStrong} ${meAuto}`}>Bootstrap</strong>
					<small class={`${theme} ${small} ${textMuted}`}>11 mins ago</small>
					<button
						type="button"
						class={`${theme} ${elButton} ${alertBtnClose} ${btnClose}`}
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
