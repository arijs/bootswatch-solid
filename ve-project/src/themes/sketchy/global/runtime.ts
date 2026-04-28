import { bsTheme } from '../../bootstrap/_vars.css'
import { body } from '../../bootstrap/body.css'
import { containerFluid } from '../../bootstrap/container.css'

// Temporary adapter: reuse Bootstrap global classes while Sketchy-specific
// global styling tokens are implemented family-by-family.
export const sketchyGlobalRuntimeClasses = {
	bsTheme,
	body,
	containerFluid,
} as const
