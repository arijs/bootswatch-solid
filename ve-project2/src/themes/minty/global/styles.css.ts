import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { mintyScope } from '../scope.css'

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

globalStyle(`${mintyScope}${vars}`, {
	vars: {
		[varBsBlue]: '#007bff',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#ff7851',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#ffce67',
		[varBsGreen]: '#56cc9d',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#6cc3d5',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#888',
		[varBsGrayDark]: '#343a40',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#f7f7f9',
		'--bs-gray-300': '#eceeef',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#aaa',
		'--bs-gray-600': '#888',
		'--bs-gray-700': '#5a5a5a',
		'--bs-gray-800': '#343a40',
		'--bs-gray-900': '#212529',
		[varBsPrimary]: '#78c2ad',
		[varBsSecondary]: '#f3969a',
		[varBsSuccess]: '#56cc9d',
		[varBsInfo]: '#6cc3d5',
		[varBsWarning]: '#ffce67',
		[varBsDanger]: '#ff7851',
		[varBsLight]: '#f8f9fa',
		[varBsDark]: '#343a40',
		[varBsPrimaryRgb]: '120, 194, 173',
		[varBsSecondaryRgb]: '243, 150, 154',
		[varBsSuccessRgb]: '86, 204, 157',
		[varBsInfoRgb]: '108, 195, 213',
		[varBsWarningRgb]: '255, 206, 103',
		[varBsDangerRgb]: '255, 120, 81',
		[varBsLightRgb]: '248, 249, 250',
		[varBsDarkRgb]: '52, 58, 64',
		[varBsPrimaryTextEmphasis]: '#304e45',
		[varBsSecondaryTextEmphasis]: '#613c3e',
		[varBsSuccessTextEmphasis]: '#22523f',
		[varBsInfoTextEmphasis]: '#2b4e55',
		[varBsWarningTextEmphasis]: '#665229',
		[varBsDangerTextEmphasis]: '#663020',
		[varBsLightTextEmphasis]: '#5a5a5a',
		[varBsDarkTextEmphasis]: '#5a5a5a',
		[varBsPrimaryBgSubtle]: '#e4f3ef',
		[varBsSecondaryBgSubtle]: '#fdeaeb',
		[varBsSuccessBgSubtle]: '#ddf5eb',
		[varBsInfoBgSubtle]: '#e2f3f7',
		[varBsWarningBgSubtle]: '#fff5e1',
		[varBsDangerBgSubtle]: '#ffe4dc',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#c9e7de',
		[varBsSecondaryBorderSubtle]: '#fad5d7',
		[varBsSuccessBorderSubtle]: '#bbebd8',
		[varBsInfoBorderSubtle]: '#c4e7ee',
		[varBsWarningBorderSubtle]: '#ffebc2',
		[varBsDangerBorderSubtle]: '#ffc9b9',
		[varBsLightBorderSubtle]: '#f7f7f9',
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
		[varBsBodyColor]: '#888',
		[varBsBodyColorRgb]: '136, 136, 136',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(136, 136, 136, 0.75)',
		'--bs-secondary-color-rgb': '136, 136, 136',
		[varBsSecondaryBg]: '#f7f7f9',
		'--bs-secondary-bg-rgb': '247, 247, 249',
		[varBsTertiaryColor]: 'rgba(136, 136, 136, 0.5)',
		'--bs-tertiary-color-rgb': '136, 136, 136',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: '#5a5a5a',
		[varBsLinkColor]: '#78c2ad',
		[varBsLinkColorRgb]: '120, 194, 173',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#609b8a',
		[varBsLinkHoverColorRgb]: '96, 155, 138',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#888',
		[varBsHighlightBg]: '#fff5e1',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#eceeef',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '0.4rem',
		[varBsBorderRadiusSm]: '0.3rem',
		[varBsBorderRadiusLg]: '0.6rem',
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
		[varBsFocusRingColor]: 'rgba(120, 194, 173, 0.25)',
		[varBsFormValidColor]: '#56cc9d',
		[varBsFormValidBorderColor]: '#56cc9d',
		[varBsFormInvalidColor]: '#ff7851',
		[varBsFormInvalidBorderColor]: '#ff7851',
	},
})

globalStyle(`${mintyScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#eceeef',
		[varBsBodyColorRgb]: '236, 238, 239',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(236, 238, 239, 0.75)',
		'--bs-secondary-color-rgb': '236, 238, 239',
		[varBsSecondaryBg]: '#343a40',
		'--bs-secondary-bg-rgb': '52, 58, 64',
		[varBsTertiaryColor]: 'rgba(236, 238, 239, 0.5)',
		'--bs-tertiary-color-rgb': '236, 238, 239',
		[varBsTertiaryBg]: '#2b3035',
		'--bs-tertiary-bg-rgb': '43, 48, 53',
		[varBsPrimaryTextEmphasis]: '#aedace',
		[varBsSecondaryTextEmphasis]: '#f8c0c2',
		[varBsSuccessTextEmphasis]: '#9ae0c4',
		[varBsInfoTextEmphasis]: '#a7dbe6',
		[varBsWarningTextEmphasis]: '#ffe2a4',
		[varBsDangerTextEmphasis]: '#ffae97',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#eceeef',
		[varBsPrimaryBgSubtle]: '#182723',
		[varBsSecondaryBgSubtle]: '#311e1f',
		[varBsSuccessBgSubtle]: '#11291f',
		[varBsInfoBgSubtle]: '#16272b',
		[varBsWarningBgSubtle]: '#332915',
		[varBsDangerBgSubtle]: '#331810',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#487468',
		[varBsSecondaryBorderSubtle]: '#925a5c',
		[varBsSuccessBorderSubtle]: '#347a5e',
		[varBsInfoBorderSubtle]: '#417580',
		[varBsWarningBorderSubtle]: '#997c3e',
		[varBsDangerBorderSubtle]: '#994831',
		[varBsLightBorderSubtle]: '#5a5a5a',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#aedace',
		[varBsLinkHoverColor]: '#bee1d8',
		[varBsLinkColorRgb]: '174, 218, 206',
		[varBsLinkHoverColorRgb]: '190, 225, 216',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#eceeef',
		[varBsHighlightBg]: '#665229',
		[varBsBorderColor]: '#5a5a5a',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#9ae0c4',
		[varBsFormValidBorderColor]: '#9ae0c4',
		[varBsFormInvalidColor]: '#ffae97',
		[varBsFormInvalidBorderColor]: '#ffae97',
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

globalStyle(`${mintyScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${mintyScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${mintyScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${mintyScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${mintyScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${mintyScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${mintyScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${mintyScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${mintyScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${mintyScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${mintyScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${mintyScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${mintyScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${mintyScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${mintyScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${mintyScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${mintyScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${mintyScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`:where(${mintyScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${mintyScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${mintyScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${mintyScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${mintyScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${mintyScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${mintyScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${mintyScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${mintyScope}${elOl}) :where(${mintyScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${mintyScope}${elUl}) :where(${mintyScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${mintyScope}${elOl}) :where(${mintyScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${mintyScope}${elUl}) :where(${mintyScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${mintyScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${mintyScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${mintyScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${mintyScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${mintyScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${mintyScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${mintyScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${mintyScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${mintyScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${mintyScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${mintyScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${mintyScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${mintyScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${mintyScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${mintyScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${mintyScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${mintyScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${mintyScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${mintyScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${mintyScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${mintyScope}${elPre}) :where(${mintyScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${mintyScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${mintyScope}${link}) > :where(${mintyScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${mintyScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.3rem',
})

globalStyle(`:where(${mintyScope}${elKbd}) :where(${mintyScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${mintyScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${mintyScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${mintyScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${mintyScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${mintyScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${mintyScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${mintyScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${mintyScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${mintyScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${mintyScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${mintyScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${mintyScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${mintyScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${mintyScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${mintyScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${mintyScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${mintyScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${mintyScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${mintyScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${mintyScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${mintyScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${mintyScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${mintyScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${mintyScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${mintyScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${mintyScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${mintyScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${mintyScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${mintyScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${mintyScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${mintyScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${mintyScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${mintyScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${mintyScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${mintyScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${mintyScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${mintyScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${mintyScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${mintyScope}${elLegend}) + *`, {
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

globalStyle(`${mintyScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${mintyScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${mintyScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${mintyScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${mintyScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${mintyScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${mintyScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${mintyScope}${containerFluid}`, {
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

globalStyle(`${mintyScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${mintyScope}${navbar} > ${mintyScope}${containerFluid}`, {
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

globalStyle(`${mintyScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${mintyScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${mintyScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${mintyScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`:where(${mintyScope}${elLegend})`, {
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
})
