import { globalStyle } from '@vanilla-extract/css'
import {
	progress,
} from '../../../../theme-contract/ui/progress/contract.css'
import {
	varBsProgressBg,
	varBsProgressBarBg,
} from '../../../../theme-contract/ui/progress/_vars.css'
import { sketchyScope } from '../../scope.css'

// SOURCE CSS (screenshots/sketchy/bootstrap.css .progress):
// --bs-progress-bg: #fff;
// --bs-progress-bar-bg: #ccc;
// Also: .progress { border: 2px solid #333; border-radius: 255px 25px 225px 25px/25px 225px 25px 255px; }
globalStyle(`${sketchyScope}${progress}`, {
	vars: {
		[varBsProgressBg]: '#fff',
		[varBsProgressBarBg]: '#ccc',
	},
	border: '2px solid #333',
	borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
})
