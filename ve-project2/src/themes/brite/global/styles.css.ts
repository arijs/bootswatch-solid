import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../scope.css'

import {
	varBsBlack,
	varBsBlackRgb,
	varBsBlue,
	varBsBodyBg,
	varBsBodyBgRgb,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBodyFontFamily,
	varBsBodyFontSize,
	varBsBodyFontWeight,
	varBsBodyLineHeight,
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusPill,
	varBsBorderRadiusSm,
	varBsBorderRadiusXl,
	varBsBorderRadiusXxl,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsBoxShadowInset,
	varBsBoxShadowLg,
	varBsBoxShadowSm,
	varBsCodeColor,
	varBsCyan,
	varBsDanger,
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
	varBsDangerRgb,
	varBsDangerTextEmphasis,
	varBsDark,
	varBsDarkBgSubtle,
	varBsDarkBorderSubtle,
	varBsDarkRgb,
	varBsDarkTextEmphasis,
	varBsEmphasisColor,
	varBsEmphasisColorRgb,
	varBsFocusRingColor,
	varBsFocusRingOpacity,
	varBsFocusRingWidth,
	varBsFontMonospace,
	varBsFontSansSerif,
	varBsGradient,
	varBsGray,
	varBsGrayDark,
	varBsGreen,
	varBsHeadingColor,
	varBsHighlightBg,
	varBsHighlightColor,
	varBsIndigo,
	varBsInfo,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
	varBsInfoRgb,
	varBsInfoTextEmphasis,
	varBsLight,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
	varBsLightRgb,
	varBsLightTextEmphasis,
	varBsLinkColor,
	varBsLinkColorRgb,
	varBsLinkDecoration,
	varBsLinkHoverColor,
	varBsLinkHoverColorRgb,
	varBsOrange,
	varBsPink,
	varBsPrimary,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
	varBsPrimaryRgb,
	varBsPrimaryTextEmphasis,
	varBsPurple,
	varBsRed,
	varBsSecondary,
	varBsSecondaryBg,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
	varBsSecondaryColor,
	varBsSecondaryRgb,
	varBsSecondaryTextEmphasis,
	varBsSuccess,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
	varBsSuccessRgb,
	varBsSuccessTextEmphasis,
	varBsTeal,
	varBsTertiaryBg,
	varBsTertiaryColor,
	varBsWarning,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
	varBsWarningRgb,
	varBsWarningTextEmphasis,
	varBsWhite,
	varBsWhiteRgb,
	varBsYellow,
} from '../../../theme-contract/_vars.css'
import {
	varBsFormInvalidBorderColor,
	varBsFormInvalidColor,
	varBsFormValidBorderColor,
	varBsFormValidColor,
} from '../../../theme-contract/forms/_vars.css'
import { varBsGutterX, varBsGutterY } from '../../../theme-contract/layout/container.css'
import { varBsCarouselCaptionColor, varBsCarouselControlIconFilter, varBsCarouselIndicatorActiveBg } from '../../../theme-contract/ui/carousel/_vars.css'
import { varBsBtnCloseFilter, varBsLinkOpacity } from '../../../theme-contract/utilities/generated/_vars.css'

import {
	blockquote,
	horizontalRule,
	inlineCode,
	link,
	markText,
	paragraph,
	small,
} from '../../../theme-contract/contents/basic/contract.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../theme-contract/contents/heading/contract.css'
import {
	tableCell,
	tableElement,
	tableHead,
	tableHeaderCell,
	tableRow,
	tableSection,
} from '../../../theme-contract/contents/tables/contract.css'
import { fieldset } from '../../../theme-contract/forms/contract.css'
import {
	elAbbr,
	elAddress,
	elB,
	elButton,
	elCaption,
	elDd,
	elDl,
	elDt,
	elFigure,
	elIframe,
	elImg,
	elInput,
	elKbd,
	elLabel,
	elLegend,
	elOl,
	elOptgroup,
	elOutput,
	elPre,
	elProgress,
	elSamp,
	elSelect,
	elStrong,
	elSub,
	elSummary,
	elSup,
	elSvg,
	elTextarea,
	elUl,
} from '../../../theme-contract/global-elements/contract.css'

import { vars } from '../../../theme-contract/theme-contract.css'

import { containerFluid } from '../../../theme-contract/layout/container.css'
import { navbar } from '../../../theme-contract/ui/navbar/contract.css'

globalStyle(`${briteScope}${vars}`, {
	vars: {
		[varBsBlue]: '#61bcff',
		[varBsIndigo]: '#828df9',
		[varBsPurple]: '#be82fa',
		[varBsPink]: '#ea4998',
		[varBsRed]: '#f56565',
		[varBsOrange]: '#fa984a',
		[varBsYellow]: '#ffc700',
		[varBsGreen]: '#68d391',
		[varBsTeal]: '#2ed3be',
		[varBsCyan]: '#22d2ed',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#868e96',
		[varBsGrayDark]: '#343a40',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#e9ecef',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#868e96',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#343a40',
		'--bs-gray-900': '#212529',
		[varBsPrimary]: '#a2e436',
		[varBsSecondary]: '#fff',
		[varBsSuccess]: '#68d391',
		[varBsInfo]: '#22d2ed',
		[varBsWarning]: '#ffc700',
		[varBsDanger]: '#f56565',
		[varBsLight]: '#e9ecef',
		[varBsDark]: '#000',
		[varBsPrimaryRgb]: '162, 228, 54',
		[varBsSecondaryRgb]: '255, 255, 255',
		[varBsSuccessRgb]: '104, 211, 145',
		[varBsInfoRgb]: '34, 210, 237',
		[varBsWarningRgb]: '255, 199, 0',
		[varBsDangerRgb]: '245, 101, 101',
		[varBsLightRgb]: '233, 236, 239',
		[varBsDarkRgb]: '0, 0, 0',
		[varBsPrimaryTextEmphasis]: '#415b16',
		[varBsSecondaryTextEmphasis]: '#666666',
		[varBsSuccessTextEmphasis]: '#2a543a',
		[varBsInfoTextEmphasis]: '#0e545f',
		[varBsWarningTextEmphasis]: '#665000',
		[varBsDangerTextEmphasis]: '#622828',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#ecfad7',
		[varBsSecondaryBgSubtle]: 'white',
		[varBsSuccessBgSubtle]: '#e1f6e9',
		[varBsInfoBgSubtle]: '#d3f6fb',
		[varBsWarningBgSubtle]: '#fff4cc',
		[varBsDangerBgSubtle]: '#fde0e0',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#daf4af',
		[varBsSecondaryBorderSubtle]: 'white',
		[varBsSuccessBorderSubtle]: '#c3edd3',
		[varBsInfoBorderSubtle]: '#a7edf8',
		[varBsWarningBorderSubtle]: '#ffe999',
		[varBsDangerBorderSubtle]: '#fbc1c1',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '0.875rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#212529',
		[varBsBodyColorRgb]: '33, 37, 41',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(33, 37, 41, 0.75)',
		'--bs-secondary-color-rgb': '33, 37, 41',
		[varBsSecondaryBg]: '#e9ecef',
		'--bs-secondary-bg-rgb': '233, 236, 239',
		[varBsTertiaryColor]: 'rgba(33, 37, 41, 0.5)',
		'--bs-tertiary-color-rgb': '33, 37, 41',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#000',
		[varBsLinkColorRgb]: '0, 0, 0',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: 'black',
		[varBsLinkHoverColorRgb]: '0, 0, 0',
		[varBsCodeColor]: '#ea4998',
		[varBsHighlightColor]: '#212529',
		[varBsHighlightBg]: '#fff4cc',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#dee2e6',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '0.375rem',
		[varBsBorderRadiusSm]: '0.25rem',
		[varBsBorderRadiusLg]: '0.5rem',
		[varBsBorderRadiusXl]: '1rem',
		[varBsBorderRadiusXxl]: '2rem',
		'--bs-border-radius-2xl': varBsBorderRadiusXxl,
		[varBsBorderRadiusPill]: '50rem',
		[varBsBoxShadow]: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
		[varBsBoxShadowSm]: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
		[varBsBoxShadowLg]: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
		[varBsBoxShadowInset]: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
		[varBsFocusRingWidth]: '1px',
		[varBsFocusRingOpacity]: '1',
		[varBsFocusRingColor]: '#000',
		[varBsFormValidColor]: '#68d391',
		[varBsFormValidBorderColor]: '#68d391',
		[varBsFormInvalidColor]: '#f56565',
		[varBsFormInvalidBorderColor]: '#f56565',
	},
})

globalStyle(`${briteScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#343a40',
		'--bs-secondary-bg-rgb': '52, 58, 64',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#2b3035',
		'--bs-tertiary-bg-rgb': '43, 48, 53',
		[varBsPrimaryTextEmphasis]: '#c7ef86',
		[varBsSecondaryTextEmphasis]: 'white',
		[varBsSuccessTextEmphasis]: '#a4e5bd',
		[varBsInfoTextEmphasis]: '#7ae4f4',
		[varBsWarningTextEmphasis]: '#ffdd66',
		[varBsDangerTextEmphasis]: '#f9a3a3',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#202e0b',
		[varBsSecondaryBgSubtle]: '#333333',
		[varBsSuccessBgSubtle]: '#152a1d',
		[varBsInfoBgSubtle]: '#072a2f',
		[varBsWarningBgSubtle]: '#332800',
		[varBsDangerBgSubtle]: '#311414',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#618920',
		[varBsSecondaryBorderSubtle]: '#999999',
		[varBsSuccessBorderSubtle]: '#3e7f57',
		[varBsInfoBorderSubtle]: '#147e8e',
		[varBsWarningBorderSubtle]: '#997700',
		[varBsDangerBorderSubtle]: '#933d3d',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#c7ef86',
		[varBsLinkHoverColor]: '#d2f29e',
		[varBsLinkColorRgb]: '199, 239, 134',
		[varBsLinkHoverColorRgb]: '210, 242, 158',
		[varBsCodeColor]: '#f292c1',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#665000',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#a4e5bd',
		[varBsFormValidBorderColor]: '#a4e5bd',
		[varBsFormInvalidColor]: '#f9a3a3',
		[varBsFormInvalidBorderColor]: '#f9a3a3',
	},
	colorScheme: 'dark',
})

globalStyle(`*`, {
	boxSizing: 'border-box',
})

globalStyle(`*::before`, {
	boxSizing: 'border-box',
})

globalStyle(`*::after`, {
	boxSizing: 'border-box',
})

globalStyle(`${briteScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${briteScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: '2px solid',
	opacity: '1',
})

globalStyle(`:where(${briteScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${briteScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${briteScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${briteScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${briteScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${briteScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${briteScope}${h1})`, {
	fontSize: 'calc(1.34375rem + 1.125vw)',
})

globalStyle(`:where(${briteScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.1875rem',
		},
	},
})

globalStyle(`:where(${briteScope}${h2})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${briteScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${briteScope}${h3})`, {
	fontSize: 'calc(1.278125rem + 0.3375vw)',
})

globalStyle(`:where(${briteScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.53125rem',
		},
	},
})

globalStyle(`:where(${briteScope}${h4})`, {
	fontSize: 'calc(1.25625rem + 0.075vw)',
})

globalStyle(`:where(${briteScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.3125rem',
		},
	},
})

globalStyle(`:where(${briteScope}${h5})`, {
	fontSize: '1.09375rem',
})

globalStyle(`:where(${briteScope}${h6})`, {
	fontSize: '0.875rem',
})

globalStyle(`:where(${briteScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${briteScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${briteScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${briteScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${briteScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${briteScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${briteScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${briteScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${briteScope}${elOl}) :where(${briteScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${briteScope}${elUl}) :where(${briteScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${briteScope}${elOl}) :where(${briteScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${briteScope}${elUl}) :where(${briteScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${briteScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${briteScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${briteScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${briteScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${briteScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${briteScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${briteScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${briteScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${briteScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${briteScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${briteScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${briteScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${briteScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${briteScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${briteScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${briteScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${briteScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${briteScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${briteScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${briteScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${briteScope}${elPre}) :where(${briteScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${briteScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${briteScope}${link}) > :where(${briteScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${briteScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${briteScope}${elKbd}) :where(${briteScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${briteScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${briteScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${briteScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${briteScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${briteScope}${elCaption})`, {
	paddingTop: '0.75rem',
	paddingBottom: '0.75rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${briteScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${briteScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${briteScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${briteScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${briteScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${briteScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${briteScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${briteScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${briteScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${briteScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${briteScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${briteScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${briteScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${briteScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${briteScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${briteScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${briteScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${briteScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${briteScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${briteScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${briteScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${briteScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${briteScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${briteScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${briteScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${briteScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${briteScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${briteScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${briteScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${briteScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${briteScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${briteScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${briteScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${briteScope}${elLegend}) + *`, {
	clear: 'left',
})

globalStyle(`::-webkit-datetime-edit-fields-wrapper`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-text`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-minute`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-hour-field`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-day-field`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-month-field`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-year-field`, {
	padding: '0',
})

globalStyle(`::-webkit-inner-spin-button`, {
	height: 'auto',
})

globalStyle(`${briteScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${briteScope}[type=search]::-webkit-search-cancel-button`, {
	cursor: 'pointer',
	filter: 'grayscale(1)',
})

globalStyle(`::-webkit-search-decoration`, {
	WebkitAppearance: 'none',
})

globalStyle(`::-webkit-color-swatch-wrapper`, {
	padding: '0',
})

globalStyle(`::-webkit-file-upload-button`, {
	font: 'inherit',
	WebkitAppearance: 'button',
})

globalStyle(`::file-selector-button`, {
	font: 'inherit',
	WebkitAppearance: 'button',
})

globalStyle(`:where(${briteScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${briteScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${briteScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${briteScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${briteScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${briteScope}${containerFluid}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '0',
	},
	width: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginRight: 'auto',
	marginLeft: 'auto',
})

globalStyle(`${briteScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${briteScope}${navbar} > ${briteScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalKeyframes('progress-bar-stripes', {
	'0%': {
		backgroundPositionX: 'var(--bs-progress-height)',
	},
})

globalStyle(`${briteScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${briteScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${briteScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${briteScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
	},
})

globalKeyframes('spinner-border', {
	'to': {
		transform: 'rotate(360deg) ',
	},
})

globalKeyframes('spinner-grow', {
	'0%': {
		transform: 'scale(0)',
	},
	'50%': {
		opacity: '1',
		transform: 'none',
	},
})

globalKeyframes('placeholder-glow', {
	'50%': {
		opacity: '0.2',
	},
})

globalKeyframes('placeholder-wave', {
	'100%': {
		WebkitMaskPosition: '-200% 0%',
		maskPosition: '-200% 0%',
	},
})

globalStyle(`${briteScope}${vars}`, {
	vars: {
		[varBsBorderWidth]: '2px',
		[varBsBorderColor]: '#000',
	},
})

globalStyle(`${briteScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBorderColor]: '#000',
	},
})

globalStyle(`:where(${briteScope}${link})`, {
	fontWeight: '500',
})
