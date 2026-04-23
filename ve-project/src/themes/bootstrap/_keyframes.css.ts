import { keyframes } from '@vanilla-extract/css'
import { varBsProgressHeight } from '../../theme-contract/ui/progress.css'

export const progressBarStripes = keyframes({
	'0%': { backgroundPositionX: varBsProgressHeight },
})

export const spinnerBorder = keyframes({
	'100%': { transform: 'rotate(360deg)' },
})

export const spinnerGrow = keyframes({
	'0%': { transform: 'scale(0)' },
	'50%': { opacity: 1, transform: 'none' },
})

export const placeholderGlow = keyframes({
	'50%': { opacity: 0.2 },
})

export const placeholderWave = keyframes({
	'100%': { maskPosition: '-200% 0%' },
})

/*

@keyframes progress-bar-stripes { 
  0% { background-position-x: var(--bs-progress-height); 
}
}

@keyframes spinner-border { 
  100% { transform: rotate(360deg); 
}
}

@keyframes spinner-grow { 
  0% { transform: scale(0); 
}
  50% { opacity: 1; 
transform: none; 
}
}

@keyframes placeholder-glow { 
  50% { opacity: 0.2; 
}
}

@keyframes placeholder-wave { 
  100% { mask-position: -200% 0%; 
}
}
*/
