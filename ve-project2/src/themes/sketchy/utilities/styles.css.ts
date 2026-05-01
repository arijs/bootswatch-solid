import { globalStyle } from '@vanilla-extract/css'
import { varBsSecondaryColor } from '../../../theme-contract/_vars.css'
import { px3, textMuted } from '../../../theme-contract/utilities/contract.css'
import { sketchyScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${sketchyScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

// Bootstrap utility parity:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${sketchyScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})
