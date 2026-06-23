import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../scope.css'

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

globalStyle(`${lumenScope}${vars}`, {
	vars: {
		[varBsBlue]: '#158cba',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#ff4136',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#ff851b',
		[varBsGreen]: '#28b62c',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#75caeb',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#999',
		[varBsGrayDark]: '#333',
		'--bs-gray-100': '#f6f6f6',
		'--bs-gray-200': '#f0f0f0',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#999',
		'--bs-gray-700': '#555',
		'--bs-gray-800': '#333',
		'--bs-gray-900': '#222',
		[varBsPrimary]: '#158cba',
		[varBsSecondary]: '#f0f0f0',
		[varBsSuccess]: '#28b62c',
		[varBsInfo]: '#75caeb',
		[varBsWarning]: '#ff851b',
		[varBsDanger]: '#ff4136',
		[varBsLight]: '#f6f6f6',
		[varBsDark]: '#555',
		[varBsPrimaryRgb]: '21, 140, 186',
		[varBsSecondaryRgb]: '240, 240, 240',
		[varBsSuccessRgb]: '40, 182, 44',
		[varBsInfoRgb]: '117, 202, 235',
		[varBsWarningRgb]: '255, 133, 27',
		[varBsDangerRgb]: '255, 65, 54',
		[varBsLightRgb]: '246, 246, 246',
		[varBsDarkRgb]: '85, 85, 85',
		[varBsPrimaryTextEmphasis]: '#08384a',
		[varBsSecondaryTextEmphasis]: '#606060',
		[varBsSuccessTextEmphasis]: '#104912',
		[varBsInfoTextEmphasis]: '#2f515e',
		[varBsWarningTextEmphasis]: '#66350b',
		[varBsDangerTextEmphasis]: '#661a16',
		[varBsLightTextEmphasis]: '#555',
		[varBsDarkTextEmphasis]: '#555',
		[varBsPrimaryBgSubtle]: '#d0e8f1',
		[varBsSecondaryBgSubtle]: '#fcfcfc',
		[varBsSuccessBgSubtle]: '#d4f0d5',
		[varBsInfoBgSubtle]: '#e3f4fb',
		[varBsWarningBgSubtle]: '#ffe7d1',
		[varBsDangerBgSubtle]: '#ffd9d7',
		[varBsLightBgSubtle]: '#fbfbfb',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#a1d1e3',
		[varBsSecondaryBorderSubtle]: '#f9f9f9',
		[varBsSuccessBorderSubtle]: '#a9e2ab',
		[varBsInfoBorderSubtle]: '#c8eaf7',
		[varBsWarningBorderSubtle]: '#ffcea4',
		[varBsDangerBorderSubtle]: '#ffb3af',
		[varBsLightBorderSubtle]: '#f0f0f0',
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
		[varBsBodyColor]: '#222',
		[varBsBodyColorRgb]: '34, 34, 34',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(34, 34, 34, 0.75)',
		'--bs-secondary-color-rgb': '34, 34, 34',
		[varBsSecondaryBg]: '#f0f0f0',
		'--bs-secondary-bg-rgb': '240, 240, 240',
		[varBsTertiaryColor]: 'rgba(34, 34, 34, 0.5)',
		'--bs-tertiary-color-rgb': '34, 34, 34',
		[varBsTertiaryBg]: '#f6f6f6',
		'--bs-tertiary-bg-rgb': '246, 246, 246',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#158cba',
		[varBsLinkColorRgb]: '21, 140, 186',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#117095',
		[varBsLinkHoverColorRgb]: '17, 112, 149',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#222',
		[varBsHighlightBg]: '#ffe7d1',
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
		[varBsFocusRingColor]: 'rgba(21, 140, 186, 0.25)',
		[varBsFormValidColor]: '#28b62c',
		[varBsFormValidBorderColor]: '#28b62c',
		[varBsFormInvalidColor]: '#ff4136',
		[varBsFormInvalidBorderColor]: '#ff4136',
	},
})

globalStyle(`${lumenScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#222',
		[varBsBodyBgRgb]: '34, 34, 34',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#333',
		'--bs-secondary-bg-rgb': '51, 51, 51',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#2b2b2b',
		'--bs-tertiary-bg-rgb': '43, 43, 43',
		[varBsPrimaryTextEmphasis]: '#73bad6',
		[varBsSecondaryTextEmphasis]: '#f6f6f6',
		[varBsSuccessTextEmphasis]: '#7ed380',
		[varBsInfoTextEmphasis]: '#acdff3',
		[varBsWarningTextEmphasis]: '#ffb676',
		[varBsDangerTextEmphasis]: '#ff8d86',
		[varBsLightTextEmphasis]: '#f6f6f6',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#041c25',
		[varBsSecondaryBgSubtle]: '#303030',
		[varBsSuccessBgSubtle]: '#082409',
		[varBsInfoBgSubtle]: '#17282f',
		[varBsWarningBgSubtle]: '#331b05',
		[varBsDangerBgSubtle]: '#330d0b',
		[varBsLightBgSubtle]: '#333',
		[varBsDarkBgSubtle]: '#1a1a1a',
		[varBsPrimaryBorderSubtle]: '#0d5470',
		[varBsSecondaryBorderSubtle]: '#909090',
		[varBsSuccessBorderSubtle]: '#186d1a',
		[varBsInfoBorderSubtle]: '#46798d',
		[varBsWarningBorderSubtle]: '#995010',
		[varBsDangerBorderSubtle]: '#992720',
		[varBsLightBorderSubtle]: '#555',
		[varBsDarkBorderSubtle]: '#333',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#73bad6',
		[varBsLinkHoverColor]: '#8fc8de',
		[varBsLinkColorRgb]: '115, 186, 214',
		[varBsLinkHoverColorRgb]: '143, 200, 222',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#66350b',
		[varBsBorderColor]: '#555',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#7ed380',
		[varBsFormValidBorderColor]: '#7ed380',
		[varBsFormInvalidColor]: '#ff8d86',
		[varBsFormInvalidBorderColor]: '#ff8d86',
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

globalStyle(`${lumenScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${lumenScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${lumenScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${lumenScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${lumenScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${lumenScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${lumenScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${lumenScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${lumenScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${lumenScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${lumenScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${lumenScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${lumenScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${lumenScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${lumenScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${lumenScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${lumenScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${lumenScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${lumenScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${lumenScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${lumenScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${lumenScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${lumenScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${lumenScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${lumenScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${lumenScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${lumenScope}${elOl}) :where(${lumenScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${lumenScope}${elUl}) :where(${lumenScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${lumenScope}${elOl}) :where(${lumenScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${lumenScope}${elUl}) :where(${lumenScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${lumenScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${lumenScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${lumenScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${lumenScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${lumenScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${lumenScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${lumenScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${lumenScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${lumenScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${lumenScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${lumenScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${lumenScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${lumenScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${lumenScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${lumenScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${lumenScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${lumenScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${lumenScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${lumenScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${lumenScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${lumenScope}${elPre}) :where(${lumenScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${lumenScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${lumenScope}${link}) > :where(${lumenScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${lumenScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${lumenScope}${elKbd}) :where(${lumenScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${lumenScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${lumenScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${lumenScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${lumenScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${lumenScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${lumenScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${lumenScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${lumenScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${lumenScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${lumenScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${lumenScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${lumenScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${lumenScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${lumenScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${lumenScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${lumenScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${lumenScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${lumenScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${lumenScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${lumenScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${lumenScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${lumenScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${lumenScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${lumenScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${lumenScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${lumenScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${lumenScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${lumenScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${lumenScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${lumenScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${lumenScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${lumenScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${lumenScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${lumenScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${lumenScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${lumenScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${lumenScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${lumenScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${lumenScope}${elLegend}) + *`, {
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

globalStyle(`${lumenScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${lumenScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${lumenScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${lumenScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${lumenScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${lumenScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${lumenScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${lumenScope}${containerFluid}`, {
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

globalStyle(`${lumenScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${lumenScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${lumenScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${lumenScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${lumenScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${lumenScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${lumenScope}${navbar} > ${lumenScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${lumenScope}${navbarNav} ${lumenScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalKeyframes('progress-bar-stripes', {
	'0%': {
		backgroundPositionX: 'var(--bs-progress-height)',
	},
})

globalStyle(`${lumenScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${lumenScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${lumenScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${lumenScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`${lumenScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${lumenScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${lumenScope}${offcanvasBackdrop}${show}`, {
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
