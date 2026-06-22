import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { unitedScope } from '../scope.css'

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

globalStyle(`${unitedScope}${vars}`, {
	vars: {
		[varBsBlue]: '#007bff',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#772953',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#df382c',
		[varBsOrange]: '#e95420',
		[varBsYellow]: '#efb73e',
		[varBsGreen]: '#38b44a',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#17a2b8',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#868e96',
		[varBsGrayDark]: '#333',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#e9ecef',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#aea79f',
		'--bs-gray-600': '#868e96',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#333',
		'--bs-gray-900': '#212529',
		[varBsPrimary]: '#e95420',
		[varBsSecondary]: '#aea79f',
		[varBsSuccess]: '#38b44a',
		[varBsInfo]: '#17a2b8',
		[varBsWarning]: '#efb73e',
		[varBsDanger]: '#df382c',
		[varBsLight]: '#e9ecef',
		[varBsDark]: '#772953',
		[varBsPrimaryRgb]: '233, 84, 32',
		[varBsSecondaryRgb]: '174, 167, 159',
		[varBsSuccessRgb]: '56, 180, 74',
		[varBsInfoRgb]: '23, 162, 184',
		[varBsWarningRgb]: '239, 183, 62',
		[varBsDangerRgb]: '223, 56, 44',
		[varBsLightRgb]: '233, 236, 239',
		[varBsDarkRgb]: '119, 41, 83',
		[varBsPrimaryTextEmphasis]: '#5d220d',
		[varBsSecondaryTextEmphasis]: '#464340',
		[varBsSuccessTextEmphasis]: '#16481e',
		[varBsInfoTextEmphasis]: '#09414a',
		[varBsWarningTextEmphasis]: '#604919',
		[varBsDangerTextEmphasis]: '#591612',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#fbddd2',
		[varBsSecondaryBgSubtle]: '#efedec',
		[varBsSuccessBgSubtle]: '#d7f0db',
		[varBsInfoBgSubtle]: '#d1ecf1',
		[varBsWarningBgSubtle]: '#fcf1d8',
		[varBsDangerBgSubtle]: '#f9d7d5',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#f6bba6',
		[varBsSecondaryBorderSubtle]: '#dfdcd9',
		[varBsSuccessBorderSubtle]: '#afe1b7',
		[varBsInfoBorderSubtle]: '#a2dae3',
		[varBsWarningBorderSubtle]: '#f9e2b2',
		[varBsDangerBorderSubtle]: '#f2afab',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#aea79f',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#333',
		[varBsBodyColorRgb]: '51, 51, 51',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(51, 51, 51, 0.75)',
		'--bs-secondary-color-rgb': '51, 51, 51',
		[varBsSecondaryBg]: '#e9ecef',
		'--bs-secondary-bg-rgb': '233, 236, 239',
		[varBsTertiaryColor]: 'rgba(51, 51, 51, 0.5)',
		'--bs-tertiary-color-rgb': '51, 51, 51',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#e95420',
		[varBsLinkColorRgb]: '233, 84, 32',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#ba431a',
		[varBsLinkHoverColorRgb]: '186, 67, 26',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#333',
		[varBsHighlightBg]: '#fcf1d8',
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
		[varBsFocusRingColor]: 'rgba(233, 84, 32, 0.25)',
		[varBsFormValidColor]: '#38b44a',
		[varBsFormValidBorderColor]: '#38b44a',
		[varBsFormInvalidColor]: '#df382c',
		[varBsFormInvalidBorderColor]: '#df382c',
	},
})

globalStyle(`${unitedScope}${vars}[data-bs-theme=dark]`, {
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
		[varBsPrimaryTextEmphasis]: '#f29879',
		[varBsSecondaryTextEmphasis]: '#cecac5',
		[varBsSuccessTextEmphasis]: '#88d292',
		[varBsInfoTextEmphasis]: '#74c7d4',
		[varBsWarningTextEmphasis]: '#f5d48b',
		[varBsDangerTextEmphasis]: '#ec8880',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#2f1106',
		[varBsSecondaryBgSubtle]: '#232120',
		[varBsSuccessBgSubtle]: '#0b240f',
		[varBsInfoBgSubtle]: '#052025',
		[varBsWarningBgSubtle]: '#30250c',
		[varBsDangerBgSubtle]: '#2d0b09',
		[varBsLightBgSubtle]: '#333',
		[varBsDarkBgSubtle]: '#1a1a1a',
		[varBsPrimaryBorderSubtle]: '#8c3213',
		[varBsSecondaryBorderSubtle]: '#68645f',
		[varBsSuccessBorderSubtle]: '#226c2c',
		[varBsInfoBorderSubtle]: '#0e616e',
		[varBsWarningBorderSubtle]: '#8f6e25',
		[varBsDangerBorderSubtle]: '#86221a',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#333',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#f29879',
		[varBsLinkHoverColor]: '#f5ad94',
		[varBsLinkColorRgb]: '242, 152, 121',
		[varBsLinkHoverColorRgb]: '245, 173, 148',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#604919',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#88d292',
		[varBsFormValidBorderColor]: '#88d292',
		[varBsFormInvalidColor]: '#ec8880',
		[varBsFormInvalidBorderColor]: '#ec8880',
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

globalStyle(`${unitedScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${unitedScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${unitedScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${unitedScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${unitedScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${unitedScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${unitedScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${unitedScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${unitedScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${unitedScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${unitedScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${unitedScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${unitedScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${unitedScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${unitedScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${unitedScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${unitedScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${unitedScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${unitedScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${unitedScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${unitedScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${unitedScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${unitedScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${unitedScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${unitedScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${unitedScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${unitedScope}${elOl}) :where(${unitedScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${unitedScope}${elUl}) :where(${unitedScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${unitedScope}${elOl}) :where(${unitedScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${unitedScope}${elUl}) :where(${unitedScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${unitedScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${unitedScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${unitedScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${unitedScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${unitedScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${unitedScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${unitedScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${unitedScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${unitedScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${unitedScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${unitedScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${unitedScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${unitedScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${unitedScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${unitedScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${unitedScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${unitedScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${unitedScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${unitedScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${unitedScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${unitedScope}${elPre}) :where(${unitedScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${unitedScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${unitedScope}${link}) > :where(${unitedScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${unitedScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${unitedScope}${elKbd}) :where(${unitedScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${unitedScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${unitedScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${unitedScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${unitedScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${unitedScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${unitedScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${unitedScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${unitedScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${unitedScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${unitedScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${unitedScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${unitedScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${unitedScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${unitedScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${unitedScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${unitedScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${unitedScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${unitedScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${unitedScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${unitedScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${unitedScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${unitedScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${unitedScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${unitedScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${unitedScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${unitedScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${unitedScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${unitedScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${unitedScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${unitedScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${unitedScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${unitedScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${unitedScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${unitedScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${unitedScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${unitedScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${unitedScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${unitedScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${unitedScope}${elLegend}) + *`, {
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

globalStyle(`${unitedScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${unitedScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${unitedScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${unitedScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${unitedScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${unitedScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${unitedScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${unitedScope}${containerFluid}`, {
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

globalStyle(`${unitedScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${unitedScope}${navbar} > ${unitedScope}${containerFluid}`, {
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

globalStyle(`${unitedScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${unitedScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${unitedScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${unitedScope}${vars}[data-bs-theme=dark]`, {
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
