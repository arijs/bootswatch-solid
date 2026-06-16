import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../scope.css'

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
	varBsTableAccentBg,
	varBsTableActiveBg,
	varBsTableActiveColor,
	varBsTableBg,
	varBsTableBgState,
	varBsTableBgType,
	varBsTableBorderColor,
	varBsTableColor,
	varBsTableColorState,
	varBsTableColorType,
	varBsTableHoverBg,
	varBsTableHoverColor,
	varBsTableStripedBg,
	varBsTableStripedColor,
} from '../../../theme-contract/contents/_vars.css'
import {
	varBsFormCheckBg,
	varBsFormCheckBgImage,
	varBsFormInvalidBorderColor,
	varBsFormInvalidColor,
	varBsFormSelectBgIcon,
	varBsFormSelectBgImg,
	varBsFormSwitchBg,
	varBsFormValidBorderColor,
	varBsFormValidColor,
} from '../../../theme-contract/forms/_vars.css'
import { varBsGutterX, varBsGutterY } from '../../../theme-contract/layout/container.css'
import {
	varBsAccordionActiveBg,
	varBsAccordionActiveColor,
	varBsAccordionBg,
	varBsAccordionBodyPaddingX,
	varBsAccordionBodyPaddingY,
	varBsAccordionBorderColor,
	varBsAccordionBorderRadius,
	varBsAccordionBorderWidth,
	varBsAccordionBtnActiveIcon,
	varBsAccordionBtnBg,
	varBsAccordionBtnColor,
	varBsAccordionBtnFocusBoxShadow,
	varBsAccordionBtnIcon,
	varBsAccordionBtnIconTransform,
	varBsAccordionBtnIconTransition,
	varBsAccordionBtnIconWidth,
	varBsAccordionBtnPaddingX,
	varBsAccordionBtnPaddingY,
	varBsAccordionColor,
	varBsAccordionInnerBorderRadius,
	varBsAccordionTransition,
} from '../../../theme-contract/ui/accordion/_vars.css'
import {
	varBsAlertBg,
	varBsAlertBorder,
	varBsAlertBorderColor,
	varBsAlertBorderRadius,
	varBsAlertColor,
	varBsAlertLinkColor,
	varBsAlertMarginBottom,
	varBsAlertPaddingX,
	varBsAlertPaddingY,
	varBsBtnCloseBg,
	varBsBtnCloseColor,
	varBsBtnCloseDisabledOpacity,
	varBsBtnCloseFocusOpacity,
	varBsBtnCloseFocusShadow,
	varBsBtnCloseHoverOpacity,
	varBsBtnCloseOpacity,
} from '../../../theme-contract/ui/alerts/_vars.css'
import {
	varBsBadgeBorderRadius,
	varBsBadgeColor,
	varBsBadgeFontSize,
	varBsBadgeFontWeight,
	varBsBadgePaddingX,
	varBsBadgePaddingY,
} from '../../../theme-contract/ui/badge/_vars.css'
import {
	varBsBreadcrumbBg,
	varBsBreadcrumbBorderRadius,
	varBsBreadcrumbDivider,
	varBsBreadcrumbDividerColor,
	varBsBreadcrumbItemActiveColor,
	varBsBreadcrumbItemPaddingX,
	varBsBreadcrumbMarginBottom,
	varBsBreadcrumbPaddingX,
	varBsBreadcrumbPaddingY,
} from '../../../theme-contract/ui/breadcrumb/_vars.css'
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveBoxShadow,
	varBsBtnActiveColor,
	varBsBtnBg,
	varBsBtnBorderColor,
	varBsBtnBorderRadius,
	varBsBtnBorderWidth,
	varBsBtnBoxShadow,
	varBsBtnColor,
	varBsBtnDisabledBg,
	varBsBtnDisabledBorderColor,
	varBsBtnDisabledColor,
	varBsBtnDisabledOpacity,
	varBsBtnFocusBoxShadow,
	varBsBtnFocusBoxShadowRgb,
	varBsBtnFontFamily,
	varBsBtnFontSize,
	varBsBtnFontWeight,
	varBsBtnHoverBg,
	varBsBtnHoverBorderColor,
	varBsBtnHoverColor,
	varBsBtnLineHeight,
	varBsBtnPaddingX,
	varBsBtnPaddingY,
} from '../../../theme-contract/ui/buttons/_vars.css'
import {
	varBsCardBg,
	varBsCardBorderColor,
	varBsCardBorderRadius,
	varBsCardBorderWidth,
	varBsCardBoxShadow,
	varBsCardCapBg,
	varBsCardCapColor,
	varBsCardCapPaddingX,
	varBsCardCapPaddingY,
	varBsCardColor,
	varBsCardGroupMargin,
	varBsCardImgOverlayPadding,
	varBsCardInnerBorderRadius,
	varBsCardSpacerX,
	varBsCardSpacerY,
	varBsCardSubtitleColor,
	varBsCardTitleColor,
	varBsCardTitleSpacerY,
} from '../../../theme-contract/ui/card/_vars.css'
import { varBsCarouselCaptionColor, varBsCarouselControlIconFilter, varBsCarouselIndicatorActiveBg } from '../../../theme-contract/ui/carousel/_vars.css'
import {
	varBsDropdownBg,
	varBsDropdownBorderColor,
	varBsDropdownBorderRadius,
	varBsDropdownBorderWidth,
	varBsDropdownBoxShadow,
	varBsDropdownColor,
	varBsDropdownDividerBg,
	varBsDropdownDividerMarginY,
	varBsDropdownFontSize,
	varBsDropdownHeaderColor,
	varBsDropdownHeaderPaddingX,
	varBsDropdownHeaderPaddingY,
	varBsDropdownInnerBorderRadius,
	varBsDropdownItemPaddingX,
	varBsDropdownItemPaddingY,
	varBsDropdownLinkActiveBg,
	varBsDropdownLinkActiveColor,
	varBsDropdownLinkColor,
	varBsDropdownLinkDisabledColor,
	varBsDropdownLinkHoverBg,
	varBsDropdownLinkHoverColor,
	varBsDropdownMinWidth,
	varBsDropdownPaddingX,
	varBsDropdownPaddingY,
	varBsDropdownSpacer,
	varBsDropdownZindex,
} from '../../../theme-contract/ui/dropdowns/_vars.css'
import {
	varBsListGroupActionActiveBg,
	varBsListGroupActionActiveColor,
	varBsListGroupActionColor,
	varBsListGroupActionHoverBg,
	varBsListGroupActionHoverColor,
	varBsListGroupActiveBg,
	varBsListGroupActiveBorderColor,
	varBsListGroupActiveColor,
	varBsListGroupBg,
	varBsListGroupBorderColor,
	varBsListGroupBorderRadius,
	varBsListGroupBorderWidth,
	varBsListGroupColor,
	varBsListGroupDisabledBg,
	varBsListGroupDisabledColor,
	varBsListGroupItemPaddingX,
	varBsListGroupItemPaddingY,
} from '../../../theme-contract/ui/list-group/_vars.css'
import {
	varBsBackdropBg,
	varBsBackdropOpacity,
	varBsBackdropZindex,
	varBsModalBg,
	varBsModalBorderColor,
	varBsModalBorderRadius,
	varBsModalBorderWidth,
	varBsModalBoxShadow,
	varBsModalColor,
	varBsModalFooterBg,
	varBsModalFooterBorderColor,
	varBsModalFooterBorderWidth,
	varBsModalFooterGap,
	varBsModalHeaderBorderColor,
	varBsModalHeaderBorderWidth,
	varBsModalHeaderPadding,
	varBsModalHeaderPaddingX,
	varBsModalHeaderPaddingY,
	varBsModalInnerBorderRadius,
	varBsModalMargin,
	varBsModalPadding,
	varBsModalTitleLineHeight,
	varBsModalWidth,
	varBsModalZindex,
} from '../../../theme-contract/ui/modal/_vars.css'
import {
	varBsNavbarActiveColor,
	varBsNavbarBrandColor,
	varBsNavbarBrandFontSize,
	varBsNavbarBrandHoverColor,
	varBsNavbarBrandMarginEnd,
	varBsNavbarBrandPaddingY,
	varBsNavbarColor,
	varBsNavbarDisabledColor,
	varBsNavbarHoverColor,
	varBsNavbarNavLinkPaddingX,
	varBsNavbarPaddingX,
	varBsNavbarPaddingY,
	varBsNavbarTogglerBorderColor,
	varBsNavbarTogglerBorderRadius,
	varBsNavbarTogglerFocusWidth,
	varBsNavbarTogglerFontSize,
	varBsNavbarTogglerIconBg,
	varBsNavbarTogglerPaddingX,
	varBsNavbarTogglerPaddingY,
	varBsNavbarTogglerTransition,
} from '../../../theme-contract/ui/navbar/_vars.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
	varBsNavLinkFontSize,
	varBsNavLinkFontWeight,
	varBsNavLinkHoverColor,
	varBsNavLinkPaddingX,
	varBsNavLinkPaddingY,
	varBsNavPillsBorderRadius,
	varBsNavPillsLinkActiveBg,
	varBsNavPillsLinkActiveColor,
	varBsNavTabsBorderColor,
	varBsNavTabsBorderRadius,
	varBsNavTabsBorderWidth,
	varBsNavTabsLinkActiveBg,
	varBsNavTabsLinkActiveBorderColor,
	varBsNavTabsLinkActiveColor,
	varBsNavTabsLinkHoverBorderColor,
} from '../../../theme-contract/ui/navs/_vars.css'
import {
	varBsPaginationActiveBg,
	varBsPaginationActiveBorderColor,
	varBsPaginationActiveColor,
	varBsPaginationBg,
	varBsPaginationBorderColor,
	varBsPaginationBorderRadius,
	varBsPaginationBorderWidth,
	varBsPaginationColor,
	varBsPaginationDisabledBg,
	varBsPaginationDisabledBorderColor,
	varBsPaginationDisabledColor,
	varBsPaginationFocusBg,
	varBsPaginationFocusBoxShadow,
	varBsPaginationFocusColor,
	varBsPaginationFontSize,
	varBsPaginationHoverBg,
	varBsPaginationHoverBorderColor,
	varBsPaginationHoverColor,
	varBsPaginationPaddingX,
	varBsPaginationPaddingY,
} from '../../../theme-contract/ui/pagination/_vars.css'
import {
	varBsPopoverArrowBorder,
	varBsPopoverArrowHeight,
	varBsPopoverArrowWidth,
	varBsPopoverBg,
	varBsPopoverBodyColor,
	varBsPopoverBodyPaddingX,
	varBsPopoverBodyPaddingY,
	varBsPopoverBorderColor,
	varBsPopoverBorderRadius,
	varBsPopoverBorderWidth,
	varBsPopoverBoxShadow,
	varBsPopoverFontSize,
	varBsPopoverHeaderBg,
	varBsPopoverHeaderColor,
	varBsPopoverHeaderFontSize,
	varBsPopoverHeaderPaddingX,
	varBsPopoverHeaderPaddingY,
	varBsPopoverInnerBorderRadius,
	varBsPopoverMaxWidth,
	varBsPopoverZindex,
} from '../../../theme-contract/ui/popovers/_vars.css'
import {
	varBsProgressBarBg,
	varBsProgressBarColor,
	varBsProgressBarTransition,
	varBsProgressBg,
	varBsProgressBorderRadius,
	varBsProgressBoxShadow,
	varBsProgressFontSize,
	varBsProgressHeight,
} from '../../../theme-contract/ui/progress/_vars.css'
import {
	varBsSpinnerAnimationName,
	varBsSpinnerAnimationSpeed,
	varBsSpinnerBorderWidth,
	varBsSpinnerHeight,
	varBsSpinnerVerticalAlign,
	varBsSpinnerWidth,
} from '../../../theme-contract/ui/spinners/_vars.css'
import {
	varBsToastBg,
	varBsToastBorderColor,
	varBsToastBorderRadius,
	varBsToastBorderWidth,
	varBsToastBoxShadow,
	varBsToastColor,
	varBsToastFontSize,
	varBsToastHeaderBg,
	varBsToastHeaderBorderColor,
	varBsToastHeaderColor,
	varBsToastMaxWidth,
	varBsToastPaddingX,
	varBsToastPaddingY,
	varBsToastSpacing,
	varBsToastZindex,
} from '../../../theme-contract/ui/toasts/_vars.css'
import {
	varBsTooltipArrowHeight,
	varBsTooltipArrowWidth,
	varBsTooltipBg,
	varBsTooltipBorderRadius,
	varBsTooltipColor,
	varBsTooltipFontSize,
	varBsTooltipMargin,
	varBsTooltipMaxWidth,
	varBsTooltipOpacity,
	varBsTooltipPaddingX,
	varBsTooltipPaddingY,
	varBsTooltipZindex,
} from '../../../theme-contract/ui/tooltips/_vars.css'
import {
	varBsAspectRatio,
	varBsBgOpacity,
	varBsBorderOpacity,
	varBsBtnCloseFilter,
	varBsCardHeight,
	varBsLinkOpacity,
	varBsLinkUnderlineOpacity,
	varBsNavUnderlineBorderWidth,
	varBsNavUnderlineGap,
	varBsNavUnderlineLinkActiveColor,
	varBsOffcanvasBg,
	varBsOffcanvasBorderColor,
	varBsOffcanvasBorderWidth,
	varBsOffcanvasBoxShadow,
	varBsOffcanvasColor,
	varBsOffcanvasHeight,
	varBsOffcanvasPaddingX,
	varBsOffcanvasPaddingY,
	varBsOffcanvasTitleLineHeight,
	varBsOffcanvasTransition,
	varBsOffcanvasWidth,
	varBsOffcanvasZindex,
	varBsPosition,
	varBsTextOpacity,
} from '../../../theme-contract/utilities/generated/_vars.css'

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
	elOption,
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

import { blockquoteFooter, lead, smallText } from '../../../theme-contract/contents/basic/contract.css'
import {
	display1,
	display2,
	display3,
	display4,
	display5,
	display6,
} from '../../../theme-contract/contents/display/contract.css'
import {
	figure,
	figureCaption,
	figureImg,
	imgFluid,
	imgThumbnail,
	rounded,
} from '../../../theme-contract/contents/images/contract.css'
import {
	listBase,
	listIndented,
	listInline,
	listInlineItem,
	listNested,
	listUnstyled,
} from '../../../theme-contract/contents/lists/contract.css'
import {
	table,
	tableActive,
	tableBordered,
	tableBorderless,
	tableDanger,
	tableDark,
	tableGroupDivider,
	tableHover,
	tableInfo,
	tableLight,
	tablePrimary,
	tableResponsive,
	tableResponsiveLg,
	tableResponsiveMd,
	tableResponsiveSm,
	tableResponsiveXl,
	tableResponsiveXxl,
	tableSecondary,
	tableSm,
	tableStriped,
	tableStripedColumns,
	tableSuccess,
	tableWarning,
} from '../../../theme-contract/contents/tables/contract.css'
import {
	formCheck,
	formCheckInput,
	formCheckLabel,
	formControl,
	formControlLg,
	formControlSm,
	formFloating,
	formLabel,
	formRange,
	formSelect,
	formSelectLg,
	formSelectSm,
	formSwitch,
	formText,
	hasValidation,
	inputGroup,
	inputGroupText,
	invalidFeedback,
	isInvalid,
	isValid,
	legend,
	legendClear,
	validFeedback,
	wasValidated,
} from '../../../theme-contract/forms/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	accordionFlush,
	active,
	alignBaseline,
	alignBottom,
	alignContentAround,
	alignContentBetween,
	alignContentCenter,
	alignContentEnd,
	alignContentLgAround,
	alignContentLgBetween,
	alignContentLgCenter,
	alignContentLgEnd,
	alignContentLgStart,
	alignContentLgStretch,
	alignContentMdAround,
	alignContentMdBetween,
	alignContentMdCenter,
	alignContentMdEnd,
	alignContentMdStart,
	alignContentMdStretch,
	alignContentSmAround,
	alignContentSmBetween,
	alignContentSmCenter,
	alignContentSmEnd,
	alignContentSmStart,
	alignContentSmStretch,
	alignContentStart,
	alignContentStretch,
	alignContentXlAround,
	alignContentXlBetween,
	alignContentXlCenter,
	alignContentXlEnd,
	alignContentXlStart,
	alignContentXlStretch,
	alignContentXxlAround,
	alignContentXxlBetween,
	alignContentXxlCenter,
	alignContentXxlEnd,
	alignContentXxlStart,
	alignContentXxlStretch,
	alignItemsBaseline,
	alignItemsEnd,
	alignItemsLgBaseline,
	alignItemsLgCenter,
	alignItemsLgEnd,
	alignItemsLgStart,
	alignItemsLgStretch,
	alignItemsMdBaseline,
	alignItemsMdCenter,
	alignItemsMdEnd,
	alignItemsMdStart,
	alignItemsMdStretch,
	alignItemsSmBaseline,
	alignItemsSmCenter,
	alignItemsSmEnd,
	alignItemsSmStart,
	alignItemsSmStretch,
	alignItemsStart,
	alignItemsStretch,
	alignItemsXlBaseline,
	alignItemsXlCenter,
	alignItemsXlEnd,
	alignItemsXlStart,
	alignItemsXlStretch,
	alignItemsXxlBaseline,
	alignItemsXxlCenter,
	alignItemsXxlEnd,
	alignItemsXxlStart,
	alignItemsXxlStretch,
	alignMiddle,
	alignSelfAuto,
	alignSelfBaseline,
	alignSelfCenter,
	alignSelfEnd,
	alignSelfLgAuto,
	alignSelfLgBaseline,
	alignSelfLgCenter,
	alignSelfLgEnd,
	alignSelfLgStart,
	alignSelfLgStretch,
	alignSelfMdAuto,
	alignSelfMdBaseline,
	alignSelfMdCenter,
	alignSelfMdEnd,
	alignSelfMdStart,
	alignSelfMdStretch,
	alignSelfSmAuto,
	alignSelfSmBaseline,
	alignSelfSmCenter,
	alignSelfSmEnd,
	alignSelfSmStart,
	alignSelfSmStretch,
	alignSelfStretch,
	alignSelfXlAuto,
	alignSelfXlBaseline,
	alignSelfXlCenter,
	alignSelfXlEnd,
	alignSelfXlStart,
	alignSelfXlStretch,
	alignSelfXxlAuto,
	alignSelfXxlBaseline,
	alignSelfXxlCenter,
	alignSelfXxlEnd,
	alignSelfXxlStart,
	alignSelfXxlStretch,
	alignTextBottom,
	alignTextTop,
	alignTop,
	bgBlack,
	bgBody,
	bgBodySecondary,
	bgBodyTertiary,
	bgDanger,
	bgDangerSubtle,
	bgDarkSubtle,
	bgGradient,
	bgInfo,
	bgInfoSubtle,
	bgLight,
	bgLightSubtle,
	bgOpacity10,
	bgOpacity100,
	bgOpacity25,
	bgOpacity50,
	bgOpacity75,
	bgPrimary,
	bgPrimarySubtle,
	bgSecondary,
	bgSecondarySubtle,
	bgSuccess,
	bgSuccessSubtle,
	bgTransparent,
	bgWarning,
	bgWarningSubtle,
	bgWhite,
	bi,
	border,
	border0,
	border1,
	border2,
	border3,
	border4,
	border5,
	borderBlack,
	borderBottom,
	borderBottom0,
	borderDanger,
	borderDangerSubtle,
	borderDark,
	borderDarkSubtle,
	borderEnd,
	borderEnd0,
	borderInfo,
	borderInfoSubtle,
	borderLight,
	borderLightSubtle,
	borderOpacity10,
	borderOpacity100,
	borderOpacity25,
	borderOpacity50,
	borderOpacity75,
	borderPrimary,
	borderPrimarySubtle,
	borderSecondary,
	borderSecondarySubtle,
	borderStart,
	borderStart0,
	borderSuccess,
	borderSuccessSubtle,
	borderTop,
	borderTop0,
	borderWarning,
	borderWarningSubtle,
	borderWhite,
	bottom0,
	bottom100,
	bottom50,
	bsTooltipAuto,
	bsTooltipBottom,
	bsTooltipEnd,
	bsTooltipStart,
	bsTooltipTop,
	btnClose,
	btnCloseWhite,
	btnGroupLg,
	btnGroupSm,
	btnGroupVertical,
	captionTop,
	cardGroup,
	cardHeaderPills,
	cardImgOverlay,
	clearfix,
	clsBlockquote,
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
	clsSmall,
	col1,
	col10,
	col11,
	col12,
	col2,
	col3,
	col4,
	col5,
	col6,
	col7,
	col8,
	col9,
	colAuto,
	colFormLabel,
	colFormLabelLg,
	colFormLabelSm,
	colLg,
	colLg1,
	colLg10,
	colLg11,
	colLg12,
	colLg2,
	colLg3,
	colLg4,
	colLg5,
	colLg6,
	colLg7,
	colLg8,
	colLg9,
	colLgAuto,
	colMd,
	colMd1,
	colMd10,
	colMd11,
	colMd12,
	colMd7,
	colMd9,
	colMdAuto,
	colSm,
	colSm1,
	colSm10,
	colSm11,
	colSm12,
	colSm2,
	colSm3,
	colSm4,
	colSm5,
	colSm7,
	colSm8,
	colSm9,
	colSmAuto,
	colXl,
	colXl1,
	colXl10,
	colXl11,
	colXl12,
	colXl2,
	colXl3,
	colXl4,
	colXl5,
	colXl6,
	colXl7,
	colXl8,
	colXl9,
	colXlAuto,
	colXxl,
	colXxl1,
	colXxl10,
	colXxl11,
	colXxl12,
	colXxl2,
	colXxl3,
	colXxl4,
	colXxl5,
	colXxl6,
	colXxl7,
	colXxl8,
	colXxl9,
	colXxlAuto,
	collapseHorizontal,
	collapsed,
	collapsing,
	columnGap0,
	columnGap1,
	columnGap2,
	columnGap3,
	columnGap4,
	columnGap5,
	columnGapLg0,
	columnGapLg1,
	columnGapLg2,
	columnGapLg3,
	columnGapLg4,
	columnGapLg5,
	columnGapMd0,
	columnGapMd1,
	columnGapMd2,
	columnGapMd3,
	columnGapMd4,
	columnGapMd5,
	columnGapSm0,
	columnGapSm1,
	columnGapSm2,
	columnGapSm3,
	columnGapSm4,
	columnGapSm5,
	columnGapXl0,
	columnGapXl1,
	columnGapXl2,
	columnGapXl3,
	columnGapXl4,
	columnGapXl5,
	columnGapXxl0,
	columnGapXxl1,
	columnGapXxl2,
	columnGapXxl3,
	columnGapXxl4,
	columnGapXxl5,
	container,
	containerLg,
	containerMd,
	containerSm,
	containerXl,
	containerXxl,
	dBlock,
	dGrid,
	dInline,
	dInlineBlock,
	dInlineFlex,
	dInlineGrid,
	dLgBlock,
	dLgFlex,
	dLgGrid,
	dLgInline,
	dLgInlineBlock,
	dLgInlineFlex,
	dLgInlineGrid,
	dLgNone,
	dLgTable,
	dLgTableCell,
	dLgTableRow,
	dMdBlock,
	dMdFlex,
	dMdGrid,
	dMdInline,
	dMdInlineBlock,
	dMdInlineFlex,
	dMdInlineGrid,
	dMdNone,
	dMdTable,
	dMdTableCell,
	dMdTableRow,
	dNone,
	dPrintBlock,
	dPrintFlex,
	dPrintGrid,
	dPrintInline,
	dPrintInlineBlock,
	dPrintInlineFlex,
	dPrintInlineGrid,
	dPrintNone,
	dPrintTable,
	dPrintTableCell,
	dPrintTableRow,
	dSmBlock,
	dSmFlex,
	dSmGrid,
	dSmInline,
	dSmInlineBlock,
	dSmInlineFlex,
	dSmInlineGrid,
	dSmNone,
	dSmTable,
	dSmTableCell,
	dSmTableRow,
	dTable,
	dTableCell,
	dTableRow,
	dXlBlock,
	dXlFlex,
	dXlGrid,
	dXlInline,
	dXlInlineBlock,
	dXlInlineFlex,
	dXlInlineGrid,
	dXlNone,
	dXlTable,
	dXlTableCell,
	dXlTableRow,
	dXxlBlock,
	dXxlFlex,
	dXxlGrid,
	dXxlInline,
	dXxlInlineBlock,
	dXxlInlineFlex,
	dXxlInlineGrid,
	dXxlNone,
	dXxlTable,
	dXxlTableCell,
	dXxlTableRow,
	disabled,
	dropdownMenuLgEnd,
	dropdownMenuLgStart,
	dropdownMenuMdEnd,
	dropdownMenuMdStart,
	dropdownMenuSmEnd,
	dropdownMenuSmStart,
	dropdownMenuXlEnd,
	dropdownMenuXlStart,
	dropdownMenuXxlEnd,
	dropdownMenuXxlStart,
	end0,
	end100,
	end50,
	fixedBottom,
	fixedTop,
	flexColumn,
	flexColumnReverse,
	flexFill,
	flexGrow0,
	flexGrow1,
	flexLgColumn,
	flexLgColumnReverse,
	flexLgFill,
	flexLgGrow0,
	flexLgGrow1,
	flexLgNowrap,
	flexLgRow,
	flexLgRowReverse,
	flexLgShrink0,
	flexLgShrink1,
	flexLgWrap,
	flexLgWrapReverse,
	flexMdColumn,
	flexMdColumnReverse,
	flexMdFill,
	flexMdGrow0,
	flexMdGrow1,
	flexMdNowrap,
	flexMdRow,
	flexMdRowReverse,
	flexMdShrink0,
	flexMdShrink1,
	flexMdWrap,
	flexMdWrapReverse,
	flexNowrap,
	flexRow,
	flexRowReverse,
	flexShrink0,
	flexShrink1,
	flexSmColumn,
	flexSmColumnReverse,
	flexSmFill,
	flexSmGrow0,
	flexSmGrow1,
	flexSmNowrap,
	flexSmRow,
	flexSmRowReverse,
	flexSmShrink0,
	flexSmShrink1,
	flexSmWrap,
	flexSmWrapReverse,
	flexWrapReverse,
	flexXlColumn,
	flexXlColumnReverse,
	flexXlFill,
	flexXlGrow0,
	flexXlGrow1,
	flexXlNowrap,
	flexXlRow,
	flexXlRowReverse,
	flexXlShrink0,
	flexXlShrink1,
	flexXlWrap,
	flexXlWrapReverse,
	flexXxlColumn,
	flexXxlColumnReverse,
	flexXxlFill,
	flexXxlGrow0,
	flexXxlGrow1,
	flexXxlNowrap,
	flexXxlRow,
	flexXxlRowReverse,
	flexXxlShrink0,
	flexXxlShrink1,
	flexXxlWrap,
	flexXxlWrapReverse,
	floatEnd,
	floatLgEnd,
	floatLgNone,
	floatLgStart,
	floatMdEnd,
	floatMdNone,
	floatMdStart,
	floatNone,
	floatSmEnd,
	floatSmNone,
	floatSmStart,
	floatStart,
	floatXlEnd,
	floatXlNone,
	floatXlStart,
	floatXxlEnd,
	floatXxlNone,
	floatXxlStart,
	focusRing,
	focusRingDanger,
	focusRingDark,
	focusRingInfo,
	focusRingLight,
	focusRingPrimary,
	focusRingSecondary,
	focusRingSuccess,
	focusRingWarning,
	fontMonospace,
	formCheckInline,
	formCheckReverse,
	formControlColor,
	formControlPlaintext,
	fs1,
	fs2,
	fs3,
	fs4,
	fs5,
	fs6,
	fstItalic,
	fstNormal,
	fwBolder,
	fwLight,
	fwLighter,
	fwMedium,
	fwNormal,
	fwSemibold,
	g1,
	g2,
	g5,
	gLg0,
	gLg1,
	gLg2,
	gLg3,
	gLg4,
	gLg5,
	gMd0,
	gMd1,
	gMd2,
	gMd3,
	gMd4,
	gMd5,
	gSm0,
	gSm1,
	gSm2,
	gSm3,
	gSm4,
	gSm5,
	gXl0,
	gXl1,
	gXl2,
	gXl3,
	gXl4,
	gXl5,
	gXxl0,
	gXxl1,
	gXxl2,
	gXxl3,
	gXxl4,
	gXxl5,
	gap0,
	gap1,
	gap2,
	gap3,
	gap4,
	gap5,
	gapLg0,
	gapLg1,
	gapLg2,
	gapLg3,
	gapLg4,
	gapLg5,
	gapMd0,
	gapMd1,
	gapMd2,
	gapMd3,
	gapMd4,
	gapMd5,
	gapSm0,
	gapSm1,
	gapSm2,
	gapSm3,
	gapSm4,
	gapSm5,
	gapXl0,
	gapXl1,
	gapXl2,
	gapXl3,
	gapXl4,
	gapXl5,
	gapXxl0,
	gapXxl1,
	gapXxl2,
	gapXxl3,
	gapXxl4,
	gapXxl5,
	gx0,
	gx1,
	gx2,
	gx3,
	gx4,
	gx5,
	gxLg0,
	gxLg1,
	gxLg2,
	gxLg3,
	gxLg4,
	gxLg5,
	gxMd0,
	gxMd1,
	gxMd2,
	gxMd3,
	gxMd4,
	gxMd5,
	gxSm0,
	gxSm1,
	gxSm2,
	gxSm3,
	gxSm4,
	gxSm5,
	gxXl0,
	gxXl1,
	gxXl2,
	gxXl3,
	gxXl4,
	gxXl5,
	gxXxl0,
	gxXxl1,
	gxXxl2,
	gxXxl3,
	gxXxl4,
	gxXxl5,
	gy0,
	gy1,
	gy2,
	gy3,
	gy4,
	gy5,
	gyLg0,
	gyLg1,
	gyLg2,
	gyLg3,
	gyLg4,
	gyLg5,
	gyMd0,
	gyMd1,
	gyMd2,
	gyMd3,
	gyMd4,
	gyMd5,
	gySm0,
	gySm1,
	gySm2,
	gySm3,
	gySm4,
	gySm5,
	gyXl0,
	gyXl1,
	gyXl2,
	gyXl3,
	gyXl4,
	gyXl5,
	gyXxl0,
	gyXxl1,
	gyXxl2,
	gyXxl3,
	gyXxl4,
	gyXxl5,
	h100,
	h25,
	h50,
	h75,
	hAuto,
	hiding,
	hstack,
	iconLink,
	iconLinkHover,
	initialism,
	inputGroupLg,
	inputGroupSm,
	invalidTooltip,
	invisible,
	justifyContentAround,
	justifyContentCenter,
	justifyContentEnd,
	justifyContentEvenly,
	justifyContentLgAround,
	justifyContentLgBetween,
	justifyContentLgCenter,
	justifyContentLgEnd,
	justifyContentLgEvenly,
	justifyContentLgStart,
	justifyContentMdAround,
	justifyContentMdBetween,
	justifyContentMdCenter,
	justifyContentMdEnd,
	justifyContentMdEvenly,
	justifyContentMdStart,
	justifyContentSmAround,
	justifyContentSmBetween,
	justifyContentSmCenter,
	justifyContentSmEnd,
	justifyContentSmEvenly,
	justifyContentSmStart,
	justifyContentStart,
	justifyContentXlAround,
	justifyContentXlBetween,
	justifyContentXlCenter,
	justifyContentXlEnd,
	justifyContentXlEvenly,
	justifyContentXlStart,
	justifyContentXxlAround,
	justifyContentXxlBetween,
	justifyContentXxlCenter,
	justifyContentXxlEnd,
	justifyContentXxlEvenly,
	justifyContentXxlStart,
	lh1,
	lhBase,
	lhLg,
	lhSm,
	linkBodyEmphasis,
	linkDanger,
	linkDark,
	linkInfo,
	linkLight,
	linkOffset1,
	linkOffset1Hover,
	linkOffset2,
	linkOffset2Hover,
	linkOffset3,
	linkOffset3Hover,
	linkOpacity10,
	linkOpacity100,
	linkOpacity100Hover,
	linkOpacity10Hover,
	linkOpacity25,
	linkOpacity25Hover,
	linkOpacity50,
	linkOpacity50Hover,
	linkOpacity75,
	linkOpacity75Hover,
	linkPrimary,
	linkSecondary,
	linkSuccess,
	linkUnderline,
	linkUnderlineDanger,
	linkUnderlineDark,
	linkUnderlineInfo,
	linkUnderlineLight,
	linkUnderlineOpacity0,
	linkUnderlineOpacity0Hover,
	linkUnderlineOpacity10,
	linkUnderlineOpacity100,
	linkUnderlineOpacity100Hover,
	linkUnderlineOpacity10Hover,
	linkUnderlineOpacity25,
	linkUnderlineOpacity25Hover,
	linkUnderlineOpacity50,
	linkUnderlineOpacity50Hover,
	linkUnderlineOpacity75,
	linkUnderlineOpacity75Hover,
	linkUnderlinePrimary,
	linkUnderlineSecondary,
	linkUnderlineSuccess,
	linkUnderlineWarning,
	linkWarning,
	listGroupHorizontal,
	listGroupHorizontalLg,
	listGroupHorizontalMd,
	listGroupHorizontalSm,
	listGroupHorizontalXl,
	listGroupHorizontalXxl,
	listGroupNumbered,
	m0,
	m1,
	m2,
	m3,
	m4,
	m5,
	mAuto,
	mLg0,
	mLg1,
	mLg2,
	mLg3,
	mLg4,
	mLg5,
	mLgAuto,
	mMd0,
	mMd1,
	mMd2,
	mMd3,
	mMd4,
	mMd5,
	mMdAuto,
	mSm0,
	mSm1,
	mSm2,
	mSm3,
	mSm4,
	mSm5,
	mSmAuto,
	mXl0,
	mXl1,
	mXl2,
	mXl3,
	mXl4,
	mXl5,
	mXlAuto,
	mXxl0,
	mXxl1,
	mXxl2,
	mXxl3,
	mXxl4,
	mXxl5,
	mXxlAuto,
	mark,
	mb0,
	mb1,
	mb4,
	mb5,
	mbAuto,
	mbLg1,
	mbLg2,
	mbLg3,
	mbLg4,
	mbLg5,
	mbLgAuto,
	mbMd0,
	mbMd1,
	mbMd2,
	mbMd3,
	mbMd4,
	mbMd5,
	mbMdAuto,
	mbSm0,
	mbSm1,
	mbSm2,
	mbSm3,
	mbSm4,
	mbSm5,
	mbSmAuto,
	mbXl0,
	mbXl1,
	mbXl3,
	mbXl4,
	mbXlAuto,
	mbXxl0,
	mbXxl1,
	mbXxl2,
	mbXxl3,
	mbXxl4,
	mbXxl5,
	mbXxlAuto,
	me0,
	me1,
	me3,
	me4,
	me5,
	meLg0,
	meLg1,
	meLg2,
	meLg3,
	meLg4,
	meLg5,
	meLgAuto,
	meMd0,
	meMd1,
	meMd2,
	meMd3,
	meMd4,
	meMd5,
	meMdAuto,
	meSm0,
	meSm1,
	meSm2,
	meSm3,
	meSm4,
	meSm5,
	meSmAuto,
	meXl0,
	meXl1,
	meXl2,
	meXl3,
	meXl4,
	meXl5,
	meXlAuto,
	meXxl0,
	meXxl1,
	meXxl2,
	meXxl3,
	meXxl4,
	meXxl5,
	meXxlAuto,
	mh100,
	minVh100,
	minVw100,
	modalFullscreenLgDown,
	modalFullscreenMdDown,
	modalFullscreenSmDown,
	modalFullscreenXlDown,
	modalFullscreenXxlDown,
	modalLg,
	modalSm,
	modalStatic,
	modalXl,
	ms0,
	ms1,
	ms2,
	ms3,
	ms4,
	ms5,
	msAuto,
	msLg0,
	msLg1,
	msLg2,
	msLg3,
	msLg4,
	msLg5,
	msLgAuto,
	msMd0,
	msMd1,
	msMd2,
	msMd3,
	msMd4,
	msMd5,
	msMdAuto,
	msSm0,
	msSm1,
	msSm2,
	msSm3,
	msSm4,
	msSm5,
	msSmAuto,
	msXl0,
	msXl1,
	msXl2,
	msXl3,
	msXl4,
	msXl5,
	msXlAuto,
	msXxl0,
	msXxl1,
	msXxl2,
	msXxl3,
	msXxl4,
	msXxl5,
	msXxlAuto,
	mt0,
	mt1,
	mt2,
	mt3,
	mt4,
	mtAuto,
	mtLg0,
	mtLg1,
	mtLg2,
	mtLg3,
	mtLg4,
	mtLg5,
	mtLgAuto,
	mtMd0,
	mtMd1,
	mtMd2,
	mtMd3,
	mtMd4,
	mtMd5,
	mtMdAuto,
	mtSm0,
	mtSm1,
	mtSm2,
	mtSm3,
	mtSm4,
	mtSm5,
	mtSmAuto,
	mtXl1,
	mtXl2,
	mtXl3,
	mtXl4,
	mtXl5,
	mtXlAuto,
	mtXxl0,
	mtXxl1,
	mtXxl2,
	mtXxl3,
	mtXxl4,
	mtXxl5,
	mtXxlAuto,
	mw100,
	mx0,
	mx1,
	mx2,
	mx3,
	mx4,
	mx5,
	mxAuto,
	mxLg0,
	mxLg1,
	mxLg2,
	mxLg3,
	mxLg4,
	mxLg5,
	mxLgAuto,
	mxMd0,
	mxMd1,
	mxMd2,
	mxMd3,
	mxMd4,
	mxMd5,
	mxMdAuto,
	mxSm0,
	mxSm1,
	mxSm2,
	mxSm3,
	mxSm4,
	mxSm5,
	mxSmAuto,
	mxXl0,
	mxXl1,
	mxXl2,
	mxXl3,
	mxXl4,
	mxXl5,
	mxXlAuto,
	mxXxl0,
	mxXxl1,
	mxXxl2,
	mxXxl3,
	mxXxl4,
	mxXxl5,
	mxXxlAuto,
	my0,
	my1,
	my2,
	my3,
	my4,
	my5,
	myAuto,
	myLg0,
	myLg1,
	myLg2,
	myLg3,
	myLg4,
	myLg5,
	myLgAuto,
	myMd0,
	myMd1,
	myMd2,
	myMd3,
	myMd4,
	myMd5,
	myMdAuto,
	mySm0,
	mySm1,
	mySm2,
	mySm3,
	mySm4,
	mySm5,
	mySmAuto,
	myXl0,
	myXl1,
	myXl2,
	myXl3,
	myXl4,
	myXl5,
	myXlAuto,
	myXxl0,
	myXxl1,
	myXxl2,
	myXxl3,
	myXxl4,
	myXxl5,
	myXxlAuto,
	navFill,
	navJustified,
	navUnderline,
	navbarDark,
	navbarExpand,
	navbarExpandMd,
	navbarExpandSm,
	navbarExpandXl,
	navbarExpandXxl,
	objectFitContain,
	objectFitCover,
	objectFitFill,
	objectFitLgContain,
	objectFitLgCover,
	objectFitLgFill,
	objectFitLgNone,
	objectFitLgScale,
	objectFitMdContain,
	objectFitMdCover,
	objectFitMdFill,
	objectFitMdNone,
	objectFitMdScale,
	objectFitNone,
	objectFitScale,
	objectFitSmContain,
	objectFitSmCover,
	objectFitSmFill,
	objectFitSmNone,
	objectFitSmScale,
	objectFitXlContain,
	objectFitXlCover,
	objectFitXlFill,
	objectFitXlNone,
	objectFitXlScale,
	objectFitXxlContain,
	objectFitXxlCover,
	objectFitXxlFill,
	objectFitXxlNone,
	objectFitXxlScale,
	offcanvas,
	offcanvasBackdrop,
	offcanvasBody,
	offcanvasBottom,
	offcanvasEnd,
	offcanvasHeader,
	offcanvasLg,
	offcanvasMd,
	offcanvasSm,
	offcanvasStart,
	offcanvasTitle,
	offcanvasTop,
	offcanvasXl,
	offcanvasXxl,
	offset1,
	offset10,
	offset11,
	offset2,
	offset3,
	offset4,
	offset5,
	offset6,
	offset7,
	offset8,
	offset9,
	offsetLg0,
	offsetLg1,
	offsetLg10,
	offsetLg11,
	offsetLg2,
	offsetLg3,
	offsetLg4,
	offsetLg5,
	offsetLg6,
	offsetLg7,
	offsetLg8,
	offsetLg9,
	offsetMd0,
	offsetMd1,
	offsetMd10,
	offsetMd11,
	offsetMd2,
	offsetMd3,
	offsetMd4,
	offsetMd5,
	offsetMd6,
	offsetMd7,
	offsetMd8,
	offsetMd9,
	offsetSm0,
	offsetSm1,
	offsetSm10,
	offsetSm11,
	offsetSm2,
	offsetSm3,
	offsetSm4,
	offsetSm5,
	offsetSm6,
	offsetSm7,
	offsetSm8,
	offsetSm9,
	offsetXl0,
	offsetXl1,
	offsetXl10,
	offsetXl11,
	offsetXl2,
	offsetXl3,
	offsetXl4,
	offsetXl5,
	offsetXl6,
	offsetXl7,
	offsetXl8,
	offsetXl9,
	offsetXxl0,
	offsetXxl1,
	offsetXxl10,
	offsetXxl11,
	offsetXxl2,
	offsetXxl3,
	offsetXxl4,
	offsetXxl5,
	offsetXxl6,
	offsetXxl7,
	offsetXxl8,
	offsetXxl9,
	opacity0,
	opacity100,
	opacity25,
	opacity50,
	opacity75,
	order0,
	order1,
	order2,
	order3,
	order4,
	order5,
	orderFirst,
	orderLast,
	orderLg0,
	orderLg1,
	orderLg2,
	orderLg3,
	orderLg4,
	orderLg5,
	orderLgFirst,
	orderLgLast,
	orderMd0,
	orderMd1,
	orderMd2,
	orderMd3,
	orderMd4,
	orderMd5,
	orderMdFirst,
	orderMdLast,
	orderSm0,
	orderSm1,
	orderSm2,
	orderSm3,
	orderSm4,
	orderSm5,
	orderSmFirst,
	orderSmLast,
	orderXl0,
	orderXl1,
	orderXl2,
	orderXl3,
	orderXl4,
	orderXl5,
	orderXlFirst,
	orderXlLast,
	orderXxl0,
	orderXxl1,
	orderXxl2,
	orderXxl3,
	orderXxl4,
	orderXxl5,
	orderXxlFirst,
	orderXxlLast,
	overflowAuto,
	overflowHidden,
	overflowScroll,
	overflowVisible,
	overflowXAuto,
	overflowXScroll,
	overflowXVisible,
	overflowYAuto,
	overflowYHidden,
	overflowYScroll,
	overflowYVisible,
	p0,
	p1,
	p2,
	p3,
	p4,
	pLg0,
	pLg1,
	pLg2,
	pLg3,
	pLg4,
	pLg5,
	pMd0,
	pMd1,
	pMd2,
	pMd3,
	pMd4,
	pMd5,
	pSm0,
	pSm1,
	pSm2,
	pSm3,
	pSm4,
	pSm5,
	pXl0,
	pXl1,
	pXl2,
	pXl3,
	pXl4,
	pXl5,
	pXxl0,
	pXxl1,
	pXxl2,
	pXxl3,
	pXxl4,
	pXxl5,
	pb0,
	pb1,
	pb3,
	pb4,
	pb5,
	pbLg0,
	pbLg1,
	pbLg2,
	pbLg3,
	pbLg4,
	pbLg5,
	pbMd0,
	pbMd1,
	pbMd2,
	pbMd3,
	pbMd4,
	pbMd5,
	pbSm0,
	pbSm1,
	pbSm2,
	pbSm3,
	pbSm4,
	pbSm5,
	pbXl0,
	pbXl1,
	pbXl2,
	pbXl4,
	pbXl5,
	pbXxl0,
	pbXxl1,
	pbXxl2,
	pbXxl3,
	pbXxl4,
	pbXxl5,
	pe0,
	pe1,
	pe2,
	pe3,
	pe4,
	pe5,
	peAuto,
	peLg0,
	peLg1,
	peLg2,
	peLg3,
	peLg4,
	peLg5,
	peMd0,
	peMd1,
	peMd2,
	peMd3,
	peMd4,
	peMd5,
	peNone,
	peSm0,
	peSm1,
	peSm2,
	peSm3,
	peSm4,
	peSm5,
	peXl0,
	peXl1,
	peXl2,
	peXl3,
	peXl4,
	peXl5,
	peXxl0,
	peXxl1,
	peXxl2,
	peXxl3,
	peXxl4,
	peXxl5,
	placeholder,
	placeholderGlow,
	placeholderLg,
	placeholderSm,
	placeholderWave,
	placeholderXs,
	pointerEvent,
	popover,
	positionAbsolute,
	positionFixed,
	positionStatic,
	positionSticky,
	progressStacked,
	ps0,
	ps1,
	ps2,
	ps3,
	ps4,
	ps5,
	psLg0,
	psLg1,
	psLg2,
	psLg3,
	psLg4,
	psLg5,
	psMd0,
	psMd1,
	psMd2,
	psMd3,
	psMd4,
	psMd5,
	psSm0,
	psSm1,
	psSm2,
	psSm3,
	psSm4,
	psSm5,
	psXl0,
	psXl1,
	psXl2,
	psXl3,
	psXl4,
	psXl5,
	psXxl0,
	psXxl1,
	psXxl2,
	psXxl3,
	psXxl4,
	psXxl5,
	pt0,
	pt1,
	pt2,
	pt4,
	pt5,
	ptLg0,
	ptLg1,
	ptLg2,
	ptLg3,
	ptLg4,
	ptLg5,
	ptMd0,
	ptMd1,
	ptMd2,
	ptMd3,
	ptMd4,
	ptMd5,
	ptSm0,
	ptSm1,
	ptSm2,
	ptSm3,
	ptSm4,
	ptSm5,
	ptXl0,
	ptXl1,
	ptXl2,
	ptXl3,
	ptXl4,
	ptXxl0,
	ptXxl1,
	ptXxl2,
	ptXxl3,
	ptXxl4,
	ptXxl5,
	px0,
	px1,
	px4,
	px5,
	pxLg0,
	pxLg1,
	pxLg2,
	pxLg3,
	pxLg4,
	pxLg5,
	pxMd0,
	pxMd1,
	pxMd2,
	pxMd3,
	pxMd4,
	pxMd5,
	pxSm0,
	pxSm1,
	pxSm2,
	pxSm3,
	pxSm4,
	pxSm5,
	pxXl0,
	pxXl1,
	pxXl2,
	pxXl3,
	pxXl4,
	pxXl5,
	pxXxl0,
	pxXxl1,
	pxXxl2,
	pxXxl3,
	pxXxl4,
	pxXxl5,
	py0,
	py1,
	py2,
	py3,
	py4,
	py5,
	pyLg0,
	pyLg1,
	pyLg2,
	pyLg3,
	pyLg4,
	pyLg5,
	pyMd0,
	pyMd1,
	pyMd2,
	pyMd3,
	pyMd4,
	pyMd5,
	pySm0,
	pySm1,
	pySm2,
	pySm3,
	pySm4,
	pySm5,
	pyXl0,
	pyXl1,
	pyXl2,
	pyXl3,
	pyXl4,
	pyXl5,
	pyXxl0,
	pyXxl1,
	pyXxl2,
	pyXxl3,
	pyXxl4,
	pyXxl5,
	ratio,
	ratio16x9,
	ratio1x1,
	ratio21x9,
	ratio4x3,
	rounded0,
	rounded1,
	rounded2,
	rounded3,
	rounded4,
	rounded5,
	roundedBottom,
	roundedBottom0,
	roundedBottom1,
	roundedBottom2,
	roundedBottom3,
	roundedBottom4,
	roundedBottom5,
	roundedBottomCircle,
	roundedBottomPill,
	roundedCircle,
	roundedEnd,
	roundedEnd0,
	roundedEnd1,
	roundedEnd2,
	roundedEnd3,
	roundedEnd4,
	roundedEnd5,
	roundedEndCircle,
	roundedEndPill,
	roundedPill,
	roundedStart,
	roundedStart0,
	roundedStart1,
	roundedStart2,
	roundedStart3,
	roundedStart4,
	roundedStart5,
	roundedStartCircle,
	roundedStartPill,
	roundedTop,
	roundedTop0,
	roundedTop1,
	roundedTop2,
	roundedTop3,
	roundedTop4,
	roundedTop5,
	roundedTopCircle,
	roundedTopPill,
	rowCols2,
	rowCols3,
	rowCols4,
	rowCols5,
	rowCols6,
	rowColsAuto,
	rowColsLg1,
	rowColsLg2,
	rowColsLg3,
	rowColsLg4,
	rowColsLg5,
	rowColsLg6,
	rowColsLgAuto,
	rowColsMd1,
	rowColsMd3,
	rowColsMd4,
	rowColsMd5,
	rowColsMd6,
	rowColsMdAuto,
	rowColsSm1,
	rowColsSm2,
	rowColsSm3,
	rowColsSm4,
	rowColsSm5,
	rowColsSm6,
	rowColsSmAuto,
	rowColsXl1,
	rowColsXl2,
	rowColsXl3,
	rowColsXl4,
	rowColsXl5,
	rowColsXl6,
	rowColsXlAuto,
	rowColsXxl1,
	rowColsXxl2,
	rowColsXxl3,
	rowColsXxl4,
	rowColsXxl5,
	rowColsXxl6,
	rowColsXxlAuto,
	rowGap0,
	rowGap1,
	rowGap2,
	rowGap3,
	rowGap4,
	rowGap5,
	rowGapLg0,
	rowGapLg1,
	rowGapLg2,
	rowGapLg3,
	rowGapLg4,
	rowGapLg5,
	rowGapMd0,
	rowGapMd1,
	rowGapMd2,
	rowGapMd3,
	rowGapMd4,
	rowGapMd5,
	rowGapSm0,
	rowGapSm1,
	rowGapSm2,
	rowGapSm3,
	rowGapSm4,
	rowGapSm5,
	rowGapXl0,
	rowGapXl1,
	rowGapXl2,
	rowGapXl3,
	rowGapXl4,
	rowGapXl5,
	rowGapXxl0,
	rowGapXxl1,
	rowGapXxl2,
	rowGapXxl3,
	rowGapXxl4,
	rowGapXxl5,
	shadow,
	shadowLg,
	shadowNone,
	shadowSm,
	showing,
	spinnerBorderSm,
	spinnerGrowSm,
	start0,
	start100,
	start50,
	stickyBottom,
	stickyLgBottom,
	stickyLgTop,
	stickyMdBottom,
	stickyMdTop,
	stickySmBottom,
	stickySmTop,
	stickyTop,
	stickyXlBottom,
	stickyXxlBottom,
	stickyXxlTop,
	stretchedLink,
	textBgDanger,
	textBgDark,
	textBgInfo,
	textBgLight,
	textBgPrimary,
	textBgSecondary,
	textBgSuccess,
	textBgWarning,
	textBlack,
	textBlack50,
	textBody,
	textBodyEmphasis,
	textBodySecondary,
	textBodyTertiary,
	textBreak,
	textCapitalize,
	textCenter,
	textDanger,
	textDangerEmphasis,
	textDarkEmphasis,
	textDecorationLineThrough,
	textDecorationNone,
	textDecorationUnderline,
	textEnd,
	textInfo,
	textInfoEmphasis,
	textLgCenter,
	textLgEnd,
	textLgStart,
	textLight,
	textLightEmphasis,
	textLowercase,
	textMdCenter,
	textMdEnd,
	textMdStart,
	textNowrap,
	textOpacity100,
	textOpacity25,
	textOpacity50,
	textOpacity75,
	textPrimary,
	textPrimaryEmphasis,
	textReset,
	textSecondary,
	textSecondaryEmphasis,
	textSmCenter,
	textSmEnd,
	textSmStart,
	textStart,
	textSuccess,
	textSuccessEmphasis,
	textTruncate,
	textUppercase,
	textWarning,
	textWarningEmphasis,
	textWhite,
	textWhite50,
	textWrap,
	textXlCenter,
	textXlEnd,
	textXlStart,
	textXxlCenter,
	textXxlEnd,
	textXxlStart,
	toastContainer,
	tooltip,
	top0,
	top100,
	top50,
	translateMiddle,
	translateMiddleX,
	translateMiddleY,
	userSelectAll,
	userSelectAuto,
	userSelectNone,
	validTooltip,
	vh100,
	visible,
	visuallyHiddenFocusable,
	vr,
	vstack,
	vw100,
	w100,
	w25,
	w50,
	w75,
	wAuto,
	z0,
	z1,
	z2,
	z3,
	zN1,
} from '../../../theme-contract/literal/contract.css'
import {
	accordion,
	accordionBody,
	accordionButton,
	accordionButtonCollapsed,
	accordionCollapse,
	accordionHeader,
	accordionItem,
} from '../../../theme-contract/ui/accordion/contract.css'
import {
	alert,
	alertDanger,
	alertDark,
	alertDismissible,
	alertHeading,
	alertInfo,
	alertLight,
	alertLink,
	alertPrimary,
	alertSecondary,
	alertSuccess,
	alertWarning,
} from '../../../theme-contract/ui/alerts/contract.css'
import { badge } from '../../../theme-contract/ui/badge/contract.css'
import { breadcrumb, breadcrumbItem } from '../../../theme-contract/ui/breadcrumb/contract.css'
import { btnGroup, btnToolbar } from '../../../theme-contract/ui/button-group/contract.css'
import {
	btn,
	btnCheck,
	btnDanger,
	btnDark,
	btnInfo,
	btnLg,
	btnLight,
	btnLink,
	btnOutlineDanger,
	btnOutlineDark,
	btnOutlineInfo,
	btnOutlineLight,
	btnOutlinePrimary,
	btnOutlineSecondary,
	btnOutlineSuccess,
	btnOutlineWarning,
	btnPrimary,
	btnSecondary,
	btnSm,
	btnSuccess,
	btnWarning,
} from '../../../theme-contract/ui/buttons/contract.css'
import { cardHeaderTabs } from '../../../theme-contract/ui/card-tabs/contract.css'
import {
	card,
	cardBody,
	cardFooter,
	cardHeader,
	cardImg,
	cardImgBottom,
	cardImgTop,
	cardLink,
	cardSubtitle,
	cardText,
	cardTitle,
} from '../../../theme-contract/ui/card/contract.css'
import {
	carousel,
	carouselCaption,
	carouselControlNext,
	carouselControlNextIcon,
	carouselControlPrev,
	carouselControlPrevIcon,
	carouselDark,
	carouselFade,
	carouselIndicators,
	carouselInner,
	carouselItem,
	carouselItemEnd,
	carouselItemNext,
	carouselItemPrev,
	carouselItemStart,
} from '../../../theme-contract/ui/carousel/contract.css'
import {
	btnShowHook,
	dropdown,
	dropdownCenter,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownItemText,
	dropdownMenu,
	dropdownMenuDark,
	dropdownMenuEnd,
	dropdownMenuShow,
	dropdownMenuStart,
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
	dropupCenter,
} from '../../../theme-contract/ui/dropdowns/contract.css'
import {
	listGroup,
	listGroupFlush,
	listGroupItem,
	listGroupItemAction,
	listGroupItemDanger,
	listGroupItemDark,
	listGroupItemInfo,
	listGroupItemLight,
	listGroupItemPrimary,
	listGroupItemSecondary,
	listGroupItemSuccess,
	listGroupItemWarning,
} from '../../../theme-contract/ui/list-group/contract.css'
import {
	flexWrap,
	justifyContentBetween,
	modal,
	modalBackdrop,
	modalBody,
	modalContent,
	modalDialog,
	modalDialogCentered,
	modalDialogScrollable,
	modalFade,
	modalFooter,
	modalFullscreen,
	modalHeader,
	modalShowHook,
	modalTitle,
} from '../../../theme-contract/ui/modal/contract.css'
import {
	collapse,
	navbar,
	navbarBrand,
	navbarCollapse,
	navbarExpandLg,
	navbarNav,
	navbarNavScroll,
	navbarText,
	navbarToggler,
	navbarTogglerIcon,
} from '../../../theme-contract/ui/navbar/contract.css'
import {
	fade,
	nav,
	navItem,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navPills,
	navTabs,
	show,
	tabContent,
	tabPane,
} from '../../../theme-contract/ui/navs/contract.css'
import {
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
	pagination,
	paginationLg,
	paginationSm,
} from '../../../theme-contract/ui/pagination/contract.css'
import {
	bsPopoverAuto,
	bsPopoverBottom,
	bsPopoverEnd,
	bsPopoverStart,
	bsPopoverTop,
	popoverArrow,
	popoverBody,
	popoverFade,
	popoverHeader,
	popoverShow,
} from '../../../theme-contract/ui/popovers/contract.css'
import {
	progress,
	progressBar,
	progressBarAnimated,
	progressBarStriped,
} from '../../../theme-contract/ui/progress/contract.css'
import { scrollspyExample } from '../../../theme-contract/ui/scrollspy/contract.css'
import { spinnerBorder, spinnerGrow } from '../../../theme-contract/ui/spinners/contract.css'
import {
	toast,
	toastBody,
	toastHeader,
	toastShow,
	toastShowing,
} from '../../../theme-contract/ui/toasts/contract.css'
import {
	tooltipArrow,
	tooltipFade,
	tooltipInner,
	tooltipShow,
} from '../../../theme-contract/ui/tooltips/contract.css'
import {
	alignItemsCenter,
	alignSelfStart,
	bgDark,
	col,
	colMd2,
	colMd3,
	colMd4,
	colMd5,
	colMd6,
	colMd8,
	colSm6,
	dFlex,
	fwBold,
	g0,
	g3,
	g4,
	mb2,
	mb3,
	mbLg0,
	mbXl2,
	mbXl5,
	me2,
	meAuto,
	mt5,
	mtXl0,
	overflowXHidden,
	p5,
	pb2,
	pbXl3,
	positionRelative,
	pt3,
	ptXl5,
	px2,
	px3,
	row,
	rowCols1,
	rowColsMd2,
	stickyXlTop,
	textDark,
	textMuted,
	visuallyHidden,
} from '../../../theme-contract/utilities/contract.css'

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
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#e9e9e8',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#6c757d',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#343a40',
		'--bs-gray-900': '#212529',
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
		'--bs-secondary-color-rgb': '255, 255, 255',
		[varBsSecondaryBg]: '#e9e9e8',
		'--bs-secondary-bg-rgb': '233, 233, 232',
		[varBsTertiaryColor]: 'rgba(255, 255, 255, 0.5)',
		'--bs-tertiary-color-rgb': '255, 255, 255',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
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
		'--bs-border-radius-2xl': varBsBorderRadiusXxl,
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
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#343a40',
		'--bs-secondary-bg-rgb': '52, 58, 64',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#2b3035',
		'--bs-tertiary-bg-rgb': '43, 48, 53',
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

globalStyle(`${quartzScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${quartzScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${quartzScope}${mark}`, {
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

globalStyle(`:where(${quartzScope}${legend})`, {
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

globalStyle(`:where(${quartzScope}${legend})`, {
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

globalStyle(`${quartzScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${quartzScope}${display1}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.625rem + 4.5vw)',
})

globalStyle(`${quartzScope}${display1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '5rem',
		},
	},
})

globalStyle(`${quartzScope}${display2}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.575rem + 3.9vw)',
})

globalStyle(`${quartzScope}${display2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4.5rem',
		},
	},
})

globalStyle(`${quartzScope}${display3}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.525rem + 3.3vw)',
})

globalStyle(`${quartzScope}${display3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

globalStyle(`${quartzScope}${display4}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.475rem + 2.7vw)',
})

globalStyle(`${quartzScope}${display4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3.5rem',
		},
	},
})

globalStyle(`${quartzScope}${display5}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${quartzScope}${display5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${quartzScope}${display6}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${quartzScope}${display6}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${quartzScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${quartzScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${quartzScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${quartzScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${quartzScope}${initialism}`, {
	fontSize: '0.875em',
	textTransform: 'uppercase',
})

globalStyle(`${quartzScope}${clsBlockquote}`, {
	marginBottom: '2rem',
	fontSize: '1.25rem',
})

globalStyle(`${quartzScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${quartzScope}${blockquoteFooter}`, {
	marginTop: '-2rem',
	marginBottom: '2rem',
	fontSize: '0.875em',
	color: 'rgba(255, 255, 255, 0.7)',
})

globalStyle(`${quartzScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${quartzScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${quartzScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${quartzScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${quartzScope}${figureImg}`, {
	marginBottom: '1rem',
	lineHeight: '1',
})

globalStyle(`${quartzScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${quartzScope}${container}`, {
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

globalStyle(`${quartzScope}${containerXxl}`, {
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

globalStyle(`${quartzScope}${containerXl}`, {
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

globalStyle(`${quartzScope}${containerLg}`, {
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

globalStyle(`${quartzScope}${containerMd}`, {
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

globalStyle(`${quartzScope}${containerSm}`, {
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

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${quartzScope}${containerMd}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${quartzScope}${containerLg}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${quartzScope}${containerMd}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${quartzScope}${containerXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${containerLg}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${containerMd}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${containerXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${containerXl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${containerLg}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${containerMd}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${quartzScope}${row}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '0',
	},
	display: 'flex',
	flexWrap: 'wrap',
	marginTop: `calc(-1 * ${varBsGutterY})`,
	marginRight: `calc(-0.5 * ${varBsGutterX})`,
	marginLeft: `calc(-0.5 * ${varBsGutterX})`,
})

globalStyle(`${quartzScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${quartzScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${quartzScope}${rowColsAuto} > *`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${quartzScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${quartzScope}${rowCols2} > *`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${quartzScope}${rowCols3} > *`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${quartzScope}${rowCols4} > *`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${quartzScope}${rowCols5} > *`, {
	flex: '0 0 auto',
	width: '20%',
})

globalStyle(`${quartzScope}${rowCols6} > *`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${quartzScope}${colAuto}`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${quartzScope}${col1}`, {
	flex: '0 0 auto',
	width: '8.33333333%',
})

globalStyle(`${quartzScope}${col2}`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${quartzScope}${col3}`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${quartzScope}${col4}`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${quartzScope}${col5}`, {
	flex: '0 0 auto',
	width: '41.66666667%',
})

globalStyle(`${quartzScope}${col6}`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${quartzScope}${col7}`, {
	flex: '0 0 auto',
	width: '58.33333333%',
})

globalStyle(`${quartzScope}${col8}`, {
	flex: '0 0 auto',
	width: '66.66666667%',
})

globalStyle(`${quartzScope}${col9}`, {
	flex: '0 0 auto',
	width: '75%',
})

globalStyle(`${quartzScope}${col10}`, {
	flex: '0 0 auto',
	width: '83.33333333%',
})

globalStyle(`${quartzScope}${col11}`, {
	flex: '0 0 auto',
	width: '91.66666667%',
})

globalStyle(`${quartzScope}${col12}`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${quartzScope}${offset1}`, {
	marginLeft: '8.33333333%',
})

globalStyle(`${quartzScope}${offset2}`, {
	marginLeft: '16.66666667%',
})

globalStyle(`${quartzScope}${offset3}`, {
	marginLeft: '25%',
})

globalStyle(`${quartzScope}${offset4}`, {
	marginLeft: '33.33333333%',
})

globalStyle(`${quartzScope}${offset5}`, {
	marginLeft: '41.66666667%',
})

globalStyle(`${quartzScope}${offset6}`, {
	marginLeft: '50%',
})

globalStyle(`${quartzScope}${offset7}`, {
	marginLeft: '58.33333333%',
})

globalStyle(`${quartzScope}${offset8}`, {
	marginLeft: '66.66666667%',
})

globalStyle(`${quartzScope}${offset9}`, {
	marginLeft: '75%',
})

globalStyle(`${quartzScope}${offset10}`, {
	marginLeft: '83.33333333%',
})

globalStyle(`${quartzScope}${offset11}`, {
	marginLeft: '91.66666667%',
})

globalStyle(`${quartzScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${quartzScope}${gx0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${quartzScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${quartzScope}${gy0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${quartzScope}${g1}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${quartzScope}${gx1}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${quartzScope}${g1}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${quartzScope}${gy1}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${quartzScope}${g2}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${quartzScope}${gx2}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${quartzScope}${g2}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${quartzScope}${gy2}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${quartzScope}${g3}`, {
	vars: {
		[varBsGutterX]: '2rem',
	},
})

globalStyle(`${quartzScope}${gx3}`, {
	vars: {
		[varBsGutterX]: '2rem',
	},
})

globalStyle(`${quartzScope}${g3}`, {
	vars: {
		[varBsGutterY]: '2rem',
	},
})

globalStyle(`${quartzScope}${gy3}`, {
	vars: {
		[varBsGutterY]: '2rem',
	},
})

globalStyle(`${quartzScope}${g4}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${quartzScope}${gx4}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${quartzScope}${g4}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${quartzScope}${gy4}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${quartzScope}${g5}`, {
	vars: {
		[varBsGutterX]: '6rem',
	},
})

globalStyle(`${quartzScope}${gx5}`, {
	vars: {
		[varBsGutterX]: '6rem',
	},
})

globalStyle(`${quartzScope}${g5}`, {
	vars: {
		[varBsGutterY]: '6rem',
	},
})

globalStyle(`${quartzScope}${gy5}`, {
	vars: {
		[varBsGutterY]: '6rem',
	},
})

globalStyle(`${quartzScope}${colSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSmAuto} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm1} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm2} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm3} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm4} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm5} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm6} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSm12}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${colMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMdAuto} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd1} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd3} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd4} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd5} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd6} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colMd12}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${colLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLgAuto} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg1} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg2} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg3} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg4} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg5} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg6} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLg12}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${colXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXlAuto} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl1} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl2} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl3} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl4} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl5} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl6} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXl12}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${colXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxlAuto} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl1} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl2} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl3} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl4} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl5} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl6} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl12}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: varBsBorderColor,
		[varBsTableAccentBg]: 'transparent',
		[varBsTableStripedColor]: 'initial',
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: 'initial',
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: 'initial',
		[varBsTableHoverBg]: `rgba(${varBsEmphasisColorRgb}, 0.075)`,
	},
	width: '100%',
	marginBottom: '2rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${quartzScope}${table} > ${quartzScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${quartzScope}${table} > ${quartzScope}${tableHead}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${quartzScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${quartzScope}${captionTop}`, {
	captionSide: 'top',
})

globalStyle(`${quartzScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${quartzScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${quartzScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${quartzScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${quartzScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${quartzScope}${tableStriped} > ${quartzScope}${tableSection} > ${quartzScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${quartzScope}${tableStripedColumns} > :not(caption) > ${quartzScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${quartzScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${quartzScope}${tableHover} > ${quartzScope}${tableSection} > ${quartzScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${quartzScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#e83283',
		[varBsTableBorderColor]: '#ed5b9c',
		[varBsTableStripedBg]: '#e93c89',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ea478f',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ea418c',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsTableBorderColor]: 'rgba(255, 255, 255, 0.52)',
		[varBsTableStripedBg]: 'rgba(255, 255, 255, 0.43)',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: 'rgba(255, 255, 255, 0.46)',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: 'rgba(255, 255, 255, 0.445)',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#41d7a7',
		[varBsTableBorderColor]: '#67dfb9',
		[varBsTableStripedBg]: '#4bd9ab',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#54dbb0',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#4fdaae',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#39cbfb',
		[varBsTableBorderColor]: '#61d5fc',
		[varBsTableStripedBg]: '#43cefb',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#4dd0fb',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#48cffb',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ffc107',
		[varBsTableBorderColor]: '#ffcd39',
		[varBsTableStripedBg]: '#ffc413',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ffc720',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ffc61a',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#fd7e14',
		[varBsTableBorderColor]: '#fd9843',
		[varBsTableStripedBg]: '#fd8420',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#fd8b2c',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#fd8826',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#e9e9e8',
		[varBsTableBorderColor]: '#bababa',
		[varBsTableStripedBg]: '#dddddc',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d2d2d1',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#d8d8d7',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#212529',
		[varBsTableBorderColor]: '#4d5154',
		[varBsTableStripedBg]: '#2c3034',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#373b3e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#323539',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${quartzScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${quartzScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${quartzScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${quartzScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${quartzScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${quartzScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${quartzScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${quartzScope}${colFormLabel}`, {
	paddingTop: 'calc(0.75rem + 1px)',
	paddingBottom: 'calc(0.75rem + 1px)',
	marginBottom: '0',
	fontSize: 'inherit',
	lineHeight: '1.5',
})

globalStyle(`${quartzScope}${colFormLabelLg}`, {
	paddingTop: 'calc(0.5rem + 1px)',
	paddingBottom: 'calc(0.5rem + 1px)',
	fontSize: '1.25rem',
})

globalStyle(`${quartzScope}${colFormLabelSm}`, {
	paddingTop: 'calc(0.25rem + 1px)',
	paddingBottom: 'calc(0.25rem + 1px)',
	fontSize: '0.875rem',
})

globalStyle(`${quartzScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${quartzScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundClip: 'padding-box',
	border: '1px solid rgba(255, 255, 255, 0.4)',
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${quartzScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${quartzScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	borderColor: 'rgba(255, 255, 255, 0.4)',
	outline: '0',
	boxShadow: 'none',
})

globalStyle(`${quartzScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${quartzScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${quartzScope}${formControl}::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.7)',
	opacity: '1',
})

globalStyle(`${quartzScope}${formControl}::placeholder`, {
	color: 'rgba(255, 255, 255, 0.7)',
	opacity: '1',
})

globalStyle(`${quartzScope}${formControl}:disabled`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
	opacity: '1',
})

globalStyle(`${quartzScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.75rem 1.5rem',
	margin: '-0.75rem -1.5rem',
	WebkitMarginEnd: '1.5rem',
	marginInlineEnd: '1.5rem',
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '1px',
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formControl}::file-selector-button`, {
	padding: '0.75rem 1.5rem',
	margin: '-0.75rem -1.5rem',
	WebkitMarginEnd: '1.5rem',
	marginInlineEnd: '1.5rem',
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '1px',
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${quartzScope}${formControlPlaintext}`, {
	display: 'block',
	width: '100%',
	padding: '0.75rem 0',
	marginBottom: '0',
	lineHeight: '1.5',
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	border: 'solid transparent',
	borderWidth: '1px 0',
})

globalStyle(`${quartzScope}${formControlPlaintext}:focus`, {
	outline: '0',
})

globalStyle(`${quartzScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${quartzScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${quartzScope}${formControlSm}`, {
	minHeight: 'calc(1.5em + 0.5rem + calc(1px * 2))',
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${quartzScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${quartzScope}${formControlLg}`, {
	minHeight: 'calc(1.5em + 1rem + calc(1px * 2))',
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${quartzScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${quartzScope}${elTextarea}${formControl}`, {
	minHeight: 'calc(1.5em + 1.5rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${elTextarea}${formControlSm}`, {
	minHeight: 'calc(1.5em + 0.5rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${elTextarea}${formControlLg}`, {
	minHeight: 'calc(1.5em + 1rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${formControlColor}`, {
	width: '3rem',
	height: 'calc(1.5em + 1.5rem + calc(1px * 2))',
	padding: '0.75rem',
})

globalStyle(`${quartzScope}${formControlColor}:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${quartzScope}${formControlColor}::-moz-color-swatch`, {
	border: '0 !important',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formControlColor}::-webkit-color-swatch`, {
	border: '0 !important',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formControlColor}${formControlSm}`, {
	height: 'calc(1.5em + 0.5rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${formControlColor}${formControlLg}`, {
	height: 'calc(1.5em + 1rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.75rem 4.5rem 0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1.5rem center',
	backgroundSize: '16px 12px',
	border: '1px solid rgba(255, 255, 255, 0.4)',
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formSelect}:focus`, {
	borderColor: 'rgba(255, 255, 255, 0.4)',
	outline: '0',
	boxShadow: 'none',
})

globalStyle(`${quartzScope}${formSelect}[multiple]`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${formSelect}:disabled`, {
	color: 'rgba(255, 255, 255, 0.7)',
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${quartzScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}[data-bs-theme=dark] ${quartzScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${quartzScope}${formCheck} ${quartzScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${quartzScope}${formCheckReverse}`, {
	paddingRight: '1.5em',
	paddingLeft: '0',
	textAlign: 'right',
})

globalStyle(`${quartzScope}${formCheckReverse} ${quartzScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${quartzScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: 'rgba(255, 255, 255, 0.3)',
	},
	flexShrink: '0',
	width: '1em',
	height: '1em',
	marginTop: '0.25em',
	verticalAlign: 'top',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsFormCheckBg,
	backgroundImage: varBsFormCheckBgImage,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: 'contain',
	border: '1px solid rgba(255, 255, 255, 0.2)',
	WebkitPrintColorAdjust: 'exact',
	colorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${quartzScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${quartzScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${quartzScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${quartzScope}${formCheckInput}:focus`, {
	borderColor: 'rgba(255, 255, 255, 0.4)',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(232, 50, 131, 0.25)',
})

globalStyle(`${quartzScope}${formCheckInput}:checked`, {
	backgroundColor: '#e83283',
	borderColor: '#e83283',
})

globalStyle(`${quartzScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#e83283',
	borderColor: '#e83283',
})

globalStyle(`${quartzScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${quartzScope}${formCheckInput}[disabled] ~ ${quartzScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${quartzScope}${formCheckInput}:disabled ~ ${quartzScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${quartzScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '2em',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${quartzScope}${formSwitch}${formCheckReverse}`, {
	paddingRight: '2.5em',
	paddingLeft: '0',
})

globalStyle(`${quartzScope}${formSwitch}${formCheckReverse} ${quartzScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${quartzScope}${formCheckInline}`, {
	display: 'inline-block',
	marginRight: '1rem',
})

globalStyle(`${quartzScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${quartzScope}${btnCheck}[disabled] + ${quartzScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${quartzScope}${btnCheck}:disabled + ${quartzScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${quartzScope}[data-bs-theme=dark] ${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${quartzScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${quartzScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #686dc3, none',
})

globalStyle(`${quartzScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #686dc3, none',
})

globalStyle(`${quartzScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#e83283',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#f8c2da',
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${quartzScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#e83283',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#f8c2da',
})

globalStyle(`${quartzScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${quartzScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${quartzScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${quartzScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${quartzScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}`, {
	height: 'calc(3.5rem + calc(1px * 2))',
	minHeight: 'calc(3.5rem + calc(1px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}`, {
	height: 'calc(3.5rem + calc(1px * 2))',
	minHeight: 'calc(3.5rem + calc(1px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formSelect}`, {
	height: 'calc(3.5rem + calc(1px * 2))',
	minHeight: 'calc(3.5rem + calc(1px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elLabel}`, {
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '2',
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 1.5rem',
	overflow: 'hidden',
	color: `rgba(${varBsBodyColorRgb}, 0.65)`,
	textAlign: 'start',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	pointerEvents: 'none',
	border: '1px solid transparent',
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}`, {
	padding: '1rem 1.5rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}`, {
	padding: '1rem 1.5rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1.5rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:not(:-moz-placeholder-shown) ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:focus ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:not(:placeholder-shown) ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext} ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formSelect} ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:-webkit-autofill ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${quartzScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elTextarea}:focus ~ ${quartzScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elTextarea}:not(:placeholder-shown) ~ ${quartzScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elTextarea}:disabled ~ ${quartzScope}${elLabel}::after`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext} ~ ${quartzScope}${elLabel}`, {
	borderWidth: '1px 0',
})

globalStyle(`${quartzScope}${formFloating} > :disabled ~ ${quartzScope}${elLabel}`, {
	color: '#6c757d',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:disabled ~ ${quartzScope}${elLabel}`, {
	color: '#6c757d',
})

globalStyle(`${quartzScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${quartzScope}${inputGroup} ${quartzScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${quartzScope}${inputGroup} ${quartzScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${quartzScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: '1px solid rgba(255, 255, 255, 0.4)',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}${dropdownToggle}:nth-last-child(n+3)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}${formFloating}:not(:last-child) > ${quartzScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}${formFloating}:not(:last-child) > ${quartzScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}${hasValidation} > ${quartzScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}${hasValidation} > ${quartzScope}${dropdownToggle}:nth-last-child(n+4)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}${hasValidation} > ${quartzScope}${formFloating}:nth-last-child(n+3) > ${quartzScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}${hasValidation} > ${quartzScope}${formFloating}:nth-last-child(n+3) > ${quartzScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: 'calc(-1 * 1px)',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:first-child) > ${quartzScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:first-child) > ${quartzScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${quartzScope}${validTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.5rem 1rem',
	marginTop: '0.1rem',
	fontSize: '0.875rem',
	color: '#fff',
	backgroundColor: varBsSuccess,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${wasValidated} :valid ~ ${quartzScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${wasValidated} :valid ~ ${quartzScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${isValid} ~ ${quartzScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${isValid} ~ ${quartzScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${quartzScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControlColor}:valid`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${quartzScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:valid ~ ${quartzScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid} ~ ${quartzScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${quartzScope}${formCheckInline} ${quartzScope}${formCheckInput} ~ ${quartzScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${invalidTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.5rem 1rem',
	marginTop: '0.1rem',
	fontSize: '0.875rem',
	color: '#fff',
	backgroundColor: varBsDanger,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${wasValidated} :invalid ~ ${quartzScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${wasValidated} :invalid ~ ${quartzScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${isInvalid} ~ ${quartzScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${isInvalid} ~ ${quartzScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${quartzScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControlColor}:invalid`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${quartzScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:invalid ~ ${quartzScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid} ~ ${quartzScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${formCheckInline} ${quartzScope}${formCheckInput} ~ ${quartzScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1.5rem',
		[varBsBtnPaddingY]: '0.75rem',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '1rem',
		[varBsBtnFontWeight]: '400',
		[varBsBtnLineHeight]: '1.5',
		[varBsBtnColor]: varBsBodyColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderWidth]: varBsBorderWidth,
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnBorderRadius]: varBsBorderRadius,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
		[varBsBtnDisabledOpacity]: '0.65',
		[varBsBtnFocusBoxShadow]: `0 0 0 0.25rem rgba(${varBsBtnFocusBoxShadowRgb}, .5)`,
	},
	display: 'inline-block',
	padding: `${varBsBtnPaddingY} ${varBsBtnPaddingX}`,
	fontFamily: varBsBtnFontFamily,
	fontSize: varBsBtnFontSize,
	fontWeight: varBsBtnFontWeight,
	lineHeight: varBsBtnLineHeight,
	color: varBsBtnColor,
	textAlign: 'center',
	textDecoration: 'none',
	verticalAlign: 'middle',
	cursor: 'pointer',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	border: `${varBsBtnBorderWidth} solid ${varBsBtnBorderColor}`,
	borderRadius: varBsBtnBorderRadius,
	backgroundColor: varBsBtnBg,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${quartzScope}${btnCheck} + ${quartzScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${quartzScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btnCheck}:focus-visible + ${quartzScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}:not(${btnCheck}) + ${quartzScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}:not(${btnCheck}) + ${quartzScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}${btnShowHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btnCheck}:checked:focus-visible + ${quartzScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${quartzScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${quartzScope}${fieldset}:disabled ${quartzScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${quartzScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e83283',
		[varBsBtnBorderColor]: '#e83283',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c52b6f',
		[varBsBtnHoverBorderColor]: '#ba2869',
		[varBsBtnFocusBoxShadowRgb]: '235, 81, 150',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ba2869',
		[varBsBtnActiveBorderColor]: '#ae2662',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e83283',
		[varBsBtnDisabledBorderColor]: '#e83283',
	},
})

globalStyle(`${quartzScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: 'rgba(255, 255, 255, 0.49)',
		[varBsBtnHoverBorderColor]: 'rgba(255, 255, 255, 0.46)',
		[varBsBtnFocusBoxShadowRgb]: '149, 149, 149',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: 'rgba(255, 255, 255, 0.52)',
		[varBsBtnActiveBorderColor]: 'rgba(255, 255, 255, 0.46)',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnDisabledBorderColor]: 'rgba(255, 255, 255, 0.4)',
	},
})

globalStyle(`${quartzScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#41d7a7',
		[varBsBtnBorderColor]: '#41d7a7',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#37b78e',
		[varBsBtnHoverBorderColor]: '#34ac86',
		[varBsBtnFocusBoxShadowRgb]: '94, 221, 180',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#34ac86',
		[varBsBtnActiveBorderColor]: '#31a17d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#41d7a7',
		[varBsBtnDisabledBorderColor]: '#41d7a7',
	},
})

globalStyle(`${quartzScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#39cbfb',
		[varBsBtnBorderColor]: '#39cbfb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#30add5',
		[varBsBtnHoverBorderColor]: '#2ea2c9',
		[varBsBtnFocusBoxShadowRgb]: '87, 211, 252',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2ea2c9',
		[varBsBtnActiveBorderColor]: '#2b98bc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#39cbfb',
		[varBsBtnDisabledBorderColor]: '#39cbfb',
	},
})

globalStyle(`${quartzScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9a406',
		[varBsBtnHoverBorderColor]: '#cc9a06',
		[varBsBtnFocusBoxShadowRgb]: '255, 202, 44',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc9a06',
		[varBsBtnActiveBorderColor]: '#bf9105',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ffc107',
		[varBsBtnDisabledBorderColor]: '#ffc107',
	},
})

globalStyle(`${quartzScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#fd7e14',
		[varBsBtnBorderColor]: '#fd7e14',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d76b11',
		[varBsBtnHoverBorderColor]: '#ca6510',
		[varBsBtnFocusBoxShadowRgb]: '253, 145, 55',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ca6510',
		[varBsBtnActiveBorderColor]: '#be5f0f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#fd7e14',
		[varBsBtnDisabledBorderColor]: '#fd7e14',
	},
})

globalStyle(`${quartzScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#e9e9e8',
		[varBsBtnBorderColor]: '#e9e9e8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c6c6c5',
		[varBsBtnHoverBorderColor]: '#bababa',
		[varBsBtnFocusBoxShadowRgb]: '198, 198, 197',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#bababa',
		[varBsBtnActiveBorderColor]: '#afafae',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#e9e9e8',
		[varBsBtnDisabledBorderColor]: '#e9e9e8',
	},
})

globalStyle(`${quartzScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#212529',
		[varBsBtnBorderColor]: '#212529',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#424649',
		[varBsBtnHoverBorderColor]: '#373b3e',
		[varBsBtnFocusBoxShadowRgb]: '66, 70, 73',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4d5154',
		[varBsBtnActiveBorderColor]: '#373b3e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#212529',
		[varBsBtnDisabledBorderColor]: '#212529',
	},
})

globalStyle(`${quartzScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#e83283',
		[varBsBtnBorderColor]: '#e83283',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e83283',
		[varBsBtnHoverBorderColor]: '#e83283',
		[varBsBtnFocusBoxShadowRgb]: '232, 50, 131',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e83283',
		[varBsBtnActiveBorderColor]: '#e83283',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e83283',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e83283',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnHoverBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnFocusBoxShadowRgb]: '255, 255, 255',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnActiveBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#41d7a7',
		[varBsBtnBorderColor]: '#41d7a7',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#41d7a7',
		[varBsBtnHoverBorderColor]: '#41d7a7',
		[varBsBtnFocusBoxShadowRgb]: '65, 215, 167',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#41d7a7',
		[varBsBtnActiveBorderColor]: '#41d7a7',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#41d7a7',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#41d7a7',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#39cbfb',
		[varBsBtnBorderColor]: '#39cbfb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#39cbfb',
		[varBsBtnHoverBorderColor]: '#39cbfb',
		[varBsBtnFocusBoxShadowRgb]: '57, 203, 251',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#39cbfb',
		[varBsBtnActiveBorderColor]: '#39cbfb',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#39cbfb',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#39cbfb',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ffc107',
		[varBsBtnHoverBorderColor]: '#ffc107',
		[varBsBtnFocusBoxShadowRgb]: '255, 193, 7',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ffc107',
		[varBsBtnActiveBorderColor]: '#ffc107',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ffc107',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ffc107',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#fd7e14',
		[varBsBtnBorderColor]: '#fd7e14',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#fd7e14',
		[varBsBtnHoverBorderColor]: '#fd7e14',
		[varBsBtnFocusBoxShadowRgb]: '253, 126, 20',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#fd7e14',
		[varBsBtnActiveBorderColor]: '#fd7e14',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fd7e14',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#fd7e14',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#e9e9e8',
		[varBsBtnBorderColor]: '#e9e9e8',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#e9e9e8',
		[varBsBtnHoverBorderColor]: '#e9e9e8',
		[varBsBtnFocusBoxShadowRgb]: '233, 233, 232',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#e9e9e8',
		[varBsBtnActiveBorderColor]: '#e9e9e8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e9e9e8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e9e9e8',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#212529',
		[varBsBtnBorderColor]: '#212529',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#212529',
		[varBsBtnHoverBorderColor]: '#212529',
		[varBsBtnFocusBoxShadowRgb]: '33, 37, 41',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#212529',
		[varBsBtnActiveBorderColor]: '#212529',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#212529',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#212529',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#6c757d',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
	},
	textDecoration: 'underline',
})

globalStyle(`${quartzScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${quartzScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${quartzScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${quartzScope}${btnGroupLg} > ${quartzScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${quartzScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${quartzScope}${btnGroupSm} > ${quartzScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${quartzScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${quartzScope}${tooltipFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${quartzScope}${popoverFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${quartzScope}${modalFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${quartzScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${tooltipFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${popoverFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${modalFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${tooltipFade}:not(${tooltipShow})`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${popoverFade}:not(${popoverShow})`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${modalFade}:not(${modalShowHook})`, {
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

globalStyle(`${quartzScope}${collapsing}${collapseHorizontal}`, {
	width: '0',
	height: 'auto',
	transition: 'width 0.35s ease',
})

globalStyle(`${quartzScope}${collapsing}${collapseHorizontal}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${dropup}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${dropend}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${dropdown}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${dropstart}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${dropupCenter}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${dropdownCenter}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${dropdownToggle}`, {
	whiteSpace: 'nowrap',
})

globalStyle(`${quartzScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid',
	borderRight: '0.3em solid transparent',
	borderBottom: '0',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${quartzScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropdownMenu}`, {
	vars: {
		[varBsDropdownZindex]: '1000',
		[varBsDropdownMinWidth]: '10rem',
		[varBsDropdownPaddingX]: '0',
		[varBsDropdownPaddingY]: '0.5rem',
		[varBsDropdownSpacer]: '0.125rem',
		[varBsDropdownFontSize]: '1rem',
		[varBsDropdownColor]: varBsBodyColor,
		[varBsDropdownBg]: varBsBodyBg,
		[varBsDropdownBorderColor]: 'rgba(255, 255, 255, 0.2)',
		[varBsDropdownBorderRadius]: varBsBorderRadius,
		[varBsDropdownBorderWidth]: varBsBorderWidth,
		[varBsDropdownInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsDropdownDividerBg]: 'rgba(255, 255, 255, 0.2)',
		[varBsDropdownDividerMarginY]: '1rem',
		[varBsDropdownBoxShadow]: varBsBoxShadow,
		[varBsDropdownLinkColor]: varBsBodyColor,
		[varBsDropdownLinkHoverColor]: '#fff',
		[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#e83283',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '2rem',
		[varBsDropdownItemPaddingY]: '0.5rem',
		[varBsDropdownHeaderColor]: '#6c757d',
		[varBsDropdownHeaderPaddingX]: '2rem',
		[varBsDropdownHeaderPaddingY]: '0.5rem',
	},
	position: 'absolute',
	zIndex: varBsDropdownZindex,
	display: 'none',
	minWidth: varBsDropdownMinWidth,
	padding: `${varBsDropdownPaddingY} ${varBsDropdownPaddingX}`,
	margin: '0',
	fontSize: varBsDropdownFontSize,
	color: varBsDropdownColor,
	textAlign: 'left',
	listStyle: 'none',
	backgroundColor: varBsDropdownBg,
	backgroundClip: 'padding-box',
	border: `${varBsDropdownBorderWidth} solid ${varBsDropdownBorderColor}`,
	borderRadius: varBsDropdownBorderRadius,
})

globalStyle(`${quartzScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: '0',
	marginTop: varBsDropdownSpacer,
})

globalStyle(`${quartzScope}${dropdownMenuStart}`, {
	vars: {
		[varBsPosition]: 'start',
	},
})

globalStyle(`${quartzScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: '0',
})

globalStyle(`${quartzScope}${dropdownMenuEnd}`, {
	vars: {
		[varBsPosition]: 'end',
	},
})

globalStyle(`${quartzScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: '0',
	left: 'auto',
})

globalStyle(`${quartzScope}${dropdownMenuSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuSmStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuSmEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuMdStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuMdEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuLgStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuLgEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuXlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuXlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuXxlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${quartzScope}${dropdownMenuXxlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${dropup} ${quartzScope}${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: '0',
	marginBottom: varBsDropdownSpacer,
})

globalStyle(`${quartzScope}${dropup} ${quartzScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0',
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${quartzScope}${dropup} ${quartzScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropend} ${quartzScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: 'auto',
	left: '100%',
	marginTop: '0',
	marginLeft: varBsDropdownSpacer,
})

globalStyle(`${quartzScope}${dropend} ${quartzScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0',
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${quartzScope}${dropend} ${quartzScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropend} ${quartzScope}${dropdownToggle}::after`, {
	verticalAlign: '0',
})

globalStyle(`${quartzScope}${dropstart} ${quartzScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: '100%',
	left: 'auto',
	marginTop: '0',
	marginRight: varBsDropdownSpacer,
})

globalStyle(`${quartzScope}${dropstart} ${quartzScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
})

globalStyle(`${quartzScope}${dropstart} ${quartzScope}${dropdownToggle}::after`, {
	display: 'none',
})

globalStyle(`${quartzScope}${dropstart} ${quartzScope}${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${quartzScope}${dropstart} ${quartzScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropstart} ${quartzScope}${dropdownToggle}::before`, {
	verticalAlign: '0',
})

globalStyle(`${quartzScope}${dropdownDivider}`, {
	height: '0',
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: '1',
})

globalStyle(`${quartzScope}${dropdownItem}`, {
	display: 'block',
	width: '100%',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	clear: 'both',
	fontWeight: '400',
	color: varBsDropdownLinkColor,
	textAlign: 'inherit',
	textDecoration: 'none',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: '0',
	borderRadius: 'var(--bs-dropdown-item-border-radius, 0)',
})

globalStyle(`${quartzScope}${dropdownItem}:hover`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${quartzScope}${dropdownItem}:focus`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${quartzScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${quartzScope}${dropdownItem}:active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${quartzScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${quartzScope}${dropdownItem}:disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${quartzScope}${dropdownMenu}${dropdownMenuShow}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

globalStyle(`${quartzScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

globalStyle(`${quartzScope}${dropdownMenuDark}`, {
	vars: {
		[varBsDropdownColor]: '#dee2e6',
		[varBsDropdownBg]: '#343a40',
		[varBsDropdownBorderColor]: 'rgba(255, 255, 255, 0.2)',
		[varBsDropdownBoxShadow]: '',
		[varBsDropdownLinkColor]: '#dee2e6',
		[varBsDropdownLinkHoverColor]: '#fff',
		[varBsDropdownDividerBg]: 'rgba(255, 255, 255, 0.2)',
		[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.15)',
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#e83283',
		[varBsDropdownLinkDisabledColor]: '#adb5bd',
		[varBsDropdownHeaderColor]: '#adb5bd',
	},
})

globalStyle(`${quartzScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${quartzScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnCheck}:focus + ${quartzScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnCheck}:focus + ${quartzScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${quartzScope}${btnToolbar} ${quartzScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${quartzScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}:not(${btnCheck}:first-child) + ${quartzScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnGroup}:not(:last-child) > ${quartzScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}:not(${btnCheck}) + ${quartzScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnGroup}:not(:first-child) > ${quartzScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '1.125rem',
	paddingLeft: '1.125rem',
})

globalStyle(`${quartzScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropup} ${quartzScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropend} ${quartzScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropstart} ${quartzScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${quartzScope}${btnSm} + ${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${quartzScope}${btnGroupSm} > ${quartzScope}${btn} + ${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${quartzScope}${btnLg} + ${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${quartzScope}${btnGroupLg} > ${quartzScope}${btn} + ${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${quartzScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}:not(:last-child) > ${quartzScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}:not(${btnCheck}) + ${quartzScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}:not(:first-child) > ${quartzScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${quartzScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: 'rgba(255, 255, 255, 0.7)',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${quartzScope}${navLink}`, {
	display: 'block',
	padding: `${varBsNavLinkPaddingY} ${varBsNavLinkPaddingX}`,
	fontSize: varBsNavLinkFontSize,
	fontWeight: varBsNavLinkFontWeight,
	color: varBsNavLinkColor,
	textDecoration: 'none',
	background: 'none',
	border: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${quartzScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${quartzScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(232, 50, 131, 0.25)',
})

globalStyle(`${quartzScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${quartzScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${quartzScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: '0',
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: '0',
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: '#343a40',
		[varBsNavTabsLinkActiveBg]: '#fff',
		[varBsNavTabsLinkActiveBorderColor]: '#dee2e6 #dee2e6 #fff',
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${dropdownMenu}`, {
	marginTop: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${quartzScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: '50rem',
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#e83283',
	},
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${show} > ${quartzScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${quartzScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: '#fff',
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${show} > ${quartzScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${quartzScope}${navFill} > ${quartzScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${quartzScope}${navFill} ${quartzScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${quartzScope}${navJustified} > ${quartzScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${quartzScope}${navJustified} ${quartzScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${quartzScope}${navFill} ${quartzScope}${navItem} ${quartzScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${navJustified} ${quartzScope}${navItem} ${quartzScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${tabContent} > ${quartzScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${quartzScope}${tabContent} > ${quartzScope}${active}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: '0',
		[varBsNavbarPaddingY]: '1rem',
		[varBsNavbarColor]: `rgba(${varBsEmphasisColorRgb}, 0.65)`,
		[varBsNavbarHoverColor]: `rgba(${varBsEmphasisColorRgb}, 0.8)`,
		[varBsNavbarDisabledColor]: `rgba(${varBsEmphasisColorRgb}, 0.3)`,
		[varBsNavbarActiveColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandPaddingY]: '0.3125rem',
		[varBsNavbarBrandMarginEnd]: '1rem',
		[varBsNavbarBrandFontSize]: '1.25rem',
		[varBsNavbarBrandColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandHoverColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarNavLinkPaddingX]: '0.5rem',
		[varBsNavbarTogglerPaddingY]: '0.25rem',
		[varBsNavbarTogglerPaddingX]: '0.75rem',
		[varBsNavbarTogglerFontSize]: '1.25rem',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.75%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
		[varBsNavbarTogglerBorderColor]: `rgba(${varBsEmphasisColorRgb}, 0.15)`,
		[varBsNavbarTogglerBorderRadius]: varBsBorderRadius,
		[varBsNavbarTogglerFocusWidth]: '0.25rem',
		[varBsNavbarTogglerTransition]: 'box-shadow 0.15s ease-in-out',
	},
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: `${varBsNavbarPaddingY} ${varBsNavbarPaddingX}`,
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${container}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerSm}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerMd}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerLg}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerXl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerXxl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: varBsNavbarBrandFontSize,
	color: varBsNavbarBrandColor,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
})

globalStyle(`${quartzScope}${navbarBrand}:hover`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${quartzScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${quartzScope}${navbarNav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '0',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsNavbarColor,
		[varBsNavLinkHoverColor]: varBsNavbarHoverColor,
		[varBsNavLinkDisabledColor]: varBsNavbarDisabledColor,
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${quartzScope}${navbarNav} ${quartzScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${quartzScope}${navbarNav} ${quartzScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${quartzScope}${navbarNav} ${quartzScope}${dropdownMenu}`, {
	position: 'static',
})

globalStyle(`${quartzScope}${navbarText}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsNavbarColor,
})

globalStyle(`${quartzScope}${navbarText} ${quartzScope}${link}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${quartzScope}${navbarText} ${quartzScope}${link}:hover`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${quartzScope}${navbarText} ${quartzScope}${link}:focus`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${quartzScope}${navbarCollapse}`, {
	flexGrow: '1',
	flexBasis: '100%',
	alignItems: 'center',
})

globalStyle(`${quartzScope}${navbarToggler}`, {
	padding: `${varBsNavbarTogglerPaddingY} ${varBsNavbarTogglerPaddingX}`,
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: '1',
	color: varBsNavbarColor,
	backgroundColor: 'transparent',
	border: `${varBsBorderWidth} solid ${varBsNavbarTogglerBorderColor}`,
	borderRadius: varBsNavbarTogglerBorderRadius,
	transition: varBsNavbarTogglerTransition,
})

globalStyle(`${quartzScope}${navbarToggler}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarToggler}:hover`, {
	textDecoration: 'none',
})

globalStyle(`${quartzScope}${navbarToggler}:focus`, {
	textDecoration: 'none',
	outline: '0',
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

globalStyle(`${quartzScope}${navbarTogglerIcon}`, {
	display: 'inline-block',
	width: '1.5em',
	height: '1.5em',
	verticalAlign: 'middle',
	backgroundImage: varBsNavbarTogglerIconBg,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: '100%',
})

globalStyle(`${quartzScope}${navbarNavScroll}`, {
	maxHeight: 'var(--bs-scroll-height, 75vh)',
	overflowY: 'auto',
})

globalStyle(`${quartzScope}${navbarExpandSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${navbarNav}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${navbarNav} ${quartzScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 576px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${offcanvas}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'static',
			zIndex: 'auto',
			flexGrow: '1',
			width: 'auto !important',
			height: 'auto !important',
			visibility: 'visible !important',
			backgroundColor: 'transparent !important',
			border: '0 !important',
			transform: 'none !important',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${navbarNav}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${navbarNav} ${quartzScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 768px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${offcanvas}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'static',
			zIndex: 'auto',
			flexGrow: '1',
			width: 'auto !important',
			height: 'auto !important',
			visibility: 'visible !important',
			backgroundColor: 'transparent !important',
			border: '0 !important',
			transform: 'none !important',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${navbarNav}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${navbarNav} ${quartzScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 992px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${offcanvas}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'static',
			zIndex: 'auto',
			flexGrow: '1',
			width: 'auto !important',
			height: 'auto !important',
			visibility: 'visible !important',
			backgroundColor: 'transparent !important',
			border: '0 !important',
			transform: 'none !important',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${navbarNav} ${quartzScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1200px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${offcanvas}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'static',
			zIndex: 'auto',
			flexGrow: '1',
			width: 'auto !important',
			height: 'auto !important',
			visibility: 'visible !important',
			backgroundColor: 'transparent !important',
			border: '0 !important',
			transform: 'none !important',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${navbarNav} ${quartzScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1400px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${offcanvas}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'static',
			zIndex: 'auto',
			flexGrow: '1',
			width: 'auto !important',
			height: 'auto !important',
			visibility: 'visible !important',
			backgroundColor: 'transparent !important',
			border: '0 !important',
			transform: 'none !important',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${navbarExpand}`, {
	flexWrap: 'nowrap',
	justifyContent: 'flex-start',
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${navbarNav}`, {
	flexDirection: 'row',
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${navbarNav} ${quartzScope}${dropdownMenu}`, {
	position: 'absolute',
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${navbarNavScroll}`, {
	overflow: 'visible',
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${navbarCollapse}`, {
	display: 'flex !important',
	flexBasis: 'auto',
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${navbarToggler}`, {
	display: 'none',
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${offcanvas}`, {
	position: 'static',
	zIndex: 'auto',
	flexGrow: '1',
	width: 'auto !important',
	height: 'auto !important',
	visibility: 'visible !important',
	backgroundColor: 'transparent !important',
	border: '0 !important',
	transform: 'none !important',
	transition: 'none',
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasHeader}`, {
	display: 'none',
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${offcanvas} ${quartzScope}${offcanvasBody}`, {
	display: 'flex',
	flexGrow: '0',
	padding: '0',
	overflowY: 'visible',
})

globalStyle(`${quartzScope}${navbarDark}`, {
	vars: {
		[varBsNavbarColor]: 'rgba(255, 255, 255, 0.55)',
		[varBsNavbarHoverColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.25)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: 'rgba(255, 255, 255, 0.1)',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${navbar}[data-bs-theme=dark]`, {
	vars: {
		[varBsNavbarColor]: 'rgba(255, 255, 255, 0.55)',
		[varBsNavbarHoverColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.25)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: 'rgba(255, 255, 255, 0.1)',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}[data-bs-theme=dark] ${quartzScope}${navbarTogglerIcon}`, {
	vars: {
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: '1.75rem',
		[varBsCardSpacerX]: '2rem',
		[varBsCardTitleSpacerY]: '1rem',
		[varBsCardTitleColor]: '',
		[varBsCardSubtitleColor]: '',
		[varBsCardBorderWidth]: varBsBorderWidth,
		[varBsCardBorderColor]: 'rgba(255, 255, 255, 0.2)',
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardBoxShadow]: '',
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
		[varBsCardCapPaddingY]: '0.875rem',
		[varBsCardCapPaddingX]: '2rem',
		[varBsCardCapBg]: 'transparent',
		[varBsCardCapColor]: '#fff',
		[varBsCardHeight]: '',
		[varBsCardColor]: '#fff',
		[varBsCardBg]: 'transparent',
		[varBsCardImgOverlayPadding]: '2rem',
		[varBsCardGroupMargin]: '0.75rem',
	},
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	minWidth: '0',
	height: varBsCardHeight,
	color: varBsBodyColor,
	wordWrap: 'break-word',
	backgroundColor: varBsCardBg,
	backgroundClip: 'border-box',
	border: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
	borderRadius: varBsCardBorderRadius,
})

globalStyle(`${quartzScope}${card} > ${quartzScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${quartzScope}${card} > ${quartzScope}${listGroup}`, {
	borderTop: 'inherit',
	borderBottom: 'inherit',
})

globalStyle(`${quartzScope}${card} > ${quartzScope}${listGroup}:first-child`, {
	borderTopWidth: '0',
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${card} > ${quartzScope}${listGroup}:last-child`, {
	borderBottomWidth: '0',
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${card} > ${quartzScope}${cardHeader} + ${quartzScope}${listGroup}`, {
	borderTop: '0',
})

globalStyle(`${quartzScope}${card} > ${quartzScope}${listGroup} + ${quartzScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${quartzScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${quartzScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${quartzScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${quartzScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${quartzScope}${cardLink} + ${quartzScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${quartzScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${quartzScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

globalStyle(`${quartzScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${quartzScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

globalStyle(`${quartzScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})

globalStyle(`${quartzScope}${cardHeaderTabs} ${quartzScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${quartzScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${quartzScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
	borderRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${cardImg}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardImg}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${quartzScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card} + ${quartzScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child) > ${quartzScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child) > ${quartzScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child) > ${quartzScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child) > ${quartzScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child) > ${quartzScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child) > ${quartzScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child) > ${quartzScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child) > ${quartzScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${accordion}`, {
	vars: {
		[varBsAccordionColor]: varBsBodyColor,
		[varBsAccordionBg]: varBsBodyBg,
		[varBsAccordionTransition]: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease',
		[varBsAccordionBorderColor]: varBsBorderColor,
		[varBsAccordionBorderWidth]: varBsBorderWidth,
		[varBsAccordionBorderRadius]: varBsBorderRadius,
		[varBsAccordionInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
		[varBsAccordionBtnPaddingX]: '1.25rem',
		[varBsAccordionBtnPaddingY]: '1rem',
		[varBsAccordionBtnColor]: varBsBodyColor,
		[varBsAccordionBtnBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnIconWidth]: '1.25rem',
		[varBsAccordionBtnIconTransform]: 'rotate(-180deg)',
		[varBsAccordionBtnIconTransition]: 'transform 0.2s ease-in-out',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%235d1434\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnFocusBoxShadow]: '0 0 0 0.25rem rgba(232, 50, 131, 0.25)',
		[varBsAccordionBodyPaddingX]: '1.25rem',
		[varBsAccordionBodyPaddingY]: '1rem',
		[varBsAccordionActiveColor]: '#fff',
		[varBsAccordionActiveBg]: '#e83283',
	},
})

globalStyle(`${quartzScope}${accordionButton}`, {
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	padding: `${varBsAccordionBtnPaddingY} ${varBsAccordionBtnPaddingX}`,
	fontSize: '1rem',
	color: varBsAccordionBtnColor,
	textAlign: 'left',
	backgroundColor: varBsAccordionBtnBg,
	border: '0',
	borderRadius: '0',
	overflowAnchor: 'none',
	transition: varBsAccordionTransition,
})

globalStyle(`${quartzScope}${accordionButton}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${accordionButton}:not(${accordionButtonCollapsed})`, {
	color: varBsAccordionActiveColor,
	backgroundColor: varBsAccordionActiveBg,
	boxShadow: `inset 0 calc(-1 * ${varBsAccordionBorderWidth}) 0 ${varBsAccordionBorderColor}`,
})

globalStyle(`${quartzScope}${accordionButton}:not(${accordionButtonCollapsed})::after`, {
	backgroundImage: varBsAccordionBtnActiveIcon,
	transform: varBsAccordionBtnIconTransform,
})

globalStyle(`${quartzScope}${accordionButton}::after`, {
	flexShrink: '0',
	width: varBsAccordionBtnIconWidth,
	height: varBsAccordionBtnIconWidth,
	marginLeft: 'auto',
	content: '""',
	backgroundImage: varBsAccordionBtnIcon,
	backgroundRepeat: 'no-repeat',
	backgroundSize: varBsAccordionBtnIconWidth,
	transition: varBsAccordionBtnIconTransition,
})

globalStyle(`${quartzScope}${accordionButton}::after`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${accordionButton}:hover`, {
	zIndex: '2',
})

globalStyle(`${quartzScope}${accordionButton}:focus`, {
	zIndex: '3',
	outline: '0',
	boxShadow: varBsAccordionBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${accordionHeader}`, {
	marginBottom: '0',
})

globalStyle(`${quartzScope}${accordionItem}`, {
	color: varBsAccordionColor,
	backgroundColor: varBsAccordionBg,
	border: `${varBsAccordionBorderWidth} solid ${varBsAccordionBorderColor}`,
})

globalStyle(`${quartzScope}${accordionItem}:first-of-type`, {
	borderTopLeftRadius: varBsAccordionBorderRadius,
	borderTopRightRadius: varBsAccordionBorderRadius,
})

globalStyle(`${quartzScope}${accordionItem}:first-of-type > ${quartzScope}${accordionHeader} ${quartzScope}${accordionButton}`, {
	borderTopLeftRadius: varBsAccordionInnerBorderRadius,
	borderTopRightRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${quartzScope}${accordionItem}:not(:first-of-type)`, {
	borderTop: '0',
})

globalStyle(`${quartzScope}${accordionItem}:last-of-type`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${quartzScope}${accordionItem}:last-of-type > ${quartzScope}${accordionHeader} ${quartzScope}${accordionButton}${accordionButtonCollapsed}`, {
	borderBottomRightRadius: varBsAccordionInnerBorderRadius,
	borderBottomLeftRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${quartzScope}${accordionItem}:last-of-type > ${quartzScope}${accordionCollapse}`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${quartzScope}${accordionBody}`, {
	padding: `${varBsAccordionBodyPaddingY} ${varBsAccordionBodyPaddingX}`,
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem}`, {
	borderRight: '0',
	borderLeft: '0',
	borderRadius: '0',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem}:first-child`, {
	borderTop: '0',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem}:last-child`, {
	borderBottom: '0',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem} > ${quartzScope}${accordionCollapse}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem} > ${quartzScope}${accordionHeader} ${quartzScope}${accordionButton}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${accordionFlush} > ${quartzScope}${accordionItem} > ${quartzScope}${accordionHeader} ${quartzScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}[data-bs-theme=dark] ${quartzScope}${accordionButton}::after`, {
	vars: {
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23f184b5\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23f184b5\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0',
		[varBsBreadcrumbPaddingY]: '0',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '',
		[varBsBreadcrumbBorderRadius]: '',
		[varBsBreadcrumbDividerColor]: '#fff',
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActiveColor]: '#fff',
	},
	display: 'flex',
	flexWrap: 'wrap',
	padding: `${varBsBreadcrumbPaddingY} ${varBsBreadcrumbPaddingX}`,
	marginBottom: varBsBreadcrumbMarginBottom,
	fontSize: 'var(--bs-breadcrumb-font-size)',
	listStyle: 'none',
	backgroundColor: varBsBreadcrumbBg,
	borderRadius: varBsBreadcrumbBorderRadius,
})

globalStyle(`${quartzScope}${breadcrumbItem} + ${quartzScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${quartzScope}${breadcrumbItem} + ${quartzScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${fallbackVar(varBsBreadcrumbDivider, '"/"')} `,
})

globalStyle(`${quartzScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${quartzScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.75rem',
		[varBsPaginationPaddingY]: '0.375rem',
		[varBsPaginationFontSize]: '1rem',
		[varBsPaginationColor]: varBsLinkColor,
		[varBsPaginationBg]: 'rgba(255, 255, 255, 0.3)',
		[varBsPaginationBorderWidth]: '0',
		[varBsPaginationBorderColor]: varBsBorderColor,
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: '#fff',
		[varBsPaginationHoverBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsPaginationHoverBorderColor]: varBsBorderColor,
		[varBsPaginationFocusColor]: '#fff',
		[varBsPaginationFocusBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsPaginationFocusBoxShadow]: 'none',
		[varBsPaginationActiveColor]: '#fff',
		[varBsPaginationActiveBg]: '#e83283',
		[varBsPaginationActiveBorderColor]: '#e83283',
		[varBsPaginationDisabledColor]: 'rgba(255, 255, 255, 0.7)',
		[varBsPaginationDisabledBg]: 'rgba(255, 255, 255, 0.3)',
		[varBsPaginationDisabledBorderColor]: varBsBorderColor,
	},
	display: 'flex',
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${quartzScope}${pageLink}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsPaginationPaddingY} ${varBsPaginationPaddingX}`,
	fontSize: varBsPaginationFontSize,
	color: varBsPaginationColor,
	textDecoration: 'none',
	backgroundColor: varBsPaginationBg,
	border: `${varBsPaginationBorderWidth} solid ${varBsPaginationBorderColor}`,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${pageLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${pageLink}:hover`, {
	zIndex: '2',
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${quartzScope}${pageLink}:focus`, {
	zIndex: '3',
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: '0',
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(`${quartzScope}${pageLink}${pageItemActive}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${quartzScope}${pageItemActive} > ${quartzScope}${pageLink}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${quartzScope}${pageLink}${pageItemDisabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${quartzScope}${pageItemDisabled} > ${quartzScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${quartzScope}${pageItem}:not(:first-child) ${quartzScope}${pageLink}`, {
	marginLeft: 'calc(-1 * 0)',
})

globalStyle(`${quartzScope}${pageItem}:first-child ${quartzScope}${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

globalStyle(`${quartzScope}${pageItem}:last-child ${quartzScope}${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

globalStyle(`${quartzScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${quartzScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${quartzScope}${badge}`, {
	vars: {
		[varBsBadgePaddingX]: '0.65em',
		[varBsBadgePaddingY]: '0.35em',
		[varBsBadgeFontSize]: '0.75em',
		[varBsBadgeFontWeight]: '700',
		[varBsBadgeColor]: '#fff',
		[varBsBadgeBorderRadius]: varBsBorderRadius,
	},
	display: 'inline-block',
	padding: `${varBsBadgePaddingY} ${varBsBadgePaddingX}`,
	fontSize: varBsBadgeFontSize,
	fontWeight: varBsBadgeFontWeight,
	lineHeight: '1',
	color: varBsBadgeColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	verticalAlign: 'baseline',
	borderRadius: varBsBadgeBorderRadius,
})

globalStyle(`${quartzScope}${badge}:empty`, {
	display: 'none',
})

globalStyle(`${quartzScope}${btn} ${quartzScope}${badge}`, {
	position: 'relative',
	top: '-1px',
})

globalStyle(`${quartzScope}${alert}`, {
	vars: {
		[varBsAlertBg]: 'transparent',
		[varBsAlertPaddingX]: '2rem',
		[varBsAlertPaddingY]: '2rem',
		[varBsAlertMarginBottom]: '1rem',
		[varBsAlertColor]: 'inherit',
		[varBsAlertBorderColor]: 'transparent',
		[varBsAlertBorder]: `${varBsBorderWidth} solid ${varBsAlertBorderColor}`,
		[varBsAlertBorderRadius]: varBsBorderRadius,
		[varBsAlertLinkColor]: 'inherit',
	},
	position: 'relative',
	padding: `${varBsAlertPaddingY} ${varBsAlertPaddingX}`,
	marginBottom: varBsAlertMarginBottom,
	color: varBsAlertColor,
	backgroundColor: varBsAlertBg,
	border: varBsAlertBorder,
	borderRadius: varBsAlertBorderRadius,
})

globalStyle(`${quartzScope}${alertHeading}`, {
	color: 'inherit',
})

globalStyle(`${quartzScope}${alertLink}`, {
	fontWeight: '700',
	color: varBsAlertLinkColor,
})

globalStyle(`${quartzScope}${alertDismissible}`, {
	paddingRight: '6rem',
})

globalStyle(`${quartzScope}${alertDismissible} ${quartzScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '2.5rem 2rem',
})

globalStyle(`${quartzScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertDark}`, {
	vars: {
		[varBsAlertColor]: varBsDarkTextEmphasis,
		[varBsAlertBg]: varBsDarkBgSubtle,
		[varBsAlertBorderColor]: varBsDarkBorderSubtle,
		[varBsAlertLinkColor]: varBsDarkTextEmphasis,
	},
})

globalKeyframes('progress-bar-stripes', {
	'0%': {
		backgroundPositionX: 'var(--bs-progress-height)',
	},
})

globalStyle(`${quartzScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: 'rgba(0, 0, 0, 0.2)',
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#e83283',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${quartzScope}${progressStacked}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: 'rgba(0, 0, 0, 0.2)',
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#e83283',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${quartzScope}${progressBar}`, {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	overflow: 'hidden',
	color: varBsProgressBarColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: varBsProgressBarBg,
	transition: varBsProgressBarTransition,
})

globalStyle(`${quartzScope}${progressBar}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${progressBarStriped}`, {
	backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${quartzScope}${progressStacked} > ${quartzScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${quartzScope}${progressStacked} > ${quartzScope}${progress} > ${quartzScope}${progressBar}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${progressBarAnimated}`, {
	animation: '1s linear infinite progress-bar-stripes',
})

globalStyle(`${quartzScope}${progressBarAnimated}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})

globalStyle(`${quartzScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: '#fff',
		[varBsListGroupBg]: 'transparent',
		[varBsListGroupBorderColor]: 'rgba(255, 255, 255, 0.2)',
		[varBsListGroupBorderWidth]: '0',
		[varBsListGroupBorderRadius]: varBsBorderRadius,
		[varBsListGroupItemPaddingX]: '2rem',
		[varBsListGroupItemPaddingY]: '1rem',
		[varBsListGroupActionColor]: '#fff',
		[varBsListGroupActionHoverColor]: '#fff',
		[varBsListGroupActionHoverBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsListGroupActionActiveColor]: varBsBodyColor,
		[varBsListGroupActionActiveBg]: varBsSecondaryBg,
		[varBsListGroupDisabledColor]: 'rgba(255, 255, 255, 0.7)',
		[varBsListGroupDisabledBg]: 'transparent',
		[varBsListGroupActiveColor]: '#fff',
		[varBsListGroupActiveBg]: '#e83283',
		[varBsListGroupActiveBorderColor]: '#e83283',
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '0',
	marginBottom: '0',
	borderRadius: varBsListGroupBorderRadius,
})

globalStyle(`${quartzScope}${listGroupNumbered}`, {
	listStyleType: 'none',
	counterReset: 'section',
})

globalStyle(`${quartzScope}${listGroupNumbered} > ${quartzScope}${listGroupItem}::before`, {
	content: 'counters(section, ".") ". "',
	counterIncrement: 'section',
})

globalStyle(`${quartzScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${quartzScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${quartzScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})

globalStyle(`${quartzScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${quartzScope}${listGroupItem}:disabled`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${quartzScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}`, {
	borderTopWidth: '0',
})

globalStyle(`${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${quartzScope}${listGroupItemAction}`, {
	width: '100%',
	color: varBsListGroupActionColor,
	textAlign: 'inherit',
})

globalStyle(`${quartzScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${quartzScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${quartzScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${quartzScope}${listGroupHorizontal}`, {
	flexDirection: 'row',
})

globalStyle(`${quartzScope}${listGroupHorizontal} > ${quartzScope}${listGroupItem}:first-child:not(:last-child)`, {
	borderBottomLeftRadius: varBsListGroupBorderRadius,
	borderTopRightRadius: '0',
})

globalStyle(`${quartzScope}${listGroupHorizontal} > ${quartzScope}${listGroupItem}:last-child:not(:first-child)`, {
	borderTopRightRadius: varBsListGroupBorderRadius,
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${listGroupHorizontal} > ${quartzScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${quartzScope}${listGroupHorizontal} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}`, {
	borderTopWidth: varBsListGroupBorderWidth,
	borderLeftWidth: '0',
})

globalStyle(`${quartzScope}${listGroupHorizontal} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${quartzScope}${listGroupHorizontalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalSm} > ${quartzScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalSm} > ${quartzScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalSm} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalSm} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalSm} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalMd} > ${quartzScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 768px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalMd} > ${quartzScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 768px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalMd} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalMd} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 768px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalMd} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalLg} > ${quartzScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 992px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalLg} > ${quartzScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 992px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalLg} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalLg} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 992px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalLg} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXl} > ${quartzScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 1200px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXl} > ${quartzScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 1200px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXl} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXl} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1200px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXl} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXxl} > ${quartzScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 1400px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXxl} > ${quartzScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 1400px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXxl} > ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXxl} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1400px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${quartzScope}${listGroupHorizontalXxl} > ${quartzScope}${listGroupItem} + ${quartzScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${quartzScope}${listGroupFlush}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${listGroupFlush} > ${quartzScope}${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${quartzScope}${listGroupFlush} > ${quartzScope}${listGroupItem}:last-child`, {
	borderBottomWidth: '0',
})

globalStyle(`${quartzScope}${listGroupItemPrimary}`, {
	vars: {
		[varBsListGroupColor]: varBsPrimaryTextEmphasis,
		[varBsListGroupBg]: varBsPrimaryBgSubtle,
		[varBsListGroupBorderColor]: varBsPrimaryBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsPrimaryBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsPrimaryBorderSubtle,
		[varBsListGroupActiveColor]: varBsPrimaryBgSubtle,
		[varBsListGroupActiveBg]: varBsPrimaryTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${quartzScope}${listGroupItemSecondary}`, {
	vars: {
		[varBsListGroupColor]: varBsSecondaryTextEmphasis,
		[varBsListGroupBg]: varBsSecondaryBgSubtle,
		[varBsListGroupBorderColor]: varBsSecondaryBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsSecondaryBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsSecondaryBorderSubtle,
		[varBsListGroupActiveColor]: varBsSecondaryBgSubtle,
		[varBsListGroupActiveBg]: varBsSecondaryTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${quartzScope}${listGroupItemSuccess}`, {
	vars: {
		[varBsListGroupColor]: varBsSuccessTextEmphasis,
		[varBsListGroupBg]: varBsSuccessBgSubtle,
		[varBsListGroupBorderColor]: varBsSuccessBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsSuccessBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsSuccessBorderSubtle,
		[varBsListGroupActiveColor]: varBsSuccessBgSubtle,
		[varBsListGroupActiveBg]: varBsSuccessTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${quartzScope}${listGroupItemInfo}`, {
	vars: {
		[varBsListGroupColor]: varBsInfoTextEmphasis,
		[varBsListGroupBg]: varBsInfoBgSubtle,
		[varBsListGroupBorderColor]: varBsInfoBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsInfoBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsInfoBorderSubtle,
		[varBsListGroupActiveColor]: varBsInfoBgSubtle,
		[varBsListGroupActiveBg]: varBsInfoTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${quartzScope}${listGroupItemWarning}`, {
	vars: {
		[varBsListGroupColor]: varBsWarningTextEmphasis,
		[varBsListGroupBg]: varBsWarningBgSubtle,
		[varBsListGroupBorderColor]: varBsWarningBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsWarningBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsWarningBorderSubtle,
		[varBsListGroupActiveColor]: varBsWarningBgSubtle,
		[varBsListGroupActiveBg]: varBsWarningTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${quartzScope}${listGroupItemDanger}`, {
	vars: {
		[varBsListGroupColor]: varBsDangerTextEmphasis,
		[varBsListGroupBg]: varBsDangerBgSubtle,
		[varBsListGroupBorderColor]: varBsDangerBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsDangerBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsDangerBorderSubtle,
		[varBsListGroupActiveColor]: varBsDangerBgSubtle,
		[varBsListGroupActiveBg]: varBsDangerTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${quartzScope}${listGroupItemLight}`, {
	vars: {
		[varBsListGroupColor]: varBsLightTextEmphasis,
		[varBsListGroupBg]: varBsLightBgSubtle,
		[varBsListGroupBorderColor]: varBsLightBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsLightBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsLightBorderSubtle,
		[varBsListGroupActiveColor]: varBsLightBgSubtle,
		[varBsListGroupActiveBg]: varBsLightTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${quartzScope}${listGroupItemDark}`, {
	vars: {
		[varBsListGroupColor]: varBsDarkTextEmphasis,
		[varBsListGroupBg]: varBsDarkBgSubtle,
		[varBsListGroupBorderColor]: varBsDarkBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsDarkBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsDarkBorderSubtle,
		[varBsListGroupActiveColor]: varBsDarkBgSubtle,
		[varBsListGroupActiveBg]: varBsDarkTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsDarkTextEmphasis,
	},
})

globalStyle(`${quartzScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(232, 50, 131, 0.25)',
		[varBsBtnCloseFocusOpacity]: '1',
		[varBsBtnCloseDisabledOpacity]: '0.25',
	},
	boxSizing: 'content-box',
	width: '1em',
	height: '1em',
	padding: '0.25em 0.25em',
	color: varBsBtnCloseColor,
	background: `transparent ${varBsBtnCloseBg} center/1em auto no-repeat`,
	filter: varBsBtnCloseFilter,
	border: '0',
	borderRadius: '0.5rem',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${quartzScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${quartzScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${quartzScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${quartzScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${quartzScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
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

globalStyle(`${quartzScope}${toast}`, {
	vars: {
		[varBsToastZindex]: '1090',
		[varBsToastPaddingX]: '0.75rem',
		[varBsToastPaddingY]: '0.5rem',
		[varBsToastSpacing]: '1.5rem',
		[varBsToastMaxWidth]: '350px',
		[varBsToastFontSize]: '0.875rem',
		[varBsToastColor]: '',
		[varBsToastBg]: `rgba(${varBsBodyBgRgb}, 0.85)`,
		[varBsToastBorderWidth]: varBsBorderWidth,
		[varBsToastBorderColor]: varBsBorderColorTranslucent,
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: '#fff',
		[varBsToastHeaderBg]: 'transparent',
		[varBsToastHeaderBorderColor]: 'rgba(255, 255, 255, 0.2)',
	},
	width: varBsToastMaxWidth,
	maxWidth: '100%',
	fontSize: varBsToastFontSize,
	color: varBsToastColor,
	pointerEvents: 'auto',
	backgroundColor: varBsToastBg,
	backgroundClip: 'padding-box',
	border: `${varBsToastBorderWidth} solid ${varBsToastBorderColor}`,
	boxShadow: varBsToastBoxShadow,
	borderRadius: varBsToastBorderRadius,
})

globalStyle(`${quartzScope}${toast}${toastShowing}`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${toast}:not(${toastShow})`, {
	display: 'none',
})

globalStyle(`${quartzScope}${toastContainer}`, {
	vars: {
		[varBsToastZindex]: '1090',
	},
	position: 'absolute',
	zIndex: varBsToastZindex,
	width: 'max-content',
	maxWidth: '100%',
	pointerEvents: 'none',
})

globalStyle(`${quartzScope}${toastContainer} > :not(:last-child)`, {
	marginBottom: varBsToastSpacing,
})

globalStyle(`${quartzScope}${toastHeader}`, {
	display: 'flex',
	alignItems: 'center',
	padding: `${varBsToastPaddingY} ${varBsToastPaddingX}`,
	color: varBsToastHeaderColor,
	backgroundColor: varBsToastHeaderBg,
	backgroundClip: 'padding-box',
	borderBottom: `${varBsToastBorderWidth} solid ${varBsToastHeaderBorderColor}`,
	borderTopLeftRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
	borderTopRightRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
})

globalStyle(`${quartzScope}${toastHeader} ${quartzScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${quartzScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})

globalStyle(`${quartzScope}${modal}`, {
	vars: {
		[varBsModalZindex]: '1055',
		[varBsModalWidth]: '500px',
		[varBsModalPadding]: '2rem',
		[varBsModalMargin]: '0.5rem',
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: varBsBodyBg,
		[varBsModalBorderColor]: varBsBorderColorTranslucent,
		[varBsModalBorderWidth]: varBsBorderWidth,
		[varBsModalBorderRadius]: varBsBorderRadiusLg,
		[varBsModalBoxShadow]: varBsBoxShadowSm,
		[varBsModalInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - (${varBsBorderWidth}))`,
		[varBsModalHeaderPaddingX]: '2rem',
		[varBsModalHeaderPaddingY]: '2rem',
		[varBsModalHeaderPadding]: '2rem 2rem',
		[varBsModalHeaderBorderColor]: varBsBorderColor,
		[varBsModalHeaderBorderWidth]: varBsBorderWidth,
		[varBsModalTitleLineHeight]: '1.5',
		[varBsModalFooterGap]: '0.5rem',
		[varBsModalFooterBg]: '',
		[varBsModalFooterBorderColor]: varBsBorderColor,
		[varBsModalFooterBorderWidth]: varBsBorderWidth,
	},
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: varBsModalZindex,
	display: 'none',
	width: '100%',
	height: '100%',
	overflowX: 'hidden',
	overflowY: 'auto',
	outline: '0',
})

globalStyle(`${quartzScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${quartzScope}${modal}${modalFade} ${quartzScope}${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${quartzScope}${modal}${modalFade} ${quartzScope}${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${modal}${modalShowHook} ${quartzScope}${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${quartzScope}${modal}${modalStatic} ${quartzScope}${modalDialog}`, {
	transform: 'scale(1.02)',
})

globalStyle(`${quartzScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${quartzScope}${modalDialogScrollable} ${quartzScope}${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${quartzScope}${modalDialogScrollable} ${quartzScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${quartzScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${quartzScope}${modalContent}`, {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	color: varBsModalColor,
	pointerEvents: 'auto',
	backgroundColor: varBsModalBg,
	backgroundClip: 'padding-box',
	border: `${varBsModalBorderWidth} solid ${varBsModalBorderColor}`,
	borderRadius: varBsModalBorderRadius,
	outline: '0',
})

globalStyle(`${quartzScope}${modalBackdrop}`, {
	vars: {
		[varBsBackdropZindex]: '1050',
		[varBsBackdropBg]: '#000',
		[varBsBackdropOpacity]: '0.5',
	},
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: varBsBackdropZindex,
	width: '100vw',
	height: '100vh',
	backgroundColor: varBsBackdropBg,
})

globalStyle(`${quartzScope}${modalBackdrop}${modalFade}`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${modalBackdrop}${modalShowHook}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${quartzScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: '0',
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${quartzScope}${modalHeader} ${quartzScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${quartzScope}${modalTitle}`, {
	marginBottom: '0',
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${quartzScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${quartzScope}${modalFooter}`, {
	display: 'flex',
	flexShrink: '0',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: `calc(${varBsModalPadding} - ${varBsModalFooterGap} * 0.5)`,
	backgroundColor: varBsModalFooterBg,
	borderTop: `${varBsModalFooterBorderWidth} solid ${varBsModalFooterBorderColor}`,
	borderBottomRightRadius: varBsModalInnerBorderRadius,
	borderBottomLeftRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${quartzScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`${quartzScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${quartzScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalWidth]: '300px',
			},
		},
	},
})

globalStyle(`${quartzScope}${modalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${quartzScope}${modalXl}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${quartzScope}${modalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsModalWidth]: '1140px',
			},
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: '0',
})

globalStyle(`${quartzScope}${modalFullscreen} ${quartzScope}${modalContent}`, {
	height: '100%',
	border: '0',
	borderRadius: '0',
})

globalStyle(`${quartzScope}${modalFullscreen} ${quartzScope}${modalHeader}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${modalFullscreen} ${quartzScope}${modalFooter}`, {
	borderRadius: '0',
})

globalStyle(`${quartzScope}${modalFullscreen} ${quartzScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${quartzScope}${modalFullscreenSmDown}`, {
	'@media': {
		'(max-width: 575.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenSmDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 575.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenSmDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenSmDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenSmDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown}`, {
	'@media': {
		'(max-width: 767.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 767.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenMdDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown}`, {
	'@media': {
		'(max-width: 991.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 991.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenLgDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXlDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown} ${quartzScope}${modalContent}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown} ${quartzScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown} ${quartzScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${modalFullscreenXxlDown} ${quartzScope}${modalBody}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${tooltip}`, {
	vars: {
		[varBsTooltipZindex]: '1080',
		[varBsTooltipMaxWidth]: '200px',
		[varBsTooltipPaddingX]: '1rem',
		[varBsTooltipPaddingY]: '0.5rem',
		[varBsTooltipMargin]: '',
		[varBsTooltipFontSize]: '0.875rem',
		[varBsTooltipColor]: varBsBodyBg,
		[varBsTooltipBg]: varBsEmphasisColor,
		[varBsTooltipBorderRadius]: varBsBorderRadius,
		[varBsTooltipOpacity]: '0.7',
		[varBsTooltipArrowWidth]: '0.8rem',
		[varBsTooltipArrowHeight]: '0.4rem',
	},
	zIndex: varBsTooltipZindex,
	display: 'block',
	margin: varBsTooltipMargin,
	fontFamily: varBsFontSansSerif,
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '1.5',
	textAlign: 'start',
	textDecoration: 'none',
	textShadow: 'none',
	textTransform: 'none',
	letterSpacing: 'normal',
	wordBreak: 'normal',
	whiteSpace: 'normal',
	wordSpacing: 'normal',
	lineBreak: 'auto',
	fontSize: varBsTooltipFontSize,
	wordWrap: 'break-word',
	opacity: '0',
})

globalStyle(`${quartzScope}${tooltip}${tooltipShow}`, {
	opacity: varBsTooltipOpacity,
})

globalStyle(`${quartzScope}${tooltip} ${quartzScope}${tooltipArrow}`, {
	display: 'block',
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

globalStyle(`${quartzScope}${tooltip} ${quartzScope}${tooltipArrow}::before`, {
	position: 'absolute',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
})

globalStyle(`${quartzScope}${bsTooltipTop} ${quartzScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${quartzScope}${bsTooltipAuto}[data-popper-placement^=top] ${quartzScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${quartzScope}${bsTooltipTop} ${quartzScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${quartzScope}${bsTooltipAuto}[data-popper-placement^=top] ${quartzScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${quartzScope}${bsTooltipEnd} ${quartzScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${quartzScope}${bsTooltipAuto}[data-popper-placement^=right] ${quartzScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${quartzScope}${bsTooltipEnd} ${quartzScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${quartzScope}${bsTooltipAuto}[data-popper-placement^=right] ${quartzScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${quartzScope}${bsTooltipBottom} ${quartzScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${quartzScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${quartzScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${quartzScope}${bsTooltipBottom} ${quartzScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${quartzScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${quartzScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${quartzScope}${bsTooltipStart} ${quartzScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${quartzScope}${bsTooltipAuto}[data-popper-placement^=left] ${quartzScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${quartzScope}${bsTooltipStart} ${quartzScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${quartzScope}${bsTooltipAuto}[data-popper-placement^=left] ${quartzScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${quartzScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: 'center',
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})

globalStyle(`${quartzScope}${popover}`, {
	vars: {
		[varBsPopoverZindex]: '1070',
		[varBsPopoverMaxWidth]: '276px',
		[varBsPopoverFontSize]: '0.875rem',
		[varBsPopoverBg]: varBsBodyBg,
		[varBsPopoverBorderWidth]: varBsBorderWidth,
		[varBsPopoverBorderColor]: varBsBorderColorTranslucent,
		[varBsPopoverBorderRadius]: varBsBorderRadiusLg,
		[varBsPopoverInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - ${varBsBorderWidth})`,
		[varBsPopoverBoxShadow]: varBsBoxShadow,
		[varBsPopoverHeaderPaddingX]: '2rem',
		[varBsPopoverHeaderPaddingY]: '0.5rem',
		[varBsPopoverHeaderFontSize]: '1rem',
		[varBsPopoverHeaderColor]: 'inherit',
		[varBsPopoverHeaderBg]: 'transparent',
		[varBsPopoverBodyPaddingX]: '2rem',
		[varBsPopoverBodyPaddingY]: '1rem',
		[varBsPopoverBodyColor]: '#fff',
		[varBsPopoverArrowWidth]: '1rem',
		[varBsPopoverArrowHeight]: '0.5rem',
		[varBsPopoverArrowBorder]: varBsPopoverBorderColor,
	},
	zIndex: varBsPopoverZindex,
	display: 'block',
	maxWidth: varBsPopoverMaxWidth,
	fontFamily: varBsFontSansSerif,
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '1.5',
	textAlign: 'start',
	textDecoration: 'none',
	textShadow: 'none',
	textTransform: 'none',
	letterSpacing: 'normal',
	wordBreak: 'normal',
	whiteSpace: 'normal',
	wordSpacing: 'normal',
	lineBreak: 'auto',
	fontSize: varBsPopoverFontSize,
	wordWrap: 'break-word',
	backgroundColor: varBsPopoverBg,
	backgroundClip: 'padding-box',
	border: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderRadius: varBsPopoverBorderRadius,
})

globalStyle(`${quartzScope}${popover} ${quartzScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${quartzScope}${popover} ${quartzScope}${popoverArrow}::before`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${quartzScope}${popover} ${quartzScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${quartzScope}${bsPopoverTop} > ${quartzScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=top] > ${quartzScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${quartzScope}${bsPopoverTop} > ${quartzScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=top] > ${quartzScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${quartzScope}${bsPopoverTop} > ${quartzScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=top] > ${quartzScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${quartzScope}${bsPopoverTop} > ${quartzScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=top] > ${quartzScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${quartzScope}${bsPopoverTop} > ${quartzScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=top] > ${quartzScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${quartzScope}${bsPopoverEnd} > ${quartzScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=right] > ${quartzScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${quartzScope}${bsPopoverEnd} > ${quartzScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=right] > ${quartzScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${quartzScope}${bsPopoverEnd} > ${quartzScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=right] > ${quartzScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${quartzScope}${bsPopoverEnd} > ${quartzScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=right] > ${quartzScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${quartzScope}${bsPopoverEnd} > ${quartzScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=right] > ${quartzScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${quartzScope}${bsPopoverBottom} > ${quartzScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${quartzScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${quartzScope}${bsPopoverBottom} > ${quartzScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${quartzScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${quartzScope}${bsPopoverBottom} > ${quartzScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${quartzScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${quartzScope}${bsPopoverBottom} > ${quartzScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${quartzScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${quartzScope}${bsPopoverBottom} > ${quartzScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${quartzScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${quartzScope}${bsPopoverBottom} ${quartzScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=bottom] ${quartzScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${quartzScope}${bsPopoverStart} > ${quartzScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=left] > ${quartzScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${quartzScope}${bsPopoverStart} > ${quartzScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=left] > ${quartzScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${quartzScope}${bsPopoverStart} > ${quartzScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=left] > ${quartzScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${quartzScope}${bsPopoverStart} > ${quartzScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=left] > ${quartzScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${quartzScope}${bsPopoverStart} > ${quartzScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-placement^=left] > ${quartzScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${quartzScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${quartzScope}${popoverHeader}:empty`, {
	display: 'none',
})

globalStyle(`${quartzScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

globalStyle(`${quartzScope}${carousel}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${carousel}${pointerEvent}`, {
	touchAction: 'pan-y',
})

globalStyle(`${quartzScope}${carouselInner}`, {
	position: 'relative',
	width: '100%',
	overflow: 'hidden',
})

globalStyle(`${quartzScope}${carouselInner}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${quartzScope}${carouselItem}`, {
	position: 'relative',
	display: 'none',
	float: 'left',
	width: '100%',
	marginRight: '-100%',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
	transition: 'transform 0.6s ease-in-out',
})

globalStyle(`${quartzScope}${carouselItem}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${carouselItemNext}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${carouselItemPrev}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${carouselItemNext}:not(${carouselItemStart})`, {
	transform: 'translateX(100%)',
})

globalStyle(`${quartzScope}${active}${carouselItemEnd}`, {
	transform: 'translateX(100%)',
})

globalStyle(`${quartzScope}${carouselItemPrev}:not(${carouselItemEnd})`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${quartzScope}${active}${carouselItemStart}`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${quartzScope}${carouselFade} ${quartzScope}${carouselItem}`, {
	opacity: '0',
	transitionProperty: 'opacity',
	transform: 'none',
})

globalStyle(`${quartzScope}${carouselFade} ${quartzScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${quartzScope}${carouselFade} ${quartzScope}${carouselItemNext}${carouselItemStart}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${quartzScope}${carouselFade} ${quartzScope}${carouselItemPrev}${carouselItemEnd}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${quartzScope}${carouselFade} ${quartzScope}${active}${carouselItemStart}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${quartzScope}${carouselFade} ${quartzScope}${active}${carouselItemEnd}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${quartzScope}${carouselFade} ${quartzScope}${active}${carouselItemStart}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${carouselFade} ${quartzScope}${active}${carouselItemEnd}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${carouselControlPrev}`, {
	position: 'absolute',
	top: '0',
	bottom: '0',
	zIndex: '1',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '15%',
	padding: '0',
	color: '#fff',
	textAlign: 'center',
	background: 'none',
	filter: varBsCarouselControlIconFilter,
	border: '0',
	opacity: '0.5',
	transition: 'opacity 0.15s ease',
})

globalStyle(`${quartzScope}${carouselControlNext}`, {
	position: 'absolute',
	top: '0',
	bottom: '0',
	zIndex: '1',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '15%',
	padding: '0',
	color: '#fff',
	textAlign: 'center',
	background: 'none',
	filter: varBsCarouselControlIconFilter,
	border: '0',
	opacity: '0.5',
	transition: 'opacity 0.15s ease',
})

globalStyle(`${quartzScope}${carouselControlPrev}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${carouselControlNext}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${carouselControlPrev}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${quartzScope}${carouselControlPrev}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${quartzScope}${carouselControlNext}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${quartzScope}${carouselControlNext}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${quartzScope}${carouselControlPrev}`, {
	left: '0',
})

globalStyle(`${quartzScope}${carouselControlNext}`, {
	right: '0',
})

globalStyle(`${quartzScope}${carouselControlPrevIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${quartzScope}${carouselControlNextIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${quartzScope}${carouselControlPrevIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0\'/%3e%3c/svg%3e") ',
})

globalStyle(`${quartzScope}${carouselControlNextIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e") ',
})

globalStyle(`${quartzScope}${carouselIndicators}`, {
	position: 'absolute',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '2',
	display: 'flex',
	justifyContent: 'center',
	padding: '0',
	marginRight: '15%',
	marginBottom: '1rem',
	marginLeft: '15%',
})

globalStyle(`${quartzScope}${carouselIndicators} ${quartzScope}[data-bs-target]`, {
	boxSizing: 'content-box',
	flex: '0 1 auto',
	width: '30px',
	height: '3px',
	padding: '0',
	marginRight: '3px',
	marginLeft: '3px',
	textIndent: '-999px',
	cursor: 'pointer',
	backgroundColor: varBsCarouselIndicatorActiveBg,
	backgroundClip: 'padding-box',
	border: '0',
	borderTop: '10px solid transparent',
	borderBottom: '10px solid transparent',
	opacity: '0.5',
	transition: 'opacity 0.6s ease',
})

globalStyle(`${quartzScope}${carouselIndicators} ${quartzScope}[data-bs-target]`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${carouselIndicators} ${quartzScope}${active}`, {
	opacity: '1',
})

globalStyle(`${quartzScope}${carouselCaption}`, {
	position: 'absolute',
	right: '15%',
	bottom: '1.25rem',
	left: '15%',
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	color: varBsCarouselCaptionColor,
	textAlign: 'center',
})

globalStyle(`${quartzScope}${carouselDark}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
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

globalStyle(`${quartzScope}${spinnerGrow}`, {
	display: 'inline-block',
	flexShrink: '0',
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: '50%',
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
})

globalStyle(`${quartzScope}${spinnerBorder}`, {
	display: 'inline-block',
	flexShrink: '0',
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: '50%',
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
})

globalKeyframes('spinner-border', {
	'to': {
		transform: 'rotate(360deg) ',
	},
})

globalStyle(`${quartzScope}${spinnerBorder}`, {
	vars: {
		[varBsSpinnerWidth]: '2rem',
		[varBsSpinnerHeight]: '2rem',
		[varBsSpinnerVerticalAlign]: '-0.125em',
		[varBsSpinnerBorderWidth]: '0.25em',
		[varBsSpinnerAnimationSpeed]: '0.75s',
		[varBsSpinnerAnimationName]: 'spinner-border',
	},
	border: `${varBsSpinnerBorderWidth} solid currentcolor`,
	borderRightColor: 'transparent',
})

globalStyle(`${quartzScope}${spinnerBorderSm}`, {
	vars: {
		[varBsSpinnerWidth]: '1rem',
		[varBsSpinnerHeight]: '1rem',
		[varBsSpinnerBorderWidth]: '0.2em',
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

globalStyle(`${quartzScope}${spinnerGrow}`, {
	vars: {
		[varBsSpinnerWidth]: '2rem',
		[varBsSpinnerHeight]: '2rem',
		[varBsSpinnerVerticalAlign]: '-0.125em',
		[varBsSpinnerAnimationSpeed]: '0.75s',
		[varBsSpinnerAnimationName]: 'spinner-grow',
	},
	backgroundColor: 'currentcolor',
	opacity: '0',
})

globalStyle(`${quartzScope}${spinnerGrowSm}`, {
	vars: {
		[varBsSpinnerWidth]: '1rem',
		[varBsSpinnerHeight]: '1rem',
	},
})

globalStyle(`${quartzScope}${spinnerBorder}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

globalStyle(`${quartzScope}${spinnerGrow}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

globalStyle(`${quartzScope}${offcanvas}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '2rem',
		[varBsOffcanvasPaddingY]: '2rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '2rem',
		[varBsOffcanvasPaddingY]: '2rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${quartzScope}${offcanvasXl}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '2rem',
		[varBsOffcanvasPaddingY]: '2rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${quartzScope}${offcanvasLg}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '2rem',
		[varBsOffcanvasPaddingY]: '2rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${quartzScope}${offcanvasMd}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '2rem',
		[varBsOffcanvasPaddingY]: '2rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${quartzScope}${offcanvasSm}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '2rem',
		[varBsOffcanvasPaddingY]: '2rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${quartzScope}${offcanvasSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			position: 'fixed',
			bottom: '0',
			zIndex: varBsOffcanvasZindex,
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '100%',
			color: varBsOffcanvasColor,
			visibility: 'hidden',
			backgroundColor: varBsOffcanvasBg,
			backgroundClip: 'padding-box',
			outline: '0',
			transition: varBsOffcanvasTransition,
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}`, {
	'@media': {
		'(max-width: 575.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}${offcanvasStart}`, {
	'@media': {
		'(max-width: 575.98px)': {
			top: '0',
			left: '0',
			width: varBsOffcanvasWidth,
			borderRight: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}${offcanvasEnd}`, {
	'@media': {
		'(max-width: 575.98px)': {
			top: '0',
			right: '0',
			width: varBsOffcanvasWidth,
			borderLeft: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}${offcanvasTop}`, {
	'@media': {
		'(max-width: 575.98px)': {
			top: '0',
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderBottom: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}${offcanvasBottom}`, {
	'@media': {
		'(max-width: 575.98px)': {
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderTop: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}${showing}`, {
	'@media': {
		'(max-width: 575.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 575.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}${showing}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}${hiding}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsOffcanvasHeight]: 'auto',
				[varBsOffcanvasBorderWidth]: '0',
			},
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasSm} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			position: 'fixed',
			bottom: '0',
			zIndex: varBsOffcanvasZindex,
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '100%',
			color: varBsOffcanvasColor,
			visibility: 'hidden',
			backgroundColor: varBsOffcanvasBg,
			backgroundClip: 'padding-box',
			outline: '0',
			transition: varBsOffcanvasTransition,
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}`, {
	'@media': {
		'(max-width: 767.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${offcanvasStart}`, {
	'@media': {
		'(max-width: 767.98px)': {
			top: '0',
			left: '0',
			width: varBsOffcanvasWidth,
			borderRight: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${offcanvasEnd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			top: '0',
			right: '0',
			width: varBsOffcanvasWidth,
			borderLeft: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${offcanvasTop}`, {
	'@media': {
		'(max-width: 767.98px)': {
			top: '0',
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderBottom: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${offcanvasBottom}`, {
	'@media': {
		'(max-width: 767.98px)': {
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderTop: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${showing}`, {
	'@media': {
		'(max-width: 767.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 767.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${showing}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${hiding}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsOffcanvasHeight]: 'auto',
				[varBsOffcanvasBorderWidth]: '0',
			},
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			position: 'fixed',
			bottom: '0',
			zIndex: varBsOffcanvasZindex,
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '100%',
			color: varBsOffcanvasColor,
			visibility: 'hidden',
			backgroundColor: varBsOffcanvasBg,
			backgroundClip: 'padding-box',
			outline: '0',
			transition: varBsOffcanvasTransition,
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}`, {
	'@media': {
		'(max-width: 991.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${offcanvasStart}`, {
	'@media': {
		'(max-width: 991.98px)': {
			top: '0',
			left: '0',
			width: varBsOffcanvasWidth,
			borderRight: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${offcanvasEnd}`, {
	'@media': {
		'(max-width: 991.98px)': {
			top: '0',
			right: '0',
			width: varBsOffcanvasWidth,
			borderLeft: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${offcanvasTop}`, {
	'@media': {
		'(max-width: 991.98px)': {
			top: '0',
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderBottom: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${offcanvasBottom}`, {
	'@media': {
		'(max-width: 991.98px)': {
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderTop: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${showing}`, {
	'@media': {
		'(max-width: 991.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 991.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${showing}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${hiding}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsOffcanvasHeight]: 'auto',
				[varBsOffcanvasBorderWidth]: '0',
			},
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			position: 'fixed',
			bottom: '0',
			zIndex: varBsOffcanvasZindex,
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '100%',
			color: varBsOffcanvasColor,
			visibility: 'hidden',
			backgroundColor: varBsOffcanvasBg,
			backgroundClip: 'padding-box',
			outline: '0',
			transition: varBsOffcanvasTransition,
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}`, {
	'@media': {
		'(max-width: 1199.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${offcanvasStart}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			top: '0',
			left: '0',
			width: varBsOffcanvasWidth,
			borderRight: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${offcanvasEnd}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			top: '0',
			right: '0',
			width: varBsOffcanvasWidth,
			borderLeft: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${offcanvasTop}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			top: '0',
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderBottom: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${offcanvasBottom}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderTop: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${showing}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 1199.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${showing}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${hiding}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsOffcanvasHeight]: 'auto',
				[varBsOffcanvasBorderWidth]: '0',
			},
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			position: 'fixed',
			bottom: '0',
			zIndex: varBsOffcanvasZindex,
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '100%',
			color: varBsOffcanvasColor,
			visibility: 'hidden',
			backgroundColor: varBsOffcanvasBg,
			backgroundClip: 'padding-box',
			outline: '0',
			transition: varBsOffcanvasTransition,
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}`, {
	'@media': {
		'(max-width: 1399.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${offcanvasStart}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			top: '0',
			left: '0',
			width: varBsOffcanvasWidth,
			borderRight: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${offcanvasEnd}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			top: '0',
			right: '0',
			width: varBsOffcanvasWidth,
			borderLeft: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateX(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${offcanvasTop}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			top: '0',
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderBottom: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(-100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${offcanvasBottom}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			right: '0',
			left: '0',
			height: varBsOffcanvasHeight,
			maxHeight: '100%',
			borderTop: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
			transform: 'translateY(100%)',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${showing}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 1399.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${showing}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${hiding}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsOffcanvasHeight]: 'auto',
				[varBsOffcanvasBorderWidth]: '0',
			},
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl} ${quartzScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl} ${quartzScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
			backgroundColor: 'transparent !important',
		},
	},
})

globalStyle(`${quartzScope}${offcanvas}`, {
	position: 'fixed',
	bottom: '0',
	zIndex: varBsOffcanvasZindex,
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '100%',
	color: varBsOffcanvasColor,
	visibility: 'hidden',
	backgroundColor: varBsOffcanvasBg,
	backgroundClip: 'padding-box',
	outline: '0',
	transition: varBsOffcanvasTransition,
})

globalStyle(`${quartzScope}${offcanvas}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${offcanvas}${offcanvasStart}`, {
	top: '0',
	left: '0',
	width: varBsOffcanvasWidth,
	borderRight: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateX(-100%)',
})

globalStyle(`${quartzScope}${offcanvas}${offcanvasEnd}`, {
	top: '0',
	right: '0',
	width: varBsOffcanvasWidth,
	borderLeft: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateX(100%)',
})

globalStyle(`${quartzScope}${offcanvas}${offcanvasTop}`, {
	top: '0',
	right: '0',
	left: '0',
	height: varBsOffcanvasHeight,
	maxHeight: '100%',
	borderBottom: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateY(-100%)',
})

globalStyle(`${quartzScope}${offcanvas}${offcanvasBottom}`, {
	right: '0',
	left: '0',
	height: varBsOffcanvasHeight,
	maxHeight: '100%',
	borderTop: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateY(100%)',
})

globalStyle(`${quartzScope}${offcanvas}${showing}`, {
	transform: 'none',
})

globalStyle(`${quartzScope}${offcanvas}${show}:not(${hiding})`, {
	transform: 'none',
})

globalStyle(`${quartzScope}${offcanvas}${showing}`, {
	visibility: 'visible',
})

globalStyle(`${quartzScope}${offcanvas}${hiding}`, {
	visibility: 'visible',
})

globalStyle(`${quartzScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${quartzScope}${offcanvasBackdrop}`, {
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: '1040',
	width: '100vw',
	height: '100vh',
	backgroundColor: '#000',
})

globalStyle(`${quartzScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})

globalStyle(`${quartzScope}${offcanvasHeader}`, {
	display: 'flex',
	alignItems: 'center',
	padding: `${varBsOffcanvasPaddingY} ${varBsOffcanvasPaddingX}`,
})

globalStyle(`${quartzScope}${offcanvasHeader} ${quartzScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${quartzScope}${offcanvasTitle}`, {
	marginBottom: '0',
	lineHeight: varBsOffcanvasTitleLineHeight,
})

globalStyle(`${quartzScope}${offcanvasBody}`, {
	flexGrow: '1',
	padding: `${varBsOffcanvasPaddingY} ${varBsOffcanvasPaddingX}`,
	overflowY: 'auto',
})

globalStyle(`${quartzScope}${placeholder}`, {
	display: 'inline-block',
	minHeight: '1em',
	verticalAlign: 'middle',
	cursor: 'wait',
	backgroundColor: 'currentcolor',
	opacity: '0.5',
})

globalStyle(`${quartzScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${quartzScope}${placeholderXs}`, {
	minHeight: '0.6em',
})

globalStyle(`${quartzScope}${placeholderSm}`, {
	minHeight: '0.8em',
})

globalStyle(`${quartzScope}${placeholderLg}`, {
	minHeight: '1.2em',
})

globalStyle(`${quartzScope}${placeholderGlow} ${quartzScope}${placeholder}`, {
	animation: 'placeholder-glow 2s ease-in-out infinite',
})

globalKeyframes('placeholder-glow', {
	'50%': {
		opacity: '0.2',
	},
})

globalStyle(`${quartzScope}${placeholderWave}`, {
	WebkitMaskImage: 'linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%)',
	maskImage: 'linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%)',
	WebkitMaskSize: '200% 100%',
	maskSize: '200% 100%',
	animation: 'placeholder-wave 2s linear infinite',
})

globalKeyframes('placeholder-wave', {
	'100%': {
		WebkitMaskPosition: '-200% 0%',
		maskPosition: '-200% 0%',
	},
})

globalStyle(`${quartzScope}${clearfix}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${quartzScope}${textBgPrimary}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgSecondary}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgSuccess}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgInfo}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgWarning}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgDanger}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgLight}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgDark}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkPrimary}`, {
	color: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkPrimary}:hover`, {
	color: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkPrimary}:focus`, {
	color: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSecondary}`, {
	color: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSecondary}:hover`, {
	color: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSecondary}:focus`, {
	color: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSuccess}`, {
	color: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSuccess}:hover`, {
	color: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSuccess}:focus`, {
	color: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkInfo}`, {
	color: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkInfo}:hover`, {
	color: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkInfo}:focus`, {
	color: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkWarning}`, {
	color: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkWarning}:hover`, {
	color: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkWarning}:focus`, {
	color: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDanger}`, {
	color: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDanger}:hover`, {
	color: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDanger}:focus`, {
	color: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkLight}`, {
	color: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkLight}:hover`, {
	color: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkLight}:focus`, {
	color: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDark}`, {
	color: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDark}:hover`, {
	color: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDark}:focus`, {
	color: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkBodyEmphasis}`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkBodyEmphasis}:hover`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.75')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
})

globalStyle(`${quartzScope}${linkBodyEmphasis}:focus`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.75')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
})

globalStyle(`${quartzScope}${focusRing}:focus`, {
	outline: '0',
	boxShadow: `var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) ${varBsFocusRingWidth} ${varBsFocusRingColor}`,
})

globalStyle(`${quartzScope}${iconLink}`, {
	display: 'inline-flex',
	gap: '0.375rem',
	alignItems: 'center',
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.5')})`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.5')})`,
	textUnderlineOffset: '0.25em',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
})

globalStyle(`${quartzScope}${iconLink} > ${quartzScope}${bi}`, {
	flexShrink: '0',
	width: '1em',
	height: '1em',
	fill: 'currentcolor',
	transition: '0.2s ease-in-out transform',
})

globalStyle(`${quartzScope}${iconLink} > ${quartzScope}${bi}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${iconLinkHover}:hover > ${quartzScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${quartzScope}${iconLinkHover}:focus-visible > ${quartzScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${quartzScope}${ratio}`, {
	position: 'relative',
	width: '100%',
})

globalStyle(`${quartzScope}${ratio}::before`, {
	display: 'block',
	paddingTop: varBsAspectRatio,
	content: '""',
})

globalStyle(`${quartzScope}${ratio} > *`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
})

globalStyle(`${quartzScope}${ratio1x1}`, {
	vars: {
		[varBsAspectRatio]: '100%',
	},
})

globalStyle(`${quartzScope}${ratio4x3}`, {
	vars: {
		[varBsAspectRatio]: '75%',
	},
})

globalStyle(`${quartzScope}${ratio16x9}`, {
	vars: {
		[varBsAspectRatio]: '56.25%',
	},
})

globalStyle(`${quartzScope}${ratio21x9}`, {
	vars: {
		[varBsAspectRatio]: '42.8571428571%',
	},
})

globalStyle(`${quartzScope}${fixedTop}`, {
	position: 'fixed',
	top: '0',
	right: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${quartzScope}${fixedBottom}`, {
	position: 'fixed',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${quartzScope}${stickyTop}`, {
	position: 'sticky',
	top: '0',
	zIndex: '1020',
})

globalStyle(`${quartzScope}${stickyBottom}`, {
	position: 'sticky',
	bottom: '0',
	zIndex: '1020',
})

globalStyle(`${quartzScope}${stickySmTop}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickySmBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyMdTop}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyMdBottom}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyLgTop}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyLgBottom}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyXlBottom}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyXxlTop}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyXxlBottom}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${hstack}`, {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	alignSelf: 'stretch',
})

globalStyle(`${quartzScope}${vstack}`, {
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	alignSelf: 'stretch',
})

globalStyle(`${quartzScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${quartzScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within)`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${quartzScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${quartzScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within):not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${quartzScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${quartzScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within) *`, {
	overflow: 'hidden !important',
})

globalStyle(`${quartzScope}${stretchedLink}::after`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1',
	content: '""',
})

globalStyle(`${quartzScope}${textTruncate}`, {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

globalStyle(`${quartzScope}${vr}`, {
	display: 'inline-block',
	alignSelf: 'stretch',
	width: varBsBorderWidth,
	minHeight: '1em',
	backgroundColor: 'currentcolor',
	opacity: '0.25',
})

globalStyle(`${quartzScope}${alignBaseline}`, {
	verticalAlign: 'baseline !important',
})

globalStyle(`${quartzScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${quartzScope}${alignMiddle}`, {
	verticalAlign: 'middle !important',
})

globalStyle(`${quartzScope}${alignBottom}`, {
	verticalAlign: 'bottom !important',
})

globalStyle(`${quartzScope}${alignTextBottom}`, {
	verticalAlign: 'text-bottom !important',
})

globalStyle(`${quartzScope}${alignTextTop}`, {
	verticalAlign: 'text-top !important',
})

globalStyle(`${quartzScope}${floatStart}`, {
	float: 'left !important',
})

globalStyle(`${quartzScope}${floatEnd}`, {
	float: 'right !important',
})

globalStyle(`${quartzScope}${floatNone}`, {
	float: 'none !important',
})

globalStyle(`${quartzScope}${objectFitContain}`, {
	OObjectFit: 'contain !important',
	objectFit: 'contain !important',
})

globalStyle(`${quartzScope}${objectFitCover}`, {
	OObjectFit: 'cover !important',
	objectFit: 'cover !important',
})

globalStyle(`${quartzScope}${objectFitFill}`, {
	OObjectFit: 'fill !important',
	objectFit: 'fill !important',
})

globalStyle(`${quartzScope}${objectFitScale}`, {
	OObjectFit: 'scale-down !important',
	objectFit: 'scale-down !important',
})

globalStyle(`${quartzScope}${objectFitNone}`, {
	OObjectFit: 'none !important',
	objectFit: 'none !important',
})

globalStyle(`${quartzScope}${opacity0}`, {
	opacity: '0 !important',
})

globalStyle(`${quartzScope}${opacity25}`, {
	opacity: '0.25 !important',
})

globalStyle(`${quartzScope}${opacity50}`, {
	opacity: '0.5 !important',
})

globalStyle(`${quartzScope}${opacity75}`, {
	opacity: '0.75 !important',
})

globalStyle(`${quartzScope}${opacity100}`, {
	opacity: '1 !important',
})

globalStyle(`${quartzScope}${overflowAuto}`, {
	overflow: 'auto !important',
})

globalStyle(`${quartzScope}${overflowHidden}`, {
	overflow: 'hidden !important',
})

globalStyle(`${quartzScope}${overflowVisible}`, {
	overflow: 'visible !important',
})

globalStyle(`${quartzScope}${overflowScroll}`, {
	overflow: 'scroll !important',
})

globalStyle(`${quartzScope}${overflowXAuto}`, {
	overflowX: 'auto !important',
})

globalStyle(`${quartzScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${quartzScope}${overflowXVisible}`, {
	overflowX: 'visible !important',
})

globalStyle(`${quartzScope}${overflowXScroll}`, {
	overflowX: 'scroll !important',
})

globalStyle(`${quartzScope}${overflowYAuto}`, {
	overflowY: 'auto !important',
})

globalStyle(`${quartzScope}${overflowYHidden}`, {
	overflowY: 'hidden !important',
})

globalStyle(`${quartzScope}${overflowYVisible}`, {
	overflowY: 'visible !important',
})

globalStyle(`${quartzScope}${overflowYScroll}`, {
	overflowY: 'scroll !important',
})

globalStyle(`${quartzScope}${dInline}`, {
	display: 'inline !important',
})

globalStyle(`${quartzScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${quartzScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${quartzScope}${dGrid}`, {
	display: 'grid !important',
})

globalStyle(`${quartzScope}${dInlineGrid}`, {
	display: 'inline-grid !important',
})

globalStyle(`${quartzScope}${dTable}`, {
	display: 'table !important',
})

globalStyle(`${quartzScope}${dTableRow}`, {
	display: 'table-row !important',
})

globalStyle(`${quartzScope}${dTableCell}`, {
	display: 'table-cell !important',
})

globalStyle(`${quartzScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${quartzScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${quartzScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${quartzScope}${shadow}`, {
	boxShadow: `${varBsBoxShadow} !important`,
})

globalStyle(`${quartzScope}${shadowSm}`, {
	boxShadow: `${varBsBoxShadowSm} !important`,
})

globalStyle(`${quartzScope}${shadowLg}`, {
	boxShadow: `${varBsBoxShadowLg} !important`,
})

globalStyle(`${quartzScope}${shadowNone}`, {
	boxShadow: 'none !important',
})

globalStyle(`${quartzScope}${focusRingPrimary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsPrimaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingSecondary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSecondaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingSuccess}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSuccessRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingInfo}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsInfoRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingWarning}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsWarningRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingDanger}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDangerRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingLight}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsLightRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingDark}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDarkRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${positionStatic}`, {
	position: 'static !important',
})

globalStyle(`${quartzScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${quartzScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${quartzScope}${positionFixed}`, {
	position: 'fixed !important',
})

globalStyle(`${quartzScope}${positionSticky}`, {
	position: 'sticky !important',
})

globalStyle(`${quartzScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${quartzScope}${top50}`, {
	top: '50% !important',
})

globalStyle(`${quartzScope}${top100}`, {
	top: '100% !important',
})

globalStyle(`${quartzScope}${bottom0}`, {
	bottom: '0 !important',
})

globalStyle(`${quartzScope}${bottom50}`, {
	bottom: '50% !important',
})

globalStyle(`${quartzScope}${bottom100}`, {
	bottom: '100% !important',
})

globalStyle(`${quartzScope}${start0}`, {
	left: '0 !important',
})

globalStyle(`${quartzScope}${start50}`, {
	left: '50% !important',
})

globalStyle(`${quartzScope}${start100}`, {
	left: '100% !important',
})

globalStyle(`${quartzScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${quartzScope}${end50}`, {
	right: '50% !important',
})

globalStyle(`${quartzScope}${end100}`, {
	right: '100% !important',
})

globalStyle(`${quartzScope}${translateMiddle}`, {
	transform: 'translate(-50%, -50%) !important',
})

globalStyle(`${quartzScope}${translateMiddleX}`, {
	transform: 'translateX(-50%) !important',
})

globalStyle(`${quartzScope}${translateMiddleY}`, {
	transform: 'translateY(-50%) !important',
})

globalStyle(`${quartzScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${border0}`, {
	border: '0 !important',
})

globalStyle(`${quartzScope}${borderTop}`, {
	borderTop: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${borderTop0}`, {
	borderTop: '0 !important',
})

globalStyle(`${quartzScope}${borderEnd}`, {
	borderRight: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${borderEnd0}`, {
	borderRight: '0 !important',
})

globalStyle(`${quartzScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${borderBottom0}`, {
	borderBottom: '0 !important',
})

globalStyle(`${quartzScope}${borderStart}`, {
	borderLeft: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${borderStart0}`, {
	borderLeft: '0 !important',
})

globalStyle(`${quartzScope}${borderPrimary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsPrimaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderSecondary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSecondaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderSuccess}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSuccessRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderInfo}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsInfoRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderWarning}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWarningRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderDanger}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDangerRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderLight}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsLightRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderBlack}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsBlackRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderWhite}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWhiteRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderPrimarySubtle}`, {
	borderColor: `${varBsPrimaryBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderSecondarySubtle}`, {
	borderColor: `${varBsSecondaryBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderSuccessSubtle}`, {
	borderColor: `${varBsSuccessBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderInfoSubtle}`, {
	borderColor: `${varBsInfoBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderWarningSubtle}`, {
	borderColor: `${varBsWarningBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderDangerSubtle}`, {
	borderColor: `${varBsDangerBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderLightSubtle}`, {
	borderColor: `${varBsLightBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderDarkSubtle}`, {
	borderColor: `${varBsDarkBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${border1}`, {
	borderWidth: '1px !important',
})

globalStyle(`${quartzScope}${border2}`, {
	borderWidth: '2px !important',
})

globalStyle(`${quartzScope}${border3}`, {
	borderWidth: '3px !important',
})

globalStyle(`${quartzScope}${border4}`, {
	borderWidth: '4px !important',
})

globalStyle(`${quartzScope}${border5}`, {
	borderWidth: '5px !important',
})

globalStyle(`${quartzScope}${borderOpacity10}`, {
	vars: {
		[varBsBorderOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${borderOpacity25}`, {
	vars: {
		[varBsBorderOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${borderOpacity50}`, {
	vars: {
		[varBsBorderOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${borderOpacity75}`, {
	vars: {
		[varBsBorderOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${borderOpacity100}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${quartzScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${quartzScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${quartzScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${quartzScope}${wAuto}`, {
	width: 'auto !important',
})

globalStyle(`${quartzScope}${mw100}`, {
	maxWidth: '100% !important',
})

globalStyle(`${quartzScope}${vw100}`, {
	width: '100vw !important',
})

globalStyle(`${quartzScope}${minVw100}`, {
	minWidth: '100vw !important',
})

globalStyle(`${quartzScope}${h25}`, {
	height: '25% !important',
})

globalStyle(`${quartzScope}${h50}`, {
	height: '50% !important',
})

globalStyle(`${quartzScope}${h75}`, {
	height: '75% !important',
})

globalStyle(`${quartzScope}${h100}`, {
	height: '100% !important',
})

globalStyle(`${quartzScope}${hAuto}`, {
	height: 'auto !important',
})

globalStyle(`${quartzScope}${mh100}`, {
	maxHeight: '100% !important',
})

globalStyle(`${quartzScope}${vh100}`, {
	height: '100vh !important',
})

globalStyle(`${quartzScope}${minVh100}`, {
	minHeight: '100vh !important',
})

globalStyle(`${quartzScope}${flexFill}`, {
	flex: '1 1 auto !important',
})

globalStyle(`${quartzScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${quartzScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${quartzScope}${flexRowReverse}`, {
	flexDirection: 'row-reverse !important',
})

globalStyle(`${quartzScope}${flexColumnReverse}`, {
	flexDirection: 'column-reverse !important',
})

globalStyle(`${quartzScope}${flexGrow0}`, {
	flexGrow: '0 !important',
})

globalStyle(`${quartzScope}${flexGrow1}`, {
	flexGrow: '1 !important',
})

globalStyle(`${quartzScope}${flexShrink0}`, {
	flexShrink: '0 !important',
})

globalStyle(`${quartzScope}${flexShrink1}`, {
	flexShrink: '1 !important',
})

globalStyle(`${quartzScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${quartzScope}${flexNowrap}`, {
	flexWrap: 'nowrap !important',
})

globalStyle(`${quartzScope}${flexWrapReverse}`, {
	flexWrap: 'wrap-reverse !important',
})

globalStyle(`${quartzScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${quartzScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${quartzScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${quartzScope}${justifyContentBetween}`, {
	justifyContent: 'space-between !important',
})

globalStyle(`${quartzScope}${justifyContentAround}`, {
	justifyContent: 'space-around !important',
})

globalStyle(`${quartzScope}${justifyContentEvenly}`, {
	justifyContent: 'space-evenly !important',
})

globalStyle(`${quartzScope}${alignItemsStart}`, {
	alignItems: 'flex-start !important',
})

globalStyle(`${quartzScope}${alignItemsEnd}`, {
	alignItems: 'flex-end !important',
})

globalStyle(`${quartzScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${quartzScope}${alignItemsBaseline}`, {
	alignItems: 'baseline !important',
})

globalStyle(`${quartzScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${quartzScope}${alignContentStart}`, {
	alignContent: 'flex-start !important',
})

globalStyle(`${quartzScope}${alignContentEnd}`, {
	alignContent: 'flex-end !important',
})

globalStyle(`${quartzScope}${alignContentCenter}`, {
	alignContent: 'center !important',
})

globalStyle(`${quartzScope}${alignContentBetween}`, {
	alignContent: 'space-between !important',
})

globalStyle(`${quartzScope}${alignContentAround}`, {
	alignContent: 'space-around !important',
})

globalStyle(`${quartzScope}${alignContentStretch}`, {
	alignContent: 'stretch !important',
})

globalStyle(`${quartzScope}${alignSelfAuto}`, {
	alignSelf: 'auto !important',
})

globalStyle(`${quartzScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${quartzScope}${alignSelfEnd}`, {
	alignSelf: 'flex-end !important',
})

globalStyle(`${quartzScope}${alignSelfCenter}`, {
	alignSelf: 'center !important',
})

globalStyle(`${quartzScope}${alignSelfBaseline}`, {
	alignSelf: 'baseline !important',
})

globalStyle(`${quartzScope}${alignSelfStretch}`, {
	alignSelf: 'stretch !important',
})

globalStyle(`${quartzScope}${orderFirst}`, {
	order: '-1 !important',
})

globalStyle(`${quartzScope}${order0}`, {
	order: '0 !important',
})

globalStyle(`${quartzScope}${order1}`, {
	order: '1 !important',
})

globalStyle(`${quartzScope}${order2}`, {
	order: '2 !important',
})

globalStyle(`${quartzScope}${order3}`, {
	order: '3 !important',
})

globalStyle(`${quartzScope}${order4}`, {
	order: '4 !important',
})

globalStyle(`${quartzScope}${order5}`, {
	order: '5 !important',
})

globalStyle(`${quartzScope}${orderLast}`, {
	order: '6 !important',
})

globalStyle(`${quartzScope}${m0}`, {
	margin: '0 !important',
})

globalStyle(`${quartzScope}${m1}`, {
	margin: '0.5rem !important',
})

globalStyle(`${quartzScope}${m2}`, {
	margin: '1rem !important',
})

globalStyle(`${quartzScope}${m3}`, {
	margin: '2rem !important',
})

globalStyle(`${quartzScope}${m4}`, {
	margin: '3rem !important',
})

globalStyle(`${quartzScope}${m5}`, {
	margin: '6rem !important',
})

globalStyle(`${quartzScope}${mAuto}`, {
	margin: 'auto !important',
})

globalStyle(`${quartzScope}${mx0}`, {
	marginRight: '0 !important',
	marginLeft: '0 !important',
})

globalStyle(`${quartzScope}${mx1}`, {
	marginRight: '0.5rem !important',
	marginLeft: '0.5rem !important',
})

globalStyle(`${quartzScope}${mx2}`, {
	marginRight: '1rem !important',
	marginLeft: '1rem !important',
})

globalStyle(`${quartzScope}${mx3}`, {
	marginRight: '2rem !important',
	marginLeft: '2rem !important',
})

globalStyle(`${quartzScope}${mx4}`, {
	marginRight: '3rem !important',
	marginLeft: '3rem !important',
})

globalStyle(`${quartzScope}${mx5}`, {
	marginRight: '6rem !important',
	marginLeft: '6rem !important',
})

globalStyle(`${quartzScope}${mxAuto}`, {
	marginRight: 'auto !important',
	marginLeft: 'auto !important',
})

globalStyle(`${quartzScope}${my0}`, {
	marginTop: '0 !important',
	marginBottom: '0 !important',
})

globalStyle(`${quartzScope}${my1}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${quartzScope}${my2}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${quartzScope}${my3}`, {
	marginTop: '2rem !important',
	marginBottom: '2rem !important',
})

globalStyle(`${quartzScope}${my4}`, {
	marginTop: '3rem !important',
	marginBottom: '3rem !important',
})

globalStyle(`${quartzScope}${my5}`, {
	marginTop: '6rem !important',
	marginBottom: '6rem !important',
})

globalStyle(`${quartzScope}${myAuto}`, {
	marginTop: 'auto !important',
	marginBottom: 'auto !important',
})

globalStyle(`${quartzScope}${mt0}`, {
	marginTop: '0 !important',
})

globalStyle(`${quartzScope}${mt1}`, {
	marginTop: '0.5rem !important',
})

globalStyle(`${quartzScope}${mt2}`, {
	marginTop: '1rem !important',
})

globalStyle(`${quartzScope}${mt3}`, {
	marginTop: '2rem !important',
})

globalStyle(`${quartzScope}${mt4}`, {
	marginTop: '3rem !important',
})

globalStyle(`${quartzScope}${mt5}`, {
	marginTop: '6rem !important',
})

globalStyle(`${quartzScope}${mtAuto}`, {
	marginTop: 'auto !important',
})

globalStyle(`${quartzScope}${me0}`, {
	marginRight: '0 !important',
})

globalStyle(`${quartzScope}${me1}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${quartzScope}${me2}`, {
	marginRight: '1rem !important',
})

globalStyle(`${quartzScope}${me3}`, {
	marginRight: '2rem !important',
})

globalStyle(`${quartzScope}${me4}`, {
	marginRight: '3rem !important',
})

globalStyle(`${quartzScope}${me5}`, {
	marginRight: '6rem !important',
})

globalStyle(`${quartzScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${quartzScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${quartzScope}${mb1}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${quartzScope}${mb2}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${quartzScope}${mb3}`, {
	marginBottom: '2rem !important',
})

globalStyle(`${quartzScope}${mb4}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${quartzScope}${mb5}`, {
	marginBottom: '6rem !important',
})

globalStyle(`${quartzScope}${mbAuto}`, {
	marginBottom: 'auto !important',
})

globalStyle(`${quartzScope}${ms0}`, {
	marginLeft: '0 !important',
})

globalStyle(`${quartzScope}${ms1}`, {
	marginLeft: '0.5rem !important',
})

globalStyle(`${quartzScope}${ms2}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${quartzScope}${ms3}`, {
	marginLeft: '2rem !important',
})

globalStyle(`${quartzScope}${ms4}`, {
	marginLeft: '3rem !important',
})

globalStyle(`${quartzScope}${ms5}`, {
	marginLeft: '6rem !important',
})

globalStyle(`${quartzScope}${msAuto}`, {
	marginLeft: 'auto !important',
})

globalStyle(`${quartzScope}${p0}`, {
	padding: '0 !important',
})

globalStyle(`${quartzScope}${p1}`, {
	padding: '0.5rem !important',
})

globalStyle(`${quartzScope}${p2}`, {
	padding: '1rem !important',
})

globalStyle(`${quartzScope}${p3}`, {
	padding: '2rem !important',
})

globalStyle(`${quartzScope}${p4}`, {
	padding: '3rem !important',
})

globalStyle(`${quartzScope}${p5}`, {
	padding: '6rem !important',
})

globalStyle(`${quartzScope}${px0}`, {
	paddingRight: '0 !important',
	paddingLeft: '0 !important',
})

globalStyle(`${quartzScope}${px1}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${quartzScope}${px2}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${quartzScope}${px3}`, {
	paddingRight: '2rem !important',
	paddingLeft: '2rem !important',
})

globalStyle(`${quartzScope}${px4}`, {
	paddingRight: '3rem !important',
	paddingLeft: '3rem !important',
})

globalStyle(`${quartzScope}${px5}`, {
	paddingRight: '6rem !important',
	paddingLeft: '6rem !important',
})

globalStyle(`${quartzScope}${py0}`, {
	paddingTop: '0 !important',
	paddingBottom: '0 !important',
})

globalStyle(`${quartzScope}${py1}`, {
	paddingTop: '0.5rem !important',
	paddingBottom: '0.5rem !important',
})

globalStyle(`${quartzScope}${py2}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${quartzScope}${py3}`, {
	paddingTop: '2rem !important',
	paddingBottom: '2rem !important',
})

globalStyle(`${quartzScope}${py4}`, {
	paddingTop: '3rem !important',
	paddingBottom: '3rem !important',
})

globalStyle(`${quartzScope}${py5}`, {
	paddingTop: '6rem !important',
	paddingBottom: '6rem !important',
})

globalStyle(`${quartzScope}${pt0}`, {
	paddingTop: '0 !important',
})

globalStyle(`${quartzScope}${pt1}`, {
	paddingTop: '0.5rem !important',
})

globalStyle(`${quartzScope}${pt2}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${quartzScope}${pt3}`, {
	paddingTop: '2rem !important',
})

globalStyle(`${quartzScope}${pt4}`, {
	paddingTop: '3rem !important',
})

globalStyle(`${quartzScope}${pt5}`, {
	paddingTop: '6rem !important',
})

globalStyle(`${quartzScope}${pe0}`, {
	paddingRight: '0 !important',
})

globalStyle(`${quartzScope}${pe1}`, {
	paddingRight: '0.5rem !important',
})

globalStyle(`${quartzScope}${pe2}`, {
	paddingRight: '1rem !important',
})

globalStyle(`${quartzScope}${pe3}`, {
	paddingRight: '2rem !important',
})

globalStyle(`${quartzScope}${pe4}`, {
	paddingRight: '3rem !important',
})

globalStyle(`${quartzScope}${pe5}`, {
	paddingRight: '6rem !important',
})

globalStyle(`${quartzScope}${pb0}`, {
	paddingBottom: '0 !important',
})

globalStyle(`${quartzScope}${pb1}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${quartzScope}${pb2}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${quartzScope}${pb3}`, {
	paddingBottom: '2rem !important',
})

globalStyle(`${quartzScope}${pb4}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${quartzScope}${pb5}`, {
	paddingBottom: '6rem !important',
})

globalStyle(`${quartzScope}${ps0}`, {
	paddingLeft: '0 !important',
})

globalStyle(`${quartzScope}${ps1}`, {
	paddingLeft: '0.5rem !important',
})

globalStyle(`${quartzScope}${ps2}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${quartzScope}${ps3}`, {
	paddingLeft: '2rem !important',
})

globalStyle(`${quartzScope}${ps4}`, {
	paddingLeft: '3rem !important',
})

globalStyle(`${quartzScope}${ps5}`, {
	paddingLeft: '6rem !important',
})

globalStyle(`${quartzScope}${gap0}`, {
	gap: '0 !important',
})

globalStyle(`${quartzScope}${gap1}`, {
	gap: '0.5rem !important',
})

globalStyle(`${quartzScope}${gap2}`, {
	gap: '1rem !important',
})

globalStyle(`${quartzScope}${gap3}`, {
	gap: '2rem !important',
})

globalStyle(`${quartzScope}${gap4}`, {
	gap: '3rem !important',
})

globalStyle(`${quartzScope}${gap5}`, {
	gap: '6rem !important',
})

globalStyle(`${quartzScope}${rowGap0}`, {
	rowGap: '0 !important',
})

globalStyle(`${quartzScope}${rowGap1}`, {
	rowGap: '0.5rem !important',
})

globalStyle(`${quartzScope}${rowGap2}`, {
	rowGap: '1rem !important',
})

globalStyle(`${quartzScope}${rowGap3}`, {
	rowGap: '2rem !important',
})

globalStyle(`${quartzScope}${rowGap4}`, {
	rowGap: '3rem !important',
})

globalStyle(`${quartzScope}${rowGap5}`, {
	rowGap: '6rem !important',
})

globalStyle(`${quartzScope}${columnGap0}`, {
	MozColumnGap: '0 !important',
	columnGap: '0 !important',
})

globalStyle(`${quartzScope}${columnGap1}`, {
	MozColumnGap: '0.5rem !important',
	columnGap: '0.5rem !important',
})

globalStyle(`${quartzScope}${columnGap2}`, {
	MozColumnGap: '1rem !important',
	columnGap: '1rem !important',
})

globalStyle(`${quartzScope}${columnGap3}`, {
	MozColumnGap: '2rem !important',
	columnGap: '2rem !important',
})

globalStyle(`${quartzScope}${columnGap4}`, {
	MozColumnGap: '3rem !important',
	columnGap: '3rem !important',
})

globalStyle(`${quartzScope}${columnGap5}`, {
	MozColumnGap: '6rem !important',
	columnGap: '6rem !important',
})

globalStyle(`${quartzScope}${fontMonospace}`, {
	fontFamily: `${varBsFontMonospace} !important`,
})

globalStyle(`${quartzScope}${fs1}`, {
	fontSize: 'calc(1.375rem + 1.5vw) !important',
})

globalStyle(`${quartzScope}${fs2}`, {
	fontSize: 'calc(1.325rem + 0.9vw) !important',
})

globalStyle(`${quartzScope}${fs3}`, {
	fontSize: 'calc(1.3rem + 0.6vw) !important',
})

globalStyle(`${quartzScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${quartzScope}${fs5}`, {
	fontSize: '1.25rem !important',
})

globalStyle(`${quartzScope}${fs6}`, {
	fontSize: '1rem !important',
})

globalStyle(`${quartzScope}${fstItalic}`, {
	fontStyle: 'italic !important',
})

globalStyle(`${quartzScope}${fstNormal}`, {
	fontStyle: 'normal !important',
})

globalStyle(`${quartzScope}${fwLighter}`, {
	fontWeight: 'lighter !important',
})

globalStyle(`${quartzScope}${fwLight}`, {
	fontWeight: '300 !important',
})

globalStyle(`${quartzScope}${fwNormal}`, {
	fontWeight: '400 !important',
})

globalStyle(`${quartzScope}${fwMedium}`, {
	fontWeight: '500 !important',
})

globalStyle(`${quartzScope}${fwSemibold}`, {
	fontWeight: '600 !important',
})

globalStyle(`${quartzScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${quartzScope}${fwBolder}`, {
	fontWeight: 'bolder !important',
})

globalStyle(`${quartzScope}${lh1}`, {
	lineHeight: '1 !important',
})

globalStyle(`${quartzScope}${lhSm}`, {
	lineHeight: '1.25 !important',
})

globalStyle(`${quartzScope}${lhBase}`, {
	lineHeight: '1.5 !important',
})

globalStyle(`${quartzScope}${lhLg}`, {
	lineHeight: '2 !important',
})

globalStyle(`${quartzScope}${textStart}`, {
	textAlign: 'left !important',
})

globalStyle(`${quartzScope}${textEnd}`, {
	textAlign: 'right !important',
})

globalStyle(`${quartzScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${quartzScope}${textDecorationNone}`, {
	textDecoration: 'none !important',
})

globalStyle(`${quartzScope}${textDecorationUnderline}`, {
	textDecoration: 'underline !important',
})

globalStyle(`${quartzScope}${textDecorationLineThrough}`, {
	textDecoration: 'line-through !important',
})

globalStyle(`${quartzScope}${textLowercase}`, {
	textTransform: 'lowercase !important',
})

globalStyle(`${quartzScope}${textUppercase}`, {
	textTransform: 'uppercase !important',
})

globalStyle(`${quartzScope}${textCapitalize}`, {
	textTransform: 'capitalize !important',
})

globalStyle(`${quartzScope}${textWrap}`, {
	whiteSpace: 'normal !important',
})

globalStyle(`${quartzScope}${textNowrap}`, {
	whiteSpace: 'nowrap !important',
})

globalStyle(`${quartzScope}${textBreak}`, {
	wordWrap: 'break-word !important',
	wordBreak: 'break-word !important',
})

globalStyle(`${quartzScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textBlack}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBlackRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textBody}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBodyColorRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${quartzScope}${textBlack50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(0, 0, 0, 0.5) !important',
})

globalStyle(`${quartzScope}${textWhite50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(255, 255, 255, 0.5) !important',
})

globalStyle(`${quartzScope}${textBodySecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${quartzScope}${textBodyTertiary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsTertiaryColor} !important`,
})

globalStyle(`${quartzScope}${textBodyEmphasis}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsEmphasisColor} !important`,
})

globalStyle(`${quartzScope}${textReset}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'inherit !important',
})

globalStyle(`${quartzScope}${textOpacity25}`, {
	vars: {
		[varBsTextOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${textOpacity50}`, {
	vars: {
		[varBsTextOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${textOpacity75}`, {
	vars: {
		[varBsTextOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${textOpacity100}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${textPrimaryEmphasis}`, {
	color: `${varBsPrimaryTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textSecondaryEmphasis}`, {
	color: `${varBsSecondaryTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textSuccessEmphasis}`, {
	color: `${varBsSuccessTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textInfoEmphasis}`, {
	color: `${varBsInfoTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textWarningEmphasis}`, {
	color: `${varBsWarningTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textDangerEmphasis}`, {
	color: `${varBsDangerTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textLightEmphasis}`, {
	color: `${varBsLightTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textDarkEmphasis}`, {
	color: `${varBsDarkTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${linkOpacity10}`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${linkOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${linkOpacity25}`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${linkOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${linkOpacity50}`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${linkOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${linkOpacity75}`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${linkOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${linkOpacity100}`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${linkOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${linkOffset1}`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${quartzScope}${linkOffset1Hover}:hover`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${quartzScope}${linkOffset2}`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${quartzScope}${linkOffset2Hover}:hover`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${quartzScope}${linkOffset3}`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${quartzScope}${linkOffset3Hover}:hover`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${quartzScope}${linkUnderlinePrimary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineSecondary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineSuccess}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineInfo}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineWarning}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineDanger}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineLight}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineDark}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderline}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineOpacity0}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity0Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity10}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity25}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity50}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity75}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity100}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgBlack}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBlackRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgWhite}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWhiteRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgBody}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBodyBgRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgTransparent}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: 'transparent !important',
})

globalStyle(`${quartzScope}${bgBodySecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-secondary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgBodyTertiary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-tertiary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgOpacity10}`, {
	vars: {
		[varBsBgOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${bgOpacity25}`, {
	vars: {
		[varBsBgOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${bgOpacity50}`, {
	vars: {
		[varBsBgOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${bgOpacity75}`, {
	vars: {
		[varBsBgOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${bgOpacity100}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${bgPrimarySubtle}`, {
	backgroundColor: `${varBsPrimaryBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgSecondarySubtle}`, {
	backgroundColor: `${varBsSecondaryBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgSuccessSubtle}`, {
	backgroundColor: `${varBsSuccessBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgInfoSubtle}`, {
	backgroundColor: `${varBsInfoBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgWarningSubtle}`, {
	backgroundColor: `${varBsWarningBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgDangerSubtle}`, {
	backgroundColor: `${varBsDangerBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgLightSubtle}`, {
	backgroundColor: `${varBsLightBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgDarkSubtle}`, {
	backgroundColor: `${varBsDarkBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgGradient}`, {
	backgroundImage: `${varBsGradient} !important`,
})

globalStyle(`${quartzScope}${userSelectAll}`, {
	WebkitUserSelect: 'all !important',
	MozUserSelect: 'all !important',
	userSelect: 'all !important',
})

globalStyle(`${quartzScope}${userSelectAuto}`, {
	WebkitUserSelect: 'auto !important',
	MozUserSelect: 'auto !important',
	userSelect: 'auto !important',
})

globalStyle(`${quartzScope}${userSelectNone}`, {
	WebkitUserSelect: 'none !important',
	MozUserSelect: 'none !important',
	userSelect: 'none !important',
})

globalStyle(`${quartzScope}${peNone}`, {
	pointerEvents: 'none !important',
})

globalStyle(`${quartzScope}${peAuto}`, {
	pointerEvents: 'auto !important',
})

globalStyle(`${quartzScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${rounded0}`, {
	borderRadius: '0 !important',
})

globalStyle(`${quartzScope}${rounded1}`, {
	borderRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${rounded2}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${rounded3}`, {
	borderRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${rounded4}`, {
	borderRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${rounded5}`, {
	borderRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedCircle}`, {
	borderRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${roundedTop}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedTop0}`, {
	borderTopLeftRadius: '0 !important',
	borderTopRightRadius: '0 !important',
})

globalStyle(`${quartzScope}${roundedTop1}`, {
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${roundedTop2}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedTop3}`, {
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${roundedTop4}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${roundedTop5}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedTopCircle}`, {
	borderTopLeftRadius: '50% !important',
	borderTopRightRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedTopPill}`, {
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${roundedEnd}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedEnd0}`, {
	borderTopRightRadius: '0 !important',
	borderBottomRightRadius: '0 !important',
})

globalStyle(`${quartzScope}${roundedEnd1}`, {
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${roundedEnd2}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedEnd3}`, {
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${roundedEnd4}`, {
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${roundedEnd5}`, {
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedEndCircle}`, {
	borderTopRightRadius: '50% !important',
	borderBottomRightRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedEndPill}`, {
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${roundedBottom}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedBottom0}`, {
	borderBottomRightRadius: '0 !important',
	borderBottomLeftRadius: '0 !important',
})

globalStyle(`${quartzScope}${roundedBottom1}`, {
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${roundedBottom2}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedBottom3}`, {
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${roundedBottom4}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${roundedBottom5}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedBottomCircle}`, {
	borderBottomRightRadius: '50% !important',
	borderBottomLeftRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedBottomPill}`, {
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${roundedStart}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedStart0}`, {
	borderBottomLeftRadius: '0 !important',
	borderTopLeftRadius: '0 !important',
})

globalStyle(`${quartzScope}${roundedStart1}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${roundedStart2}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedStart3}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${roundedStart4}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${roundedStart5}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedStartCircle}`, {
	borderBottomLeftRadius: '50% !important',
	borderTopLeftRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedStartPill}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${visible}`, {
	visibility: 'visible !important',
})

globalStyle(`${quartzScope}${invisible}`, {
	visibility: 'hidden !important',
})

globalStyle(`${quartzScope}${zN1}`, {
	zIndex: '-1 !important',
})

globalStyle(`${quartzScope}${z0}`, {
	zIndex: '0 !important',
})

globalStyle(`${quartzScope}${z1}`, {
	zIndex: '1 !important',
})

globalStyle(`${quartzScope}${z2}`, {
	zIndex: '2 !important',
})

globalStyle(`${quartzScope}${z3}`, {
	zIndex: '3 !important',
})

globalStyle(`${quartzScope}${floatSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmContain}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmCover}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmScale}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmInline}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmInlineBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmInlineGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmTable}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmTableRow}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmTableCell}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmInlineFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmRow}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmColumn}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmRowReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmColumnReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmGrow0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmGrow1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmShrink0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmShrink1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmWrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmNowrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmWrapReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmEvenly}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSmFirst}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSmLast}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${floatMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdContain}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdCover}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdScale}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdInline}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdInlineBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdInlineGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdTable}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdTableRow}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdTableCell}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdInlineFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdRow}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdColumn}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdRowReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdColumnReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdGrow0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdGrow1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdShrink0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdShrink1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdWrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdNowrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdWrapReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdEvenly}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMdFirst}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMdLast}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${floatLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgContain}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgCover}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgScale}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgInline}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgInlineBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgInlineGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgTable}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgTableRow}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgTableCell}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgInlineFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgRow}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgColumn}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgRowReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgColumnReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgGrow0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgGrow1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgShrink0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgShrink1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgWrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgNowrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgWrapReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgEvenly}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLgFirst}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLgLast}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlContain}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlCover}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlScale}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlInline}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlInlineBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlInlineGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlTable}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlTableRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlTableCell}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlInlineFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlColumn}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlRowReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlColumnReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlGrow0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlGrow1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlShrink0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlShrink1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlWrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlNowrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlWrapReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlEvenly}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXlFirst}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXlLast}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlContain}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlCover}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlScale}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlInline}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlInlineBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlInlineGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlTable}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlTableRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlTableCell}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlInlineFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlColumn}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlRowReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlColumnReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlGrow0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlGrow1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlShrink0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlShrink1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlWrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlNowrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlWrapReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlEvenly}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxlFirst}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxlLast}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${fs1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${fs2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${fs3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem !important',
		},
	},
})

globalStyle(`${quartzScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintInline}`, {
	'@media': {
		'print': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintInlineBlock}`, {
	'@media': {
		'print': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintBlock}`, {
	'@media': {
		'print': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintGrid}`, {
	'@media': {
		'print': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintInlineGrid}`, {
	'@media': {
		'print': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintTable}`, {
	'@media': {
		'print': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintTableRow}`, {
	'@media': {
		'print': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintTableCell}`, {
	'@media': {
		'print': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintFlex}`, {
	'@media': {
		'print': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintInlineFlex}`, {
	'@media': {
		'print': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintNone}`, {
	'@media': {
		'print': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}[data-bs-theme=dark] ${quartzScope}${bodyText}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${tableSecondary}`, {
	vars: {
		[varBsTableHoverColor]: '$white',
	},
})

globalStyle(`${quartzScope}${btnSecondary}`, {
	color: '#fff',
	border: 'none',
})

globalStyle(`${quartzScope}${btnSecondary}:hover`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${btnSecondary}:focus`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${btnSecondary}${disabled}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:not(:first-child)`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnGroup}:not(:first-child)`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:not(:first-child)`, {
	marginTop: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}:not(:first-child)`, {
	marginTop: '0',
})

globalStyle(`${quartzScope}${bgLight} ${quartzScope}${btn}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${formControl}::-webkit-file-upload-button`, {
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	border: 'none',
})

globalStyle(`${quartzScope}${inputGroupText}`, {
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	border: 'none',
})

globalStyle(`${quartzScope}${formControl}::file-selector-button`, {
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	border: 'none',
})

globalStyle(`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${inputGroupText}`, {
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: '0',
	borderLeft: 'none',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu})`, {
	borderRight: 'none',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}${dropdownToggle}:nth-last-child(n+3)`, {
	borderRight: 'none',
})

globalStyle(`${quartzScope}${formSelect}:not([multiple])`, {
	transition: 'border-color 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formSelect}:not([multiple]) ${quartzScope}${elOption}`, {
	color: '#000',
})

globalStyle(`${quartzScope}${bgLight} ${quartzScope}${formControl}`, {
	color: '#343a40',
	borderColor: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${bgLight} ${quartzScope}${formControl}::-moz-placeholder`, {
	color: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${bgLight} ${quartzScope}${formControl}::placeholder`, {
	color: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${dropdownMenu}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${dropdownMenu} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${dropdownMenu} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}`, {
	transition: 'none',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}:hover`, {
	color: '#fff',
	isolation: 'auto',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}:focus`, {
	color: '#fff',
	isolation: 'auto',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}${navLinkDisabled}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}:first-child > ${quartzScope}${navLink}`, {
	borderRadius: '0.5rem 0 0 0.5rem',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}:last-child > ${quartzScope}${navLink}`, {
	borderRadius: '0 0.5rem 0.5rem 0',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, white, rgba(255, 255, 255, 0.9) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	borderRadius: '0.5rem',
	transform: 'scale(1.1)',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, white, rgba(255, 255, 255, 0.9) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	borderRadius: '0.5rem',
	transform: 'scale(1.1)',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive}:hover`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive}:focus`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink}:hover`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink}:focus`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${dropdownMenu}`, {
	borderRadius: '0.5rem',
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}`, {
	transition: 'none',
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}:hover`, {
	color: '#fff',
	isolation: 'auto',
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}:focus`, {
	color: '#fff',
	isolation: 'auto',
})

globalStyle(`${quartzScope}${alert}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	position: 'relative',
	overflow: 'hidden',
	color: '#fff',
})

globalStyle(`${quartzScope}${alert} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${alert} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${alertPrimary}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#e83283',
})

globalStyle(`${quartzScope}${alertSecondary}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: 'rgba(255, 255, 255, 0.4)',
})

globalStyle(`${quartzScope}${alertSuccess}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#41d7a7',
})

globalStyle(`${quartzScope}${alertInfo}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#39cbfb',
})

globalStyle(`${quartzScope}${alertWarning}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#ffc107',
})

globalStyle(`${quartzScope}${alertDanger}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#fd7e14',
})

globalStyle(`${quartzScope}${alertLight}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#e9e9e8',
})

globalStyle(`${quartzScope}${alertDark}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#212529',
})

globalStyle(`${quartzScope}${alert} ${quartzScope}${alertLink}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${badge}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '.4',
	},
})

globalStyle(`${quartzScope}${badge}${bgLight}`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${listGroup}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${listGroup} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${listGroup} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}`, {
	vars: {
		[varBsSecondaryRgb]: 'transparent',
	},
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${bgPrimary}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgSuccess}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgInfo}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgWarning}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgDanger}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgLight}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgDark}`, {
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${card}${bgLight} ${quartzScope}${cardHeader}`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${card}${bgLight} ${quartzScope}${cardBody}`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${card}${borderPrimary}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderPrimary} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderPrimary} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderPrimary} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#e83283 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderSecondary}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderSecondary} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderSecondary} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderSecondary} ${quartzScope}${cardHeader}`, {
	backgroundColor: 'rgba(255, 255, 255, 0.4) !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderSuccess}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderSuccess} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderSuccess} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderSuccess} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#41d7a7 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderInfo}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderInfo} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderInfo} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderInfo} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#39cbfb !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderWarning}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderWarning} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderWarning} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderWarning} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#ffc107 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderDanger}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderDanger} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderDanger} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderDanger} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#fd7e14 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderLight}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderLight} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderLight} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderLight} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#e9e9e8 !important',
	borderBottom: 'none',
	color: '#343a40',
})

globalStyle(`${quartzScope}${card}${borderDark}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderDark} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderDark} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${card}${borderDark} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#212529 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${cardHeader}`, {
	fontWeight: '700',
})

globalStyle(`${quartzScope}${accordionItem}`, {
	border: 'none',
	boxShadow: 'none',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${accordionItem} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${accordionItem} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${toast}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${toast} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${toast} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${popover}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${popover} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${popover} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${popoverHeader}`, {
	borderBottomColor: 'rgba(255, 255, 255, 0.2)',
})

globalStyle(`${quartzScope}${tooltip}`, {
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${modalContent}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${modalContent} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${modalContent} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${offcanvas}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${offcanvas} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${offcanvas} ${quartzScope}${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

globalStyle(`${quartzScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${quartzScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${quartzScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${quartzScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${quartzScope}${smallText}`, {
	fontSize: '0.875em',
})

globalStyle(`${quartzScope}${scrollspyExample}`, {
	height: '200px',
	overflowY: 'auto',
	marginTop: '0.5rem',
})

globalStyle(`${quartzScope}${formSwitch}`, {
	isolation: 'isolate',
})
