import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../scope.css'

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

globalStyle(`${yetiScope}${vars}`, {
	vars: {
		[varBsBlue]: '#008cba',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#f04124',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#e99002',
		[varBsGreen]: '#43ac6a',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#5bc0de',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#888',
		[varBsGrayDark]: '#333',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#eee',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ccc',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#888',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#333',
		'--bs-gray-900': '#222',
		[varBsPrimary]: '#008cba',
		[varBsSecondary]: '#eee',
		[varBsSuccess]: '#43ac6a',
		[varBsInfo]: '#5bc0de',
		[varBsWarning]: '#e99002',
		[varBsDanger]: '#f04124',
		[varBsLight]: '#eee',
		[varBsDark]: '#333',
		[varBsPrimaryRgb]: '0, 140, 186',
		[varBsSecondaryRgb]: '238, 238, 238',
		[varBsSuccessRgb]: '67, 172, 106',
		[varBsInfoRgb]: '91, 192, 222',
		[varBsWarningRgb]: '233, 144, 2',
		[varBsDangerRgb]: '240, 65, 36',
		[varBsLightRgb]: '238, 238, 238',
		[varBsDarkRgb]: '51, 51, 51',
		[varBsPrimaryTextEmphasis]: '#00384a',
		[varBsSecondaryTextEmphasis]: '#5f5f5f',
		[varBsSuccessTextEmphasis]: '#1b452a',
		[varBsInfoTextEmphasis]: '#244d59',
		[varBsWarningTextEmphasis]: '#5d3a01',
		[varBsDangerTextEmphasis]: '#601a0e',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#cce8f1',
		[varBsSecondaryBgSubtle]: '#fcfcfc',
		[varBsSuccessBgSubtle]: '#d9eee1',
		[varBsInfoBgSubtle]: '#def2f8',
		[varBsWarningBgSubtle]: '#fbe9cc',
		[varBsDangerBgSubtle]: '#fcd9d3',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ccc',
		[varBsPrimaryBorderSubtle]: '#99d1e3',
		[varBsSecondaryBorderSubtle]: '#f8f8f8',
		[varBsSuccessBorderSubtle]: '#b4dec3',
		[varBsInfoBorderSubtle]: '#bde6f2',
		[varBsWarningBorderSubtle]: '#f6d39a',
		[varBsDangerBorderSubtle]: '#f9b3a7',
		[varBsLightBorderSubtle]: '#eee',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#222',
		[varBsBodyColorRgb]: '34, 34, 34',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(34, 34, 34, 0.75)',
		'--bs-secondary-color-rgb': '34, 34, 34',
		[varBsSecondaryBg]: '#eee',
		'--bs-secondary-bg-rgb': '238, 238, 238',
		[varBsTertiaryColor]: 'rgba(34, 34, 34, 0.5)',
		'--bs-tertiary-color-rgb': '34, 34, 34',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#008cba',
		[varBsLinkColorRgb]: '0, 140, 186',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#007095',
		[varBsLinkHoverColorRgb]: '0, 112, 149',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#222',
		[varBsHighlightBg]: '#fbe9cc',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#dee2e6',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '0',
		[varBsBorderRadiusSm]: '0',
		[varBsBorderRadiusLg]: '0',
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
		[varBsFocusRingColor]: 'rgba(0, 140, 186, 0.25)',
		[varBsFormValidColor]: '#43ac6a',
		[varBsFormValidBorderColor]: '#43ac6a',
		[varBsFormInvalidColor]: '#f04124',
		[varBsFormInvalidBorderColor]: '#f04124',
	},
})

globalStyle(`${yetiScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#222',
		[varBsBodyBgRgb]: '34, 34, 34',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#333',
		'--bs-secondary-bg-rgb': '51, 51, 51',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#2b2b2b',
		'--bs-tertiary-bg-rgb': '43, 43, 43',
		[varBsPrimaryTextEmphasis]: '#66bad6',
		[varBsSecondaryTextEmphasis]: 'whitesmoke',
		[varBsSuccessTextEmphasis]: '#8ecda6',
		[varBsInfoTextEmphasis]: '#9dd9eb',
		[varBsWarningTextEmphasis]: '#f2bc67',
		[varBsDangerTextEmphasis]: '#f68d7c',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#001c25',
		[varBsSecondaryBgSubtle]: '#303030',
		[varBsSuccessBgSubtle]: '#0d2215',
		[varBsInfoBgSubtle]: '#12262c',
		[varBsWarningBgSubtle]: '#2f1d00',
		[varBsDangerBgSubtle]: '#300d07',
		[varBsLightBgSubtle]: '#333',
		[varBsDarkBgSubtle]: '#1a1a1a',
		[varBsPrimaryBorderSubtle]: '#005470',
		[varBsSecondaryBorderSubtle]: '#8f8f8f',
		[varBsSuccessBorderSubtle]: '#286740',
		[varBsInfoBorderSubtle]: '#377385',
		[varBsWarningBorderSubtle]: '#8c5601',
		[varBsDangerBorderSubtle]: '#902716',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#333',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#66bad6',
		[varBsLinkHoverColor]: '#85c8de',
		[varBsLinkColorRgb]: '102, 186, 214',
		[varBsLinkHoverColorRgb]: '133, 200, 222',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#5d3a01',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#8ecda6',
		[varBsFormValidBorderColor]: '#8ecda6',
		[varBsFormInvalidColor]: '#f68d7c',
		[varBsFormInvalidBorderColor]: '#f68d7c',
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

globalStyle(`${yetiScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${yetiScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${yetiScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${yetiScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${yetiScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${yetiScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${yetiScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${yetiScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${yetiScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '300',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${yetiScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${yetiScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${yetiScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${yetiScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${yetiScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${yetiScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${yetiScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${yetiScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${yetiScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${yetiScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${yetiScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${yetiScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${yetiScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${yetiScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${yetiScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${yetiScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${yetiScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${yetiScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${yetiScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${yetiScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${yetiScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${yetiScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${yetiScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${yetiScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${yetiScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${yetiScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${yetiScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${yetiScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${yetiScope}${elOl}) :where(${yetiScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${yetiScope}${elUl}) :where(${yetiScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${yetiScope}${elOl}) :where(${yetiScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${yetiScope}${elUl}) :where(${yetiScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${yetiScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${yetiScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${yetiScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${yetiScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${yetiScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${yetiScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${yetiScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${yetiScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${yetiScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${yetiScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${yetiScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${yetiScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${yetiScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${yetiScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${yetiScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${yetiScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${yetiScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${yetiScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${yetiScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${yetiScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${yetiScope}${elPre}) :where(${yetiScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${yetiScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${yetiScope}${link}) > :where(${yetiScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${yetiScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0',
})

globalStyle(`:where(${yetiScope}${elKbd}) :where(${yetiScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${yetiScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${yetiScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${yetiScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${yetiScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${yetiScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${yetiScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${yetiScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${yetiScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${yetiScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${yetiScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${yetiScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${yetiScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${yetiScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${yetiScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${yetiScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${yetiScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${yetiScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${yetiScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${yetiScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${yetiScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${yetiScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${yetiScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${yetiScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${yetiScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${yetiScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${yetiScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${yetiScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${yetiScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${yetiScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${yetiScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${yetiScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${yetiScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${yetiScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${yetiScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${yetiScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${yetiScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${yetiScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${yetiScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${yetiScope}${elLegend}) + *`, {
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

globalStyle(`${yetiScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${yetiScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${yetiScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${yetiScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${yetiScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${yetiScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${yetiScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${yetiScope}${containerFluid}`, {
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

globalStyle(`${yetiScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${yetiScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${yetiScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${yetiScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${yetiScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${yetiScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${yetiScope}${collapsing}`, {
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

globalStyle(`${yetiScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${yetiScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${yetiScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${yetiScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`:where(${yetiScope}${tableElement})`, {
	fontSize: '0.875rem',
})

globalStyle(`:where(${yetiScope}${elLabel})`, {
	fontSize: '0.875rem',
})
