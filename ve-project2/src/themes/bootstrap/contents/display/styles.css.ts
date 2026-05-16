import { globalStyle } from '@vanilla-extract/css'
import {
	display1,
	display2,
	display3,
	display4,
	display5,
	display6,
} from '../../../../theme-contract/contents/contract.css'
import { bootstrapScope } from '../../scope.css'

const displayBase = {
	fontWeight: 300,
	lineHeight: 1.2,
} as const

// ─── Display headings ─────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${display1}`, {
	...displayBase,
	fontSize: 'calc(1.625rem + 4.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '5rem' } },
})

globalStyle(`${bootstrapScope}${display2}`, {
	...displayBase,
	fontSize: 'calc(1.575rem + 3.9vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4.5rem' } },
})

globalStyle(`${bootstrapScope}${display3}`, {
	...displayBase,
	fontSize: 'calc(1.525rem + 3.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '4rem' } },
})

globalStyle(`${bootstrapScope}${display4}`, {
	...displayBase,
	fontSize: 'calc(1.475rem + 2.7vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3.5rem' } },
})

globalStyle(`${bootstrapScope}${display5}`, {
	...displayBase,
	fontSize: 'calc(1.425rem + 2.1vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '3rem' } },
})

globalStyle(`${bootstrapScope}${display6}`, {
	...displayBase,
	fontSize: 'calc(1.375rem + 1.5vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '2.5rem' } },
})
