import { globalStyle } from '@vanilla-extract/css'
import {
	varBsHeadingColor,
} from '../../../../theme-contract/_vars.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
import { cosmoScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/contents/heading
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1rem; }
globalStyle(`${cosmoScope}${h6}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 400,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1rem",
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
globalStyle(`${cosmoScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 400,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.25rem",
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
globalStyle(`${cosmoScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 400,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.275rem + 0.3vw)`,
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.3rem + 0.6vw); }
globalStyle(`${cosmoScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 400,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.3rem + 0.6vw)`,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.325rem + 0.9vw); }
globalStyle(`${cosmoScope}${h2}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 400,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.325rem + 0.9vw)`,
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.375rem + 1.5vw); }
globalStyle(`${cosmoScope}${h1}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 400,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.375rem + 1.5vw)`,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
