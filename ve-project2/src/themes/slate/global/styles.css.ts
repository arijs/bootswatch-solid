import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../scope.css'

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

globalStyle(`${slateScope}${vars}`, {
	vars: {
		[varBsBlue]: '#007bff',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#ee5f5b',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#f89406',
		[varBsGreen]: '#62c462',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#5bc0de',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#7a8288',
		[varBsGrayDark]: '#3a3f44',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#e9ecef',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#999',
		'--bs-gray-600': '#7a8288',
		'--bs-gray-700': '#52575c',
		'--bs-gray-800': '#3a3f44',
		'--bs-gray-900': '#272b30',
		[varBsPrimary]: '#3a3f44',
		[varBsSecondary]: '#7a8288',
		[varBsSuccess]: '#62c462',
		[varBsInfo]: '#5bc0de',
		[varBsWarning]: '#f89406',
		[varBsDanger]: '#ee5f5b',
		[varBsLight]: '#e9ecef',
		[varBsDark]: '#272b30',
		[varBsPrimaryRgb]: '58, 63, 68',
		[varBsSecondaryRgb]: '122, 130, 136',
		[varBsSuccessRgb]: '98, 196, 98',
		[varBsInfoRgb]: '91, 192, 222',
		[varBsWarningRgb]: '248, 148, 6',
		[varBsDangerRgb]: '238, 95, 91',
		[varBsLightRgb]: '233, 236, 239',
		[varBsDarkRgb]: '39, 43, 48',
		[varBsPrimaryTextEmphasis]: '#17191b',
		[varBsSecondaryTextEmphasis]: '#313436',
		[varBsSuccessTextEmphasis]: '#274e27',
		[varBsInfoTextEmphasis]: '#244d59',
		[varBsWarningTextEmphasis]: '#633b02',
		[varBsDangerTextEmphasis]: '#5f2624',
		[varBsLightTextEmphasis]: '#52575c',
		[varBsDarkTextEmphasis]: '#52575c',
		[varBsPrimaryBgSubtle]: '#515960',
		[varBsSecondaryBgSubtle]: '#e4e6e7',
		[varBsSuccessBgSubtle]: '#e0f3e0',
		[varBsInfoBgSubtle]: '#def2f8',
		[varBsWarningBgSubtle]: '#feeacd',
		[varBsDangerBgSubtle]: '#fcdfde',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#b0b2b4',
		[varBsSecondaryBorderSubtle]: '#cacdcf',
		[varBsSuccessBorderSubtle]: '#c0e7c0',
		[varBsInfoBorderSubtle]: '#bde6f2',
		[varBsWarningBorderSubtle]: '#fcd49b',
		[varBsDangerBorderSubtle]: '#f8bfbd',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#999',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#aaa',
		[varBsBodyColorRgb]: '170, 170, 170',
		[varBsBodyBg]: '#272b30',
		[varBsBodyBgRgb]: '39, 43, 48',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(170, 170, 170, 0.75)',
		'--bs-secondary-color-rgb': '170, 170, 170',
		[varBsSecondaryBg]: '#e9ecef',
		'--bs-secondary-bg-rgb': '233, 236, 239',
		[varBsTertiaryColor]: 'rgba(170, 170, 170, 0.5)',
		'--bs-tertiary-color-rgb': '170, 170, 170',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#fff',
		[varBsLinkColorRgb]: '255, 255, 255',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#cccccc',
		[varBsLinkHoverColorRgb]: '204, 204, 204',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#aaa',
		[varBsHighlightBg]: '#feeacd',
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
		[varBsFocusRingColor]: 'rgba(58, 63, 68, 0.25)',
		[varBsFormValidColor]: '#62c462',
		[varBsFormValidBorderColor]: '#62c462',
		[varBsFormInvalidColor]: '#ee5f5b',
		[varBsFormInvalidBorderColor]: '#ee5f5b',
	},
})

globalStyle(`${slateScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#272b30',
		[varBsBodyBgRgb]: '39, 43, 48',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#3a3f44',
		'--bs-secondary-bg-rgb': '58, 63, 68',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#31353a',
		'--bs-tertiary-bg-rgb': '49, 53, 58',
		[varBsPrimaryTextEmphasis]: '#898c8f',
		[varBsSecondaryTextEmphasis]: '#afb4b8',
		[varBsSuccessTextEmphasis]: '#a1dca1',
		[varBsInfoTextEmphasis]: '#9dd9eb',
		[varBsWarningTextEmphasis]: '#fbbf6a',
		[varBsDangerTextEmphasis]: '#f59f9d',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#0c0d0e',
		[varBsSecondaryBgSubtle]: '#181a1b',
		[varBsSuccessBgSubtle]: '#142714',
		[varBsInfoBgSubtle]: '#12262c',
		[varBsWarningBgSubtle]: '#321e01',
		[varBsDangerBgSubtle]: '#301312',
		[varBsLightBgSubtle]: '#3a3f44',
		[varBsDarkBgSubtle]: '#1d2022',
		[varBsPrimaryBorderSubtle]: '#232629',
		[varBsSecondaryBorderSubtle]: '#494e52',
		[varBsSuccessBorderSubtle]: '#3b763b',
		[varBsInfoBorderSubtle]: '#377385',
		[varBsWarningBorderSubtle]: '#955904',
		[varBsDangerBorderSubtle]: '#8f3937',
		[varBsLightBorderSubtle]: '#52575c',
		[varBsDarkBorderSubtle]: '#3a3f44',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#898c8f',
		[varBsLinkHoverColor]: '#a1a3a5',
		[varBsLinkColorRgb]: '137, 140, 143',
		[varBsLinkHoverColorRgb]: '161, 163, 165',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#633b02',
		[varBsBorderColor]: '#52575c',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#a1dca1',
		[varBsFormValidBorderColor]: '#a1dca1',
		[varBsFormInvalidColor]: '#f59f9d',
		[varBsFormInvalidBorderColor]: '#f59f9d',
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

globalStyle(`${slateScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${slateScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${slateScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${slateScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${slateScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${slateScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${slateScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${slateScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${slateScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${slateScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${slateScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${slateScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${slateScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${slateScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${slateScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${slateScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${slateScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${slateScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${slateScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${slateScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${slateScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${slateScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${slateScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${slateScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${slateScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${slateScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${slateScope}${elOl}) :where(${slateScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${slateScope}${elUl}) :where(${slateScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${slateScope}${elOl}) :where(${slateScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${slateScope}${elUl}) :where(${slateScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${slateScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${slateScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${slateScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${slateScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${slateScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${slateScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${slateScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${slateScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${slateScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${slateScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${slateScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${slateScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${slateScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${slateScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${slateScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${slateScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${slateScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${slateScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${slateScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${slateScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
	color: 'inherit',
})

globalStyle(`:where(${slateScope}${elPre}) :where(${slateScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${slateScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${slateScope}${link}) > :where(${slateScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${slateScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${slateScope}${elKbd}) :where(${slateScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${slateScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${slateScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${slateScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${slateScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${slateScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${slateScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${slateScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${slateScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${slateScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${slateScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${slateScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${slateScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${slateScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${slateScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${slateScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${slateScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${slateScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${slateScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${slateScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${slateScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${slateScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${slateScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${slateScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${slateScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${slateScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${slateScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${slateScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${slateScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${slateScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${slateScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${slateScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${slateScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${slateScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${slateScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${slateScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${slateScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${slateScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${slateScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${slateScope}${elLegend}) + *`, {
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

globalStyle(`${slateScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${slateScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${slateScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${slateScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${slateScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${slateScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${slateScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${slateScope}${containerFluid}`, {
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

globalStyle(`${slateScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${slateScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${slateScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${slateScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${slateScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${slateScope}${navbar} > ${slateScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${slateScope}${navbarNav} ${slateScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalKeyframes('progress-bar-stripes', {
	'0%': {
		backgroundPositionX: 'var(--bs-progress-height)',
	},
})

globalStyle(`${slateScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${slateScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${slateScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${slateScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`${slateScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${slateScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${slateScope}${offcanvasBackdrop}${show}`, {
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

globalStyle(`:where(${slateScope}${h1})`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`:where(${slateScope}${h2})`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`:where(${slateScope}${h3})`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`:where(${slateScope}${h4})`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`:where(${slateScope}${h5})`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`:where(${slateScope}${h6})`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.3)',
})

globalStyle(`:where(${slateScope}${elLegend})`, {
	color: '#fff',
})
