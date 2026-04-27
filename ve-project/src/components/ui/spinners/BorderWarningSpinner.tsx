import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { spinnerBorder, textWarning, visuallyHidden } from '../../../themes/bootstrap/ui/spinners/base.css'

const BorderWarningSpinner: Component = () => (
<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
<div class={`${spinnerBorder} ${textWarning}`}>
<span class={visuallyHidden}>Loading...</span>
</div>
</div>
)

export default BorderWarningSpinner

// @screenshot *: 360x120 120
