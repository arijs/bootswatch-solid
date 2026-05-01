import { globalStyle } from '@vanilla-extract/css'
import { popoverVe } from '../../../../theme-contract/ui/popovers/contract.css'
import {
	varBsPopoverBorderRadius,
	varBsPopoverBodyPaddingX,
	varBsPopoverBodyPaddingY,
} from '../../../../theme-contract/ui/popovers/_vars.css'
import { sketchyScope } from '../../scope.css'

// Sketchy overrides popover shape and body padding.
globalStyle(`${sketchyScope}${popoverVe}`, {
	vars: {
		[varBsPopoverBorderRadius]: '45px 85px 15px 25px / 15px 10px 35px 555px',
		[varBsPopoverBodyPaddingX]: '0',
		[varBsPopoverBodyPaddingY]: '0',
	},
})
