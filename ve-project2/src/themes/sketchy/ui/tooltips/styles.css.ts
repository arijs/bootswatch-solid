import { globalStyle } from '@vanilla-extract/css'
import {
	tooltipInner,
	tooltipVe,
} from '../../../../theme-contract/ui/tooltips/contract.css'
import { varBsTooltipBorderRadius } from '../../../../theme-contract/ui/tooltips/_vars.css'
import { sketchyScope } from '../../scope.css'

// Sketchy keeps base tooltip styles and only tweaks border radius.
globalStyle(`${sketchyScope}${tooltipVe} ${tooltipInner}`, {
	vars: {
		[varBsTooltipBorderRadius]: '0.25rem',
	},
})
