import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { spacelabScope } from '../scope.css'

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

globalStyle(`${spacelabScope}${vars}`, {
	vars: {
		[varBsBlue]: '#446e9b',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#cd0200',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#d47500',
		[varBsGreen]: '#3cb521',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#3399f3',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#777',
		[varBsGrayDark]: '#333',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#eee',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#999',
		'--bs-gray-600': '#777',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#333',
		'--bs-gray-900': '#2d2d2d',
		[varBsPrimary]: '#446e9b',
		[varBsSecondary]: '#999',
		[varBsSuccess]: '#3cb521',
		[varBsInfo]: '#3399f3',
		[varBsWarning]: '#d47500',
		[varBsDanger]: '#cd0200',
		[varBsLight]: '#eee',
		[varBsDark]: '#333',
		[varBsPrimaryRgb]: '68, 110, 155',
		[varBsSecondaryRgb]: '153, 153, 153',
		[varBsSuccessRgb]: '60, 181, 33',
		[varBsInfoRgb]: '51, 153, 243',
		[varBsWarningRgb]: '212, 117, 0',
		[varBsDangerRgb]: '205, 2, 0',
		[varBsLightRgb]: '238, 238, 238',
		[varBsDarkRgb]: '51, 51, 51',
		[varBsPrimaryTextEmphasis]: '#1b2c3e',
		[varBsSecondaryTextEmphasis]: '#3d3d3d',
		[varBsSuccessTextEmphasis]: '#18480d',
		[varBsInfoTextEmphasis]: '#143d61',
		[varBsWarningTextEmphasis]: '#552f00',
		[varBsDangerTextEmphasis]: '#520100',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#dae2eb',
		[varBsSecondaryBgSubtle]: '#ebebeb',
		[varBsSuccessBgSubtle]: '#d8f0d3',
		[varBsInfoBgSubtle]: '#d6ebfd',
		[varBsWarningBgSubtle]: '#f6e3cc',
		[varBsDangerBgSubtle]: '#f5cccc',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#b4c5d7',
		[varBsSecondaryBorderSubtle]: '#d6d6d6',
		[varBsSuccessBorderSubtle]: '#b1e1a6',
		[varBsInfoBorderSubtle]: '#add6fa',
		[varBsWarningBorderSubtle]: '#eec899',
		[varBsDangerBorderSubtle]: '#eb9a99',
		[varBsLightBorderSubtle]: '#eee',
		[varBsDarkBorderSubtle]: '#999',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#777',
		[varBsBodyColorRgb]: '119, 119, 119',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(119, 119, 119, 0.75)',
		'--bs-secondary-color-rgb': '119, 119, 119',
		[varBsSecondaryBg]: '#eee',
		'--bs-secondary-bg-rgb': '238, 238, 238',
		[varBsTertiaryColor]: 'rgba(119, 119, 119, 0.5)',
		'--bs-tertiary-color-rgb': '119, 119, 119',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: '#2d2d2d',
		[varBsLinkColor]: '#3399f3',
		[varBsLinkColorRgb]: '51, 153, 243',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#297ac2',
		[varBsLinkHoverColorRgb]: '41, 122, 194',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#777',
		[varBsHighlightBg]: '#f6e3cc',
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
		[varBsFocusRingColor]: 'rgba(68, 110, 155, 0.25)',
		[varBsFormValidColor]: '#3cb521',
		[varBsFormValidBorderColor]: '#3cb521',
		[varBsFormInvalidColor]: '#cd0200',
		[varBsFormInvalidBorderColor]: '#cd0200',
	},
})

globalStyle(`${spacelabScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#2d2d2d',
		[varBsBodyBgRgb]: '45, 45, 45',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#333',
		'--bs-secondary-bg-rgb': '51, 51, 51',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#303030',
		'--bs-tertiary-bg-rgb': '48, 48, 48',
		[varBsPrimaryTextEmphasis]: '#8fa8c3',
		[varBsSecondaryTextEmphasis]: '#c2c2c2',
		[varBsSuccessTextEmphasis]: '#8ad37a',
		[varBsInfoTextEmphasis]: '#85c2f8',
		[varBsWarningTextEmphasis]: '#e5ac66',
		[varBsDangerTextEmphasis]: '#e16766',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#0e161f',
		[varBsSecondaryBgSubtle]: '#1f1f1f',
		[varBsSuccessBgSubtle]: '#0c2407',
		[varBsInfoBgSubtle]: '#0a1f31',
		[varBsWarningBgSubtle]: '#2a1700',
		[varBsDangerBgSubtle]: '#290000',
		[varBsLightBgSubtle]: '#333',
		[varBsDarkBgSubtle]: '#1a1a1a',
		[varBsPrimaryBorderSubtle]: '#29425d',
		[varBsSecondaryBorderSubtle]: '#5c5c5c',
		[varBsSuccessBorderSubtle]: '#246d14',
		[varBsInfoBorderSubtle]: '#1f5c92',
		[varBsWarningBorderSubtle]: '#7f4600',
		[varBsDangerBorderSubtle]: '#7b0100',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#333',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#8fa8c3',
		[varBsLinkHoverColor]: '#a5b9cf',
		[varBsLinkColorRgb]: '143, 168, 195',
		[varBsLinkHoverColorRgb]: '165, 185, 207',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#552f00',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#8ad37a',
		[varBsFormValidBorderColor]: '#8ad37a',
		[varBsFormInvalidColor]: '#e16766',
		[varBsFormInvalidBorderColor]: '#e16766',
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

globalStyle(`${spacelabScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${spacelabScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${spacelabScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${spacelabScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${spacelabScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${spacelabScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${spacelabScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${spacelabScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${spacelabScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${spacelabScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${spacelabScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${spacelabScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${spacelabScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${spacelabScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${spacelabScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${spacelabScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${spacelabScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${spacelabScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${spacelabScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${spacelabScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${spacelabScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${spacelabScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${spacelabScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${spacelabScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${spacelabScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${spacelabScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${spacelabScope}${elOl}) :where(${spacelabScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${spacelabScope}${elUl}) :where(${spacelabScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${spacelabScope}${elOl}) :where(${spacelabScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${spacelabScope}${elUl}) :where(${spacelabScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${spacelabScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${spacelabScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${spacelabScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${spacelabScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${spacelabScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${spacelabScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${spacelabScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${spacelabScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${spacelabScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${spacelabScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${spacelabScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${spacelabScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${spacelabScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${spacelabScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${spacelabScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${spacelabScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${spacelabScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${spacelabScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${spacelabScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${spacelabScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${spacelabScope}${elPre}) :where(${spacelabScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${spacelabScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${spacelabScope}${link}) > :where(${spacelabScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${spacelabScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${spacelabScope}${elKbd}) :where(${spacelabScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${spacelabScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${spacelabScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${spacelabScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${spacelabScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${spacelabScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${spacelabScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${spacelabScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${spacelabScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${spacelabScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${spacelabScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${spacelabScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${spacelabScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${spacelabScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${spacelabScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${spacelabScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${spacelabScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${spacelabScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${spacelabScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${spacelabScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${spacelabScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${spacelabScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${spacelabScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${spacelabScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${spacelabScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${spacelabScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${spacelabScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${spacelabScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${spacelabScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${spacelabScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${spacelabScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${spacelabScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${spacelabScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${spacelabScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${spacelabScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${spacelabScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${spacelabScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${spacelabScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${spacelabScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${spacelabScope}${elLegend}) + *`, {
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

globalStyle(`${spacelabScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${spacelabScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${spacelabScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${spacelabScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${spacelabScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${spacelabScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${spacelabScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${spacelabScope}${containerFluid}`, {
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

globalStyle(`${spacelabScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${spacelabScope}${navbar} > ${spacelabScope}${containerFluid}`, {
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

globalStyle(`${spacelabScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${spacelabScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${spacelabScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${spacelabScope}${vars}[data-bs-theme=dark]`, {
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
