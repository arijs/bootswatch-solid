import { globalStyle } from '@vanilla-extract/css'
import {
	display1,
	display2,
	display3,
	display4,
	display5,
	display6,
} from '../../../../theme-contract/contents/display/contract.css'
import { bootstrapScope } from '../../scope.css'

// SOURCE CSS:
// .display-1 { font-weight: 300; line-height: 1.2; font-size: calc(1.625rem + 4.5vw); }
// @media (min-width: 1200px) { .display-1 { font-size: 5rem; } }
globalStyle(`${bootstrapScope}${display1}`, {
	fontWeight: 300,
	lineHeight: 1.2,
	fontSize: `calc(1.625rem + 4.5vw)`,
})

// SOURCE CSS:
// .display-2 { font-weight: 300; line-height: 1.2; font-size: calc(1.575rem + 3.9vw); }
// @media (min-width: 1200px) { .display-2 { font-size: 4.5rem; } }
globalStyle(`${bootstrapScope}${display2}`, {
	fontWeight: 300,
	lineHeight: 1.2,
	fontSize: `calc(1.575rem + 3.9vw)`,
})

// SOURCE CSS:
// .display-3 { font-weight: 300; line-height: 1.2; font-size: calc(1.525rem + 3.3vw); }
// @media (min-width: 1200px) { .display-3 { font-size: 4rem; } }
globalStyle(`${bootstrapScope}${display3}`, {
	fontWeight: 300,
	lineHeight: 1.2,
	fontSize: `calc(1.525rem + 3.3vw)`,
})

// SOURCE CSS:
// .display-4 { font-weight: 300; line-height: 1.2; font-size: calc(1.475rem + 2.7vw); }
// @media (min-width: 1200px) { .display-4 { font-size: 3.5rem; } }
globalStyle(`${bootstrapScope}${display4}`, {
	fontWeight: 300,
	lineHeight: 1.2,
	fontSize: `calc(1.475rem + 2.7vw)`,
})

// SOURCE CSS:
// .display-5 { font-weight: 300; line-height: 1.2; font-size: calc(1.425rem + 2.1vw); }
// @media (min-width: 1200px) { .display-5 { font-size: 3rem; } }
globalStyle(`${bootstrapScope}${display5}`, {
	fontWeight: 300,
	lineHeight: 1.2,
	fontSize: `calc(1.425rem + 2.1vw)`,
})

// SOURCE CSS:
// .display-6 { font-weight: 300; line-height: 1.2; font-size: calc(1.375rem + 1.5vw); }
// @media (min-width: 1200px) { .display-6 { font-size: 2.5rem; } }
globalStyle(`${bootstrapScope}${display6}`, {
	fontWeight: 300,
	lineHeight: 1.2,
	fontSize: `calc(1.375rem + 1.5vw)`,
})
