import { globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../scope.css'

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
	accordionCollapse,
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
	formGroupLg,
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
	hasDanger,
	hasSuccess,
	hasValidation,
	hasWarning,
	hiding,
	hstack,
	iconLink,
	iconLinkHover,
	imgFluid,
	imgThumbnail,
	initialism,
	inputGroup,
	inputGroupAddon,
	inputGroupLg,
	inputGroupSm,
	inputGroupText,
	inputLg,
	inputSm,
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
	navbarBrand,
	navbarCollapse,
	navbarDark,
	navbarExpand,
	navbarExpandLg,
	navbarExpandMd,
	navbarExpandSm,
	navbarExpandXl,
	navbarExpandXxl,
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
	theadInverse,
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

globalStyle(`${materiaScope}${horizontalRule}`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`${materiaScope}${h6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${h5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${h4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${h3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${h2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${h1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${h1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${materiaScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${materiaScope}${h1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${materiaScope}${h2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${materiaScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${materiaScope}${h2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${materiaScope}${h3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${materiaScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${materiaScope}${h3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${materiaScope}${h4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${materiaScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${materiaScope}${h4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${materiaScope}${h5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${h6}`, {
	fontSize: '1rem',
})

globalStyle(`${materiaScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`${materiaScope}${paragraph}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${materiaScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`${materiaScope}${elAddress}`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`${materiaScope}${elOl}`, {
	paddingLeft: '2rem',
})

globalStyle(`${materiaScope}${elUl}`, {
	paddingLeft: '2rem',
})

globalStyle(`${materiaScope}${elOl}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${materiaScope}${elUl}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${materiaScope}${elDl}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${materiaScope}${elOl} ${materiaScope}${elOl}`, {
	marginBottom: '0',
})

globalStyle(`${materiaScope}${elUl} ${materiaScope}${elUl}`, {
	marginBottom: '0',
})

globalStyle(`${materiaScope}${elOl} ${materiaScope}${elUl}`, {
	marginBottom: '0',
})

globalStyle(`${materiaScope}${elUl} ${materiaScope}${elOl}`, {
	marginBottom: '0',
})

globalStyle(`${materiaScope}${elDt}`, {
	fontWeight: '700',
})

globalStyle(`${materiaScope}${elDd}`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`${materiaScope}${blockquote}`, {
	margin: '0 0 1rem',
})

globalStyle(`${materiaScope}${elB}`, {
	fontWeight: 'bolder',
})

globalStyle(`${materiaScope}${elStrong}`, {
	fontWeight: 'bolder',
})

globalStyle(`${materiaScope}${small}`, {
	fontSize: '0.875em',
})

globalStyle(`${materiaScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`${materiaScope}${markText}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${materiaScope}${mark}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${materiaScope}${elSub}`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`${materiaScope}${elSup}`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`${materiaScope}${elSub}`, {
	bottom: '-0.25em',
})

globalStyle(`${materiaScope}${elSup}`, {
	top: '-0.5em',
})

globalStyle(`${materiaScope}${link}`, {
	color: `rgba(${varBsLinkColorRgb}, ${varBsLinkOpacity})`,
	textDecoration: 'underline',
})

globalStyle(`${materiaScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${materiaScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${elPre}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`${materiaScope}${inlineCode}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`${materiaScope}${elKbd}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`${materiaScope}${elSamp}`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`${materiaScope}${elPre}`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`${materiaScope}${elPre} ${materiaScope}${inlineCode}`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`${materiaScope}${inlineCode}`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`${materiaScope}${link} > ${materiaScope}${inlineCode}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${elKbd}`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`${materiaScope}${elKbd} ${materiaScope}${elKbd}`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`${materiaScope}${elFigure}`, {
	margin: '0 0 1rem',
})

globalStyle(`${materiaScope}${elImg}`, {
	verticalAlign: 'middle',
})

globalStyle(`${materiaScope}${elSvg}`, {
	verticalAlign: 'middle',
})

globalStyle(`${materiaScope}${tableElement}`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`${materiaScope}${elCaption}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`${materiaScope}${tableHeaderCell}`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`${materiaScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${materiaScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${materiaScope}${tableSection}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${materiaScope}${tableRow}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${materiaScope}${tableCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${materiaScope}${tableHeaderCell}`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${materiaScope}${elLabel}`, {
	display: 'inline-block',
})

globalStyle(`${materiaScope}${elButton}`, {
	borderRadius: '0',
})

globalStyle(`${materiaScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`${materiaScope}${elInput}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${materiaScope}${elButton}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${materiaScope}${elSelect}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${materiaScope}${elOptgroup}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${materiaScope}${elTextarea}`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${materiaScope}${elButton}`, {
	textTransform: 'none',
})

globalStyle(`${materiaScope}${elSelect}`, {
	textTransform: 'none',
})

globalStyle(`[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`${materiaScope}${elSelect}`, {
	wordWrap: 'normal',
})

globalStyle(`${materiaScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`${materiaScope}${elButton}`, {
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

globalStyle(`${materiaScope}${elButton}:not(:disabled)`, {
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

globalStyle(`${materiaScope}${elTextarea}`, {
	resize: 'vertical',
})

globalStyle(`${materiaScope}${fieldset}`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`${materiaScope}${elLegend}`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${materiaScope}${elLegend}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${materiaScope}${elLegend} + *`, {
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

globalStyle(`${materiaScope}${elOutput}`, {
	display: 'inline-block',
})

globalStyle(`${materiaScope}${elIframe}`, {
	border: '0',
})

globalStyle(`${materiaScope}${elSummary}`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`${materiaScope}${elProgress}`, {
	verticalAlign: 'baseline',
})

globalStyle(`[hidden]`, {
	display: 'none !important',
})

globalStyle(`${materiaScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${materiaScope}${display1}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.625rem + 4.5vw)',
})

globalStyle(`${materiaScope}${display1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '5rem',
		},
	},
})

globalStyle(`${materiaScope}${display2}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.575rem + 3.9vw)',
})

globalStyle(`${materiaScope}${display2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4.5rem',
		},
	},
})

globalStyle(`${materiaScope}${display3}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.525rem + 3.3vw)',
})

globalStyle(`${materiaScope}${display3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

globalStyle(`${materiaScope}${display4}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.475rem + 2.7vw)',
})

globalStyle(`${materiaScope}${display4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3.5rem',
		},
	},
})

globalStyle(`${materiaScope}${display5}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${materiaScope}${display5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${materiaScope}${display6}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${materiaScope}${display6}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${materiaScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${materiaScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${materiaScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${materiaScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${materiaScope}${initialism}`, {
	fontSize: '0.875em',
	textTransform: 'uppercase',
})

globalStyle(`${materiaScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${materiaScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: '#666',
})

globalStyle(`${materiaScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${materiaScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${materiaScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${materiaScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${materiaScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: '1',
})

globalStyle(`${materiaScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${materiaScope}${container}`, {
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

globalStyle(`${materiaScope}${containerFluid}`, {
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

globalStyle(`${materiaScope}${containerXxl}`, {
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

globalStyle(`${materiaScope}${containerXl}`, {
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

globalStyle(`${materiaScope}${containerLg}`, {
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

globalStyle(`${materiaScope}${containerMd}`, {
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

globalStyle(`${materiaScope}${containerSm}`, {
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

globalStyle(`${materiaScope}${containerSm}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${materiaScope}${container}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${materiaScope}${containerMd}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${materiaScope}${containerSm}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${materiaScope}${container}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${materiaScope}${containerLg}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${materiaScope}${containerMd}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${materiaScope}${containerSm}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${materiaScope}${container}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${materiaScope}${containerXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${materiaScope}${containerLg}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${materiaScope}${containerMd}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${materiaScope}${containerSm}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${materiaScope}${container}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${materiaScope}${containerXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${materiaScope}${containerXl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${materiaScope}${containerLg}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${materiaScope}${containerMd}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${materiaScope}${containerSm}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${materiaScope}${container}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${materiaScope}${row}`, {
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

globalStyle(`${materiaScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${materiaScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${materiaScope}${rowColsAuto} > *`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${materiaScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${materiaScope}${rowCols2} > *`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${materiaScope}${rowCols3} > *`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${materiaScope}${rowCols4} > *`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${materiaScope}${rowCols5} > *`, {
	flex: '0 0 auto',
	width: '20%',
})

globalStyle(`${materiaScope}${rowCols6} > *`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${materiaScope}${colAuto}`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${materiaScope}${col1}`, {
	flex: '0 0 auto',
	width: '8.33333333%',
})

globalStyle(`${materiaScope}${col2}`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${materiaScope}${col3}`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${materiaScope}${col4}`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${materiaScope}${col5}`, {
	flex: '0 0 auto',
	width: '41.66666667%',
})

globalStyle(`${materiaScope}${col6}`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${materiaScope}${col7}`, {
	flex: '0 0 auto',
	width: '58.33333333%',
})

globalStyle(`${materiaScope}${col8}`, {
	flex: '0 0 auto',
	width: '66.66666667%',
})

globalStyle(`${materiaScope}${col9}`, {
	flex: '0 0 auto',
	width: '75%',
})

globalStyle(`${materiaScope}${col10}`, {
	flex: '0 0 auto',
	width: '83.33333333%',
})

globalStyle(`${materiaScope}${col11}`, {
	flex: '0 0 auto',
	width: '91.66666667%',
})

globalStyle(`${materiaScope}${col12}`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${materiaScope}${offset1}`, {
	marginLeft: '8.33333333%',
})

globalStyle(`${materiaScope}${offset2}`, {
	marginLeft: '16.66666667%',
})

globalStyle(`${materiaScope}${offset3}`, {
	marginLeft: '25%',
})

globalStyle(`${materiaScope}${offset4}`, {
	marginLeft: '33.33333333%',
})

globalStyle(`${materiaScope}${offset5}`, {
	marginLeft: '41.66666667%',
})

globalStyle(`${materiaScope}${offset6}`, {
	marginLeft: '50%',
})

globalStyle(`${materiaScope}${offset7}`, {
	marginLeft: '58.33333333%',
})

globalStyle(`${materiaScope}${offset8}`, {
	marginLeft: '66.66666667%',
})

globalStyle(`${materiaScope}${offset9}`, {
	marginLeft: '75%',
})

globalStyle(`${materiaScope}${offset10}`, {
	marginLeft: '83.33333333%',
})

globalStyle(`${materiaScope}${offset11}`, {
	marginLeft: '91.66666667%',
})

globalStyle(`${materiaScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${materiaScope}${gx0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${materiaScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${materiaScope}${gy0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${materiaScope}${g1}`, {
	vars: {
		[varBsGutterX]: '0.25rem',
	},
})

globalStyle(`${materiaScope}${gx1}`, {
	vars: {
		[varBsGutterX]: '0.25rem',
	},
})

globalStyle(`${materiaScope}${g1}`, {
	vars: {
		[varBsGutterY]: '0.25rem',
	},
})

globalStyle(`${materiaScope}${gy1}`, {
	vars: {
		[varBsGutterY]: '0.25rem',
	},
})

globalStyle(`${materiaScope}${g2}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${materiaScope}${gx2}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${materiaScope}${g2}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${materiaScope}${gy2}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${materiaScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${materiaScope}${gx3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${materiaScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${materiaScope}${gy3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${materiaScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${materiaScope}${gx4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${materiaScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${materiaScope}${gy4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${materiaScope}${g5}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${materiaScope}${gx5}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${materiaScope}${g5}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${materiaScope}${gy5}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${materiaScope}${colSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${materiaScope}${rowColsSmAuto} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${rowColsSm1} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsSm2} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsSm3} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsSm4} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsSm5} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsSm6} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${colSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${colSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${colSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${materiaScope}${colSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colSm12}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${colMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${materiaScope}${rowColsMdAuto} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${rowColsMd1} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsMd3} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsMd4} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsMd5} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsMd6} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${colMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${colMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${materiaScope}${colMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colMd12}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${colLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${materiaScope}${rowColsLgAuto} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${rowColsLg1} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsLg2} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsLg3} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsLg4} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsLg5} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsLg6} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${colLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${colLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${colLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${materiaScope}${colLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colLg12}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${colXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXlAuto} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXl1} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXl2} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXl3} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXl4} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXl5} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXl6} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${colXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${colXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${colXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${materiaScope}${colXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXl12}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${colXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXxlAuto} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXxl1} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXxl2} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXxl3} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXxl4} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXxl5} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${materiaScope}${rowColsXxl6} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${colXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${colXxl12}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${materiaScope}${offsetXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${materiaScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${gyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${materiaScope}${table}`, {
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
	marginBottom: '1rem',
	verticalAlign: 'top',
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: varBsTableColorState,
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${varBsTableBgState}`,
})

globalStyle(`${materiaScope}${table} > ${materiaScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${materiaScope}${table} > ${materiaScope}${tableSection}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${materiaScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${materiaScope}${captionTop}`, {
	captionSide: 'top',
})

globalStyle(`${materiaScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${materiaScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${materiaScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${materiaScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${materiaScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${materiaScope}${tableStriped} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${materiaScope}${tableStripedColumns} > :not(caption) > ${materiaScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${materiaScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${materiaScope}${tableHover} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${materiaScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#d3eafd',
		[varBsTableBorderColor]: '#a9bbca',
		[varBsTableStripedBg]: '#c8def0',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#bed3e4',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#c3d8ea',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableSecondary}`, {
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

globalStyle(`${materiaScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#dbefdc',
		[varBsTableBorderColor]: '#afbfb0',
		[varBsTableStripedBg]: '#d0e3d1',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#c5d7c6',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#cbddcc',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ebd4ef',
		[varBsTableBorderColor]: '#bcaabf',
		[varBsTableStripedBg]: '#dfc9e3',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#d4bfd7',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#d9c4dd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#ffeacc',
		[varBsTableBorderColor]: '#ccbba3',
		[varBsTableStripedBg]: '#f2dec2',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e6d3b8',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#ecd8bd',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#fad2d3',
		[varBsTableBorderColor]: '#c8a8a9',
		[varBsTableStripedBg]: '#eec8c8',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#e1bdbe',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e7c2c3',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#000',
		[varBsTableBg]: '#f8f9fa',
		[varBsTableBorderColor]: '#c6c7c8',
		[varBsTableStripedBg]: '#ecedee',
		[varBsTableStripedColor]: '#000',
		[varBsTableActiveBg]: '#dfe0e1',
		[varBsTableActiveColor]: '#000',
		[varBsTableHoverBg]: '#e5e6e7',
		[varBsTableHoverColor]: '#000',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#222',
		[varBsTableBorderColor]: '#4e4e4e',
		[varBsTableStripedBg]: '#2d2d2d',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#383838',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#333333',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${materiaScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${materiaScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${materiaScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${materiaScope}${colFormLabel}`, {
	paddingTop: '1rem',
	paddingBottom: '1rem',
	marginBottom: '0',
	fontSize: 'inherit',
	lineHeight: '1.5',
})

globalStyle(`${materiaScope}${colFormLabelLg}`, {
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${colFormLabelSm}`, {
	paddingTop: '0',
	paddingBottom: '0',
	fontSize: '0.875rem',
})

globalStyle(`${materiaScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${materiaScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '1rem 0',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#666',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundClip: 'padding-box',
	border: '0 solid transparent',
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${materiaScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${materiaScope}${formControl}:focus`, {
	color: '#666',
	backgroundColor: 'transparent',
	borderColor: '#90cbf9',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${materiaScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${materiaScope}${formControl}::-moz-placeholder`, {
	color: 'rgba(0, 0, 0, 0.4)',
	opacity: '1',
})

globalStyle(`${materiaScope}${formControl}::placeholder`, {
	color: 'rgba(0, 0, 0, 0.4)',
	opacity: '1',
})

globalStyle(`${materiaScope}${formControl}:disabled`, {
	backgroundColor: 'transparent',
	opacity: '1',
})

globalStyle(`${materiaScope}${formControl}::-webkit-file-upload-button`, {
	padding: '1rem 0',
	margin: '-1rem 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
	color: '#666',
	backgroundColor: varBsTertiaryBg,
	backgroundImage: varBsGradient,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '0',
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formControl}::file-selector-button`, {
	padding: '1rem 0',
	margin: '-1rem 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
	color: '#666',
	backgroundColor: varBsTertiaryBg,
	backgroundImage: varBsGradient,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '0',
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${materiaScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${materiaScope}${formControlPlaintext}`, {
	display: 'block',
	width: '100%',
	padding: '1rem 0',
	marginBottom: '0',
	lineHeight: '1.5',
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	border: 'solid transparent',
	borderWidth: '0 0',
})

globalStyle(`${materiaScope}${formControlPlaintext}:focus`, {
	outline: '0',
})

globalStyle(`${materiaScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${materiaScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${materiaScope}${formControlSm}`, {
	minHeight: '1.5em',
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0 0',
	margin: '0 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
})

globalStyle(`${materiaScope}${formControlSm}::file-selector-button`, {
	padding: '0 0',
	margin: '0 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
})

globalStyle(`${materiaScope}${formControlLg}`, {
	minHeight: 'calc(1.5em + 2.5rem)',
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '1.25rem 0',
	margin: '-1.25rem 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
})

globalStyle(`${materiaScope}${formControlLg}::file-selector-button`, {
	padding: '1.25rem 0',
	margin: '-1.25rem 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}`, {
	minHeight: 'calc(1.5em + 2rem)',
})

globalStyle(`${materiaScope}${elTextarea}${formControlSm}`, {
	minHeight: '1.5em',
})

globalStyle(`${materiaScope}${elTextarea}${formControlLg}`, {
	minHeight: 'calc(1.5em + 2.5rem)',
})

globalStyle(`${materiaScope}${formControlColor}`, {
	width: '3rem',
	height: 'calc(1.5em + 2rem)',
	padding: '1rem',
})

globalStyle(`${materiaScope}${formControlColor}:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${materiaScope}${formControlColor}::-moz-color-swatch`, {
	border: '0 !important',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formControlColor}::-webkit-color-swatch`, {
	border: '0 !important',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formControlColor}${formControlSm}`, {
	height: '1.5em',
})

globalStyle(`${materiaScope}${formControlColor}${formControlLg}`, {
	height: 'calc(1.5em + 2.5rem)',
})

globalStyle(`${materiaScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23222\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '1rem 0 1rem 0',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#666',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundImage: `${varBsFormSelectBgImg}, ${varBsFormSelectBgIcon}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0 center',
	backgroundSize: '16px 12px',
	border: '0 solid transparent',
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formSelect}:focus`, {
	borderColor: '#90cbf9',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formSelect}[multiple]`, {
	paddingRight: '0',
	backgroundImage: 'none',
})

globalStyle(`${materiaScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '0',
	backgroundImage: 'none',
})

globalStyle(`${materiaScope}${formSelect}:disabled`, {
	backgroundColor: 'transparent',
})

globalStyle(`${materiaScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: '0 0 0 #666',
})

globalStyle(`${materiaScope}${formSelectSm}`, {
	paddingTop: '0',
	paddingBottom: '0',
	paddingLeft: '0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formSelectLg}`, {
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	paddingLeft: '0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`[data-bs-theme=dark] ${materiaScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${materiaScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${materiaScope}${formCheck} ${materiaScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${materiaScope}${formCheckReverse}`, {
	paddingRight: '1.5em',
	paddingLeft: '0',
	textAlign: 'right',
})

globalStyle(`${materiaScope}${formCheckReverse} ${materiaScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${materiaScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: 'transparent',
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

globalStyle(`${materiaScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${materiaScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${materiaScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${materiaScope}${formCheckInput}:focus`, {
	borderColor: '#90cbf9',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formCheckInput}:checked`, {
	backgroundColor: '#2196f3',
	borderColor: '#2196f3',
})

globalStyle(`${materiaScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e"), ${varBsGradient}`,
	},
})

globalStyle(`${materiaScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e"), ${varBsGradient}`,
	},
})

globalStyle(`${materiaScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e"), ${varBsGradient}`,
	},
	backgroundColor: '#2196f3',
	borderColor: '#2196f3',
})

globalStyle(`${materiaScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${materiaScope}${formCheckInput}[disabled] ~ ${materiaScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${materiaScope}${formCheckInput}:disabled ~ ${materiaScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${materiaScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%280, 0, 0, 0.25%29\'/%3e%3c/svg%3e")',
	},
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '2em',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%2390cbf9\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e"), ${varBsGradient}`,
	},
	backgroundPosition: 'right center',
})

globalStyle(`${materiaScope}${formSwitch}${formCheckReverse}`, {
	paddingRight: '2.5em',
	paddingLeft: '0',
})

globalStyle(`${materiaScope}${formSwitch}${formCheckReverse} ${materiaScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${materiaScope}${formCheckInline}`, {
	display: 'inline-block',
	marginRight: '1rem',
})

globalStyle(`${materiaScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${materiaScope}${btnCheck}[disabled] + ${materiaScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${materiaScope}${btnCheck}:disabled + ${materiaScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`[data-bs-theme=dark] ${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${materiaScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${materiaScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${materiaScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#2196f3',
	backgroundImage: varBsGradient,
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#bce0fb',
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${materiaScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#2196f3',
	backgroundImage: varBsGradient,
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#bce0fb',
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${materiaScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${materiaScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${materiaScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${materiaScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}`, {
	height: '3.5rem',
	minHeight: '3.5rem',
	lineHeight: '1.25',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext}`, {
	height: '3.5rem',
	minHeight: '3.5rem',
	lineHeight: '1.25',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formSelect}`, {
	height: '3.5rem',
	minHeight: '3.5rem',
	lineHeight: '1.25',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elLabel}`, {
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '2',
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 0',
	overflow: 'hidden',
	color: `rgba(${varBsBodyColorRgb}, 0.65)`,
	textAlign: 'start',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	pointerEvents: 'none',
	border: '0 solid transparent',
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}`, {
	padding: '1rem 0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext}`, {
	padding: '1rem 0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:not(:-moz-placeholder-shown) ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:focus ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:not(:placeholder-shown) ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext} ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formSelect} ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:-webkit-autofill ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${materiaScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elTextarea}:focus ~ ${materiaScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elTextarea}:not(:placeholder-shown) ~ ${materiaScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elTextarea}:disabled ~ ${materiaScope}${elLabel}::after`, {
	backgroundColor: 'transparent',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControlPlaintext} ~ ${materiaScope}${elLabel}`, {
	borderWidth: '0 0',
})

globalStyle(`${materiaScope}${formFloating} > :disabled ~ ${materiaScope}${elLabel}`, {
	color: '#666',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:disabled ~ ${materiaScope}${elLabel}`, {
	color: '#666',
})

globalStyle(`${materiaScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${materiaScope}${inputGroup} ${materiaScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${materiaScope}${inputGroup} ${materiaScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${materiaScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '1rem 0',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#666',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: '0 solid transparent',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${formControl}`, {
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${formSelect}`, {
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${inputGroupText}`, {
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${btn}`, {
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${formControl}`, {
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${formSelect}`, {
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${inputGroupText}`, {
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${btn}`, {
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${formSelect}`, {
	paddingRight: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${formSelect}`, {
	paddingRight: '0',
})

globalStyle(`${materiaScope}${inputGroup}:not(${hasValidation}) > ${materiaScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}:not(${hasValidation}) > ${materiaScope}${dropdownToggle}:nth-last-child(n+3)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}:not(${hasValidation}) > ${materiaScope}${formFloating}:not(:last-child) > ${materiaScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}:not(${hasValidation}) > ${materiaScope}${formFloating}:not(:last-child) > ${materiaScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}${hasValidation} > ${materiaScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}${hasValidation} > ${materiaScope}${dropdownToggle}:nth-last-child(n+4)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}${hasValidation} > ${materiaScope}${formFloating}:nth-last-child(n+3) > ${materiaScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}${hasValidation} > ${materiaScope}${formFloating}:nth-last-child(n+3) > ${materiaScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: 'calc(-1 * 0)',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:first-child) > ${materiaScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:first-child) > ${materiaScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${materiaScope}${validTooltip}`, {
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
	borderRadius: varBsBorderRadius,
})

globalStyle(`${materiaScope}${wasValidated} :valid ~ ${materiaScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} :valid ~ ${materiaScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${isValid} ~ ${materiaScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${isValid} ~ ${materiaScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${materiaScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControlColor}:valid`, {
	width: 'calc(3rem + calc(1.5em + 2rem))',
})

globalStyle(`${materiaScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 2rem))',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:valid ~ ${materiaScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isValid} ~ ${materiaScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${materiaScope}${formCheckInline} ${materiaScope}${formCheckInput} ~ ${materiaScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${invalidTooltip}`, {
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
	borderRadius: varBsBorderRadius,
})

globalStyle(`${materiaScope}${wasValidated} :invalid ~ ${materiaScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} :invalid ~ ${materiaScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${isInvalid} ~ ${materiaScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${isInvalid} ~ ${materiaScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControlColor}:invalid`, {
	width: 'calc(3rem + calc(1.5em + 2rem))',
})

globalStyle(`${materiaScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 2rem))',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:invalid ~ ${materiaScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isInvalid} ~ ${materiaScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${formCheckInline} ${materiaScope}${formCheckInput} ~ ${materiaScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnPaddingY]: '0.8rem',
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
	borderRadius: varBsBtnBorderRadius,
	backgroundColor: varBsBtnBg,
	backgroundImage: varBsGradient,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${materiaScope}${btnCheck} + ${materiaScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${materiaScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	backgroundImage: varBsGradient,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btnCheck}:focus-visible + ${materiaScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}:not(${btnCheck}) + ${materiaScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}:not(${btnCheck}) + ${materiaScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btnCheck}:checked:focus-visible + ${materiaScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	backgroundImage: 'none',
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${materiaScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	backgroundImage: 'none',
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${materiaScope}${fieldset}:disabled ${materiaScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	backgroundImage: 'none',
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${materiaScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2196f3',
		[varBsBtnBorderColor]: '#2196f3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1c80cf',
		[varBsBtnHoverBorderColor]: '#1a78c2',
		[varBsBtnFocusBoxShadowRgb]: '66, 166, 245',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1a78c2',
		[varBsBtnActiveBorderColor]: '#1971b6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2196f3',
		[varBsBtnDisabledBorderColor]: '#2196f3',
	},
})

globalStyle(`${materiaScope}${btnSecondary}`, {
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

globalStyle(`${materiaScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#4caf50',
		[varBsBtnBorderColor]: '#4caf50',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#419544',
		[varBsBtnHoverBorderColor]: '#3d8c40',
		[varBsBtnFocusBoxShadowRgb]: '103, 187, 106',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3d8c40',
		[varBsBtnActiveBorderColor]: '#39833c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#4caf50',
		[varBsBtnDisabledBorderColor]: '#4caf50',
	},
})

globalStyle(`${materiaScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#9c27b0',
		[varBsBtnBorderColor]: '#9c27b0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#852196',
		[varBsBtnHoverBorderColor]: '#7d1f8d',
		[varBsBtnFocusBoxShadowRgb]: '171, 71, 188',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7d1f8d',
		[varBsBtnActiveBorderColor]: '#751d84',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#9c27b0',
		[varBsBtnDisabledBorderColor]: '#9c27b0',
	},
})

globalStyle(`${materiaScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ff9800',
		[varBsBtnBorderColor]: '#ff9800',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d98100',
		[varBsBtnHoverBorderColor]: '#cc7a00',
		[varBsBtnFocusBoxShadowRgb]: '255, 167, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc7a00',
		[varBsBtnActiveBorderColor]: '#bf7200',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ff9800',
		[varBsBtnDisabledBorderColor]: '#ff9800',
	},
})

globalStyle(`${materiaScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e51c23',
		[varBsBtnBorderColor]: '#e51c23',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c3181e',
		[varBsBtnHoverBorderColor]: '#b7161c',
		[varBsBtnFocusBoxShadowRgb]: '233, 62, 68',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b7161c',
		[varBsBtnActiveBorderColor]: '#ac151a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e51c23',
		[varBsBtnDisabledBorderColor]: '#e51c23',
	},
})

globalStyle(`${materiaScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f8f9fa',
		[varBsBtnBorderColor]: '#f8f9fa',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d3d4d5',
		[varBsBtnHoverBorderColor]: '#c6c7c8',
		[varBsBtnFocusBoxShadowRgb]: '211, 212, 213',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#c6c7c8',
		[varBsBtnActiveBorderColor]: '#babbbc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f8f9fa',
		[varBsBtnDisabledBorderColor]: '#f8f9fa',
	},
})

globalStyle(`${materiaScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#222',
		[varBsBtnBorderColor]: '#222',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#434343',
		[varBsBtnHoverBorderColor]: '#383838',
		[varBsBtnFocusBoxShadowRgb]: '67, 67, 67',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4e4e4e',
		[varBsBtnActiveBorderColor]: '#383838',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#222',
		[varBsBtnDisabledBorderColor]: '#222',
	},
})

globalStyle(`${materiaScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#2196f3',
		[varBsBtnBorderColor]: '#2196f3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2196f3',
		[varBsBtnHoverBorderColor]: '#2196f3',
		[varBsBtnFocusBoxShadowRgb]: '33, 150, 243',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2196f3',
		[varBsBtnActiveBorderColor]: '#2196f3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#2196f3',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2196f3',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineSecondary}`, {
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

globalStyle(`${materiaScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#4caf50',
		[varBsBtnBorderColor]: '#4caf50',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4caf50',
		[varBsBtnHoverBorderColor]: '#4caf50',
		[varBsBtnFocusBoxShadowRgb]: '76, 175, 80',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4caf50',
		[varBsBtnActiveBorderColor]: '#4caf50',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#4caf50',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#4caf50',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#9c27b0',
		[varBsBtnBorderColor]: '#9c27b0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#9c27b0',
		[varBsBtnHoverBorderColor]: '#9c27b0',
		[varBsBtnFocusBoxShadowRgb]: '156, 39, 176',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#9c27b0',
		[varBsBtnActiveBorderColor]: '#9c27b0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#9c27b0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#9c27b0',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ff9800',
		[varBsBtnBorderColor]: '#ff9800',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ff9800',
		[varBsBtnHoverBorderColor]: '#ff9800',
		[varBsBtnFocusBoxShadowRgb]: '255, 152, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ff9800',
		[varBsBtnActiveBorderColor]: '#ff9800',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ff9800',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ff9800',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#e51c23',
		[varBsBtnBorderColor]: '#e51c23',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e51c23',
		[varBsBtnHoverBorderColor]: '#e51c23',
		[varBsBtnFocusBoxShadowRgb]: '229, 28, 35',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e51c23',
		[varBsBtnActiveBorderColor]: '#e51c23',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e51c23',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e51c23',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#f8f9fa',
		[varBsBtnBorderColor]: '#f8f9fa',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f8f9fa',
		[varBsBtnHoverBorderColor]: '#f8f9fa',
		[varBsBtnFocusBoxShadowRgb]: '248, 249, 250',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f8f9fa',
		[varBsBtnActiveBorderColor]: '#f8f9fa',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f8f9fa',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f8f9fa',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#222',
		[varBsBtnBorderColor]: '#222',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#222',
		[varBsBtnHoverBorderColor]: '#222',
		[varBsBtnFocusBoxShadowRgb]: '34, 34, 34',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#222',
		[varBsBtnActiveBorderColor]: '#222',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#222',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#222',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#666',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '66, 166, 245',
	},
	textDecoration: 'underline',
	backgroundImage: 'none',
})

globalStyle(`${materiaScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${materiaScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${materiaScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${materiaScope}${btnGroupLg} > ${materiaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${materiaScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${materiaScope}${btnGroupSm} > ${materiaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${materiaScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${materiaScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${materiaScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${materiaScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${materiaScope}${collapsing}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${collapsing}${collapseHorizontal}`, {
	width: '0',
	height: 'auto',
	transition: 'width 0.35s ease',
})

globalStyle(`${materiaScope}${collapsing}${collapseHorizontal}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${dropup}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${dropend}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${dropdown}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${dropstart}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${dropupCenter}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${dropdownCenter}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${dropdownToggle}`, {
	whiteSpace: 'nowrap',
})

globalStyle(`${materiaScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid',
	borderRight: '0.3em solid transparent',
	borderBottom: '0',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${materiaScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${dropdownMenu}`, {
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
		[varBsDropdownLinkActiveBg]: '#2196f3',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '1rem',
		[varBsDropdownItemPaddingY]: '0.25rem',
		[varBsDropdownHeaderColor]: '#666',
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
	borderRadius: varBsDropdownBorderRadius,
})

globalStyle(`${materiaScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: '0',
	marginTop: varBsDropdownSpacer,
})

globalStyle(`${materiaScope}${dropdownMenuStart}`, {
	vars: {
		[varBsPosition]: 'start',
	},
})

globalStyle(`${materiaScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: '0',
})

globalStyle(`${materiaScope}${dropdownMenuEnd}`, {
	vars: {
		[varBsPosition]: 'end',
	},
})

globalStyle(`${materiaScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: '0',
	left: 'auto',
})

globalStyle(`${materiaScope}${dropdownMenuSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuSmStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuSmEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuMdStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuMdEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuLgStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuLgEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuXlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuXlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuXxlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${materiaScope}${dropdownMenuXxlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${dropup} ${materiaScope}${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: '0',
	marginBottom: varBsDropdownSpacer,
})

globalStyle(`${materiaScope}${dropup} ${materiaScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0',
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${materiaScope}${dropup} ${materiaScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${dropend} ${materiaScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: 'auto',
	left: '100%',
	marginTop: '0',
	marginLeft: varBsDropdownSpacer,
})

globalStyle(`${materiaScope}${dropend} ${materiaScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0',
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${materiaScope}${dropend} ${materiaScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${dropend} ${materiaScope}${dropdownToggle}::after`, {
	verticalAlign: '0',
})

globalStyle(`${materiaScope}${dropstart} ${materiaScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: '100%',
	left: 'auto',
	marginTop: '0',
	marginRight: varBsDropdownSpacer,
})

globalStyle(`${materiaScope}${dropstart} ${materiaScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
})

globalStyle(`${materiaScope}${dropstart} ${materiaScope}${dropdownToggle}::after`, {
	display: 'none',
})

globalStyle(`${materiaScope}${dropstart} ${materiaScope}${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${materiaScope}${dropstart} ${materiaScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${dropstart} ${materiaScope}${dropdownToggle}::before`, {
	verticalAlign: '0',
})

globalStyle(`${materiaScope}${dropdownDivider}`, {
	height: '0',
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: '1',
})

globalStyle(`${materiaScope}${dropdownItem}`, {
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

globalStyle(`${materiaScope}${dropdownItem}:hover`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${dropdownItem}:focus`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${dropdownItem}:active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
	backgroundImage: 'none',
})

globalStyle(`${materiaScope}${dropdownItem}:disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
	backgroundImage: 'none',
})

globalStyle(`${materiaScope}${dropdownMenu}${show}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

globalStyle(`${materiaScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

globalStyle(`${materiaScope}${dropdownMenuDark}`, {
	vars: {
		[varBsDropdownColor]: '#dee2e6',
		[varBsDropdownBg]: '#222',
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBoxShadow]: '',
		[varBsDropdownLinkColor]: '#dee2e6',
		[varBsDropdownLinkHoverColor]: '#fff',
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.15)',
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#2196f3',
		[varBsDropdownLinkDisabledColor]: '#bbb',
		[varBsDropdownHeaderColor]: '#bbb',
	},
})

globalStyle(`${materiaScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${materiaScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnCheck}:focus + ${materiaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnCheck}:focus + ${materiaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${materiaScope}${btnToolbar} ${materiaScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${materiaScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}:not(${btnCheck}:first-child) + ${materiaScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnGroup}:not(:last-child) > ${materiaScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}:not(${btnCheck}) + ${materiaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnGroup}:not(:first-child) > ${materiaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${materiaScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${dropup} ${materiaScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${dropend} ${materiaScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${dropstart} ${materiaScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${materiaScope}${btnSm} + ${materiaScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${materiaScope}${btnGroupSm} > ${materiaScope}${btn} + ${materiaScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${materiaScope}${btnLg} + ${materiaScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${materiaScope}${btnGroupLg} > ${materiaScope}${btn} + ${materiaScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${materiaScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup}:not(:last-child) > ${materiaScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}:not(${btnCheck}) + ${materiaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup}:not(:first-child) > ${materiaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${materiaScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: '#bbb',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${materiaScope}${navLink}`, {
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

globalStyle(`${materiaScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${materiaScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${materiaScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${navLink}${disabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${materiaScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${materiaScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: 'transparent',
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} transparent`,
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${active}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navItem}${show} ${materiaScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${dropdownMenu}`, {
	marginTop: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${materiaScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#2196f3',
	},
})

globalStyle(`${materiaScope}${navPills} ${materiaScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${materiaScope}${navPills} ${materiaScope}${navLink}${active}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${navPills} ${materiaScope}${show} > ${materiaScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${navLink}${active}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${show} > ${materiaScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${materiaScope}${navFill} > ${materiaScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${materiaScope}${navFill} ${materiaScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${materiaScope}${navJustified} > ${materiaScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${materiaScope}${navJustified} ${materiaScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${materiaScope}${navFill} ${materiaScope}${navItem} ${materiaScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${navJustified} ${materiaScope}${navItem} ${materiaScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${tabContent} > ${materiaScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${materiaScope}${tabContent} > ${materiaScope}${active}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${navbar}`, {
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
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%2868, 68, 68, 0.75%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
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
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${navbar} > ${materiaScope}${container}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${materiaScope}${navbar} > ${materiaScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${materiaScope}${navbar} > ${materiaScope}${containerSm}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${materiaScope}${navbar} > ${materiaScope}${containerMd}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${materiaScope}${navbar} > ${materiaScope}${containerLg}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${materiaScope}${navbar} > ${materiaScope}${containerXl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${materiaScope}${navbar} > ${materiaScope}${containerXxl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${materiaScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: varBsNavbarBrandFontSize,
	color: varBsNavbarBrandColor,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
})

globalStyle(`${materiaScope}${navbarBrand}:hover`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${materiaScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${materiaScope}${navbarNav}`, {
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

globalStyle(`${materiaScope}${navbarNav} ${materiaScope}${navLink}${active}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${materiaScope}${navbarNav} ${materiaScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${materiaScope}${navbarNav} ${materiaScope}${dropdownMenu}`, {
	position: 'static',
})

globalStyle(`${materiaScope}${navbarText}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsNavbarColor,
})

globalStyle(`${materiaScope}${navbarText} ${materiaScope}${link}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${materiaScope}${navbarText} ${materiaScope}${link}:hover`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${materiaScope}${navbarText} ${materiaScope}${link}:focus`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${materiaScope}${navbarCollapse}`, {
	flexGrow: '1',
	flexBasis: '100%',
	alignItems: 'center',
})

globalStyle(`${materiaScope}${navbarToggler}`, {
	padding: `${varBsNavbarTogglerPaddingY} ${varBsNavbarTogglerPaddingX}`,
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: '1',
	color: varBsNavbarColor,
	backgroundColor: 'transparent',
	border: `${varBsBorderWidth} solid ${varBsNavbarTogglerBorderColor}`,
	borderRadius: varBsNavbarTogglerBorderRadius,
	transition: varBsNavbarTogglerTransition,
})

globalStyle(`${materiaScope}${navbarToggler}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarToggler}:hover`, {
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${navbarToggler}:focus`, {
	textDecoration: 'none',
	outline: '0',
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

globalStyle(`${materiaScope}${navbarTogglerIcon}`, {
	display: 'inline-block',
	width: '1.5em',
	height: '1.5em',
	verticalAlign: 'middle',
	backgroundImage: varBsNavbarTogglerIconBg,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: '100%',
})

globalStyle(`${materiaScope}${navbarNavScroll}`, {
	maxHeight: 'var(--bs-scroll-height, 75vh)',
	overflowY: 'auto',
})

globalStyle(`${materiaScope}${navbarExpandSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${navbarNav}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${navbarNav} ${materiaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 576px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${offcanvas}`, {
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

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${navbarNav}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${navbarNav} ${materiaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 768px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${offcanvas}`, {
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

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${navbarNav}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${navbarNav} ${materiaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 992px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${offcanvas}`, {
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

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${navbarNav} ${materiaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1200px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${offcanvas}`, {
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

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${navbarNav} ${materiaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1400px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${offcanvas}`, {
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

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${navbarExpand}`, {
	flexWrap: 'nowrap',
	justifyContent: 'flex-start',
})

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${navbarNav}`, {
	flexDirection: 'row',
})

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${navbarNav} ${materiaScope}${dropdownMenu}`, {
	position: 'absolute',
})

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${navbarNavScroll}`, {
	overflow: 'visible',
})

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${navbarCollapse}`, {
	display: 'flex !important',
	flexBasis: 'auto',
})

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${navbarToggler}`, {
	display: 'none',
})

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${offcanvas}`, {
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

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasHeader}`, {
	display: 'none',
})

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${offcanvas} ${materiaScope}${offcanvasBody}`, {
	display: 'flex',
	flexGrow: '0',
	padding: '0',
	overflowY: 'visible',
})

globalStyle(`${materiaScope}${navbarDark}`, {
	vars: {
		[varBsNavbarColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsNavbarHoverColor]: '#fff',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.25)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: 'rgba(255, 255, 255, 0.1)',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.75%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${materiaScope}${navbar}[data-bs-theme=dark]`, {
	vars: {
		[varBsNavbarColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsNavbarHoverColor]: '#fff',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.25)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: 'rgba(255, 255, 255, 0.1)',
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.75%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`[data-bs-theme=dark] ${materiaScope}${navbarTogglerIcon}`, {
	vars: {
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.75%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${materiaScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: '1rem',
		[varBsCardSpacerX]: '1rem',
		[varBsCardTitleSpacerY]: '0.5rem',
		[varBsCardTitleColor]: '',
		[varBsCardSubtitleColor]: '',
		[varBsCardBorderWidth]: '0',
		[varBsCardBorderColor]: 'transparent',
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardBoxShadow]: '',
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - 0)`,
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
	borderRadius: varBsCardBorderRadius,
})

globalStyle(`${materiaScope}${card} > ${materiaScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${materiaScope}${card} > ${materiaScope}${listGroup}`, {
	borderTop: 'inherit',
	borderBottom: 'inherit',
})

globalStyle(`${materiaScope}${card} > ${materiaScope}${listGroup}:first-child`, {
	borderTopWidth: '0',
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${materiaScope}${card} > ${materiaScope}${listGroup}:last-child`, {
	borderBottomWidth: '0',
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${materiaScope}${card} > ${materiaScope}${cardHeader} + ${materiaScope}${listGroup}`, {
	borderTop: '0',
})

globalStyle(`${materiaScope}${card} > ${materiaScope}${listGroup} + ${materiaScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${materiaScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${materiaScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${materiaScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${materiaScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${materiaScope}${cardLink} + ${materiaScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${materiaScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${materiaScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

globalStyle(`${materiaScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${materiaScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

globalStyle(`${materiaScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})

globalStyle(`${materiaScope}${cardHeaderTabs} ${materiaScope}${navLink}${active}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${materiaScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${materiaScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
	borderRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${materiaScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${cardImg}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${materiaScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${materiaScope}${cardImg}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${materiaScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${materiaScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card} + ${materiaScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:last-child) > ${materiaScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:last-child) > ${materiaScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:last-child) > ${materiaScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:last-child) > ${materiaScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:first-child) > ${materiaScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:first-child) > ${materiaScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:first-child) > ${materiaScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${cardGroup} > ${materiaScope}${card}:not(:first-child) > ${materiaScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${accordion}`, {
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
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%23444\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnIconWidth]: '1.25rem',
		[varBsAccordionBtnIconTransform]: 'rotate(-180deg)',
		[varBsAccordionBtnIconTransition]: 'transform 0.2s ease-in-out',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%230d3c61\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnFocusBoxShadow]: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
		[varBsAccordionBodyPaddingX]: '1.25rem',
		[varBsAccordionBodyPaddingY]: '1rem',
		[varBsAccordionActiveColor]: varBsPrimaryTextEmphasis,
		[varBsAccordionActiveBg]: varBsPrimaryBgSubtle,
	},
})

globalStyle(`${materiaScope}${accordionButton}`, {
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

globalStyle(`${materiaScope}${accordionButton}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${accordionButton}:not(${collapsed})`, {
	color: varBsAccordionActiveColor,
	backgroundColor: varBsAccordionActiveBg,
	boxShadow: `inset 0 calc(-1 * ${varBsAccordionBorderWidth}) 0 ${varBsAccordionBorderColor}`,
})

globalStyle(`${materiaScope}${accordionButton}:not(${collapsed})::after`, {
	backgroundImage: varBsAccordionBtnActiveIcon,
	transform: varBsAccordionBtnIconTransform,
})

globalStyle(`${materiaScope}${accordionButton}::after`, {
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

globalStyle(`${materiaScope}${accordionButton}::after`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${accordionButton}:hover`, {
	zIndex: '2',
})

globalStyle(`${materiaScope}${accordionButton}:focus`, {
	zIndex: '3',
	outline: '0',
	boxShadow: varBsAccordionBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${accordionHeader}`, {
	marginBottom: '0',
})

globalStyle(`${materiaScope}${accordionItem}`, {
	color: varBsAccordionColor,
	backgroundColor: varBsAccordionBg,
	border: `${varBsAccordionBorderWidth} solid ${varBsAccordionBorderColor}`,
})

globalStyle(`${materiaScope}${accordionItem}:first-of-type`, {
	borderTopLeftRadius: varBsAccordionBorderRadius,
	borderTopRightRadius: varBsAccordionBorderRadius,
})

globalStyle(`${materiaScope}${accordionItem}:first-of-type > ${materiaScope}${accordionHeader} ${materiaScope}${accordionButton}`, {
	borderTopLeftRadius: varBsAccordionInnerBorderRadius,
	borderTopRightRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${materiaScope}${accordionItem}:not(:first-of-type)`, {
	borderTop: '0',
})

globalStyle(`${materiaScope}${accordionItem}:last-of-type`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${materiaScope}${accordionItem}:last-of-type > ${materiaScope}${accordionHeader} ${materiaScope}${accordionButton}${collapsed}`, {
	borderBottomRightRadius: varBsAccordionInnerBorderRadius,
	borderBottomLeftRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${materiaScope}${accordionItem}:last-of-type > ${materiaScope}${accordionCollapse}`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${materiaScope}${accordionBody}`, {
	padding: `${varBsAccordionBodyPaddingY} ${varBsAccordionBodyPaddingX}`,
})

globalStyle(`${materiaScope}${accordionFlush} > ${materiaScope}${accordionItem}`, {
	borderRight: '0',
	borderLeft: '0',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${accordionFlush} > ${materiaScope}${accordionItem}:first-child`, {
	borderTop: '0',
})

globalStyle(`${materiaScope}${accordionFlush} > ${materiaScope}${accordionItem}:last-child`, {
	borderBottom: '0',
})

globalStyle(`${materiaScope}${accordionFlush} > ${materiaScope}${accordionItem} > ${materiaScope}${accordionCollapse}`, {
	borderRadius: '0',
})

globalStyle(`${materiaScope}${accordionFlush} > ${materiaScope}${accordionItem} > ${materiaScope}${accordionHeader} ${materiaScope}${accordionButton}`, {
	borderRadius: '0',
})

globalStyle(`${materiaScope}${accordionFlush} > ${materiaScope}${accordionItem} > ${materiaScope}${accordionHeader} ${materiaScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`[data-bs-theme=dark] ${materiaScope}${accordionButton}::after`, {
	vars: {
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%237ac0f8\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%237ac0f8\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${materiaScope}${breadcrumb}`, {
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
	borderRadius: varBsBreadcrumbBorderRadius,
})

globalStyle(`${materiaScope}${breadcrumbItem} + ${materiaScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${materiaScope}${breadcrumbItem} + ${materiaScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${varBsBreadcrumbDivider} `,
})

globalStyle(`${materiaScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${materiaScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.75rem',
		[varBsPaginationPaddingY]: '0.375rem',
		[varBsPaginationFontSize]: '1rem',
		[varBsPaginationColor]: varBsLinkColor,
		[varBsPaginationBg]: varBsBodyBg,
		[varBsPaginationBorderWidth]: varBsBorderWidth,
		[varBsPaginationBorderColor]: varBsBorderColor,
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: varBsLinkHoverColor,
		[varBsPaginationHoverBg]: varBsTertiaryBg,
		[varBsPaginationHoverBorderColor]: varBsBorderColor,
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: varBsSecondaryBg,
		[varBsPaginationFocusBoxShadow]: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
		[varBsPaginationActiveColor]: '#fff',
		[varBsPaginationActiveBg]: '#2196f3',
		[varBsPaginationActiveBorderColor]: '#2196f3',
		[varBsPaginationDisabledColor]: varBsSecondaryColor,
		[varBsPaginationDisabledBg]: varBsSecondaryBg,
		[varBsPaginationDisabledBorderColor]: varBsBorderColor,
	},
	display: 'flex',
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${materiaScope}${pageLink}`, {
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

globalStyle(`${materiaScope}${pageLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${pageLink}:hover`, {
	zIndex: '2',
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${materiaScope}${pageLink}:focus`, {
	zIndex: '3',
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: '0',
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(`${materiaScope}${pageLink}${active}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	backgroundImage: varBsGradient,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${materiaScope}${active} > ${materiaScope}${pageLink}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	backgroundImage: varBsGradient,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${materiaScope}${pageLink}${disabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${materiaScope}${disabled} > ${materiaScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${materiaScope}${pageItem}:not(:first-child) ${materiaScope}${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${materiaScope}${pageItem}:first-child ${materiaScope}${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

globalStyle(`${materiaScope}${pageItem}:last-child ${materiaScope}${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

globalStyle(`${materiaScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${materiaScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${materiaScope}${badge}`, {
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
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${badge}:empty`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btn} ${materiaScope}${badge}`, {
	position: 'relative',
	top: '-1px',
})

globalStyle(`${materiaScope}${alert}`, {
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
	borderRadius: varBsAlertBorderRadius,
})

globalStyle(`${materiaScope}${alertHeading}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${alertLink}`, {
	fontWeight: '700',
	color: varBsAlertLinkColor,
})

globalStyle(`${materiaScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

globalStyle(`${materiaScope}${alertDismissible} ${materiaScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${materiaScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertDark}`, {
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

globalStyle(`${materiaScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '0.375rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: '0',
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#2196f3',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${materiaScope}${progressStacked}`, {
	vars: {
		[varBsProgressHeight]: '0.375rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: '0',
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#2196f3',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${materiaScope}${progressBar}`, {
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

globalStyle(`${materiaScope}${progressBar}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${progressBarStriped}`, {
	backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${materiaScope}${progressStacked} > ${materiaScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${materiaScope}${progressStacked} > ${materiaScope}${progress} > ${materiaScope}${progressBar}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${progressBarAnimated}`, {
	animation: '1s linear infinite progress-bar-stripes',
})

globalStyle(`${materiaScope}${progressBarAnimated}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})

globalStyle(`${materiaScope}${listGroup}`, {
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
		[varBsListGroupActiveBg]: '#2196f3',
		[varBsListGroupActiveBorderColor]: '#2196f3',
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '0',
	marginBottom: '0',
	borderRadius: varBsListGroupBorderRadius,
})

globalStyle(`${materiaScope}${listGroupNumbered}`, {
	listStyleType: 'none',
	counterReset: 'section',
})

globalStyle(`${materiaScope}${listGroupNumbered} > ${materiaScope}${listGroupItem}::before`, {
	content: 'counters(section, ".") ". "',
	counterIncrement: 'section',
})

globalStyle(`${materiaScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${materiaScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${materiaScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})

globalStyle(`${materiaScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${materiaScope}${listGroupItem}:disabled`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${materiaScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	borderTopWidth: '0',
})

globalStyle(`${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${materiaScope}${listGroupItemAction}`, {
	width: '100%',
	color: varBsListGroupActionColor,
	textAlign: 'inherit',
})

globalStyle(`${materiaScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${materiaScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${materiaScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${materiaScope}${listGroupHorizontal}`, {
	flexDirection: 'row',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	borderBottomLeftRadius: varBsListGroupBorderRadius,
	borderTopRightRadius: '0',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	borderTopRightRadius: varBsListGroupBorderRadius,
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	borderTopWidth: varBsListGroupBorderWidth,
	borderLeftWidth: '0',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${materiaScope}${listGroupHorizontalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 768px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 768px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 768px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 992px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 992px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 992px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 1200px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 1200px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1200px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 1400px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 1400px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1400px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupFlush}`, {
	borderRadius: '0',
})

globalStyle(`${materiaScope}${listGroupFlush} > ${materiaScope}${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${materiaScope}${listGroupFlush} > ${materiaScope}${listGroupItem}:last-child`, {
	borderBottomWidth: '0',
})

globalStyle(`${materiaScope}${listGroupItemPrimary}`, {
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

globalStyle(`${materiaScope}${listGroupItemSecondary}`, {
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

globalStyle(`${materiaScope}${listGroupItemSuccess}`, {
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

globalStyle(`${materiaScope}${listGroupItemInfo}`, {
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

globalStyle(`${materiaScope}${listGroupItemWarning}`, {
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

globalStyle(`${materiaScope}${listGroupItemDanger}`, {
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

globalStyle(`${materiaScope}${listGroupItemLight}`, {
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

globalStyle(`${materiaScope}${listGroupItemDark}`, {
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

globalStyle(`${materiaScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.6',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
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
	borderRadius: '0.375rem',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${materiaScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${materiaScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${materiaScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${materiaScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${materiaScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${materiaScope}${toast}`, {
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
		[varBsToastHeaderBg]: `rgba(${varBsBodyBgRgb}, 0.85)`,
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
	borderRadius: varBsToastBorderRadius,
})

globalStyle(`${materiaScope}${toast}${showing}`, {
	opacity: '0',
})

globalStyle(`${materiaScope}${toast}:not(${show})`, {
	display: 'none',
})

globalStyle(`${materiaScope}${toastContainer}`, {
	vars: {
		[varBsToastZindex]: '1090',
	},
	position: 'absolute',
	zIndex: varBsToastZindex,
	width: 'max-content',
	maxWidth: '100%',
	pointerEvents: 'none',
})

globalStyle(`${materiaScope}${toastContainer} > :not(:last-child)`, {
	marginBottom: varBsToastSpacing,
})

globalStyle(`${materiaScope}${toastHeader}`, {
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

globalStyle(`${materiaScope}${toastHeader} ${materiaScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${materiaScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})

globalStyle(`${materiaScope}${modal}`, {
	vars: {
		[varBsModalZindex]: '1055',
		[varBsModalWidth]: '500px',
		[varBsModalPadding]: '1rem',
		[varBsModalMargin]: '0.5rem',
		[varBsModalColor]: varBsBodyColor,
		[varBsModalBg]: varBsBodyBg,
		[varBsModalBorderColor]: 'transparent',
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

globalStyle(`${materiaScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${materiaScope}${modal}${fade} ${materiaScope}${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${materiaScope}${modal}${fade} ${materiaScope}${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${modal}${show} ${materiaScope}${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${materiaScope}${modal}${modalStatic} ${materiaScope}${modalDialog}`, {
	transform: 'scale(1.02)',
})

globalStyle(`${materiaScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${materiaScope}${modalDialogScrollable} ${materiaScope}${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${materiaScope}${modalDialogScrollable} ${materiaScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${materiaScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${materiaScope}${modalContent}`, {
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

globalStyle(`${materiaScope}${modalBackdrop}`, {
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

globalStyle(`${materiaScope}${modalBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${materiaScope}${modalBackdrop}${show}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${materiaScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: '0',
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${materiaScope}${modalHeader} ${materiaScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${materiaScope}${modalTitle}`, {
	marginBottom: '0',
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${materiaScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${materiaScope}${modalFooter}`, {
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

globalStyle(`${materiaScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`${materiaScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${materiaScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${modalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalWidth]: '300px',
			},
		},
	},
})

globalStyle(`${materiaScope}${modalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${materiaScope}${modalXl}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${materiaScope}${modalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsModalWidth]: '1140px',
			},
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: '0',
})

globalStyle(`${materiaScope}${modalFullscreen} ${materiaScope}${modalContent}`, {
	height: '100%',
	border: '0',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${modalFullscreen} ${materiaScope}${modalHeader}`, {
	borderRadius: '0',
})

globalStyle(`${materiaScope}${modalFullscreen} ${materiaScope}${modalFooter}`, {
	borderRadius: '0',
})

globalStyle(`${materiaScope}${modalFullscreen} ${materiaScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${materiaScope}${modalFullscreenSmDown}`, {
	'@media': {
		'(max-width: 575.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenSmDown} ${materiaScope}${modalContent}`, {
	'@media': {
		'(max-width: 575.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenSmDown} ${materiaScope}${modalHeader}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenSmDown} ${materiaScope}${modalFooter}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenSmDown} ${materiaScope}${modalBody}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenMdDown}`, {
	'@media': {
		'(max-width: 767.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenMdDown} ${materiaScope}${modalContent}`, {
	'@media': {
		'(max-width: 767.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenMdDown} ${materiaScope}${modalHeader}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenMdDown} ${materiaScope}${modalFooter}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenMdDown} ${materiaScope}${modalBody}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenLgDown}`, {
	'@media': {
		'(max-width: 991.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenLgDown} ${materiaScope}${modalContent}`, {
	'@media': {
		'(max-width: 991.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenLgDown} ${materiaScope}${modalHeader}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenLgDown} ${materiaScope}${modalFooter}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenLgDown} ${materiaScope}${modalBody}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXlDown}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXlDown} ${materiaScope}${modalContent}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXlDown} ${materiaScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXlDown} ${materiaScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXlDown} ${materiaScope}${modalBody}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXxlDown}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXxlDown} ${materiaScope}${modalContent}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXxlDown} ${materiaScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXxlDown} ${materiaScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${modalFullscreenXxlDown} ${materiaScope}${modalBody}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${materiaScope}${tooltip}`, {
	vars: {
		[varBsTooltipZindex]: '1080',
		[varBsTooltipMaxWidth]: '200px',
		[varBsTooltipPaddingX]: '0.5rem',
		[varBsTooltipPaddingY]: '0.25rem',
		[varBsTooltipMargin]: '',
		[varBsTooltipFontSize]: '0.875rem',
		[varBsTooltipColor]: varBsBodyBg,
		[varBsTooltipBg]: '#444',
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

globalStyle(`${materiaScope}${tooltip}${show}`, {
	opacity: varBsTooltipOpacity,
})

globalStyle(`${materiaScope}${tooltip} ${materiaScope}${tooltipArrow}`, {
	display: 'block',
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

globalStyle(`${materiaScope}${tooltip} ${materiaScope}${tooltipArrow}::before`, {
	position: 'absolute',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
})

globalStyle(`${materiaScope}${bsTooltipTop} ${materiaScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=top] ${materiaScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${materiaScope}${bsTooltipTop} ${materiaScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=top] ${materiaScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipEnd} ${materiaScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=right] ${materiaScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${materiaScope}${bsTooltipEnd} ${materiaScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=right] ${materiaScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipBottom} ${materiaScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${materiaScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${materiaScope}${bsTooltipBottom} ${materiaScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${materiaScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipStart} ${materiaScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=left] ${materiaScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${materiaScope}${bsTooltipStart} ${materiaScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=left] ${materiaScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: 'center',
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})

globalStyle(`${materiaScope}${popover}`, {
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
		[varBsPopoverHeaderColor]: 'inherit',
		[varBsPopoverHeaderBg]: varBsSecondaryBg,
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

globalStyle(`${materiaScope}${popover} ${materiaScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${materiaScope}${popover} ${materiaScope}${popoverArrow}::before`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${materiaScope}${popover} ${materiaScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${materiaScope}${bsPopoverTop} > ${materiaScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=top] > ${materiaScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${materiaScope}${bsPopoverTop} > ${materiaScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=top] > ${materiaScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${materiaScope}${bsPopoverTop} > ${materiaScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=top] > ${materiaScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${materiaScope}${bsPopoverTop} > ${materiaScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=top] > ${materiaScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${materiaScope}${bsPopoverTop} > ${materiaScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=top] > ${materiaScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${materiaScope}${bsPopoverEnd} > ${materiaScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=right] > ${materiaScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${materiaScope}${bsPopoverEnd} > ${materiaScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=right] > ${materiaScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${materiaScope}${bsPopoverEnd} > ${materiaScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=right] > ${materiaScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${materiaScope}${bsPopoverEnd} > ${materiaScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=right] > ${materiaScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${materiaScope}${bsPopoverEnd} > ${materiaScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=right] > ${materiaScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${materiaScope}${bsPopoverBottom} > ${materiaScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${materiaScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${materiaScope}${bsPopoverBottom} > ${materiaScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${materiaScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${materiaScope}${bsPopoverBottom} > ${materiaScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${materiaScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${materiaScope}${bsPopoverBottom} > ${materiaScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${materiaScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${materiaScope}${bsPopoverBottom} > ${materiaScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${materiaScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${materiaScope}${bsPopoverBottom} ${materiaScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=bottom] ${materiaScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${materiaScope}${bsPopoverStart} > ${materiaScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=left] > ${materiaScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${materiaScope}${bsPopoverStart} > ${materiaScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=left] > ${materiaScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${materiaScope}${bsPopoverStart} > ${materiaScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=left] > ${materiaScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${materiaScope}${bsPopoverStart} > ${materiaScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=left] > ${materiaScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${materiaScope}${bsPopoverStart} > ${materiaScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${materiaScope}${bsPopoverAuto}[data-popper-placement^=left] > ${materiaScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${materiaScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${materiaScope}${popoverHeader}:empty`, {
	display: 'none',
})

globalStyle(`${materiaScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

globalStyle(`${materiaScope}${carousel}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${carousel}${pointerEvent}`, {
	touchAction: 'pan-y',
})

globalStyle(`${materiaScope}${carouselInner}`, {
	position: 'relative',
	width: '100%',
	overflow: 'hidden',
})

globalStyle(`${materiaScope}${carouselInner}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${materiaScope}${carouselItem}`, {
	position: 'relative',
	display: 'none',
	float: 'left',
	width: '100%',
	marginRight: '-100%',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
	transition: 'transform 0.6s ease-in-out',
})

globalStyle(`${materiaScope}${carouselItem}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${carouselItemNext}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${carouselItemPrev}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${carouselItemNext}:not(${carouselItemStart})`, {
	transform: 'translateX(100%)',
})

globalStyle(`${materiaScope}${active}${carouselItemEnd}`, {
	transform: 'translateX(100%)',
})

globalStyle(`${materiaScope}${carouselItemPrev}:not(${carouselItemEnd})`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${materiaScope}${active}${carouselItemStart}`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${carouselItem}`, {
	opacity: '0',
	transitionProperty: 'opacity',
	transform: 'none',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${carouselItemNext}${carouselItemStart}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${carouselItemPrev}${carouselItemEnd}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${active}${carouselItemStart}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${active}${carouselItemEnd}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${active}${carouselItemStart}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselFade} ${materiaScope}${active}${carouselItemEnd}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselControlPrev}`, {
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

globalStyle(`${materiaScope}${carouselControlNext}`, {
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

globalStyle(`${materiaScope}${carouselControlPrev}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselControlNext}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselControlPrev}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${materiaScope}${carouselControlPrev}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${materiaScope}${carouselControlNext}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${materiaScope}${carouselControlNext}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${materiaScope}${carouselControlPrev}`, {
	left: '0',
	backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.001))',
})

globalStyle(`${materiaScope}${carouselControlNext}`, {
	right: '0',
	backgroundImage: 'linear-gradient(270deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.001))',
})

globalStyle(`${materiaScope}${carouselControlPrevIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${materiaScope}${carouselControlNextIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${materiaScope}${carouselControlPrevIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0\'/%3e%3c/svg%3e") ',
})

globalStyle(`${materiaScope}${carouselControlNextIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e") ',
})

globalStyle(`${materiaScope}${carouselIndicators}`, {
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

globalStyle(`${materiaScope}${carouselIndicators} [data-bs-target]`, {
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

globalStyle(`${materiaScope}${carouselIndicators} [data-bs-target]`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${carouselIndicators} ${materiaScope}${active}`, {
	opacity: '1',
})

globalStyle(`${materiaScope}${carouselCaption}`, {
	position: 'absolute',
	right: '15%',
	bottom: '1.25rem',
	left: '15%',
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	color: varBsCarouselCaptionColor,
	textAlign: 'center',
})

globalStyle(`${materiaScope}${carouselDark}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
	},
})

globalStyle(`${materiaScope}${spinnerGrow}`, {
	display: 'inline-block',
	flexShrink: '0',
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: '50%',
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
})

globalStyle(`${materiaScope}${spinnerBorder}`, {
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

globalStyle(`${materiaScope}${spinnerBorder}`, {
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

globalStyle(`${materiaScope}${spinnerBorderSm}`, {
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

globalStyle(`${materiaScope}${spinnerGrow}`, {
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

globalStyle(`${materiaScope}${spinnerGrowSm}`, {
	vars: {
		[varBsSpinnerWidth]: '1rem',
		[varBsSpinnerHeight]: '1rem',
	},
})

globalStyle(`${materiaScope}${spinnerBorder}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

globalStyle(`${materiaScope}${spinnerGrow}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

globalStyle(`${materiaScope}${offcanvas}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: 'transparent',
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${materiaScope}${offcanvasXxl}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: 'transparent',
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${materiaScope}${offcanvasXl}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: 'transparent',
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${materiaScope}${offcanvasLg}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: 'transparent',
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${materiaScope}${offcanvasMd}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: 'transparent',
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${materiaScope}${offcanvasSm}`, {
	vars: {
		[varBsOffcanvasZindex]: '1045',
		[varBsOffcanvasWidth]: '400px',
		[varBsOffcanvasHeight]: '30vh',
		[varBsOffcanvasPaddingX]: '1rem',
		[varBsOffcanvasPaddingY]: '1rem',
		[varBsOffcanvasColor]: varBsBodyColor,
		[varBsOffcanvasBg]: varBsBodyBg,
		[varBsOffcanvasBorderWidth]: varBsBorderWidth,
		[varBsOffcanvasBorderColor]: 'transparent',
		[varBsOffcanvasBoxShadow]: varBsBoxShadowSm,
		[varBsOffcanvasTransition]: 'transform 0.3s ease-in-out',
		[varBsOffcanvasTitleLineHeight]: '1.5',
	},
})

globalStyle(`${materiaScope}${offcanvasSm}`, {
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

globalStyle(`${materiaScope}${offcanvasSm}`, {
	'@media': {
		'(max-width: 575.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasSm}${offcanvasStart}`, {
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

globalStyle(`${materiaScope}${offcanvasSm}${offcanvasEnd}`, {
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

globalStyle(`${materiaScope}${offcanvasSm}${offcanvasTop}`, {
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

globalStyle(`${materiaScope}${offcanvasSm}${offcanvasBottom}`, {
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

globalStyle(`${materiaScope}${offcanvasSm}${showing}`, {
	'@media': {
		'(max-width: 575.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasSm}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 575.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasSm}${showing}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasSm}${hiding}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasSm}`, {
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

globalStyle(`${materiaScope}${offcanvasSm} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasSm} ${materiaScope}${offcanvasBody}`, {
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

globalStyle(`${materiaScope}${offcanvasMd}`, {
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

globalStyle(`${materiaScope}${offcanvasMd}`, {
	'@media': {
		'(max-width: 767.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasMd}${offcanvasStart}`, {
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

globalStyle(`${materiaScope}${offcanvasMd}${offcanvasEnd}`, {
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

globalStyle(`${materiaScope}${offcanvasMd}${offcanvasTop}`, {
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

globalStyle(`${materiaScope}${offcanvasMd}${offcanvasBottom}`, {
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

globalStyle(`${materiaScope}${offcanvasMd}${showing}`, {
	'@media': {
		'(max-width: 767.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasMd}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 767.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasMd}${showing}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasMd}${hiding}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasMd}`, {
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

globalStyle(`${materiaScope}${offcanvasMd} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasMd} ${materiaScope}${offcanvasBody}`, {
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

globalStyle(`${materiaScope}${offcanvasLg}`, {
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

globalStyle(`${materiaScope}${offcanvasLg}`, {
	'@media': {
		'(max-width: 991.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasLg}${offcanvasStart}`, {
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

globalStyle(`${materiaScope}${offcanvasLg}${offcanvasEnd}`, {
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

globalStyle(`${materiaScope}${offcanvasLg}${offcanvasTop}`, {
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

globalStyle(`${materiaScope}${offcanvasLg}${offcanvasBottom}`, {
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

globalStyle(`${materiaScope}${offcanvasLg}${showing}`, {
	'@media': {
		'(max-width: 991.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasLg}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 991.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasLg}${showing}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasLg}${hiding}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasLg}`, {
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

globalStyle(`${materiaScope}${offcanvasLg} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasLg} ${materiaScope}${offcanvasBody}`, {
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

globalStyle(`${materiaScope}${offcanvasXl}`, {
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

globalStyle(`${materiaScope}${offcanvasXl}`, {
	'@media': {
		'(max-width: 1199.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXl}${offcanvasStart}`, {
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

globalStyle(`${materiaScope}${offcanvasXl}${offcanvasEnd}`, {
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

globalStyle(`${materiaScope}${offcanvasXl}${offcanvasTop}`, {
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

globalStyle(`${materiaScope}${offcanvasXl}${offcanvasBottom}`, {
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

globalStyle(`${materiaScope}${offcanvasXl}${showing}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXl}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 1199.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXl}${showing}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXl}${hiding}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXl}`, {
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

globalStyle(`${materiaScope}${offcanvasXl} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXl} ${materiaScope}${offcanvasBody}`, {
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

globalStyle(`${materiaScope}${offcanvasXxl}`, {
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

globalStyle(`${materiaScope}${offcanvasXxl}`, {
	'@media': {
		'(max-width: 1399.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXxl}${offcanvasStart}`, {
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

globalStyle(`${materiaScope}${offcanvasXxl}${offcanvasEnd}`, {
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

globalStyle(`${materiaScope}${offcanvasXxl}${offcanvasTop}`, {
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

globalStyle(`${materiaScope}${offcanvasXxl}${offcanvasBottom}`, {
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

globalStyle(`${materiaScope}${offcanvasXxl}${showing}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXxl}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 1399.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXxl}${showing}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXxl}${hiding}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXxl}`, {
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

globalStyle(`${materiaScope}${offcanvasXxl} ${materiaScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvasXxl} ${materiaScope}${offcanvasBody}`, {
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

globalStyle(`${materiaScope}${offcanvas}`, {
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

globalStyle(`${materiaScope}${offcanvas}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${offcanvas}${offcanvasStart}`, {
	top: '0',
	left: '0',
	width: varBsOffcanvasWidth,
	borderRight: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateX(-100%)',
})

globalStyle(`${materiaScope}${offcanvas}${offcanvasEnd}`, {
	top: '0',
	right: '0',
	width: varBsOffcanvasWidth,
	borderLeft: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateX(100%)',
})

globalStyle(`${materiaScope}${offcanvas}${offcanvasTop}`, {
	top: '0',
	right: '0',
	left: '0',
	height: varBsOffcanvasHeight,
	maxHeight: '100%',
	borderBottom: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateY(-100%)',
})

globalStyle(`${materiaScope}${offcanvas}${offcanvasBottom}`, {
	right: '0',
	left: '0',
	height: varBsOffcanvasHeight,
	maxHeight: '100%',
	borderTop: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateY(100%)',
})

globalStyle(`${materiaScope}${offcanvas}${showing}`, {
	transform: 'none',
})

globalStyle(`${materiaScope}${offcanvas}${show}:not(${hiding})`, {
	transform: 'none',
})

globalStyle(`${materiaScope}${offcanvas}${showing}`, {
	visibility: 'visible',
})

globalStyle(`${materiaScope}${offcanvas}${hiding}`, {
	visibility: 'visible',
})

globalStyle(`${materiaScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${materiaScope}${offcanvasBackdrop}`, {
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: '1040',
	width: '100vw',
	height: '100vh',
	backgroundColor: '#000',
})

globalStyle(`${materiaScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${materiaScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})

globalStyle(`${materiaScope}${offcanvasHeader}`, {
	display: 'flex',
	alignItems: 'center',
	padding: `${varBsOffcanvasPaddingY} ${varBsOffcanvasPaddingX}`,
})

globalStyle(`${materiaScope}${offcanvasHeader} ${materiaScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${materiaScope}${offcanvasTitle}`, {
	marginBottom: '0',
	lineHeight: varBsOffcanvasTitleLineHeight,
})

globalStyle(`${materiaScope}${offcanvasBody}`, {
	flexGrow: '1',
	padding: `${varBsOffcanvasPaddingY} ${varBsOffcanvasPaddingX}`,
	overflowY: 'auto',
})

globalStyle(`${materiaScope}${placeholder}`, {
	display: 'inline-block',
	minHeight: '1em',
	verticalAlign: 'middle',
	cursor: 'wait',
	backgroundColor: 'currentcolor',
	opacity: '0.5',
})

globalStyle(`${materiaScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${materiaScope}${placeholderXs}`, {
	minHeight: '0.6em',
})

globalStyle(`${materiaScope}${placeholderSm}`, {
	minHeight: '0.8em',
})

globalStyle(`${materiaScope}${placeholderLg}`, {
	minHeight: '1.2em',
})

globalStyle(`${materiaScope}${placeholderGlow} ${materiaScope}${placeholder}`, {
	animation: 'placeholder-glow 2s ease-in-out infinite',
})

globalKeyframes('placeholder-glow', {
	'50%': {
		opacity: '0.2',
	},
})

globalStyle(`${materiaScope}${placeholderWave}`, {
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

globalStyle(`${materiaScope}${clearfix}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${materiaScope}${textBgPrimary}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${textBgSecondary}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${textBgSuccess}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${textBgInfo}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${textBgWarning}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${textBgDanger}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${textBgLight}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${textBgDark}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkPrimary}`, {
	color: `RGBA(${varBsPrimaryRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkPrimary}:hover`, {
	color: `RGBA(26, 120, 194, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(26, 120, 194, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(26, 120, 194, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkPrimary}:focus`, {
	color: `RGBA(26, 120, 194, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(26, 120, 194, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(26, 120, 194, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkSecondary}`, {
	color: `RGBA(${varBsSecondaryRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkSecondary}:hover`, {
	color: `RGBA(255, 255, 255, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkSecondary}:focus`, {
	color: `RGBA(255, 255, 255, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkSuccess}`, {
	color: `RGBA(${varBsSuccessRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkSuccess}:hover`, {
	color: `RGBA(61, 140, 64, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(61, 140, 64, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(61, 140, 64, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkSuccess}:focus`, {
	color: `RGBA(61, 140, 64, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(61, 140, 64, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(61, 140, 64, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkInfo}`, {
	color: `RGBA(${varBsInfoRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkInfo}:hover`, {
	color: `RGBA(125, 31, 141, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(125, 31, 141, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(125, 31, 141, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkInfo}:focus`, {
	color: `RGBA(125, 31, 141, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(125, 31, 141, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(125, 31, 141, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkWarning}`, {
	color: `RGBA(${varBsWarningRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkWarning}:hover`, {
	color: `RGBA(204, 122, 0, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(204, 122, 0, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(204, 122, 0, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkWarning}:focus`, {
	color: `RGBA(204, 122, 0, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(204, 122, 0, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(204, 122, 0, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkDanger}`, {
	color: `RGBA(${varBsDangerRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkDanger}:hover`, {
	color: `RGBA(183, 22, 28, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(183, 22, 28, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(183, 22, 28, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkDanger}:focus`, {
	color: `RGBA(183, 22, 28, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(183, 22, 28, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(183, 22, 28, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkLight}`, {
	color: `RGBA(${varBsLightRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkLight}:hover`, {
	color: `RGBA(249, 250, 251, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(249, 250, 251, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(249, 250, 251, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkLight}:focus`, {
	color: `RGBA(249, 250, 251, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(249, 250, 251, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(249, 250, 251, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkDark}`, {
	color: `RGBA(${varBsDarkRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkDark}:hover`, {
	color: `RGBA(27, 27, 27, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(27, 27, 27, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(27, 27, 27, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkDark}:focus`, {
	color: `RGBA(27, 27, 27, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(27, 27, 27, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(27, 27, 27, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkBodyEmphasis}`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkBodyEmphasis}:hover`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkBodyEmphasis}:focus`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkOpacity}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${focusRing}:focus`, {
	outline: '0',
	boxShadow: `var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) ${varBsFocusRingWidth} ${varBsFocusRingColor}`,
})

globalStyle(`${materiaScope}${iconLink}`, {
	display: 'inline-flex',
	gap: '0.375rem',
	alignItems: 'center',
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${varBsLinkOpacity})`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${varBsLinkOpacity})`,
	textUnderlineOffset: '0.25em',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
})

globalStyle(`${materiaScope}${iconLink} > ${materiaScope}${bi}`, {
	flexShrink: '0',
	width: '1em',
	height: '1em',
	fill: 'currentcolor',
	transition: '0.2s ease-in-out transform',
})

globalStyle(`${materiaScope}${iconLink} > ${materiaScope}${bi}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${iconLinkHover}:hover > ${materiaScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${materiaScope}${iconLinkHover}:focus-visible > ${materiaScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${materiaScope}${ratio}`, {
	position: 'relative',
	width: '100%',
})

globalStyle(`${materiaScope}${ratio}::before`, {
	display: 'block',
	paddingTop: varBsAspectRatio,
	content: '""',
})

globalStyle(`${materiaScope}${ratio} > *`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
})

globalStyle(`${materiaScope}${ratio1x1}`, {
	vars: {
		[varBsAspectRatio]: '100%',
	},
})

globalStyle(`${materiaScope}${ratio4x3}`, {
	vars: {
		[varBsAspectRatio]: '75%',
	},
})

globalStyle(`${materiaScope}${ratio16x9}`, {
	vars: {
		[varBsAspectRatio]: '56.25%',
	},
})

globalStyle(`${materiaScope}${ratio21x9}`, {
	vars: {
		[varBsAspectRatio]: '42.8571428571%',
	},
})

globalStyle(`${materiaScope}${fixedTop}`, {
	position: 'fixed',
	top: '0',
	right: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${materiaScope}${fixedBottom}`, {
	position: 'fixed',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${materiaScope}${stickyTop}`, {
	position: 'sticky',
	top: '0',
	zIndex: '1020',
})

globalStyle(`${materiaScope}${stickyBottom}`, {
	position: 'sticky',
	bottom: '0',
	zIndex: '1020',
})

globalStyle(`${materiaScope}${stickySmTop}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${stickySmBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${stickyMdTop}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${stickyMdBottom}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${stickyLgTop}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${stickyLgBottom}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${stickyXlBottom}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${stickyXxlTop}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${stickyXxlBottom}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${materiaScope}${hstack}`, {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	alignSelf: 'stretch',
})

globalStyle(`${materiaScope}${vstack}`, {
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	alignSelf: 'stretch',
})

globalStyle(`${materiaScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${materiaScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within)`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${materiaScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${materiaScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within):not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${materiaScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${materiaScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within) *`, {
	overflow: 'hidden !important',
})

globalStyle(`${materiaScope}${stretchedLink}::after`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1',
	content: '""',
})

globalStyle(`${materiaScope}${textTruncate}`, {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

globalStyle(`${materiaScope}${vr}`, {
	display: 'inline-block',
	alignSelf: 'stretch',
	width: varBsBorderWidth,
	minHeight: '1em',
	backgroundColor: 'currentcolor',
	opacity: '0.25',
})

globalStyle(`${materiaScope}${alignBaseline}`, {
	verticalAlign: 'baseline !important',
})

globalStyle(`${materiaScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${materiaScope}${alignMiddle}`, {
	verticalAlign: 'middle !important',
})

globalStyle(`${materiaScope}${alignBottom}`, {
	verticalAlign: 'bottom !important',
})

globalStyle(`${materiaScope}${alignTextBottom}`, {
	verticalAlign: 'text-bottom !important',
})

globalStyle(`${materiaScope}${alignTextTop}`, {
	verticalAlign: 'text-top !important',
})

globalStyle(`${materiaScope}${floatStart}`, {
	float: 'left !important',
})

globalStyle(`${materiaScope}${floatEnd}`, {
	float: 'right !important',
})

globalStyle(`${materiaScope}${floatNone}`, {
	float: 'none !important',
})

globalStyle(`${materiaScope}${objectFitContain}`, {
	OObjectFit: 'contain !important',
	objectFit: 'contain !important',
})

globalStyle(`${materiaScope}${objectFitCover}`, {
	OObjectFit: 'cover !important',
	objectFit: 'cover !important',
})

globalStyle(`${materiaScope}${objectFitFill}`, {
	OObjectFit: 'fill !important',
	objectFit: 'fill !important',
})

globalStyle(`${materiaScope}${objectFitScale}`, {
	OObjectFit: 'scale-down !important',
	objectFit: 'scale-down !important',
})

globalStyle(`${materiaScope}${objectFitNone}`, {
	OObjectFit: 'none !important',
	objectFit: 'none !important',
})

globalStyle(`${materiaScope}${opacity0}`, {
	opacity: '0 !important',
})

globalStyle(`${materiaScope}${opacity25}`, {
	opacity: '0.25 !important',
})

globalStyle(`${materiaScope}${opacity50}`, {
	opacity: '0.5 !important',
})

globalStyle(`${materiaScope}${opacity75}`, {
	opacity: '0.75 !important',
})

globalStyle(`${materiaScope}${opacity100}`, {
	opacity: '1 !important',
})

globalStyle(`${materiaScope}${overflowAuto}`, {
	overflow: 'auto !important',
})

globalStyle(`${materiaScope}${overflowHidden}`, {
	overflow: 'hidden !important',
})

globalStyle(`${materiaScope}${overflowVisible}`, {
	overflow: 'visible !important',
})

globalStyle(`${materiaScope}${overflowScroll}`, {
	overflow: 'scroll !important',
})

globalStyle(`${materiaScope}${overflowXAuto}`, {
	overflowX: 'auto !important',
})

globalStyle(`${materiaScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${materiaScope}${overflowXVisible}`, {
	overflowX: 'visible !important',
})

globalStyle(`${materiaScope}${overflowXScroll}`, {
	overflowX: 'scroll !important',
})

globalStyle(`${materiaScope}${overflowYAuto}`, {
	overflowY: 'auto !important',
})

globalStyle(`${materiaScope}${overflowYHidden}`, {
	overflowY: 'hidden !important',
})

globalStyle(`${materiaScope}${overflowYVisible}`, {
	overflowY: 'visible !important',
})

globalStyle(`${materiaScope}${overflowYScroll}`, {
	overflowY: 'scroll !important',
})

globalStyle(`${materiaScope}${dInline}`, {
	display: 'inline !important',
})

globalStyle(`${materiaScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${materiaScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${materiaScope}${dGrid}`, {
	display: 'grid !important',
})

globalStyle(`${materiaScope}${dInlineGrid}`, {
	display: 'inline-grid !important',
})

globalStyle(`${materiaScope}${dTable}`, {
	display: 'table !important',
})

globalStyle(`${materiaScope}${dTableRow}`, {
	display: 'table-row !important',
})

globalStyle(`${materiaScope}${dTableCell}`, {
	display: 'table-cell !important',
})

globalStyle(`${materiaScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${materiaScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${materiaScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${materiaScope}${shadow}`, {
	boxShadow: `${varBsBoxShadow} !important`,
})

globalStyle(`${materiaScope}${shadowSm}`, {
	boxShadow: `${varBsBoxShadowSm} !important`,
})

globalStyle(`${materiaScope}${shadowLg}`, {
	boxShadow: `${varBsBoxShadowLg} !important`,
})

globalStyle(`${materiaScope}${shadowNone}`, {
	boxShadow: 'none !important',
})

globalStyle(`${materiaScope}${focusRingPrimary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsPrimaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${materiaScope}${focusRingSecondary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSecondaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${materiaScope}${focusRingSuccess}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSuccessRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${materiaScope}${focusRingInfo}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsInfoRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${materiaScope}${focusRingWarning}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsWarningRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${materiaScope}${focusRingDanger}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDangerRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${materiaScope}${focusRingLight}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsLightRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${materiaScope}${focusRingDark}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDarkRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${materiaScope}${positionStatic}`, {
	position: 'static !important',
})

globalStyle(`${materiaScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${materiaScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${materiaScope}${positionFixed}`, {
	position: 'fixed !important',
})

globalStyle(`${materiaScope}${positionSticky}`, {
	position: 'sticky !important',
})

globalStyle(`${materiaScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${materiaScope}${top50}`, {
	top: '50% !important',
})

globalStyle(`${materiaScope}${top100}`, {
	top: '100% !important',
})

globalStyle(`${materiaScope}${bottom0}`, {
	bottom: '0 !important',
})

globalStyle(`${materiaScope}${bottom50}`, {
	bottom: '50% !important',
})

globalStyle(`${materiaScope}${bottom100}`, {
	bottom: '100% !important',
})

globalStyle(`${materiaScope}${start0}`, {
	left: '0 !important',
})

globalStyle(`${materiaScope}${start50}`, {
	left: '50% !important',
})

globalStyle(`${materiaScope}${start100}`, {
	left: '100% !important',
})

globalStyle(`${materiaScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${materiaScope}${end50}`, {
	right: '50% !important',
})

globalStyle(`${materiaScope}${end100}`, {
	right: '100% !important',
})

globalStyle(`${materiaScope}${translateMiddle}`, {
	transform: 'translate(-50%, -50%) !important',
})

globalStyle(`${materiaScope}${translateMiddleX}`, {
	transform: 'translateX(-50%) !important',
})

globalStyle(`${materiaScope}${translateMiddleY}`, {
	transform: 'translateY(-50%) !important',
})

globalStyle(`${materiaScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${materiaScope}${border0}`, {
	border: '0 !important',
})

globalStyle(`${materiaScope}${borderTop}`, {
	borderTop: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${materiaScope}${borderTop0}`, {
	borderTop: '0 !important',
})

globalStyle(`${materiaScope}${borderEnd}`, {
	borderRight: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${materiaScope}${borderEnd0}`, {
	borderRight: '0 !important',
})

globalStyle(`${materiaScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${materiaScope}${borderBottom0}`, {
	borderBottom: '0 !important',
})

globalStyle(`${materiaScope}${borderStart}`, {
	borderLeft: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${materiaScope}${borderStart0}`, {
	borderLeft: '0 !important',
})

globalStyle(`${materiaScope}${borderPrimary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsPrimaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderSecondary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSecondaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderSuccess}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSuccessRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderInfo}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsInfoRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderWarning}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWarningRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderDanger}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDangerRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderLight}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsLightRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderBlack}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsBlackRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderWhite}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWhiteRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${materiaScope}${borderPrimarySubtle}`, {
	borderColor: `${varBsPrimaryBorderSubtle} !important`,
})

globalStyle(`${materiaScope}${borderSecondarySubtle}`, {
	borderColor: `${varBsSecondaryBorderSubtle} !important`,
})

globalStyle(`${materiaScope}${borderSuccessSubtle}`, {
	borderColor: `${varBsSuccessBorderSubtle} !important`,
})

globalStyle(`${materiaScope}${borderInfoSubtle}`, {
	borderColor: `${varBsInfoBorderSubtle} !important`,
})

globalStyle(`${materiaScope}${borderWarningSubtle}`, {
	borderColor: `${varBsWarningBorderSubtle} !important`,
})

globalStyle(`${materiaScope}${borderDangerSubtle}`, {
	borderColor: `${varBsDangerBorderSubtle} !important`,
})

globalStyle(`${materiaScope}${borderLightSubtle}`, {
	borderColor: `${varBsLightBorderSubtle} !important`,
})

globalStyle(`${materiaScope}${borderDarkSubtle}`, {
	borderColor: `${varBsDarkBorderSubtle} !important`,
})

globalStyle(`${materiaScope}${border1}`, {
	borderWidth: '1px !important',
})

globalStyle(`${materiaScope}${border2}`, {
	borderWidth: '2px !important',
})

globalStyle(`${materiaScope}${border3}`, {
	borderWidth: '3px !important',
})

globalStyle(`${materiaScope}${border4}`, {
	borderWidth: '4px !important',
})

globalStyle(`${materiaScope}${border5}`, {
	borderWidth: '5px !important',
})

globalStyle(`${materiaScope}${borderOpacity10}`, {
	vars: {
		[varBsBorderOpacity]: '0.1',
	},
})

globalStyle(`${materiaScope}${borderOpacity25}`, {
	vars: {
		[varBsBorderOpacity]: '0.25',
	},
})

globalStyle(`${materiaScope}${borderOpacity50}`, {
	vars: {
		[varBsBorderOpacity]: '0.5',
	},
})

globalStyle(`${materiaScope}${borderOpacity75}`, {
	vars: {
		[varBsBorderOpacity]: '0.75',
	},
})

globalStyle(`${materiaScope}${borderOpacity100}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
})

globalStyle(`${materiaScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${materiaScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${materiaScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${materiaScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${materiaScope}${wAuto}`, {
	width: 'auto !important',
})

globalStyle(`${materiaScope}${mw100}`, {
	maxWidth: '100% !important',
})

globalStyle(`${materiaScope}${vw100}`, {
	width: '100vw !important',
})

globalStyle(`${materiaScope}${minVw100}`, {
	minWidth: '100vw !important',
})

globalStyle(`${materiaScope}${h25}`, {
	height: '25% !important',
})

globalStyle(`${materiaScope}${h50}`, {
	height: '50% !important',
})

globalStyle(`${materiaScope}${h75}`, {
	height: '75% !important',
})

globalStyle(`${materiaScope}${h100}`, {
	height: '100% !important',
})

globalStyle(`${materiaScope}${hAuto}`, {
	height: 'auto !important',
})

globalStyle(`${materiaScope}${mh100}`, {
	maxHeight: '100% !important',
})

globalStyle(`${materiaScope}${vh100}`, {
	height: '100vh !important',
})

globalStyle(`${materiaScope}${minVh100}`, {
	minHeight: '100vh !important',
})

globalStyle(`${materiaScope}${flexFill}`, {
	flex: '1 1 auto !important',
})

globalStyle(`${materiaScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${materiaScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${materiaScope}${flexRowReverse}`, {
	flexDirection: 'row-reverse !important',
})

globalStyle(`${materiaScope}${flexColumnReverse}`, {
	flexDirection: 'column-reverse !important',
})

globalStyle(`${materiaScope}${flexGrow0}`, {
	flexGrow: '0 !important',
})

globalStyle(`${materiaScope}${flexGrow1}`, {
	flexGrow: '1 !important',
})

globalStyle(`${materiaScope}${flexShrink0}`, {
	flexShrink: '0 !important',
})

globalStyle(`${materiaScope}${flexShrink1}`, {
	flexShrink: '1 !important',
})

globalStyle(`${materiaScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${materiaScope}${flexNowrap}`, {
	flexWrap: 'nowrap !important',
})

globalStyle(`${materiaScope}${flexWrapReverse}`, {
	flexWrap: 'wrap-reverse !important',
})

globalStyle(`${materiaScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${materiaScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${materiaScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${materiaScope}${justifyContentBetween}`, {
	justifyContent: 'space-between !important',
})

globalStyle(`${materiaScope}${justifyContentAround}`, {
	justifyContent: 'space-around !important',
})

globalStyle(`${materiaScope}${justifyContentEvenly}`, {
	justifyContent: 'space-evenly !important',
})

globalStyle(`${materiaScope}${alignItemsStart}`, {
	alignItems: 'flex-start !important',
})

globalStyle(`${materiaScope}${alignItemsEnd}`, {
	alignItems: 'flex-end !important',
})

globalStyle(`${materiaScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${materiaScope}${alignItemsBaseline}`, {
	alignItems: 'baseline !important',
})

globalStyle(`${materiaScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${materiaScope}${alignContentStart}`, {
	alignContent: 'flex-start !important',
})

globalStyle(`${materiaScope}${alignContentEnd}`, {
	alignContent: 'flex-end !important',
})

globalStyle(`${materiaScope}${alignContentCenter}`, {
	alignContent: 'center !important',
})

globalStyle(`${materiaScope}${alignContentBetween}`, {
	alignContent: 'space-between !important',
})

globalStyle(`${materiaScope}${alignContentAround}`, {
	alignContent: 'space-around !important',
})

globalStyle(`${materiaScope}${alignContentStretch}`, {
	alignContent: 'stretch !important',
})

globalStyle(`${materiaScope}${alignSelfAuto}`, {
	alignSelf: 'auto !important',
})

globalStyle(`${materiaScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${materiaScope}${alignSelfEnd}`, {
	alignSelf: 'flex-end !important',
})

globalStyle(`${materiaScope}${alignSelfCenter}`, {
	alignSelf: 'center !important',
})

globalStyle(`${materiaScope}${alignSelfBaseline}`, {
	alignSelf: 'baseline !important',
})

globalStyle(`${materiaScope}${alignSelfStretch}`, {
	alignSelf: 'stretch !important',
})

globalStyle(`${materiaScope}${orderFirst}`, {
	order: '-1 !important',
})

globalStyle(`${materiaScope}${order0}`, {
	order: '0 !important',
})

globalStyle(`${materiaScope}${order1}`, {
	order: '1 !important',
})

globalStyle(`${materiaScope}${order2}`, {
	order: '2 !important',
})

globalStyle(`${materiaScope}${order3}`, {
	order: '3 !important',
})

globalStyle(`${materiaScope}${order4}`, {
	order: '4 !important',
})

globalStyle(`${materiaScope}${order5}`, {
	order: '5 !important',
})

globalStyle(`${materiaScope}${orderLast}`, {
	order: '6 !important',
})

globalStyle(`${materiaScope}${m0}`, {
	margin: '0 !important',
})

globalStyle(`${materiaScope}${m1}`, {
	margin: '0.25rem !important',
})

globalStyle(`${materiaScope}${m2}`, {
	margin: '0.5rem !important',
})

globalStyle(`${materiaScope}${m3}`, {
	margin: '1rem !important',
})

globalStyle(`${materiaScope}${m4}`, {
	margin: '1.5rem !important',
})

globalStyle(`${materiaScope}${m5}`, {
	margin: '3rem !important',
})

globalStyle(`${materiaScope}${mAuto}`, {
	margin: 'auto !important',
})

globalStyle(`${materiaScope}${mx0}`, {
	marginRight: '0 !important',
	marginLeft: '0 !important',
})

globalStyle(`${materiaScope}${mx1}`, {
	marginRight: '0.25rem !important',
	marginLeft: '0.25rem !important',
})

globalStyle(`${materiaScope}${mx2}`, {
	marginRight: '0.5rem !important',
	marginLeft: '0.5rem !important',
})

globalStyle(`${materiaScope}${mx3}`, {
	marginRight: '1rem !important',
	marginLeft: '1rem !important',
})

globalStyle(`${materiaScope}${mx4}`, {
	marginRight: '1.5rem !important',
	marginLeft: '1.5rem !important',
})

globalStyle(`${materiaScope}${mx5}`, {
	marginRight: '3rem !important',
	marginLeft: '3rem !important',
})

globalStyle(`${materiaScope}${mxAuto}`, {
	marginRight: 'auto !important',
	marginLeft: 'auto !important',
})

globalStyle(`${materiaScope}${my0}`, {
	marginTop: '0 !important',
	marginBottom: '0 !important',
})

globalStyle(`${materiaScope}${my1}`, {
	marginTop: '0.25rem !important',
	marginBottom: '0.25rem !important',
})

globalStyle(`${materiaScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${materiaScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${materiaScope}${my4}`, {
	marginTop: '1.5rem !important',
	marginBottom: '1.5rem !important',
})

globalStyle(`${materiaScope}${my5}`, {
	marginTop: '3rem !important',
	marginBottom: '3rem !important',
})

globalStyle(`${materiaScope}${myAuto}`, {
	marginTop: 'auto !important',
	marginBottom: 'auto !important',
})

globalStyle(`${materiaScope}${mt0}`, {
	marginTop: '0 !important',
})

globalStyle(`${materiaScope}${mt1}`, {
	marginTop: '0.25rem !important',
})

globalStyle(`${materiaScope}${mt2}`, {
	marginTop: '0.5rem !important',
})

globalStyle(`${materiaScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${materiaScope}${mt4}`, {
	marginTop: '1.5rem !important',
})

globalStyle(`${materiaScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${materiaScope}${mtAuto}`, {
	marginTop: 'auto !important',
})

globalStyle(`${materiaScope}${me0}`, {
	marginRight: '0 !important',
})

globalStyle(`${materiaScope}${me1}`, {
	marginRight: '0.25rem !important',
})

globalStyle(`${materiaScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${materiaScope}${me3}`, {
	marginRight: '1rem !important',
})

globalStyle(`${materiaScope}${me4}`, {
	marginRight: '1.5rem !important',
})

globalStyle(`${materiaScope}${me5}`, {
	marginRight: '3rem !important',
})

globalStyle(`${materiaScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${materiaScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${materiaScope}${mb1}`, {
	marginBottom: '0.25rem !important',
})

globalStyle(`${materiaScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${materiaScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${materiaScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${materiaScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${materiaScope}${mbAuto}`, {
	marginBottom: 'auto !important',
})

globalStyle(`${materiaScope}${ms0}`, {
	marginLeft: '0 !important',
})

globalStyle(`${materiaScope}${ms1}`, {
	marginLeft: '0.25rem !important',
})

globalStyle(`${materiaScope}${ms2}`, {
	marginLeft: '0.5rem !important',
})

globalStyle(`${materiaScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${materiaScope}${ms4}`, {
	marginLeft: '1.5rem !important',
})

globalStyle(`${materiaScope}${ms5}`, {
	marginLeft: '3rem !important',
})

globalStyle(`${materiaScope}${msAuto}`, {
	marginLeft: 'auto !important',
})

globalStyle(`${materiaScope}${p0}`, {
	padding: '0 !important',
})

globalStyle(`${materiaScope}${p1}`, {
	padding: '0.25rem !important',
})

globalStyle(`${materiaScope}${p2}`, {
	padding: '0.5rem !important',
})

globalStyle(`${materiaScope}${p3}`, {
	padding: '1rem !important',
})

globalStyle(`${materiaScope}${p4}`, {
	padding: '1.5rem !important',
})

globalStyle(`${materiaScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${materiaScope}${px0}`, {
	paddingRight: '0 !important',
	paddingLeft: '0 !important',
})

globalStyle(`${materiaScope}${px1}`, {
	paddingRight: '0.25rem !important',
	paddingLeft: '0.25rem !important',
})

globalStyle(`${materiaScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${materiaScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${materiaScope}${px4}`, {
	paddingRight: '1.5rem !important',
	paddingLeft: '1.5rem !important',
})

globalStyle(`${materiaScope}${px5}`, {
	paddingRight: '3rem !important',
	paddingLeft: '3rem !important',
})

globalStyle(`${materiaScope}${py0}`, {
	paddingTop: '0 !important',
	paddingBottom: '0 !important',
})

globalStyle(`${materiaScope}${py1}`, {
	paddingTop: '0.25rem !important',
	paddingBottom: '0.25rem !important',
})

globalStyle(`${materiaScope}${py2}`, {
	paddingTop: '0.5rem !important',
	paddingBottom: '0.5rem !important',
})

globalStyle(`${materiaScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${materiaScope}${py4}`, {
	paddingTop: '1.5rem !important',
	paddingBottom: '1.5rem !important',
})

globalStyle(`${materiaScope}${py5}`, {
	paddingTop: '3rem !important',
	paddingBottom: '3rem !important',
})

globalStyle(`${materiaScope}${pt0}`, {
	paddingTop: '0 !important',
})

globalStyle(`${materiaScope}${pt1}`, {
	paddingTop: '0.25rem !important',
})

globalStyle(`${materiaScope}${pt2}`, {
	paddingTop: '0.5rem !important',
})

globalStyle(`${materiaScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${materiaScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${materiaScope}${pt5}`, {
	paddingTop: '3rem !important',
})

globalStyle(`${materiaScope}${pe0}`, {
	paddingRight: '0 !important',
})

globalStyle(`${materiaScope}${pe1}`, {
	paddingRight: '0.25rem !important',
})

globalStyle(`${materiaScope}${pe2}`, {
	paddingRight: '0.5rem !important',
})

globalStyle(`${materiaScope}${pe3}`, {
	paddingRight: '1rem !important',
})

globalStyle(`${materiaScope}${pe4}`, {
	paddingRight: '1.5rem !important',
})

globalStyle(`${materiaScope}${pe5}`, {
	paddingRight: '3rem !important',
})

globalStyle(`${materiaScope}${pb0}`, {
	paddingBottom: '0 !important',
})

globalStyle(`${materiaScope}${pb1}`, {
	paddingBottom: '0.25rem !important',
})

globalStyle(`${materiaScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${materiaScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${materiaScope}${pb4}`, {
	paddingBottom: '1.5rem !important',
})

globalStyle(`${materiaScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${materiaScope}${ps0}`, {
	paddingLeft: '0 !important',
})

globalStyle(`${materiaScope}${ps1}`, {
	paddingLeft: '0.25rem !important',
})

globalStyle(`${materiaScope}${ps2}`, {
	paddingLeft: '0.5rem !important',
})

globalStyle(`${materiaScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${materiaScope}${ps4}`, {
	paddingLeft: '1.5rem !important',
})

globalStyle(`${materiaScope}${ps5}`, {
	paddingLeft: '3rem !important',
})

globalStyle(`${materiaScope}${gap0}`, {
	gap: '0 !important',
})

globalStyle(`${materiaScope}${gap1}`, {
	gap: '0.25rem !important',
})

globalStyle(`${materiaScope}${gap2}`, {
	gap: '0.5rem !important',
})

globalStyle(`${materiaScope}${gap3}`, {
	gap: '1rem !important',
})

globalStyle(`${materiaScope}${gap4}`, {
	gap: '1.5rem !important',
})

globalStyle(`${materiaScope}${gap5}`, {
	gap: '3rem !important',
})

globalStyle(`${materiaScope}${rowGap0}`, {
	rowGap: '0 !important',
})

globalStyle(`${materiaScope}${rowGap1}`, {
	rowGap: '0.25rem !important',
})

globalStyle(`${materiaScope}${rowGap2}`, {
	rowGap: '0.5rem !important',
})

globalStyle(`${materiaScope}${rowGap3}`, {
	rowGap: '1rem !important',
})

globalStyle(`${materiaScope}${rowGap4}`, {
	rowGap: '1.5rem !important',
})

globalStyle(`${materiaScope}${rowGap5}`, {
	rowGap: '3rem !important',
})

globalStyle(`${materiaScope}${columnGap0}`, {
	MozColumnGap: '0 !important',
	columnGap: '0 !important',
})

globalStyle(`${materiaScope}${columnGap1}`, {
	MozColumnGap: '0.25rem !important',
	columnGap: '0.25rem !important',
})

globalStyle(`${materiaScope}${columnGap2}`, {
	MozColumnGap: '0.5rem !important',
	columnGap: '0.5rem !important',
})

globalStyle(`${materiaScope}${columnGap3}`, {
	MozColumnGap: '1rem !important',
	columnGap: '1rem !important',
})

globalStyle(`${materiaScope}${columnGap4}`, {
	MozColumnGap: '1.5rem !important',
	columnGap: '1.5rem !important',
})

globalStyle(`${materiaScope}${columnGap5}`, {
	MozColumnGap: '3rem !important',
	columnGap: '3rem !important',
})

globalStyle(`${materiaScope}${fontMonospace}`, {
	fontFamily: `${varBsFontMonospace} !important`,
})

globalStyle(`${materiaScope}${fs1}`, {
	fontSize: 'calc(1.375rem + 1.5vw) !important',
})

globalStyle(`${materiaScope}${fs2}`, {
	fontSize: 'calc(1.325rem + 0.9vw) !important',
})

globalStyle(`${materiaScope}${fs3}`, {
	fontSize: 'calc(1.3rem + 0.6vw) !important',
})

globalStyle(`${materiaScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${materiaScope}${fs5}`, {
	fontSize: '1.25rem !important',
})

globalStyle(`${materiaScope}${fs6}`, {
	fontSize: '1rem !important',
})

globalStyle(`${materiaScope}${fstItalic}`, {
	fontStyle: 'italic !important',
})

globalStyle(`${materiaScope}${fstNormal}`, {
	fontStyle: 'normal !important',
})

globalStyle(`${materiaScope}${fwLighter}`, {
	fontWeight: 'lighter !important',
})

globalStyle(`${materiaScope}${fwLight}`, {
	fontWeight: '300 !important',
})

globalStyle(`${materiaScope}${fwNormal}`, {
	fontWeight: '400 !important',
})

globalStyle(`${materiaScope}${fwMedium}`, {
	fontWeight: '500 !important',
})

globalStyle(`${materiaScope}${fwSemibold}`, {
	fontWeight: '600 !important',
})

globalStyle(`${materiaScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${materiaScope}${fwBolder}`, {
	fontWeight: 'bolder !important',
})

globalStyle(`${materiaScope}${lh1}`, {
	lineHeight: '1 !important',
})

globalStyle(`${materiaScope}${lhSm}`, {
	lineHeight: '1.25 !important',
})

globalStyle(`${materiaScope}${lhBase}`, {
	lineHeight: '1.5 !important',
})

globalStyle(`${materiaScope}${lhLg}`, {
	lineHeight: '2 !important',
})

globalStyle(`${materiaScope}${textStart}`, {
	textAlign: 'left !important',
})

globalStyle(`${materiaScope}${textEnd}`, {
	textAlign: 'right !important',
})

globalStyle(`${materiaScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${materiaScope}${textDecorationNone}`, {
	textDecoration: 'none !important',
})

globalStyle(`${materiaScope}${textDecorationUnderline}`, {
	textDecoration: 'underline !important',
})

globalStyle(`${materiaScope}${textDecorationLineThrough}`, {
	textDecoration: 'line-through !important',
})

globalStyle(`${materiaScope}${textLowercase}`, {
	textTransform: 'lowercase !important',
})

globalStyle(`${materiaScope}${textUppercase}`, {
	textTransform: 'uppercase !important',
})

globalStyle(`${materiaScope}${textCapitalize}`, {
	textTransform: 'capitalize !important',
})

globalStyle(`${materiaScope}${textWrap}`, {
	whiteSpace: 'normal !important',
})

globalStyle(`${materiaScope}${textNowrap}`, {
	whiteSpace: 'nowrap !important',
})

globalStyle(`${materiaScope}${textBreak}`, {
	wordWrap: 'break-word !important',
	wordBreak: 'break-word !important',
})

globalStyle(`${materiaScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textBlack}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBlackRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textBody}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBodyColorRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${materiaScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${materiaScope}${textBlack50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(0, 0, 0, 0.5) !important',
})

globalStyle(`${materiaScope}${textWhite50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(255, 255, 255, 0.5) !important',
})

globalStyle(`${materiaScope}${textBodySecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${materiaScope}${textBodyTertiary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsTertiaryColor} !important`,
})

globalStyle(`${materiaScope}${textBodyEmphasis}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsEmphasisColor} !important`,
})

globalStyle(`${materiaScope}${textReset}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'inherit !important',
})

globalStyle(`${materiaScope}${textOpacity25}`, {
	vars: {
		[varBsTextOpacity]: '0.25',
	},
})

globalStyle(`${materiaScope}${textOpacity50}`, {
	vars: {
		[varBsTextOpacity]: '0.5',
	},
})

globalStyle(`${materiaScope}${textOpacity75}`, {
	vars: {
		[varBsTextOpacity]: '0.75',
	},
})

globalStyle(`${materiaScope}${textOpacity100}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
})

globalStyle(`${materiaScope}${textPrimaryEmphasis}`, {
	color: `${varBsPrimaryTextEmphasis} !important`,
})

globalStyle(`${materiaScope}${textSecondaryEmphasis}`, {
	color: `${varBsSecondaryTextEmphasis} !important`,
})

globalStyle(`${materiaScope}${textSuccessEmphasis}`, {
	color: `${varBsSuccessTextEmphasis} !important`,
})

globalStyle(`${materiaScope}${textInfoEmphasis}`, {
	color: `${varBsInfoTextEmphasis} !important`,
})

globalStyle(`${materiaScope}${textWarningEmphasis}`, {
	color: `${varBsWarningTextEmphasis} !important`,
})

globalStyle(`${materiaScope}${textDangerEmphasis}`, {
	color: `${varBsDangerTextEmphasis} !important`,
})

globalStyle(`${materiaScope}${textLightEmphasis}`, {
	color: `${varBsLightTextEmphasis} !important`,
})

globalStyle(`${materiaScope}${textDarkEmphasis}`, {
	color: `${varBsDarkTextEmphasis} !important`,
})

globalStyle(`${materiaScope}${linkOpacity10}`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${materiaScope}${linkOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${materiaScope}${linkOpacity25}`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${materiaScope}${linkOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${materiaScope}${linkOpacity50}`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${materiaScope}${linkOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${materiaScope}${linkOpacity75}`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${materiaScope}${linkOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${materiaScope}${linkOpacity100}`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${materiaScope}${linkOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${materiaScope}${linkOffset1}`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${materiaScope}${linkOffset1Hover}:hover`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${materiaScope}${linkOffset2}`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${materiaScope}${linkOffset2Hover}:hover`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${materiaScope}${linkOffset3}`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${materiaScope}${linkOffset3Hover}:hover`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${materiaScope}${linkUnderlinePrimary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkUnderlineSecondary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkUnderlineSuccess}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkUnderlineInfo}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkUnderlineWarning}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkUnderlineDanger}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkUnderlineLight}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkUnderlineDark}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkUnderline}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${materiaScope}${linkUnderlineOpacity0}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity0Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity10}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity25}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity50}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity75}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity100}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${materiaScope}${linkUnderlineOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${materiaScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgBlack}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBlackRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgWhite}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWhiteRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgBody}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBodyBgRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgTransparent}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: 'transparent !important',
})

globalStyle(`${materiaScope}${bgBodySecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-secondary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgBodyTertiary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-tertiary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${materiaScope}${bgOpacity10}`, {
	vars: {
		[varBsBgOpacity]: '0.1',
	},
})

globalStyle(`${materiaScope}${bgOpacity25}`, {
	vars: {
		[varBsBgOpacity]: '0.25',
	},
})

globalStyle(`${materiaScope}${bgOpacity50}`, {
	vars: {
		[varBsBgOpacity]: '0.5',
	},
})

globalStyle(`${materiaScope}${bgOpacity75}`, {
	vars: {
		[varBsBgOpacity]: '0.75',
	},
})

globalStyle(`${materiaScope}${bgOpacity100}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
})

globalStyle(`${materiaScope}${bgPrimarySubtle}`, {
	backgroundColor: `${varBsPrimaryBgSubtle} !important`,
})

globalStyle(`${materiaScope}${bgSecondarySubtle}`, {
	backgroundColor: `${varBsSecondaryBgSubtle} !important`,
})

globalStyle(`${materiaScope}${bgSuccessSubtle}`, {
	backgroundColor: `${varBsSuccessBgSubtle} !important`,
})

globalStyle(`${materiaScope}${bgInfoSubtle}`, {
	backgroundColor: `${varBsInfoBgSubtle} !important`,
})

globalStyle(`${materiaScope}${bgWarningSubtle}`, {
	backgroundColor: `${varBsWarningBgSubtle} !important`,
})

globalStyle(`${materiaScope}${bgDangerSubtle}`, {
	backgroundColor: `${varBsDangerBgSubtle} !important`,
})

globalStyle(`${materiaScope}${bgLightSubtle}`, {
	backgroundColor: `${varBsLightBgSubtle} !important`,
})

globalStyle(`${materiaScope}${bgDarkSubtle}`, {
	backgroundColor: `${varBsDarkBgSubtle} !important`,
})

globalStyle(`${materiaScope}${bgGradient}`, {
	backgroundImage: `${varBsGradient} !important`,
})

globalStyle(`${materiaScope}${userSelectAll}`, {
	WebkitUserSelect: 'all !important',
	MozUserSelect: 'all !important',
	userSelect: 'all !important',
})

globalStyle(`${materiaScope}${userSelectAuto}`, {
	WebkitUserSelect: 'auto !important',
	MozUserSelect: 'auto !important',
	userSelect: 'auto !important',
})

globalStyle(`${materiaScope}${userSelectNone}`, {
	WebkitUserSelect: 'none !important',
	MozUserSelect: 'none !important',
	userSelect: 'none !important',
})

globalStyle(`${materiaScope}${peNone}`, {
	pointerEvents: 'none !important',
})

globalStyle(`${materiaScope}${peAuto}`, {
	pointerEvents: 'auto !important',
})

globalStyle(`${materiaScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${rounded0}`, {
	borderRadius: '0 !important',
})

globalStyle(`${materiaScope}${rounded1}`, {
	borderRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${materiaScope}${rounded2}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${rounded3}`, {
	borderRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${materiaScope}${rounded4}`, {
	borderRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${materiaScope}${rounded5}`, {
	borderRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${materiaScope}${roundedCircle}`, {
	borderRadius: '50% !important',
})

globalStyle(`${materiaScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${materiaScope}${roundedTop}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${roundedTop0}`, {
	borderTopLeftRadius: '0 !important',
	borderTopRightRadius: '0 !important',
})

globalStyle(`${materiaScope}${roundedTop1}`, {
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${materiaScope}${roundedTop2}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${roundedTop3}`, {
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${materiaScope}${roundedTop4}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${materiaScope}${roundedTop5}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${materiaScope}${roundedTopCircle}`, {
	borderTopLeftRadius: '50% !important',
	borderTopRightRadius: '50% !important',
})

globalStyle(`${materiaScope}${roundedTopPill}`, {
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${materiaScope}${roundedEnd}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${roundedEnd0}`, {
	borderTopRightRadius: '0 !important',
	borderBottomRightRadius: '0 !important',
})

globalStyle(`${materiaScope}${roundedEnd1}`, {
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${materiaScope}${roundedEnd2}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${roundedEnd3}`, {
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${materiaScope}${roundedEnd4}`, {
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${materiaScope}${roundedEnd5}`, {
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${materiaScope}${roundedEndCircle}`, {
	borderTopRightRadius: '50% !important',
	borderBottomRightRadius: '50% !important',
})

globalStyle(`${materiaScope}${roundedEndPill}`, {
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${materiaScope}${roundedBottom}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${roundedBottom0}`, {
	borderBottomRightRadius: '0 !important',
	borderBottomLeftRadius: '0 !important',
})

globalStyle(`${materiaScope}${roundedBottom1}`, {
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${materiaScope}${roundedBottom2}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${roundedBottom3}`, {
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${materiaScope}${roundedBottom4}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${materiaScope}${roundedBottom5}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${materiaScope}${roundedBottomCircle}`, {
	borderBottomRightRadius: '50% !important',
	borderBottomLeftRadius: '50% !important',
})

globalStyle(`${materiaScope}${roundedBottomPill}`, {
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${materiaScope}${roundedStart}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${roundedStart0}`, {
	borderBottomLeftRadius: '0 !important',
	borderTopLeftRadius: '0 !important',
})

globalStyle(`${materiaScope}${roundedStart1}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${materiaScope}${roundedStart2}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${materiaScope}${roundedStart3}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${materiaScope}${roundedStart4}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${materiaScope}${roundedStart5}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${materiaScope}${roundedStartCircle}`, {
	borderBottomLeftRadius: '50% !important',
	borderTopLeftRadius: '50% !important',
})

globalStyle(`${materiaScope}${roundedStartPill}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${materiaScope}${visible}`, {
	visibility: 'visible !important',
})

globalStyle(`${materiaScope}${invisible}`, {
	visibility: 'hidden !important',
})

globalStyle(`${materiaScope}${zN1}`, {
	zIndex: '-1 !important',
})

globalStyle(`${materiaScope}${z0}`, {
	zIndex: '0 !important',
})

globalStyle(`${materiaScope}${z1}`, {
	zIndex: '1 !important',
})

globalStyle(`${materiaScope}${z2}`, {
	zIndex: '2 !important',
})

globalStyle(`${materiaScope}${z3}`, {
	zIndex: '3 !important',
})

globalStyle(`${materiaScope}${floatSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${floatSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${floatSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitSmContain}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitSmCover}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitSmScale}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmInline}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmInlineBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmInlineGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmTable}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmTableRow}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmTableCell}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmInlineFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmRow}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmColumn}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmRowReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmColumnReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmGrow0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmGrow1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmShrink0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmShrink1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmWrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmNowrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexSmWrapReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentSmEvenly}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${orderSmFirst}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderSmLast}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${materiaScope}${mSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mySmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mtSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mtSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${meSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${meSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${msSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${msSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${pSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${ptSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${peSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${psSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${gapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${textSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${textSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${textSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${floatMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${floatMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${floatMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitMdContain}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitMdCover}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitMdScale}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdInline}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdInlineBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdInlineGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdTable}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdTableRow}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdTableCell}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdInlineFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdRow}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdColumn}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdRowReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdColumnReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdGrow0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdGrow1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdShrink0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdShrink1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdWrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdNowrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexMdWrapReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentMdEvenly}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${orderMdFirst}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderMdLast}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${materiaScope}${mMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${myMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${myMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mtMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mtMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${meMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${meMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${msMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${msMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${pMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${ptMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${peMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${psMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${gapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${textMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${textMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${textMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${floatLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${floatLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${floatLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitLgContain}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitLgCover}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitLgScale}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgInline}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgInlineBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgInlineGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgTable}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgTableRow}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgTableCell}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgInlineFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgRow}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgColumn}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgRowReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgColumnReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgGrow0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgGrow1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgShrink0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgShrink1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgWrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgNowrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexLgWrapReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentLgEvenly}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${orderLgFirst}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderLgLast}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${materiaScope}${mLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${myLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${myLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mtLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mtLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${meLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${meLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${msLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${msLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${pLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${ptLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${peLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${psLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${gapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${textLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${textLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${textLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${floatXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${floatXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${floatXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXlContain}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXlCover}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXlScale}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlInline}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlInlineBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlInlineGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlTable}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlTableRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlTableCell}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlInlineFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlColumn}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlRowReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlColumnReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlGrow0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlGrow1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlShrink0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlShrink1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlWrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlNowrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXlWrapReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXlEvenly}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXlFirst}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXlLast}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${materiaScope}${mXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${myXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${myXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${meXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${meXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${msXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${msXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${pXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${peXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${psXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${textXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${textXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${textXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${floatXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${floatXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${floatXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXxlContain}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXxlCover}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXxlScale}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${materiaScope}${objectFitXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlInline}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlInlineBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlInlineGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlTable}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlTableRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlTableCell}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlInlineFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlColumn}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlRowReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlColumnReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlGrow0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlGrow1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlShrink0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlShrink1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlWrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlNowrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${materiaScope}${flexXxlWrapReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${justifyContentXxlEvenly}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignItemsXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${materiaScope}${alignContentXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${materiaScope}${alignSelfXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXxlFirst}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${materiaScope}${orderXxlLast}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${materiaScope}${mXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mxXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${myXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${myXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${myXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mtXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${meXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${meXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${meXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${mbXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${msXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${msXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${msXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${materiaScope}${pXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${ptXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${peXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${peXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${pbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${psXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${psXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${gapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${rowGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${columnGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${materiaScope}${textXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${materiaScope}${textXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${materiaScope}${textXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${materiaScope}${fs1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${fs2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem !important',
		},
	},
})

globalStyle(`${materiaScope}${fs3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem !important',
		},
	},
})

globalStyle(`${materiaScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintInline}`, {
	'@media': {
		'print': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintInlineBlock}`, {
	'@media': {
		'print': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintBlock}`, {
	'@media': {
		'print': {
			display: 'block !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintGrid}`, {
	'@media': {
		'print': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintInlineGrid}`, {
	'@media': {
		'print': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintTable}`, {
	'@media': {
		'print': {
			display: 'table !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintTableRow}`, {
	'@media': {
		'print': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintTableCell}`, {
	'@media': {
		'print': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintFlex}`, {
	'@media': {
		'print': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintInlineFlex}`, {
	'@media': {
		'print': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${materiaScope}${dPrintNone}`, {
	'@media': {
		'print': {
			display: 'none !important',
		},
	},
})

globalStyle(`${materiaScope}${dropdownToggle}::after`, {
	borderWidth: '4px',
})

globalStyle(`${materiaScope}${dropup} ${materiaScope}${dropdownToggle}::after`, {
	borderWidth: '4px',
})

globalStyle(`${materiaScope}${dropstart} ${materiaScope}${dropdownToggle}::after`, {
	borderWidth: '4px',
})

globalStyle(`${materiaScope}${dropend} ${materiaScope}${dropdownToggle}::after`, {
	borderWidth: '4px',
})

globalStyle(`${materiaScope}${navbar}`, {
	border: 'none',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
})

globalStyle(`${materiaScope}${navbarBrand}`, {
	fontSize: '24px',
})

globalStyle(`${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	paddingTop: '0.9rem',
	paddingBottom: '0.9rem',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=search]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=text]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=password]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=email]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=number]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=tel]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=search]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=text]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=password]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=email]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=number]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=tel]`, {
	color: '#fff',
	boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=search]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=text]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=password]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=email]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=number]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=tel]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=search]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=text]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=password]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=email]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=number]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=tel]:focus`, {
	boxShadow: 'inset 0 -2px 0 #fff',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=search]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=text]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=password]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=email]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=number]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=tel]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=search]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=text]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=password]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=email]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=number]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=tel]::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=search]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=text]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=password]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=email]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=number]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgDark} ${materiaScope}${elInput}[type=tel]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=search]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=text]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=password]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=email]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=number]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${navbar}${bgPrimary} ${materiaScope}${elInput}[type=tel]::placeholder`, {
	color: 'rgba(255, 255, 255, 0.5)',
})

globalStyle(`${materiaScope}${btnPrimary}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnPrimary}:focus`, {
	backgroundColor: '#2196f3',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnPrimary}:hover`, {
	backgroundColor: '#1d84d6',
})

globalStyle(`${materiaScope}${btnPrimary}:active:hover`, {
	backgroundColor: '#1d84d6',
})

globalStyle(`${materiaScope}${btnPrimary}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnPrimary}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnPrimary}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnPrimary}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnPrimary}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnSecondary}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnSecondary}:focus`, {
	backgroundColor: '#fff',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnSecondary}:hover`, {
	backgroundColor: '#e0e0e0',
})

globalStyle(`${materiaScope}${btnSecondary}:active:hover`, {
	backgroundColor: '#e0e0e0',
})

globalStyle(`${materiaScope}${btnSecondary}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnSecondary}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #bbb 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnSecondary}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnSecondary}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnSecondary}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #bbb 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnSuccess}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnSuccess}:focus`, {
	backgroundColor: '#4caf50',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnSuccess}:hover`, {
	backgroundColor: '#439a46',
})

globalStyle(`${materiaScope}${btnSuccess}:active:hover`, {
	backgroundColor: '#439a46',
})

globalStyle(`${materiaScope}${btnSuccess}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnSuccess}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnSuccess}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnSuccess}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnSuccess}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnInfo}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnInfo}:focus`, {
	backgroundColor: '#9c27b0',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnInfo}:hover`, {
	backgroundColor: '#89229b',
})

globalStyle(`${materiaScope}${btnInfo}:active:hover`, {
	backgroundColor: '#89229b',
})

globalStyle(`${materiaScope}${btnInfo}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnInfo}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnInfo}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnInfo}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnInfo}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineInfo}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineInfo}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineInfo}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineInfo}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineInfo}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnWarning}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnWarning}:focus`, {
	backgroundColor: '#ff9800',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnWarning}:hover`, {
	backgroundColor: '#e08600',
})

globalStyle(`${materiaScope}${btnWarning}:active:hover`, {
	backgroundColor: '#e08600',
})

globalStyle(`${materiaScope}${btnWarning}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnWarning}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnWarning}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnWarning}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnWarning}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineWarning}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineWarning}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineWarning}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineWarning}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineWarning}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnDanger}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnDanger}:focus`, {
	backgroundColor: '#e51c23',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnDanger}:hover`, {
	backgroundColor: '#ca191f',
})

globalStyle(`${materiaScope}${btnDanger}:active:hover`, {
	backgroundColor: '#ca191f',
})

globalStyle(`${materiaScope}${btnDanger}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnDanger}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnDanger}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnDanger}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnDanger}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDanger}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineDanger}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineDanger}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDanger}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDanger}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnDark}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnDark}:focus`, {
	backgroundColor: '#222',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnDark}:hover`, {
	backgroundColor: '#1e1e1e',
})

globalStyle(`${materiaScope}${btnDark}:active:hover`, {
	backgroundColor: '#1e1e1e',
})

globalStyle(`${materiaScope}${btnDark}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnDark}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnDark}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnDark}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnDark}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDark}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineDark}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineDark}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDark}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDark}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnLight}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnLight}:focus`, {
	backgroundColor: '#f8f9fa',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnLight}:hover`, {
	backgroundColor: '#dadbdc',
})

globalStyle(`${materiaScope}${btnLight}:active:hover`, {
	backgroundColor: '#dadbdc',
})

globalStyle(`${materiaScope}${btnLight}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnLight}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnLight}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnLight}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnLight}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineLight}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineLight}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineLight}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineLight}${disabled}::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineLight}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btn}`, {
	textTransform: 'uppercase',
	border: 'none',
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
	transition: 'color 0.4s, background-color 0.4s, border-color 0.4s, box-shadow 0.4s',
})

globalStyle(`${materiaScope}${btnLink}`, {
	color: '#2196f3',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${btnLink}:hover`, {
	color: '#1a78c2',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${btnLink}:focus`, {
	color: '#1a78c2',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${btnLink}${disabled}:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${btnLink}${disabled}:active:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${btnLink}[disabled]:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${btnLink}[disabled]:active:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnLink}:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnLink}:active:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${btnSecondary}${disabled}`, {
	color: 'rgba(0, 0, 0, 0.4)',
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	opacity: '1',
})

globalStyle(`${materiaScope}${btnSecondary}[disabled]`, {
	color: 'rgba(0, 0, 0, 0.4)',
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	opacity: '1',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnSecondary}`, {
	color: 'rgba(0, 0, 0, 0.4)',
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	opacity: '1',
})

globalStyle(`${materiaScope}${btnSecondary}${disabled}:hover`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${btnSecondary}${disabled}:focus`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${btnSecondary}[disabled]:hover`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${btnSecondary}[disabled]:focus`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnSecondary}:hover`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnSecondary}:focus`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}`, {
	color: '#dee2e6',
	borderColor: '#eee',
})

globalStyle(`${materiaScope}${btnWarning}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btn} + ${materiaScope}${btn}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btn} + ${materiaScope}${btnGroup}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btnGroup} + ${materiaScope}${btn}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btnGroup} + ${materiaScope}${btnGroup}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn} + ${materiaScope}${btn}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn} + ${materiaScope}${btnGroup}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup} + ${materiaScope}${btn}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup} + ${materiaScope}${btnGroup}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btn} + ${materiaScope}${btn}`, {
	boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btn} + ${materiaScope}${btnGroup} > ${materiaScope}${dropdownToggle}`, {
	boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${borderSecondary}`, {
	border: '1px solid #dfdfdf !important',
})

globalStyle(`${materiaScope}${elInput}`, {
	letterSpacing: '0.1px',
})

globalStyle(`${materiaScope}${elButton}`, {
	letterSpacing: '0.1px',
})

globalStyle(`${materiaScope}${paragraph}`, {
	margin: '0 0 1em',
})

globalStyle(`${materiaScope}${textSecondary}`, {
	color: '#bbb !important',
})

globalStyle(`${materiaScope}${tableHover} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow}`, {
	transition: 'background-color 0.2s, color 0.2s',
})

globalStyle(`${materiaScope}${tableHover} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow} > ${materiaScope}${tableHeaderCell}`, {
	transition: 'background-color 0.2s, color 0.2s',
})

globalStyle(`${materiaScope}${tableHover} > ${materiaScope}${tableSection} > ${materiaScope}${tableRow} > ${materiaScope}${tableCell}`, {
	transition: 'background-color 0.2s, color 0.2s',
})

globalStyle(`${materiaScope}${theadInverse} ${materiaScope}${tableHeaderCell}`, {
	color: '#fff',
	backgroundColor: '#2196f3',
})

globalStyle(`${materiaScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableWarning}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#444',
	},
})

globalStyle(`${materiaScope}${colFormLabel}`, {
	fontSize: '16px',
})

globalStyle(`${materiaScope}${colFormLabelSm}`, {
	fontSize: '0.875rem',
})

globalStyle(`${materiaScope}${colFormLabelLg}`, {
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${elTextarea}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}[type=text]`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}[type=password]`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}[type=email]`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}[type=number]`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[type=text]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[type=password]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[type=email]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[type=tel]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elTextarea}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}[type=text]:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}[type=password]:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}[type=email]:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}[type=number]:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[type=text]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[type=password]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[type=email]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[type=tel]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elTextarea}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elTextarea}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=text][disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=text][readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=password][disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=password][readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=email][disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=email][readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=number][disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}[type=number][readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=text]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=text]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=password]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=password]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=email]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=email]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elTextarea}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=text][disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=password][disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=email][disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=number][disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=text]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=password]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=email]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elTextarea}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elTextarea}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=text][disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=text][disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=password][disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=password][disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=email][disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=email][disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=number][disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}[type=number][disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=text]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=text]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=password]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=password]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=email]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=email]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elSelect}`, {
	padding: '0.5rem 0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 4\'%3e%3cpath fill=\'%23666\' d=\'M8 0 4 4 0 0z\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right center',
	backgroundSize: '8px 4px',
	boxShadow: 'inset 0 -1px 0 #ddd',
})

globalStyle(`${materiaScope}${elSelect}${formControl}`, {
	padding: '0.5rem 0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 4\'%3e%3cpath fill=\'%23666\' d=\'M8 0 4 4 0 0z\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right center',
	backgroundSize: '8px 4px',
	boxShadow: 'inset 0 -1px 0 #ddd',
})

globalStyle(`${materiaScope}${elSelect}${inputSm}`, {
	fontSize: '0.875rem',
})

globalStyle(`${materiaScope}${elSelect}${formControl}${inputSm}`, {
	fontSize: '0.875rem',
})

globalStyle(`${materiaScope}${elSelect}${inputLg}`, {
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${elSelect}${formControl}${inputLg}`, {
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${elSelect}:focus`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 4\'%3e%3cpath fill=\'%23212121\' d=\'M8 0 4 4 0 0z\'/%3e%3c/svg%3e")',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elSelect}${formControl}:focus`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 4\'%3e%3cpath fill=\'%23212121\' d=\'M8 0 4 4 0 0z\'/%3e%3c/svg%3e")',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elSelect}[multiple]`, {
	background: 'none',
})

globalStyle(`${materiaScope}${elSelect}${formControl}[multiple]`, {
	background: 'none',
})

globalStyle(`${materiaScope}${formCheckInput}`, {
	width: '1.25em',
	height: '1.25em',
	marginTop: '1px',
	border: '2px solid #ced4da',
})

globalStyle(`${materiaScope}:not(${formCheck}) > ${materiaScope}${formCheckInput}:checked[type=radio]`, {
	backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%232196f3' stroke='%23fff'/%3e%3c/svg%3e"), ${varBsGradient}`,
	backgroundSize: '1.8em',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}`, {
	position: 'relative',
	height: '0.8em',
	marginTop: '0.29em',
	backgroundColor: '#ced4da',
	backgroundImage: 'none',
	border: 'none',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus`, {
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}::before`, {
	position: 'absolute',
	top: '-0.2em',
	left: '-0.2em',
	width: '1.2em',
	height: '1.2em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: '50%',
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
	transition: 'left 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}::after`, {
	position: 'absolute',
	top: '-0.2em',
	left: '-0.2em',
	zIndex: '-1',
	width: '1.2em',
	height: '1.2em',
	content: '""',
	borderRadius: '50%',
	boxShadow: '0 0 0 9px rgba(0, 0, 0, 0.05)',
	transition: 'left 0.15s ease-in-out, transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transform: 'scale(0)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:hover:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus:not(${disabled})::after`, {
	boxShadow: '0 0 0 9px rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked`, {
	backgroundColor: 'rgba(33, 150, 243, 0.3)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked::before`, {
	left: 'calc(100% - 0.8em)',
	backgroundColor: 'rgb(33, 150, 243)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked::after`, {
	left: 'calc(100% - 0.8em)',
	boxShadow: '0 0 0 9px rgba(33, 150, 243, 0.1)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked:hover:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked:focus:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked:focus:not(${disabled})::after`, {
	boxShadow: '0 0 0 9px rgba(33, 150, 243, 0.2)',
})

globalStyle(`${materiaScope}${formCheck}:not(${formSwitch}) ${materiaScope}${formCheckInput}:checked[type=checkbox]`, {
	backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-width='2' d='m6 10 3 3 6-6'/%3e%3c/svg%3e"), ${varBsGradient}`,
	backgroundSize: '1.6em',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${elInput}:not([type=checkbox])`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${formControl}`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${elInput}${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${elInput}[type=text][readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}[type=text]${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${elInput}:not([type=checkbox]):focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${formControl}:focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${elInput}:not([type=checkbox])`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${formControl}`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${elInput}${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${elInput}[type=text][readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}[type=text]${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${elInput}:not([type=checkbox]):focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${formControl}:focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${elInput}:not([type=checkbox])`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${formControl}`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${elInput}${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${elInput}[type=text][readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}[type=text]${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${elInput}:not([type=checkbox]):focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${formControl}:focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${inputGroupAddon}`, {
	color: '#666',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${inputGroupAddon}`, {
	color: '#666',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${inputGroupAddon}`, {
	color: '#666',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})

globalStyle(`${materiaScope}${formGroupLg} ${materiaScope}${elSelect}`, {
	lineHeight: '1.5',
})

globalStyle(`${materiaScope}${formGroupLg} ${materiaScope}${elSelect}${formControl}`, {
	lineHeight: '1.5',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navItem} + ${materiaScope}${navItem}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}`, {
	marginRight: '0',
	color: '#444',
	backgroundColor: 'transparent',
	border: 'none',
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'color 0.2s, box-shadow 0.2s',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:focus`, {
	marginRight: '0',
	color: '#444',
	backgroundColor: 'transparent',
	border: 'none',
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'color 0.2s, box-shadow 0.2s',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:hover`, {
	color: '#2196f3',
	backgroundColor: 'transparent',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:focus:hover`, {
	color: '#2196f3',
	backgroundColor: 'transparent',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${active}`, {
	color: '#2196f3',
	border: 'none',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${active}:focus`, {
	color: '#2196f3',
	border: 'none',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${active}:hover`, {
	color: '#2196f3',
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${active}:focus:hover`, {
	color: '#2196f3',
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${disabled}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}:hover`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}:focus`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}${active}`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}${active}:hover`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}${active}:focus`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${dropdownMenu}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${dropdownMenu}`, {
	marginTop: '0',
	border: 'none',
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
})

globalStyle(`${materiaScope}${alert}`, {
	paddingRight: '2.5rem',
	border: 'none',
})

globalStyle(`${materiaScope}${alert}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alertPrimary}`, {
	background: '#2196f3 linear-gradient(180deg, #42a6f5, #2196f3) repeat-x',
})

globalStyle(`${materiaScope}${alertSecondary}`, {
	background: '#fff linear-gradient(180deg, white, #fff) repeat-x',
})

globalStyle(`${materiaScope}${alertSuccess}`, {
	background: '#4caf50 linear-gradient(180deg, #67bb6a, #4caf50) repeat-x',
})

globalStyle(`${materiaScope}${alertInfo}`, {
	background: '#9c27b0 linear-gradient(180deg, #ab47bc, #9c27b0) repeat-x',
})

globalStyle(`${materiaScope}${alertWarning}`, {
	background: '#ff9800 linear-gradient(180deg, #ffa726, #ff9800) repeat-x',
})

globalStyle(`${materiaScope}${alertDanger}`, {
	background: '#e51c23 linear-gradient(180deg, #e93e44, #e51c23) repeat-x',
})

globalStyle(`${materiaScope}${alertLight}`, {
	background: '#f8f9fa linear-gradient(180deg, #f9fafb, #f8f9fa) repeat-x',
})

globalStyle(`${materiaScope}${alertDark}`, {
	background: '#222 linear-gradient(180deg, #434343, #222) repeat-x',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${link}:not(${btn})`, {
	fontWeight: '700',
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${alertLink}`, {
	fontWeight: '700',
	color: '#fff',
})

globalStyle(`${materiaScope}${alertSecondary}`, {
	color: '#444',
})

globalStyle(`${materiaScope}${alertSecondary} ${materiaScope}${link}:not(${btn})`, {
	color: '#444',
})

globalStyle(`${materiaScope}${alertSecondary} ${materiaScope}${alertLink}`, {
	color: '#444',
})

globalStyle(`${materiaScope}${alertLight}`, {
	color: '#444',
})

globalStyle(`${materiaScope}${alertLight} ${materiaScope}${link}:not(${btn})`, {
	color: '#444',
})

globalStyle(`${materiaScope}${alertLight} ${materiaScope}${alertLink}`, {
	color: '#444',
})

globalStyle(`${materiaScope}${badge}${bgSecondary}`, {
	color: '#222',
})

globalStyle(`${materiaScope}${badge}${bgLight}`, {
	color: '#222',
})

globalStyle(`${materiaScope}${card}`, {
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${card}${borderPrimary}`, {
	borderWidth: '1px',
})

globalStyle(`${materiaScope}${card}${borderSecondary}`, {
	borderWidth: '1px',
})

globalStyle(`${materiaScope}${card}${borderSuccess}`, {
	borderWidth: '1px',
})

globalStyle(`${materiaScope}${card}${borderInfo}`, {
	borderWidth: '1px',
})

globalStyle(`${materiaScope}${card}${borderWarning}`, {
	borderWidth: '1px',
})

globalStyle(`${materiaScope}${card}${borderDanger}`, {
	borderWidth: '1px',
})

globalStyle(`${materiaScope}${card}${borderLight}`, {
	borderWidth: '1px',
})

globalStyle(`${materiaScope}${card}${borderDark}`, {
	borderWidth: '1px',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${modalContent}`, {
	borderRadius: '0.2rem',
	boxShadow: '0 6px 36px rgba(0, 0, 0, 0.3)',
})

globalStyle(`${materiaScope}${modal} ${materiaScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${materiaScope}${toast} ${materiaScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${materiaScope}${offcanvas} ${materiaScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${materiaScope}${popover}`, {
	border: 'none',
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h1}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h2}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h3}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h4}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h5}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${h6}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH6}`, {
	color: 'inherit',
})
