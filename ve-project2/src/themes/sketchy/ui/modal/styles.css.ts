import { globalStyle } from '@vanilla-extract/css'
import { modalContent } from '../../../../theme-contract/ui/modal/contract.css'
import { varBsModalBorderRadius } from '../../../../theme-contract/ui/modal/_vars.css'
import { sketchyScope } from '../../scope.css'

// Sketchy overrides modal content border radius shape.
globalStyle(`${sketchyScope}${modalContent}`, {
	vars: {
		[varBsModalBorderRadius]: '15px 5px 5px 25px / 5px 25px 25px 5px',
	},
})
