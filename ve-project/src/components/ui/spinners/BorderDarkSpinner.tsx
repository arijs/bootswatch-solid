import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { spinnerBorder, textDark, visuallyHidden } from '../../../themes/bootstrap/ui/spinners/base.css'

const BorderDarkSpinner: Component = () => (
<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
<div class={`${spinnerBorder} ${textDark}`}>
<span class={visuallyHidden}>Loading...</span>
</div>
</div>
)

export default BorderDarkSpinner

// @screenshot *: 360x120 120
