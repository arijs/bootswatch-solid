import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { cosmoScope } from '../scope.css'

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

globalStyle(`${cosmoScope}${vars}`, {
	vars: {
		[varBsBlue]: '#2780e3',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#613d7c',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#ff0039',
		[varBsOrange]: '#f0ad4e',
		[varBsYellow]: '#ff7518',
		[varBsGreen]: '#3fb618',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#9954bb',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#868e96',
		[varBsGrayDark]: '#373a3c',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#e9ecef',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#868e96',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#373a3c',
		'--bs-gray-900': '#212529',
		[varBsPrimary]: '#2780e3',
		[varBsSecondary]: '#373a3c',
		[varBsSuccess]: '#3fb618',
		[varBsInfo]: '#9954bb',
		[varBsWarning]: '#ff7518',
		[varBsDanger]: '#ff0039',
		[varBsLight]: '#f8f9fa',
		[varBsDark]: '#373a3c',
		[varBsPrimaryRgb]: '39, 128, 227',
		[varBsSecondaryRgb]: '55, 58, 60',
		[varBsSuccessRgb]: '63, 182, 24',
		[varBsInfoRgb]: '153, 84, 187',
		[varBsWarningRgb]: '255, 117, 24',
		[varBsDangerRgb]: '255, 0, 57',
		[varBsLightRgb]: '248, 249, 250',
		[varBsDarkRgb]: '55, 58, 60',
		[varBsPrimaryTextEmphasis]: '#10335b',
		[varBsSecondaryTextEmphasis]: '#161718',
		[varBsSuccessTextEmphasis]: '#19490a',
		[varBsInfoTextEmphasis]: '#3d224b',
		[varBsWarningTextEmphasis]: '#662f0a',
		[varBsDangerTextEmphasis]: '#660017',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#d4e6f9',
		[varBsSecondaryBgSubtle]: '#d7d8d8',
		[varBsSuccessBgSubtle]: '#d9f0d1',
		[varBsInfoBgSubtle]: '#ebddf1',
		[varBsWarningBgSubtle]: '#ffe3d1',
		[varBsDangerBgSubtle]: '#ffccd7',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#a9ccf4',
		[varBsSecondaryBorderSubtle]: '#afb0b1',
		[varBsSuccessBorderSubtle]: '#b2e2a3',
		[varBsInfoBorderSubtle]: '#d6bbe4',
		[varBsWarningBorderSubtle]: '#ffc8a3',
		[varBsDangerBorderSubtle]: '#ff99b0',
		[varBsLightBorderSubtle]: '#e9ecef',
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
		[varBsBodyColor]: '#373a3c',
		[varBsBodyColorRgb]: '55, 58, 60',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(55, 58, 60, 0.75)',
		'--bs-secondary-color-rgb': '55, 58, 60',
		[varBsSecondaryBg]: '#e9ecef',
		'--bs-secondary-bg-rgb': '233, 236, 239',
		[varBsTertiaryColor]: 'rgba(55, 58, 60, 0.5)',
		'--bs-tertiary-color-rgb': '55, 58, 60',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#2780e3',
		[varBsLinkColorRgb]: '39, 128, 227',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#1f66b6',
		[varBsLinkHoverColorRgb]: '31, 102, 182',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#373a3c',
		[varBsHighlightBg]: '#ffe3d1',
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
		[varBsFocusRingColor]: 'rgba(39, 128, 227, 0.25)',
		[varBsFormValidColor]: '#3fb618',
		[varBsFormValidBorderColor]: '#3fb618',
		[varBsFormInvalidColor]: '#ff0039',
		[varBsFormInvalidBorderColor]: '#ff0039',
	},
})

globalStyle(`${cosmoScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#373a3c',
		'--bs-secondary-bg-rgb': '55, 58, 60',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#2c3033',
		'--bs-tertiary-bg-rgb': '44, 48, 51',
		[varBsPrimaryTextEmphasis]: '#7db3ee',
		[varBsSecondaryTextEmphasis]: '#87898a',
		[varBsSuccessTextEmphasis]: '#8cd374',
		[varBsInfoTextEmphasis]: '#c298d6',
		[varBsWarningTextEmphasis]: '#ffac74',
		[varBsDangerTextEmphasis]: '#ff6688',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#081a2d',
		[varBsSecondaryBgSubtle]: '#0b0c0c',
		[varBsSuccessBgSubtle]: '#0d2405',
		[varBsInfoBgSubtle]: '#1f1125',
		[varBsWarningBgSubtle]: '#331705',
		[varBsDangerBgSubtle]: '#33000b',
		[varBsLightBgSubtle]: '#373a3c',
		[varBsDarkBgSubtle]: '#1c1d1e',
		[varBsPrimaryBorderSubtle]: '#174d88',
		[varBsSecondaryBorderSubtle]: '#212324',
		[varBsSuccessBorderSubtle]: '#266d0e',
		[varBsInfoBorderSubtle]: '#5c3270',
		[varBsWarningBorderSubtle]: '#99460e',
		[varBsDangerBorderSubtle]: '#990022',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#373a3c',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#7db3ee',
		[varBsLinkHoverColor]: '#97c2f1',
		[varBsLinkColorRgb]: '125, 179, 238',
		[varBsLinkHoverColorRgb]: '151, 194, 241',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#662f0a',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#8cd374',
		[varBsFormValidBorderColor]: '#8cd374',
		[varBsFormInvalidColor]: '#ff6688',
		[varBsFormInvalidBorderColor]: '#ff6688',
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

globalStyle(`${cosmoScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${cosmoScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${cosmoScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cosmoScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cosmoScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cosmoScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cosmoScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cosmoScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cosmoScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${cosmoScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${cosmoScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${cosmoScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${cosmoScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${cosmoScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${cosmoScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${cosmoScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${cosmoScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${cosmoScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${cosmoScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${cosmoScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${cosmoScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cosmoScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${cosmoScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${cosmoScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${cosmoScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${cosmoScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${cosmoScope}${elOl}) :where(${cosmoScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${cosmoScope}${elUl}) :where(${cosmoScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${cosmoScope}${elOl}) :where(${cosmoScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${cosmoScope}${elUl}) :where(${cosmoScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${cosmoScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${cosmoScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${cosmoScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${cosmoScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${cosmoScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${cosmoScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${cosmoScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${cosmoScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${cosmoScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${cosmoScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${cosmoScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${cosmoScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${cosmoScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${cosmoScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${cosmoScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${cosmoScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${cosmoScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${cosmoScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${cosmoScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${cosmoScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${cosmoScope}${elPre}) :where(${cosmoScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${cosmoScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${cosmoScope}${link}) > :where(${cosmoScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${cosmoScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
})

globalStyle(`:where(${cosmoScope}${elKbd}) :where(${cosmoScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${cosmoScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${cosmoScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${cosmoScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${cosmoScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${cosmoScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${cosmoScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${cosmoScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cosmoScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cosmoScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cosmoScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cosmoScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cosmoScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cosmoScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${cosmoScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${cosmoScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${cosmoScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cosmoScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cosmoScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cosmoScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cosmoScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cosmoScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${cosmoScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${cosmoScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${cosmoScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${cosmoScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${cosmoScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${cosmoScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${cosmoScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${cosmoScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${cosmoScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${cosmoScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${cosmoScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${cosmoScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${cosmoScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${cosmoScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${cosmoScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${cosmoScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${cosmoScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${cosmoScope}${elLegend}) + *`, {
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

globalStyle(`${cosmoScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${cosmoScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${cosmoScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${cosmoScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${cosmoScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${cosmoScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${cosmoScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${cosmoScope}${containerFluid}`, {
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

globalStyle(`${cosmoScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${cosmoScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cosmoScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${cosmoScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cosmoScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${cosmoScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${cosmoScope}${navbar} > ${cosmoScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${cosmoScope}${navbarNav} ${cosmoScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalKeyframes('progress-bar-stripes', {
	'0%': {
		backgroundPositionX: 'var(--bs-progress-height)',
	},
})

globalStyle(`${cosmoScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${cosmoScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${cosmoScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${cosmoScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`${cosmoScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${cosmoScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${cosmoScope}${offcanvasBackdrop}${show}`, {
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
