import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { flatlyScope } from '../scope.css'

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
import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
	collapsing,
} from '../../../theme-contract/literal/contract.css'
import { collapse } from '../../../theme-contract/ui/navbar/contract.css'
import { fade, show } from '../../../theme-contract/ui/navs/contract.css'

globalStyle(`${flatlyScope}${vars}`, {
	vars: {
		[varBsBlue]: '#2c3e50',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#e74c3c',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#f39c12',
		[varBsGreen]: '#18bc9c',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#3498db',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#95a5a6',
		[varBsGrayDark]: '#343a40',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#ecf0f1',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#b4bcc2',
		'--bs-gray-600': '#95a5a6',
		'--bs-gray-700': '#7b8a8b',
		'--bs-gray-800': '#343a40',
		'--bs-gray-900': '#212529',
		[varBsPrimary]: '#2c3e50',
		[varBsSecondary]: '#95a5a6',
		[varBsSuccess]: '#18bc9c',
		[varBsInfo]: '#3498db',
		[varBsWarning]: '#f39c12',
		[varBsDanger]: '#e74c3c',
		[varBsLight]: '#ecf0f1',
		[varBsDark]: '#7b8a8b',
		[varBsPrimaryRgb]: '44, 62, 80',
		[varBsSecondaryRgb]: '149, 165, 166',
		[varBsSuccessRgb]: '24, 188, 156',
		[varBsInfoRgb]: '52, 152, 219',
		[varBsWarningRgb]: '243, 156, 18',
		[varBsDangerRgb]: '231, 76, 60',
		[varBsLightRgb]: '236, 240, 241',
		[varBsDarkRgb]: '123, 138, 139',
		[varBsPrimaryTextEmphasis]: '#121920',
		[varBsSecondaryTextEmphasis]: '#3c4242',
		[varBsSuccessTextEmphasis]: '#0a4b3e',
		[varBsInfoTextEmphasis]: '#153d58',
		[varBsWarningTextEmphasis]: '#613e07',
		[varBsDangerTextEmphasis]: '#5c1e18',
		[varBsLightTextEmphasis]: '#7b8a8b',
		[varBsDarkTextEmphasis]: '#7b8a8b',
		[varBsPrimaryBgSubtle]: '#d5d8dc',
		[varBsSecondaryBgSubtle]: '#eaeded',
		[varBsSuccessBgSubtle]: '#d1f2eb',
		[varBsInfoBgSubtle]: '#d6eaf8',
		[varBsWarningBgSubtle]: '#fdebd0',
		[varBsDangerBgSubtle]: '#fadbd8',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#abb2b9',
		[varBsSecondaryBorderSubtle]: '#d5dbdb',
		[varBsSuccessBorderSubtle]: '#a3e4d7',
		[varBsInfoBorderSubtle]: '#aed6f1',
		[varBsWarningBorderSubtle]: '#fad7a0',
		[varBsDangerBorderSubtle]: '#f5b7b1',
		[varBsLightBorderSubtle]: '#ecf0f1',
		[varBsDarkBorderSubtle]: '#b4bcc2',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
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
		[varBsSecondaryBg]: '#ecf0f1',
		'--bs-secondary-bg-rgb': '236, 240, 241',
		[varBsTertiaryColor]: 'rgba(33, 37, 41, 0.5)',
		'--bs-tertiary-color-rgb': '33, 37, 41',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#18bc9c',
		[varBsLinkColorRgb]: '24, 188, 156',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#13967d',
		[varBsLinkHoverColorRgb]: '19, 150, 125',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#212529',
		[varBsHighlightBg]: '#fdebd0',
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
		[varBsFocusRingWidth]: '0.25rem',
		[varBsFocusRingOpacity]: '0.25',
		[varBsFocusRingColor]: 'rgba(44, 62, 80, 0.25)',
		[varBsFormValidColor]: '#18bc9c',
		[varBsFormValidBorderColor]: '#18bc9c',
		[varBsFormInvalidColor]: '#e74c3c',
		[varBsFormInvalidBorderColor]: '#e74c3c',
	},
})

globalStyle(`${flatlyScope}${vars}[data-bs-theme=dark]`, {
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
		[varBsPrimaryTextEmphasis]: '#808b96',
		[varBsSecondaryTextEmphasis]: '#bfc9ca',
		[varBsSuccessTextEmphasis]: '#74d7c4',
		[varBsInfoTextEmphasis]: '#85c1e9',
		[varBsWarningTextEmphasis]: '#f8c471',
		[varBsDangerTextEmphasis]: '#f1948a',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#090c10',
		[varBsSecondaryBgSubtle]: '#1e2121',
		[varBsSuccessBgSubtle]: '#05261f',
		[varBsInfoBgSubtle]: '#0a1e2c',
		[varBsWarningBgSubtle]: '#311f04',
		[varBsDangerBgSubtle]: '#2e0f0c',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#1a2530',
		[varBsSecondaryBorderSubtle]: '#596364',
		[varBsSuccessBorderSubtle]: '#0e715e',
		[varBsInfoBorderSubtle]: '#1f5b83',
		[varBsWarningBorderSubtle]: '#925e0b',
		[varBsDangerBorderSubtle]: '#8b2e24',
		[varBsLightBorderSubtle]: '#7b8a8b',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#808b96',
		[varBsLinkHoverColor]: '#99a2ab',
		[varBsLinkColorRgb]: '128, 139, 150',
		[varBsLinkHoverColorRgb]: '153, 162, 171',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#613e07',
		[varBsBorderColor]: '#7b8a8b',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#74d7c4',
		[varBsFormValidBorderColor]: '#74d7c4',
		[varBsFormInvalidColor]: '#f1948a',
		[varBsFormInvalidBorderColor]: '#f1948a',
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

globalStyle(`${flatlyScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${flatlyScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${flatlyScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${flatlyScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${flatlyScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${flatlyScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${flatlyScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${flatlyScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${flatlyScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${flatlyScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${flatlyScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${flatlyScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${flatlyScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${flatlyScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${flatlyScope}${h1})`, {
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${flatlyScope}${clsH1}`, {
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`:where(${flatlyScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${flatlyScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`:where(${flatlyScope}${h2})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${flatlyScope}${clsH2}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${flatlyScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${flatlyScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${flatlyScope}${h3})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${flatlyScope}${clsH3}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${flatlyScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${flatlyScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${flatlyScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${flatlyScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${flatlyScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${flatlyScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${flatlyScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${flatlyScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${flatlyScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${flatlyScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${flatlyScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${flatlyScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${flatlyScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${flatlyScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${flatlyScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${flatlyScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${flatlyScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${flatlyScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${flatlyScope}${elOl}) :where(${flatlyScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${flatlyScope}${elUl}) :where(${flatlyScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${flatlyScope}${elOl}) :where(${flatlyScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${flatlyScope}${elUl}) :where(${flatlyScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${flatlyScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${flatlyScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${flatlyScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${flatlyScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${flatlyScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${flatlyScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${flatlyScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${flatlyScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${flatlyScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${flatlyScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${flatlyScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${flatlyScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${flatlyScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${flatlyScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${flatlyScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${flatlyScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${flatlyScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${flatlyScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${flatlyScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${flatlyScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${flatlyScope}${elPre}) :where(${flatlyScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${flatlyScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${flatlyScope}${link}) > :where(${flatlyScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${flatlyScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${flatlyScope}${elKbd}) :where(${flatlyScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${flatlyScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${flatlyScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${flatlyScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${flatlyScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${flatlyScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${flatlyScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${flatlyScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${flatlyScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${flatlyScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${flatlyScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${flatlyScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${flatlyScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${flatlyScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${flatlyScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${flatlyScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${flatlyScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${flatlyScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${flatlyScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${flatlyScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${flatlyScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${flatlyScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${flatlyScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${flatlyScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${flatlyScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${flatlyScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${flatlyScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${flatlyScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${flatlyScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${flatlyScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${flatlyScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${flatlyScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${flatlyScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${flatlyScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${flatlyScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${flatlyScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${flatlyScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${flatlyScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${flatlyScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${flatlyScope}${elLegend}) + *`, {
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

globalStyle(`${flatlyScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${flatlyScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${flatlyScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${flatlyScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${flatlyScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${flatlyScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${flatlyScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${flatlyScope}${containerFluid}`, {
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

globalStyle(`${flatlyScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${flatlyScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${flatlyScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${flatlyScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${flatlyScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${flatlyScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${flatlyScope}${collapsing}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalKeyframes('progress-bar-stripes', {
	'0%': {
		backgroundPositionX: 'var(--bs-progress-height)',
	},
})

globalStyle(`${flatlyScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${flatlyScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${flatlyScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${flatlyScope}${vars}[data-bs-theme=dark]`, {
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
