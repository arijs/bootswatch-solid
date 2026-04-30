import { globalStyle } from '@vanilla-extract/css'
import { varBsSecondaryColor } from '../../../theme-contract/_vars.css'
import { textMuted } from '../../../theme-contract/utilities/contract.css'
import { bootstrapScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${bootstrapScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})
