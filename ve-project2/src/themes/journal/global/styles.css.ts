import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { journalScope } from '../scope.css'

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
import { collapsing } from '../../../theme-contract/literal/contract.css'
import { collapse } from '../../../theme-contract/ui/navbar/contract.css'
import { fade, show } from '../../../theme-contract/ui/navs/contract.css'

globalStyle(`${journalScope}${vars}`, {
	vars: {
		[varBsBlue]: '#eb6864',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#f57a00',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#f5e625',
		[varBsGreen]: '#22b24c',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#369',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#777',
		[varBsGrayDark]: '#333',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#eee',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#aaa',
		'--bs-gray-600': '#777',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#333',
		'--bs-gray-900': '#222',
		[varBsPrimary]: '#eb6864',
		[varBsSecondary]: '#aaa',
		[varBsSuccess]: '#22b24c',
		[varBsInfo]: '#369',
		[varBsWarning]: '#f5e625',
		[varBsDanger]: '#f57a00',
		[varBsLight]: '#f8f9fa',
		[varBsDark]: '#222',
		[varBsPrimaryRgb]: '235, 104, 100',
		[varBsSecondaryRgb]: '170, 170, 170',
		[varBsSuccessRgb]: '34, 178, 76',
		[varBsInfoRgb]: '51, 102, 153',
		[varBsWarningRgb]: '245, 230, 37',
		[varBsDangerRgb]: '245, 122, 0',
		[varBsLightRgb]: '248, 249, 250',
		[varBsDarkRgb]: '34, 34, 34',
		[varBsPrimaryTextEmphasis]: '#5e2a28',
		[varBsSecondaryTextEmphasis]: '#444444',
		[varBsSuccessTextEmphasis]: '#0e471e',
		[varBsInfoTextEmphasis]: '#14293d',
		[varBsWarningTextEmphasis]: '#625c0f',
		[varBsDangerTextEmphasis]: '#623100',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#fbe1e0',
		[varBsSecondaryBgSubtle]: '#eeeeee',
		[varBsSuccessBgSubtle]: '#d3f0db',
		[varBsInfoBgSubtle]: '#d6e0eb',
		[varBsWarningBgSubtle]: '#fdfad3',
		[varBsDangerBgSubtle]: '#fde4cc',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#f7c3c1',
		[varBsSecondaryBorderSubtle]: '#dddddd',
		[varBsSuccessBorderSubtle]: '#a7e0b7',
		[varBsInfoBorderSubtle]: '#adc2d6',
		[varBsWarningBorderSubtle]: '#fbf5a8',
		[varBsDangerBorderSubtle]: '#fbca99',
		[varBsLightBorderSubtle]: '#eee',
		[varBsDarkBorderSubtle]: '#aaa',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
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
		[varBsSecondaryBg]: '#eee',
		'--bs-secondary-bg-rgb': '238, 238, 238',
		[varBsTertiaryColor]: 'rgba(34, 34, 34, 0.5)',
		'--bs-tertiary-color-rgb': '34, 34, 34',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#eb6864',
		[varBsLinkColorRgb]: '235, 104, 100',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#bc5350',
		[varBsLinkHoverColorRgb]: '188, 83, 80',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#222',
		[varBsHighlightBg]: '#fdfad3',
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
		[varBsFocusRingColor]: 'rgba(235, 104, 100, 0.25)',
		[varBsFormValidColor]: '#22b24c',
		[varBsFormValidBorderColor]: '#22b24c',
		[varBsFormInvalidColor]: '#f57a00',
		[varBsFormInvalidBorderColor]: '#f57a00',
	},
})

globalStyle(`${journalScope}${vars}[data-bs-theme=dark]`, {
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
		[varBsPrimaryTextEmphasis]: '#f3a4a2',
		[varBsSecondaryTextEmphasis]: '#cccccc',
		[varBsSuccessTextEmphasis]: '#7ad194',
		[varBsInfoTextEmphasis]: '#85a3c2',
		[varBsWarningTextEmphasis]: '#f9f07c',
		[varBsDangerTextEmphasis]: '#f9af66',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#2f1514',
		[varBsSecondaryBgSubtle]: '#222222',
		[varBsSuccessBgSubtle]: '#07240f',
		[varBsInfoBgSubtle]: '#0a141f',
		[varBsWarningBgSubtle]: '#312e07',
		[varBsDangerBgSubtle]: '#311800',
		[varBsLightBgSubtle]: '#333',
		[varBsDarkBgSubtle]: '#1a1a1a',
		[varBsPrimaryBorderSubtle]: '#8d3e3c',
		[varBsSecondaryBorderSubtle]: '#666666',
		[varBsSuccessBorderSubtle]: '#146b2e',
		[varBsInfoBorderSubtle]: '#1f3d5c',
		[varBsWarningBorderSubtle]: '#938a16',
		[varBsDangerBorderSubtle]: '#934900',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#333',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#f3a4a2',
		[varBsLinkHoverColor]: '#f5b6b5',
		[varBsLinkColorRgb]: '243, 164, 162',
		[varBsLinkHoverColorRgb]: '245, 182, 181',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#625c0f',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#7ad194',
		[varBsFormValidBorderColor]: '#7ad194',
		[varBsFormInvalidColor]: '#f9af66',
		[varBsFormInvalidBorderColor]: '#f9af66',
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

globalStyle(`${journalScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${journalScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${journalScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`:where(${journalScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`:where(${journalScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`:where(${journalScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`:where(${journalScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`:where(${journalScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
	lineHeight: '1.1',
	color: varBsHeadingColor,
})

globalStyle(`:where(${journalScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${journalScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${journalScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${journalScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${journalScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${journalScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${journalScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${journalScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${journalScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${journalScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${journalScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${journalScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${journalScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${journalScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${journalScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${journalScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${journalScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${journalScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${journalScope}${elOl}) :where(${journalScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${journalScope}${elUl}) :where(${journalScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${journalScope}${elOl}) :where(${journalScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${journalScope}${elUl}) :where(${journalScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${journalScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${journalScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${journalScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${journalScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${journalScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${journalScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${journalScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${journalScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${journalScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${journalScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${journalScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${journalScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${journalScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${journalScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${journalScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${journalScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${journalScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${journalScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${journalScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${journalScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${journalScope}${elPre}) :where(${journalScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${journalScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${journalScope}${link}) > :where(${journalScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${journalScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${journalScope}${elKbd}) :where(${journalScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${journalScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${journalScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${journalScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${journalScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${journalScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${journalScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${journalScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${journalScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${journalScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${journalScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${journalScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${journalScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${journalScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${journalScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${journalScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${journalScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${journalScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${journalScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${journalScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${journalScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${journalScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${journalScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${journalScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${journalScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${journalScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${journalScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${journalScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${journalScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${journalScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${journalScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${journalScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${journalScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${journalScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${journalScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${journalScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${journalScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${journalScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${journalScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${journalScope}${elLegend}) + *`, {
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

globalStyle(`${journalScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${journalScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${journalScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${journalScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${journalScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${journalScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${journalScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${journalScope}${containerFluid}`, {
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

globalStyle(`${journalScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${journalScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${journalScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${journalScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${journalScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${journalScope}${collapsing}`, {
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

globalStyle(`${journalScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${journalScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${journalScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${journalScope}${vars}[data-bs-theme=dark]`, {
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
