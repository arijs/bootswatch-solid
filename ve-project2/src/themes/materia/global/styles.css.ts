import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../scope.css'

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

globalStyle(`${materiaScope}${vars}`, {
	vars: {
		[varBsBlue]: '#2196f3',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#e51c23',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#ff9800',
		[varBsGreen]: '#4caf50',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#9c27b0',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#666',
		[varBsGrayDark]: '#222',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#eee',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#bbb',
		'--bs-gray-600': '#666',
		'--bs-gray-700': '#444',
		'--bs-gray-800': '#222',
		'--bs-gray-900': '#212121',
		[varBsPrimary]: '#2196f3',
		[varBsSecondary]: '#fff',
		[varBsSuccess]: '#4caf50',
		[varBsInfo]: '#9c27b0',
		[varBsWarning]: '#ff9800',
		[varBsDanger]: '#e51c23',
		[varBsLight]: '#f8f9fa',
		[varBsDark]: '#222',
		[varBsPrimaryRgb]: '33, 150, 243',
		[varBsSecondaryRgb]: '255, 255, 255',
		[varBsSuccessRgb]: '76, 175, 80',
		[varBsInfoRgb]: '156, 39, 176',
		[varBsWarningRgb]: '255, 152, 0',
		[varBsDangerRgb]: '229, 28, 35',
		[varBsLightRgb]: '248, 249, 250',
		[varBsDarkRgb]: '34, 34, 34',
		[varBsPrimaryTextEmphasis]: '#0d3c61',
		[varBsSecondaryTextEmphasis]: '#666666',
		[varBsSuccessTextEmphasis]: '#1e4620',
		[varBsInfoTextEmphasis]: '#3e1046',
		[varBsWarningTextEmphasis]: '#663d00',
		[varBsDangerTextEmphasis]: '#5c0b0e',
		[varBsLightTextEmphasis]: '#444',
		[varBsDarkTextEmphasis]: '#444',
		[varBsPrimaryBgSubtle]: '#d3eafd',
		[varBsSecondaryBgSubtle]: 'white',
		[varBsSuccessBgSubtle]: '#dbefdc',
		[varBsInfoBgSubtle]: '#ebd4ef',
		[varBsWarningBgSubtle]: '#ffeacc',
		[varBsDangerBgSubtle]: '#fad2d3',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#a6d5fa',
		[varBsSecondaryBorderSubtle]: 'white',
		[varBsSuccessBorderSubtle]: '#b7dfb9',
		[varBsInfoBorderSubtle]: '#d7a9df',
		[varBsWarningBorderSubtle]: '#ffd699',
		[varBsDangerBorderSubtle]: '#f5a4a7',
		[varBsLightBorderSubtle]: '#eee',
		[varBsDarkBorderSubtle]: '#bbb',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
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
		[varBsSecondaryBg]: '#eee',
		'--bs-secondary-bg-rgb': '238, 238, 238',
		[varBsTertiaryColor]: 'rgba(68, 68, 68, 0.5)',
		'--bs-tertiary-color-rgb': '68, 68, 68',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#2196f3',
		[varBsLinkColorRgb]: '33, 150, 243',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#1a78c2',
		[varBsLinkHoverColorRgb]: '26, 120, 194',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#444',
		[varBsHighlightBg]: '#ffeacc',
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
		[varBsFocusRingColor]: 'rgba(33, 150, 243, 0.25)',
		[varBsFormValidColor]: '#4caf50',
		[varBsFormValidBorderColor]: '#4caf50',
		[varBsFormInvalidColor]: '#e51c23',
		[varBsFormInvalidBorderColor]: '#e51c23',
	},
})

globalStyle(`${materiaScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#212121',
		[varBsBodyBgRgb]: '33, 33, 33',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#222',
		'--bs-secondary-bg-rgb': '34, 34, 34',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#222222',
		'--bs-tertiary-bg-rgb': '34, 34, 34',
		[varBsPrimaryTextEmphasis]: '#7ac0f8',
		[varBsSecondaryTextEmphasis]: 'white',
		[varBsSuccessTextEmphasis]: '#94cf96',
		[varBsInfoTextEmphasis]: '#c47dd0',
		[varBsWarningTextEmphasis]: '#ffc166',
		[varBsDangerTextEmphasis]: '#ef777b',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#071e31',
		[varBsSecondaryBgSubtle]: '#333333',
		[varBsSuccessBgSubtle]: '#0f2310',
		[varBsInfoBgSubtle]: '#1f0823',
		[varBsWarningBgSubtle]: '#331e00',
		[varBsDangerBgSubtle]: '#2e0607',
		[varBsLightBgSubtle]: '#222',
		[varBsDarkBgSubtle]: '#111111',
		[varBsPrimaryBorderSubtle]: '#145a92',
		[varBsSecondaryBorderSubtle]: '#999999',
		[varBsSuccessBorderSubtle]: '#2e6930',
		[varBsInfoBorderSubtle]: '#5e176a',
		[varBsWarningBorderSubtle]: '#995b00',
		[varBsDangerBorderSubtle]: '#891115',
		[varBsLightBorderSubtle]: '#444',
		[varBsDarkBorderSubtle]: '#222',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#7ac0f8',
		[varBsLinkHoverColor]: '#95cdf9',
		[varBsLinkColorRgb]: '122, 192, 248',
		[varBsLinkHoverColorRgb]: '149, 205, 249',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#663d00',
		[varBsBorderColor]: '#444',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#94cf96',
		[varBsFormValidBorderColor]: '#94cf96',
		[varBsFormInvalidColor]: '#ef777b',
		[varBsFormInvalidBorderColor]: '#ef777b',
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

globalStyle(`${materiaScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${materiaScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${materiaScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${materiaScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${materiaScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${materiaScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${materiaScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${materiaScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${materiaScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${materiaScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${materiaScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${materiaScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${materiaScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${materiaScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${materiaScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${materiaScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${materiaScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${materiaScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${materiaScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${materiaScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${materiaScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${materiaScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${materiaScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${materiaScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${materiaScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${materiaScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${materiaScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${materiaScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${materiaScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${materiaScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${materiaScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${materiaScope}${elOl}) :where(${materiaScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${materiaScope}${elUl}) :where(${materiaScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${materiaScope}${elOl}) :where(${materiaScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${materiaScope}${elUl}) :where(${materiaScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${materiaScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${materiaScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${materiaScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${materiaScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${materiaScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${materiaScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${materiaScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${materiaScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${materiaScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${materiaScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${materiaScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${materiaScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${materiaScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${materiaScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${materiaScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${materiaScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${materiaScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${materiaScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${materiaScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${materiaScope}${elPre}) :where(${materiaScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${materiaScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${materiaScope}${link}) > :where(${materiaScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${materiaScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${materiaScope}${elKbd}) :where(${materiaScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${materiaScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${materiaScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${materiaScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${materiaScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${materiaScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${materiaScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${materiaScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${materiaScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${materiaScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${materiaScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${materiaScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${materiaScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${materiaScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${materiaScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${materiaScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${materiaScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${materiaScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${materiaScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${materiaScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${materiaScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${materiaScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${materiaScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${materiaScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${materiaScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${materiaScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${materiaScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${materiaScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${materiaScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${materiaScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${materiaScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${materiaScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${materiaScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${materiaScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${materiaScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${materiaScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${materiaScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${materiaScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${materiaScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${materiaScope}${elLegend}) + *`, {
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

globalStyle(`${materiaScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${materiaScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${materiaScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${materiaScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${materiaScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${materiaScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${materiaScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${materiaScope}${containerFluid}`, {
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

globalStyle(`${materiaScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${materiaScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${materiaScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${materiaScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${materiaScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${materiaScope}${collapsing}`, {
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

globalStyle(`${materiaScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${materiaScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${materiaScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${materiaScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`:where(${materiaScope}${elInput})`, {
	letterSpacing: '0.1px',
})

globalStyle(`:where(${materiaScope}${elButton})`, {
	letterSpacing: '0.1px',
})

globalStyle(`:where(${materiaScope}${paragraph})`, {
	margin: '0 0 1em',
})

globalStyle(`:where(${materiaScope}${elTextarea})`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}[type=text]`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}[type=password]`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}[type=email]`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}[type=number]`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elTextarea}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}[type=text]:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}[type=password]:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}[type=email]:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}[type=number]:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elTextarea}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elTextarea}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=text][disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=text][readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=password][disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=password][readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=email][disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=email][readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=number][disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=number][readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elTextarea}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=text][disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=password][disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=email][disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=number][disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elTextarea}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elTextarea}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=text][disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=text][disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=password][disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=password][disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=email][disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=email][disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=number][disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=number][disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`:where(${materiaScope}${elSelect})`, {
	padding: '0.5rem 0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 4\'%3e%3cpath fill=\'%23666\' d=\'M8 0 4 4 0 0z\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right center',
	backgroundSize: '8px 4px',
	boxShadow: 'inset 0 -1px 0 #ddd',
})

globalStyle(`${materiaScope}${elSelect}:focus`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 4\'%3e%3cpath fill=\'%23212121\' d=\'M8 0 4 4 0 0z\'/%3e%3c/svg%3e")',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elSelect}[multiple]`, {
	background: 'none',
})
