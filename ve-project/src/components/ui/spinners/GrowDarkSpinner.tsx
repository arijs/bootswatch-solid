import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { spinnerGrow, textDark, visuallyHidden } from '../../../themes/bootstrap/ui/spinners/base.css'

const GrowDarkSpinner: Component = () => (
<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
<div class={`${spinnerGrow} ${textDark}`}>
<span class={visuallyHidden}>Loading...</span>
</div>
</div>
)

export default GrowDarkSpinner

// @screenshot *: 360x120 120
