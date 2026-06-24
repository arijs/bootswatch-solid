import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../scope.css'

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

globalStyle(`${luxScope}${vars}`, {
	vars: {
		[varBsBlue]: '#007bff',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#d9534f',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#f0ad4e',
		[varBsGreen]: '#4bbf73',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#1f9bcf',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#919aa1',
		[varBsGrayDark]: '#343a40',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#f0f1f2',
		'--bs-gray-300': '#e0e1e2',
		'--bs-gray-400': '#cdcecf',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#919aa1',
		'--bs-gray-700': '#55595c',
		'--bs-gray-800': '#343a40',
		'--bs-gray-900': '#1a1a1a',
		[varBsPrimary]: '#1a1a1a',
		[varBsSecondary]: '#fff',
		[varBsSuccess]: '#4bbf73',
		[varBsInfo]: '#1f9bcf',
		[varBsWarning]: '#f0ad4e',
		[varBsDanger]: '#d9534f',
		[varBsLight]: '#f0f1f2',
		[varBsDark]: '#343a40',
		[varBsPrimaryRgb]: '26, 26, 26',
		[varBsSecondaryRgb]: '255, 255, 255',
		[varBsSuccessRgb]: '75, 191, 115',
		[varBsInfoRgb]: '31, 155, 207',
		[varBsWarningRgb]: '240, 173, 78',
		[varBsDangerRgb]: '217, 83, 79',
		[varBsLightRgb]: '240, 241, 242',
		[varBsDarkRgb]: '52, 58, 64',
		[varBsPrimaryTextEmphasis]: '#0a0a0a',
		[varBsSecondaryTextEmphasis]: '#666666',
		[varBsSuccessTextEmphasis]: '#1e4c2e',
		[varBsInfoTextEmphasis]: '#0c3e53',
		[varBsWarningTextEmphasis]: '#60451f',
		[varBsDangerTextEmphasis]: '#572120',
		[varBsLightTextEmphasis]: '#55595c',
		[varBsDarkTextEmphasis]: '#55595c',
		[varBsPrimaryBgSubtle]: '#d1d1d1',
		[varBsSecondaryBgSubtle]: 'white',
		[varBsSuccessBgSubtle]: '#dbf2e3',
		[varBsInfoBgSubtle]: '#d2ebf5',
		[varBsWarningBgSubtle]: '#fcefdc',
		[varBsDangerBgSubtle]: '#f7dddc',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#cdcecf',
		[varBsPrimaryBorderSubtle]: '#a3a3a3',
		[varBsSecondaryBorderSubtle]: 'white',
		[varBsSuccessBorderSubtle]: '#b7e5c7',
		[varBsInfoBorderSubtle]: '#a5d7ec',
		[varBsWarningBorderSubtle]: '#f9deb8',
		[varBsDangerBorderSubtle]: '#f0bab9',
		[varBsLightBorderSubtle]: '#f0f1f2',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: '"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '300',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#55595c',
		[varBsBodyColorRgb]: '85, 89, 92',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(85, 89, 92, 0.75)',
		'--bs-secondary-color-rgb': '85, 89, 92',
		[varBsSecondaryBg]: '#f0f1f2',
		'--bs-secondary-bg-rgb': '240, 241, 242',
		[varBsTertiaryColor]: 'rgba(85, 89, 92, 0.5)',
		'--bs-tertiary-color-rgb': '85, 89, 92',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: '#1a1a1a',
		[varBsLinkColor]: '#1a1a1a',
		[varBsLinkColorRgb]: '26, 26, 26',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#151515',
		[varBsLinkHoverColorRgb]: '21, 21, 21',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#55595c',
		[varBsHighlightBg]: '#fcefdc',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#e0e1e2',
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
		[varBsFocusRingColor]: 'rgba(26, 26, 26, 0.25)',
		[varBsFormValidColor]: '#4bbf73',
		[varBsFormValidBorderColor]: '#4bbf73',
		[varBsFormInvalidColor]: '#d9534f',
		[varBsFormInvalidBorderColor]: '#d9534f',
	},
})

globalStyle(`${luxScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#e0e1e2',
		[varBsBodyColorRgb]: '224, 225, 226',
		[varBsBodyBg]: '#1a1a1a',
		[varBsBodyBgRgb]: '26, 26, 26',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(224, 225, 226, 0.75)',
		'--bs-secondary-color-rgb': '224, 225, 226',
		[varBsSecondaryBg]: '#343a40',
		'--bs-secondary-bg-rgb': '52, 58, 64',
		[varBsTertiaryColor]: 'rgba(224, 225, 226, 0.5)',
		'--bs-tertiary-color-rgb': '224, 225, 226',
		[varBsTertiaryBg]: '#272a2d',
		'--bs-tertiary-bg-rgb': '39, 42, 45',
		[varBsPrimaryTextEmphasis]: '#767676',
		[varBsSecondaryTextEmphasis]: 'white',
		[varBsSuccessTextEmphasis]: '#93d9ab',
		[varBsInfoTextEmphasis]: '#79c3e2',
		[varBsWarningTextEmphasis]: '#f6ce95',
		[varBsDangerTextEmphasis]: '#e89895',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#e0e1e2',
		[varBsPrimaryBgSubtle]: '#050505',
		[varBsSecondaryBgSubtle]: '#333333',
		[varBsSuccessBgSubtle]: '#0f2617',
		[varBsInfoBgSubtle]: '#061f29',
		[varBsWarningBgSubtle]: '#302310',
		[varBsDangerBgSubtle]: '#2b1110',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#101010',
		[varBsSecondaryBorderSubtle]: '#999999',
		[varBsSuccessBorderSubtle]: '#2d7345',
		[varBsInfoBorderSubtle]: '#135d7c',
		[varBsWarningBorderSubtle]: '#90682f',
		[varBsDangerBorderSubtle]: '#82322f',
		[varBsLightBorderSubtle]: '#55595c',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#767676',
		[varBsLinkHoverColor]: '#919191',
		[varBsLinkColorRgb]: '118, 118, 118',
		[varBsLinkHoverColorRgb]: '145, 145, 145',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#e0e1e2',
		[varBsHighlightBg]: '#60451f',
		[varBsBorderColor]: '#55595c',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#93d9ab',
		[varBsFormValidBorderColor]: '#93d9ab',
		[varBsFormInvalidColor]: '#e89895',
		[varBsFormInvalidBorderColor]: '#e89895',
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

globalStyle(`${luxScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${luxScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${luxScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${luxScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${luxScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${luxScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${luxScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${luxScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${luxScope}${h1})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${luxScope}${clsH1}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${luxScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${luxScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${luxScope}${h2})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${luxScope}${clsH2}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${luxScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${luxScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${luxScope}${h3})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${luxScope}${clsH3}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${luxScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${luxScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${luxScope}${h4})`, {
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${clsH4}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${luxScope}${h5})`, {
	fontSize: '1rem',
})

globalStyle(`${luxScope}${clsH5}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${luxScope}${h6})`, {
	fontSize: '0.75rem',
})

globalStyle(`${luxScope}${clsH6}`, {
	fontSize: '0.75rem',
})

globalStyle(`:where(${luxScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${luxScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${luxScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${luxScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${luxScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${luxScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${luxScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${luxScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${luxScope}${elOl}) :where(${luxScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${luxScope}${elUl}) :where(${luxScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${luxScope}${elOl}) :where(${luxScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${luxScope}${elUl}) :where(${luxScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${luxScope}${elDt})`, {
	fontWeight: '600',
})

globalStyle(`:where(${luxScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${luxScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${luxScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${luxScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${luxScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${luxScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${luxScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${luxScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${luxScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${luxScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${luxScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${luxScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${luxScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${luxScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${luxScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${luxScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${luxScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${luxScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${luxScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${luxScope}${elPre}) :where(${luxScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${luxScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${luxScope}${link}) > :where(${luxScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${luxScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
})

globalStyle(`:where(${luxScope}${elKbd}) :where(${luxScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${luxScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${luxScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${luxScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${luxScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${luxScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${luxScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${luxScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${luxScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${luxScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${luxScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${luxScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${luxScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${luxScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${luxScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${luxScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${luxScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${luxScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${luxScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${luxScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${luxScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${luxScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${luxScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${luxScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${luxScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${luxScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${luxScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${luxScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${luxScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${luxScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${luxScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${luxScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${luxScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${luxScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${luxScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${luxScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${luxScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${luxScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${luxScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${luxScope}${elLegend}) + *`, {
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

globalStyle(`${luxScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${luxScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${luxScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${luxScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${luxScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${luxScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${luxScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${luxScope}${containerFluid}`, {
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

globalStyle(`${luxScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${luxScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${luxScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${luxScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${luxScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${luxScope}${collapsing}`, {
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

globalStyle(`${luxScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${luxScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${luxScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${luxScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`${luxScope}${vars}`, {
	vars: {
		[varBsBorderWidth]: '0',
	},
})

globalStyle(`:where(${luxScope}${h1})`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH1}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`:where(${luxScope}${h2})`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH2}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`:where(${luxScope}${h3})`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH3}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`:where(${luxScope}${h4})`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH4}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`:where(${luxScope}${h5})`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH5}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`:where(${luxScope}${h6})`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH6}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`:where(${luxScope}${tableHeaderCell})`, {
	fontSize: '0.875rem',
	textTransform: 'uppercase',
})
