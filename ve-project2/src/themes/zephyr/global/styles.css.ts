import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../scope.css'

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
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveBoxShadow,
	varBsBtnActiveColor,
	varBsBtnFocusBoxShadow,
} from '../../../theme-contract/ui/buttons/_vars.css'
import { varBsCarouselCaptionColor, varBsCarouselControlIconFilter, varBsCarouselIndicatorActiveBg } from '../../../theme-contract/ui/carousel/_vars.css'
import { varBsNavbarActiveColor } from '../../../theme-contract/ui/navbar/_vars.css'
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
import { btn } from '../../../theme-contract/ui/buttons/contract.css'
import { collapse, navbar, navbarNav } from '../../../theme-contract/ui/navbar/contract.css'
import { fade, navLink, show } from '../../../theme-contract/ui/navs/contract.css'
import {
	offcanvas,
	offcanvasBackdrop,
	offcanvasLg,
	offcanvasMd,
	offcanvasSm,
	offcanvasXl,
	offcanvasXxl,
} from '../../../theme-contract/ui/offcanvas/contract.css'

globalStyle(`${zephyrScope}${vars}`, {
	vars: {
		[varBsBlue]: '#3459e6',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#d63384',
		[varBsRed]: '#da292e',
		[varBsOrange]: '#f8765f',
		[varBsYellow]: '#f4bd61',
		[varBsGreen]: '#2fb380',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#287bb5',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#6c757d',
		[varBsGrayDark]: '#343a40',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#e9ecef',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#6c757d',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#343a40',
		'--bs-gray-900': '#212529',
		[varBsPrimary]: '#3459e6',
		[varBsSecondary]: '#fff',
		[varBsSuccess]: '#2fb380',
		[varBsInfo]: '#287bb5',
		[varBsWarning]: '#f4bd61',
		[varBsDanger]: '#da292e',
		[varBsLight]: '#f8f9fa',
		[varBsDark]: '#212529',
		[varBsPrimaryRgb]: '52, 89, 230',
		[varBsSecondaryRgb]: '255, 255, 255',
		[varBsSuccessRgb]: '47, 179, 128',
		[varBsInfoRgb]: '40, 123, 181',
		[varBsWarningRgb]: '244, 189, 97',
		[varBsDangerRgb]: '218, 41, 46',
		[varBsLightRgb]: '248, 249, 250',
		[varBsDarkRgb]: '33, 37, 41',
		[varBsPrimaryTextEmphasis]: '#15245c',
		[varBsSecondaryTextEmphasis]: '#666666',
		[varBsSuccessTextEmphasis]: '#134833',
		[varBsInfoTextEmphasis]: '#103148',
		[varBsWarningTextEmphasis]: '#624c27',
		[varBsDangerTextEmphasis]: '#571012',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#d6defa',
		[varBsSecondaryBgSubtle]: 'white',
		[varBsSuccessBgSubtle]: '#d5f0e6',
		[varBsInfoBgSubtle]: '#d4e5f0',
		[varBsWarningBgSubtle]: '#fdf2df',
		[varBsDangerBgSubtle]: '#f8d4d5',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#aebdf5',
		[varBsSecondaryBorderSubtle]: 'white',
		[varBsSuccessBorderSubtle]: '#ace1cc',
		[varBsInfoBorderSubtle]: '#a9cae1',
		[varBsWarningBorderSubtle]: '#fbe5c0',
		[varBsDangerBorderSubtle]: '#f0a9ab',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#495057',
		[varBsBodyColorRgb]: '73, 80, 87',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(73, 80, 87, 0.75)',
		'--bs-secondary-color-rgb': '73, 80, 87',
		[varBsSecondaryBg]: '#e9ecef',
		'--bs-secondary-bg-rgb': '233, 236, 239',
		[varBsTertiaryColor]: 'rgba(73, 80, 87, 0.5)',
		'--bs-tertiary-color-rgb': '73, 80, 87',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'var(--bs-primary-color)',
		[varBsLinkColor]: '#3459e6',
		[varBsLinkColorRgb]: '52, 89, 230',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#2a47b8',
		[varBsLinkHoverColorRgb]: '42, 71, 184',
		[varBsCodeColor]: '#d63384',
		[varBsHighlightColor]: '#495057',
		[varBsHighlightBg]: '#fdf2df',
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
		[varBsBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBoxShadowSm]: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
		[varBsBoxShadowLg]: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		[varBsBoxShadowInset]: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
		[varBsFocusRingWidth]: '0.25rem',
		[varBsFocusRingOpacity]: '0.25',
		[varBsFocusRingColor]: 'rgba(52, 89, 230, 0.25)',
		[varBsFormValidColor]: '#2fb380',
		[varBsFormValidBorderColor]: '#2fb380',
		[varBsFormInvalidColor]: '#da292e',
		[varBsFormInvalidBorderColor]: '#da292e',
	},
})

globalStyle(`${zephyrScope}${vars}[data-bs-theme=dark]`, {
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
		[varBsPrimaryTextEmphasis]: '#859bf0',
		[varBsSecondaryTextEmphasis]: 'white',
		[varBsSuccessTextEmphasis]: '#82d1b3',
		[varBsInfoTextEmphasis]: '#7eb0d3',
		[varBsWarningTextEmphasis]: '#f8d7a0',
		[varBsDangerTextEmphasis]: '#e97f82',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#0a122e',
		[varBsSecondaryBgSubtle]: '#333333',
		[varBsSuccessBgSubtle]: '#09241a',
		[varBsInfoBgSubtle]: '#081924',
		[varBsWarningBgSubtle]: '#312613',
		[varBsDangerBgSubtle]: '#2c0809',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#1f358a',
		[varBsSecondaryBorderSubtle]: '#999999',
		[varBsSuccessBorderSubtle]: '#1c6b4d',
		[varBsInfoBorderSubtle]: '#184a6d',
		[varBsWarningBorderSubtle]: '#92713a',
		[varBsDangerBorderSubtle]: '#83191c',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#859bf0',
		[varBsLinkHoverColor]: '#9daff3',
		[varBsLinkColorRgb]: '133, 155, 240',
		[varBsLinkHoverColorRgb]: '157, 175, 243',
		[varBsCodeColor]: '#e685b5',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#624c27',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#82d1b3',
		[varBsFormValidBorderColor]: '#82d1b3',
		[varBsFormInvalidColor]: '#e97f82',
		[varBsFormInvalidBorderColor]: '#e97f82',
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

globalStyle(`${zephyrScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${zephyrScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${zephyrScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${zephyrScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${zephyrScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${zephyrScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${zephyrScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${zephyrScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${zephyrScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${zephyrScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${zephyrScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${zephyrScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${zephyrScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${zephyrScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${zephyrScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${zephyrScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${zephyrScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${zephyrScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${zephyrScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${zephyrScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${zephyrScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${zephyrScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${zephyrScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${zephyrScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${zephyrScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${zephyrScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${zephyrScope}${elOl}) :where(${zephyrScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${zephyrScope}${elUl}) :where(${zephyrScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${zephyrScope}${elOl}) :where(${zephyrScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${zephyrScope}${elUl}) :where(${zephyrScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${zephyrScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${zephyrScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${zephyrScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${zephyrScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${zephyrScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${zephyrScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${zephyrScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${zephyrScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${zephyrScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${zephyrScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${zephyrScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${zephyrScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${zephyrScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${zephyrScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${zephyrScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${zephyrScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${zephyrScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${zephyrScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${zephyrScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${zephyrScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${zephyrScope}${elPre}) :where(${zephyrScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${zephyrScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${zephyrScope}${link}) > :where(${zephyrScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${zephyrScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${zephyrScope}${elKbd}) :where(${zephyrScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${zephyrScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${zephyrScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${zephyrScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${zephyrScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${zephyrScope}${elCaption})`, {
	paddingTop: '1rem',
	paddingBottom: '1rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${zephyrScope}${tableHeaderCell})`, {
	fontWeight: '500',
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${zephyrScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${zephyrScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${zephyrScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${zephyrScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${zephyrScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${zephyrScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${zephyrScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${zephyrScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${zephyrScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${zephyrScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${zephyrScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${zephyrScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${zephyrScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${zephyrScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${zephyrScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${zephyrScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${zephyrScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${zephyrScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${zephyrScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${zephyrScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${zephyrScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${zephyrScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${zephyrScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${zephyrScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${zephyrScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${zephyrScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${zephyrScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${zephyrScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${zephyrScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${zephyrScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${zephyrScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${zephyrScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${zephyrScope}${elLegend}) + *`, {
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

globalStyle(`${zephyrScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${zephyrScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${zephyrScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${zephyrScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${zephyrScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${zephyrScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${zephyrScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${zephyrScope}${containerFluid}`, {
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

globalStyle(`${zephyrScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${zephyrScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${zephyrScope}${btn}${show}:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${zephyrScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${zephyrScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${zephyrScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${zephyrScope}${navbar} > ${zephyrScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${zephyrScope}${navbarNav} ${zephyrScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalKeyframes('progress-bar-stripes', {
	'0%': {
		backgroundPositionX: 'var(--bs-progress-height)',
	},
})

globalStyle(`${zephyrScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${zephyrScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${zephyrScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${zephyrScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`${zephyrScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${zephyrScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${zephyrScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${zephyrScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${zephyrScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${zephyrScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${zephyrScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${zephyrScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
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

globalStyle(`:where(${zephyrScope}${tableHead}) :where(${zephyrScope}${tableHeaderCell})`, {
	fontSize: '0.875rem',
	textTransform: 'uppercase',
})
