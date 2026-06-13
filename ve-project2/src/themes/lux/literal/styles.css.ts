import { globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../scope.css'

import {
	varBsBlackRgb,
	varBsBodyBg,
	varBsBodyBgRgb,
	varBsBodyColor,
	varBsBodyColorRgb,
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
	varBsDanger,
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
	varBsDangerRgb,
	varBsDangerTextEmphasis,
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
	varBsHeadingColor,
	varBsHighlightBg,
	varBsHighlightColor,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
	varBsInfoRgb,
	varBsInfoTextEmphasis,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
	varBsLightRgb,
	varBsLightTextEmphasis,
	varBsLinkColor,
	varBsLinkColorRgb,
	varBsLinkHoverColor,
	varBsLinkHoverColorRgb,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
	varBsPrimaryRgb,
	varBsPrimaryTextEmphasis,
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
	varBsTertiaryBg,
	varBsTertiaryColor,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
	varBsWarningRgb,
	varBsWarningTextEmphasis,
	varBsWhiteRgb,
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
	tableCell,
	tableElement,
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
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../theme-contract/utilities/generated/contract.css'

import {
	accordion,
	accordionBody,
	accordionButton,
	accordionFlush,
	accordionHeader,
	accordionItem,
	active,
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
	alignItemsCenter,
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
	alignSelfStart,
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
	badge,
	badgePill,
	bgBlack,
	bgBody,
	bgBodySecondary,
	bgBodyTertiary,
	bgDanger,
	bgDangerSubtle,
	bgDark,
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
	blockquoteFooter,
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
	breadcrumb,
	breadcrumbItem,
	bsPopoverAuto,
	bsPopoverBottom,
	bsPopoverEnd,
	bsPopoverStart,
	bsPopoverTop,
	bsTooltipAuto,
	bsTooltipBottom,
	bsTooltipEnd,
	bsTooltipStart,
	bsTooltipTop,
	btn,
	btnCheck,
	btnClose,
	btnCloseWhite,
	btnDanger,
	btnDark,
	btnGroup,
	btnGroupLg,
	btnGroupSm,
	btnGroupVertical,
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
	btnShowHook,
	btnSm,
	btnSuccess,
	btnToolbar,
	btnWarning,
	captionTop,
	card,
	cardBody,
	cardFooter,
	cardGroup,
	cardHeader,
	cardHeaderPills,
	cardHeaderTabs,
	cardImg,
	cardImgBottom,
	cardImgOverlay,
	cardImgTop,
	cardLink,
	cardSubtitle,
	cardText,
	cardTitle,
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
	clearfix,
	clsBlockquote,
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
	clsSmall,
	col,
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
	colMd2,
	colMd3,
	colMd4,
	colMd5,
	colMd6,
	colMd7,
	colMd8,
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
	colSm6,
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
	collapse,
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
	containerFluid,
	containerLg,
	containerMd,
	containerSm,
	containerXl,
	containerXxl,
	dBlock,
	dFlex,
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
	display1,
	display2,
	display3,
	display4,
	display5,
	display6,
	dropdown,
	dropdownCenter,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownItemText,
	dropdownMenu,
	dropdownMenuDark,
	dropdownMenuEnd,
	dropdownMenuLgEnd,
	dropdownMenuLgStart,
	dropdownMenuMdEnd,
	dropdownMenuMdStart,
	dropdownMenuShow,
	dropdownMenuSmEnd,
	dropdownMenuSmStart,
	dropdownMenuStart,
	dropdownMenuXlEnd,
	dropdownMenuXlStart,
	dropdownMenuXxlEnd,
	dropdownMenuXxlStart,
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
	dropupCenter,
	end0,
	end100,
	end50,
	fade,
	figure,
	figureCaption,
	figureImg,
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
	flexWrap,
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
	formCheck,
	formCheckInline,
	formCheckInput,
	formCheckLabel,
	formCheckReverse,
	formControl,
	formControlColor,
	formControlLg,
	formControlPlaintext,
	formControlSm,
	formFloating,
	formLabel,
	formRange,
	formSelect,
	formSelectLg,
	formSelectSm,
	formSwitch,
	formText,
	fs1,
	fs2,
	fs3,
	fs4,
	fs5,
	fs6,
	fstItalic,
	fstNormal,
	fwBold,
	fwBolder,
	fwLight,
	fwLighter,
	fwMedium,
	fwNormal,
	fwSemibold,
	g0,
	g1,
	g2,
	g3,
	g4,
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
	imgFluid,
	imgThumbnail,
	initialism,
	inputGroup,
	inputGroupLg,
	inputGroupSm,
	inputGroupText,
	invalidFeedback,
	invalidTooltip,
	invisible,
	isInvalid,
	isValid,
	justifyContentAround,
	justifyContentBetween,
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
	lead,
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
	listGroup,
	listGroupFlush,
	listGroupHorizontal,
	listGroupHorizontalLg,
	listGroupHorizontalMd,
	listGroupHorizontalSm,
	listGroupHorizontalXl,
	listGroupHorizontalXxl,
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
	listGroupNumbered,
	listInline,
	listInlineItem,
	listUnstyled,
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
	mb2,
	mb3,
	mb4,
	mb5,
	mbAuto,
	mbLg0,
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
	mbXl2,
	mbXl3,
	mbXl4,
	mbXl5,
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
	me2,
	me3,
	me4,
	me5,
	meAuto,
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
	modal,
	modalBackdrop,
	modalBody,
	modalContent,
	modalDialog,
	modalDialogCentered,
	modalDialogScrollable,
	modalFooter,
	modalFullscreen,
	modalFullscreenLgDown,
	modalFullscreenMdDown,
	modalFullscreenSmDown,
	modalFullscreenXlDown,
	modalFullscreenXxlDown,
	modalHeader,
	modalLg,
	modalSm,
	modalStatic,
	modalTitle,
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
	mt5,
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
	mtXl0,
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
	nav,
	navFill,
	navItem,
	navJustified,
	navLink,
	navPills,
	navTabs,
	navUnderline,
	navbar,
	navbarBottomTop,
	navbarBrand,
	navbarCollapse,
	navbarDark,
	navbarExpand,
	navbarExpandLg,
	navbarExpandMd,
	navbarExpandSm,
	navbarExpandXl,
	navbarExpandXxl,
	navbarFixedTop,
	navbarNav,
	navbarNavScroll,
	navbarText,
	navbarToggler,
	navbarTogglerIcon,
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
	overflowXHidden,
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
	p5,
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
	pageItem,
	pageLink,
	pagination,
	paginationLg,
	paginationSm,
	pb0,
	pb1,
	pb2,
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
	pbXl3,
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
	popoverArrow,
	popoverBody,
	popoverHeader,
	positionAbsolute,
	positionFixed,
	positionRelative,
	positionStatic,
	positionSticky,
	progress,
	progressBar,
	progressBarAnimated,
	progressBarStriped,
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
	pt3,
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
	ptXl5,
	ptXxl0,
	ptXxl1,
	ptXxl2,
	ptXxl3,
	ptXxl4,
	ptXxl5,
	px0,
	px1,
	px2,
	px3,
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
	rounded,
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
	row,
	rowCols1,
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
	rowColsMd2,
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
	show,
	showing,
	spinnerBorder,
	spinnerBorderSm,
	spinnerGrow,
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
	stickyXlTop,
	stickyXxlBottom,
	stickyXxlTop,
	stretchedLink,
	tabContent,
	tabPane,
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
	textDark,
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
	textMuted,
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
	toast,
	toastBody,
	toastContainer,
	toastHeader,
	tooltip,
	tooltipArrow,
	tooltipInner,
	top0,
	top100,
	top50,
	translateMiddle,
	translateMiddleX,
	translateMiddleY,
	userSelectAll,
	userSelectAuto,
	userSelectNone,
	validFeedback,
	validTooltip,
	vh100,
	visible,
	visuallyHidden,
	visuallyHiddenFocusable,
	vr,
	vstack,
	vw100,
	w100,
	w25,
	w50,
	w75,
	wAuto,
	wasValidated,
	z0,
	z1,
	z2,
	z3,
	zN1,
} from '../../../theme-contract/literal/contract.css'

globalStyle(`*`, {
	boxSizing: 'border-box',
})

globalStyle(`*::before`, {
	boxSizing: 'border-box',
})

globalStyle(`*::after`, {
	boxSizing: 'border-box',
})

globalStyle(`${luxScope}${horizontalRule}`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`${luxScope}${h6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${h5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${h4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${h3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${h2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${h1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '600',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${luxScope}${h1}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${luxScope}${clsH1}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${luxScope}${h1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${luxScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${luxScope}${h2}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${luxScope}${clsH2}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${luxScope}${h2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${luxScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${luxScope}${h3}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${luxScope}${clsH3}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${luxScope}${h3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${luxScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${luxScope}${h4}`, {
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${clsH4}`, {
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${h5}`, {
	fontSize: '1rem',
})

globalStyle(`${luxScope}${clsH5}`, {
	fontSize: '1rem',
})

globalStyle(`${luxScope}${h6}`, {
	fontSize: '0.75rem',
})

globalStyle(`${luxScope}${clsH6}`, {
	fontSize: '0.75rem',
})

globalStyle(`${luxScope}${paragraph}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${luxScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`${luxScope}${elAddress}`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`${luxScope}${elOl}`, {
	paddingLeft: '2rem',
})

globalStyle(`${luxScope}${elUl}`, {
	paddingLeft: '2rem',
})

globalStyle(`${luxScope}${elOl}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${luxScope}${elUl}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${luxScope}${elDl}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${luxScope}${elOl} ${luxScope}${elOl}`, {
	marginBottom: '0',
})

globalStyle(`${luxScope}${elUl} ${luxScope}${elUl}`, {
	marginBottom: '0',
})

globalStyle(`${luxScope}${elOl} ${luxScope}${elUl}`, {
	marginBottom: '0',
})

globalStyle(`${luxScope}${elUl} ${luxScope}${elOl}`, {
	marginBottom: '0',
})

globalStyle(`${luxScope}${elDt}`, {
	fontWeight: '600',
})

globalStyle(`${luxScope}${elDd}`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`${luxScope}${blockquote}`, {
	margin: '0 0 1rem',
})

globalStyle(`${luxScope}${elB}`, {
	fontWeight: 'bolder',
})

globalStyle(`${luxScope}${elStrong}`, {
	fontWeight: 'bolder',
})

globalStyle(`${luxScope}${small}`, {
	fontSize: '0.875em',
})

globalStyle(`${luxScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${luxScope}${markText}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${luxScope}${mark}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${luxScope}${elSub}`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`${luxScope}${elSup}`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`${luxScope}${elSub}`, {
	bottom: '-0.25em',
})

globalStyle(`${luxScope}${elSup}`, {
	top: '-0.5em',
})

globalStyle(`${luxScope}${link}`, {
	color: `rgba(${varBsLinkColorRgb}, ${varBsLinkOpacity})`,
	textDecoration: 'underline',
})

globalStyle(`${luxScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${luxScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${luxScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${luxScope}${elPre}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`${luxScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`${luxScope}${elKbd}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`${luxScope}${elSamp}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`${luxScope}${elPre}`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`${luxScope}${elPre} ${luxScope}${inlineCode}`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`${luxScope}${inlineCode}`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`${luxScope}${link} > ${luxScope}${inlineCode}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${elKbd}`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
})

globalStyle(`${luxScope}${elKbd} ${luxScope}${elKbd}`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`${luxScope}${elFigure}`, {
	margin: '0 0 1rem',
})

globalStyle(`${luxScope}${elImg}`, {
	verticalAlign: 'middle',
})

globalStyle(`${luxScope}${elSvg}`, {
	verticalAlign: 'middle',
})

globalStyle(`${luxScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`${luxScope}${elCaption}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`${luxScope}${tableHeaderCell}`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`${luxScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${luxScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${luxScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${luxScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${luxScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${luxScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${luxScope}${elLabel}`, {
	display: 'inline-block',
})

globalStyle(`${luxScope}${elButton}`, {
	borderRadius: '0',
})

globalStyle(`${luxScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`${luxScope}${elInput}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${luxScope}${elButton}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${luxScope}${elSelect}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${luxScope}${elOptgroup}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${luxScope}${elTextarea}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${luxScope}${elButton}`, {
	textTransform: 'none',
})

globalStyle(`${luxScope}${elSelect}`, {
	textTransform: 'none',
})

globalStyle(`[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`${luxScope}${elSelect}`, {
	wordWrap: 'normal',
})

globalStyle(`${luxScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`${luxScope}${elButton}`, {
	WebkitAppearance: 'button',
})

globalStyle(`[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${luxScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`${luxScope}${elTextarea}`, {
	resize: 'vertical',
})

globalStyle(`${luxScope}${fieldset}`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`${luxScope}${elLegend}`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${luxScope}${elLegend}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${luxScope}${elLegend} + *`, {
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

globalStyle(`[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`${luxScope}${elOutput}`, {
	display: 'inline-block',
})

globalStyle(`${luxScope}${elIframe}`, {
	border: '0',
})

globalStyle(`${luxScope}${elSummary}`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`${luxScope}${elProgress}`, {
	verticalAlign: 'baseline',
})

globalStyle(`[hidden]`, {
	display: 'none !important',
})

globalStyle(`${luxScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${luxScope}${display1}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.625rem + 4.5vw)',
})

globalStyle(`${luxScope}${display1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '5rem',
		},
	},
})

globalStyle(`${luxScope}${display2}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.575rem + 3.9vw)',
})

globalStyle(`${luxScope}${display2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4.5rem',
		},
	},
})

globalStyle(`${luxScope}${display3}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.525rem + 3.3vw)',
})

globalStyle(`${luxScope}${display3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

globalStyle(`${luxScope}${display4}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.475rem + 2.7vw)',
})

globalStyle(`${luxScope}${display4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3.5rem',
		},
	},
})

globalStyle(`${luxScope}${display5}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${luxScope}${display5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${luxScope}${display6}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${luxScope}${display6}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${luxScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${luxScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${luxScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${luxScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${luxScope}${initialism}`, {
	fontSize: '0.875em',
	textTransform: 'uppercase',
})

globalStyle(`${luxScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${luxScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#919aa1',
})

globalStyle(`${luxScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${luxScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${luxScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${luxScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${luxScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: '1',
})

globalStyle(`${luxScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${luxScope}${container}`, {
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

globalStyle(`${luxScope}${containerFluid}`, {
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

globalStyle(`${luxScope}${containerXxl}`, {
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

globalStyle(`${luxScope}${containerXl}`, {
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

globalStyle(`${luxScope}${containerLg}`, {
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

globalStyle(`${luxScope}${containerMd}`, {
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

globalStyle(`${luxScope}${containerSm}`, {
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

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${luxScope}${containerMd}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${luxScope}${containerLg}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${luxScope}${containerMd}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${luxScope}${containerXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${containerLg}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${containerMd}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${containerXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${containerXl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${containerLg}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${containerMd}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${row}`, {
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

globalStyle(`${luxScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${luxScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${luxScope}${rowColsAuto} > *`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${luxScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${luxScope}${rowCols2} > *`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${luxScope}${rowCols3} > *`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${luxScope}${rowCols4} > *`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${luxScope}${rowCols5} > *`, {
	flex: '0 0 auto',
	width: '20%',
})

globalStyle(`${luxScope}${rowCols6} > *`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${luxScope}${colAuto}`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${luxScope}${col1}`, {
	flex: '0 0 auto',
	width: '8.33333333%',
})

globalStyle(`${luxScope}${col2}`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${luxScope}${col3}`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${luxScope}${col4}`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${luxScope}${col5}`, {
	flex: '0 0 auto',
	width: '41.66666667%',
})

globalStyle(`${luxScope}${col6}`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${luxScope}${col7}`, {
	flex: '0 0 auto',
	width: '58.33333333%',
})

globalStyle(`${luxScope}${col8}`, {
	flex: '0 0 auto',
	width: '66.66666667%',
})

globalStyle(`${luxScope}${col9}`, {
	flex: '0 0 auto',
	width: '75%',
})

globalStyle(`${luxScope}${col10}`, {
	flex: '0 0 auto',
	width: '83.33333333%',
})

globalStyle(`${luxScope}${col11}`, {
	flex: '0 0 auto',
	width: '91.66666667%',
})

globalStyle(`${luxScope}${col12}`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${luxScope}${offset1}`, {
	marginLeft: '8.33333333%',
})

globalStyle(`${luxScope}${offset2}`, {
	marginLeft: '16.66666667%',
})

globalStyle(`${luxScope}${offset3}`, {
	marginLeft: '25%',
})

globalStyle(`${luxScope}${offset4}`, {
	marginLeft: '33.33333333%',
})

globalStyle(`${luxScope}${offset5}`, {
	marginLeft: '41.66666667%',
})

globalStyle(`${luxScope}${offset6}`, {
	marginLeft: '50%',
})

globalStyle(`${luxScope}${offset7}`, {
	marginLeft: '58.33333333%',
})

globalStyle(`${luxScope}${offset8}`, {
	marginLeft: '66.66666667%',
})

globalStyle(`${luxScope}${offset9}`, {
	marginLeft: '75%',
})

globalStyle(`${luxScope}${offset10}`, {
	marginLeft: '83.33333333%',
})

globalStyle(`${luxScope}${offset11}`, {
	marginLeft: '91.66666667%',
})

globalStyle(`${luxScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${luxScope}${gx0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${luxScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${luxScope}${gy0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${luxScope}${g1}`, {
	vars: {
		[varBsGutterX]: '0.25rem',
	},
})

globalStyle(`${luxScope}${gx1}`, {
	vars: {
		[varBsGutterX]: '0.25rem',
	},
})

globalStyle(`${luxScope}${g1}`, {
	vars: {
		[varBsGutterY]: '0.25rem',
	},
})

globalStyle(`${luxScope}${gy1}`, {
	vars: {
		[varBsGutterY]: '0.25rem',
	},
})

globalStyle(`${luxScope}${g2}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${luxScope}${gx2}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${luxScope}${g2}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${luxScope}${gy2}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${luxScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${luxScope}${gx3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${luxScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${luxScope}${gy3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${luxScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${luxScope}${gx4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${luxScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${luxScope}${gy4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${luxScope}${g5}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${luxScope}${gx5}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${luxScope}${g5}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${luxScope}${gy5}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${luxScope}${colSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsSmAuto} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm1} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm2} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm3} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm4} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm5} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm6} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSm12}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${colMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsMdAuto} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd1} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd3} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd4} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd5} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd6} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colMd12}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${colLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsLgAuto} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg1} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg2} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg3} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg4} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg5} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg6} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLg12}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${colXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsXlAuto} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl1} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl2} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl3} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl4} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl5} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl6} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXl12}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${colXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxlAuto} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl1} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl2} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl3} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl4} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl5} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl6} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxl12}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${table}`, {
	vars: {
		[varBsTableColorType]: 'initial',
		[varBsTableBgType]: 'initial',
		[varBsTableColorState]: 'initial',
		[varBsTableBgState]: 'initial',
		[varBsTableColor]: 'initial',
		[varBsTableBg]: varBsBodyBg,
		[varBsTableBorderColor]: 'rgba(0, 0, 0, 0.05)',
		[varBsTableAccentBg]: 'transparent',
		[varBsTableStripedColor]: 'initial',
		[varBsTableStripedBg]: `rgba(${varBsEmphasisColorRgb}, 0.05)`,
		[varBsTableActiveColor]: 'initial',
		[varBsTableActiveBg]: `rgba(${varBsEmphasisColorRgb}, 0.1)`,
		[varBsTableHoverColor]: 'initial',
		[varBsTableHoverBg]: `rgba(${varBsEmphasisColorRgb}, 0.075)`,
	},
	width: '100%',
	marginBottom: '1rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: varBsTableColorState,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${varBsTableBgState}`,
})

globalStyle(`${luxScope}${table} > ${luxScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${luxScope}${table} > ${luxScope}${tableSection}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${luxScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${luxScope}${captionTop}`, {
	captionSide: 'top',
})

globalStyle(`${luxScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${luxScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${luxScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${luxScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${luxScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${luxScope}${tableStriped} > ${luxScope}${tableSection} > ${luxScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${luxScope}${tableStripedColumns} > :not(caption) > ${luxScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${luxScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${luxScope}${tableHover} > ${luxScope}${tableSection} > ${luxScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${luxScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d1d1d1',
		[varBsTableBorderColor]: '#a7a7a7',
		[varBsTableStripedBg]: '#c7c7c7',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bcbcbc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c1c1c1',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: 'white',
		[varBsTableBorderColor]: '#cccccc',
		[varBsTableStripedBg]: '#f2f2f2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6e6e6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ececec',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#dbf2e3',
		[varBsTableBorderColor]: '#afc2b6',
		[varBsTableStripedBg]: '#d0e6d8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c5dacc',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#cbe0d2',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d2ebf5',
		[varBsTableBorderColor]: '#a8bcc4',
		[varBsTableStripedBg]: '#c8dfe9',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bdd4dd',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c2d9e3',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fcefdc',
		[varBsTableBorderColor]: '#cabfb0',
		[varBsTableStripedBg]: '#efe3d1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e3d7c6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e9ddcc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f7dddc',
		[varBsTableBorderColor]: '#c6b1b0',
		[varBsTableStripedBg]: '#ebd2d1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dec7c6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e4cccc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f0f1f2',
		[varBsTableBorderColor]: '#c0c1c2',
		[varBsTableStripedBg]: '#e4e5e6',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d8d9da',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#dedfe0',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#343a40',
		[varBsTableBorderColor]: '#5d6166',
		[varBsTableStripedBg]: '#3e444a',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#484e53',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#43494e',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${luxScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${luxScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${luxScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${luxScope}${colFormLabel}`, {
	paddingTop: `calc(0.75rem + ${varBsBorderWidth})`,
	paddingBottom: `calc(0.75rem + ${varBsBorderWidth})`,
	marginBottom: '0',
	fontSize: 'inherit',
	lineHeight: '1.5',
})

globalStyle(`${luxScope}${colFormLabelLg}`, {
	paddingTop: `calc(2rem + ${varBsBorderWidth})`,
	paddingBottom: `calc(2rem + ${varBsBorderWidth})`,
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${colFormLabelSm}`, {
	paddingTop: `calc(0.5rem + ${varBsBorderWidth})`,
	paddingBottom: `calc(0.5rem + ${varBsBorderWidth})`,
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${luxScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '300',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#f0f1f2',
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${luxScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${luxScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: '#f0f1f2',
	borderColor: '#8d8d8d',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${luxScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${luxScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${luxScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${luxScope}${formControl}:disabled`, {
	backgroundColor: '#e0e1e2',
	opacity: '1',
})

globalStyle(`${luxScope}${formControl}::-webkit-file-upload-button`, {
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
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formControl}::file-selector-button`, {
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
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${luxScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${luxScope}${formControlPlaintext}`, {
	display: 'block',
	width: '100%',
	padding: '0.75rem 0',
	marginBottom: '0',
	lineHeight: '1.5',
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	border: 'solid transparent',
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${luxScope}${formControlPlaintext}:focus`, {
	outline: '0',
})

globalStyle(`${luxScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${luxScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${luxScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${luxScope}${formControlSm}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${luxScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 4rem + calc(${varBsBorderWidth} * 2))`,
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '2rem 2rem',
	margin: '-2rem -2rem',
	WebkitMarginEnd: '2rem',
	marginInlineEnd: '2rem',
})

globalStyle(`${luxScope}${formControlLg}::file-selector-button`, {
	padding: '2rem 2rem',
	margin: '-2rem -2rem',
	WebkitMarginEnd: '2rem',
	marginInlineEnd: '2rem',
})

globalStyle(`${luxScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 1.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 4rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${formControlColor}`, {
	width: '3rem',
	height: `calc(1.5em + 1.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.75rem',
})

globalStyle(`${luxScope}${formControlColor}:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${luxScope}${formControlColor}::-moz-color-swatch`, {
	border: '0 !important',
})

globalStyle(`${luxScope}${formControlColor}::-webkit-color-swatch`, {
	border: '0 !important',
})

globalStyle(`${luxScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 4rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.75rem 4.5rem 0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '300',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#f0f1f2',
	backgroundImage: `${varBsFormSelectBgImg}, ${varBsFormSelectBgIcon}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1.5rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formSelect}:focus`, {
	borderColor: '#8d8d8d',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formSelect}[multiple]`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${luxScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${luxScope}${formSelect}:disabled`, {
	color: '#919aa1',
	backgroundColor: '#e0e1e2',
})

globalStyle(`${luxScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${luxScope}${formSelectSm}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${formSelectLg}`, {
	paddingTop: '2rem',
	paddingBottom: '2rem',
	paddingLeft: '2rem',
	fontSize: '1.25rem',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23e0e1e2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${luxScope}${formCheck} ${luxScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${luxScope}${formCheckReverse}`, {
	paddingRight: '1.5em',
	paddingLeft: '0',
	textAlign: 'right',
})

globalStyle(`${luxScope}${formCheckReverse} ${luxScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${luxScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: '#f0f1f2',
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
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	WebkitPrintColorAdjust: 'exact',
	colorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${luxScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${luxScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${luxScope}${formCheckInput}:focus`, {
	borderColor: '#8d8d8d',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formCheckInput}:checked`, {
	backgroundColor: '#1a1a1a',
	borderColor: '#1a1a1a',
})

globalStyle(`${luxScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#1a1a1a',
	borderColor: '#1a1a1a',
})

globalStyle(`${luxScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${luxScope}${formCheckInput}[disabled] ~ ${luxScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${luxScope}${formCheckInput}:disabled ~ ${luxScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${luxScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${luxScope}${formSwitch} ${luxScope}${formCheckInput}`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%280, 0, 0, 0.25%29\'/%3e%3c/svg%3e")',
	},
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '0',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formSwitch} ${luxScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formSwitch} ${luxScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%238d8d8d\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formSwitch} ${luxScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${luxScope}${formSwitch}${formCheckReverse}`, {
	paddingRight: '2.5em',
	paddingLeft: '0',
})

globalStyle(`${luxScope}${formSwitch}${formCheckReverse} ${luxScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${luxScope}${formCheckInline}`, {
	display: 'inline-block',
	marginRight: '1rem',
})

globalStyle(`${luxScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${luxScope}${btnCheck}[disabled] + ${luxScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${luxScope}${btnCheck}:disabled + ${luxScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formSwitch} ${luxScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${luxScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${luxScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${luxScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#1a1a1a',
	border: '0',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#bababa',
})

globalStyle(`${luxScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
})

globalStyle(`${luxScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#1a1a1a',
	border: '0',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#bababa',
})

globalStyle(`${luxScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
})

globalStyle(`${luxScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${luxScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${luxScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${luxScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elLabel}`, {
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
	border: `${varBsBorderWidth} solid transparent`,
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}`, {
	padding: '1rem 1.5rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}`, {
	padding: '1rem 1.5rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1.5rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:not(:-moz-placeholder-shown) ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:focus ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:not(:placeholder-shown) ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext} ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formSelect} ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:-webkit-autofill ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${luxScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#f0f1f2',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elTextarea}:focus ~ ${luxScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#f0f1f2',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elTextarea}:not(:placeholder-shown) ~ ${luxScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#f0f1f2',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elTextarea}:disabled ~ ${luxScope}${elLabel}::after`, {
	backgroundColor: '#e0e1e2',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext} ~ ${luxScope}${elLabel}`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${luxScope}${formFloating} > :disabled ~ ${luxScope}${elLabel}`, {
	color: '#919aa1',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:disabled ~ ${luxScope}${elLabel}`, {
	color: '#919aa1',
})

globalStyle(`${luxScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${luxScope}${inputGroup} ${luxScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${luxScope}${inputGroup} ${luxScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${luxScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '300',
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: '#e0e1e2',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${formControl}`, {
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${formSelect}`, {
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${inputGroupText}`, {
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${btn}`, {
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${luxScope}${validTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.25rem 0.5rem',
	marginTop: '0.1rem',
	fontSize: '0.875rem',
	color: '#fff',
	backgroundColor: varBsSuccess,
})

globalStyle(`${luxScope}${wasValidated} :valid ~ ${luxScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${luxScope}${wasValidated} :valid ~ ${luxScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${luxScope}${isValid} ~ ${luxScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${luxScope}${isValid} ~ ${luxScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${luxScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${luxScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControlColor}:valid`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${luxScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${luxScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${luxScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:valid ~ ${luxScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${luxScope}${formCheckInput}${isValid} ~ ${luxScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${luxScope}${formCheckInline} ${luxScope}${formCheckInput} ~ ${luxScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${invalidTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.25rem 0.5rem',
	marginTop: '0.1rem',
	fontSize: '0.875rem',
	color: '#fff',
	backgroundColor: varBsDanger,
})

globalStyle(`${luxScope}${wasValidated} :invalid ~ ${luxScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${luxScope}${wasValidated} :invalid ~ ${luxScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${luxScope}${isInvalid} ~ ${luxScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${luxScope}${isInvalid} ~ ${luxScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${luxScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${luxScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControlColor}:invalid`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${luxScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${luxScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:invalid ~ ${luxScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${formCheckInput}${isInvalid} ~ ${luxScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${formCheckInline} ${luxScope}${formCheckInput} ~ ${luxScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1.5rem',
		[varBsBtnPaddingY]: '0.75rem',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '1rem',
		[varBsBtnFontWeight]: '600',
		[varBsBtnLineHeight]: '1.5rem',
		[varBsBtnColor]: varBsBodyColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderWidth]: varBsBorderWidth,
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnBorderRadius]: varBsBorderRadius,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
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
	backgroundColor: varBsBtnBg,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${luxScope}${btnCheck} + ${luxScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${luxScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btnCheck}:focus-visible + ${luxScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btnCheck}:checked + ${luxScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${luxScope}:not(${btnCheck}) + ${luxScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${luxScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${luxScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${luxScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${luxScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${luxScope}${btnCheck}:checked + ${luxScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}:not(${btnCheck}) + ${luxScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btn}${btnShowHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btnCheck}:checked:focus-visible + ${luxScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${luxScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${luxScope}${fieldset}:disabled ${luxScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${luxScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#1a1a1a',
		[varBsBtnBorderColor]: '#1a1a1a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#161616',
		[varBsBtnHoverBorderColor]: '#151515',
		[varBsBtnFocusBoxShadowRgb]: '60, 60, 60',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#151515',
		[varBsBtnActiveBorderColor]: '#141414',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#1a1a1a',
		[varBsBtnDisabledBorderColor]: '#1a1a1a',
	},
})

globalStyle(`${luxScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#fff',
		[varBsBtnBorderColor]: '#fff',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: 'white',
		[varBsBtnHoverBorderColor]: 'white',
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: 'white',
		[varBsBtnActiveBorderColor]: 'white',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#fff',
		[varBsBtnDisabledBorderColor]: '#fff',
	},
})

globalStyle(`${luxScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#4bbf73',
		[varBsBtnBorderColor]: '#4bbf73',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#40a262',
		[varBsBtnHoverBorderColor]: '#3c995c',
		[varBsBtnFocusBoxShadowRgb]: '102, 201, 136',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3c995c',
		[varBsBtnActiveBorderColor]: '#388f56',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#4bbf73',
		[varBsBtnDisabledBorderColor]: '#4bbf73',
	},
})

globalStyle(`${luxScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#1f9bcf',
		[varBsBtnBorderColor]: '#1f9bcf',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1a84b0',
		[varBsBtnHoverBorderColor]: '#197ca6',
		[varBsBtnFocusBoxShadowRgb]: '65, 170, 214',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#197ca6',
		[varBsBtnActiveBorderColor]: '#17749b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#1f9bcf',
		[varBsBtnDisabledBorderColor]: '#1f9bcf',
	},
})

globalStyle(`${luxScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f0ad4e',
		[varBsBtnBorderColor]: '#f0ad4e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cc9342',
		[varBsBtnHoverBorderColor]: '#c08a3e',
		[varBsBtnFocusBoxShadowRgb]: '242, 185, 105',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c08a3e',
		[varBsBtnActiveBorderColor]: '#b4823b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f0ad4e',
		[varBsBtnDisabledBorderColor]: '#f0ad4e',
	},
})

globalStyle(`${luxScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#d9534f',
		[varBsBtnBorderColor]: '#d9534f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b84743',
		[varBsBtnHoverBorderColor]: '#ae423f',
		[varBsBtnFocusBoxShadowRgb]: '223, 109, 105',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ae423f',
		[varBsBtnActiveBorderColor]: '#a33e3b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#d9534f',
		[varBsBtnDisabledBorderColor]: '#d9534f',
	},
})

globalStyle(`${luxScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f0f1f2',
		[varBsBtnBorderColor]: '#f0f1f2',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#cccdce',
		[varBsBtnHoverBorderColor]: '#c0c1c2',
		[varBsBtnFocusBoxShadowRgb]: '204, 205, 206',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#c0c1c2',
		[varBsBtnActiveBorderColor]: '#b4b5b6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f0f1f2',
		[varBsBtnDisabledBorderColor]: '#f0f1f2',
	},
})

globalStyle(`${luxScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#343a40',
		[varBsBtnBorderColor]: '#343a40',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#52585d',
		[varBsBtnHoverBorderColor]: '#484e53',
		[varBsBtnFocusBoxShadowRgb]: '82, 88, 93',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5d6166',
		[varBsBtnActiveBorderColor]: '#484e53',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#343a40',
		[varBsBtnDisabledBorderColor]: '#343a40',
	},
})

globalStyle(`${luxScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#1a1a1a',
		[varBsBtnBorderColor]: '#1a1a1a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1a1a1a',
		[varBsBtnHoverBorderColor]: '#1a1a1a',
		[varBsBtnFocusBoxShadowRgb]: '26, 26, 26',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1a1a1a',
		[varBsBtnActiveBorderColor]: '#1a1a1a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#1a1a1a',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#1a1a1a',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBorderColor]: '#fff',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#fff',
		[varBsBtnHoverBorderColor]: '#fff',
		[varBsBtnFocusBoxShadowRgb]: '255, 255, 255',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#fff',
		[varBsBtnActiveBorderColor]: '#fff',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#fff',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#4bbf73',
		[varBsBtnBorderColor]: '#4bbf73',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4bbf73',
		[varBsBtnHoverBorderColor]: '#4bbf73',
		[varBsBtnFocusBoxShadowRgb]: '75, 191, 115',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4bbf73',
		[varBsBtnActiveBorderColor]: '#4bbf73',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#4bbf73',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#4bbf73',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#1f9bcf',
		[varBsBtnBorderColor]: '#1f9bcf',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1f9bcf',
		[varBsBtnHoverBorderColor]: '#1f9bcf',
		[varBsBtnFocusBoxShadowRgb]: '31, 155, 207',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1f9bcf',
		[varBsBtnActiveBorderColor]: '#1f9bcf',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#1f9bcf',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#1f9bcf',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f0ad4e',
		[varBsBtnBorderColor]: '#f0ad4e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f0ad4e',
		[varBsBtnHoverBorderColor]: '#f0ad4e',
		[varBsBtnFocusBoxShadowRgb]: '240, 173, 78',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f0ad4e',
		[varBsBtnActiveBorderColor]: '#f0ad4e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f0ad4e',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f0ad4e',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#d9534f',
		[varBsBtnBorderColor]: '#d9534f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9534f',
		[varBsBtnHoverBorderColor]: '#d9534f',
		[varBsBtnFocusBoxShadowRgb]: '217, 83, 79',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#d9534f',
		[varBsBtnActiveBorderColor]: '#d9534f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#d9534f',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#d9534f',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#f0f1f2',
		[varBsBtnBorderColor]: '#f0f1f2',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f0f1f2',
		[varBsBtnHoverBorderColor]: '#f0f1f2',
		[varBsBtnFocusBoxShadowRgb]: '240, 241, 242',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f0f1f2',
		[varBsBtnActiveBorderColor]: '#f0f1f2',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f0f1f2',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f0f1f2',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#343a40',
		[varBsBtnBorderColor]: '#343a40',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#343a40',
		[varBsBtnHoverBorderColor]: '#343a40',
		[varBsBtnFocusBoxShadowRgb]: '52, 58, 64',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#343a40',
		[varBsBtnActiveBorderColor]: '#343a40',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#343a40',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#343a40',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '300',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#919aa1',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '60, 60, 60',
	},
	textDecoration: 'underline',
})

globalStyle(`${luxScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${luxScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${luxScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '2rem',
		[varBsBtnPaddingX]: '2rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${luxScope}${btnGroupLg} > ${luxScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '2rem',
		[varBsBtnPaddingX]: '2rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${luxScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${luxScope}${btnGroupSm} > ${luxScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${luxScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${luxScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${luxScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${luxScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${luxScope}${collapsing}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${collapsing}${collapseHorizontal}`, {
	width: '0',
	height: 'auto',
	transition: 'width 0.35s ease',
})

globalStyle(`${luxScope}${collapsing}${collapseHorizontal}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${dropup}`, {
	position: 'relative',
})

globalStyle(`${luxScope}${dropend}`, {
	position: 'relative',
})

globalStyle(`${luxScope}${dropdown}`, {
	position: 'relative',
})

globalStyle(`${luxScope}${dropstart}`, {
	position: 'relative',
})

globalStyle(`${luxScope}${dropupCenter}`, {
	position: 'relative',
})

globalStyle(`${luxScope}${dropdownCenter}`, {
	position: 'relative',
})

globalStyle(`${luxScope}${dropdownToggle}`, {
	whiteSpace: 'nowrap',
})

globalStyle(`${luxScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid',
	borderRight: '0.3em solid transparent',
	borderBottom: '0',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${luxScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${luxScope}${dropdownMenu}`, {
	vars: {
		[varBsDropdownZindex]: '1000',
		[varBsDropdownMinWidth]: '10rem',
		[varBsDropdownPaddingX]: '0',
		[varBsDropdownPaddingY]: '0.5rem',
		[varBsDropdownSpacer]: '0.125rem',
		[varBsDropdownFontSize]: '1rem',
		[varBsDropdownColor]: varBsBodyColor,
		[varBsDropdownBg]: varBsBodyBg,
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBorderRadius]: varBsBorderRadius,
		[varBsDropdownBorderWidth]: varBsBorderWidth,
		[varBsDropdownInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownDividerMarginY]: '0.5rem',
		[varBsDropdownBoxShadow]: varBsBoxShadow,
		[varBsDropdownLinkColor]: varBsBodyColor,
		[varBsDropdownLinkHoverColor]: varBsBodyColor,
		[varBsDropdownLinkHoverBg]: varBsTertiaryBg,
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#1a1a1a',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '1rem',
		[varBsDropdownItemPaddingY]: '0.25rem',
		[varBsDropdownHeaderColor]: '#919aa1',
		[varBsDropdownHeaderPaddingX]: '1rem',
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
})

globalStyle(`${luxScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: '0',
	marginTop: varBsDropdownSpacer,
})

globalStyle(`${luxScope}${dropdownMenuStart}`, {
	vars: {
		[varBsPosition]: 'start',
	},
})

globalStyle(`${luxScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: '0',
})

globalStyle(`${luxScope}${dropdownMenuEnd}`, {
	vars: {
		[varBsPosition]: 'end',
	},
})

globalStyle(`${luxScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: '0',
	left: 'auto',
})

globalStyle(`${luxScope}${dropdownMenuSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuSmStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuSmEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuMdStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuMdEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuLgStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuLgEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuXlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuXlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuXxlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${luxScope}${dropdownMenuXxlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${luxScope}${dropup} ${luxScope}${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: '0',
	marginBottom: varBsDropdownSpacer,
})

globalStyle(`${luxScope}${dropup} ${luxScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0',
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${luxScope}${dropup} ${luxScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${luxScope}${dropend} ${luxScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: 'auto',
	left: '100%',
	marginTop: '0',
	marginLeft: varBsDropdownSpacer,
})

globalStyle(`${luxScope}${dropend} ${luxScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0',
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${luxScope}${dropend} ${luxScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${luxScope}${dropend} ${luxScope}${dropdownToggle}::after`, {
	verticalAlign: '0',
})

globalStyle(`${luxScope}${dropstart} ${luxScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: '100%',
	left: 'auto',
	marginTop: '0',
	marginRight: varBsDropdownSpacer,
})

globalStyle(`${luxScope}${dropstart} ${luxScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
})

globalStyle(`${luxScope}${dropstart} ${luxScope}${dropdownToggle}::after`, {
	display: 'none',
})

globalStyle(`${luxScope}${dropstart} ${luxScope}${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${luxScope}${dropstart} ${luxScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${luxScope}${dropstart} ${luxScope}${dropdownToggle}::before`, {
	verticalAlign: '0',
})

globalStyle(`${luxScope}${dropdownDivider}`, {
	height: '0',
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: '1',
})

globalStyle(`${luxScope}${dropdownItem}`, {
	display: 'block',
	width: '100%',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	clear: 'both',
	fontWeight: '300',
	color: varBsDropdownLinkColor,
	textAlign: 'inherit',
	textDecoration: 'none',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: '0',
})

globalStyle(`${luxScope}${dropdownItem}:hover`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${luxScope}${dropdownItem}:focus`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${luxScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${luxScope}${dropdownItem}:active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${luxScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${luxScope}${dropdownItem}:disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${luxScope}${dropdownMenu}${dropdownMenuShow}`, {
	display: 'block',
})

globalStyle(`${luxScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

globalStyle(`${luxScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

globalStyle(`${luxScope}${dropdownMenuDark}`, {
	vars: {
		[varBsDropdownColor]: '#e0e1e2',
		[varBsDropdownBg]: '#343a40',
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBoxShadow]: '',
		[varBsDropdownLinkColor]: '#e0e1e2',
		[varBsDropdownLinkHoverColor]: '#fff',
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.15)',
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#1a1a1a',
		[varBsDropdownLinkDisabledColor]: '#adb5bd',
		[varBsDropdownHeaderColor]: '#adb5bd',
	},
})

globalStyle(`${luxScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${luxScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btnCheck}:checked + ${luxScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btnCheck}:focus + ${luxScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btnCheck}:checked + ${luxScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btnCheck}:focus + ${luxScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${luxScope}${btnToolbar} ${luxScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}:not(${btnCheck}:first-child) + ${luxScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${dropdownToggleSplit}`, {
	paddingRight: '1.125rem',
	paddingLeft: '1.125rem',
})

globalStyle(`${luxScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${luxScope}${dropup} ${luxScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${luxScope}${dropend} ${luxScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${luxScope}${dropstart} ${luxScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${luxScope}${btnSm} + ${luxScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${luxScope}${btnGroupSm} > ${luxScope}${btn} + ${luxScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${luxScope}${btnLg} + ${luxScope}${dropdownToggleSplit}`, {
	paddingRight: '1.5rem',
	paddingLeft: '1.5rem',
})

globalStyle(`${luxScope}${btnGroupLg} > ${luxScope}${btn} + ${luxScope}${dropdownToggleSplit}`, {
	paddingRight: '1.5rem',
	paddingLeft: '1.5rem',
})

globalStyle(`${luxScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}`, {
	width: '100%',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: varBsSecondaryColor,
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${luxScope}${navLink}`, {
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

globalStyle(`${luxScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${luxScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${luxScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${navLink}${disabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${luxScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${luxScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${luxScope}${navTabs} ${luxScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
})

globalStyle(`${luxScope}${navTabs} ${luxScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${luxScope}${navTabs} ${luxScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${luxScope}${navTabs} ${luxScope}${navLink}${active}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${luxScope}${navTabs} ${luxScope}${navItem}${show} ${luxScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${luxScope}${navTabs} ${luxScope}${dropdownMenu}`, {
	marginTop: `calc(-1 * ${varBsNavTabsBorderWidth})`,
})

globalStyle(`${luxScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#1a1a1a',
	},
})

globalStyle(`${luxScope}${navPills} ${luxScope}${navLink}${active}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${luxScope}${navPills} ${luxScope}${show} > ${luxScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${luxScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${luxScope}${navUnderline} ${luxScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${luxScope}${navUnderline} ${luxScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${luxScope}${navUnderline} ${luxScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${luxScope}${navUnderline} ${luxScope}${navLink}${active}`, {
	fontWeight: '600',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${luxScope}${navUnderline} ${luxScope}${show} > ${luxScope}${navLink}`, {
	fontWeight: '600',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${luxScope}${navFill} > ${luxScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${luxScope}${navFill} ${luxScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${luxScope}${navJustified} > ${luxScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${luxScope}${navJustified} ${luxScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${luxScope}${navFill} ${luxScope}${navItem} ${luxScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${luxScope}${navJustified} ${luxScope}${navItem} ${luxScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${luxScope}${tabContent} > ${luxScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${luxScope}${tabContent} > ${luxScope}${active}`, {
	display: 'block',
})

globalStyle(`${luxScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: '0',
		[varBsNavbarPaddingY]: '1.5rem',
		[varBsNavbarColor]: 'rgba(0, 0, 0, 0.3)',
		[varBsNavbarHoverColor]: '#1a1a1a',
		[varBsNavbarDisabledColor]: `rgba(${varBsEmphasisColorRgb}, 0.3)`,
		[varBsNavbarActiveColor]: '#1a1a1a',
		[varBsNavbarBrandPaddingY]: '0.3125rem',
		[varBsNavbarBrandMarginEnd]: '1rem',
		[varBsNavbarBrandFontSize]: '1.25rem',
		[varBsNavbarBrandColor]: '#1a1a1a',
		[varBsNavbarBrandHoverColor]: '#1a1a1a',
		[varBsNavbarNavLinkPaddingX]: '0.5rem',
		[varBsNavbarTogglerPaddingY]: '0.25rem',
		[varBsNavbarTogglerPaddingX]: '0.75rem',
		[varBsNavbarTogglerFontSize]: '1.25rem',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%2885, 89, 92, 0.75%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
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

globalStyle(`${luxScope}${navbar} > ${luxScope}${container}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerSm}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerMd}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerLg}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerXl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerXxl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: varBsNavbarBrandFontSize,
	color: varBsNavbarBrandColor,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
})

globalStyle(`${luxScope}${navbarBrand}:hover`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${luxScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${luxScope}${navbarNav}`, {
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

globalStyle(`${luxScope}${navbarNav} ${luxScope}${navLink}${active}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${luxScope}${navbarNav} ${luxScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${luxScope}${navbarNav} ${luxScope}${dropdownMenu}`, {
	position: 'static',
})

globalStyle(`${luxScope}${navbarText}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsNavbarColor,
})

globalStyle(`${luxScope}${navbarText} ${luxScope}${link}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${luxScope}${navbarText} ${luxScope}${link}:hover`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${luxScope}${navbarText} ${luxScope}${link}:focus`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${luxScope}${navbarCollapse}`, {
	flexGrow: '1',
	flexBasis: '100%',
	alignItems: 'center',
})

globalStyle(`${luxScope}${navbarToggler}`, {
	padding: `${varBsNavbarTogglerPaddingY} ${varBsNavbarTogglerPaddingX}`,
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: '1',
	color: varBsNavbarColor,
	backgroundColor: 'transparent',
	border: `${varBsBorderWidth} solid ${varBsNavbarTogglerBorderColor}`,
	transition: varBsNavbarTogglerTransition,
})

globalStyle(`${luxScope}${navbarToggler}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarToggler}:hover`, {
	textDecoration: 'none',
})

globalStyle(`${luxScope}${navbarToggler}:focus`, {
	textDecoration: 'none',
	outline: '0',
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

globalStyle(`${luxScope}${navbarTogglerIcon}`, {
	display: 'inline-block',
	width: '1.5em',
	height: '1.5em',
	verticalAlign: 'middle',
	backgroundImage: varBsNavbarTogglerIconBg,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: '100%',
})

globalStyle(`${luxScope}${navbarNavScroll}`, {
	maxHeight: 'var(--bs-scroll-height, 75vh)',
	overflowY: 'auto',
})

globalStyle(`${luxScope}${navbarExpandSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandSm} ${luxScope}${navbarNav}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandSm} ${luxScope}${navbarNav} ${luxScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandSm} ${luxScope}${navbarNav} ${luxScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${luxScope}${navbarExpandSm} ${luxScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 576px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandSm} ${luxScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandSm} ${luxScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandSm} ${luxScope}${offcanvas}`, {
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

globalStyle(`${luxScope}${navbarExpandSm} ${luxScope}${offcanvas} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandSm} ${luxScope}${offcanvas} ${luxScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandMd} ${luxScope}${navbarNav}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandMd} ${luxScope}${navbarNav} ${luxScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandMd} ${luxScope}${navbarNav} ${luxScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${luxScope}${navbarExpandMd} ${luxScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 768px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandMd} ${luxScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandMd} ${luxScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandMd} ${luxScope}${offcanvas}`, {
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

globalStyle(`${luxScope}${navbarExpandMd} ${luxScope}${offcanvas} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandMd} ${luxScope}${offcanvas} ${luxScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandLg} ${luxScope}${navbarNav}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandLg} ${luxScope}${navbarNav} ${luxScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandLg} ${luxScope}${navbarNav} ${luxScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${luxScope}${navbarExpandLg} ${luxScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 992px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandLg} ${luxScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandLg} ${luxScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandLg} ${luxScope}${offcanvas}`, {
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

globalStyle(`${luxScope}${navbarExpandLg} ${luxScope}${offcanvas} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandLg} ${luxScope}${offcanvas} ${luxScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXl} ${luxScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXl} ${luxScope}${navbarNav} ${luxScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXl} ${luxScope}${navbarNav} ${luxScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXl} ${luxScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1200px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXl} ${luxScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXl} ${luxScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXl} ${luxScope}${offcanvas}`, {
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

globalStyle(`${luxScope}${navbarExpandXl} ${luxScope}${offcanvas} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXl} ${luxScope}${offcanvas} ${luxScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXxl} ${luxScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXxl} ${luxScope}${navbarNav} ${luxScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXxl} ${luxScope}${navbarNav} ${luxScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXxl} ${luxScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1400px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXxl} ${luxScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXxl} ${luxScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXxl} ${luxScope}${offcanvas}`, {
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

globalStyle(`${luxScope}${navbarExpandXxl} ${luxScope}${offcanvas} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbarExpandXxl} ${luxScope}${offcanvas} ${luxScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${luxScope}${navbarExpand}`, {
	flexWrap: 'nowrap',
	justifyContent: 'flex-start',
})

globalStyle(`${luxScope}${navbarExpand} ${luxScope}${navbarNav}`, {
	flexDirection: 'row',
})

globalStyle(`${luxScope}${navbarExpand} ${luxScope}${navbarNav} ${luxScope}${dropdownMenu}`, {
	position: 'absolute',
})

globalStyle(`${luxScope}${navbarExpand} ${luxScope}${navbarNav} ${luxScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${luxScope}${navbarExpand} ${luxScope}${navbarNavScroll}`, {
	overflow: 'visible',
})

globalStyle(`${luxScope}${navbarExpand} ${luxScope}${navbarCollapse}`, {
	display: 'flex !important',
	flexBasis: 'auto',
})

globalStyle(`${luxScope}${navbarExpand} ${luxScope}${navbarToggler}`, {
	display: 'none',
})

globalStyle(`${luxScope}${navbarExpand} ${luxScope}${offcanvas}`, {
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

globalStyle(`${luxScope}${navbarExpand} ${luxScope}${offcanvas} ${luxScope}${offcanvasHeader}`, {
	display: 'none',
})

globalStyle(`${luxScope}${navbarExpand} ${luxScope}${offcanvas} ${luxScope}${offcanvasBody}`, {
	display: 'flex',
	flexGrow: '0',
	padding: '0',
	overflowY: 'visible',
})

globalStyle(`${luxScope}${navbarDark}`, {
	vars: {
		[varBsNavbarColor]: 'rgba(255, 255, 255, 0.55)',
		[varBsNavbarHoverColor]: '#fff',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.25)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: 'rgba(255, 255, 255, 0.1)',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${navbar}[data-bs-theme=dark]`, {
	vars: {
		[varBsNavbarColor]: 'rgba(255, 255, 255, 0.55)',
		[varBsNavbarHoverColor]: '#fff',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.25)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: 'rgba(255, 255, 255, 0.1)',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${navbarTogglerIcon}`, {
	vars: {
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: '1rem',
		[varBsCardSpacerX]: '1rem',
		[varBsCardTitleSpacerY]: '0.5rem',
		[varBsCardTitleColor]: '',
		[varBsCardSubtitleColor]: '',
		[varBsCardBorderWidth]: varBsBorderWidth,
		[varBsCardBorderColor]: varBsBorderColorTranslucent,
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardBoxShadow]: '',
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
		[varBsCardCapPaddingY]: '0.5rem',
		[varBsCardCapPaddingX]: '1rem',
		[varBsCardCapBg]: `rgba(${varBsBodyColorRgb}, 0.03)`,
		[varBsCardCapColor]: '',
		[varBsCardHeight]: '',
		[varBsCardColor]: '',
		[varBsCardBg]: varBsBodyBg,
		[varBsCardImgOverlayPadding]: '1rem',
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
})

globalStyle(`${luxScope}${card} > ${luxScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${luxScope}${card} > ${luxScope}${listGroup}`, {
	borderTop: 'inherit',
	borderBottom: 'inherit',
})

globalStyle(`${luxScope}${card} > ${luxScope}${listGroup}:first-child`, {
	borderTopWidth: '0',
})

globalStyle(`${luxScope}${card} > ${luxScope}${listGroup}:last-child`, {
	borderBottomWidth: '0',
})

globalStyle(`${luxScope}${card} > ${luxScope}${cardHeader} + ${luxScope}${listGroup}`, {
	borderTop: '0',
})

globalStyle(`${luxScope}${card} > ${luxScope}${listGroup} + ${luxScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${luxScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${luxScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${luxScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${luxScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${luxScope}${cardLink} + ${luxScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${luxScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${luxScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${luxScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})

globalStyle(`${luxScope}${cardHeaderTabs} ${luxScope}${navLink}${active}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${luxScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${luxScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
})

globalStyle(`${luxScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${luxScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${luxScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${luxScope}${cardGroup} > ${luxScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${luxScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${luxScope}${cardGroup} > ${luxScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${luxScope}${cardGroup} > ${luxScope}${card} + ${luxScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${accordion}`, {
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
		[varBsAccordionBtnBg]: varBsAccordionBg,
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%2355595c\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnIconWidth]: '1.25rem',
		[varBsAccordionBtnIconTransform]: 'rotate(-180deg)',
		[varBsAccordionBtnIconTransition]: 'transform 0.2s ease-in-out',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%230a0a0a\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnFocusBoxShadow]: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
		[varBsAccordionBodyPaddingX]: '1.25rem',
		[varBsAccordionBodyPaddingY]: '1rem',
		[varBsAccordionActiveColor]: varBsPrimaryTextEmphasis,
		[varBsAccordionActiveBg]: varBsPrimaryBgSubtle,
	},
})

globalStyle(`${luxScope}${accordionButton}`, {
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
	overflowAnchor: 'none',
	transition: varBsAccordionTransition,
})

globalStyle(`${luxScope}${accordionButton}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${accordionButton}:not(${collapsed})`, {
	color: varBsAccordionActiveColor,
	backgroundColor: varBsAccordionActiveBg,
	boxShadow: `inset 0 calc(-1 * ${varBsAccordionBorderWidth}) 0 ${varBsAccordionBorderColor}`,
})

globalStyle(`${luxScope}${accordionButton}:not(${collapsed})::after`, {
	backgroundImage: varBsAccordionBtnActiveIcon,
	transform: varBsAccordionBtnIconTransform,
})

globalStyle(`${luxScope}${accordionButton}::after`, {
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

globalStyle(`${luxScope}${accordionButton}::after`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${accordionButton}:hover`, {
	zIndex: '2',
})

globalStyle(`${luxScope}${accordionButton}:focus`, {
	zIndex: '3',
	outline: '0',
	boxShadow: varBsAccordionBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${accordionHeader}`, {
	marginBottom: '0',
})

globalStyle(`${luxScope}${accordionItem}`, {
	color: varBsAccordionColor,
	backgroundColor: varBsAccordionBg,
	border: `${varBsAccordionBorderWidth} solid ${varBsAccordionBorderColor}`,
})

globalStyle(`${luxScope}${accordionItem}:not(:first-of-type)`, {
	borderTop: '0',
})

globalStyle(`${luxScope}${accordionBody}`, {
	padding: `${varBsAccordionBodyPaddingY} ${varBsAccordionBodyPaddingX}`,
})

globalStyle(`${luxScope}${accordionFlush} > ${luxScope}${accordionItem}`, {
	borderRight: '0',
	borderLeft: '0',
})

globalStyle(`${luxScope}${accordionFlush} > ${luxScope}${accordionItem}:first-child`, {
	borderTop: '0',
})

globalStyle(`${luxScope}${accordionFlush} > ${luxScope}${accordionItem}:last-child`, {
	borderBottom: '0',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${accordionButton}::after`, {
	vars: {
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23767676\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23767676\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0',
		[varBsBreadcrumbPaddingY]: '0',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '',
		[varBsBreadcrumbBorderRadius]: '',
		[varBsBreadcrumbDividerColor]: varBsSecondaryColor,
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActiveColor]: varBsSecondaryColor,
	},
	display: 'flex',
	flexWrap: 'wrap',
	padding: `${varBsBreadcrumbPaddingY} ${varBsBreadcrumbPaddingX}`,
	marginBottom: varBsBreadcrumbMarginBottom,
	fontSize: 'var(--bs-breadcrumb-font-size)',
	listStyle: 'none',
	backgroundColor: varBsBreadcrumbBg,
})

globalStyle(`${luxScope}${breadcrumbItem} + ${luxScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${luxScope}${breadcrumbItem} + ${luxScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${varBsBreadcrumbDivider} `,
})

globalStyle(`${luxScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${luxScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.75rem',
		[varBsPaginationPaddingY]: '0.375rem',
		[varBsPaginationFontSize]: '1rem',
		[varBsPaginationColor]: varBsLinkColor,
		[varBsPaginationBg]: varBsBodyBg,
		[varBsPaginationBorderWidth]: varBsBorderWidth,
		[varBsPaginationBorderColor]: 'transparent',
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: varBsLinkHoverColor,
		[varBsPaginationHoverBg]: varBsTertiaryBg,
		[varBsPaginationHoverBorderColor]: 'transparent',
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: varBsSecondaryBg,
		[varBsPaginationFocusBoxShadow]: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
		[varBsPaginationActiveColor]: '#fff',
		[varBsPaginationActiveBg]: '#1a1a1a',
		[varBsPaginationActiveBorderColor]: '#1a1a1a',
		[varBsPaginationDisabledColor]: varBsSecondaryColor,
		[varBsPaginationDisabledBg]: varBsSecondaryBg,
		[varBsPaginationDisabledBorderColor]: 'transparent',
	},
	display: 'flex',
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${luxScope}${pageLink}`, {
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

globalStyle(`${luxScope}${pageLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${pageLink}:hover`, {
	zIndex: '2',
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${luxScope}${pageLink}:focus`, {
	zIndex: '3',
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: '0',
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(`${luxScope}${pageLink}${active}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${luxScope}${active} > ${luxScope}${pageLink}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${luxScope}${pageLink}${disabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${luxScope}${disabled} > ${luxScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${luxScope}${pageItem}:not(:first-child) ${luxScope}${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${luxScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${luxScope}${badge}`, {
	vars: {
		[varBsBadgePaddingX]: '0.65em',
		[varBsBadgePaddingY]: '0.35em',
		[varBsBadgeFontSize]: '0.75em',
		[varBsBadgeFontWeight]: '600',
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
})

globalStyle(`${luxScope}${badge}:empty`, {
	display: 'none',
})

globalStyle(`${luxScope}${btn} ${luxScope}${badge}`, {
	position: 'relative',
	top: '-1px',
})

globalStyle(`${luxScope}${alert}`, {
	vars: {
		[varBsAlertBg]: 'transparent',
		[varBsAlertPaddingX]: '1rem',
		[varBsAlertPaddingY]: '1rem',
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
})

globalStyle(`${luxScope}${alertHeading}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${alertLink}`, {
	fontWeight: '600',
	color: varBsAlertLinkColor,
})

globalStyle(`${luxScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

globalStyle(`${luxScope}${alertDismissible} ${luxScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${luxScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${luxScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${luxScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${luxScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${luxScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${luxScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${luxScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${luxScope}${alertDark}`, {
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

globalStyle(`${luxScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#1a1a1a',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
})

globalStyle(`${luxScope}${progressStacked}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#1a1a1a',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
})

globalStyle(`${luxScope}${progressBar}`, {
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

globalStyle(`${luxScope}${progressBar}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${progressBarStriped}`, {
	backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${luxScope}${progressStacked} > ${luxScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${luxScope}${progressStacked} > ${luxScope}${progress} > ${luxScope}${progressBar}`, {
	width: '100%',
})

globalStyle(`${luxScope}${progressBarAnimated}`, {
	animation: '1s linear infinite progress-bar-stripes',
})

globalStyle(`${luxScope}${progressBarAnimated}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})

globalStyle(`${luxScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: varBsBodyColor,
		[varBsListGroupBg]: varBsBodyBg,
		[varBsListGroupBorderColor]: varBsBorderColor,
		[varBsListGroupBorderWidth]: varBsBorderWidth,
		[varBsListGroupBorderRadius]: varBsBorderRadius,
		[varBsListGroupItemPaddingX]: '1rem',
		[varBsListGroupItemPaddingY]: '0.5rem',
		[varBsListGroupActionColor]: varBsSecondaryColor,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsTertiaryBg,
		[varBsListGroupActionActiveColor]: varBsBodyColor,
		[varBsListGroupActionActiveBg]: varBsSecondaryBg,
		[varBsListGroupDisabledColor]: varBsSecondaryColor,
		[varBsListGroupDisabledBg]: varBsBodyBg,
		[varBsListGroupActiveColor]: '#fff',
		[varBsListGroupActiveBg]: '#1a1a1a',
		[varBsListGroupActiveBorderColor]: '#1a1a1a',
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '0',
	marginBottom: '0',
})

globalStyle(`${luxScope}${listGroupNumbered}`, {
	listStyleType: 'none',
	counterReset: 'section',
})

globalStyle(`${luxScope}${listGroupNumbered} > ${luxScope}${listGroupItem}::before`, {
	content: 'counters(section, ".") ". "',
	counterIncrement: 'section',
})

globalStyle(`${luxScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${luxScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${luxScope}${listGroupItem}:disabled`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${luxScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}`, {
	borderTopWidth: '0',
})

globalStyle(`${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${luxScope}${listGroupItemAction}`, {
	width: '100%',
	color: varBsListGroupActionColor,
	textAlign: 'inherit',
})

globalStyle(`${luxScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${luxScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${luxScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${luxScope}${listGroupHorizontal}`, {
	flexDirection: 'row',
})

globalStyle(`${luxScope}${listGroupHorizontal} > ${luxScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${luxScope}${listGroupHorizontal} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}`, {
	borderTopWidth: varBsListGroupBorderWidth,
	borderLeftWidth: '0',
})

globalStyle(`${luxScope}${listGroupHorizontal} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${luxScope}${listGroupHorizontalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalSm} > ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalSm} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalSm} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalMd} > ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalMd} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 768px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalMd} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalLg} > ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalLg} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 992px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalLg} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalXl} > ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalXl} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1200px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalXl} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalXxl} > ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalXxl} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1400px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${luxScope}${listGroupHorizontalXxl} > ${luxScope}${listGroupItem} + ${luxScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${luxScope}${listGroupFlush} > ${luxScope}${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${luxScope}${listGroupFlush} > ${luxScope}${listGroupItem}:last-child`, {
	borderBottomWidth: '0',
})

globalStyle(`${luxScope}${listGroupItemPrimary}`, {
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

globalStyle(`${luxScope}${listGroupItemSecondary}`, {
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

globalStyle(`${luxScope}${listGroupItemSuccess}`, {
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

globalStyle(`${luxScope}${listGroupItemInfo}`, {
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

globalStyle(`${luxScope}${listGroupItemWarning}`, {
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

globalStyle(`${luxScope}${listGroupItemDanger}`, {
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

globalStyle(`${luxScope}${listGroupItemLight}`, {
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

globalStyle(`${luxScope}${listGroupItemDark}`, {
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

globalStyle(`${luxScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
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
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${luxScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${luxScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${luxScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${luxScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${luxScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${luxScope}${toast}`, {
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
		[varBsToastHeaderColor]: varBsSecondaryColor,
		[varBsToastHeaderBg]: 'transparent',
		[varBsToastHeaderBorderColor]: varBsBorderColorTranslucent,
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
})

globalStyle(`${luxScope}${toast}${showing}`, {
	opacity: '0',
})

globalStyle(`${luxScope}${toast}:not(${show})`, {
	display: 'none',
})

globalStyle(`${luxScope}${toastContainer}`, {
	vars: {
		[varBsToastZindex]: '1090',
	},
	position: 'absolute',
	zIndex: varBsToastZindex,
	width: 'max-content',
	maxWidth: '100%',
	pointerEvents: 'none',
})

globalStyle(`${luxScope}${toastContainer} > :not(:last-child)`, {
	marginBottom: varBsToastSpacing,
})

globalStyle(`${luxScope}${toastHeader}`, {
	display: 'flex',
	alignItems: 'center',
	padding: `${varBsToastPaddingY} ${varBsToastPaddingX}`,
	color: varBsToastHeaderColor,
	backgroundColor: varBsToastHeaderBg,
	backgroundClip: 'padding-box',
	borderBottom: `${varBsToastBorderWidth} solid ${varBsToastHeaderBorderColor}`,
})

globalStyle(`${luxScope}${toastHeader} ${luxScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${luxScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})

globalStyle(`${luxScope}${modal}`, {
	vars: {
		[varBsModalZindex]: '1055',
		[varBsModalWidth]: '500px',
		[varBsModalPadding]: '1rem',
		[varBsModalMargin]: '0.5rem',
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: varBsBodyBg,
		[varBsModalBorderColor]: varBsBorderColorTranslucent,
		[varBsModalBorderWidth]: varBsBorderWidth,
		[varBsModalBorderRadius]: varBsBorderRadiusLg,
		[varBsModalBoxShadow]: varBsBoxShadowSm,
		[varBsModalInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - (${varBsBorderWidth}))`,
		[varBsModalHeaderPaddingX]: '1rem',
		[varBsModalHeaderPaddingY]: '1rem',
		[varBsModalHeaderPadding]: '1rem 1rem',
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

globalStyle(`${luxScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${luxScope}${modal}${fade} ${luxScope}${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${luxScope}${modal}${fade} ${luxScope}${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${modal}${show} ${luxScope}${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${luxScope}${modal}${modalStatic} ${luxScope}${modalDialog}`, {
	transform: 'scale(1.02)',
})

globalStyle(`${luxScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${luxScope}${modalDialogScrollable} ${luxScope}${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${luxScope}${modalDialogScrollable} ${luxScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${luxScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${luxScope}${modalContent}`, {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	color: varBsModalColor,
	pointerEvents: 'auto',
	backgroundColor: varBsModalBg,
	backgroundClip: 'padding-box',
	border: `${varBsModalBorderWidth} solid ${varBsModalBorderColor}`,
	outline: '0',
})

globalStyle(`${luxScope}${modalBackdrop}`, {
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

globalStyle(`${luxScope}${modalBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${luxScope}${modalBackdrop}${show}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${luxScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: '0',
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
})

globalStyle(`${luxScope}${modalHeader} ${luxScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${luxScope}${modalTitle}`, {
	marginBottom: '0',
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${luxScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${luxScope}${modalFooter}`, {
	display: 'flex',
	flexShrink: '0',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: `calc(${varBsModalPadding} - ${varBsModalFooterGap} * 0.5)`,
	backgroundColor: varBsModalFooterBg,
	borderTop: `${varBsModalFooterBorderWidth} solid ${varBsModalFooterBorderColor}`,
})

globalStyle(`${luxScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`${luxScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${luxScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${luxScope}${modalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalWidth]: '300px',
			},
		},
	},
})

globalStyle(`${luxScope}${modalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${luxScope}${modalXl}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${luxScope}${modalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsModalWidth]: '1140px',
			},
		},
	},
})

globalStyle(`${luxScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: '0',
})

globalStyle(`${luxScope}${modalFullscreen} ${luxScope}${modalContent}`, {
	height: '100%',
	border: '0',
})

globalStyle(`${luxScope}${modalFullscreen} ${luxScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${luxScope}${modalFullscreenSmDown}`, {
	'@media': {
		'(max-width: 575.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenSmDown} ${luxScope}${modalContent}`, {
	'@media': {
		'(max-width: 575.98px)': {
			height: '100%',
			border: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenSmDown} ${luxScope}${modalBody}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenMdDown}`, {
	'@media': {
		'(max-width: 767.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenMdDown} ${luxScope}${modalContent}`, {
	'@media': {
		'(max-width: 767.98px)': {
			height: '100%',
			border: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenMdDown} ${luxScope}${modalBody}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenLgDown}`, {
	'@media': {
		'(max-width: 991.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenLgDown} ${luxScope}${modalContent}`, {
	'@media': {
		'(max-width: 991.98px)': {
			height: '100%',
			border: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenLgDown} ${luxScope}${modalBody}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenXlDown}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenXlDown} ${luxScope}${modalContent}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			height: '100%',
			border: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenXlDown} ${luxScope}${modalBody}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenXxlDown}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenXxlDown} ${luxScope}${modalContent}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			height: '100%',
			border: '0',
		},
	},
})

globalStyle(`${luxScope}${modalFullscreenXxlDown} ${luxScope}${modalBody}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${luxScope}${tooltip}`, {
	vars: {
		[varBsTooltipZindex]: '1080',
		[varBsTooltipMaxWidth]: '200px',
		[varBsTooltipPaddingX]: '0.5rem',
		[varBsTooltipPaddingY]: '0.25rem',
		[varBsTooltipMargin]: '',
		[varBsTooltipFontSize]: '0.875rem',
		[varBsTooltipColor]: varBsBodyBg,
		[varBsTooltipBg]: varBsEmphasisColor,
		[varBsTooltipBorderRadius]: varBsBorderRadius,
		[varBsTooltipOpacity]: '0.9',
		[varBsTooltipArrowWidth]: '0.8rem',
		[varBsTooltipArrowHeight]: '0.4rem',
	},
	zIndex: varBsTooltipZindex,
	display: 'block',
	margin: varBsTooltipMargin,
	fontFamily: varBsFontSansSerif,
	fontStyle: 'normal',
	fontWeight: '300',
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

globalStyle(`${luxScope}${tooltip}${show}`, {
	opacity: varBsTooltipOpacity,
})

globalStyle(`${luxScope}${tooltip} ${luxScope}${tooltipArrow}`, {
	display: 'block',
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

globalStyle(`${luxScope}${tooltip} ${luxScope}${tooltipArrow}::before`, {
	position: 'absolute',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
})

globalStyle(`${luxScope}${bsTooltipTop} ${luxScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${luxScope}${bsTooltipAuto}[data-popper-placement^=top] ${luxScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${luxScope}${bsTooltipTop} ${luxScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${luxScope}${bsTooltipAuto}[data-popper-placement^=top] ${luxScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${luxScope}${bsTooltipEnd} ${luxScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${luxScope}${bsTooltipAuto}[data-popper-placement^=right] ${luxScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${luxScope}${bsTooltipEnd} ${luxScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${luxScope}${bsTooltipAuto}[data-popper-placement^=right] ${luxScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${luxScope}${bsTooltipBottom} ${luxScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${luxScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${luxScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${luxScope}${bsTooltipBottom} ${luxScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${luxScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${luxScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${luxScope}${bsTooltipStart} ${luxScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${luxScope}${bsTooltipAuto}[data-popper-placement^=left] ${luxScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${luxScope}${bsTooltipStart} ${luxScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${luxScope}${bsTooltipAuto}[data-popper-placement^=left] ${luxScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${luxScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: 'center',
	backgroundColor: varBsTooltipBg,
})

globalStyle(`${luxScope}${popover}`, {
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
		[varBsPopoverHeaderPaddingX]: '1rem',
		[varBsPopoverHeaderPaddingY]: '0.5rem',
		[varBsPopoverHeaderFontSize]: '1rem',
		[varBsPopoverHeaderColor]: varBsPopoverHeaderColor,
		[varBsPopoverHeaderBg]: 'transparent',
		[varBsPopoverBodyPaddingX]: '1rem',
		[varBsPopoverBodyPaddingY]: '1rem',
		[varBsPopoverBodyColor]: varBsBodyColor,
		[varBsPopoverArrowWidth]: '1rem',
		[varBsPopoverArrowHeight]: '0.5rem',
		[varBsPopoverArrowBorder]: varBsPopoverBorderColor,
	},
	zIndex: varBsPopoverZindex,
	display: 'block',
	maxWidth: varBsPopoverMaxWidth,
	fontFamily: varBsFontSansSerif,
	fontStyle: 'normal',
	fontWeight: '300',
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
})

globalStyle(`${luxScope}${popover} ${luxScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${luxScope}${popover} ${luxScope}${popoverArrow}::before`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${luxScope}${popover} ${luxScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${luxScope}${bsPopoverTop} > ${luxScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=top] > ${luxScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${luxScope}${bsPopoverTop} > ${luxScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=top] > ${luxScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${luxScope}${bsPopoverTop} > ${luxScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=top] > ${luxScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${luxScope}${bsPopoverTop} > ${luxScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=top] > ${luxScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${luxScope}${bsPopoverTop} > ${luxScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=top] > ${luxScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${luxScope}${bsPopoverEnd} > ${luxScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=right] > ${luxScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${luxScope}${bsPopoverEnd} > ${luxScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=right] > ${luxScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${luxScope}${bsPopoverEnd} > ${luxScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=right] > ${luxScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${luxScope}${bsPopoverEnd} > ${luxScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=right] > ${luxScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${luxScope}${bsPopoverEnd} > ${luxScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=right] > ${luxScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${luxScope}${bsPopoverBottom} > ${luxScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${luxScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${luxScope}${bsPopoverBottom} > ${luxScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${luxScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${luxScope}${bsPopoverBottom} > ${luxScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${luxScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${luxScope}${bsPopoverBottom} > ${luxScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${luxScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${luxScope}${bsPopoverBottom} > ${luxScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${luxScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${luxScope}${bsPopoverBottom} ${luxScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=bottom] ${luxScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${luxScope}${bsPopoverStart} > ${luxScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=left] > ${luxScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${luxScope}${bsPopoverStart} > ${luxScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=left] > ${luxScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${luxScope}${bsPopoverStart} > ${luxScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=left] > ${luxScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${luxScope}${bsPopoverStart} > ${luxScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=left] > ${luxScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${luxScope}${bsPopoverStart} > ${luxScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${luxScope}${bsPopoverAuto}[data-popper-placement^=left] > ${luxScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${luxScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
})

globalStyle(`${luxScope}${popoverHeader}:empty`, {
	display: 'none',
})

globalStyle(`${luxScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

globalStyle(`${luxScope}${carousel}`, {
	position: 'relative',
})

globalStyle(`${luxScope}${carousel}${pointerEvent}`, {
	touchAction: 'pan-y',
})

globalStyle(`${luxScope}${carouselInner}`, {
	position: 'relative',
	width: '100%',
	overflow: 'hidden',
})

globalStyle(`${luxScope}${carouselInner}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${luxScope}${carouselItem}`, {
	position: 'relative',
	display: 'none',
	float: 'left',
	width: '100%',
	marginRight: '-100%',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
	transition: 'transform 0.6s ease-in-out',
})

globalStyle(`${luxScope}${carouselItem}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${luxScope}${carouselItemNext}`, {
	display: 'block',
})

globalStyle(`${luxScope}${carouselItemPrev}`, {
	display: 'block',
})

globalStyle(`${luxScope}${carouselItemNext}:not(${carouselItemStart})`, {
	transform: 'translateX(100%)',
})

globalStyle(`${luxScope}${active}${carouselItemEnd}`, {
	transform: 'translateX(100%)',
})

globalStyle(`${luxScope}${carouselItemPrev}:not(${carouselItemEnd})`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${luxScope}${active}${carouselItemStart}`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${luxScope}${carouselFade} ${luxScope}${carouselItem}`, {
	opacity: '0',
	transitionProperty: 'opacity',
	transform: 'none',
})

globalStyle(`${luxScope}${carouselFade} ${luxScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${luxScope}${carouselFade} ${luxScope}${carouselItemNext}${carouselItemStart}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${luxScope}${carouselFade} ${luxScope}${carouselItemPrev}${carouselItemEnd}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${luxScope}${carouselFade} ${luxScope}${active}${carouselItemStart}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${luxScope}${carouselFade} ${luxScope}${active}${carouselItemEnd}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${luxScope}${carouselFade} ${luxScope}${active}${carouselItemStart}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${carouselFade} ${luxScope}${active}${carouselItemEnd}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${carouselControlPrev}`, {
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

globalStyle(`${luxScope}${carouselControlNext}`, {
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

globalStyle(`${luxScope}${carouselControlPrev}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${carouselControlNext}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${carouselControlPrev}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${luxScope}${carouselControlPrev}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${luxScope}${carouselControlNext}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${luxScope}${carouselControlNext}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${luxScope}${carouselControlPrev}`, {
	left: '0',
})

globalStyle(`${luxScope}${carouselControlNext}`, {
	right: '0',
})

globalStyle(`${luxScope}${carouselControlPrevIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${luxScope}${carouselControlNextIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${luxScope}${carouselControlPrevIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0\'/%3e%3c/svg%3e") ',
})

globalStyle(`${luxScope}${carouselControlNextIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e") ',
})

globalStyle(`${luxScope}${carouselIndicators}`, {
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

globalStyle(`${luxScope}${carouselIndicators} [data-bs-target]`, {
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

globalStyle(`${luxScope}${carouselIndicators} [data-bs-target]`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${carouselIndicators} ${luxScope}${active}`, {
	opacity: '1',
})

globalStyle(`${luxScope}${carouselCaption}`, {
	position: 'absolute',
	right: '15%',
	bottom: '1.25rem',
	left: '15%',
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	color: varBsCarouselCaptionColor,
	textAlign: 'center',
})

globalStyle(`${luxScope}${carouselDark}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
	},
})

globalStyle(`${luxScope}${spinnerGrow}`, {
	display: 'inline-block',
	flexShrink: '0',
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: '50%',
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
})

globalStyle(`${luxScope}${spinnerBorder}`, {
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

globalStyle(`${luxScope}${spinnerBorder}`, {
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

globalStyle(`${luxScope}${spinnerBorderSm}`, {
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

globalStyle(`${luxScope}${spinnerGrow}`, {
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

globalStyle(`${luxScope}${spinnerGrowSm}`, {
	vars: {
		[varBsSpinnerWidth]: '1rem',
		[varBsSpinnerHeight]: '1rem',
	},
})

globalStyle(`${luxScope}${spinnerBorder}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

globalStyle(`${luxScope}${spinnerGrow}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

globalStyle(`${luxScope}${offcanvas}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${luxScope}${offcanvasXxl}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${luxScope}${offcanvasXl}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${luxScope}${offcanvasLg}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${luxScope}${offcanvasMd}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${luxScope}${offcanvasSm}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: varBsBorderColorTranslucent,
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${luxScope}${offcanvasSm}`, {
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

globalStyle(`${luxScope}${offcanvasSm}`, {
	'@media': {
		'(max-width: 575.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasSm}${offcanvasStart}`, {
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

globalStyle(`${luxScope}${offcanvasSm}${offcanvasEnd}`, {
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

globalStyle(`${luxScope}${offcanvasSm}${offcanvasTop}`, {
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

globalStyle(`${luxScope}${offcanvasSm}${offcanvasBottom}`, {
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

globalStyle(`${luxScope}${offcanvasSm}${showing}`, {
	'@media': {
		'(max-width: 575.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasSm}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 575.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasSm}${showing}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasSm}${hiding}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasSm}`, {
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

globalStyle(`${luxScope}${offcanvasSm} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasSm} ${luxScope}${offcanvasBody}`, {
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

globalStyle(`${luxScope}${offcanvasMd}`, {
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

globalStyle(`${luxScope}${offcanvasMd}`, {
	'@media': {
		'(max-width: 767.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasMd}${offcanvasStart}`, {
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

globalStyle(`${luxScope}${offcanvasMd}${offcanvasEnd}`, {
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

globalStyle(`${luxScope}${offcanvasMd}${offcanvasTop}`, {
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

globalStyle(`${luxScope}${offcanvasMd}${offcanvasBottom}`, {
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

globalStyle(`${luxScope}${offcanvasMd}${showing}`, {
	'@media': {
		'(max-width: 767.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasMd}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 767.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasMd}${showing}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasMd}${hiding}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasMd}`, {
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

globalStyle(`${luxScope}${offcanvasMd} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasMd} ${luxScope}${offcanvasBody}`, {
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

globalStyle(`${luxScope}${offcanvasLg}`, {
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

globalStyle(`${luxScope}${offcanvasLg}`, {
	'@media': {
		'(max-width: 991.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasLg}${offcanvasStart}`, {
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

globalStyle(`${luxScope}${offcanvasLg}${offcanvasEnd}`, {
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

globalStyle(`${luxScope}${offcanvasLg}${offcanvasTop}`, {
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

globalStyle(`${luxScope}${offcanvasLg}${offcanvasBottom}`, {
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

globalStyle(`${luxScope}${offcanvasLg}${showing}`, {
	'@media': {
		'(max-width: 991.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasLg}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 991.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasLg}${showing}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasLg}${hiding}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasLg}`, {
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

globalStyle(`${luxScope}${offcanvasLg} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasLg} ${luxScope}${offcanvasBody}`, {
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

globalStyle(`${luxScope}${offcanvasXl}`, {
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

globalStyle(`${luxScope}${offcanvasXl}`, {
	'@media': {
		'(max-width: 1199.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXl}${offcanvasStart}`, {
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

globalStyle(`${luxScope}${offcanvasXl}${offcanvasEnd}`, {
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

globalStyle(`${luxScope}${offcanvasXl}${offcanvasTop}`, {
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

globalStyle(`${luxScope}${offcanvasXl}${offcanvasBottom}`, {
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

globalStyle(`${luxScope}${offcanvasXl}${showing}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXl}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 1199.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXl}${showing}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXl}${hiding}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXl}`, {
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

globalStyle(`${luxScope}${offcanvasXl} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXl} ${luxScope}${offcanvasBody}`, {
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

globalStyle(`${luxScope}${offcanvasXxl}`, {
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

globalStyle(`${luxScope}${offcanvasXxl}`, {
	'@media': {
		'(max-width: 1399.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXxl}${offcanvasStart}`, {
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

globalStyle(`${luxScope}${offcanvasXxl}${offcanvasEnd}`, {
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

globalStyle(`${luxScope}${offcanvasXxl}${offcanvasTop}`, {
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

globalStyle(`${luxScope}${offcanvasXxl}${offcanvasBottom}`, {
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

globalStyle(`${luxScope}${offcanvasXxl}${showing}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXxl}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 1399.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXxl}${showing}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXxl}${hiding}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXxl}`, {
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

globalStyle(`${luxScope}${offcanvasXxl} ${luxScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvasXxl} ${luxScope}${offcanvasBody}`, {
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

globalStyle(`${luxScope}${offcanvas}`, {
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

globalStyle(`${luxScope}${offcanvas}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${offcanvas}${offcanvasStart}`, {
	top: '0',
	left: '0',
	width: varBsOffcanvasWidth,
	borderRight: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateX(-100%)',
})

globalStyle(`${luxScope}${offcanvas}${offcanvasEnd}`, {
	top: '0',
	right: '0',
	width: varBsOffcanvasWidth,
	borderLeft: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateX(100%)',
})

globalStyle(`${luxScope}${offcanvas}${offcanvasTop}`, {
	top: '0',
	right: '0',
	left: '0',
	height: varBsOffcanvasHeight,
	maxHeight: '100%',
	borderBottom: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateY(-100%)',
})

globalStyle(`${luxScope}${offcanvas}${offcanvasBottom}`, {
	right: '0',
	left: '0',
	height: varBsOffcanvasHeight,
	maxHeight: '100%',
	borderTop: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateY(100%)',
})

globalStyle(`${luxScope}${offcanvas}${showing}`, {
	transform: 'none',
})

globalStyle(`${luxScope}${offcanvas}${show}:not(${hiding})`, {
	transform: 'none',
})

globalStyle(`${luxScope}${offcanvas}${showing}`, {
	visibility: 'visible',
})

globalStyle(`${luxScope}${offcanvas}${hiding}`, {
	visibility: 'visible',
})

globalStyle(`${luxScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${luxScope}${offcanvasBackdrop}`, {
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: '1040',
	width: '100vw',
	height: '100vh',
	backgroundColor: '#000',
})

globalStyle(`${luxScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${luxScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})

globalStyle(`${luxScope}${offcanvasHeader}`, {
	display: 'flex',
	alignItems: 'center',
	padding: `${varBsOffcanvasPaddingY} ${varBsOffcanvasPaddingX}`,
})

globalStyle(`${luxScope}${offcanvasHeader} ${luxScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${luxScope}${offcanvasTitle}`, {
	marginBottom: '0',
	lineHeight: varBsOffcanvasTitleLineHeight,
})

globalStyle(`${luxScope}${offcanvasBody}`, {
	flexGrow: '1',
	padding: `${varBsOffcanvasPaddingY} ${varBsOffcanvasPaddingX}`,
	overflowY: 'auto',
})

globalStyle(`${luxScope}${placeholder}`, {
	display: 'inline-block',
	minHeight: '1em',
	verticalAlign: 'middle',
	cursor: 'wait',
	backgroundColor: 'currentcolor',
	opacity: '0.5',
})

globalStyle(`${luxScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${luxScope}${placeholderXs}`, {
	minHeight: '0.6em',
})

globalStyle(`${luxScope}${placeholderSm}`, {
	minHeight: '0.8em',
})

globalStyle(`${luxScope}${placeholderLg}`, {
	minHeight: '1.2em',
})

globalStyle(`${luxScope}${placeholderGlow} ${luxScope}${placeholder}`, {
	animation: 'placeholder-glow 2s ease-in-out infinite',
})

globalKeyframes('placeholder-glow', {
	'50%': {
		opacity: '0.2',
	},
})

globalStyle(`${luxScope}${placeholderWave}`, {
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

globalStyle(`${luxScope}${clearfix}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${luxScope}${textBgPrimary}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${textBgSecondary}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${textBgSuccess}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${textBgInfo}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${textBgWarning}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${textBgDanger}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${textBgLight}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${textBgDark}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${linkPrimary}`, {
	color: `RGBA(${varBsPrimaryRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkPrimary}:hover`, {
	color: `RGBA(21, 21, 21, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(21, 21, 21, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(21, 21, 21, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkPrimary}:focus`, {
	color: `RGBA(21, 21, 21, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(21, 21, 21, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(21, 21, 21, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkSecondary}`, {
	color: `RGBA(${varBsSecondaryRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkSecondary}:hover`, {
	color: `RGBA(255, 255, 255, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkSecondary}:focus`, {
	color: `RGBA(255, 255, 255, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkSuccess}`, {
	color: `RGBA(${varBsSuccessRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkSuccess}:hover`, {
	color: `RGBA(60, 153, 92, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(60, 153, 92, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(60, 153, 92, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkSuccess}:focus`, {
	color: `RGBA(60, 153, 92, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(60, 153, 92, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(60, 153, 92, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkInfo}`, {
	color: `RGBA(${varBsInfoRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkInfo}:hover`, {
	color: `RGBA(25, 124, 166, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(25, 124, 166, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(25, 124, 166, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkInfo}:focus`, {
	color: `RGBA(25, 124, 166, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(25, 124, 166, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(25, 124, 166, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkWarning}`, {
	color: `RGBA(${varBsWarningRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkWarning}:hover`, {
	color: `RGBA(192, 138, 62, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(192, 138, 62, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(192, 138, 62, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkWarning}:focus`, {
	color: `RGBA(192, 138, 62, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(192, 138, 62, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(192, 138, 62, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkDanger}`, {
	color: `RGBA(${varBsDangerRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkDanger}:hover`, {
	color: `RGBA(174, 66, 63, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(174, 66, 63, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(174, 66, 63, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkDanger}:focus`, {
	color: `RGBA(174, 66, 63, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(174, 66, 63, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(174, 66, 63, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkLight}`, {
	color: `RGBA(${varBsLightRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkLight}:hover`, {
	color: `RGBA(243, 244, 245, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(243, 244, 245, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(243, 244, 245, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkLight}:focus`, {
	color: `RGBA(243, 244, 245, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(243, 244, 245, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(243, 244, 245, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkDark}`, {
	color: `RGBA(${varBsDarkRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkDark}:hover`, {
	color: `RGBA(42, 46, 51, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(42, 46, 51, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(42, 46, 51, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkDark}:focus`, {
	color: `RGBA(42, 46, 51, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(42, 46, 51, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(42, 46, 51, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkBodyEmphasis}`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkBodyEmphasis}:hover`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkBodyEmphasis}:focus`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${focusRing}:focus`, {
	outline: '0',
	boxShadow: `var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) ${varBsFocusRingWidth} ${varBsFocusRingColor}`,
})

globalStyle(`${luxScope}${iconLink}`, {
	display: 'inline-flex',
	gap: '0.375rem',
	alignItems: 'center',
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${varBsLinkOpacity})`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${varBsLinkOpacity})`,
	textUnderlineOffset: '0.25em',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
})

globalStyle(`${luxScope}${iconLink} > ${luxScope}${bi}`, {
	flexShrink: '0',
	width: '1em',
	height: '1em',
	fill: 'currentcolor',
	transition: '0.2s ease-in-out transform',
})

globalStyle(`${luxScope}${iconLink} > ${luxScope}${bi}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${iconLinkHover}:hover > ${luxScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${luxScope}${iconLinkHover}:focus-visible > ${luxScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${luxScope}${ratio}`, {
	position: 'relative',
	width: '100%',
})

globalStyle(`${luxScope}${ratio}::before`, {
	display: 'block',
	paddingTop: varBsAspectRatio,
	content: '""',
})

globalStyle(`${luxScope}${ratio} > *`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
})

globalStyle(`${luxScope}${ratio1x1}`, {
	vars: {
		[varBsAspectRatio]: '100%',
	},
})

globalStyle(`${luxScope}${ratio4x3}`, {
	vars: {
		[varBsAspectRatio]: '75%',
	},
})

globalStyle(`${luxScope}${ratio16x9}`, {
	vars: {
		[varBsAspectRatio]: '56.25%',
	},
})

globalStyle(`${luxScope}${ratio21x9}`, {
	vars: {
		[varBsAspectRatio]: '42.8571428571%',
	},
})

globalStyle(`${luxScope}${fixedTop}`, {
	position: 'fixed',
	top: '0',
	right: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${luxScope}${fixedBottom}`, {
	position: 'fixed',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${luxScope}${stickyTop}`, {
	position: 'sticky',
	top: '0',
	zIndex: '1020',
})

globalStyle(`${luxScope}${stickyBottom}`, {
	position: 'sticky',
	bottom: '0',
	zIndex: '1020',
})

globalStyle(`${luxScope}${stickySmTop}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickySmBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyMdTop}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyMdBottom}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyLgTop}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyLgBottom}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyXlBottom}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyXxlTop}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyXxlBottom}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${hstack}`, {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	alignSelf: 'stretch',
})

globalStyle(`${luxScope}${vstack}`, {
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	alignSelf: 'stretch',
})

globalStyle(`${luxScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${luxScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within)`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${luxScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${luxScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within):not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${luxScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${luxScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within) *`, {
	overflow: 'hidden !important',
})

globalStyle(`${luxScope}${stretchedLink}::after`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1',
	content: '""',
})

globalStyle(`${luxScope}${textTruncate}`, {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

globalStyle(`${luxScope}${vr}`, {
	display: 'inline-block',
	alignSelf: 'stretch',
	width: varBsBorderWidth,
	minHeight: '1em',
	backgroundColor: 'currentcolor',
	opacity: '0.25',
})

globalStyle(`${luxScope}${alignBaseline}`, {
	verticalAlign: 'baseline !important',
})

globalStyle(`${luxScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${luxScope}${alignMiddle}`, {
	verticalAlign: 'middle !important',
})

globalStyle(`${luxScope}${alignBottom}`, {
	verticalAlign: 'bottom !important',
})

globalStyle(`${luxScope}${alignTextBottom}`, {
	verticalAlign: 'text-bottom !important',
})

globalStyle(`${luxScope}${alignTextTop}`, {
	verticalAlign: 'text-top !important',
})

globalStyle(`${luxScope}${floatStart}`, {
	float: 'left !important',
})

globalStyle(`${luxScope}${floatEnd}`, {
	float: 'right !important',
})

globalStyle(`${luxScope}${floatNone}`, {
	float: 'none !important',
})

globalStyle(`${luxScope}${objectFitContain}`, {
	OObjectFit: 'contain !important',
	objectFit: 'contain !important',
})

globalStyle(`${luxScope}${objectFitCover}`, {
	OObjectFit: 'cover !important',
	objectFit: 'cover !important',
})

globalStyle(`${luxScope}${objectFitFill}`, {
	OObjectFit: 'fill !important',
	objectFit: 'fill !important',
})

globalStyle(`${luxScope}${objectFitScale}`, {
	OObjectFit: 'scale-down !important',
	objectFit: 'scale-down !important',
})

globalStyle(`${luxScope}${objectFitNone}`, {
	OObjectFit: 'none !important',
	objectFit: 'none !important',
})

globalStyle(`${luxScope}${opacity0}`, {
	opacity: '0 !important',
})

globalStyle(`${luxScope}${opacity25}`, {
	opacity: '0.25 !important',
})

globalStyle(`${luxScope}${opacity50}`, {
	opacity: '0.5 !important',
})

globalStyle(`${luxScope}${opacity75}`, {
	opacity: '0.75 !important',
})

globalStyle(`${luxScope}${opacity100}`, {
	opacity: '1 !important',
})

globalStyle(`${luxScope}${overflowAuto}`, {
	overflow: 'auto !important',
})

globalStyle(`${luxScope}${overflowHidden}`, {
	overflow: 'hidden !important',
})

globalStyle(`${luxScope}${overflowVisible}`, {
	overflow: 'visible !important',
})

globalStyle(`${luxScope}${overflowScroll}`, {
	overflow: 'scroll !important',
})

globalStyle(`${luxScope}${overflowXAuto}`, {
	overflowX: 'auto !important',
})

globalStyle(`${luxScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${luxScope}${overflowXVisible}`, {
	overflowX: 'visible !important',
})

globalStyle(`${luxScope}${overflowXScroll}`, {
	overflowX: 'scroll !important',
})

globalStyle(`${luxScope}${overflowYAuto}`, {
	overflowY: 'auto !important',
})

globalStyle(`${luxScope}${overflowYHidden}`, {
	overflowY: 'hidden !important',
})

globalStyle(`${luxScope}${overflowYVisible}`, {
	overflowY: 'visible !important',
})

globalStyle(`${luxScope}${overflowYScroll}`, {
	overflowY: 'scroll !important',
})

globalStyle(`${luxScope}${dInline}`, {
	display: 'inline !important',
})

globalStyle(`${luxScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${luxScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${luxScope}${dGrid}`, {
	display: 'grid !important',
})

globalStyle(`${luxScope}${dInlineGrid}`, {
	display: 'inline-grid !important',
})

globalStyle(`${luxScope}${dTable}`, {
	display: 'table !important',
})

globalStyle(`${luxScope}${dTableRow}`, {
	display: 'table-row !important',
})

globalStyle(`${luxScope}${dTableCell}`, {
	display: 'table-cell !important',
})

globalStyle(`${luxScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${luxScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${luxScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${luxScope}${shadow}`, {
	boxShadow: `${varBsBoxShadow} !important`,
})

globalStyle(`${luxScope}${shadowSm}`, {
	boxShadow: `${varBsBoxShadowSm} !important`,
})

globalStyle(`${luxScope}${shadowLg}`, {
	boxShadow: `${varBsBoxShadowLg} !important`,
})

globalStyle(`${luxScope}${shadowNone}`, {
	boxShadow: 'none !important',
})

globalStyle(`${luxScope}${focusRingPrimary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsPrimaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingSecondary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSecondaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingSuccess}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSuccessRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingInfo}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsInfoRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingWarning}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsWarningRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingDanger}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDangerRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingLight}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsLightRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingDark}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDarkRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${positionStatic}`, {
	position: 'static !important',
})

globalStyle(`${luxScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${luxScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${luxScope}${positionFixed}`, {
	position: 'fixed !important',
})

globalStyle(`${luxScope}${positionSticky}`, {
	position: 'sticky !important',
})

globalStyle(`${luxScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${luxScope}${top50}`, {
	top: '50% !important',
})

globalStyle(`${luxScope}${top100}`, {
	top: '100% !important',
})

globalStyle(`${luxScope}${bottom0}`, {
	bottom: '0 !important',
})

globalStyle(`${luxScope}${bottom50}`, {
	bottom: '50% !important',
})

globalStyle(`${luxScope}${bottom100}`, {
	bottom: '100% !important',
})

globalStyle(`${luxScope}${start0}`, {
	left: '0 !important',
})

globalStyle(`${luxScope}${start50}`, {
	left: '50% !important',
})

globalStyle(`${luxScope}${start100}`, {
	left: '100% !important',
})

globalStyle(`${luxScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${luxScope}${end50}`, {
	right: '50% !important',
})

globalStyle(`${luxScope}${end100}`, {
	right: '100% !important',
})

globalStyle(`${luxScope}${translateMiddle}`, {
	transform: 'translate(-50%, -50%) !important',
})

globalStyle(`${luxScope}${translateMiddleX}`, {
	transform: 'translateX(-50%) !important',
})

globalStyle(`${luxScope}${translateMiddleY}`, {
	transform: 'translateY(-50%) !important',
})

globalStyle(`${luxScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${border0}`, {
	border: '0 !important',
})

globalStyle(`${luxScope}${borderTop}`, {
	borderTop: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${borderTop0}`, {
	borderTop: '0 !important',
})

globalStyle(`${luxScope}${borderEnd}`, {
	borderRight: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${borderEnd0}`, {
	borderRight: '0 !important',
})

globalStyle(`${luxScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${borderBottom0}`, {
	borderBottom: '0 !important',
})

globalStyle(`${luxScope}${borderStart}`, {
	borderLeft: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${borderStart0}`, {
	borderLeft: '0 !important',
})

globalStyle(`${luxScope}${borderPrimary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsPrimaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderSecondary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSecondaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderSuccess}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSuccessRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderInfo}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsInfoRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderWarning}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWarningRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderDanger}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDangerRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderLight}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsLightRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderBlack}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsBlackRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderWhite}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWhiteRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderPrimarySubtle}`, {
	borderColor: `${varBsPrimaryBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderSecondarySubtle}`, {
	borderColor: `${varBsSecondaryBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderSuccessSubtle}`, {
	borderColor: `${varBsSuccessBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderInfoSubtle}`, {
	borderColor: `${varBsInfoBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderWarningSubtle}`, {
	borderColor: `${varBsWarningBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderDangerSubtle}`, {
	borderColor: `${varBsDangerBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderLightSubtle}`, {
	borderColor: `${varBsLightBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderDarkSubtle}`, {
	borderColor: `${varBsDarkBorderSubtle} !important`,
})

globalStyle(`${luxScope}${border1}`, {
	borderWidth: '1px !important',
})

globalStyle(`${luxScope}${border2}`, {
	borderWidth: '2px !important',
})

globalStyle(`${luxScope}${border3}`, {
	borderWidth: '3px !important',
})

globalStyle(`${luxScope}${border4}`, {
	borderWidth: '4px !important',
})

globalStyle(`${luxScope}${border5}`, {
	borderWidth: '5px !important',
})

globalStyle(`${luxScope}${borderOpacity10}`, {
	vars: {
		[varBsBorderOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${borderOpacity25}`, {
	vars: {
		[varBsBorderOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${borderOpacity50}`, {
	vars: {
		[varBsBorderOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${borderOpacity75}`, {
	vars: {
		[varBsBorderOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${borderOpacity100}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
})

globalStyle(`${luxScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${luxScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${luxScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${luxScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${luxScope}${wAuto}`, {
	width: 'auto !important',
})

globalStyle(`${luxScope}${mw100}`, {
	maxWidth: '100% !important',
})

globalStyle(`${luxScope}${vw100}`, {
	width: '100vw !important',
})

globalStyle(`${luxScope}${minVw100}`, {
	minWidth: '100vw !important',
})

globalStyle(`${luxScope}${h25}`, {
	height: '25% !important',
})

globalStyle(`${luxScope}${h50}`, {
	height: '50% !important',
})

globalStyle(`${luxScope}${h75}`, {
	height: '75% !important',
})

globalStyle(`${luxScope}${h100}`, {
	height: '100% !important',
})

globalStyle(`${luxScope}${hAuto}`, {
	height: 'auto !important',
})

globalStyle(`${luxScope}${mh100}`, {
	maxHeight: '100% !important',
})

globalStyle(`${luxScope}${vh100}`, {
	height: '100vh !important',
})

globalStyle(`${luxScope}${minVh100}`, {
	minHeight: '100vh !important',
})

globalStyle(`${luxScope}${flexFill}`, {
	flex: '1 1 auto !important',
})

globalStyle(`${luxScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${luxScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${luxScope}${flexRowReverse}`, {
	flexDirection: 'row-reverse !important',
})

globalStyle(`${luxScope}${flexColumnReverse}`, {
	flexDirection: 'column-reverse !important',
})

globalStyle(`${luxScope}${flexGrow0}`, {
	flexGrow: '0 !important',
})

globalStyle(`${luxScope}${flexGrow1}`, {
	flexGrow: '1 !important',
})

globalStyle(`${luxScope}${flexShrink0}`, {
	flexShrink: '0 !important',
})

globalStyle(`${luxScope}${flexShrink1}`, {
	flexShrink: '1 !important',
})

globalStyle(`${luxScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${luxScope}${flexNowrap}`, {
	flexWrap: 'nowrap !important',
})

globalStyle(`${luxScope}${flexWrapReverse}`, {
	flexWrap: 'wrap-reverse !important',
})

globalStyle(`${luxScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${luxScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${luxScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${luxScope}${justifyContentBetween}`, {
	justifyContent: 'space-between !important',
})

globalStyle(`${luxScope}${justifyContentAround}`, {
	justifyContent: 'space-around !important',
})

globalStyle(`${luxScope}${justifyContentEvenly}`, {
	justifyContent: 'space-evenly !important',
})

globalStyle(`${luxScope}${alignItemsStart}`, {
	alignItems: 'flex-start !important',
})

globalStyle(`${luxScope}${alignItemsEnd}`, {
	alignItems: 'flex-end !important',
})

globalStyle(`${luxScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${luxScope}${alignItemsBaseline}`, {
	alignItems: 'baseline !important',
})

globalStyle(`${luxScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${luxScope}${alignContentStart}`, {
	alignContent: 'flex-start !important',
})

globalStyle(`${luxScope}${alignContentEnd}`, {
	alignContent: 'flex-end !important',
})

globalStyle(`${luxScope}${alignContentCenter}`, {
	alignContent: 'center !important',
})

globalStyle(`${luxScope}${alignContentBetween}`, {
	alignContent: 'space-between !important',
})

globalStyle(`${luxScope}${alignContentAround}`, {
	alignContent: 'space-around !important',
})

globalStyle(`${luxScope}${alignContentStretch}`, {
	alignContent: 'stretch !important',
})

globalStyle(`${luxScope}${alignSelfAuto}`, {
	alignSelf: 'auto !important',
})

globalStyle(`${luxScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${luxScope}${alignSelfEnd}`, {
	alignSelf: 'flex-end !important',
})

globalStyle(`${luxScope}${alignSelfCenter}`, {
	alignSelf: 'center !important',
})

globalStyle(`${luxScope}${alignSelfBaseline}`, {
	alignSelf: 'baseline !important',
})

globalStyle(`${luxScope}${alignSelfStretch}`, {
	alignSelf: 'stretch !important',
})

globalStyle(`${luxScope}${orderFirst}`, {
	order: '-1 !important',
})

globalStyle(`${luxScope}${order0}`, {
	order: '0 !important',
})

globalStyle(`${luxScope}${order1}`, {
	order: '1 !important',
})

globalStyle(`${luxScope}${order2}`, {
	order: '2 !important',
})

globalStyle(`${luxScope}${order3}`, {
	order: '3 !important',
})

globalStyle(`${luxScope}${order4}`, {
	order: '4 !important',
})

globalStyle(`${luxScope}${order5}`, {
	order: '5 !important',
})

globalStyle(`${luxScope}${orderLast}`, {
	order: '6 !important',
})

globalStyle(`${luxScope}${m0}`, {
	margin: '0 !important',
})

globalStyle(`${luxScope}${m1}`, {
	margin: '0.25rem !important',
})

globalStyle(`${luxScope}${m2}`, {
	margin: '0.5rem !important',
})

globalStyle(`${luxScope}${m3}`, {
	margin: '1rem !important',
})

globalStyle(`${luxScope}${m4}`, {
	margin: '1.5rem !important',
})

globalStyle(`${luxScope}${m5}`, {
	margin: '3rem !important',
})

globalStyle(`${luxScope}${mAuto}`, {
	margin: 'auto !important',
})

globalStyle(`${luxScope}${mx0}`, {
	marginRight: '0 !important',
	marginLeft: '0 !important',
})

globalStyle(`${luxScope}${mx1}`, {
	marginRight: '0.25rem !important',
	marginLeft: '0.25rem !important',
})

globalStyle(`${luxScope}${mx2}`, {
	marginRight: '0.5rem !important',
	marginLeft: '0.5rem !important',
})

globalStyle(`${luxScope}${mx3}`, {
	marginRight: '1rem !important',
	marginLeft: '1rem !important',
})

globalStyle(`${luxScope}${mx4}`, {
	marginRight: '1.5rem !important',
	marginLeft: '1.5rem !important',
})

globalStyle(`${luxScope}${mx5}`, {
	marginRight: '3rem !important',
	marginLeft: '3rem !important',
})

globalStyle(`${luxScope}${mxAuto}`, {
	marginRight: 'auto !important',
	marginLeft: 'auto !important',
})

globalStyle(`${luxScope}${my0}`, {
	marginTop: '0 !important',
	marginBottom: '0 !important',
})

globalStyle(`${luxScope}${my1}`, {
	marginTop: '0.25rem !important',
	marginBottom: '0.25rem !important',
})

globalStyle(`${luxScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${luxScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${luxScope}${my4}`, {
	marginTop: '1.5rem !important',
	marginBottom: '1.5rem !important',
})

globalStyle(`${luxScope}${my5}`, {
	marginTop: '3rem !important',
	marginBottom: '3rem !important',
})

globalStyle(`${luxScope}${myAuto}`, {
	marginTop: 'auto !important',
	marginBottom: 'auto !important',
})

globalStyle(`${luxScope}${mt0}`, {
	marginTop: '0 !important',
})

globalStyle(`${luxScope}${mt1}`, {
	marginTop: '0.25rem !important',
})

globalStyle(`${luxScope}${mt2}`, {
	marginTop: '0.5rem !important',
})

globalStyle(`${luxScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${luxScope}${mt4}`, {
	marginTop: '1.5rem !important',
})

globalStyle(`${luxScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${luxScope}${mtAuto}`, {
	marginTop: 'auto !important',
})

globalStyle(`${luxScope}${me0}`, {
	marginRight: '0 !important',
})

globalStyle(`${luxScope}${me1}`, {
	marginRight: '0.25rem !important',
})

globalStyle(`${luxScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${luxScope}${me3}`, {
	marginRight: '1rem !important',
})

globalStyle(`${luxScope}${me4}`, {
	marginRight: '1.5rem !important',
})

globalStyle(`${luxScope}${me5}`, {
	marginRight: '3rem !important',
})

globalStyle(`${luxScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${luxScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${luxScope}${mb1}`, {
	marginBottom: '0.25rem !important',
})

globalStyle(`${luxScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${luxScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${luxScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${luxScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${luxScope}${mbAuto}`, {
	marginBottom: 'auto !important',
})

globalStyle(`${luxScope}${ms0}`, {
	marginLeft: '0 !important',
})

globalStyle(`${luxScope}${ms1}`, {
	marginLeft: '0.25rem !important',
})

globalStyle(`${luxScope}${ms2}`, {
	marginLeft: '0.5rem !important',
})

globalStyle(`${luxScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${luxScope}${ms4}`, {
	marginLeft: '1.5rem !important',
})

globalStyle(`${luxScope}${ms5}`, {
	marginLeft: '3rem !important',
})

globalStyle(`${luxScope}${msAuto}`, {
	marginLeft: 'auto !important',
})

globalStyle(`${luxScope}${p0}`, {
	padding: '0 !important',
})

globalStyle(`${luxScope}${p1}`, {
	padding: '0.25rem !important',
})

globalStyle(`${luxScope}${p2}`, {
	padding: '0.5rem !important',
})

globalStyle(`${luxScope}${p3}`, {
	padding: '1rem !important',
})

globalStyle(`${luxScope}${p4}`, {
	padding: '1.5rem !important',
})

globalStyle(`${luxScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${luxScope}${px0}`, {
	paddingRight: '0 !important',
	paddingLeft: '0 !important',
})

globalStyle(`${luxScope}${px1}`, {
	paddingRight: '0.25rem !important',
	paddingLeft: '0.25rem !important',
})

globalStyle(`${luxScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${luxScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${luxScope}${px4}`, {
	paddingRight: '1.5rem !important',
	paddingLeft: '1.5rem !important',
})

globalStyle(`${luxScope}${px5}`, {
	paddingRight: '3rem !important',
	paddingLeft: '3rem !important',
})

globalStyle(`${luxScope}${py0}`, {
	paddingTop: '0 !important',
	paddingBottom: '0 !important',
})

globalStyle(`${luxScope}${py1}`, {
	paddingTop: '0.25rem !important',
	paddingBottom: '0.25rem !important',
})

globalStyle(`${luxScope}${py2}`, {
	paddingTop: '0.5rem !important',
	paddingBottom: '0.5rem !important',
})

globalStyle(`${luxScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${luxScope}${py4}`, {
	paddingTop: '1.5rem !important',
	paddingBottom: '1.5rem !important',
})

globalStyle(`${luxScope}${py5}`, {
	paddingTop: '3rem !important',
	paddingBottom: '3rem !important',
})

globalStyle(`${luxScope}${pt0}`, {
	paddingTop: '0 !important',
})

globalStyle(`${luxScope}${pt1}`, {
	paddingTop: '0.25rem !important',
})

globalStyle(`${luxScope}${pt2}`, {
	paddingTop: '0.5rem !important',
})

globalStyle(`${luxScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${luxScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${luxScope}${pt5}`, {
	paddingTop: '3rem !important',
})

globalStyle(`${luxScope}${pe0}`, {
	paddingRight: '0 !important',
})

globalStyle(`${luxScope}${pe1}`, {
	paddingRight: '0.25rem !important',
})

globalStyle(`${luxScope}${pe2}`, {
	paddingRight: '0.5rem !important',
})

globalStyle(`${luxScope}${pe3}`, {
	paddingRight: '1rem !important',
})

globalStyle(`${luxScope}${pe4}`, {
	paddingRight: '1.5rem !important',
})

globalStyle(`${luxScope}${pe5}`, {
	paddingRight: '3rem !important',
})

globalStyle(`${luxScope}${pb0}`, {
	paddingBottom: '0 !important',
})

globalStyle(`${luxScope}${pb1}`, {
	paddingBottom: '0.25rem !important',
})

globalStyle(`${luxScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${luxScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${luxScope}${pb4}`, {
	paddingBottom: '1.5rem !important',
})

globalStyle(`${luxScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${luxScope}${ps0}`, {
	paddingLeft: '0 !important',
})

globalStyle(`${luxScope}${ps1}`, {
	paddingLeft: '0.25rem !important',
})

globalStyle(`${luxScope}${ps2}`, {
	paddingLeft: '0.5rem !important',
})

globalStyle(`${luxScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${luxScope}${ps4}`, {
	paddingLeft: '1.5rem !important',
})

globalStyle(`${luxScope}${ps5}`, {
	paddingLeft: '3rem !important',
})

globalStyle(`${luxScope}${gap0}`, {
	gap: '0 !important',
})

globalStyle(`${luxScope}${gap1}`, {
	gap: '0.25rem !important',
})

globalStyle(`${luxScope}${gap2}`, {
	gap: '0.5rem !important',
})

globalStyle(`${luxScope}${gap3}`, {
	gap: '1rem !important',
})

globalStyle(`${luxScope}${gap4}`, {
	gap: '1.5rem !important',
})

globalStyle(`${luxScope}${gap5}`, {
	gap: '3rem !important',
})

globalStyle(`${luxScope}${rowGap0}`, {
	rowGap: '0 !important',
})

globalStyle(`${luxScope}${rowGap1}`, {
	rowGap: '0.25rem !important',
})

globalStyle(`${luxScope}${rowGap2}`, {
	rowGap: '0.5rem !important',
})

globalStyle(`${luxScope}${rowGap3}`, {
	rowGap: '1rem !important',
})

globalStyle(`${luxScope}${rowGap4}`, {
	rowGap: '1.5rem !important',
})

globalStyle(`${luxScope}${rowGap5}`, {
	rowGap: '3rem !important',
})

globalStyle(`${luxScope}${columnGap0}`, {
	MozColumnGap: '0 !important',
	columnGap: '0 !important',
})

globalStyle(`${luxScope}${columnGap1}`, {
	MozColumnGap: '0.25rem !important',
	columnGap: '0.25rem !important',
})

globalStyle(`${luxScope}${columnGap2}`, {
	MozColumnGap: '0.5rem !important',
	columnGap: '0.5rem !important',
})

globalStyle(`${luxScope}${columnGap3}`, {
	MozColumnGap: '1rem !important',
	columnGap: '1rem !important',
})

globalStyle(`${luxScope}${columnGap4}`, {
	MozColumnGap: '1.5rem !important',
	columnGap: '1.5rem !important',
})

globalStyle(`${luxScope}${columnGap5}`, {
	MozColumnGap: '3rem !important',
	columnGap: '3rem !important',
})

globalStyle(`${luxScope}${fontMonospace}`, {
	fontFamily: `${varBsFontMonospace} !important`,
})

globalStyle(`${luxScope}${fs1}`, {
	fontSize: 'calc(1.325rem + 0.9vw) !important',
})

globalStyle(`${luxScope}${fs2}`, {
	fontSize: 'calc(1.3rem + 0.6vw) !important',
})

globalStyle(`${luxScope}${fs3}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${luxScope}${fs4}`, {
	fontSize: '1.25rem !important',
})

globalStyle(`${luxScope}${fs5}`, {
	fontSize: '1rem !important',
})

globalStyle(`${luxScope}${fs6}`, {
	fontSize: '0.75rem !important',
})

globalStyle(`${luxScope}${fstItalic}`, {
	fontStyle: 'italic !important',
})

globalStyle(`${luxScope}${fstNormal}`, {
	fontStyle: 'normal !important',
})

globalStyle(`${luxScope}${fwLighter}`, {
	fontWeight: 'lighter !important',
})

globalStyle(`${luxScope}${fwLight}`, {
	fontWeight: '200 !important',
})

globalStyle(`${luxScope}${fwNormal}`, {
	fontWeight: '300 !important',
})

globalStyle(`${luxScope}${fwMedium}`, {
	fontWeight: '400 !important',
})

globalStyle(`${luxScope}${fwSemibold}`, {
	fontWeight: '500 !important',
})

globalStyle(`${luxScope}${fwBold}`, {
	fontWeight: '600 !important',
})

globalStyle(`${luxScope}${fwBolder}`, {
	fontWeight: 'bolder !important',
})

globalStyle(`${luxScope}${lh1}`, {
	lineHeight: '1 !important',
})

globalStyle(`${luxScope}${lhSm}`, {
	lineHeight: '1.25 !important',
})

globalStyle(`${luxScope}${lhBase}`, {
	lineHeight: '1.5 !important',
})

globalStyle(`${luxScope}${lhLg}`, {
	lineHeight: '2 !important',
})

globalStyle(`${luxScope}${textStart}`, {
	textAlign: 'left !important',
})

globalStyle(`${luxScope}${textEnd}`, {
	textAlign: 'right !important',
})

globalStyle(`${luxScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${luxScope}${textDecorationNone}`, {
	textDecoration: 'none !important',
})

globalStyle(`${luxScope}${textDecorationUnderline}`, {
	textDecoration: 'underline !important',
})

globalStyle(`${luxScope}${textDecorationLineThrough}`, {
	textDecoration: 'line-through !important',
})

globalStyle(`${luxScope}${textLowercase}`, {
	textTransform: 'lowercase !important',
})

globalStyle(`${luxScope}${textUppercase}`, {
	textTransform: 'uppercase !important',
})

globalStyle(`${luxScope}${textCapitalize}`, {
	textTransform: 'capitalize !important',
})

globalStyle(`${luxScope}${textWrap}`, {
	whiteSpace: 'normal !important',
})

globalStyle(`${luxScope}${textNowrap}`, {
	whiteSpace: 'nowrap !important',
})

globalStyle(`${luxScope}${textBreak}`, {
	wordWrap: 'break-word !important',
	wordBreak: 'break-word !important',
})

globalStyle(`${luxScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textBlack}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBlackRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textBody}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBodyColorRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${luxScope}${textBlack50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(0, 0, 0, 0.5) !important',
})

globalStyle(`${luxScope}${textWhite50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(255, 255, 255, 0.5) !important',
})

globalStyle(`${luxScope}${textBodySecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${luxScope}${textBodyTertiary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsTertiaryColor} !important`,
})

globalStyle(`${luxScope}${textBodyEmphasis}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsEmphasisColor} !important`,
})

globalStyle(`${luxScope}${textReset}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'inherit !important',
})

globalStyle(`${luxScope}${textOpacity25}`, {
	vars: {
		[varBsTextOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${textOpacity50}`, {
	vars: {
		[varBsTextOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${textOpacity75}`, {
	vars: {
		[varBsTextOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${textOpacity100}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
})

globalStyle(`${luxScope}${textPrimaryEmphasis}`, {
	color: `${varBsPrimaryTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textSecondaryEmphasis}`, {
	color: `${varBsSecondaryTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textSuccessEmphasis}`, {
	color: `${varBsSuccessTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textInfoEmphasis}`, {
	color: `${varBsInfoTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textWarningEmphasis}`, {
	color: `${varBsWarningTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textDangerEmphasis}`, {
	color: `${varBsDangerTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textLightEmphasis}`, {
	color: `${varBsLightTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textDarkEmphasis}`, {
	color: `${varBsDarkTextEmphasis} !important`,
})

globalStyle(`${luxScope}${linkOpacity10}`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${linkOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${linkOpacity25}`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${linkOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${linkOpacity50}`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${linkOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${linkOpacity75}`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${linkOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${linkOpacity100}`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${luxScope}${linkOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${luxScope}${linkOffset1}`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${luxScope}${linkOffset1Hover}:hover`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${luxScope}${linkOffset2}`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${luxScope}${linkOffset2Hover}:hover`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${luxScope}${linkOffset3}`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${luxScope}${linkOffset3Hover}:hover`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${luxScope}${linkUnderlinePrimary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineSecondary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineSuccess}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineInfo}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineWarning}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineDanger}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineLight}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineDark}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderline}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineOpacity0}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity0Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity10}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity25}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity50}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity75}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity100}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${luxScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgBlack}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBlackRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgWhite}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWhiteRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgBody}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBodyBgRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgTransparent}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: 'transparent !important',
})

globalStyle(`${luxScope}${bgBodySecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-secondary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgBodyTertiary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-tertiary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgOpacity10}`, {
	vars: {
		[varBsBgOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${bgOpacity25}`, {
	vars: {
		[varBsBgOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${bgOpacity50}`, {
	vars: {
		[varBsBgOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${bgOpacity75}`, {
	vars: {
		[varBsBgOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${bgOpacity100}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
})

globalStyle(`${luxScope}${bgPrimarySubtle}`, {
	backgroundColor: `${varBsPrimaryBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgSecondarySubtle}`, {
	backgroundColor: `${varBsSecondaryBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgSuccessSubtle}`, {
	backgroundColor: `${varBsSuccessBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgInfoSubtle}`, {
	backgroundColor: `${varBsInfoBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgWarningSubtle}`, {
	backgroundColor: `${varBsWarningBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgDangerSubtle}`, {
	backgroundColor: `${varBsDangerBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgLightSubtle}`, {
	backgroundColor: `${varBsLightBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgDarkSubtle}`, {
	backgroundColor: `${varBsDarkBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgGradient}`, {
	backgroundImage: `${varBsGradient} !important`,
})

globalStyle(`${luxScope}${userSelectAll}`, {
	WebkitUserSelect: 'all !important',
	MozUserSelect: 'all !important',
	userSelect: 'all !important',
})

globalStyle(`${luxScope}${userSelectAuto}`, {
	WebkitUserSelect: 'auto !important',
	MozUserSelect: 'auto !important',
	userSelect: 'auto !important',
})

globalStyle(`${luxScope}${userSelectNone}`, {
	WebkitUserSelect: 'none !important',
	MozUserSelect: 'none !important',
	userSelect: 'none !important',
})

globalStyle(`${luxScope}${peNone}`, {
	pointerEvents: 'none !important',
})

globalStyle(`${luxScope}${peAuto}`, {
	pointerEvents: 'auto !important',
})

globalStyle(`${luxScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${rounded0}`, {
	borderRadius: '0 !important',
})

globalStyle(`${luxScope}${rounded1}`, {
	borderRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${rounded2}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${rounded3}`, {
	borderRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${rounded4}`, {
	borderRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${rounded5}`, {
	borderRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedCircle}`, {
	borderRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${roundedTop}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedTop0}`, {
	borderTopLeftRadius: '0 !important',
	borderTopRightRadius: '0 !important',
})

globalStyle(`${luxScope}${roundedTop1}`, {
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${roundedTop2}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedTop3}`, {
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${roundedTop4}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${roundedTop5}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedTopCircle}`, {
	borderTopLeftRadius: '50% !important',
	borderTopRightRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedTopPill}`, {
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${roundedEnd}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedEnd0}`, {
	borderTopRightRadius: '0 !important',
	borderBottomRightRadius: '0 !important',
})

globalStyle(`${luxScope}${roundedEnd1}`, {
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${roundedEnd2}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedEnd3}`, {
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${roundedEnd4}`, {
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${roundedEnd5}`, {
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedEndCircle}`, {
	borderTopRightRadius: '50% !important',
	borderBottomRightRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedEndPill}`, {
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${roundedBottom}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedBottom0}`, {
	borderBottomRightRadius: '0 !important',
	borderBottomLeftRadius: '0 !important',
})

globalStyle(`${luxScope}${roundedBottom1}`, {
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${roundedBottom2}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedBottom3}`, {
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${roundedBottom4}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${roundedBottom5}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedBottomCircle}`, {
	borderBottomRightRadius: '50% !important',
	borderBottomLeftRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedBottomPill}`, {
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${roundedStart}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedStart0}`, {
	borderBottomLeftRadius: '0 !important',
	borderTopLeftRadius: '0 !important',
})

globalStyle(`${luxScope}${roundedStart1}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${roundedStart2}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedStart3}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${roundedStart4}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${roundedStart5}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedStartCircle}`, {
	borderBottomLeftRadius: '50% !important',
	borderTopLeftRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedStartPill}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${visible}`, {
	visibility: 'visible !important',
})

globalStyle(`${luxScope}${invisible}`, {
	visibility: 'hidden !important',
})

globalStyle(`${luxScope}${zN1}`, {
	zIndex: '-1 !important',
})

globalStyle(`${luxScope}${z0}`, {
	zIndex: '0 !important',
})

globalStyle(`${luxScope}${z1}`, {
	zIndex: '1 !important',
})

globalStyle(`${luxScope}${z2}`, {
	zIndex: '2 !important',
})

globalStyle(`${luxScope}${z3}`, {
	zIndex: '3 !important',
})

globalStyle(`${luxScope}${floatSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmContain}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmCover}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmScale}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dSmInline}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dSmInlineBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dSmBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dSmGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dSmInlineGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dSmTable}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dSmTableRow}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dSmTableCell}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dSmFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dSmInlineFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmRow}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmColumn}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmRowReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmColumnReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmGrow0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmGrow1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmShrink0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmShrink1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmWrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmNowrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmWrapReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmEvenly}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderSmFirst}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSmLast}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${floatMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdContain}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdCover}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdScale}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dMdInline}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dMdInlineBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dMdGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dMdInlineGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dMdTable}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dMdTableRow}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dMdTableCell}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dMdFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dMdInlineFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdRow}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdColumn}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdRowReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdColumnReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdGrow0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdGrow1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdShrink0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdShrink1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdWrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdNowrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdWrapReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdEvenly}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderMdFirst}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMdLast}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${myMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${myMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${floatLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgContain}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgCover}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgScale}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dLgInline}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dLgInlineBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dLgBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dLgGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dLgInlineGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dLgTable}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dLgTableRow}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dLgTableCell}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dLgFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dLgInlineFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgRow}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgColumn}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgRowReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgColumnReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgGrow0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgGrow1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgShrink0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgShrink1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgWrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgNowrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgWrapReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgEvenly}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderLgFirst}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLgLast}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${myLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${myLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${floatXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlContain}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlCover}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlScale}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dXlInline}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dXlInlineBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dXlBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dXlGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dXlInlineGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dXlTable}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dXlTableRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dXlTableCell}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dXlFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dXlInlineFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlColumn}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlRowReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlColumnReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlGrow0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlGrow1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlShrink0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlShrink1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlWrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlNowrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlWrapReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlEvenly}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderXlFirst}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXlLast}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${myXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${myXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${floatXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlContain}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlCover}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlScale}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlInline}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlInlineBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlInlineGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlTable}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlTableRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlTableCell}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlInlineFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlColumn}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlRowReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlColumnReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlGrow0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlGrow1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlShrink0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlShrink1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlWrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlNowrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlWrapReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlEvenly}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxlFirst}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxlLast}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${fs1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem !important',
		},
	},
})

globalStyle(`${luxScope}${fs2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem !important',
		},
	},
})

globalStyle(`${luxScope}${fs3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintInline}`, {
	'@media': {
		'print': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintInlineBlock}`, {
	'@media': {
		'print': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintBlock}`, {
	'@media': {
		'print': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintGrid}`, {
	'@media': {
		'print': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintInlineGrid}`, {
	'@media': {
		'print': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintTable}`, {
	'@media': {
		'print': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintTableRow}`, {
	'@media': {
		'print': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintTableCell}`, {
	'@media': {
		'print': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintFlex}`, {
	'@media': {
		'print': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintInlineFlex}`, {
	'@media': {
		'print': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintNone}`, {
	'@media': {
		'print': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${navbar}`, {
	fontSize: '0.875rem',
	fontWeight: '600',
	textTransform: 'uppercase',
})

globalStyle(`${luxScope}${navbarNav} ${luxScope}${navLink}`, {
	paddingTop: '0.715rem',
	paddingBottom: '0.715rem',
})

globalStyle(`${luxScope}${navbarBrand}`, {
	marginRight: '2rem',
})

globalStyle(`${luxScope}${bgLight}`, {
	border: '1px solid rgba(0, 0, 0, 0.1)',
})

globalStyle(`${luxScope}${bgLight}${navbarFixedTop}`, {
	borderWidth: '0 0 1px',
})

globalStyle(`${luxScope}${bgLight}${navbarBottomTop}`, {
	borderWidth: '1px 0 0',
})

globalStyle(`${luxScope}${navItem}`, {
	marginRight: '2rem',
})

globalStyle(`${luxScope}${btn}`, {
	fontSize: '0.875rem',
	textTransform: 'uppercase',
})

globalStyle(`${luxScope}${btnSm}`, {
	fontSize: '10px',
})

globalStyle(`${luxScope}${btnGroupSm} > ${luxScope}${btn}`, {
	fontSize: '10px',
})

globalStyle(`${luxScope}${btnPrimary}`, {
	vars: {
		[varBsBtnHoverBg]: '#000',
		[varBsBtnHoverBorderColor]: '#000',
		[varBsBtnActiveBg]: '#000',
		[varBsBtnActiveBorderColor]: '#000',
	},
})

globalStyle(`${luxScope}${btnSecondary}`, {
	vars: {
		[varBsBtnHoverBg]: '#f0f1f2',
		[varBsBtnHoverBorderColor]: '#f0f1f2',
		[varBsBtnActiveBg]: '#e0e1e2',
		[varBsBtnActiveBorderColor]: '#e0e1e2',
	},
})

globalStyle(`${luxScope}${btnLight}`, {
	vars: {
		[varBsBtnHoverBg]: '#e0e1e2',
		[varBsBtnHoverBorderColor]: '#e0e1e2',
		[varBsBtnActiveBg]: '#cdcecf',
		[varBsBtnActiveBorderColor]: '#cdcecf',
	},
})

globalStyle(`${luxScope}${btnLink}`, {
	fontWeight: '600',
})

globalStyle(`${luxScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnHoverBg]: '#f0f1f2',
		[varBsBtnHoverBorderColor]: '#f0f1f2',
		[varBsBtnActiveBg]: '#e0e1e2',
		[varBsBtnActiveBorderColor]: '#e0e1e2',
	},
	borderColor: '#f8f9fa',
})

globalStyle(`${luxScope}${btnOutlineLight}`, {
	color: varBsBtnActiveColor,
})

globalStyle(`[class*=btn-outline-]`, {
	borderWidth: '2px',
})

globalStyle(`${luxScope}${borderSecondary}`, {
	border: '1px solid #cdcecf !important',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${btnPrimary}`, {
	vars: {
		[varBsBtnBg]: '#080808',
		[varBsBtnHoverBg]: '#000',
	},
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnHoverBg]: '#000',
	},
	color: '#fff',
	borderColor: '#080808',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f0f1f2',
		[varBsBtnHoverBorderColor]: '#f0f1f2',
		[varBsBtnActiveBg]: '#e0e1e2',
		[varBsBtnActiveBorderColor]: '#e0e1e2',
	},
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${btnOutlineLight}`, {
	color: '#fff',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${btnOutlineLight}:not([disabled]):not(${disabled}):hover`, {
	color: varBsBtnActiveColor,
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${btnOutlineLight}:not([disabled]):not(${disabled}):focus`, {
	color: varBsBtnActiveColor,
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${btnOutlineLight}:not([disabled]):not(${disabled}):active`, {
	color: varBsBtnActiveColor,
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${btnOutlineDark}`, {
	color: '#fff',
})

globalStyle(`${luxScope}${h1}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH1}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${h2}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH2}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${h3}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH3}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${h4}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH4}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${h5}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH5}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${h6}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${clsH6}`, {
	textTransform: 'uppercase',
	letterSpacing: '3px',
})

globalStyle(`${luxScope}${textSecondary}`, {
	color: '#55595c !important',
})

globalStyle(`${luxScope}${tableHeaderCell}`, {
	fontSize: '0.875rem',
	textTransform: 'uppercase',
})

globalStyle(`${luxScope}${table} ${luxScope}${tableHeaderCell}`, {
	padding: '1.5rem',
})

globalStyle(`${luxScope}${table} ${luxScope}${tableCell}`, {
	padding: '1.5rem',
})

globalStyle(`${luxScope}${tableSm} ${luxScope}${tableHeaderCell}`, {
	padding: '0.75rem',
})

globalStyle(`${luxScope}${tableSm} ${luxScope}${tableCell}`, {
	padding: '0.75rem',
})

globalStyle(`${luxScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`${luxScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#55595c',
	},
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formControl}`, {
	color: '#55595c',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formControl}::-moz-placeholder`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formControl}::placeholder`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}:not(:-moz-placeholder-shown) ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}:focus ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}:not(:placeholder-shown) ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControlPlaintext} ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formSelect} ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}::placeholder`, {
	color: 'transparent',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formCheckInput}:checked`, {
	backgroundColor: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formSwitch} ${luxScope}${formCheckInput}`, {
	backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'rgba(0, 0, 0, 0.25)\'/></svg>")',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formRange}::-webkit-slider-thumb`, {
	backgroundColor: '#919aa1',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: '#343a40',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${inputGroupText}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}${dropdownMenu}`, {
	fontSize: '0.875rem',
	textTransform: 'none',
})

globalStyle(`${luxScope}${badge}`, {
	paddingTop: '0.28rem',
})

globalStyle(`${luxScope}${badgePill}`, {
	borderRadius: '10rem',
})

globalStyle(`${luxScope}${badge}${bgSecondary}`, {
	color: '#343a40',
})

globalStyle(`${luxScope}${badge}${bgLight}`, {
	color: '#343a40',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${h1}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${h2}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${h3}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${h4}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${h5}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${h6}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${listGroupItem} ${luxScope}${clsH6}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${h1}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${h2}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${h3}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${h4}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${h5}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${h6}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${card} ${luxScope}${clsH6}`, {
	color: 'inherit',
})

globalStyle(`${luxScope}${modalDialog}`, {
	boxShadow: varBsBoxShadow,
})

globalStyle(`${luxScope}${popover}`, {
	vars: {
		[varBsPopoverBorderColor]: 'transparent',
	},
	boxShadow: varBsBoxShadow,
})

globalStyle(`${luxScope}${popover} ${luxScope}${popoverArrow}`, {
	vars: {
		[varBsPopoverBorderWidth]: '1px',
	},
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${modalContent}`, {
	backgroundColor: '#272727',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${popover}`, {
	backgroundColor: '#272727',
})

globalStyle(`[data-bs-theme=dark] ${luxScope}${toast}`, {
	backgroundColor: '#272727',
})
