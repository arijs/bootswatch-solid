import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { simplexScope } from '../scope.css'

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

globalStyle(`${simplexScope}${vars}`, {
	vars: {
		[varBsBlue]: '#007bff',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#9b479f',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#d9230f',
		[varBsOrange]: '#d9831f',
		[varBsYellow]: '#ffc107',
		[varBsGreen]: '#469408',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#029acf',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#777',
		[varBsGrayDark]: '#373a3c',
		[varBsGray100]: '#f8f9fa',
		[varBsGray200]: '#ddd',
		[varBsGray300]: '#ccc',
		[varBsGray400]: '#bbb',
		[varBsGray500]: '#adb5bd',
		[varBsGray600]: '#777',
		[varBsGray700]: '#444',
		[varBsGray800]: '#373a3c',
		[varBsGray900]: '#212529',
		[varBsPrimary]: '#d9230f',
		[varBsSecondary]: '#fff',
		[varBsSuccess]: '#469408',
		[varBsInfo]: '#029acf',
		[varBsWarning]: '#d9831f',
		[varBsDanger]: '#9b479f',
		[varBsLight]: '#fff',
		[varBsDark]: '#373a3c',
		[varBsPrimaryRgb]: '217, 35, 15',
		[varBsSecondaryRgb]: '255, 255, 255',
		[varBsSuccessRgb]: '70, 148, 8',
		[varBsInfoRgb]: '2, 154, 207',
		[varBsWarningRgb]: '217, 131, 31',
		[varBsDangerRgb]: '155, 71, 159',
		[varBsLightRgb]: '255, 255, 255',
		[varBsDarkRgb]: '55, 58, 60',
		[varBsPrimaryTextEmphasis]: '#570e06',
		[varBsSecondaryTextEmphasis]: '#666666',
		[varBsSuccessTextEmphasis]: '#1c3b03',
		[varBsInfoTextEmphasis]: '#013e53',
		[varBsWarningTextEmphasis]: '#57340c',
		[varBsDangerTextEmphasis]: '#3e1c40',
		[varBsLightTextEmphasis]: '#444',
		[varBsDarkTextEmphasis]: '#444',
		[varBsPrimaryBgSubtle]: '#f7d3cf',
		[varBsSecondaryBgSubtle]: 'white',
		[varBsSuccessBgSubtle]: '#daeace',
		[varBsInfoBgSubtle]: '#ccebf5',
		[varBsWarningBgSubtle]: '#f7e6d2',
		[varBsDangerBgSubtle]: '#ebdaec',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#bbb',
		[varBsPrimaryBorderSubtle]: '#f0a79f',
		[varBsSecondaryBorderSubtle]: 'white',
		[varBsSuccessBorderSubtle]: '#b5d49c',
		[varBsInfoBorderSubtle]: '#9ad7ec',
		[varBsWarningBorderSubtle]: '#f0cda5',
		[varBsDangerBorderSubtle]: '#d7b5d9',
		[varBsLightBorderSubtle]: '#ddd',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#212529',
		[varBsBodyColorRgb]: '33, 37, 41',
		[varBsBodyBg]: '#fcfcfc',
		[varBsBodyBgRgb]: '252, 252, 252',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(33, 37, 41, 0.75)',
		[varBsSecondaryColorRgb]: '33, 37, 41',
		[varBsSecondaryBg]: '#ddd',
		[varBsSecondaryBgRgb]: '221, 221, 221',
		[varBsTertiaryColor]: 'rgba(33, 37, 41, 0.5)',
		[varBsTertiaryColorRgb]: '33, 37, 41',
		[varBsTertiaryBg]: '#f8f9fa',
		[varBsTertiaryBgRgb]: '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#d9230f',
		[varBsLinkColorRgb]: '217, 35, 15',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#ae1c0c',
		[varBsLinkHoverColorRgb]: '174, 28, 12',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#212529',
		[varBsHighlightBg]: '#fff3cd',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#ccc',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '0.375rem',
		[varBsBorderRadiusSm]: '0.25rem',
		[varBsBorderRadiusLg]: '0.5rem',
		[varBsBorderRadiusXl]: '1rem',
		[varBsBorderRadiusXxl]: '2rem',
		[varBsBorderRadius2xl]: varBsBorderRadiusXxl,
		[varBsBorderRadiusPill]: '50rem',
		[varBsBoxShadow]: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
		[varBsBoxShadowSm]: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
		[varBsBoxShadowLg]: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
		[varBsBoxShadowInset]: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
		[varBsFocusRingWidth]: '0.25rem',
		[varBsFocusRingOpacity]: '0.25',
		[varBsFocusRingColor]: 'rgba(217, 35, 15, 0.25)',
		[varBsFormValidColor]: '#469408',
		[varBsFormValidBorderColor]: '#469408',
		[varBsFormInvalidColor]: '#9b479f',
		[varBsFormInvalidBorderColor]: '#9b479f',
	},
})

globalStyle(`${simplexScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#ccc',
		[varBsBodyColorRgb]: '204, 204, 204',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(204, 204, 204, 0.75)',
		[varBsSecondaryColorRgb]: '204, 204, 204',
		[varBsSecondaryBg]: '#373a3c',
		[varBsSecondaryBgRgb]: '55, 58, 60',
		[varBsTertiaryColor]: 'rgba(204, 204, 204, 0.5)',
		[varBsTertiaryColorRgb]: '204, 204, 204',
		[varBsTertiaryBg]: '#2c3033',
		[varBsTertiaryBgRgb]: '44, 48, 51',
		[varBsPrimaryTextEmphasis]: '#e87b6f',
		[varBsSecondaryTextEmphasis]: 'white',
		[varBsSuccessTextEmphasis]: '#90bf6b',
		[varBsInfoTextEmphasis]: '#67c2e2',
		[varBsWarningTextEmphasis]: '#e8b579',
		[varBsDangerTextEmphasis]: '#c391c5',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#ccc',
		[varBsPrimaryBgSubtle]: '#2b0703',
		[varBsSecondaryBgSubtle]: '#333333',
		[varBsSuccessBgSubtle]: '#0e1e02',
		[varBsInfoBgSubtle]: '#001f29',
		[varBsWarningBgSubtle]: '#2b1a06',
		[varBsDangerBgSubtle]: '#1f0e20',
		[varBsLightBgSubtle]: '#373a3c',
		[varBsDarkBgSubtle]: '#1c1d1e',
		[varBsPrimaryBorderSubtle]: '#821509',
		[varBsSecondaryBorderSubtle]: '#999999',
		[varBsSuccessBorderSubtle]: '#2a5905',
		[varBsInfoBorderSubtle]: '#015c7c',
		[varBsWarningBorderSubtle]: '#824f13',
		[varBsDangerBorderSubtle]: '#5d2b5f',
		[varBsLightBorderSubtle]: '#444',
		[varBsDarkBorderSubtle]: '#373a3c',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#e87b6f',
		[varBsLinkHoverColor]: '#ed958c',
		[varBsLinkColorRgb]: '232, 123, 111',
		[varBsLinkHoverColorRgb]: '237, 149, 140',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#ccc',
		[varBsHighlightBg]: '#664d03',
		[varBsBorderColor]: '#444',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#90bf6b',
		[varBsFormValidBorderColor]: '#90bf6b',
		[varBsFormInvalidColor]: '#e87b6f',
		[varBsFormInvalidBorderColor]: '#e87b6f',
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

globalStyle(`${simplexScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${simplexScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${simplexScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${simplexScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${simplexScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${simplexScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${simplexScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${simplexScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${simplexScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${simplexScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${simplexScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${simplexScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${simplexScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${simplexScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${simplexScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${simplexScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${simplexScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${simplexScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${simplexScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${simplexScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${simplexScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${simplexScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${simplexScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${simplexScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${simplexScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${simplexScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${simplexScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${simplexScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${simplexScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${simplexScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${simplexScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${simplexScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${simplexScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${simplexScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${simplexScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${simplexScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${simplexScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${simplexScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${simplexScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${simplexScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${simplexScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${simplexScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${simplexScope}${elOl}) :where(${simplexScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${simplexScope}${elUl}) :where(${simplexScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${simplexScope}${elOl}) :where(${simplexScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${simplexScope}${elUl}) :where(${simplexScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${simplexScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${simplexScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${simplexScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${simplexScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${simplexScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${simplexScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${simplexScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${simplexScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${simplexScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${simplexScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${simplexScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${simplexScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${simplexScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${simplexScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${simplexScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${simplexScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${simplexScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${simplexScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${simplexScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${simplexScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${simplexScope}${elPre}) :where(${simplexScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${simplexScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${simplexScope}${link}) > :where(${simplexScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${simplexScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${simplexScope}${elKbd}) :where(${simplexScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${simplexScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${simplexScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${simplexScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${simplexScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${simplexScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${simplexScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${simplexScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${simplexScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${simplexScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${simplexScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${simplexScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${simplexScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${simplexScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${simplexScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${simplexScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${simplexScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${simplexScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${simplexScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${simplexScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${simplexScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${simplexScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${simplexScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${simplexScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${simplexScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${simplexScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${simplexScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${simplexScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${simplexScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${simplexScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${simplexScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${simplexScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${simplexScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${simplexScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${simplexScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${simplexScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${simplexScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${simplexScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${simplexScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${simplexScope}${elLegend}) + *`, {
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

globalStyle(`${simplexScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${simplexScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${simplexScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${simplexScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${simplexScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${simplexScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${simplexScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${simplexScope}${containerFluid}`, {
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

globalStyle(`${simplexScope}${vars}`, {
	vars: {
		[varBsBreakpointXs]: '0',
		[varBsBreakpointSm]: '576px',
		[varBsBreakpointMd]: '768px',
		[varBsBreakpointLg]: '992px',
		[varBsBreakpointXl]: '1200px',
		[varBsBreakpointXxl]: '1400px',
	},
})

globalStyle(`${simplexScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${simplexScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${simplexScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${simplexScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${simplexScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${simplexScope}${collapsing}`, {
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

globalStyle(`${simplexScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${simplexScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${simplexScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${simplexScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`:where(${simplexScope}${elLegend})`, {
	color: 'inherit',
})

globalStyle(`:where(${simplexScope}${elLabel})`, {
	color: 'inherit',
})
