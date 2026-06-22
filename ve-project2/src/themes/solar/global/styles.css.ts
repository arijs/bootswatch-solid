import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { solarScope } from '../scope.css'

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

globalStyle(`${solarScope}${vars}`, {
	vars: {
		[varBsBlue]: '#b58900',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#d33682',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#cb4b16',
		[varBsGreen]: '#2aa198',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#268bd2',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#839496',
		[varBsGrayDark]: '#073642',
		'--bs-gray-100': '#fdf6e3',
		'--bs-gray-200': '#eee8d5',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#839496',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#073642',
		'--bs-gray-900': '#002b36',
		[varBsPrimary]: '#b58900',
		[varBsSecondary]: '#839496',
		[varBsSuccess]: '#2aa198',
		[varBsInfo]: '#268bd2',
		[varBsWarning]: '#cb4b16',
		[varBsDanger]: '#d33682',
		[varBsLight]: '#fdf6e3',
		[varBsDark]: '#073642',
		[varBsPrimaryRgb]: '181, 137, 0',
		[varBsSecondaryRgb]: '131, 148, 150',
		[varBsSuccessRgb]: '42, 161, 152',
		[varBsInfoRgb]: '38, 139, 210',
		[varBsWarningRgb]: '203, 75, 22',
		[varBsDangerRgb]: '211, 54, 130',
		[varBsLightRgb]: '253, 246, 227',
		[varBsDarkRgb]: '7, 54, 66',
		[varBsPrimaryTextEmphasis]: '#483700',
		[varBsSecondaryTextEmphasis]: '#343b3c',
		[varBsSuccessTextEmphasis]: '#11403d',
		[varBsInfoTextEmphasis]: '#0f3854',
		[varBsWarningTextEmphasis]: '#511e09',
		[varBsDangerTextEmphasis]: '#541634',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#f0e7cc',
		[varBsSecondaryBgSubtle]: '#e6eaea',
		[varBsSuccessBgSubtle]: '#d4ecea',
		[varBsInfoBgSubtle]: '#d4e8f6',
		[varBsWarningBgSubtle]: '#f5dbd0',
		[varBsDangerBgSubtle]: '#f6d7e6',
		[varBsLightBgSubtle]: '#fefbf1',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#e1d099',
		[varBsSecondaryBorderSubtle]: '#cdd4d5',
		[varBsSuccessBorderSubtle]: '#aad9d6',
		[varBsInfoBorderSubtle]: '#a8d1ed',
		[varBsWarningBorderSubtle]: '#eab7a2',
		[varBsDangerBorderSubtle]: '#edafcd',
		[varBsLightBorderSubtle]: '#eee8d5',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#839496',
		[varBsBodyColorRgb]: '131, 148, 150',
		[varBsBodyBg]: '#002b36',
		[varBsBodyBgRgb]: '0, 43, 54',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(131, 148, 150, 0.75)',
		'--bs-secondary-color-rgb': '131, 148, 150',
		[varBsSecondaryBg]: '#eee8d5',
		'--bs-secondary-bg-rgb': '238, 232, 213',
		[varBsTertiaryColor]: 'rgba(131, 148, 150, 0.5)',
		'--bs-tertiary-color-rgb': '131, 148, 150',
		[varBsTertiaryBg]: '#fdf6e3',
		'--bs-tertiary-bg-rgb': '253, 246, 227',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#2aa198',
		[varBsLinkColorRgb]: '42, 161, 152',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#2aa198',
		[varBsLinkHoverColorRgb]: '42, 161, 152',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#839496',
		[varBsHighlightBg]: '#f5dbd0',
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
		[varBsFocusRingColor]: 'rgba(181, 137, 0, 0.25)',
		[varBsFormValidColor]: '#2aa198',
		[varBsFormValidBorderColor]: '#2aa198',
		[varBsFormInvalidColor]: '#d33682',
		[varBsFormInvalidBorderColor]: '#d33682',
	},
})

globalStyle(`${solarScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#002b36',
		[varBsBodyBgRgb]: '0, 43, 54',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#073642',
		'--bs-secondary-bg-rgb': '7, 54, 66',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#04313c',
		'--bs-tertiary-bg-rgb': '4, 49, 60',
		[varBsPrimaryTextEmphasis]: '#d3b866',
		[varBsSecondaryTextEmphasis]: '#b5bfc0',
		[varBsSuccessTextEmphasis]: '#7fc7c1',
		[varBsInfoTextEmphasis]: '#7db9e4',
		[varBsWarningTextEmphasis]: '#e09373',
		[varBsDangerTextEmphasis]: '#e586b4',
		[varBsLightTextEmphasis]: '#fdf6e3',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#241b00',
		[varBsSecondaryBgSubtle]: '#1a1e1e',
		[varBsSuccessBgSubtle]: '#08201e',
		[varBsInfoBgSubtle]: '#081c2a',
		[varBsWarningBgSubtle]: '#290f04',
		[varBsDangerBgSubtle]: '#2a0b1a',
		[varBsLightBgSubtle]: '#073642',
		[varBsDarkBgSubtle]: '#041b21',
		[varBsPrimaryBorderSubtle]: '#6d5200',
		[varBsSecondaryBorderSubtle]: '#4f595a',
		[varBsSuccessBorderSubtle]: '#19615b',
		[varBsInfoBorderSubtle]: '#17537e',
		[varBsWarningBorderSubtle]: '#7a2d0d',
		[varBsDangerBorderSubtle]: '#7f204e',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#073642',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#d3b866',
		[varBsLinkHoverColor]: '#dcc685',
		[varBsLinkColorRgb]: '211, 184, 102',
		[varBsLinkHoverColorRgb]: '220, 198, 133',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#511e09',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#7fc7c1',
		[varBsFormValidBorderColor]: '#7fc7c1',
		[varBsFormInvalidColor]: '#e586b4',
		[varBsFormInvalidBorderColor]: '#e586b4',
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

globalStyle(`${solarScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${solarScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${solarScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${solarScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${solarScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${solarScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${solarScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${solarScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${solarScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${solarScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${solarScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${solarScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${solarScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${solarScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${solarScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${solarScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${solarScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${solarScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${solarScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${solarScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${solarScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${solarScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${solarScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${solarScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${solarScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${solarScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${solarScope}${elOl}) :where(${solarScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${solarScope}${elUl}) :where(${solarScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${solarScope}${elOl}) :where(${solarScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${solarScope}${elUl}) :where(${solarScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${solarScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${solarScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${solarScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${solarScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${solarScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${solarScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${solarScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${solarScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${solarScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${solarScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${solarScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${solarScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${solarScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${solarScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${solarScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${solarScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${solarScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${solarScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${solarScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${solarScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
	color: 'inherit',
})

globalStyle(`:where(${solarScope}${elPre}) :where(${solarScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${solarScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${solarScope}${link}) > :where(${solarScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${solarScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${solarScope}${elKbd}) :where(${solarScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${solarScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${solarScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${solarScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${solarScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${solarScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${solarScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${solarScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${solarScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${solarScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${solarScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${solarScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${solarScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${solarScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${solarScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${solarScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${solarScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${solarScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${solarScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${solarScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${solarScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${solarScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${solarScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${solarScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${solarScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${solarScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${solarScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${solarScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${solarScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${solarScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${solarScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${solarScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${solarScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${solarScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${solarScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${solarScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${solarScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${solarScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${solarScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${solarScope}${elLegend}) + *`, {
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

globalStyle(`${solarScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${solarScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${solarScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${solarScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${solarScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${solarScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${solarScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${solarScope}${containerFluid}`, {
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

globalStyle(`${solarScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${solarScope}${navbar} > ${solarScope}${containerFluid}`, {
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

globalStyle(`${solarScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${solarScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${solarScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${solarScope}${vars}[data-bs-theme=dark]`, {
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
