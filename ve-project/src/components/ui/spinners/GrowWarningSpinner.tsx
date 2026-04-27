import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { spinnerGrow, textWarning, visuallyHidden } from '../../../themes/bootstrap/ui/spinners/base.css'

const GrowWarningSpinner: Component = () => (
<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
<div class={`${spinnerGrow} ${textWarning}`}>
<span class={visuallyHidden}>Loading...</span>
</div>
</div>
)

export default GrowWarningSpinner

// @screenshot *: 360x120 120
