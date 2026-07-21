import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../scope.css'

import { varBsSecondaryBgRgb, varBsTertiaryBgRgb } from '../../../theme-contract/_public-vars.css'
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
	varBsBorderRadius2xl,
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
	varBsBreakpointLg,
	varBsBreakpointMd,
	varBsBreakpointSm,
	varBsBreakpointXl,
	varBsBreakpointXs,
	varBsBreakpointXxl,
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
	varBsGray100,
	varBsGray200,
	varBsGray300,
	varBsGray400,
	varBsGray500,
	varBsGray600,
	varBsGray700,
	varBsGray800,
	varBsGray900,
	varBsGrayDark,
	varBsGreen,
	varBsGutterX,
	varBsGutterY,
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
	varBsSecondaryColorRgb,
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
	varBsTertiaryColorRgb,
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
import { varBsCarouselCaptionColor, varBsCarouselControlIconFilter, varBsCarouselIndicatorActiveBg } from '../../../theme-contract/ui/carousel/_vars.css'
import { varBsProgressHeight } from '../../../theme-contract/ui/progress/_vars.css'
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

import { bodyText, vars } from '../../../theme-contract/theme-contract.css'

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

globalStyle(`${quartzScope}${vars}`, {
	vars: {
		[varBsBlue]: '#3a8fd9',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#686dc3',
		[varBsPink]: '#e83283',
		[varBsRed]: '#fc346f',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#ffc107',
		[varBsGreen]: '#41d7a7',
		[varBsTeal]: '#528fb3',
		[varBsCyan]: '#39cbfb',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#6c757d',
		[varBsGrayDark]: '#343a40',
		[varBsGray100]: '#f8f9fa',
		[varBsGray200]: '#e9e9e8',
		[varBsGray300]: '#dee2e6',
		[varBsGray400]: '#ced4da',
		[varBsGray500]: '#adb5bd',
		[varBsGray600]: '#6c757d',
		[varBsGray700]: '#495057',
		[varBsGray800]: '#343a40',
		[varBsGray900]: '#212529',
		[varBsPrimary]: '#e83283',
		[varBsSecondary]: 'rgba(255, 255, 255, 0.4)',
		[varBsSuccess]: '#41d7a7',
		[varBsInfo]: '#39cbfb',
		[varBsWarning]: '#ffc107',
		[varBsDanger]: '#fd7e14',
		[varBsLight]: '#e9e9e8',
		[varBsDark]: '#212529',
		[varBsPrimaryRgb]: '232, 50, 131',
		[varBsSecondaryRgb]: '255, 255, 255',
		[varBsSuccessRgb]: '65, 215, 167',
		[varBsInfoRgb]: '57, 203, 251',
		[varBsWarningRgb]: '255, 193, 7',
		[varBsDangerRgb]: '253, 126, 20',
		[varBsLightRgb]: '233, 233, 232',
		[varBsDarkRgb]: '33, 37, 41',
		[varBsPrimaryTextEmphasis]: '#5d1434',
		[varBsSecondaryTextEmphasis]: 'rgba(36, 36, 36, 0.76)',
		[varBsSuccessTextEmphasis]: '#1a5643',
		[varBsInfoTextEmphasis]: '#175164',
		[varBsWarningTextEmphasis]: '#664d03',
		[varBsDangerTextEmphasis]: '#653208',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#fad6e6',
		[varBsSecondaryBgSubtle]: 'rgba(255, 255, 255, 0.88)',
		[varBsSuccessBgSubtle]: '#d9f7ed',
		[varBsInfoBgSubtle]: '#d7f5fe',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#ffe5d0',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#f6adcd',
		[varBsSecondaryBorderSubtle]: 'rgba(255, 255, 255, 0.76)',
		[varBsSuccessBorderSubtle]: '#b3efdc',
		[varBsInfoBorderSubtle]: '#b0eafd',
		[varBsWarningBorderSubtle]: '#ffe69c',
		[varBsDangerBorderSubtle]: '#fecba1',
		[varBsLightBorderSubtle]: '#e9e9e8',
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
		[varBsBodyColor]: '#fff',
		[varBsBodyColorRgb]: '255, 255, 255',
		[varBsBodyBg]: '#686dc3',
		[varBsBodyBgRgb]: '104, 109, 195',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsSecondaryColorRgb]: '255, 255, 255',
		[varBsSecondaryBg]: '#e9e9e8',
		[varBsSecondaryBgRgb]: '233, 233, 232',
		[varBsTertiaryColor]: 'rgba(255, 255, 255, 0.5)',
		[varBsTertiaryColorRgb]: '255, 255, 255',
		[varBsTertiaryBg]: '#f8f9fa',
		[varBsTertiaryBgRgb]: '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#fff',
		[varBsLinkColorRgb]: '255, 255, 255',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#cccccc',
		[varBsLinkHoverColorRgb]: '204, 204, 204',
		[varBsCodeColor]: '#e83283',
		[varBsHighlightColor]: '#fff',
		[varBsHighlightBg]: '#fff3cd',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: 'rgba(255, 255, 255, 0.2)',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '0.5rem',
		[varBsBorderRadiusSm]: '0.6rem',
		[varBsBorderRadiusLg]: '0.7rem',
		[varBsBorderRadiusXl]: '1rem',
		[varBsBorderRadiusXxl]: '2rem',
		[varBsBorderRadius2xl]: varBsBorderRadiusXxl,
		[varBsBorderRadiusPill]: '50rem',
		[varBsBoxShadow]: '1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
		[varBsBoxShadowSm]: '0 1px 1px rgba(0, 0, 0, 0.1)',
		[varBsBoxShadowLg]: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
		[varBsBoxShadowInset]: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
		[varBsFocusRingWidth]: '0.25rem',
		[varBsFocusRingOpacity]: '0.25',
		[varBsFocusRingColor]: 'rgba(232, 50, 131, 0.25)',
		[varBsFormValidColor]: '#41d7a7',
		[varBsFormValidBorderColor]: '#41d7a7',
		[varBsFormInvalidColor]: '#fd7e14',
		[varBsFormInvalidBorderColor]: '#fd7e14',
	},
})

globalStyle(`${quartzScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		[varBsSecondaryColorRgb]: '222, 226, 230',
		[varBsSecondaryBg]: '#343a40',
		[varBsSecondaryBgRgb]: '52, 58, 64',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		[varBsTertiaryColorRgb]: '222, 226, 230',
		[varBsTertiaryBg]: '#2b3035',
		[varBsTertiaryBgRgb]: '43, 48, 53',
		[varBsPrimaryTextEmphasis]: '#f184b5',
		[varBsSecondaryTextEmphasis]: 'rgba(255, 255, 255, 0.64)',
		[varBsSuccessTextEmphasis]: '#8de7ca',
		[varBsInfoTextEmphasis]: '#88e0fd',
		[varBsWarningTextEmphasis]: '#ffda6a',
		[varBsDangerTextEmphasis]: '#feb272',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#2e0a1a',
		[varBsSecondaryBgSubtle]: 'rgba(15, 15, 15, 0.88)',
		[varBsSuccessBgSubtle]: '#0d2b21',
		[varBsInfoBgSubtle]: '#0b2932',
		[varBsWarningBgSubtle]: '#332701',
		[varBsDangerBgSubtle]: '#331904',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#8b1e4f',
		[varBsSecondaryBorderSubtle]: 'rgba(70, 70, 70, 0.64)',
		[varBsSuccessBorderSubtle]: '#278164',
		[varBsInfoBorderSubtle]: '#227a97',
		[varBsWarningBorderSubtle]: '#997404',
		[varBsDangerBorderSubtle]: '#984c0c',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#f184b5',
		[varBsLinkHoverColor]: '#f49dc4',
		[varBsLinkColorRgb]: '241, 132, 181',
		[varBsLinkHoverColorRgb]: '244, 157, 196',
		[varBsCodeColor]: '#f184b5',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#664d03',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#8de7ca',
		[varBsFormValidBorderColor]: '#8de7ca',
		[varBsFormInvalidColor]: '#fd85a9',
		[varBsFormInvalidBorderColor]: '#fd85a9',
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

globalStyle(`${quartzScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${quartzScope}${horizontalRule})`, {
	margin: '2rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${quartzScope}${h6})`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${quartzScope}${h5})`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${quartzScope}${h4})`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${quartzScope}${h3})`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${quartzScope}${h2})`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${quartzScope}${h1})`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${quartzScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '1rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${quartzScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${quartzScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${quartzScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${quartzScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${quartzScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${quartzScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${quartzScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${quartzScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${quartzScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${quartzScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${quartzScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${quartzScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${quartzScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${quartzScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${quartzScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${quartzScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${quartzScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${quartzScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${quartzScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${quartzScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${quartzScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${quartzScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${quartzScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${quartzScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${quartzScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${quartzScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${quartzScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${quartzScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${quartzScope}${elOl}) :where(${quartzScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${quartzScope}${elUl}) :where(${quartzScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${quartzScope}${elOl}) :where(${quartzScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${quartzScope}${elUl}) :where(${quartzScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${quartzScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${quartzScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${quartzScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${quartzScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${quartzScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${quartzScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${quartzScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${quartzScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${quartzScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${quartzScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${quartzScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${quartzScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${quartzScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${quartzScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${quartzScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${quartzScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${quartzScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${quartzScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${quartzScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${quartzScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${quartzScope}${elPre}) :where(${quartzScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${quartzScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${quartzScope}${link}) > :where(${quartzScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${quartzScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.6rem',
})

globalStyle(`:where(${quartzScope}${elKbd}) :where(${quartzScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${quartzScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${quartzScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${quartzScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${quartzScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${quartzScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${quartzScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${quartzScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${quartzScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${quartzScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${quartzScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${quartzScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${quartzScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${quartzScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${quartzScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${quartzScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${quartzScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${quartzScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${quartzScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${quartzScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${quartzScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${quartzScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${quartzScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${quartzScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${quartzScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${quartzScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${quartzScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${quartzScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${quartzScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${quartzScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${quartzScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${quartzScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${quartzScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${quartzScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${quartzScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${quartzScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${quartzScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${quartzScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${quartzScope}${elLegend}) + *`, {
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

globalStyle(`${quartzScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${quartzScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${quartzScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${quartzScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${quartzScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${quartzScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${quartzScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${quartzScope}${containerFluid}`, {
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

globalStyle(`${quartzScope}${vars}`, {
	vars: {
		[varBsBreakpointXs]: '0',
		[varBsBreakpointSm]: '576px',
		[varBsBreakpointMd]: '768px',
		[varBsBreakpointLg]: '992px',
		[varBsBreakpointXl]: '1200px',
		[varBsBreakpointXxl]: '1400px',
	},
})

globalStyle(`${quartzScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${quartzScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${quartzScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${quartzScope}${collapsing}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalKeyframes('progress-bar-stripes', {
	'0%': {
		backgroundPositionX: varBsProgressHeight,
	},
})

globalStyle(`${quartzScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${quartzScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${quartzScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${quartzScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`${quartzScope}[data-bs-theme=dark] ${quartzScope}${bodyText}`, {
	color: '#fff',
})
