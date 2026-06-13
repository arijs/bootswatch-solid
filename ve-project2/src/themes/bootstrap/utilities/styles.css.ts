import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadiusPill,
	varBsBorderWidth,
	varBsDangerRgb,
	varBsDarkRgb,
	varBsInfoRgb,
	varBsLightRgb,
	varBsPrimaryRgb,
	varBsSecondaryRgb,
	varBsSuccessRgb,
	varBsWarningRgb,
} from '../../../theme-contract/_vars.css'
import { varBsTextOpacity } from '../../../theme-contract/utilities/generated/_vars.css'
import { varBsBgOpacity } from '../../../theme-contract/utilities/generated/_vars.css'
import {
	alignTop,
	bgDanger,
	bgInfo,
	bgLight,
	bgPrimary,
	bgSecondary,
	bgSuccess,
	bgWarning,
	dInlineBlock,
	mb0,
	me2,
	roundedPill,
	textCenter,
	textDanger,
	textInfo,
	textLight,
	textPrimary,
	textSecondary,
	textSuccess,
	textWarning,
	w100,
	w25,
	w50,
	w75,
} from '../../../theme-contract/literal/contract.css'
import { bgDark, px3, textDark } from '../../../theme-contract/utilities/contract.css'
import { bootstrapScope } from '../scope.css'

// AUTO-GENERATED family styles for bootstrap/utilities
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .text-center { text-align: center !important; }
globalStyle(`${bootstrapScope}${textCenter}`, {
	textAlign: 'center !important',
})

// SOURCE CSS:
// .text-primary { --bs-text-opacity: 1; color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important; }
globalStyle(`${bootstrapScope}${textPrimary}`, {
	vars: { [varBsTextOpacity]: '1' },
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

// SOURCE CSS:
// .text-secondary { --bs-text-opacity: 1; color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important; }
globalStyle(`${bootstrapScope}${textSecondary}`, {
	vars: { [varBsTextOpacity]: '1' },
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

// SOURCE CSS:
// .text-success { --bs-text-opacity: 1; color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important; }
globalStyle(`${bootstrapScope}${textSuccess}`, {
	vars: { [varBsTextOpacity]: '1' },
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

// SOURCE CSS:
// .text-info { --bs-text-opacity: 1; color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important; }
globalStyle(`${bootstrapScope}${textInfo}`, {
	vars: { [varBsTextOpacity]: '1' },
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

// SOURCE CSS:
// .text-warning { --bs-text-opacity: 1; color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important; }
globalStyle(`${bootstrapScope}${textWarning}`, {
	vars: { [varBsTextOpacity]: '1' },
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

// SOURCE CSS:
// .text-danger { --bs-text-opacity: 1; color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important; }
globalStyle(`${bootstrapScope}${textDanger}`, {
	vars: { [varBsTextOpacity]: '1' },
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

// SOURCE CSS:
// .text-light { --bs-text-opacity: 1; color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important; }
globalStyle(`${bootstrapScope}${textLight}`, {
	vars: { [varBsTextOpacity]: '1' },
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

// SOURCE CSS:
// .text-dark { --bs-text-opacity: 1; color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; }
globalStyle(`${bootstrapScope}${textDark}`, {
	vars: { [varBsTextOpacity]: '1' },
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${bootstrapScope}${bgPrimary}`, {
	vars: { [varBsBgOpacity]: '1' },
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

// SOURCE CSS:
// .bg-secondary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${bootstrapScope}${bgSecondary}`, {
	vars: { [varBsBgOpacity]: '1' },
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

// SOURCE CSS:
// .bg-success { --bs-bg-opacity: 1; background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${bootstrapScope}${bgSuccess}`, {
	vars: { [varBsBgOpacity]: '1' },
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

// SOURCE CSS:
// .bg-info { --bs-bg-opacity: 1; background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${bootstrapScope}${bgInfo}`, {
	vars: { [varBsBgOpacity]: '1' },
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

// SOURCE CSS:
// .bg-warning { --bs-bg-opacity: 1; background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${bootstrapScope}${bgWarning}`, {
	vars: { [varBsBgOpacity]: '1' },
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

// SOURCE CSS:
// .bg-danger { --bs-bg-opacity: 1; background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${bootstrapScope}${bgDanger}`, {
	vars: { [varBsBgOpacity]: '1' },
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${bootstrapScope}${bgLight}`, {
	vars: { [varBsBgOpacity]: '1' },
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

// SOURCE CSS:
// .bg-dark { --bs-bg-opacity: 1; background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${bootstrapScope}${bgDark}`, {
	vars: { [varBsBgOpacity]: '1' },
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

// SOURCE CSS:
// .rounded-pill { border-radius: 50rem !important; }
globalStyle(`${bootstrapScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

// SOURCE CSS:
// .w-25 { width: 25% !important; }
globalStyle(`${bootstrapScope}${w25}`, {
	width: '25% !important',
})

// SOURCE CSS:
// .w-50 { width: 50% !important; }
globalStyle(`${bootstrapScope}${w50}`, {
	width: '50% !important',
})

// SOURCE CSS:
// .w-75 { width: 75% !important; }
globalStyle(`${bootstrapScope}${w75}`, {
	width: '75% !important',
})

// SOURCE CSS:
// .w-100 { width: 100% !important; }
globalStyle(`${bootstrapScope}${w100}`, {
	width: '100% !important',
})

// SOURCE CSS:
// .mb-0 { margin-bottom: 0 !important; }
globalStyle(`${bootstrapScope}${mb0}`, {
	marginBottom: '0 !important',
})

// SOURCE CSS:
// .me-2 { margin-right: 0.5rem !important; }
globalStyle(`${bootstrapScope}${me2}`, {
	marginRight: '0.5rem !important',
})

// SOURCE CSS:
// .d-inline-block { display: inline-block !important; }
globalStyle(`${bootstrapScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

// SOURCE CSS:
// .align-top { vertical-align: top !important; }
globalStyle(`${bootstrapScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

// SOURCE CSS:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${bootstrapScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})
