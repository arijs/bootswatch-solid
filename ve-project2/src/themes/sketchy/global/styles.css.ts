import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { sketchyScope } from '../scope.css'

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

globalStyle(`${sketchyScope}${vars}`, {
	vars: {
		[varBsBlue]: '#007bff',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#dc3545',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#ffc107',
		[varBsGreen]: '#28a745',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#17a2b8',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#868e96',
		[varBsGrayDark]: '#333',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#f7f7f9',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ccc',
		'--bs-gray-500': '#aaa',
		'--bs-gray-600': '#868e96',
		'--bs-gray-700': '#555',
		'--bs-gray-800': '#333',
		'--bs-gray-900': '#212529',
		[varBsPrimary]: '#333',
		[varBsSecondary]: '#555',
		[varBsSuccess]: '#28a745',
		[varBsInfo]: '#17a2b8',
		[varBsWarning]: '#ffc107',
		[varBsDanger]: '#dc3545',
		[varBsLight]: '#fff',
		[varBsDark]: '#555',
		[varBsPrimaryRgb]: '51, 51, 51',
		[varBsSecondaryRgb]: '85, 85, 85',
		[varBsSuccessRgb]: '40, 167, 69',
		[varBsInfoRgb]: '23, 162, 184',
		[varBsWarningRgb]: '255, 193, 7',
		[varBsDangerRgb]: '220, 53, 69',
		[varBsLightRgb]: '255, 255, 255',
		[varBsDarkRgb]: '85, 85, 85',
		[varBsPrimaryTextEmphasis]: '#141414',
		[varBsSecondaryTextEmphasis]: '#222222',
		[varBsSuccessTextEmphasis]: '#10431c',
		[varBsInfoTextEmphasis]: '#09414a',
		[varBsWarningTextEmphasis]: '#664d03',
		[varBsDangerTextEmphasis]: '#58151c',
		[varBsLightTextEmphasis]: '#555',
		[varBsDarkTextEmphasis]: '#555',
		[varBsPrimaryBgSubtle]: '#d6d6d6',
		[varBsSecondaryBgSubtle]: '#dddddd',
		[varBsSuccessBgSubtle]: '#d4edda',
		[varBsInfoBgSubtle]: '#d1ecf1',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#f8d7da',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ccc',
		[varBsPrimaryBorderSubtle]: '#adadad',
		[varBsSecondaryBorderSubtle]: '#bbbbbb',
		[varBsSuccessBorderSubtle]: '#a9dcb5',
		[varBsInfoBorderSubtle]: '#a2dae3',
		[varBsWarningBorderSubtle]: '#ffe69c',
		[varBsDangerBorderSubtle]: '#f1aeb5',
		[varBsLightBorderSubtle]: '#f7f7f9',
		[varBsDarkBorderSubtle]: '#aaa',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Neucha, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '700',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#212529',
		[varBsBodyColorRgb]: '33, 37, 41',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(33, 37, 41, 0.75)',
		'--bs-secondary-color-rgb': '33, 37, 41',
		[varBsSecondaryBg]: '#f7f7f9',
		'--bs-secondary-bg-rgb': '247, 247, 249',
		[varBsTertiaryColor]: 'rgba(33, 37, 41, 0.5)',
		'--bs-tertiary-color-rgb': '33, 37, 41',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#333',
		[varBsLinkColorRgb]: '51, 51, 51',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#292929',
		[varBsLinkHoverColorRgb]: '41, 41, 41',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#212529',
		[varBsHighlightBg]: '#fff3cd',
		[varBsBorderWidth]: '2px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#dee2e6',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '25px',
		[varBsBorderRadiusSm]: '15px',
		[varBsBorderRadiusLg]: '35px',
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
		[varBsFocusRingColor]: 'rgba(51, 51, 51, 0.25)',
		[varBsFormValidColor]: '#28a745',
		[varBsFormValidBorderColor]: '#28a745',
		[varBsFormInvalidColor]: '#dc3545',
		[varBsFormInvalidBorderColor]: '#dc3545',
	},
})

globalStyle(`${sketchyScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#333',
		'--bs-secondary-bg-rgb': '51, 51, 51',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#2a2c2e',
		'--bs-tertiary-bg-rgb': '42, 44, 46',
		[varBsPrimaryTextEmphasis]: '#858585',
		[varBsSecondaryTextEmphasis]: '#999999',
		[varBsSuccessTextEmphasis]: '#7eca8f',
		[varBsInfoTextEmphasis]: '#74c7d4',
		[varBsWarningTextEmphasis]: '#ffda6a',
		[varBsDangerTextEmphasis]: '#ea868f',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#0a0a0a',
		[varBsSecondaryBgSubtle]: '#111111',
		[varBsSuccessBgSubtle]: '#08210e',
		[varBsInfoBgSubtle]: '#052025',
		[varBsWarningBgSubtle]: '#332701',
		[varBsDangerBgSubtle]: '#2c0b0e',
		[varBsLightBgSubtle]: '#333',
		[varBsDarkBgSubtle]: '#1a1a1a',
		[varBsPrimaryBorderSubtle]: '#1f1f1f',
		[varBsSecondaryBorderSubtle]: '#333333',
		[varBsSuccessBorderSubtle]: '#186429',
		[varBsInfoBorderSubtle]: '#0e616e',
		[varBsWarningBorderSubtle]: '#997404',
		[varBsDangerBorderSubtle]: '#842029',
		[varBsLightBorderSubtle]: '#555',
		[varBsDarkBorderSubtle]: '#333',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#858585',
		[varBsLinkHoverColor]: '#9d9d9d',
		[varBsLinkColorRgb]: '133, 133, 133',
		[varBsLinkHoverColorRgb]: '157, 157, 157',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#664d03',
		[varBsBorderColor]: '#555',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#7eca8f',
		[varBsFormValidBorderColor]: '#7eca8f',
		[varBsFormInvalidColor]: '#ea868f',
		[varBsFormInvalidBorderColor]: '#ea868f',
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

globalStyle(`${sketchyScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${sketchyScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${sketchyScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sketchyScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sketchyScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sketchyScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sketchyScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sketchyScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sketchyScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${sketchyScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${sketchyScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${sketchyScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${sketchyScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${sketchyScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${sketchyScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${sketchyScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${sketchyScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${sketchyScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${sketchyScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${sketchyScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${sketchyScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sketchyScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${sketchyScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${sketchyScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${sketchyScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${sketchyScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${sketchyScope}${elOl}) :where(${sketchyScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${sketchyScope}${elUl}) :where(${sketchyScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${sketchyScope}${elOl}) :where(${sketchyScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${sketchyScope}${elUl}) :where(${sketchyScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${sketchyScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${sketchyScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${sketchyScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${sketchyScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${sketchyScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${sketchyScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${sketchyScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${sketchyScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${sketchyScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${sketchyScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${sketchyScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${sketchyScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${sketchyScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${sketchyScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${sketchyScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${sketchyScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${sketchyScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${sketchyScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${sketchyScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${sketchyScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${sketchyScope}${elPre}) :where(${sketchyScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${sketchyScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${sketchyScope}${link}) > :where(${sketchyScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${sketchyScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '15px',
})

globalStyle(`:where(${sketchyScope}${elKbd}) :where(${sketchyScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${sketchyScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${sketchyScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${sketchyScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${sketchyScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${sketchyScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${sketchyScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${sketchyScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sketchyScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sketchyScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sketchyScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sketchyScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sketchyScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sketchyScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${sketchyScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${sketchyScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${sketchyScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sketchyScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sketchyScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sketchyScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sketchyScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sketchyScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${sketchyScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${sketchyScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${sketchyScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${sketchyScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${sketchyScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${sketchyScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${sketchyScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${sketchyScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${sketchyScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${sketchyScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${sketchyScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${sketchyScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${sketchyScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${sketchyScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${sketchyScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${sketchyScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${sketchyScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${sketchyScope}${elLegend}) + *`, {
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

globalStyle(`${sketchyScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${sketchyScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${sketchyScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${sketchyScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${sketchyScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${sketchyScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${sketchyScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${sketchyScope}${containerFluid}`, {
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

globalStyle(`${sketchyScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${sketchyScope}${navbar} > ${sketchyScope}${containerFluid}`, {
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

globalStyle(`${sketchyScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${sketchyScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${sketchyScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${sketchyScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`:where(${sketchyScope}${elButton})`, {
	fontFamily: 'Neucha, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
})

globalStyle(`:where(${sketchyScope}${elInput})`, {
	fontFamily: 'Neucha, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
})

globalStyle(`:where(${sketchyScope}${elOptgroup})`, {
	fontFamily: 'Neucha, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
})

globalStyle(`:where(${sketchyScope}${elSelect})`, {
	fontFamily: 'Neucha, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
})

globalStyle(`:where(${sketchyScope}${elTextarea})`, {
	fontFamily: 'Neucha, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
})

globalStyle(`:where(${sketchyScope}${elB})`, {
	fontFamily: '"Cabin Sketch", cursive',
})

globalStyle(`:where(${sketchyScope}${elStrong})`, {
	fontFamily: '"Cabin Sketch", cursive',
})

globalStyle(`:where(${sketchyScope}${blockquote})`, {
	borderRadius: '15px 27px 25px 25px/25px 25px 305px 635px',
})

globalStyle(`:where(${sketchyScope}${tableElement}) :where(${sketchyScope}${tableHeaderCell})`, {
	backgroundColor: '#fff',
})

globalStyle(`:where(${sketchyScope}${tableElement}) :where(${sketchyScope}${tableCell})`, {
	backgroundColor: '#fff',
})

globalStyle(`:where(${sketchyScope}${elInput})`, {
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

globalStyle(`:where(${sketchyScope}${elTextarea})`, {
	borderRadius: '55px 225px 15px 25px/25px 25px 35px 355px !important',
})

globalStyle(`:where(${sketchyScope}${elSelect})`, {
	borderRadius: '55px 225px 15px 25px/25px 25px 35px 355px !important',
})

globalStyle(`${sketchyScope}[type=checkbox]`, {
	position: 'relative',
	width: '0',
	height: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	cursor: 'pointer',
	border: 'none',
})

globalStyle(`${sketchyScope}[type=checkbox]::before`, {
	position: 'absolute',
	top: '-0.1em',
	left: '0',
	display: 'inline-block',
	width: '15px',
	height: '16px',
	content: '""',
	border: '2px solid #333',
	borderRadius: '2px 8px 2px 4px/5px 3px 5px 3px',
})

globalStyle(`${sketchyScope}[type=checkbox]:focus::before`, {
	boxShadow: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
})

globalStyle(`${sketchyScope}[type=checkbox]:checked::after`, {
	position: 'absolute',
	top: '0',
	left: '0.1em',
	fontSize: '1.5rem',
	lineHeight: '0.5',
	color: '#333',
})

globalStyle(`${sketchyScope}[type=checkbox]:indeterminate::after`, {
	position: 'absolute',
	top: '0',
	left: '0.1em',
	fontSize: '1.5rem',
	lineHeight: '0.5',
	color: '#333',
})

globalStyle(`${sketchyScope}[type=checkbox]:checked::after`, {
	content: '"x"',
})

globalStyle(`${sketchyScope}[type=checkbox]:indeterminate::after`, {
	top: '0.1em',
	content: '"-"',
})

globalStyle(`${sketchyScope}[type=checkbox]:disabled::before`, {
	border: '2px solid #aaa',
})

globalStyle(`${sketchyScope}[type=radio]`, {
	position: 'relative',
	width: '0',
	height: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	cursor: 'pointer',
	border: 'none',
})

globalStyle(`${sketchyScope}[type=radio]::before`, {
	position: 'absolute',
	top: '-0.1em',
	left: '0',
	display: 'inline-block',
	width: '16px',
	height: '16px',
	content: '""',
	border: '2px solid #333',
	borderRadius: '50% 45% 40% 50%/40% 50% 50% 45%',
})

globalStyle(`${sketchyScope}[type=radio]:focus::before`, {
	boxShadow: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
})

globalStyle(`${sketchyScope}[type=radio]:checked::before`, {
	backgroundColor: '#333',
})

globalStyle(`${sketchyScope}[type=radio]:disabled::before`, {
	border: '2px solid #aaa',
})

globalStyle(`${sketchyScope}[data-bs-theme=dark] ${sketchyScope}[type=radio]::before`, {
	borderColor: '#fff',
})

globalStyle(`${sketchyScope}[data-bs-theme=dark] ${sketchyScope}[type=radio]:checked::before`, {
	backgroundColor: '#fff',
})

globalStyle(`${sketchyScope}[data-bs-theme=dark] ${sketchyScope}[type=checkbox]::before`, {
	borderColor: '#fff',
})

globalStyle(`${sketchyScope}[data-bs-theme=dark] ${sketchyScope}[type=checkbox]:checked::before`, {
	backgroundColor: '#fff',
})

globalStyle(`:where(${sketchyScope}${elPre})`, {
	border: '2px solid #333',
	borderRadius: '15px 5px 5px 25px/5px 25px 25px 5px',
})
