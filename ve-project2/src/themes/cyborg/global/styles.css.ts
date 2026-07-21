import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../scope.css'

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

globalStyle(`${cyborgScope}${vars}`, {
	vars: {
		[varBsBlue]: '#2a9fd6',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#c00',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#f80',
		[varBsGreen]: '#77b300',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#93c',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#555',
		[varBsGrayDark]: '#222',
		[varBsGray100]: '#f8f9fa',
		[varBsGray200]: '#e9ecef',
		[varBsGray300]: '#dee2e6',
		[varBsGray400]: '#adafae',
		[varBsGray500]: '#888',
		[varBsGray600]: '#555',
		[varBsGray700]: '#282828',
		[varBsGray800]: '#222',
		[varBsGray900]: '#212529',
		[varBsPrimary]: '#2a9fd6',
		[varBsSecondary]: '#555',
		[varBsSuccess]: '#77b300',
		[varBsInfo]: '#93c',
		[varBsWarning]: '#f80',
		[varBsDanger]: '#c00',
		[varBsLight]: '#222',
		[varBsDark]: '#adafae',
		[varBsPrimaryRgb]: '42, 159, 214',
		[varBsSecondaryRgb]: '85, 85, 85',
		[varBsSuccessRgb]: '119, 179, 0',
		[varBsInfoRgb]: '153, 51, 204',
		[varBsWarningRgb]: '255, 136, 0',
		[varBsDangerRgb]: '204, 0, 0',
		[varBsLightRgb]: '34, 34, 34',
		[varBsDarkRgb]: '173, 175, 174',
		[varBsPrimaryTextEmphasis]: '#114056',
		[varBsSecondaryTextEmphasis]: '#222222',
		[varBsSuccessTextEmphasis]: '#304800',
		[varBsInfoTextEmphasis]: '#3d1452',
		[varBsWarningTextEmphasis]: '#663600',
		[varBsDangerTextEmphasis]: '#520000',
		[varBsLightTextEmphasis]: '#282828',
		[varBsDarkTextEmphasis]: '#282828',
		[varBsPrimaryBgSubtle]: '#d4ecf7',
		[varBsSecondaryBgSubtle]: '#dddddd',
		[varBsSuccessBgSubtle]: '#e4f0cc',
		[varBsInfoBgSubtle]: '#ebd6f5',
		[varBsWarningBgSubtle]: '#ffe7cc',
		[varBsDangerBgSubtle]: '#f5cccc',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#adafae',
		[varBsPrimaryBorderSubtle]: '#aad9ef',
		[varBsSecondaryBorderSubtle]: '#bbbbbb',
		[varBsSuccessBorderSubtle]: '#c9e199',
		[varBsInfoBorderSubtle]: '#d6adeb',
		[varBsWarningBorderSubtle]: '#ffcf99',
		[varBsDangerBorderSubtle]: '#eb9999',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#888',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#adafae',
		[varBsBodyColorRgb]: '173, 175, 174',
		[varBsBodyBg]: '#060606',
		[varBsBodyBgRgb]: '6, 6, 6',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(173, 175, 174, 0.75)',
		[varBsSecondaryColorRgb]: '173, 175, 174',
		[varBsSecondaryBg]: '#e9ecef',
		[varBsSecondaryBgRgb]: '233, 236, 239',
		[varBsTertiaryColor]: 'rgba(173, 175, 174, 0.5)',
		[varBsTertiaryColorRgb]: '173, 175, 174',
		[varBsTertiaryBg]: '#f8f9fa',
		[varBsTertiaryBgRgb]: '248, 249, 250',
		[varBsHeadingColor]: '#fff',
		[varBsLinkColor]: '#2a9fd6',
		[varBsLinkColorRgb]: '42, 159, 214',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#227fab',
		[varBsLinkHoverColorRgb]: '34, 127, 171',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#adafae',
		[varBsHighlightBg]: '#ffe7cc',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#dee2e6',
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
		[varBsFocusRingColor]: 'rgba(42, 159, 214, 0.25)',
		[varBsFormValidColor]: '#77b300',
		[varBsFormValidBorderColor]: '#77b300',
		[varBsFormInvalidColor]: '#c00',
		[varBsFormInvalidBorderColor]: '#c00',
	},
})

globalStyle(`${cyborgScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		[varBsSecondaryColorRgb]: '222, 226, 230',
		[varBsSecondaryBg]: '#222',
		[varBsSecondaryBgRgb]: '34, 34, 34',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		[varBsTertiaryColorRgb]: '222, 226, 230',
		[varBsTertiaryBg]: '#222426',
		[varBsTertiaryBgRgb]: '34, 36, 38',
		[varBsPrimaryTextEmphasis]: '#7fc5e6',
		[varBsSecondaryTextEmphasis]: '#999999',
		[varBsSuccessTextEmphasis]: '#add166',
		[varBsInfoTextEmphasis]: '#c285e0',
		[varBsWarningTextEmphasis]: '#ffb866',
		[varBsDangerTextEmphasis]: '#e06666',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#08202b',
		[varBsSecondaryBgSubtle]: '#111111',
		[varBsSuccessBgSubtle]: '#182400',
		[varBsInfoBgSubtle]: '#1f0a29',
		[varBsWarningBgSubtle]: '#331b00',
		[varBsDangerBgSubtle]: '#290000',
		[varBsLightBgSubtle]: '#222',
		[varBsDarkBgSubtle]: '#111111',
		[varBsPrimaryBorderSubtle]: '#195f80',
		[varBsSecondaryBorderSubtle]: '#333333',
		[varBsSuccessBorderSubtle]: '#476b00',
		[varBsInfoBorderSubtle]: '#5c1f7a',
		[varBsWarningBorderSubtle]: '#995200',
		[varBsDangerBorderSubtle]: '#7a0000',
		[varBsLightBorderSubtle]: '#282828',
		[varBsDarkBorderSubtle]: '#222',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#7fc5e6',
		[varBsLinkHoverColor]: '#99d1eb',
		[varBsLinkColorRgb]: '127, 197, 230',
		[varBsLinkHoverColorRgb]: '153, 209, 235',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#663600',
		[varBsBorderColor]: '#282828',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#add166',
		[varBsFormValidBorderColor]: '#add166',
		[varBsFormInvalidColor]: '#e06666',
		[varBsFormInvalidBorderColor]: '#e06666',
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

globalStyle(`${cyborgScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${cyborgScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${cyborgScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cyborgScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cyborgScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cyborgScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cyborgScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cyborgScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${cyborgScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${cyborgScope}${h1})`, {
	fontSize: 'calc(1.525rem + 3.3vw)',
})

globalStyle(`${cyborgScope}${clsH1}`, {
	fontSize: 'calc(1.525rem + 3.3vw)',
})

globalStyle(`:where(${cyborgScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

globalStyle(`:where(${cyborgScope}${h2})`, {
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${cyborgScope}${clsH2}`, {
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`:where(${cyborgScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`:where(${cyborgScope}${h3})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${cyborgScope}${clsH3}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${cyborgScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${cyborgScope}${h4})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${cyborgScope}${clsH4}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${cyborgScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${cyborgScope}${h5})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${cyborgScope}${clsH5}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${cyborgScope}${h5})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${cyborgScope}${clsH5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${cyborgScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${cyborgScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${cyborgScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${cyborgScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${cyborgScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cyborgScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${cyborgScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${cyborgScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${cyborgScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${cyborgScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${cyborgScope}${elOl}) :where(${cyborgScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${cyborgScope}${elUl}) :where(${cyborgScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${cyborgScope}${elOl}) :where(${cyborgScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${cyborgScope}${elUl}) :where(${cyborgScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${cyborgScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${cyborgScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${cyborgScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${cyborgScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${cyborgScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${cyborgScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${cyborgScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${cyborgScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${cyborgScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${cyborgScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${cyborgScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${cyborgScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${cyborgScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${cyborgScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${cyborgScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${cyborgScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${cyborgScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${cyborgScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${cyborgScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${cyborgScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
	color: 'inherit',
})

globalStyle(`:where(${cyborgScope}${elPre}) :where(${cyborgScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${cyborgScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${cyborgScope}${link}) > :where(${cyborgScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${cyborgScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${cyborgScope}${elKbd}) :where(${cyborgScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${cyborgScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${cyborgScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${cyborgScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${cyborgScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${cyborgScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${cyborgScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${cyborgScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cyborgScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cyborgScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cyborgScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cyborgScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cyborgScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${cyborgScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${cyborgScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${cyborgScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${cyborgScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cyborgScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cyborgScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cyborgScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cyborgScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${cyborgScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${cyborgScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${cyborgScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${cyborgScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${cyborgScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${cyborgScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${cyborgScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${cyborgScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${cyborgScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${cyborgScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${cyborgScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${cyborgScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${cyborgScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${cyborgScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${cyborgScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${cyborgScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${cyborgScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${cyborgScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${cyborgScope}${elLegend}) + *`, {
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

globalStyle(`${cyborgScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${cyborgScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${cyborgScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${cyborgScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${cyborgScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${cyborgScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${cyborgScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${cyborgScope}${containerFluid}`, {
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

globalStyle(`${cyborgScope}${vars}`, {
	vars: {
		[varBsBreakpointXs]: '0',
		[varBsBreakpointSm]: '576px',
		[varBsBreakpointMd]: '768px',
		[varBsBreakpointLg]: '992px',
		[varBsBreakpointXl]: '1200px',
		[varBsBreakpointXxl]: '1400px',
	},
})

globalStyle(`${cyborgScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${cyborgScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${cyborgScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${cyborgScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${cyborgScope}${collapsing}`, {
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

globalStyle(`${cyborgScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${cyborgScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${cyborgScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${cyborgScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`:where(${cyborgScope}${elLegend})`, {
	color: '#fff',
})
