import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { spinnerGrow, textSecondary, visuallyHidden } from '../../../themes/bootstrap/ui/spinners/base.css'

const GrowSecondarySpinner: Component = () => (
<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
<div class={`${spinnerGrow} ${textSecondary}`}>
<span class={visuallyHidden}>Loading...</span>
</div>
</div>
)

export default GrowSecondarySpinner

// @screenshot *: 360x120 120
