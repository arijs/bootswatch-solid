import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { pulseScope } from '../scope.css'

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
import { collapsing } from '../../../theme-contract/literal/contract.css'
import { collapse } from '../../../theme-contract/ui/navbar/contract.css'
import { fade, show } from '../../../theme-contract/ui/navs/contract.css'

globalStyle(`${pulseScope}${vars}`, {
	vars: {
		[varBsBlue]: '#007bff',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#593196',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#fc3939',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#efa31d',
		[varBsGreen]: '#13b955',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#009cdc',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#868e96',
		[varBsGrayDark]: '#343a40',
		'--bs-gray-100': '#fafafa',
		'--bs-gray-200': '#f9f8fc',
		'--bs-gray-300': '#ededed',
		'--bs-gray-400': '#cbc8d0',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#868e96',
		'--bs-gray-700': '#444',
		'--bs-gray-800': '#343a40',
		'--bs-gray-900': '#17141f',
		[varBsPrimary]: '#593196',
		[varBsSecondary]: '#a991d4',
		[varBsSuccess]: '#13b955',
		[varBsInfo]: '#009cdc',
		[varBsWarning]: '#efa31d',
		[varBsDanger]: '#fc3939',
		[varBsLight]: '#f9f8fc',
		[varBsDark]: '#17141f',
		[varBsPrimaryRgb]: '89, 49, 150',
		[varBsSecondaryRgb]: '169, 145, 212',
		[varBsSuccessRgb]: '19, 185, 85',
		[varBsInfoRgb]: '0, 156, 220',
		[varBsWarningRgb]: '239, 163, 29',
		[varBsDangerRgb]: '252, 57, 57',
		[varBsLightRgb]: '249, 248, 252',
		[varBsDarkRgb]: '23, 20, 31',
		[varBsPrimaryTextEmphasis]: '#24143c',
		[varBsSecondaryTextEmphasis]: '#443a55',
		[varBsSuccessTextEmphasis]: '#084a22',
		[varBsInfoTextEmphasis]: '#003e58',
		[varBsWarningTextEmphasis]: '#60410c',
		[varBsDangerTextEmphasis]: '#651717',
		[varBsLightTextEmphasis]: '#444',
		[varBsDarkTextEmphasis]: '#444',
		[varBsPrimaryBgSubtle]: '#ded6ea',
		[varBsSecondaryBgSubtle]: '#eee9f6',
		[varBsSuccessBgSubtle]: '#d0f1dd',
		[varBsInfoBgSubtle]: '#ccebf8',
		[varBsWarningBgSubtle]: '#fcedd2',
		[varBsDangerBgSubtle]: '#fed7d7',
		[varBsLightBgSubtle]: '#fdfdfd',
		[varBsDarkBgSubtle]: '#cbc8d0',
		[varBsPrimaryBorderSubtle]: '#bdadd5',
		[varBsSecondaryBorderSubtle]: '#ddd3ee',
		[varBsSuccessBorderSubtle]: '#a1e3bb',
		[varBsInfoBorderSubtle]: '#99d7f1',
		[varBsWarningBorderSubtle]: '#f9daa5',
		[varBsDangerBorderSubtle]: '#feb0b0',
		[varBsLightBorderSubtle]: '#f9f8fc',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#444',
		[varBsBodyColorRgb]: '68, 68, 68',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(68, 68, 68, 0.75)',
		'--bs-secondary-color-rgb': '68, 68, 68',
		[varBsSecondaryBg]: '#f9f8fc',
		'--bs-secondary-bg-rgb': '249, 248, 252',
		[varBsTertiaryColor]: 'rgba(68, 68, 68, 0.5)',
		'--bs-tertiary-color-rgb': '68, 68, 68',
		[varBsTertiaryBg]: '#fafafa',
		'--bs-tertiary-bg-rgb': '250, 250, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#593196',
		[varBsLinkColorRgb]: '89, 49, 150',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#593196',
		[varBsLinkHoverColorRgb]: '89, 49, 150',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#444',
		[varBsHighlightBg]: '#fcedd2',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#ededed',
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
		[varBsFocusRingColor]: 'rgba(89, 49, 150, 0.25)',
		[varBsFormValidColor]: '#13b955',
		[varBsFormValidBorderColor]: '#13b955',
		[varBsFormInvalidColor]: '#fc3939',
		[varBsFormInvalidBorderColor]: '#fc3939',
	},
})

globalStyle(`${pulseScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#ededed',
		[varBsBodyColorRgb]: '237, 237, 237',
		[varBsBodyBg]: '#17141f',
		[varBsBodyBgRgb]: '23, 20, 31',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(237, 237, 237, 0.75)',
		'--bs-secondary-color-rgb': '237, 237, 237',
		[varBsSecondaryBg]: '#343a40',
		'--bs-secondary-bg-rgb': '52, 58, 64',
		[varBsTertiaryColor]: 'rgba(237, 237, 237, 0.5)',
		'--bs-tertiary-color-rgb': '237, 237, 237',
		[varBsTertiaryBg]: '#262730',
		'--bs-tertiary-bg-rgb': '38, 39, 48',
		[varBsPrimaryTextEmphasis]: '#9b83c0',
		[varBsSecondaryTextEmphasis]: '#cbbde5',
		[varBsSuccessTextEmphasis]: '#71d599',
		[varBsInfoTextEmphasis]: '#66c4ea',
		[varBsWarningTextEmphasis]: '#f5c877',
		[varBsDangerTextEmphasis]: '#fd8888',
		[varBsLightTextEmphasis]: '#fafafa',
		[varBsDarkTextEmphasis]: '#ededed',
		[varBsPrimaryBgSubtle]: '#120a1e',
		[varBsSecondaryBgSubtle]: '#221d2a',
		[varBsSuccessBgSubtle]: '#042511',
		[varBsInfoBgSubtle]: '#001f2c',
		[varBsWarningBgSubtle]: '#302106',
		[varBsDangerBgSubtle]: '#320b0b',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#351d5a',
		[varBsSecondaryBorderSubtle]: '#65577f',
		[varBsSuccessBorderSubtle]: '#0b6f33',
		[varBsInfoBorderSubtle]: '#005e84',
		[varBsWarningBorderSubtle]: '#8f6211',
		[varBsDangerBorderSubtle]: '#972222',
		[varBsLightBorderSubtle]: '#444',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#9b83c0',
		[varBsLinkHoverColor]: '#af9ccd',
		[varBsLinkColorRgb]: '155, 131, 192',
		[varBsLinkHoverColorRgb]: '175, 156, 205',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#ededed',
		[varBsHighlightBg]: '#60410c',
		[varBsBorderColor]: '#444',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#71d599',
		[varBsFormValidBorderColor]: '#71d599',
		[varBsFormInvalidColor]: '#fd8888',
		[varBsFormInvalidBorderColor]: '#fd8888',
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

globalStyle(`${pulseScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${pulseScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${pulseScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${pulseScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${pulseScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${pulseScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${pulseScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${pulseScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${pulseScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${pulseScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${pulseScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${pulseScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${pulseScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${pulseScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${pulseScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${pulseScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${pulseScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${pulseScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${pulseScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${pulseScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${pulseScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${pulseScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${pulseScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${pulseScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${pulseScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${pulseScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${pulseScope}${elOl}) :where(${pulseScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${pulseScope}${elUl}) :where(${pulseScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${pulseScope}${elOl}) :where(${pulseScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${pulseScope}${elUl}) :where(${pulseScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${pulseScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${pulseScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${pulseScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${pulseScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${pulseScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${pulseScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${pulseScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${pulseScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${pulseScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${pulseScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${pulseScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${pulseScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${pulseScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${pulseScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${pulseScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${pulseScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${pulseScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${pulseScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${pulseScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${pulseScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${pulseScope}${elPre}) :where(${pulseScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${pulseScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${pulseScope}${link}) > :where(${pulseScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${pulseScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
})

globalStyle(`:where(${pulseScope}${elKbd}) :where(${pulseScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${pulseScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${pulseScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${pulseScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${pulseScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${pulseScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${pulseScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${pulseScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${pulseScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${pulseScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${pulseScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${pulseScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${pulseScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${pulseScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${pulseScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${pulseScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${pulseScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${pulseScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${pulseScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${pulseScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${pulseScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${pulseScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${pulseScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${pulseScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${pulseScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${pulseScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${pulseScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${pulseScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${pulseScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${pulseScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${pulseScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${pulseScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${pulseScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${pulseScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${pulseScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${pulseScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${pulseScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${pulseScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${pulseScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${pulseScope}${elLegend}) + *`, {
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

globalStyle(`${pulseScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${pulseScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${pulseScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${pulseScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${pulseScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${pulseScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${pulseScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${pulseScope}${containerFluid}`, {
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

globalStyle(`${pulseScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${pulseScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${pulseScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${pulseScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${pulseScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${pulseScope}${collapsing}`, {
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

globalStyle(`${pulseScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${pulseScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${pulseScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${pulseScope}${vars}[data-bs-theme=dark]`, {
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
