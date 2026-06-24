import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { darklyScope } from '../scope.css'

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

globalStyle(`${darklyScope}${vars}`, {
	vars: {
		[varBsBlue]: '#375a7f',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#e74c3c',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#f39c12',
		[varBsGreen]: '#00bc8c',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#3498db',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#888',
		[varBsGrayDark]: '#303030',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#ebebeb',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#888',
		'--bs-gray-700': '#444',
		'--bs-gray-800': '#303030',
		'--bs-gray-900': '#222',
		[varBsPrimary]: '#375a7f',
		[varBsSecondary]: '#444',
		[varBsSuccess]: '#00bc8c',
		[varBsInfo]: '#3498db',
		[varBsWarning]: '#f39c12',
		[varBsDanger]: '#e74c3c',
		[varBsLight]: '#adb5bd',
		[varBsDark]: '#303030',
		[varBsPrimaryRgb]: '55, 90, 127',
		[varBsSecondaryRgb]: '68, 68, 68',
		[varBsSuccessRgb]: '0, 188, 140',
		[varBsInfoRgb]: '52, 152, 219',
		[varBsWarningRgb]: '243, 156, 18',
		[varBsDangerRgb]: '231, 76, 60',
		[varBsLightRgb]: '173, 181, 189',
		[varBsDarkRgb]: '48, 48, 48',
		[varBsPrimaryTextEmphasis]: '#162433',
		[varBsSecondaryTextEmphasis]: '#1b1b1b',
		[varBsSuccessTextEmphasis]: '#004b38',
		[varBsInfoTextEmphasis]: '#153d58',
		[varBsWarningTextEmphasis]: '#613e07',
		[varBsDangerTextEmphasis]: '#5c1e18',
		[varBsLightTextEmphasis]: '#444',
		[varBsDarkTextEmphasis]: '#444',
		[varBsPrimaryBgSubtle]: '#d7dee5',
		[varBsSecondaryBgSubtle]: '#dadada',
		[varBsSuccessBgSubtle]: '#ccf2e8',
		[varBsInfoBgSubtle]: '#d6eaf8',
		[varBsWarningBgSubtle]: '#fdebd0',
		[varBsDangerBgSubtle]: '#fadbd8',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#afbdcc',
		[varBsSecondaryBorderSubtle]: '#b4b4b4',
		[varBsSuccessBorderSubtle]: '#99e4d1',
		[varBsInfoBorderSubtle]: '#aed6f1',
		[varBsWarningBorderSubtle]: '#fad7a0',
		[varBsDangerBorderSubtle]: '#f5b7b1',
		[varBsLightBorderSubtle]: '#ebebeb',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#fff',
		[varBsBodyColorRgb]: '255, 255, 255',
		[varBsBodyBg]: '#222',
		[varBsBodyBgRgb]: '34, 34, 34',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(255, 255, 255, 0.75)',
		'--bs-secondary-color-rgb': '255, 255, 255',
		[varBsSecondaryBg]: '#ebebeb',
		'--bs-secondary-bg-rgb': '235, 235, 235',
		[varBsTertiaryColor]: 'rgba(255, 255, 255, 0.5)',
		'--bs-tertiary-color-rgb': '255, 255, 255',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#00bc8c',
		[varBsLinkColorRgb]: '0, 188, 140',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#009670',
		[varBsLinkHoverColorRgb]: '0, 150, 112',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#fff',
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
		[varBsFocusRingColor]: 'rgba(55, 90, 127, 0.25)',
		[varBsFormValidColor]: '#00bc8c',
		[varBsFormValidBorderColor]: '#00bc8c',
		[varBsFormInvalidColor]: '#e74c3c',
		[varBsFormInvalidBorderColor]: '#e74c3c',
	},
})

globalStyle(`${darklyScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#222',
		[varBsBodyBgRgb]: '34, 34, 34',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#303030',
		'--bs-secondary-bg-rgb': '48, 48, 48',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#292929',
		'--bs-tertiary-bg-rgb': '41, 41, 41',
		[varBsPrimaryTextEmphasis]: '#879cb2',
		[varBsSecondaryTextEmphasis]: '#8f8f8f',
		[varBsSuccessTextEmphasis]: '#66d7ba',
		[varBsInfoTextEmphasis]: '#85c1e9',
		[varBsWarningTextEmphasis]: '#f8c471',
		[varBsDangerTextEmphasis]: '#f1948a',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#0b1219',
		[varBsSecondaryBgSubtle]: '#0e0e0e',
		[varBsSuccessBgSubtle]: '#00261c',
		[varBsInfoBgSubtle]: '#0a1e2c',
		[varBsWarningBgSubtle]: '#311f04',
		[varBsDangerBgSubtle]: '#2e0f0c',
		[varBsLightBgSubtle]: '#303030',
		[varBsDarkBgSubtle]: '#181818',
		[varBsPrimaryBorderSubtle]: '#21364c',
		[varBsSecondaryBorderSubtle]: '#292929',
		[varBsSuccessBorderSubtle]: '#007154',
		[varBsInfoBorderSubtle]: '#1f5b83',
		[varBsWarningBorderSubtle]: '#925e0b',
		[varBsDangerBorderSubtle]: '#8b2e24',
		[varBsLightBorderSubtle]: '#444',
		[varBsDarkBorderSubtle]: '#303030',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#879cb2',
		[varBsLinkHoverColor]: '#9fb0c1',
		[varBsLinkColorRgb]: '135, 156, 178',
		[varBsLinkHoverColorRgb]: '159, 176, 193',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#613e07',
		[varBsBorderColor]: '#444',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#66d7ba',
		[varBsFormValidBorderColor]: '#66d7ba',
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

globalStyle(`${darklyScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${darklyScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${darklyScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${darklyScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${darklyScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${darklyScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${darklyScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${darklyScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${darklyScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${darklyScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${darklyScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${darklyScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${darklyScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${darklyScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${darklyScope}${h1})`, {
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${darklyScope}${clsH1}`, {
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`:where(${darklyScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${darklyScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`:where(${darklyScope}${h2})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${darklyScope}${clsH2}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${darklyScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${darklyScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${darklyScope}${h3})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${darklyScope}${clsH3}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${darklyScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${darklyScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${darklyScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${darklyScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${darklyScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${darklyScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${darklyScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${darklyScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${darklyScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${darklyScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${darklyScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${darklyScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${darklyScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${darklyScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${darklyScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${darklyScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${darklyScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${darklyScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${darklyScope}${elOl}) :where(${darklyScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${darklyScope}${elUl}) :where(${darklyScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${darklyScope}${elOl}) :where(${darklyScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${darklyScope}${elUl}) :where(${darklyScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${darklyScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${darklyScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${darklyScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${darklyScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${darklyScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${darklyScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${darklyScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${darklyScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${darklyScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${darklyScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${darklyScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${darklyScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${darklyScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${darklyScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${darklyScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${darklyScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${darklyScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${darklyScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${darklyScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${darklyScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
	color: 'inherit',
})

globalStyle(`:where(${darklyScope}${elPre}) :where(${darklyScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${darklyScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${darklyScope}${link}) > :where(${darklyScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${darklyScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${darklyScope}${elKbd}) :where(${darklyScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${darklyScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${darklyScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${darklyScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${darklyScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${darklyScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${darklyScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${darklyScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${darklyScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${darklyScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${darklyScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${darklyScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${darklyScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${darklyScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${darklyScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${darklyScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${darklyScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${darklyScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${darklyScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${darklyScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${darklyScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${darklyScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${darklyScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${darklyScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${darklyScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${darklyScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${darklyScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${darklyScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${darklyScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${darklyScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${darklyScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${darklyScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${darklyScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${darklyScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${darklyScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${darklyScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${darklyScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${darklyScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${darklyScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${darklyScope}${elLegend}) + *`, {
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

globalStyle(`${darklyScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${darklyScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${darklyScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${darklyScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${darklyScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${darklyScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${darklyScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${darklyScope}${containerFluid}`, {
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

globalStyle(`${darklyScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${darklyScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${darklyScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${darklyScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${darklyScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${darklyScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${darklyScope}${collapsing}`, {
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

globalStyle(`${darklyScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${darklyScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${darklyScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${darklyScope}${vars}[data-bs-theme=dark]`, {
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
