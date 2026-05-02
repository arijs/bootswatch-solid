import { type Component, onSettled, useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
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

const ToastExample: Component = () => {
const theme = useContext(ThemeContext)
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
<div class={`bd-example ${theme} ${toastExample}`}>
<div
class={`${theme} ${toast} ${toastRuntime} pwhook-toast`}
ref={toastNode}
aria-live="assertive"
aria-atomic="true"
>
<div class={`${theme} ${toastHeader}`}>
<svg
class={`${theme} ${placeholderIcon}`}
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
