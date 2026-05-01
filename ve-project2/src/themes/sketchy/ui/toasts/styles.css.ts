import { globalStyle } from '@vanilla-extract/css'
import { toast } from '../../../../theme-contract/ui/toasts/contract.css'
import { varBsToastBorderRadius } from '../../../../theme-contract/ui/toasts/_vars.css'
import { sketchyScope } from '../../scope.css'

// Sketchy overrides toast border radius shape.
globalStyle(`${sketchyScope}${toast}`, {
	vars: {
		[varBsToastBorderRadius]: '10px 10px 15px 5px / 5px 15px 5px 15px',
	},
})
