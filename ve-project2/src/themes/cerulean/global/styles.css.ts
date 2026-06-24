import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../scope.css'

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

globalStyle(`${ceruleanScope}${vars}`, {
	vars: {
		[varBsBlue]: '#033c73',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#c71c22',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#dd5600',
		[varBsGreen]: '#73a839',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#2fa4e7',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#868e96',
		[varBsGrayDark]: '#343a40',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#e9ecef',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#868e96',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#343a40',
		'--bs-gray-900': '#212529',
		[varBsPrimary]: '#2fa4e7',
		[varBsSecondary]: '#e9ecef',
		[varBsSuccess]: '#73a839',
		[varBsInfo]: '#033c73',
		[varBsWarning]: '#dd5600',
		[varBsDanger]: '#c71c22',
		[varBsLight]: '#f8f9fa',
		[varBsDark]: '#343a40',
		[varBsPrimaryRgb]: '47, 164, 231',
		[varBsSecondaryRgb]: '233, 236, 239',
		[varBsSuccessRgb]: '115, 168, 57',
		[varBsInfoRgb]: '3, 60, 115',
		[varBsWarningRgb]: '221, 86, 0',
		[varBsDangerRgb]: '199, 28, 34',
		[varBsLightRgb]: '248, 249, 250',
		[varBsDarkRgb]: '52, 58, 64',
		[varBsPrimaryTextEmphasis]: '#13425c',
		[varBsSecondaryTextEmphasis]: '#5d5e60',
		[varBsSuccessTextEmphasis]: '#2e4317',
		[varBsInfoTextEmphasis]: '#01182e',
		[varBsWarningTextEmphasis]: '#582200',
		[varBsDangerTextEmphasis]: '#500b0e',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#d5edfa',
		[varBsSecondaryBgSubtle]: '#fbfbfc',
		[varBsSuccessBgSubtle]: '#e3eed7',
		[varBsInfoBgSubtle]: '#cdd8e3',
		[varBsWarningBgSubtle]: '#f8ddcc',
		[varBsDangerBgSubtle]: '#f4d2d3',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#acdbf5',
		[varBsSecondaryBorderSubtle]: '#f6f7f9',
		[varBsSuccessBorderSubtle]: '#c7dcb0',
		[varBsInfoBorderSubtle]: '#9ab1c7',
		[varBsWarningBorderSubtle]: '#f1bb99',
		[varBsDangerBorderSubtle]: '#e9a4a7',
		[varBsLightBorderSubtle]: '#e9ecef',
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
		[varBsHeadingColor]: '#2fa4e7',
		[varBsLinkColor]: '#2fa4e7',
		[varBsLinkColorRgb]: '47, 164, 231',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#2683b9',
		[varBsLinkHoverColorRgb]: '38, 131, 185',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#495057',
		[varBsHighlightBg]: '#f8ddcc',
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
		[varBsFocusRingColor]: 'rgba(47, 164, 231, 0.25)',
		[varBsFormValidColor]: '#73a839',
		[varBsFormValidBorderColor]: '#73a839',
		[varBsFormInvalidColor]: '#c71c22',
		[varBsFormInvalidBorderColor]: '#c71c22',
	},
})

globalStyle(`${ceruleanScope}${vars}[data-bs-theme=dark]`, {
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
		[varBsPrimaryTextEmphasis]: '#82c8f1',
		[varBsSecondaryTextEmphasis]: '#f2f4f5',
		[varBsSuccessTextEmphasis]: '#abcb88',
		[varBsInfoTextEmphasis]: '#688aab',
		[varBsWarningTextEmphasis]: '#eb9a66',
		[varBsDangerTextEmphasis]: '#dd777a',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#09212e',
		[varBsSecondaryBgSubtle]: '#2f2f30',
		[varBsSuccessBgSubtle]: '#17220b',
		[varBsInfoBgSubtle]: '#010c17',
		[varBsWarningBgSubtle]: '#2c1100',
		[varBsDangerBgSubtle]: '#280607',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#1c628b',
		[varBsSecondaryBorderSubtle]: '#8c8e8f',
		[varBsSuccessBorderSubtle]: '#456522',
		[varBsInfoBorderSubtle]: '#022445',
		[varBsWarningBorderSubtle]: '#853400',
		[varBsDangerBorderSubtle]: '#771114',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#82c8f1',
		[varBsLinkHoverColor]: '#9bd3f4',
		[varBsLinkColorRgb]: '130, 200, 241',
		[varBsLinkHoverColorRgb]: '155, 211, 244',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#582200',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#abcb88',
		[varBsFormValidBorderColor]: '#abcb88',
		[varBsFormInvalidColor]: '#dd777a',
		[varBsFormInvalidBorderColor]: '#dd777a',
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

globalStyle(`${ceruleanScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${ceruleanScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${ceruleanScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${ceruleanScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${ceruleanScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${ceruleanScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${ceruleanScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${ceruleanScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${ceruleanScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${ceruleanScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${ceruleanScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${ceruleanScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${ceruleanScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${ceruleanScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${ceruleanScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${ceruleanScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${ceruleanScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${ceruleanScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${ceruleanScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${ceruleanScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${ceruleanScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${ceruleanScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${ceruleanScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${ceruleanScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${ceruleanScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${ceruleanScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${ceruleanScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${ceruleanScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${ceruleanScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${ceruleanScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${ceruleanScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${ceruleanScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${ceruleanScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${ceruleanScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${ceruleanScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${ceruleanScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${ceruleanScope}${elOl}) :where(${ceruleanScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${ceruleanScope}${elUl}) :where(${ceruleanScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${ceruleanScope}${elOl}) :where(${ceruleanScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${ceruleanScope}${elUl}) :where(${ceruleanScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${ceruleanScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${ceruleanScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${ceruleanScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${ceruleanScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${ceruleanScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${ceruleanScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${ceruleanScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${ceruleanScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${ceruleanScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${ceruleanScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${ceruleanScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${ceruleanScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${ceruleanScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${ceruleanScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${ceruleanScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${ceruleanScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${ceruleanScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${ceruleanScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${ceruleanScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${ceruleanScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${ceruleanScope}${elPre}) :where(${ceruleanScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${ceruleanScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${ceruleanScope}${link}) > :where(${ceruleanScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${ceruleanScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${ceruleanScope}${elKbd}) :where(${ceruleanScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${ceruleanScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${ceruleanScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${ceruleanScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${ceruleanScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${ceruleanScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${ceruleanScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${ceruleanScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${ceruleanScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${ceruleanScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${ceruleanScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${ceruleanScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${ceruleanScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${ceruleanScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${ceruleanScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${ceruleanScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${ceruleanScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${ceruleanScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${ceruleanScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${ceruleanScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${ceruleanScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${ceruleanScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${ceruleanScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${ceruleanScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${ceruleanScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${ceruleanScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${ceruleanScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${ceruleanScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${ceruleanScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${ceruleanScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${ceruleanScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${ceruleanScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${ceruleanScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${ceruleanScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${ceruleanScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${ceruleanScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${ceruleanScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${ceruleanScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${ceruleanScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${ceruleanScope}${elLegend}) + *`, {
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

globalStyle(`${ceruleanScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${ceruleanScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${ceruleanScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${ceruleanScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${ceruleanScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${ceruleanScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${ceruleanScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${ceruleanScope}${containerFluid}`, {
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

globalStyle(`${ceruleanScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${ceruleanScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${ceruleanScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${ceruleanScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${ceruleanScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${ceruleanScope}${collapsing}`, {
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

globalStyle(`${ceruleanScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${ceruleanScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${ceruleanScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${ceruleanScope}${vars}[data-bs-theme=dark]`, {
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
