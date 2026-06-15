import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { vaporScope } from '../scope.css'

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
	arrow,
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

globalStyle(`${vaporScope}${vars}`, {
	vars: {
		[varBsBlue]: '#1ba2f6',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#ea39b8',
		[varBsRed]: '#e44c55',
		[varBsOrange]: '#f1b633',
		[varBsYellow]: '#ffc107',
		[varBsGreen]: '#3cf281',
		[varBsTeal]: '#3f81a2',
		[varBsCyan]: '#32fbe2',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#6c757d',
		[varBsGrayDark]: '#343a40',
		'--bs-gray-100': '#f8f9fa',
		'--bs-gray-200': '#e9ecef',
		'--bs-gray-300': '#dee2e6',
		'--bs-gray-400': '#ced4da',
		'--bs-gray-500': '#adb5bd',
		'--bs-gray-600': '#6c757d',
		'--bs-gray-700': '#495057',
		'--bs-gray-800': '#343a40',
		'--bs-gray-900': '#170229',
		[varBsPrimary]: '#6f42c1',
		[varBsSecondary]: '#ea39b8',
		[varBsSuccess]: '#3cf281',
		[varBsInfo]: '#1ba2f6',
		[varBsWarning]: '#ffc107',
		[varBsDanger]: '#e44c55',
		[varBsLight]: '#44d9e8',
		[varBsDark]: '#170229',
		[varBsPrimaryRgb]: '111, 66, 193',
		[varBsSecondaryRgb]: '234, 57, 184',
		[varBsSuccessRgb]: '60, 242, 129',
		[varBsInfoRgb]: '27, 162, 246',
		[varBsWarningRgb]: '255, 193, 7',
		[varBsDangerRgb]: '228, 76, 85',
		[varBsLightRgb]: '68, 217, 232',
		[varBsDarkRgb]: '23, 2, 41',
		[varBsPrimaryTextEmphasis]: '#2c1a4d',
		[varBsSecondaryTextEmphasis]: '#5e174a',
		[varBsSuccessTextEmphasis]: '#186134',
		[varBsInfoTextEmphasis]: '#0b4162',
		[varBsWarningTextEmphasis]: '#664d03',
		[varBsDangerTextEmphasis]: '#5b1e22',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#e2d9f3',
		[varBsSecondaryBgSubtle]: '#fbd7f1',
		[varBsSuccessBgSubtle]: '#d8fce6',
		[varBsInfoBgSubtle]: '#d1ecfd',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#fadbdd',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#c5b3e6',
		[varBsSecondaryBorderSubtle]: '#f7b0e3',
		[varBsSuccessBorderSubtle]: '#b1facd',
		[varBsInfoBorderSubtle]: '#a4dafb',
		[varBsWarningBorderSubtle]: '#ffe69c',
		[varBsDangerBorderSubtle]: '#f4b7bb',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#32fbe2',
		[varBsBodyColorRgb]: '50, 251, 226',
		[varBsBodyBg]: '#1a0933',
		[varBsBodyBgRgb]: '26, 9, 51',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(50, 251, 226, 0.75)',
		'--bs-secondary-color-rgb': '50, 251, 226',
		[varBsSecondaryBg]: '#e9ecef',
		'--bs-secondary-bg-rgb': '233, 236, 239',
		[varBsTertiaryColor]: 'rgba(50, 251, 226, 0.5)',
		'--bs-tertiary-color-rgb': '50, 251, 226',
		[varBsTertiaryBg]: '#f8f9fa',
		'--bs-tertiary-bg-rgb': '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#32fbe2',
		[varBsLinkColorRgb]: '50, 251, 226',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#28c9b5',
		[varBsLinkHoverColorRgb]: '40, 201, 181',
		[varBsCodeColor]: '#ea39b8',
		[varBsHighlightColor]: '#32fbe2',
		[varBsHighlightBg]: '#fff3cd',
		[varBsBorderWidth]: '0',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#dee2e6',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '0.15rem',
		[varBsBorderRadiusSm]: '0.05rem',
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
		[varBsFocusRingColor]: 'rgba(111, 66, 193, 0.25)',
		[varBsFormValidColor]: '#3cf281',
		[varBsFormValidBorderColor]: '#3cf281',
		[varBsFormInvalidColor]: '#e44c55',
		[varBsFormInvalidBorderColor]: '#e44c55',
	},
})

globalStyle(`${vaporScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#170229',
		[varBsBodyBgRgb]: '23, 2, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		'--bs-secondary-color-rgb': '222, 226, 230',
		[varBsSecondaryBg]: '#343a40',
		'--bs-secondary-bg-rgb': '52, 58, 64',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		'--bs-tertiary-color-rgb': '222, 226, 230',
		[varBsTertiaryBg]: '#261e35',
		'--bs-tertiary-bg-rgb': '38, 30, 53',
		[varBsPrimaryTextEmphasis]: '#a98eda',
		[varBsSecondaryTextEmphasis]: '#f288d4',
		[varBsSuccessTextEmphasis]: '#8af7b3',
		[varBsInfoTextEmphasis]: '#76c7fa',
		[varBsWarningTextEmphasis]: '#ffda6a',
		[varBsDangerTextEmphasis]: '#ef9499',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#160d27',
		[varBsSecondaryBgSubtle]: '#2f0b25',
		[varBsSuccessBgSubtle]: '#0c301a',
		[varBsInfoBgSubtle]: '#052031',
		[varBsWarningBgSubtle]: '#332701',
		[varBsDangerBgSubtle]: '#2e0f11',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#432874',
		[varBsSecondaryBorderSubtle]: '#8c226e',
		[varBsSuccessBorderSubtle]: '#24914d',
		[varBsInfoBorderSubtle]: '#106194',
		[varBsWarningBorderSubtle]: '#997404',
		[varBsDangerBorderSubtle]: '#892e33',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#a98eda',
		[varBsLinkHoverColor]: '#baa5e1',
		[varBsLinkColorRgb]: '169, 142, 218',
		[varBsLinkHoverColorRgb]: '186, 165, 225',
		[varBsCodeColor]: '#f288d4',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#664d03',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#8af7b3',
		[varBsFormValidBorderColor]: '#8af7b3',
		[varBsFormInvalidColor]: '#ef9499',
		[varBsFormInvalidBorderColor]: '#ef9499',
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

globalStyle(`${vaporScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${vaporScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${vaporScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${vaporScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${vaporScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${vaporScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${vaporScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${vaporScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${vaporScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${vaporScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${vaporScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${vaporScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${vaporScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${vaporScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${vaporScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${vaporScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${vaporScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${vaporScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${vaporScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${vaporScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${vaporScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${vaporScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${vaporScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${vaporScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${vaporScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${vaporScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${vaporScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${vaporScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${vaporScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${vaporScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${vaporScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${vaporScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${vaporScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${vaporScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${vaporScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${vaporScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${vaporScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${vaporScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${vaporScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${vaporScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${vaporScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${vaporScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${vaporScope}${elOl}) :where(${vaporScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${vaporScope}${elUl}) :where(${vaporScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${vaporScope}${elOl}) :where(${vaporScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${vaporScope}${elUl}) :where(${vaporScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${vaporScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${vaporScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${vaporScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${vaporScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${vaporScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${vaporScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`${vaporScope}${clsSmall}`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${vaporScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${vaporScope}${mark}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${vaporScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${vaporScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${vaporScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${vaporScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${vaporScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${vaporScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${vaporScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${vaporScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${vaporScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${vaporScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${vaporScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${vaporScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${vaporScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${vaporScope}${elPre}) :where(${vaporScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${vaporScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${vaporScope}${link}) > :where(${vaporScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${vaporScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.05rem',
})

globalStyle(`:where(${vaporScope}${elKbd}) :where(${vaporScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${vaporScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${vaporScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${vaporScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${vaporScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${vaporScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${vaporScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${vaporScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${vaporScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${vaporScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${vaporScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${vaporScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${vaporScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${vaporScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${vaporScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${vaporScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${vaporScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${vaporScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${vaporScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${vaporScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${vaporScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${vaporScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${vaporScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${vaporScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${vaporScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${vaporScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${vaporScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${vaporScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${vaporScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${vaporScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${vaporScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${vaporScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${vaporScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${vaporScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${vaporScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${vaporScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${vaporScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${vaporScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${vaporScope}${elLegend}) + *`, {
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

globalStyle(`${vaporScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${vaporScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${vaporScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${vaporScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${vaporScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${vaporScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${vaporScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${vaporScope}${lead}`, {
	fontSize: '1.25rem',
	fontWeight: '300',
})

globalStyle(`${vaporScope}${display1}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.625rem + 4.5vw)',
})

globalStyle(`${vaporScope}${display1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '5rem',
		},
	},
})

globalStyle(`${vaporScope}${display2}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.575rem + 3.9vw)',
})

globalStyle(`${vaporScope}${display2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4.5rem',
		},
	},
})

globalStyle(`${vaporScope}${display3}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.525rem + 3.3vw)',
})

globalStyle(`${vaporScope}${display3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '4rem',
		},
	},
})

globalStyle(`${vaporScope}${display4}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.475rem + 2.7vw)',
})

globalStyle(`${vaporScope}${display4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3.5rem',
		},
	},
})

globalStyle(`${vaporScope}${display5}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.425rem + 2.1vw)',
})

globalStyle(`${vaporScope}${display5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '3rem',
		},
	},
})

globalStyle(`${vaporScope}${display6}`, {
	fontWeight: '300',
	lineHeight: '1.2',
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${vaporScope}${display6}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${vaporScope}${listUnstyled}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${vaporScope}${listInline}`, {
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${vaporScope}${listInlineItem}`, {
	display: 'inline-block',
})

globalStyle(`${vaporScope}${listInlineItem}:not(:last-child)`, {
	marginRight: '0.5rem',
})

globalStyle(`${vaporScope}${initialism}`, {
	fontSize: '0.875em',
	textTransform: 'uppercase',
})

globalStyle(`${vaporScope}${clsBlockquote}`, {
	marginBottom: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${vaporScope}${clsBlockquote} > :last-child`, {
	marginBottom: '0',
})

globalStyle(`${vaporScope}${blockquoteFooter}`, {
	marginTop: '-1rem',
	marginBottom: '1rem',
	fontSize: '0.875em',
	color: 'rgba(50, 251, 226, 0.3)',
})

globalStyle(`${vaporScope}${blockquoteFooter}::before`, {
	content: '"— "',
})

globalStyle(`${vaporScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${vaporScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${vaporScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${vaporScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: '1',
})

globalStyle(`${vaporScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${vaporScope}${container}`, {
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

globalStyle(`${vaporScope}${containerFluid}`, {
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

globalStyle(`${vaporScope}${containerXxl}`, {
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

globalStyle(`${vaporScope}${containerXl}`, {
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

globalStyle(`${vaporScope}${containerLg}`, {
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

globalStyle(`${vaporScope}${containerMd}`, {
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

globalStyle(`${vaporScope}${containerSm}`, {
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

globalStyle(`${vaporScope}${containerSm}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${vaporScope}${container}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${vaporScope}${containerMd}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${vaporScope}${containerSm}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${vaporScope}${container}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${vaporScope}${containerLg}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${vaporScope}${containerMd}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${vaporScope}${containerSm}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${vaporScope}${container}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${vaporScope}${containerXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${vaporScope}${containerLg}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${vaporScope}${containerMd}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${vaporScope}${containerSm}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${vaporScope}${container}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${vaporScope}${containerXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${vaporScope}${containerXl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${vaporScope}${containerLg}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${vaporScope}${containerMd}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${vaporScope}${containerSm}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${vaporScope}${container}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${vaporScope}${vars}`, {
	vars: {
		'--bs-breakpoint-xs': '0',
		'--bs-breakpoint-sm': '576px',
		'--bs-breakpoint-md': '768px',
		'--bs-breakpoint-lg': '992px',
		'--bs-breakpoint-xl': '1200px',
		'--bs-breakpoint-xxl': '1400px',
	},
})

globalStyle(`${vaporScope}${row}`, {
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

globalStyle(`${vaporScope}${row} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${vaporScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${vaporScope}${rowColsAuto} > *`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${vaporScope}${rowCols1} > *`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${vaporScope}${rowCols2} > *`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${vaporScope}${rowCols3} > *`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${vaporScope}${rowCols4} > *`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${vaporScope}${rowCols5} > *`, {
	flex: '0 0 auto',
	width: '20%',
})

globalStyle(`${vaporScope}${rowCols6} > *`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${vaporScope}${colAuto}`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${vaporScope}${col1}`, {
	flex: '0 0 auto',
	width: '8.33333333%',
})

globalStyle(`${vaporScope}${col2}`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${vaporScope}${col3}`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${vaporScope}${col4}`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${vaporScope}${col5}`, {
	flex: '0 0 auto',
	width: '41.66666667%',
})

globalStyle(`${vaporScope}${col6}`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${vaporScope}${col7}`, {
	flex: '0 0 auto',
	width: '58.33333333%',
})

globalStyle(`${vaporScope}${col8}`, {
	flex: '0 0 auto',
	width: '66.66666667%',
})

globalStyle(`${vaporScope}${col9}`, {
	flex: '0 0 auto',
	width: '75%',
})

globalStyle(`${vaporScope}${col10}`, {
	flex: '0 0 auto',
	width: '83.33333333%',
})

globalStyle(`${vaporScope}${col11}`, {
	flex: '0 0 auto',
	width: '91.66666667%',
})

globalStyle(`${vaporScope}${col12}`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${vaporScope}${offset1}`, {
	marginLeft: '8.33333333%',
})

globalStyle(`${vaporScope}${offset2}`, {
	marginLeft: '16.66666667%',
})

globalStyle(`${vaporScope}${offset3}`, {
	marginLeft: '25%',
})

globalStyle(`${vaporScope}${offset4}`, {
	marginLeft: '33.33333333%',
})

globalStyle(`${vaporScope}${offset5}`, {
	marginLeft: '41.66666667%',
})

globalStyle(`${vaporScope}${offset6}`, {
	marginLeft: '50%',
})

globalStyle(`${vaporScope}${offset7}`, {
	marginLeft: '58.33333333%',
})

globalStyle(`${vaporScope}${offset8}`, {
	marginLeft: '66.66666667%',
})

globalStyle(`${vaporScope}${offset9}`, {
	marginLeft: '75%',
})

globalStyle(`${vaporScope}${offset10}`, {
	marginLeft: '83.33333333%',
})

globalStyle(`${vaporScope}${offset11}`, {
	marginLeft: '91.66666667%',
})

globalStyle(`${vaporScope}${g0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${vaporScope}${gx0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${vaporScope}${g0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${vaporScope}${gy0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${vaporScope}${g1}`, {
	vars: {
		[varBsGutterX]: '0.25rem',
	},
})

globalStyle(`${vaporScope}${gx1}`, {
	vars: {
		[varBsGutterX]: '0.25rem',
	},
})

globalStyle(`${vaporScope}${g1}`, {
	vars: {
		[varBsGutterY]: '0.25rem',
	},
})

globalStyle(`${vaporScope}${gy1}`, {
	vars: {
		[varBsGutterY]: '0.25rem',
	},
})

globalStyle(`${vaporScope}${g2}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${vaporScope}${gx2}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${vaporScope}${g2}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${vaporScope}${gy2}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${vaporScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${vaporScope}${gx3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${vaporScope}${g3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${vaporScope}${gy3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${vaporScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${vaporScope}${gx4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${vaporScope}${g4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${vaporScope}${gy4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${vaporScope}${g5}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${vaporScope}${gx5}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${vaporScope}${g5}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${vaporScope}${gy5}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${vaporScope}${colSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${vaporScope}${rowColsSmAuto} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${rowColsSm1} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsSm2} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsSm3} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsSm4} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsSm5} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsSm6} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${colSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${colSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${colSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${vaporScope}${colSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colSm12}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${colMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${vaporScope}${rowColsMdAuto} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${rowColsMd1} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsMd2} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsMd3} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsMd4} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsMd5} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsMd6} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${colMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${colMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${colMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${vaporScope}${colMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colMd12}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${colLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${vaporScope}${rowColsLgAuto} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${rowColsLg1} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsLg2} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsLg3} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsLg4} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsLg5} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsLg6} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${colLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${colLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${colLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${vaporScope}${colLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colLg12}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${colXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXlAuto} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXl1} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXl2} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXl3} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXl4} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXl5} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXl6} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${colXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${colXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${colXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${vaporScope}${colXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXl12}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${colXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXxlAuto} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXxl1} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXxl2} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXxl3} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXxl4} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXxl5} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${vaporScope}${rowColsXxl6} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${colXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${colXxl12}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${vaporScope}${offsetXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${vaporScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${gyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${vaporScope}${table}`, {
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

globalStyle(`${vaporScope}${table} > :not(caption) > * > *`, {
	padding: '0.5rem 0.5rem',
	color: fallbackVar(varBsTableColorState, fallbackVar(varBsTableColorType, varBsTableColor)),
	backgroundColor: varBsTableBg,
	borderBottomWidth: varBsBorderWidth,
	boxShadow: `inset 0 0 0 9999px ${fallbackVar(varBsTableBgState, fallbackVar(varBsTableBgType, varBsTableAccentBg))}`,
})

globalStyle(`${vaporScope}${table} > ${vaporScope}${tableSection}`, {
	verticalAlign: 'inherit',
})

globalStyle(`${vaporScope}${table} > ${vaporScope}${tableSection}`, {
	verticalAlign: 'bottom',
})

globalStyle(`${vaporScope}${tableGroupDivider}`, {
	borderTop: `calc(${varBsBorderWidth} * 2) solid currentcolor`,
})

globalStyle(`${vaporScope}${captionTop}`, {
	captionSide: 'top',
})

globalStyle(`${vaporScope}${tableSm} > :not(caption) > * > *`, {
	padding: '0.25rem 0.25rem',
})

globalStyle(`${vaporScope}${tableBordered} > :not(caption) > *`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${vaporScope}${tableBordered} > :not(caption) > * > *`, {
	borderWidth: `0 ${varBsBorderWidth}`,
})

globalStyle(`${vaporScope}${tableBorderless} > :not(caption) > * > *`, {
	borderBottomWidth: '0',
})

globalStyle(`${vaporScope}${tableBorderless} > :not(:first-child)`, {
	borderTopWidth: '0',
})

globalStyle(`${vaporScope}${tableStriped} > ${vaporScope}${tableSection} > ${vaporScope}${tableRow}:nth-of-type(odd) > *`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${vaporScope}${tableStripedColumns} > :not(caption) > ${vaporScope}${tableRow} > :nth-child(even)`, {
	vars: {
		[varBsTableColorType]: varBsTableStripedColor,
		[varBsTableBgType]: varBsTableStripedBg,
	},
})

globalStyle(`${vaporScope}${tableActive}`, {
	vars: {
		[varBsTableColorState]: varBsTableActiveColor,
		[varBsTableBgState]: varBsTableActiveBg,
	},
})

globalStyle(`${vaporScope}${tableHover} > ${vaporScope}${tableSection} > ${vaporScope}${tableRow}:hover > *`, {
	vars: {
		[varBsTableColorState]: varBsTableHoverColor,
		[varBsTableBgState]: varBsTableHoverBg,
	},
})

globalStyle(`${vaporScope}${tablePrimary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#6f42c1',
		[varBsTableBorderColor]: '#8c68cd',
		[varBsTableStripedBg]: '#764bc4',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#7d55c7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#7a50c6',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableSecondary}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#ea39b8',
		[varBsTableBorderColor]: '#ee61c6',
		[varBsTableStripedBg]: '#eb43bc',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#ec4dbf',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#ec48bd',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableSuccess}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#3cf281',
		[varBsTableBorderColor]: '#63f59a',
		[varBsTableStripedBg]: '#46f387',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#50f38e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#4bf38a',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableInfo}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#1ba2f6',
		[varBsTableBorderColor]: '#49b5f8',
		[varBsTableStripedBg]: '#26a7f6',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#32abf7',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#2ca9f7',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableWarning}`, {
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

globalStyle(`${vaporScope}${tableDanger}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#e44c55',
		[varBsTableBorderColor]: '#e97077',
		[varBsTableStripedBg]: '#e5555e',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#e75e66',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#e65962',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableLight}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#44d9e8',
		[varBsTableBorderColor]: '#69e1ed',
		[varBsTableStripedBg]: '#4ddbe9',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#57ddea',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#52dcea',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableDark}`, {
	vars: {
		[varBsTableColor]: '#fff',
		[varBsTableBg]: '#170229',
		[varBsTableBorderColor]: '#453554',
		[varBsTableStripedBg]: '#230f34',
		[varBsTableStripedColor]: '#fff',
		[varBsTableActiveBg]: '#2e1b3e',
		[varBsTableActiveColor]: '#fff',
		[varBsTableHoverBg]: '#281539',
		[varBsTableHoverColor]: '#fff',
	},
	color: varBsTableColor,
	borderColor: varBsTableBorderColor,
})

globalStyle(`${vaporScope}${tableResponsive}`, {
	overflowX: 'auto',
	WebkitOverflowScrolling: 'touch',
})

globalStyle(`${vaporScope}${tableResponsiveSm}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${tableResponsiveMd}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${tableResponsiveLg}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${tableResponsiveXl}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${tableResponsiveXxl}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowX: 'auto',
			WebkitOverflowScrolling: 'touch',
		},
	},
})

globalStyle(`${vaporScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${vaporScope}${colFormLabel}`, {
	paddingTop: `calc(0.375rem + ${varBsBorderWidth})`,
	paddingBottom: `calc(0.375rem + ${varBsBorderWidth})`,
	marginBottom: '0',
	fontSize: 'inherit',
	lineHeight: '1.5',
})

globalStyle(`${vaporScope}${colFormLabelLg}`, {
	paddingTop: `calc(0.5rem + ${varBsBorderWidth})`,
	paddingBottom: `calc(0.5rem + ${varBsBorderWidth})`,
	fontSize: '1.25rem',
})

globalStyle(`${vaporScope}${colFormLabelSm}`, {
	paddingTop: `calc(0.25rem + ${varBsBorderWidth})`,
	paddingBottom: `calc(0.25rem + ${varBsBorderWidth})`,
	fontSize: '0.875rem',
})

globalStyle(`${vaporScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${vaporScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#fff',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#30115e',
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${vaporScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${vaporScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${vaporScope}${formControl}:focus`, {
	color: '#fff',
	backgroundColor: '#30115e',
	borderColor: '#f59cdc',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
})

globalStyle(`${vaporScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${vaporScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${vaporScope}${formControl}::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.4)',
	opacity: '1',
})

globalStyle(`${vaporScope}${formControl}::placeholder`, {
	color: 'rgba(255, 255, 255, 0.4)',
	opacity: '1',
})

globalStyle(`${vaporScope}${formControl}:disabled`, {
	color: '#adb5bd',
	backgroundColor: '#250d49',
	opacity: '1',
})

globalStyle(`${vaporScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
	color: '#fff',
	backgroundColor: '#250d49',
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${vaporScope}${formControl}::file-selector-button`, {
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
	color: '#fff',
	backgroundColor: '#250d49',
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${vaporScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: '#210b40',
})

globalStyle(`${vaporScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: '#210b40',
})

globalStyle(`${vaporScope}${formControlPlaintext}`, {
	display: 'block',
	width: '100%',
	padding: '0.375rem 0',
	marginBottom: '0',
	lineHeight: '1.5',
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	border: 'solid transparent',
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${vaporScope}${formControlPlaintext}:focus`, {
	outline: '0',
})

globalStyle(`${vaporScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${vaporScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${vaporScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${vaporScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${vaporScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${vaporScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${vaporScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${vaporScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${vaporScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 0.75rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${vaporScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${vaporScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${vaporScope}${formControlColor}`, {
	width: '3rem',
	height: `calc(1.5em + 0.75rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.375rem',
})

globalStyle(`${vaporScope}${formControlColor}:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${vaporScope}${formControlColor}::-moz-color-swatch`, {
	border: '0 !important',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${vaporScope}${formControlColor}::-webkit-color-swatch`, {
	border: '0 !important',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${vaporScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${vaporScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${vaporScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.375rem 2.25rem 0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#fff',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#30115e',
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0.75rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${vaporScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${formSelect}:focus`, {
	borderColor: '#f59cdc',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
})

globalStyle(`${vaporScope}${formSelect}[multiple]`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${vaporScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${vaporScope}${formSelect}:disabled`, {
	color: 'rgba(255, 255, 255, 0.4)',
	backgroundColor: '#250d49',
})

globalStyle(`${vaporScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: '0 0 0 #fff',
})

globalStyle(`${vaporScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${vaporScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${vaporScope}[data-bs-theme=dark] ${vaporScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${vaporScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${vaporScope}${formCheck} ${vaporScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${vaporScope}${formCheckReverse}`, {
	paddingRight: '1.5em',
	paddingLeft: '0',
	textAlign: 'right',
})

globalStyle(`${vaporScope}${formCheckReverse} ${vaporScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${vaporScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: '#30115e',
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

globalStyle(`${vaporScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${vaporScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${vaporScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${vaporScope}${formCheckInput}:focus`, {
	borderColor: '#f59cdc',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
})

globalStyle(`${vaporScope}${formCheckInput}:checked`, {
	backgroundColor: '#ea39b8',
	borderColor: '#ea39b8',
})

globalStyle(`${vaporScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${vaporScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${vaporScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#ea39b8',
	borderColor: '#ea39b8',
})

globalStyle(`${vaporScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${vaporScope}${formCheckInput}[disabled] ~ ${vaporScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${vaporScope}${formCheckInput}:disabled ~ ${vaporScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${vaporScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${vaporScope}${formSwitch} ${vaporScope}${formCheckInput}`, {
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

globalStyle(`${vaporScope}${formSwitch} ${vaporScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${formSwitch} ${vaporScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23f59cdc\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${vaporScope}${formSwitch} ${vaporScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${vaporScope}${formSwitch}${formCheckReverse}`, {
	paddingRight: '2.5em',
	paddingLeft: '0',
})

globalStyle(`${vaporScope}${formSwitch}${formCheckReverse} ${vaporScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${vaporScope}${formCheckInline}`, {
	display: 'inline-block',
	marginRight: '1rem',
})

globalStyle(`${vaporScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${vaporScope}${btnCheck}[disabled] + ${vaporScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${vaporScope}${btnCheck}:disabled + ${vaporScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${vaporScope}[data-bs-theme=dark] ${vaporScope}${formSwitch} ${vaporScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${vaporScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${vaporScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${vaporScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #1a0933, 0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
})

globalStyle(`${vaporScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #1a0933, 0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
})

globalStyle(`${vaporScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${vaporScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#ea39b8',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${vaporScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#f9c4ea',
})

globalStyle(`${vaporScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: '#30115e',
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${vaporScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#ea39b8',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${vaporScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#f9c4ea',
})

globalStyle(`${vaporScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: '#30115e',
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${vaporScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${vaporScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: '#6f42c1',
})

globalStyle(`${vaporScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: '#6f42c1',
})

globalStyle(`${vaporScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${elLabel}`, {
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '2',
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 0.75rem',
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

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}`, {
	padding: '1rem 0.75rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext}`, {
	padding: '1rem 0.75rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}:not(:-moz-placeholder-shown) ~ ${vaporScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}:focus ~ ${vaporScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}:not(:placeholder-shown) ~ ${vaporScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext} ~ ${vaporScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formSelect} ~ ${vaporScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}:-webkit-autofill ~ ${vaporScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${vaporScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#30115e',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${elTextarea}:focus ~ ${vaporScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#30115e',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${elTextarea}:not(:placeholder-shown) ~ ${vaporScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#30115e',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${elTextarea}:disabled ~ ${vaporScope}${elLabel}::after`, {
	backgroundColor: '#250d49',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControlPlaintext} ~ ${vaporScope}${elLabel}`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${vaporScope}${formFloating} > :disabled ~ ${vaporScope}${elLabel}`, {
	color: '#6c757d',
})

globalStyle(`${vaporScope}${formFloating} > ${vaporScope}${formControl}:disabled ~ ${vaporScope}${elLabel}`, {
	color: '#6c757d',
})

globalStyle(`${vaporScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${vaporScope}${inputGroup} ${vaporScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${vaporScope}${inputGroup} ${vaporScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${vaporScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#fff',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: '#250d49',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${vaporScope}${inputGroupLg} > ${vaporScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${vaporScope}${inputGroupLg} > ${vaporScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${vaporScope}${inputGroupLg} > ${vaporScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${vaporScope}${inputGroupLg} > ${vaporScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${vaporScope}${inputGroupSm} > ${vaporScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${vaporScope}${inputGroupSm} > ${vaporScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${vaporScope}${inputGroupSm} > ${vaporScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${vaporScope}${inputGroupSm} > ${vaporScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${vaporScope}${inputGroupLg} > ${vaporScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${vaporScope}${inputGroupSm} > ${vaporScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${vaporScope}${inputGroup}:not(${hasValidation}) > ${vaporScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup}:not(${hasValidation}) > ${vaporScope}${dropdownToggle}:nth-last-child(n+3)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup}:not(${hasValidation}) > ${vaporScope}${formFloating}:not(:last-child) > ${vaporScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup}:not(${hasValidation}) > ${vaporScope}${formFloating}:not(:last-child) > ${vaporScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup}${hasValidation} > ${vaporScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup}${hasValidation} > ${vaporScope}${dropdownToggle}:nth-last-child(n+4)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup}${hasValidation} > ${vaporScope}${formFloating}:nth-last-child(n+3) > ${vaporScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup}${hasValidation} > ${vaporScope}${formFloating}:nth-last-child(n+3) > ${vaporScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formFloating}:not(:first-child) > ${vaporScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formFloating}:not(:first-child) > ${vaporScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${vaporScope}${validTooltip}`, {
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

globalStyle(`${vaporScope}${wasValidated} :valid ~ ${vaporScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${wasValidated} :valid ~ ${vaporScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${isValid} ~ ${vaporScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${isValid} ~ ${vaporScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%233cf281\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%233cf281\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${vaporScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${vaporScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%233cf281\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%233cf281\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%233cf281\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%233cf281\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formControlColor}:valid`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${vaporScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${vaporScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${vaporScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formCheckInput}:valid ~ ${vaporScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${vaporScope}${formCheckInput}${isValid} ~ ${vaporScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${vaporScope}${formCheckInline} ${vaporScope}${formCheckInput} ~ ${vaporScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${inputGroup} > ${vaporScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${inputGroup} > ${vaporScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${inputGroup} > ${vaporScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${vaporScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${vaporScope}${invalidTooltip}`, {
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

globalStyle(`${vaporScope}${wasValidated} :invalid ~ ${vaporScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${wasValidated} :invalid ~ ${vaporScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${isInvalid} ~ ${vaporScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${isInvalid} ~ ${vaporScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e44c55\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e44c55\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e44c55\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e44c55\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${vaporScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${vaporScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e44c55\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e44c55\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e44c55\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e44c55\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e44c55\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e44c55\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e44c55\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e44c55\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formControlColor}:invalid`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${vaporScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${vaporScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${vaporScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${formCheckInput}:invalid ~ ${vaporScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${vaporScope}${formCheckInput}${isInvalid} ~ ${vaporScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${vaporScope}${formCheckInline} ${vaporScope}${formCheckInput} ~ ${vaporScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${inputGroup} > ${vaporScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${inputGroup} > ${vaporScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${vaporScope}${wasValidated} ${vaporScope}${inputGroup} > ${vaporScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${vaporScope}${inputGroup} > ${vaporScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${vaporScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '0.75rem',
		[varBsBtnPaddingY]: '0.375rem',
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
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${vaporScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${vaporScope}${btnCheck} + ${vaporScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${vaporScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btnCheck}:focus-visible + ${vaporScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}:not(${btnCheck}) + ${vaporScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}:not(${btnCheck}) + ${vaporScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btn}${btnShowHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btnCheck}:checked:focus-visible + ${vaporScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${vaporScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${vaporScope}${fieldset}:disabled ${vaporScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${vaporScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#6f42c1',
		[varBsBtnBorderColor]: '#6f42c1',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5e38a4',
		[varBsBtnHoverBorderColor]: '#59359a',
		[varBsBtnFocusBoxShadowRgb]: '133, 94, 202',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#59359a',
		[varBsBtnActiveBorderColor]: '#533291',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#6f42c1',
		[varBsBtnDisabledBorderColor]: '#6f42c1',
	},
})

globalStyle(`${vaporScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ea39b8',
		[varBsBtnBorderColor]: '#ea39b8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c7309c',
		[varBsBtnHoverBorderColor]: '#bb2e93',
		[varBsBtnFocusBoxShadowRgb]: '237, 87, 195',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#bb2e93',
		[varBsBtnActiveBorderColor]: '#b02b8a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ea39b8',
		[varBsBtnDisabledBorderColor]: '#ea39b8',
	},
})

globalStyle(`${vaporScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3cf281',
		[varBsBtnBorderColor]: '#3cf281',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#33ce6e',
		[varBsBtnHoverBorderColor]: '#30c267',
		[varBsBtnFocusBoxShadowRgb]: '89, 244, 148',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#30c267',
		[varBsBtnActiveBorderColor]: '#2db661',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3cf281',
		[varBsBtnDisabledBorderColor]: '#3cf281',
	},
})

globalStyle(`${vaporScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#1ba2f6',
		[varBsBtnBorderColor]: '#1ba2f6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#178ad1',
		[varBsBtnHoverBorderColor]: '#1682c5',
		[varBsBtnFocusBoxShadowRgb]: '61, 176, 247',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1682c5',
		[varBsBtnActiveBorderColor]: '#147ab9',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#1ba2f6',
		[varBsBtnDisabledBorderColor]: '#1ba2f6',
	},
})

globalStyle(`${vaporScope}${btnWarning}`, {
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

globalStyle(`${vaporScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e44c55',
		[varBsBtnBorderColor]: '#e44c55',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c24148',
		[varBsBtnHoverBorderColor]: '#b63d44',
		[varBsBtnFocusBoxShadowRgb]: '232, 103, 111',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b63d44',
		[varBsBtnActiveBorderColor]: '#ab3940',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e44c55',
		[varBsBtnDisabledBorderColor]: '#e44c55',
	},
})

globalStyle(`${vaporScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#44d9e8',
		[varBsBtnBorderColor]: '#44d9e8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3ab8c5',
		[varBsBtnHoverBorderColor]: '#36aeba',
		[varBsBtnFocusBoxShadowRgb]: '96, 223, 235',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#36aeba',
		[varBsBtnActiveBorderColor]: '#33a3ae',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#44d9e8',
		[varBsBtnDisabledBorderColor]: '#44d9e8',
	},
})

globalStyle(`${vaporScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#170229',
		[varBsBtnBorderColor]: '#170229',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3a2849',
		[varBsBtnHoverBorderColor]: '#2e1b3e',
		[varBsBtnFocusBoxShadowRgb]: '58, 40, 73',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#453554',
		[varBsBtnActiveBorderColor]: '#2e1b3e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#170229',
		[varBsBtnDisabledBorderColor]: '#170229',
	},
})

globalStyle(`${vaporScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#6f42c1',
		[varBsBtnBorderColor]: '#6f42c1',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6f42c1',
		[varBsBtnHoverBorderColor]: '#6f42c1',
		[varBsBtnFocusBoxShadowRgb]: '111, 66, 193',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#6f42c1',
		[varBsBtnActiveBorderColor]: '#6f42c1',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#6f42c1',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#6f42c1',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#ea39b8',
		[varBsBtnBorderColor]: '#ea39b8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ea39b8',
		[varBsBtnHoverBorderColor]: '#ea39b8',
		[varBsBtnFocusBoxShadowRgb]: '234, 57, 184',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ea39b8',
		[varBsBtnActiveBorderColor]: '#ea39b8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ea39b8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ea39b8',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#3cf281',
		[varBsBtnBorderColor]: '#3cf281',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3cf281',
		[varBsBtnHoverBorderColor]: '#3cf281',
		[varBsBtnFocusBoxShadowRgb]: '60, 242, 129',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3cf281',
		[varBsBtnActiveBorderColor]: '#3cf281',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3cf281',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3cf281',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#1ba2f6',
		[varBsBtnBorderColor]: '#1ba2f6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1ba2f6',
		[varBsBtnHoverBorderColor]: '#1ba2f6',
		[varBsBtnFocusBoxShadowRgb]: '27, 162, 246',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1ba2f6',
		[varBsBtnActiveBorderColor]: '#1ba2f6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#1ba2f6',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#1ba2f6',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineWarning}`, {
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

globalStyle(`${vaporScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#e44c55',
		[varBsBtnBorderColor]: '#e44c55',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e44c55',
		[varBsBtnHoverBorderColor]: '#e44c55',
		[varBsBtnFocusBoxShadowRgb]: '228, 76, 85',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e44c55',
		[varBsBtnActiveBorderColor]: '#e44c55',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e44c55',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e44c55',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#44d9e8',
		[varBsBtnBorderColor]: '#44d9e8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#44d9e8',
		[varBsBtnHoverBorderColor]: '#44d9e8',
		[varBsBtnFocusBoxShadowRgb]: '68, 217, 232',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#44d9e8',
		[varBsBtnActiveBorderColor]: '#44d9e8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#44d9e8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#44d9e8',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#170229',
		[varBsBtnBorderColor]: '#170229',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#170229',
		[varBsBtnHoverBorderColor]: '#170229',
		[varBsBtnFocusBoxShadowRgb]: '23, 2, 41',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#170229',
		[varBsBtnActiveBorderColor]: '#170229',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#170229',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#170229',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '81, 252, 230',
	},
	textDecoration: 'underline',
})

globalStyle(`${vaporScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${vaporScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${vaporScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${vaporScope}${btnGroupLg} > ${vaporScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${vaporScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${vaporScope}${btnGroupSm} > ${vaporScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${vaporScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${vaporScope}${tooltipFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${vaporScope}${popoverFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${vaporScope}${modalFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${vaporScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${tooltipFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${popoverFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${modalFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${vaporScope}${tooltipFade}:not(${tooltipShow})`, {
	opacity: '0',
})

globalStyle(`${vaporScope}${popoverFade}:not(${popoverShow})`, {
	opacity: '0',
})

globalStyle(`${vaporScope}${modalFade}:not(${modalShowHook})`, {
	opacity: '0',
})

globalStyle(`${vaporScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${vaporScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${vaporScope}${collapsing}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${collapsing}${collapseHorizontal}`, {
	width: '0',
	height: 'auto',
	transition: 'width 0.35s ease',
})

globalStyle(`${vaporScope}${collapsing}${collapseHorizontal}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${dropup}`, {
	position: 'relative',
})

globalStyle(`${vaporScope}${dropend}`, {
	position: 'relative',
})

globalStyle(`${vaporScope}${dropdown}`, {
	position: 'relative',
})

globalStyle(`${vaporScope}${dropstart}`, {
	position: 'relative',
})

globalStyle(`${vaporScope}${dropupCenter}`, {
	position: 'relative',
})

globalStyle(`${vaporScope}${dropdownCenter}`, {
	position: 'relative',
})

globalStyle(`${vaporScope}${dropdownToggle}`, {
	whiteSpace: 'nowrap',
})

globalStyle(`${vaporScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid',
	borderRight: '0.3em solid transparent',
	borderBottom: '0',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${vaporScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${vaporScope}${dropdownMenu}`, {
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
		[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.15)',
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#ea39b8',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '1rem',
		[varBsDropdownItemPaddingY]: '0.25rem',
		[varBsDropdownHeaderColor]: '#6c757d',
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

globalStyle(`${vaporScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: '0',
	marginTop: varBsDropdownSpacer,
})

globalStyle(`${vaporScope}${dropdownMenuStart}`, {
	vars: {
		[varBsPosition]: 'start',
	},
})

globalStyle(`${vaporScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: '0',
})

globalStyle(`${vaporScope}${dropdownMenuEnd}`, {
	vars: {
		[varBsPosition]: 'end',
	},
})

globalStyle(`${vaporScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: '0',
	left: 'auto',
})

globalStyle(`${vaporScope}${dropdownMenuSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuSmStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuSmEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuMdStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuMdEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuLgStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuLgEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuXlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuXlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuXxlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${vaporScope}${dropdownMenuXxlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${dropup} ${vaporScope}${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: '0',
	marginBottom: varBsDropdownSpacer,
})

globalStyle(`${vaporScope}${dropup} ${vaporScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0',
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${vaporScope}${dropup} ${vaporScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${vaporScope}${dropend} ${vaporScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: 'auto',
	left: '100%',
	marginTop: '0',
	marginLeft: varBsDropdownSpacer,
})

globalStyle(`${vaporScope}${dropend} ${vaporScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0',
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${vaporScope}${dropend} ${vaporScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${vaporScope}${dropend} ${vaporScope}${dropdownToggle}::after`, {
	verticalAlign: '0',
})

globalStyle(`${vaporScope}${dropstart} ${vaporScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: '100%',
	left: 'auto',
	marginTop: '0',
	marginRight: varBsDropdownSpacer,
})

globalStyle(`${vaporScope}${dropstart} ${vaporScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
})

globalStyle(`${vaporScope}${dropstart} ${vaporScope}${dropdownToggle}::after`, {
	display: 'none',
})

globalStyle(`${vaporScope}${dropstart} ${vaporScope}${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${vaporScope}${dropstart} ${vaporScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${vaporScope}${dropstart} ${vaporScope}${dropdownToggle}::before`, {
	verticalAlign: '0',
})

globalStyle(`${vaporScope}${dropdownDivider}`, {
	height: '0',
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: '1',
})

globalStyle(`${vaporScope}${dropdownItem}`, {
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

globalStyle(`${vaporScope}${dropdownItem}:hover`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${vaporScope}${dropdownItem}:focus`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${vaporScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${vaporScope}${dropdownItem}:active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${vaporScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${vaporScope}${dropdownItem}:disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${vaporScope}${dropdownMenu}${dropdownMenuShow}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

globalStyle(`${vaporScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

globalStyle(`${vaporScope}${dropdownMenuDark}`, {
	vars: {
		[varBsDropdownColor]: '#dee2e6',
		[varBsDropdownBg]: '#343a40',
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBoxShadow]: '',
		[varBsDropdownLinkColor]: '#dee2e6',
		[varBsDropdownLinkHoverColor]: '#fff',
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.15)',
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#ea39b8',
		[varBsDropdownLinkDisabledColor]: '#adb5bd',
		[varBsDropdownHeaderColor]: '#adb5bd',
	},
})

globalStyle(`${vaporScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${vaporScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btnCheck}:focus + ${vaporScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnCheck}:focus + ${vaporScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${vaporScope}${btnToolbar} ${vaporScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${vaporScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}:not(${btnCheck}:first-child) + ${vaporScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btnGroup}:not(:last-child) > ${vaporScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}:not(${btnCheck}) + ${vaporScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btnGroup}:not(:first-child) > ${vaporScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${vaporScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${vaporScope}${dropup} ${vaporScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${vaporScope}${dropend} ${vaporScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${vaporScope}${dropstart} ${vaporScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${vaporScope}${btnSm} + ${vaporScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${vaporScope}${btnGroupSm} > ${vaporScope}${btn} + ${vaporScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${vaporScope}${btnLg} + ${vaporScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${vaporScope}${btnGroupLg} > ${vaporScope}${btn} + ${vaporScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${vaporScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnGroup}:not(:last-child) > ${vaporScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}:not(${btnCheck}) + ${vaporScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnGroup}:not(:first-child) > ${vaporScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${vaporScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: 'rgba(50, 251, 226, 0.3)',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${vaporScope}${navLink}`, {
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

globalStyle(`${vaporScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${vaporScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${vaporScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
})

globalStyle(`${vaporScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${vaporScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${vaporScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: '#ea39b8',
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navItem}${show} ${vaporScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${dropdownMenu}`, {
	marginTop: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${vaporScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#ea39b8',
	},
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${show} > ${vaporScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${vaporScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: '#ea39b8',
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${show} > ${vaporScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${vaporScope}${navFill} > ${vaporScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${vaporScope}${navFill} ${vaporScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${vaporScope}${navJustified} > ${vaporScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${vaporScope}${navJustified} ${vaporScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${vaporScope}${navFill} ${vaporScope}${navItem} ${vaporScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${navJustified} ${vaporScope}${navItem} ${vaporScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${tabContent} > ${vaporScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${vaporScope}${tabContent} > ${vaporScope}${active}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: '0',
		[varBsNavbarPaddingY]: '0.5rem',
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
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%2850, 251, 226, 0.75%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
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

globalStyle(`${vaporScope}${navbar} > ${vaporScope}${container}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${vaporScope}${navbar} > ${vaporScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${vaporScope}${navbar} > ${vaporScope}${containerSm}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${vaporScope}${navbar} > ${vaporScope}${containerMd}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${vaporScope}${navbar} > ${vaporScope}${containerLg}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${vaporScope}${navbar} > ${vaporScope}${containerXl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${vaporScope}${navbar} > ${vaporScope}${containerXxl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${vaporScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: varBsNavbarBrandFontSize,
	color: varBsNavbarBrandColor,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
})

globalStyle(`${vaporScope}${navbarBrand}:hover`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${vaporScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

globalStyle(`${vaporScope}${navbarNav}`, {
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

globalStyle(`${vaporScope}${navbarNav} ${vaporScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${vaporScope}${navbarNav} ${vaporScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${vaporScope}${navbarNav} ${vaporScope}${dropdownMenu}`, {
	position: 'static',
})

globalStyle(`${vaporScope}${navbarText}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsNavbarColor,
})

globalStyle(`${vaporScope}${navbarText} ${vaporScope}${link}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${vaporScope}${navbarText} ${vaporScope}${link}:hover`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${vaporScope}${navbarText} ${vaporScope}${link}:focus`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${vaporScope}${navbarCollapse}`, {
	flexGrow: '1',
	flexBasis: '100%',
	alignItems: 'center',
})

globalStyle(`${vaporScope}${navbarToggler}`, {
	padding: `${varBsNavbarTogglerPaddingY} ${varBsNavbarTogglerPaddingX}`,
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: '1',
	color: varBsNavbarColor,
	backgroundColor: 'transparent',
	border: `${varBsBorderWidth} solid ${varBsNavbarTogglerBorderColor}`,
	borderRadius: varBsNavbarTogglerBorderRadius,
	transition: varBsNavbarTogglerTransition,
})

globalStyle(`${vaporScope}${navbarToggler}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarToggler}:hover`, {
	textDecoration: 'none',
})

globalStyle(`${vaporScope}${navbarToggler}:focus`, {
	textDecoration: 'none',
	outline: '0',
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

globalStyle(`${vaporScope}${navbarTogglerIcon}`, {
	display: 'inline-block',
	width: '1.5em',
	height: '1.5em',
	verticalAlign: 'middle',
	backgroundImage: varBsNavbarTogglerIconBg,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: '100%',
})

globalStyle(`${vaporScope}${navbarNavScroll}`, {
	maxHeight: 'var(--bs-scroll-height, 75vh)',
	overflowY: 'auto',
})

globalStyle(`${vaporScope}${navbarExpandSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${navbarNav}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${navbarNav} ${vaporScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 576px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${offcanvas}`, {
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

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${navbarNav}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${navbarNav} ${vaporScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 768px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${offcanvas}`, {
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

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${navbarNav}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${navbarNav} ${vaporScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 992px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${offcanvas}`, {
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

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${navbarNav} ${vaporScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1200px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${offcanvas}`, {
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

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${navbarNav}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${navbarNav} ${vaporScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${navbarNavScroll}`, {
	'@media': {
		'(min-width: 1400px)': {
			overflow: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${navbarCollapse}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${navbarToggler}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${offcanvas}`, {
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

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasBody}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex',
			flexGrow: '0',
			padding: '0',
			overflowY: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${navbarExpand}`, {
	flexWrap: 'nowrap',
	justifyContent: 'flex-start',
})

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${navbarNav}`, {
	flexDirection: 'row',
})

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${navbarNav} ${vaporScope}${dropdownMenu}`, {
	position: 'absolute',
})

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${navbarNavScroll}`, {
	overflow: 'visible',
})

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${navbarCollapse}`, {
	display: 'flex !important',
	flexBasis: 'auto',
})

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${navbarToggler}`, {
	display: 'none',
})

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${offcanvas}`, {
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

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasHeader}`, {
	display: 'none',
})

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${offcanvas} ${vaporScope}${offcanvasBody}`, {
	display: 'flex',
	flexGrow: '0',
	padding: '0',
	overflowY: 'visible',
})

globalStyle(`${vaporScope}${navbarDark}`, {
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

globalStyle(`${vaporScope}${navbar}[data-bs-theme=dark]`, {
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

globalStyle(`${vaporScope}[data-bs-theme=dark] ${vaporScope}${navbarTogglerIcon}`, {
	vars: {
		[varBsNavbarTogglerIconBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${vaporScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: '1rem',
		[varBsCardSpacerX]: '1rem',
		[varBsCardTitleSpacerY]: '0.5rem',
		[varBsCardTitleColor]: '',
		[varBsCardSubtitleColor]: '',
		[varBsCardBorderWidth]: '2px',
		[varBsCardBorderColor]: varBsBorderColorTranslucent,
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardBoxShadow]: '',
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - 2px)`,
		[varBsCardCapPaddingY]: '0.5rem',
		[varBsCardCapPaddingX]: '1rem',
		[varBsCardCapBg]: `rgba(${varBsBodyColorRgb}, 0.03)`,
		[varBsCardCapColor]: '#fff',
		[varBsCardHeight]: '',
		[varBsCardColor]: '#fff',
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

globalStyle(`${vaporScope}${card} > ${vaporScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${vaporScope}${card} > ${vaporScope}${listGroup}`, {
	borderTop: 'inherit',
	borderBottom: 'inherit',
})

globalStyle(`${vaporScope}${card} > ${vaporScope}${listGroup}:first-child`, {
	borderTopWidth: '0',
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${card} > ${vaporScope}${listGroup}:last-child`, {
	borderBottomWidth: '0',
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${card} > ${vaporScope}${cardHeader} + ${vaporScope}${listGroup}`, {
	borderTop: '0',
})

globalStyle(`${vaporScope}${card} > ${vaporScope}${listGroup} + ${vaporScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${vaporScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${vaporScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${vaporScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${vaporScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${vaporScope}${cardLink} + ${vaporScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${vaporScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${vaporScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

globalStyle(`${vaporScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${vaporScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

globalStyle(`${vaporScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})

globalStyle(`${vaporScope}${cardHeaderTabs} ${vaporScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${vaporScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${vaporScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
	borderRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${cardImg}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardImg}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${vaporScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card} + ${vaporScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child) > ${vaporScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child) > ${vaporScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child) > ${vaporScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child) > ${vaporScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child) > ${vaporScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child) > ${vaporScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child) > ${vaporScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child) > ${vaporScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${accordion}`, {
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
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%2332fbe2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnIconWidth]: '1.25rem',
		[varBsAccordionBtnIconTransform]: 'rotate(-180deg)',
		[varBsAccordionBtnIconTransition]: 'transform 0.2s ease-in-out',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%232c1a4d\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpath d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnFocusBoxShadow]: '0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
		[varBsAccordionBodyPaddingX]: '1.25rem',
		[varBsAccordionBodyPaddingY]: '1rem',
		[varBsAccordionActiveColor]: varBsPrimaryTextEmphasis,
		[varBsAccordionActiveBg]: varBsPrimaryBgSubtle,
	},
})

globalStyle(`${vaporScope}${accordionButton}`, {
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

globalStyle(`${vaporScope}${accordionButton}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${accordionButton}:not(${accordionButtonCollapsed})`, {
	color: varBsAccordionActiveColor,
	backgroundColor: varBsAccordionActiveBg,
	boxShadow: `inset 0 calc(-1 * ${varBsAccordionBorderWidth}) 0 ${varBsAccordionBorderColor}`,
})

globalStyle(`${vaporScope}${accordionButton}:not(${accordionButtonCollapsed})::after`, {
	backgroundImage: varBsAccordionBtnActiveIcon,
	transform: varBsAccordionBtnIconTransform,
})

globalStyle(`${vaporScope}${accordionButton}::after`, {
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

globalStyle(`${vaporScope}${accordionButton}::after`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${accordionButton}:hover`, {
	zIndex: '2',
})

globalStyle(`${vaporScope}${accordionButton}:focus`, {
	zIndex: '3',
	outline: '0',
	boxShadow: varBsAccordionBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${accordionHeader}`, {
	marginBottom: '0',
})

globalStyle(`${vaporScope}${accordionItem}`, {
	color: varBsAccordionColor,
	backgroundColor: varBsAccordionBg,
	border: `${varBsAccordionBorderWidth} solid ${varBsAccordionBorderColor}`,
})

globalStyle(`${vaporScope}${accordionItem}:first-of-type`, {
	borderTopLeftRadius: varBsAccordionBorderRadius,
	borderTopRightRadius: varBsAccordionBorderRadius,
})

globalStyle(`${vaporScope}${accordionItem}:first-of-type > ${vaporScope}${accordionHeader} ${vaporScope}${accordionButton}`, {
	borderTopLeftRadius: varBsAccordionInnerBorderRadius,
	borderTopRightRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${vaporScope}${accordionItem}:not(:first-of-type)`, {
	borderTop: '0',
})

globalStyle(`${vaporScope}${accordionItem}:last-of-type`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${vaporScope}${accordionItem}:last-of-type > ${vaporScope}${accordionHeader} ${vaporScope}${accordionButton}${accordionButtonCollapsed}`, {
	borderBottomRightRadius: varBsAccordionInnerBorderRadius,
	borderBottomLeftRadius: varBsAccordionInnerBorderRadius,
})

globalStyle(`${vaporScope}${accordionItem}:last-of-type > ${vaporScope}${accordionCollapse}`, {
	borderBottomRightRadius: varBsAccordionBorderRadius,
	borderBottomLeftRadius: varBsAccordionBorderRadius,
})

globalStyle(`${vaporScope}${accordionBody}`, {
	padding: `${varBsAccordionBodyPaddingY} ${varBsAccordionBodyPaddingX}`,
})

globalStyle(`${vaporScope}${accordionFlush} > ${vaporScope}${accordionItem}`, {
	borderRight: '0',
	borderLeft: '0',
	borderRadius: '0',
})

globalStyle(`${vaporScope}${accordionFlush} > ${vaporScope}${accordionItem}:first-child`, {
	borderTop: '0',
})

globalStyle(`${vaporScope}${accordionFlush} > ${vaporScope}${accordionItem}:last-child`, {
	borderBottom: '0',
})

globalStyle(`${vaporScope}${accordionFlush} > ${vaporScope}${accordionItem} > ${vaporScope}${accordionCollapse}`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}${accordionFlush} > ${vaporScope}${accordionItem} > ${vaporScope}${accordionHeader} ${vaporScope}${accordionButton}`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}${accordionFlush} > ${vaporScope}${accordionItem} > ${vaporScope}${accordionHeader} ${vaporScope}${accordionButton}${collapsed}`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}[data-bs-theme=dark] ${vaporScope}${accordionButton}::after`, {
	vars: {
		[varBsAccordionBtnIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23a98eda\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
		[varBsAccordionBtnActiveIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23a98eda\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${vaporScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0',
		[varBsBreadcrumbPaddingY]: '0',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '',
		[varBsBreadcrumbBorderRadius]: '',
		[varBsBreadcrumbDividerColor]: 'rgba(50, 251, 226, 0.3)',
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActiveColor]: '#ea39b8',
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

globalStyle(`${vaporScope}${breadcrumbItem} + ${vaporScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${vaporScope}${breadcrumbItem} + ${vaporScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${fallbackVar(varBsBreadcrumbDivider, '"/"')} `,
})

globalStyle(`${vaporScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${vaporScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.75rem',
		[varBsPaginationPaddingY]: '0.375rem',
		[varBsPaginationFontSize]: '1rem',
		[varBsPaginationColor]: varBsLinkColor,
		[varBsPaginationBg]: 'transparent',
		[varBsPaginationBorderWidth]: varBsBorderWidth,
		[varBsPaginationBorderColor]: varBsBorderColor,
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: varBsLinkHoverColor,
		[varBsPaginationHoverBg]: 'transparent',
		[varBsPaginationHoverBorderColor]: varBsBorderColor,
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: 'transparent',
		[varBsPaginationFocusBoxShadow]: '0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
		[varBsPaginationActiveColor]: '#fff',
		[varBsPaginationActiveBg]: '#ea39b8',
		[varBsPaginationActiveBorderColor]: '#ea39b8',
		[varBsPaginationDisabledColor]: 'rgba(50, 251, 226, 0.3)',
		[varBsPaginationDisabledBg]: 'transparent',
		[varBsPaginationDisabledBorderColor]: varBsBorderColor,
	},
	display: 'flex',
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${vaporScope}${pageLink}`, {
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

globalStyle(`${vaporScope}${pageLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${pageLink}:hover`, {
	zIndex: '2',
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${vaporScope}${pageLink}:focus`, {
	zIndex: '3',
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: '0',
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(`${vaporScope}${pageLink}${pageItemActive}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${vaporScope}${pageItemActive} > ${vaporScope}${pageLink}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${vaporScope}${pageLink}${pageItemDisabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${vaporScope}${pageItemDisabled} > ${vaporScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${vaporScope}${pageItem}:not(:first-child) ${vaporScope}${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${vaporScope}${pageItem}:first-child ${vaporScope}${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

globalStyle(`${vaporScope}${pageItem}:last-child ${vaporScope}${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

globalStyle(`${vaporScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${vaporScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${vaporScope}${badge}`, {
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

globalStyle(`${vaporScope}${badge}:empty`, {
	display: 'none',
})

globalStyle(`${vaporScope}${btn} ${vaporScope}${badge}`, {
	position: 'relative',
	top: '-1px',
})

globalStyle(`${vaporScope}${alert}`, {
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

globalStyle(`${vaporScope}${alertHeading}`, {
	color: 'inherit',
})

globalStyle(`${vaporScope}${alertLink}`, {
	fontWeight: '700',
	color: varBsAlertLinkColor,
})

globalStyle(`${vaporScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

globalStyle(`${vaporScope}${alertDismissible} ${vaporScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${vaporScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertDark}`, {
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

globalStyle(`${vaporScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: '#250d49',
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#6f42c1',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${vaporScope}${progressStacked}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: '#250d49',
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#6f42c1',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${vaporScope}${progressBar}`, {
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

globalStyle(`${vaporScope}${progressBar}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${progressBarStriped}`, {
	backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${vaporScope}${progressStacked} > ${vaporScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${vaporScope}${progressStacked} > ${vaporScope}${progress} > ${vaporScope}${progressBar}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${progressBarAnimated}`, {
	animation: '1s linear infinite progress-bar-stripes',
})

globalStyle(`${vaporScope}${progressBarAnimated}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})

globalStyle(`${vaporScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: '#fff',
		[varBsListGroupBg]: '#250d49',
		[varBsListGroupBorderColor]: varBsBorderColor,
		[varBsListGroupBorderWidth]: varBsBorderWidth,
		[varBsListGroupBorderRadius]: varBsBorderRadius,
		[varBsListGroupItemPaddingX]: '1rem',
		[varBsListGroupItemPaddingY]: '0.5rem',
		[varBsListGroupActionColor]: '#32fbe2',
		[varBsListGroupActionHoverColor]: '#fff',
		[varBsListGroupActionHoverBg]: '#ea39b8',
		[varBsListGroupActionActiveColor]: varBsBodyColor,
		[varBsListGroupActionActiveBg]: '#ea39b8',
		[varBsListGroupDisabledColor]: 'rgba(50, 251, 226, 0.3)',
		[varBsListGroupDisabledBg]: '#250d49',
		[varBsListGroupActiveColor]: '#fff',
		[varBsListGroupActiveBg]: '#ea39b8',
		[varBsListGroupActiveBorderColor]: '#ea39b8',
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '0',
	marginBottom: '0',
	borderRadius: varBsListGroupBorderRadius,
})

globalStyle(`${vaporScope}${listGroupNumbered}`, {
	listStyleType: 'none',
	counterReset: 'section',
})

globalStyle(`${vaporScope}${listGroupNumbered} > ${vaporScope}${listGroupItem}::before`, {
	content: 'counters(section, ".") ". "',
	counterIncrement: 'section',
})

globalStyle(`${vaporScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${vaporScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${vaporScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})

globalStyle(`${vaporScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${vaporScope}${listGroupItem}:disabled`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${vaporScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}`, {
	borderTopWidth: '0',
})

globalStyle(`${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${vaporScope}${listGroupItemAction}`, {
	width: '100%',
	color: varBsListGroupActionColor,
	textAlign: 'inherit',
})

globalStyle(`${vaporScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${vaporScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${vaporScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${vaporScope}${listGroupHorizontal}`, {
	flexDirection: 'row',
})

globalStyle(`${vaporScope}${listGroupHorizontal} > ${vaporScope}${listGroupItem}:first-child:not(:last-child)`, {
	borderBottomLeftRadius: varBsListGroupBorderRadius,
	borderTopRightRadius: '0',
})

globalStyle(`${vaporScope}${listGroupHorizontal} > ${vaporScope}${listGroupItem}:last-child:not(:first-child)`, {
	borderTopRightRadius: varBsListGroupBorderRadius,
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${listGroupHorizontal} > ${vaporScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${vaporScope}${listGroupHorizontal} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}`, {
	borderTopWidth: varBsListGroupBorderWidth,
	borderLeftWidth: '0',
})

globalStyle(`${vaporScope}${listGroupHorizontal} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${vaporScope}${listGroupHorizontalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalSm} > ${vaporScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalSm} > ${vaporScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalSm} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalSm} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalSm} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalMd} > ${vaporScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 768px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalMd} > ${vaporScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 768px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalMd} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalMd} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 768px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalMd} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalLg} > ${vaporScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 992px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalLg} > ${vaporScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 992px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalLg} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalLg} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 992px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalLg} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXl} > ${vaporScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 1200px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXl} > ${vaporScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 1200px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXl} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXl} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1200px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXl} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXxl} > ${vaporScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 1400px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXxl} > ${vaporScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 1400px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXxl} > ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXxl} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1400px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${vaporScope}${listGroupHorizontalXxl} > ${vaporScope}${listGroupItem} + ${vaporScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${vaporScope}${listGroupFlush}`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}${listGroupFlush} > ${vaporScope}${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${vaporScope}${listGroupFlush} > ${vaporScope}${listGroupItem}:last-child`, {
	borderBottomWidth: '0',
})

globalStyle(`${vaporScope}${listGroupItemPrimary}`, {
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

globalStyle(`${vaporScope}${listGroupItemSecondary}`, {
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

globalStyle(`${vaporScope}${listGroupItemSuccess}`, {
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

globalStyle(`${vaporScope}${listGroupItemInfo}`, {
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

globalStyle(`${vaporScope}${listGroupItemWarning}`, {
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

globalStyle(`${vaporScope}${listGroupItemDanger}`, {
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

globalStyle(`${vaporScope}${listGroupItemLight}`, {
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

globalStyle(`${vaporScope}${listGroupItemDark}`, {
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

globalStyle(`${vaporScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
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
	borderRadius: '0.15rem',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${vaporScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${vaporScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${vaporScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${vaporScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${vaporScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${vaporScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${vaporScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${vaporScope}${toast}`, {
	vars: {
		[varBsToastZindex]: '1090',
		[varBsToastPaddingX]: '0.75rem',
		[varBsToastPaddingY]: '0.5rem',
		[varBsToastSpacing]: '1.5rem',
		[varBsToastMaxWidth]: '350px',
		[varBsToastFontSize]: '0.875rem',
		[varBsToastColor]: '#fff',
		[varBsToastBg]: '#6f42c1',
		[varBsToastBorderWidth]: varBsBorderWidth,
		[varBsToastBorderColor]: varBsBorderColorTranslucent,
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: '#fff',
		[varBsToastHeaderBg]: '#6f42c1',
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

globalStyle(`${vaporScope}${toast}${toastShowing}`, {
	opacity: '0',
})

globalStyle(`${vaporScope}${toast}:not(${toastShow})`, {
	display: 'none',
})

globalStyle(`${vaporScope}${toastContainer}`, {
	vars: {
		[varBsToastZindex]: '1090',
	},
	position: 'absolute',
	zIndex: varBsToastZindex,
	width: 'max-content',
	maxWidth: '100%',
	pointerEvents: 'none',
})

globalStyle(`${vaporScope}${toastContainer} > :not(:last-child)`, {
	marginBottom: varBsToastSpacing,
})

globalStyle(`${vaporScope}${toastHeader}`, {
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

globalStyle(`${vaporScope}${toastHeader} ${vaporScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${vaporScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})

globalStyle(`${vaporScope}${modal}`, {
	vars: {
		[varBsModalZindex]: '1055',
		[varBsModalWidth]: '500px',
		[varBsModalPadding]: '1rem',
		[varBsModalMargin]: '0.5rem',
		[varBsModalColor]: '#fff',
		[varBsModalBg]: '#6f42c1',
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

globalStyle(`${vaporScope}${modalDialog}`, {
	position: 'relative',
	width: 'auto',
	margin: varBsModalMargin,
	pointerEvents: 'none',
})

globalStyle(`${vaporScope}${modal}${modalFade} ${vaporScope}${modalDialog}`, {
	transform: 'translate(0, -50px)',
	transition: 'transform 0.3s ease-out',
})

globalStyle(`${vaporScope}${modal}${modalFade} ${vaporScope}${modalDialog}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${modal}${modalShowHook} ${vaporScope}${modalDialog}`, {
	transform: 'none',
})

globalStyle(`${vaporScope}${modal}${modalStatic} ${vaporScope}${modalDialog}`, {
	transform: 'scale(1.02)',
})

globalStyle(`${vaporScope}${modalDialogScrollable}`, {
	height: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${vaporScope}${modalDialogScrollable} ${vaporScope}${modalContent}`, {
	maxHeight: '100%',
	overflow: 'hidden',
})

globalStyle(`${vaporScope}${modalDialogScrollable} ${vaporScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${vaporScope}${modalDialogCentered}`, {
	display: 'flex',
	alignItems: 'center',
	minHeight: `calc(100% - ${varBsModalMargin} * 2)`,
})

globalStyle(`${vaporScope}${modalContent}`, {
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

globalStyle(`${vaporScope}${modalBackdrop}`, {
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

globalStyle(`${vaporScope}${modalBackdrop}${modalFade}`, {
	opacity: '0',
})

globalStyle(`${vaporScope}${modalBackdrop}${modalShowHook}`, {
	opacity: varBsBackdropOpacity,
})

globalStyle(`${vaporScope}${modalHeader}`, {
	display: 'flex',
	flexShrink: '0',
	alignItems: 'center',
	padding: varBsModalHeaderPadding,
	borderBottom: `${varBsModalHeaderBorderWidth} solid ${varBsModalHeaderBorderColor}`,
	borderTopLeftRadius: varBsModalInnerBorderRadius,
	borderTopRightRadius: varBsModalInnerBorderRadius,
})

globalStyle(`${vaporScope}${modalHeader} ${vaporScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${vaporScope}${modalTitle}`, {
	marginBottom: '0',
	lineHeight: varBsModalTitleLineHeight,
})

globalStyle(`${vaporScope}${modalBody}`, {
	position: 'relative',
	flex: '1 1 auto',
	padding: varBsModalPadding,
})

globalStyle(`${vaporScope}${modalFooter}`, {
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

globalStyle(`${vaporScope}${modalFooter} > *`, {
	margin: `calc(${varBsModalFooterGap} * 0.5)`,
})

globalStyle(`${vaporScope}${modal}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalMargin]: '1.75rem',
				[varBsModalBoxShadow]: varBsBoxShadow,
			},
		},
	},
})

globalStyle(`${vaporScope}${modalDialog}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: varBsModalWidth,
			marginRight: 'auto',
			marginLeft: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsModalWidth]: '300px',
			},
		},
	},
})

globalStyle(`${vaporScope}${modalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${vaporScope}${modalXl}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsModalWidth]: '800px',
			},
		},
	},
})

globalStyle(`${vaporScope}${modalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsModalWidth]: '1140px',
			},
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreen}`, {
	width: '100vw',
	maxWidth: 'none',
	height: '100%',
	margin: '0',
})

globalStyle(`${vaporScope}${modalFullscreen} ${vaporScope}${modalContent}`, {
	height: '100%',
	border: '0',
	borderRadius: '0',
})

globalStyle(`${vaporScope}${modalFullscreen} ${vaporScope}${modalHeader}`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}${modalFullscreen} ${vaporScope}${modalFooter}`, {
	borderRadius: '0',
})

globalStyle(`${vaporScope}${modalFullscreen} ${vaporScope}${modalBody}`, {
	overflowY: 'auto',
})

globalStyle(`${vaporScope}${modalFullscreenSmDown}`, {
	'@media': {
		'(max-width: 575.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenSmDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 575.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenSmDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenSmDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 575.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenSmDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 575.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown}`, {
	'@media': {
		'(max-width: 767.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 767.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 767.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenMdDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 767.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown}`, {
	'@media': {
		'(max-width: 991.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 991.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 991.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenLgDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 991.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXlDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			width: '100vw',
			maxWidth: 'none',
			height: '100%',
			margin: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown} ${vaporScope}${modalContent}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			height: '100%',
			border: '0',
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown} ${vaporScope}${modalHeader}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown} ${vaporScope}${modalFooter}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			borderRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${modalFullscreenXxlDown} ${vaporScope}${modalBody}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			overflowY: 'auto',
		},
	},
})

globalStyle(`${vaporScope}${tooltip}`, {
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
		[varBsTooltipOpacity]: '1',
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

globalStyle(`${vaporScope}${tooltip}${tooltipShow}`, {
	opacity: varBsTooltipOpacity,
})

globalStyle(`${vaporScope}${tooltip} ${vaporScope}${tooltipArrow}`, {
	display: 'block',
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

globalStyle(`${vaporScope}${tooltip} ${vaporScope}${tooltipArrow}::before`, {
	position: 'absolute',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
})

globalStyle(`${vaporScope}${bsTooltipTop} ${vaporScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${vaporScope}${bsTooltipAuto}[data-popper-placement^=top] ${vaporScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${vaporScope}${bsTooltipTop} ${vaporScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${vaporScope}${bsTooltipAuto}[data-popper-placement^=top] ${vaporScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${vaporScope}${bsTooltipEnd} ${vaporScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${vaporScope}${bsTooltipAuto}[data-popper-placement^=right] ${vaporScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${vaporScope}${bsTooltipEnd} ${vaporScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${vaporScope}${bsTooltipAuto}[data-popper-placement^=right] ${vaporScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${vaporScope}${bsTooltipBottom} ${vaporScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${vaporScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${vaporScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${vaporScope}${bsTooltipBottom} ${vaporScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${vaporScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${vaporScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${vaporScope}${bsTooltipStart} ${vaporScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${vaporScope}${bsTooltipAuto}[data-popper-placement^=left] ${vaporScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${vaporScope}${bsTooltipStart} ${vaporScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${vaporScope}${bsTooltipAuto}[data-popper-placement^=left] ${vaporScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${vaporScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: 'center',
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})

globalStyle(`${vaporScope}${popover}`, {
	vars: {
		[varBsPopoverZindex]: '1070',
		[varBsPopoverMaxWidth]: '276px',
		[varBsPopoverFontSize]: '0.875rem',
		[varBsPopoverBg]: '#6f42c1',
		[varBsPopoverBorderWidth]: varBsBorderWidth,
		[varBsPopoverBorderColor]: varBsBorderColorTranslucent,
		[varBsPopoverBorderRadius]: varBsBorderRadiusLg,
		[varBsPopoverInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - ${varBsBorderWidth})`,
		[varBsPopoverBoxShadow]: varBsBoxShadow,
		[varBsPopoverHeaderPaddingX]: '1rem',
		[varBsPopoverHeaderPaddingY]: '0.5rem',
		[varBsPopoverHeaderFontSize]: '1rem',
		[varBsPopoverHeaderColor]: '#fff',
		[varBsPopoverHeaderBg]: varBsSecondaryBg,
		[varBsPopoverBodyPaddingX]: '1rem',
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

globalStyle(`${vaporScope}${popover} ${vaporScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${popoverArrow}::before`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${vaporScope}${bsPopoverTop} > ${vaporScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=top] > ${vaporScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${vaporScope}${bsPopoverTop} > ${vaporScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=top] > ${vaporScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${vaporScope}${bsPopoverTop} > ${vaporScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=top] > ${vaporScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${vaporScope}${bsPopoverTop} > ${vaporScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=top] > ${vaporScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${vaporScope}${bsPopoverTop} > ${vaporScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=top] > ${vaporScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${vaporScope}${bsPopoverEnd} > ${vaporScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=right] > ${vaporScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${vaporScope}${bsPopoverEnd} > ${vaporScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=right] > ${vaporScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${vaporScope}${bsPopoverEnd} > ${vaporScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=right] > ${vaporScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${vaporScope}${bsPopoverEnd} > ${vaporScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=right] > ${vaporScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${vaporScope}${bsPopoverEnd} > ${vaporScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=right] > ${vaporScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${vaporScope}${bsPopoverBottom} > ${vaporScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${vaporScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${vaporScope}${bsPopoverBottom} > ${vaporScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${vaporScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${vaporScope}${bsPopoverBottom} > ${vaporScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${vaporScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${vaporScope}${bsPopoverBottom} > ${vaporScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${vaporScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${vaporScope}${bsPopoverBottom} > ${vaporScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${vaporScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${vaporScope}${bsPopoverBottom} ${vaporScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=bottom] ${vaporScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${vaporScope}${bsPopoverStart} > ${vaporScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=left] > ${vaporScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${vaporScope}${bsPopoverStart} > ${vaporScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=left] > ${vaporScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${vaporScope}${bsPopoverStart} > ${vaporScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=left] > ${vaporScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${vaporScope}${bsPopoverStart} > ${vaporScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=left] > ${vaporScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${vaporScope}${bsPopoverStart} > ${vaporScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-placement^=left] > ${vaporScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${vaporScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${vaporScope}${popoverHeader}:empty`, {
	display: 'none',
})

globalStyle(`${vaporScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

globalStyle(`${vaporScope}${carousel}`, {
	position: 'relative',
})

globalStyle(`${vaporScope}${carousel}${pointerEvent}`, {
	touchAction: 'pan-y',
})

globalStyle(`${vaporScope}${carouselInner}`, {
	position: 'relative',
	width: '100%',
	overflow: 'hidden',
})

globalStyle(`${vaporScope}${carouselInner}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${vaporScope}${carouselItem}`, {
	position: 'relative',
	display: 'none',
	float: 'left',
	width: '100%',
	marginRight: '-100%',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
	transition: 'transform 0.6s ease-in-out',
})

globalStyle(`${vaporScope}${carouselItem}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${carouselItem}${active}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${carouselItemNext}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${carouselItemPrev}`, {
	display: 'block',
})

globalStyle(`${vaporScope}${carouselItemNext}:not(${carouselItemStart})`, {
	transform: 'translateX(100%)',
})

globalStyle(`${vaporScope}${active}${carouselItemEnd}`, {
	transform: 'translateX(100%)',
})

globalStyle(`${vaporScope}${carouselItemPrev}:not(${carouselItemEnd})`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${vaporScope}${active}${carouselItemStart}`, {
	transform: 'translateX(-100%)',
})

globalStyle(`${vaporScope}${carouselFade} ${vaporScope}${carouselItem}`, {
	opacity: '0',
	transitionProperty: 'opacity',
	transform: 'none',
})

globalStyle(`${vaporScope}${carouselFade} ${vaporScope}${carouselItem}${active}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${vaporScope}${carouselFade} ${vaporScope}${carouselItemNext}${carouselItemStart}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${vaporScope}${carouselFade} ${vaporScope}${carouselItemPrev}${carouselItemEnd}`, {
	zIndex: '1',
	opacity: '1',
})

globalStyle(`${vaporScope}${carouselFade} ${vaporScope}${active}${carouselItemStart}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${vaporScope}${carouselFade} ${vaporScope}${active}${carouselItemEnd}`, {
	zIndex: '0',
	opacity: '0',
	transition: 'opacity 0s 0.6s',
})

globalStyle(`${vaporScope}${carouselFade} ${vaporScope}${active}${carouselItemStart}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${carouselFade} ${vaporScope}${active}${carouselItemEnd}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${carouselControlPrev}`, {
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

globalStyle(`${vaporScope}${carouselControlNext}`, {
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

globalStyle(`${vaporScope}${carouselControlPrev}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${carouselControlNext}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${carouselControlPrev}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${vaporScope}${carouselControlPrev}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${vaporScope}${carouselControlNext}:hover`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${vaporScope}${carouselControlNext}:focus`, {
	color: '#fff',
	textDecoration: 'none',
	outline: '0',
	opacity: '0.9',
})

globalStyle(`${vaporScope}${carouselControlPrev}`, {
	left: '0',
})

globalStyle(`${vaporScope}${carouselControlNext}`, {
	right: '0',
})

globalStyle(`${vaporScope}${carouselControlPrevIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${vaporScope}${carouselControlNextIcon}`, {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: '100% 100%',
})

globalStyle(`${vaporScope}${carouselControlPrevIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0\'/%3e%3c/svg%3e") ',
})

globalStyle(`${vaporScope}${carouselControlNextIcon}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708\'/%3e%3c/svg%3e") ',
})

globalStyle(`${vaporScope}${carouselIndicators}`, {
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

globalStyle(`${vaporScope}${carouselIndicators} ${vaporScope}[data-bs-target]`, {
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

globalStyle(`${vaporScope}${carouselIndicators} ${vaporScope}[data-bs-target]`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${carouselIndicators} ${vaporScope}${active}`, {
	opacity: '1',
})

globalStyle(`${vaporScope}${carouselCaption}`, {
	position: 'absolute',
	right: '15%',
	bottom: '1.25rem',
	left: '15%',
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	color: varBsCarouselCaptionColor,
	textAlign: 'center',
})

globalStyle(`${vaporScope}${carouselDark}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
	},
})

globalStyle(`${vaporScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${vaporScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
	},
})

globalStyle(`${vaporScope}${spinnerGrow}`, {
	display: 'inline-block',
	flexShrink: '0',
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: '50%',
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
})

globalStyle(`${vaporScope}${spinnerBorder}`, {
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

globalStyle(`${vaporScope}${spinnerBorder}`, {
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

globalStyle(`${vaporScope}${spinnerBorderSm}`, {
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

globalStyle(`${vaporScope}${spinnerGrow}`, {
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

globalStyle(`${vaporScope}${spinnerGrowSm}`, {
	vars: {
		[varBsSpinnerWidth]: '1rem',
		[varBsSpinnerHeight]: '1rem',
	},
})

globalStyle(`${vaporScope}${spinnerBorder}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

globalStyle(`${vaporScope}${spinnerGrow}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

globalStyle(`${vaporScope}${offcanvas}`, {
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

globalStyle(`${vaporScope}${offcanvasXxl}`, {
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

globalStyle(`${vaporScope}${offcanvasXl}`, {
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

globalStyle(`${vaporScope}${offcanvasLg}`, {
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

globalStyle(`${vaporScope}${offcanvasMd}`, {
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

globalStyle(`${vaporScope}${offcanvasSm}`, {
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

globalStyle(`${vaporScope}${offcanvasSm}`, {
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

globalStyle(`${vaporScope}${offcanvasSm}`, {
	'@media': {
		'(max-width: 575.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasSm}${offcanvasStart}`, {
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

globalStyle(`${vaporScope}${offcanvasSm}${offcanvasEnd}`, {
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

globalStyle(`${vaporScope}${offcanvasSm}${offcanvasTop}`, {
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

globalStyle(`${vaporScope}${offcanvasSm}${offcanvasBottom}`, {
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

globalStyle(`${vaporScope}${offcanvasSm}${showing}`, {
	'@media': {
		'(max-width: 575.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasSm}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 575.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasSm}${showing}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasSm}${hiding}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasSm}`, {
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

globalStyle(`${vaporScope}${offcanvasSm} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasSm} ${vaporScope}${offcanvasBody}`, {
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

globalStyle(`${vaporScope}${offcanvasMd}`, {
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

globalStyle(`${vaporScope}${offcanvasMd}`, {
	'@media': {
		'(max-width: 767.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasMd}${offcanvasStart}`, {
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

globalStyle(`${vaporScope}${offcanvasMd}${offcanvasEnd}`, {
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

globalStyle(`${vaporScope}${offcanvasMd}${offcanvasTop}`, {
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

globalStyle(`${vaporScope}${offcanvasMd}${offcanvasBottom}`, {
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

globalStyle(`${vaporScope}${offcanvasMd}${showing}`, {
	'@media': {
		'(max-width: 767.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasMd}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 767.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasMd}${showing}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasMd}${hiding}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasMd}`, {
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

globalStyle(`${vaporScope}${offcanvasMd} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasMd} ${vaporScope}${offcanvasBody}`, {
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

globalStyle(`${vaporScope}${offcanvasLg}`, {
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

globalStyle(`${vaporScope}${offcanvasLg}`, {
	'@media': {
		'(max-width: 991.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasLg}${offcanvasStart}`, {
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

globalStyle(`${vaporScope}${offcanvasLg}${offcanvasEnd}`, {
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

globalStyle(`${vaporScope}${offcanvasLg}${offcanvasTop}`, {
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

globalStyle(`${vaporScope}${offcanvasLg}${offcanvasBottom}`, {
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

globalStyle(`${vaporScope}${offcanvasLg}${showing}`, {
	'@media': {
		'(max-width: 991.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasLg}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 991.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasLg}${showing}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasLg}${hiding}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasLg}`, {
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

globalStyle(`${vaporScope}${offcanvasLg} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasLg} ${vaporScope}${offcanvasBody}`, {
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

globalStyle(`${vaporScope}${offcanvasXl}`, {
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

globalStyle(`${vaporScope}${offcanvasXl}`, {
	'@media': {
		'(max-width: 1199.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXl}${offcanvasStart}`, {
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

globalStyle(`${vaporScope}${offcanvasXl}${offcanvasEnd}`, {
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

globalStyle(`${vaporScope}${offcanvasXl}${offcanvasTop}`, {
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

globalStyle(`${vaporScope}${offcanvasXl}${offcanvasBottom}`, {
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

globalStyle(`${vaporScope}${offcanvasXl}${showing}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXl}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 1199.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXl}${showing}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXl}${hiding}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXl}`, {
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

globalStyle(`${vaporScope}${offcanvasXl} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXl} ${vaporScope}${offcanvasBody}`, {
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

globalStyle(`${vaporScope}${offcanvasXxl}`, {
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

globalStyle(`${vaporScope}${offcanvasXxl}`, {
	'@media': {
		'(max-width: 1399.98px) and (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXxl}${offcanvasStart}`, {
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

globalStyle(`${vaporScope}${offcanvasXxl}${offcanvasEnd}`, {
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

globalStyle(`${vaporScope}${offcanvasXxl}${offcanvasTop}`, {
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

globalStyle(`${vaporScope}${offcanvasXxl}${offcanvasBottom}`, {
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

globalStyle(`${vaporScope}${offcanvasXxl}${showing}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXxl}${show}:not(${hiding})`, {
	'@media': {
		'(max-width: 1399.98px)': {
			transform: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXxl}${showing}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXxl}${hiding}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXxl}`, {
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

globalStyle(`${vaporScope}${offcanvasXxl} ${vaporScope}${offcanvasHeader}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvasXxl} ${vaporScope}${offcanvasBody}`, {
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

globalStyle(`${vaporScope}${offcanvas}`, {
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

globalStyle(`${vaporScope}${offcanvas}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${offcanvas}${offcanvasStart}`, {
	top: '0',
	left: '0',
	width: varBsOffcanvasWidth,
	borderRight: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateX(-100%)',
})

globalStyle(`${vaporScope}${offcanvas}${offcanvasEnd}`, {
	top: '0',
	right: '0',
	width: varBsOffcanvasWidth,
	borderLeft: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateX(100%)',
})

globalStyle(`${vaporScope}${offcanvas}${offcanvasTop}`, {
	top: '0',
	right: '0',
	left: '0',
	height: varBsOffcanvasHeight,
	maxHeight: '100%',
	borderBottom: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateY(-100%)',
})

globalStyle(`${vaporScope}${offcanvas}${offcanvasBottom}`, {
	right: '0',
	left: '0',
	height: varBsOffcanvasHeight,
	maxHeight: '100%',
	borderTop: `${varBsOffcanvasBorderWidth} solid ${varBsOffcanvasBorderColor}`,
	transform: 'translateY(100%)',
})

globalStyle(`${vaporScope}${offcanvas}${showing}`, {
	transform: 'none',
})

globalStyle(`${vaporScope}${offcanvas}${show}:not(${hiding})`, {
	transform: 'none',
})

globalStyle(`${vaporScope}${offcanvas}${showing}`, {
	visibility: 'visible',
})

globalStyle(`${vaporScope}${offcanvas}${hiding}`, {
	visibility: 'visible',
})

globalStyle(`${vaporScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${vaporScope}${offcanvasBackdrop}`, {
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: '1040',
	width: '100vw',
	height: '100vh',
	backgroundColor: '#000',
})

globalStyle(`${vaporScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${vaporScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})

globalStyle(`${vaporScope}${offcanvasHeader}`, {
	display: 'flex',
	alignItems: 'center',
	padding: `${varBsOffcanvasPaddingY} ${varBsOffcanvasPaddingX}`,
})

globalStyle(`${vaporScope}${offcanvasHeader} ${vaporScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${vaporScope}${offcanvasTitle}`, {
	marginBottom: '0',
	lineHeight: varBsOffcanvasTitleLineHeight,
})

globalStyle(`${vaporScope}${offcanvasBody}`, {
	flexGrow: '1',
	padding: `${varBsOffcanvasPaddingY} ${varBsOffcanvasPaddingX}`,
	overflowY: 'auto',
})

globalStyle(`${vaporScope}${placeholder}`, {
	display: 'inline-block',
	minHeight: '1em',
	verticalAlign: 'middle',
	cursor: 'wait',
	backgroundColor: 'currentcolor',
	opacity: '0.5',
})

globalStyle(`${vaporScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${vaporScope}${placeholderXs}`, {
	minHeight: '0.6em',
})

globalStyle(`${vaporScope}${placeholderSm}`, {
	minHeight: '0.8em',
})

globalStyle(`${vaporScope}${placeholderLg}`, {
	minHeight: '1.2em',
})

globalStyle(`${vaporScope}${placeholderGlow} ${vaporScope}${placeholder}`, {
	animation: 'placeholder-glow 2s ease-in-out infinite',
})

globalKeyframes('placeholder-glow', {
	'50%': {
		opacity: '0.2',
	},
})

globalStyle(`${vaporScope}${placeholderWave}`, {
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

globalStyle(`${vaporScope}${clearfix}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${vaporScope}${textBgPrimary}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${textBgSecondary}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${textBgSuccess}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${textBgInfo}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${textBgWarning}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${textBgDanger}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${textBgLight}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${textBgDark}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkPrimary}`, {
	color: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkPrimary}:hover`, {
	color: `RGBA(89, 53, 154, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(89, 53, 154, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(89, 53, 154, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkPrimary}:focus`, {
	color: `RGBA(89, 53, 154, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(89, 53, 154, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(89, 53, 154, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkSecondary}`, {
	color: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkSecondary}:hover`, {
	color: `RGBA(187, 46, 147, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(187, 46, 147, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(187, 46, 147, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkSecondary}:focus`, {
	color: `RGBA(187, 46, 147, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(187, 46, 147, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(187, 46, 147, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkSuccess}`, {
	color: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkSuccess}:hover`, {
	color: `RGBA(48, 194, 103, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(48, 194, 103, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(48, 194, 103, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkSuccess}:focus`, {
	color: `RGBA(48, 194, 103, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(48, 194, 103, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(48, 194, 103, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkInfo}`, {
	color: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkInfo}:hover`, {
	color: `RGBA(22, 130, 197, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(22, 130, 197, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(22, 130, 197, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkInfo}:focus`, {
	color: `RGBA(22, 130, 197, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(22, 130, 197, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(22, 130, 197, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkWarning}`, {
	color: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkWarning}:hover`, {
	color: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkWarning}:focus`, {
	color: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkDanger}`, {
	color: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkDanger}:hover`, {
	color: `RGBA(182, 61, 68, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(182, 61, 68, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(182, 61, 68, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkDanger}:focus`, {
	color: `RGBA(182, 61, 68, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(182, 61, 68, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(182, 61, 68, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkLight}`, {
	color: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkLight}:hover`, {
	color: `RGBA(54, 174, 186, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(54, 174, 186, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(54, 174, 186, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkLight}:focus`, {
	color: `RGBA(54, 174, 186, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(54, 174, 186, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(54, 174, 186, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkDark}`, {
	color: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkDark}:hover`, {
	color: `RGBA(18, 2, 33, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(18, 2, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(18, 2, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkDark}:focus`, {
	color: `RGBA(18, 2, 33, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(18, 2, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(18, 2, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkBodyEmphasis}`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkBodyEmphasis}:hover`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.75')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
})

globalStyle(`${vaporScope}${linkBodyEmphasis}:focus`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.75')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
})

globalStyle(`${vaporScope}${focusRing}:focus`, {
	outline: '0',
	boxShadow: `var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) ${varBsFocusRingWidth} ${varBsFocusRingColor}`,
})

globalStyle(`${vaporScope}${iconLink}`, {
	display: 'inline-flex',
	gap: '0.375rem',
	alignItems: 'center',
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.5')})`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.5')})`,
	textUnderlineOffset: '0.25em',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
})

globalStyle(`${vaporScope}${iconLink} > ${vaporScope}${bi}`, {
	flexShrink: '0',
	width: '1em',
	height: '1em',
	fill: 'currentcolor',
	transition: '0.2s ease-in-out transform',
})

globalStyle(`${vaporScope}${iconLink} > ${vaporScope}${bi}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${iconLinkHover}:hover > ${vaporScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${vaporScope}${iconLinkHover}:focus-visible > ${vaporScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${vaporScope}${ratio}`, {
	position: 'relative',
	width: '100%',
})

globalStyle(`${vaporScope}${ratio}::before`, {
	display: 'block',
	paddingTop: varBsAspectRatio,
	content: '""',
})

globalStyle(`${vaporScope}${ratio} > *`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
})

globalStyle(`${vaporScope}${ratio1x1}`, {
	vars: {
		[varBsAspectRatio]: '100%',
	},
})

globalStyle(`${vaporScope}${ratio4x3}`, {
	vars: {
		[varBsAspectRatio]: '75%',
	},
})

globalStyle(`${vaporScope}${ratio16x9}`, {
	vars: {
		[varBsAspectRatio]: '56.25%',
	},
})

globalStyle(`${vaporScope}${ratio21x9}`, {
	vars: {
		[varBsAspectRatio]: '42.8571428571%',
	},
})

globalStyle(`${vaporScope}${fixedTop}`, {
	position: 'fixed',
	top: '0',
	right: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${vaporScope}${fixedBottom}`, {
	position: 'fixed',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${vaporScope}${stickyTop}`, {
	position: 'sticky',
	top: '0',
	zIndex: '1020',
})

globalStyle(`${vaporScope}${stickyBottom}`, {
	position: 'sticky',
	bottom: '0',
	zIndex: '1020',
})

globalStyle(`${vaporScope}${stickySmTop}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${stickySmBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${stickyMdTop}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${stickyMdBottom}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${stickyLgTop}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${stickyLgBottom}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${stickyXlTop}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${stickyXlBottom}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${stickyXxlTop}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${stickyXxlBottom}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${vaporScope}${hstack}`, {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	alignSelf: 'stretch',
})

globalStyle(`${vaporScope}${vstack}`, {
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	alignSelf: 'stretch',
})

globalStyle(`${vaporScope}${visuallyHidden}`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${vaporScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within)`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${vaporScope}${visuallyHidden}:not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${vaporScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within):not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${vaporScope}${visuallyHidden} *`, {
	overflow: 'hidden !important',
})

globalStyle(`${vaporScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within) *`, {
	overflow: 'hidden !important',
})

globalStyle(`${vaporScope}${stretchedLink}::after`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1',
	content: '""',
})

globalStyle(`${vaporScope}${textTruncate}`, {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

globalStyle(`${vaporScope}${vr}`, {
	display: 'inline-block',
	alignSelf: 'stretch',
	width: '1px',
	minHeight: '1em',
	backgroundColor: 'currentcolor',
	opacity: '0.25',
})

globalStyle(`${vaporScope}${alignBaseline}`, {
	verticalAlign: 'baseline !important',
})

globalStyle(`${vaporScope}${alignTop}`, {
	verticalAlign: 'top !important',
})

globalStyle(`${vaporScope}${alignMiddle}`, {
	verticalAlign: 'middle !important',
})

globalStyle(`${vaporScope}${alignBottom}`, {
	verticalAlign: 'bottom !important',
})

globalStyle(`${vaporScope}${alignTextBottom}`, {
	verticalAlign: 'text-bottom !important',
})

globalStyle(`${vaporScope}${alignTextTop}`, {
	verticalAlign: 'text-top !important',
})

globalStyle(`${vaporScope}${floatStart}`, {
	float: 'left !important',
})

globalStyle(`${vaporScope}${floatEnd}`, {
	float: 'right !important',
})

globalStyle(`${vaporScope}${floatNone}`, {
	float: 'none !important',
})

globalStyle(`${vaporScope}${objectFitContain}`, {
	OObjectFit: 'contain !important',
	objectFit: 'contain !important',
})

globalStyle(`${vaporScope}${objectFitCover}`, {
	OObjectFit: 'cover !important',
	objectFit: 'cover !important',
})

globalStyle(`${vaporScope}${objectFitFill}`, {
	OObjectFit: 'fill !important',
	objectFit: 'fill !important',
})

globalStyle(`${vaporScope}${objectFitScale}`, {
	OObjectFit: 'scale-down !important',
	objectFit: 'scale-down !important',
})

globalStyle(`${vaporScope}${objectFitNone}`, {
	OObjectFit: 'none !important',
	objectFit: 'none !important',
})

globalStyle(`${vaporScope}${opacity0}`, {
	opacity: '0 !important',
})

globalStyle(`${vaporScope}${opacity25}`, {
	opacity: '0.25 !important',
})

globalStyle(`${vaporScope}${opacity50}`, {
	opacity: '0.5 !important',
})

globalStyle(`${vaporScope}${opacity75}`, {
	opacity: '0.75 !important',
})

globalStyle(`${vaporScope}${opacity100}`, {
	opacity: '1 !important',
})

globalStyle(`${vaporScope}${overflowAuto}`, {
	overflow: 'auto !important',
})

globalStyle(`${vaporScope}${overflowHidden}`, {
	overflow: 'hidden !important',
})

globalStyle(`${vaporScope}${overflowVisible}`, {
	overflow: 'visible !important',
})

globalStyle(`${vaporScope}${overflowScroll}`, {
	overflow: 'scroll !important',
})

globalStyle(`${vaporScope}${overflowXAuto}`, {
	overflowX: 'auto !important',
})

globalStyle(`${vaporScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${vaporScope}${overflowXVisible}`, {
	overflowX: 'visible !important',
})

globalStyle(`${vaporScope}${overflowXScroll}`, {
	overflowX: 'scroll !important',
})

globalStyle(`${vaporScope}${overflowYAuto}`, {
	overflowY: 'auto !important',
})

globalStyle(`${vaporScope}${overflowYHidden}`, {
	overflowY: 'hidden !important',
})

globalStyle(`${vaporScope}${overflowYVisible}`, {
	overflowY: 'visible !important',
})

globalStyle(`${vaporScope}${overflowYScroll}`, {
	overflowY: 'scroll !important',
})

globalStyle(`${vaporScope}${dInline}`, {
	display: 'inline !important',
})

globalStyle(`${vaporScope}${dInlineBlock}`, {
	display: 'inline-block !important',
})

globalStyle(`${vaporScope}${dBlock}`, {
	display: 'block !important',
})

globalStyle(`${vaporScope}${dGrid}`, {
	display: 'grid !important',
})

globalStyle(`${vaporScope}${dInlineGrid}`, {
	display: 'inline-grid !important',
})

globalStyle(`${vaporScope}${dTable}`, {
	display: 'table !important',
})

globalStyle(`${vaporScope}${dTableRow}`, {
	display: 'table-row !important',
})

globalStyle(`${vaporScope}${dTableCell}`, {
	display: 'table-cell !important',
})

globalStyle(`${vaporScope}${dFlex}`, {
	display: 'flex !important',
})

globalStyle(`${vaporScope}${dInlineFlex}`, {
	display: 'inline-flex !important',
})

globalStyle(`${vaporScope}${dNone}`, {
	display: 'none !important',
})

globalStyle(`${vaporScope}${shadow}`, {
	boxShadow: `${varBsBoxShadow} !important`,
})

globalStyle(`${vaporScope}${shadowSm}`, {
	boxShadow: `${varBsBoxShadowSm} !important`,
})

globalStyle(`${vaporScope}${shadowLg}`, {
	boxShadow: `${varBsBoxShadowLg} !important`,
})

globalStyle(`${vaporScope}${shadowNone}`, {
	boxShadow: 'none !important',
})

globalStyle(`${vaporScope}${focusRingPrimary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsPrimaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${vaporScope}${focusRingSecondary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSecondaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${vaporScope}${focusRingSuccess}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSuccessRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${vaporScope}${focusRingInfo}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsInfoRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${vaporScope}${focusRingWarning}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsWarningRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${vaporScope}${focusRingDanger}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDangerRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${vaporScope}${focusRingLight}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsLightRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${vaporScope}${focusRingDark}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDarkRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${vaporScope}${positionStatic}`, {
	position: 'static !important',
})

globalStyle(`${vaporScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${vaporScope}${positionAbsolute}`, {
	position: 'absolute !important',
})

globalStyle(`${vaporScope}${positionFixed}`, {
	position: 'fixed !important',
})

globalStyle(`${vaporScope}${positionSticky}`, {
	position: 'sticky !important',
})

globalStyle(`${vaporScope}${top0}`, {
	top: '0 !important',
})

globalStyle(`${vaporScope}${top50}`, {
	top: '50% !important',
})

globalStyle(`${vaporScope}${top100}`, {
	top: '100% !important',
})

globalStyle(`${vaporScope}${bottom0}`, {
	bottom: '0 !important',
})

globalStyle(`${vaporScope}${bottom50}`, {
	bottom: '50% !important',
})

globalStyle(`${vaporScope}${bottom100}`, {
	bottom: '100% !important',
})

globalStyle(`${vaporScope}${start0}`, {
	left: '0 !important',
})

globalStyle(`${vaporScope}${start50}`, {
	left: '50% !important',
})

globalStyle(`${vaporScope}${start100}`, {
	left: '100% !important',
})

globalStyle(`${vaporScope}${end0}`, {
	right: '0 !important',
})

globalStyle(`${vaporScope}${end50}`, {
	right: '50% !important',
})

globalStyle(`${vaporScope}${end100}`, {
	right: '100% !important',
})

globalStyle(`${vaporScope}${translateMiddle}`, {
	transform: 'translate(-50%, -50%) !important',
})

globalStyle(`${vaporScope}${translateMiddleX}`, {
	transform: 'translateX(-50%) !important',
})

globalStyle(`${vaporScope}${translateMiddleY}`, {
	transform: 'translateY(-50%) !important',
})

globalStyle(`${vaporScope}${border}`, {
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${vaporScope}${border0}`, {
	border: '0 !important',
})

globalStyle(`${vaporScope}${borderTop}`, {
	borderTop: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${vaporScope}${borderTop0}`, {
	borderTop: '0 !important',
})

globalStyle(`${vaporScope}${borderEnd}`, {
	borderRight: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${vaporScope}${borderEnd0}`, {
	borderRight: '0 !important',
})

globalStyle(`${vaporScope}${borderBottom}`, {
	borderBottom: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${vaporScope}${borderBottom0}`, {
	borderBottom: '0 !important',
})

globalStyle(`${vaporScope}${borderStart}`, {
	borderLeft: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${vaporScope}${borderStart0}`, {
	borderLeft: '0 !important',
})

globalStyle(`${vaporScope}${borderPrimary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsPrimaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderSecondary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSecondaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderSuccess}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSuccessRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderInfo}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsInfoRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderWarning}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWarningRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderDanger}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDangerRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderLight}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsLightRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderDark}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDarkRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderBlack}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsBlackRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderWhite}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWhiteRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${vaporScope}${borderPrimarySubtle}`, {
	borderColor: `${varBsPrimaryBorderSubtle} !important`,
})

globalStyle(`${vaporScope}${borderSecondarySubtle}`, {
	borderColor: `${varBsSecondaryBorderSubtle} !important`,
})

globalStyle(`${vaporScope}${borderSuccessSubtle}`, {
	borderColor: `${varBsSuccessBorderSubtle} !important`,
})

globalStyle(`${vaporScope}${borderInfoSubtle}`, {
	borderColor: `${varBsInfoBorderSubtle} !important`,
})

globalStyle(`${vaporScope}${borderWarningSubtle}`, {
	borderColor: `${varBsWarningBorderSubtle} !important`,
})

globalStyle(`${vaporScope}${borderDangerSubtle}`, {
	borderColor: `${varBsDangerBorderSubtle} !important`,
})

globalStyle(`${vaporScope}${borderLightSubtle}`, {
	borderColor: `${varBsLightBorderSubtle} !important`,
})

globalStyle(`${vaporScope}${borderDarkSubtle}`, {
	borderColor: `${varBsDarkBorderSubtle} !important`,
})

globalStyle(`${vaporScope}${border1}`, {
	borderWidth: '1px !important',
})

globalStyle(`${vaporScope}${border2}`, {
	borderWidth: '2px !important',
})

globalStyle(`${vaporScope}${border3}`, {
	borderWidth: '3px !important',
})

globalStyle(`${vaporScope}${border4}`, {
	borderWidth: '4px !important',
})

globalStyle(`${vaporScope}${border5}`, {
	borderWidth: '5px !important',
})

globalStyle(`${vaporScope}${borderOpacity10}`, {
	vars: {
		[varBsBorderOpacity]: '0.1',
	},
})

globalStyle(`${vaporScope}${borderOpacity25}`, {
	vars: {
		[varBsBorderOpacity]: '0.25',
	},
})

globalStyle(`${vaporScope}${borderOpacity50}`, {
	vars: {
		[varBsBorderOpacity]: '0.5',
	},
})

globalStyle(`${vaporScope}${borderOpacity75}`, {
	vars: {
		[varBsBorderOpacity]: '0.75',
	},
})

globalStyle(`${vaporScope}${borderOpacity100}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
})

globalStyle(`${vaporScope}${w25}`, {
	width: '25% !important',
})

globalStyle(`${vaporScope}${w50}`, {
	width: '50% !important',
})

globalStyle(`${vaporScope}${w75}`, {
	width: '75% !important',
})

globalStyle(`${vaporScope}${w100}`, {
	width: '100% !important',
})

globalStyle(`${vaporScope}${wAuto}`, {
	width: 'auto !important',
})

globalStyle(`${vaporScope}${mw100}`, {
	maxWidth: '100% !important',
})

globalStyle(`${vaporScope}${vw100}`, {
	width: '100vw !important',
})

globalStyle(`${vaporScope}${minVw100}`, {
	minWidth: '100vw !important',
})

globalStyle(`${vaporScope}${h25}`, {
	height: '25% !important',
})

globalStyle(`${vaporScope}${h50}`, {
	height: '50% !important',
})

globalStyle(`${vaporScope}${h75}`, {
	height: '75% !important',
})

globalStyle(`${vaporScope}${h100}`, {
	height: '100% !important',
})

globalStyle(`${vaporScope}${hAuto}`, {
	height: 'auto !important',
})

globalStyle(`${vaporScope}${mh100}`, {
	maxHeight: '100% !important',
})

globalStyle(`${vaporScope}${vh100}`, {
	height: '100vh !important',
})

globalStyle(`${vaporScope}${minVh100}`, {
	minHeight: '100vh !important',
})

globalStyle(`${vaporScope}${flexFill}`, {
	flex: '1 1 auto !important',
})

globalStyle(`${vaporScope}${flexRow}`, {
	flexDirection: 'row !important',
})

globalStyle(`${vaporScope}${flexColumn}`, {
	flexDirection: 'column !important',
})

globalStyle(`${vaporScope}${flexRowReverse}`, {
	flexDirection: 'row-reverse !important',
})

globalStyle(`${vaporScope}${flexColumnReverse}`, {
	flexDirection: 'column-reverse !important',
})

globalStyle(`${vaporScope}${flexGrow0}`, {
	flexGrow: '0 !important',
})

globalStyle(`${vaporScope}${flexGrow1}`, {
	flexGrow: '1 !important',
})

globalStyle(`${vaporScope}${flexShrink0}`, {
	flexShrink: '0 !important',
})

globalStyle(`${vaporScope}${flexShrink1}`, {
	flexShrink: '1 !important',
})

globalStyle(`${vaporScope}${flexWrap}`, {
	flexWrap: 'wrap !important',
})

globalStyle(`${vaporScope}${flexNowrap}`, {
	flexWrap: 'nowrap !important',
})

globalStyle(`${vaporScope}${flexWrapReverse}`, {
	flexWrap: 'wrap-reverse !important',
})

globalStyle(`${vaporScope}${justifyContentStart}`, {
	justifyContent: 'flex-start !important',
})

globalStyle(`${vaporScope}${justifyContentEnd}`, {
	justifyContent: 'flex-end !important',
})

globalStyle(`${vaporScope}${justifyContentCenter}`, {
	justifyContent: 'center !important',
})

globalStyle(`${vaporScope}${justifyContentBetween}`, {
	justifyContent: 'space-between !important',
})

globalStyle(`${vaporScope}${justifyContentAround}`, {
	justifyContent: 'space-around !important',
})

globalStyle(`${vaporScope}${justifyContentEvenly}`, {
	justifyContent: 'space-evenly !important',
})

globalStyle(`${vaporScope}${alignItemsStart}`, {
	alignItems: 'flex-start !important',
})

globalStyle(`${vaporScope}${alignItemsEnd}`, {
	alignItems: 'flex-end !important',
})

globalStyle(`${vaporScope}${alignItemsCenter}`, {
	alignItems: 'center !important',
})

globalStyle(`${vaporScope}${alignItemsBaseline}`, {
	alignItems: 'baseline !important',
})

globalStyle(`${vaporScope}${alignItemsStretch}`, {
	alignItems: 'stretch !important',
})

globalStyle(`${vaporScope}${alignContentStart}`, {
	alignContent: 'flex-start !important',
})

globalStyle(`${vaporScope}${alignContentEnd}`, {
	alignContent: 'flex-end !important',
})

globalStyle(`${vaporScope}${alignContentCenter}`, {
	alignContent: 'center !important',
})

globalStyle(`${vaporScope}${alignContentBetween}`, {
	alignContent: 'space-between !important',
})

globalStyle(`${vaporScope}${alignContentAround}`, {
	alignContent: 'space-around !important',
})

globalStyle(`${vaporScope}${alignContentStretch}`, {
	alignContent: 'stretch !important',
})

globalStyle(`${vaporScope}${alignSelfAuto}`, {
	alignSelf: 'auto !important',
})

globalStyle(`${vaporScope}${alignSelfStart}`, {
	alignSelf: 'flex-start !important',
})

globalStyle(`${vaporScope}${alignSelfEnd}`, {
	alignSelf: 'flex-end !important',
})

globalStyle(`${vaporScope}${alignSelfCenter}`, {
	alignSelf: 'center !important',
})

globalStyle(`${vaporScope}${alignSelfBaseline}`, {
	alignSelf: 'baseline !important',
})

globalStyle(`${vaporScope}${alignSelfStretch}`, {
	alignSelf: 'stretch !important',
})

globalStyle(`${vaporScope}${orderFirst}`, {
	order: '-1 !important',
})

globalStyle(`${vaporScope}${order0}`, {
	order: '0 !important',
})

globalStyle(`${vaporScope}${order1}`, {
	order: '1 !important',
})

globalStyle(`${vaporScope}${order2}`, {
	order: '2 !important',
})

globalStyle(`${vaporScope}${order3}`, {
	order: '3 !important',
})

globalStyle(`${vaporScope}${order4}`, {
	order: '4 !important',
})

globalStyle(`${vaporScope}${order5}`, {
	order: '5 !important',
})

globalStyle(`${vaporScope}${orderLast}`, {
	order: '6 !important',
})

globalStyle(`${vaporScope}${m0}`, {
	margin: '0 !important',
})

globalStyle(`${vaporScope}${m1}`, {
	margin: '0.25rem !important',
})

globalStyle(`${vaporScope}${m2}`, {
	margin: '0.5rem !important',
})

globalStyle(`${vaporScope}${m3}`, {
	margin: '1rem !important',
})

globalStyle(`${vaporScope}${m4}`, {
	margin: '1.5rem !important',
})

globalStyle(`${vaporScope}${m5}`, {
	margin: '3rem !important',
})

globalStyle(`${vaporScope}${mAuto}`, {
	margin: 'auto !important',
})

globalStyle(`${vaporScope}${mx0}`, {
	marginRight: '0 !important',
	marginLeft: '0 !important',
})

globalStyle(`${vaporScope}${mx1}`, {
	marginRight: '0.25rem !important',
	marginLeft: '0.25rem !important',
})

globalStyle(`${vaporScope}${mx2}`, {
	marginRight: '0.5rem !important',
	marginLeft: '0.5rem !important',
})

globalStyle(`${vaporScope}${mx3}`, {
	marginRight: '1rem !important',
	marginLeft: '1rem !important',
})

globalStyle(`${vaporScope}${mx4}`, {
	marginRight: '1.5rem !important',
	marginLeft: '1.5rem !important',
})

globalStyle(`${vaporScope}${mx5}`, {
	marginRight: '3rem !important',
	marginLeft: '3rem !important',
})

globalStyle(`${vaporScope}${mxAuto}`, {
	marginRight: 'auto !important',
	marginLeft: 'auto !important',
})

globalStyle(`${vaporScope}${my0}`, {
	marginTop: '0 !important',
	marginBottom: '0 !important',
})

globalStyle(`${vaporScope}${my1}`, {
	marginTop: '0.25rem !important',
	marginBottom: '0.25rem !important',
})

globalStyle(`${vaporScope}${my2}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${vaporScope}${my3}`, {
	marginTop: '1rem !important',
	marginBottom: '1rem !important',
})

globalStyle(`${vaporScope}${my4}`, {
	marginTop: '1.5rem !important',
	marginBottom: '1.5rem !important',
})

globalStyle(`${vaporScope}${my5}`, {
	marginTop: '3rem !important',
	marginBottom: '3rem !important',
})

globalStyle(`${vaporScope}${myAuto}`, {
	marginTop: 'auto !important',
	marginBottom: 'auto !important',
})

globalStyle(`${vaporScope}${mt0}`, {
	marginTop: '0 !important',
})

globalStyle(`${vaporScope}${mt1}`, {
	marginTop: '0.25rem !important',
})

globalStyle(`${vaporScope}${mt2}`, {
	marginTop: '0.5rem !important',
})

globalStyle(`${vaporScope}${mt3}`, {
	marginTop: '1rem !important',
})

globalStyle(`${vaporScope}${mt4}`, {
	marginTop: '1.5rem !important',
})

globalStyle(`${vaporScope}${mt5}`, {
	marginTop: '3rem !important',
})

globalStyle(`${vaporScope}${mtAuto}`, {
	marginTop: 'auto !important',
})

globalStyle(`${vaporScope}${me0}`, {
	marginRight: '0 !important',
})

globalStyle(`${vaporScope}${me1}`, {
	marginRight: '0.25rem !important',
})

globalStyle(`${vaporScope}${me2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${vaporScope}${me3}`, {
	marginRight: '1rem !important',
})

globalStyle(`${vaporScope}${me4}`, {
	marginRight: '1.5rem !important',
})

globalStyle(`${vaporScope}${me5}`, {
	marginRight: '3rem !important',
})

globalStyle(`${vaporScope}${meAuto}`, {
	marginRight: 'auto !important',
})

globalStyle(`${vaporScope}${mb0}`, {
	marginBottom: '0 !important',
})

globalStyle(`${vaporScope}${mb1}`, {
	marginBottom: '0.25rem !important',
})

globalStyle(`${vaporScope}${mb2}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${vaporScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${vaporScope}${mb4}`, {
	marginBottom: '1.5rem !important',
})

globalStyle(`${vaporScope}${mb5}`, {
	marginBottom: '3rem !important',
})

globalStyle(`${vaporScope}${mbAuto}`, {
	marginBottom: 'auto !important',
})

globalStyle(`${vaporScope}${ms0}`, {
	marginLeft: '0 !important',
})

globalStyle(`${vaporScope}${ms1}`, {
	marginLeft: '0.25rem !important',
})

globalStyle(`${vaporScope}${ms2}`, {
	marginLeft: '0.5rem !important',
})

globalStyle(`${vaporScope}${ms3}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${vaporScope}${ms4}`, {
	marginLeft: '1.5rem !important',
})

globalStyle(`${vaporScope}${ms5}`, {
	marginLeft: '3rem !important',
})

globalStyle(`${vaporScope}${msAuto}`, {
	marginLeft: 'auto !important',
})

globalStyle(`${vaporScope}${p0}`, {
	padding: '0 !important',
})

globalStyle(`${vaporScope}${p1}`, {
	padding: '0.25rem !important',
})

globalStyle(`${vaporScope}${p2}`, {
	padding: '0.5rem !important',
})

globalStyle(`${vaporScope}${p3}`, {
	padding: '1rem !important',
})

globalStyle(`${vaporScope}${p4}`, {
	padding: '1.5rem !important',
})

globalStyle(`${vaporScope}${p5}`, {
	padding: '3rem !important',
})

globalStyle(`${vaporScope}${px0}`, {
	paddingRight: '0 !important',
	paddingLeft: '0 !important',
})

globalStyle(`${vaporScope}${px1}`, {
	paddingRight: '0.25rem !important',
	paddingLeft: '0.25rem !important',
})

globalStyle(`${vaporScope}${px2}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${vaporScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

globalStyle(`${vaporScope}${px4}`, {
	paddingRight: '1.5rem !important',
	paddingLeft: '1.5rem !important',
})

globalStyle(`${vaporScope}${px5}`, {
	paddingRight: '3rem !important',
	paddingLeft: '3rem !important',
})

globalStyle(`${vaporScope}${py0}`, {
	paddingTop: '0 !important',
	paddingBottom: '0 !important',
})

globalStyle(`${vaporScope}${py1}`, {
	paddingTop: '0.25rem !important',
	paddingBottom: '0.25rem !important',
})

globalStyle(`${vaporScope}${py2}`, {
	paddingTop: '0.5rem !important',
	paddingBottom: '0.5rem !important',
})

globalStyle(`${vaporScope}${py3}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${vaporScope}${py4}`, {
	paddingTop: '1.5rem !important',
	paddingBottom: '1.5rem !important',
})

globalStyle(`${vaporScope}${py5}`, {
	paddingTop: '3rem !important',
	paddingBottom: '3rem !important',
})

globalStyle(`${vaporScope}${pt0}`, {
	paddingTop: '0 !important',
})

globalStyle(`${vaporScope}${pt1}`, {
	paddingTop: '0.25rem !important',
})

globalStyle(`${vaporScope}${pt2}`, {
	paddingTop: '0.5rem !important',
})

globalStyle(`${vaporScope}${pt3}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${vaporScope}${pt4}`, {
	paddingTop: '1.5rem !important',
})

globalStyle(`${vaporScope}${pt5}`, {
	paddingTop: '3rem !important',
})

globalStyle(`${vaporScope}${pe0}`, {
	paddingRight: '0 !important',
})

globalStyle(`${vaporScope}${pe1}`, {
	paddingRight: '0.25rem !important',
})

globalStyle(`${vaporScope}${pe2}`, {
	paddingRight: '0.5rem !important',
})

globalStyle(`${vaporScope}${pe3}`, {
	paddingRight: '1rem !important',
})

globalStyle(`${vaporScope}${pe4}`, {
	paddingRight: '1.5rem !important',
})

globalStyle(`${vaporScope}${pe5}`, {
	paddingRight: '3rem !important',
})

globalStyle(`${vaporScope}${pb0}`, {
	paddingBottom: '0 !important',
})

globalStyle(`${vaporScope}${pb1}`, {
	paddingBottom: '0.25rem !important',
})

globalStyle(`${vaporScope}${pb2}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${vaporScope}${pb3}`, {
	paddingBottom: '1rem !important',
})

globalStyle(`${vaporScope}${pb4}`, {
	paddingBottom: '1.5rem !important',
})

globalStyle(`${vaporScope}${pb5}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${vaporScope}${ps0}`, {
	paddingLeft: '0 !important',
})

globalStyle(`${vaporScope}${ps1}`, {
	paddingLeft: '0.25rem !important',
})

globalStyle(`${vaporScope}${ps2}`, {
	paddingLeft: '0.5rem !important',
})

globalStyle(`${vaporScope}${ps3}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${vaporScope}${ps4}`, {
	paddingLeft: '1.5rem !important',
})

globalStyle(`${vaporScope}${ps5}`, {
	paddingLeft: '3rem !important',
})

globalStyle(`${vaporScope}${gap0}`, {
	gap: '0 !important',
})

globalStyle(`${vaporScope}${gap1}`, {
	gap: '0.25rem !important',
})

globalStyle(`${vaporScope}${gap2}`, {
	gap: '0.5rem !important',
})

globalStyle(`${vaporScope}${gap3}`, {
	gap: '1rem !important',
})

globalStyle(`${vaporScope}${gap4}`, {
	gap: '1.5rem !important',
})

globalStyle(`${vaporScope}${gap5}`, {
	gap: '3rem !important',
})

globalStyle(`${vaporScope}${rowGap0}`, {
	rowGap: '0 !important',
})

globalStyle(`${vaporScope}${rowGap1}`, {
	rowGap: '0.25rem !important',
})

globalStyle(`${vaporScope}${rowGap2}`, {
	rowGap: '0.5rem !important',
})

globalStyle(`${vaporScope}${rowGap3}`, {
	rowGap: '1rem !important',
})

globalStyle(`${vaporScope}${rowGap4}`, {
	rowGap: '1.5rem !important',
})

globalStyle(`${vaporScope}${rowGap5}`, {
	rowGap: '3rem !important',
})

globalStyle(`${vaporScope}${columnGap0}`, {
	MozColumnGap: '0 !important',
	columnGap: '0 !important',
})

globalStyle(`${vaporScope}${columnGap1}`, {
	MozColumnGap: '0.25rem !important',
	columnGap: '0.25rem !important',
})

globalStyle(`${vaporScope}${columnGap2}`, {
	MozColumnGap: '0.5rem !important',
	columnGap: '0.5rem !important',
})

globalStyle(`${vaporScope}${columnGap3}`, {
	MozColumnGap: '1rem !important',
	columnGap: '1rem !important',
})

globalStyle(`${vaporScope}${columnGap4}`, {
	MozColumnGap: '1.5rem !important',
	columnGap: '1.5rem !important',
})

globalStyle(`${vaporScope}${columnGap5}`, {
	MozColumnGap: '3rem !important',
	columnGap: '3rem !important',
})

globalStyle(`${vaporScope}${fontMonospace}`, {
	fontFamily: `${varBsFontMonospace} !important`,
})

globalStyle(`${vaporScope}${fs1}`, {
	fontSize: 'calc(1.375rem + 1.5vw) !important',
})

globalStyle(`${vaporScope}${fs2}`, {
	fontSize: 'calc(1.325rem + 0.9vw) !important',
})

globalStyle(`${vaporScope}${fs3}`, {
	fontSize: 'calc(1.3rem + 0.6vw) !important',
})

globalStyle(`${vaporScope}${fs4}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${vaporScope}${fs5}`, {
	fontSize: '1.25rem !important',
})

globalStyle(`${vaporScope}${fs6}`, {
	fontSize: '1rem !important',
})

globalStyle(`${vaporScope}${fstItalic}`, {
	fontStyle: 'italic !important',
})

globalStyle(`${vaporScope}${fstNormal}`, {
	fontStyle: 'normal !important',
})

globalStyle(`${vaporScope}${fwLighter}`, {
	fontWeight: 'lighter !important',
})

globalStyle(`${vaporScope}${fwLight}`, {
	fontWeight: '300 !important',
})

globalStyle(`${vaporScope}${fwNormal}`, {
	fontWeight: '400 !important',
})

globalStyle(`${vaporScope}${fwMedium}`, {
	fontWeight: '500 !important',
})

globalStyle(`${vaporScope}${fwSemibold}`, {
	fontWeight: '600 !important',
})

globalStyle(`${vaporScope}${fwBold}`, {
	fontWeight: '700 !important',
})

globalStyle(`${vaporScope}${fwBolder}`, {
	fontWeight: 'bolder !important',
})

globalStyle(`${vaporScope}${lh1}`, {
	lineHeight: '1 !important',
})

globalStyle(`${vaporScope}${lhSm}`, {
	lineHeight: '1.25 !important',
})

globalStyle(`${vaporScope}${lhBase}`, {
	lineHeight: '1.5 !important',
})

globalStyle(`${vaporScope}${lhLg}`, {
	lineHeight: '2 !important',
})

globalStyle(`${vaporScope}${textStart}`, {
	textAlign: 'left !important',
})

globalStyle(`${vaporScope}${textEnd}`, {
	textAlign: 'right !important',
})

globalStyle(`${vaporScope}${textCenter}`, {
	textAlign: 'center !important',
})

globalStyle(`${vaporScope}${textDecorationNone}`, {
	textDecoration: 'none !important',
})

globalStyle(`${vaporScope}${textDecorationUnderline}`, {
	textDecoration: 'underline !important',
})

globalStyle(`${vaporScope}${textDecorationLineThrough}`, {
	textDecoration: 'line-through !important',
})

globalStyle(`${vaporScope}${textLowercase}`, {
	textTransform: 'lowercase !important',
})

globalStyle(`${vaporScope}${textUppercase}`, {
	textTransform: 'uppercase !important',
})

globalStyle(`${vaporScope}${textCapitalize}`, {
	textTransform: 'capitalize !important',
})

globalStyle(`${vaporScope}${textWrap}`, {
	whiteSpace: 'normal !important',
})

globalStyle(`${vaporScope}${textNowrap}`, {
	whiteSpace: 'nowrap !important',
})

globalStyle(`${vaporScope}${textBreak}`, {
	wordWrap: 'break-word !important',
	wordBreak: 'break-word !important',
})

globalStyle(`${vaporScope}${textPrimary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textSecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textSuccess}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textInfo}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textWarning}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textDanger}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textLight}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textDark}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textBlack}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBlackRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textWhite}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsWhiteRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textBody}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBodyColorRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${vaporScope}${textMuted}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${vaporScope}${textBlack50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(0, 0, 0, 0.5) !important',
})

globalStyle(`${vaporScope}${textWhite50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(255, 255, 255, 0.5) !important',
})

globalStyle(`${vaporScope}${textBodySecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${vaporScope}${textBodyTertiary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsTertiaryColor} !important`,
})

globalStyle(`${vaporScope}${textBodyEmphasis}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsEmphasisColor} !important`,
})

globalStyle(`${vaporScope}${textReset}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'inherit !important',
})

globalStyle(`${vaporScope}${textOpacity25}`, {
	vars: {
		[varBsTextOpacity]: '0.25',
	},
})

globalStyle(`${vaporScope}${textOpacity50}`, {
	vars: {
		[varBsTextOpacity]: '0.5',
	},
})

globalStyle(`${vaporScope}${textOpacity75}`, {
	vars: {
		[varBsTextOpacity]: '0.75',
	},
})

globalStyle(`${vaporScope}${textOpacity100}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
})

globalStyle(`${vaporScope}${textPrimaryEmphasis}`, {
	color: `${varBsPrimaryTextEmphasis} !important`,
})

globalStyle(`${vaporScope}${textSecondaryEmphasis}`, {
	color: `${varBsSecondaryTextEmphasis} !important`,
})

globalStyle(`${vaporScope}${textSuccessEmphasis}`, {
	color: `${varBsSuccessTextEmphasis} !important`,
})

globalStyle(`${vaporScope}${textInfoEmphasis}`, {
	color: `${varBsInfoTextEmphasis} !important`,
})

globalStyle(`${vaporScope}${textWarningEmphasis}`, {
	color: `${varBsWarningTextEmphasis} !important`,
})

globalStyle(`${vaporScope}${textDangerEmphasis}`, {
	color: `${varBsDangerTextEmphasis} !important`,
})

globalStyle(`${vaporScope}${textLightEmphasis}`, {
	color: `${varBsLightTextEmphasis} !important`,
})

globalStyle(`${vaporScope}${textDarkEmphasis}`, {
	color: `${varBsDarkTextEmphasis} !important`,
})

globalStyle(`${vaporScope}${linkOpacity10}`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${vaporScope}${linkOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${vaporScope}${linkOpacity25}`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${vaporScope}${linkOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${vaporScope}${linkOpacity50}`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${vaporScope}${linkOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${vaporScope}${linkOpacity75}`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${vaporScope}${linkOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${vaporScope}${linkOpacity100}`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${vaporScope}${linkOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${vaporScope}${linkOffset1}`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${vaporScope}${linkOffset1Hover}:hover`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${vaporScope}${linkOffset2}`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${vaporScope}${linkOffset2Hover}:hover`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${vaporScope}${linkOffset3}`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${vaporScope}${linkOffset3Hover}:hover`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${vaporScope}${linkUnderlinePrimary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${vaporScope}${linkUnderlineSecondary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${vaporScope}${linkUnderlineSuccess}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${vaporScope}${linkUnderlineInfo}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${vaporScope}${linkUnderlineWarning}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${vaporScope}${linkUnderlineDanger}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${vaporScope}${linkUnderlineLight}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${vaporScope}${linkUnderlineDark}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${vaporScope}${linkUnderline}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${vaporScope}${linkUnderlineOpacity0}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity0Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity10}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity25}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity50}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity75}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity100}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${vaporScope}${linkUnderlineOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${vaporScope}${bgPrimary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsPrimaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgSecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSecondaryRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgSuccess}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsSuccessRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgInfo}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsInfoRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgWarning}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWarningRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgDanger}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDangerRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgLight}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsLightRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgDark}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsDarkRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgBlack}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBlackRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgWhite}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWhiteRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgBody}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBodyBgRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgTransparent}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: 'transparent !important',
})

globalStyle(`${vaporScope}${bgBodySecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-secondary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgBodyTertiary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-tertiary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${vaporScope}${bgOpacity10}`, {
	vars: {
		[varBsBgOpacity]: '0.1',
	},
})

globalStyle(`${vaporScope}${bgOpacity25}`, {
	vars: {
		[varBsBgOpacity]: '0.25',
	},
})

globalStyle(`${vaporScope}${bgOpacity50}`, {
	vars: {
		[varBsBgOpacity]: '0.5',
	},
})

globalStyle(`${vaporScope}${bgOpacity75}`, {
	vars: {
		[varBsBgOpacity]: '0.75',
	},
})

globalStyle(`${vaporScope}${bgOpacity100}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
})

globalStyle(`${vaporScope}${bgPrimarySubtle}`, {
	backgroundColor: `${varBsPrimaryBgSubtle} !important`,
})

globalStyle(`${vaporScope}${bgSecondarySubtle}`, {
	backgroundColor: `${varBsSecondaryBgSubtle} !important`,
})

globalStyle(`${vaporScope}${bgSuccessSubtle}`, {
	backgroundColor: `${varBsSuccessBgSubtle} !important`,
})

globalStyle(`${vaporScope}${bgInfoSubtle}`, {
	backgroundColor: `${varBsInfoBgSubtle} !important`,
})

globalStyle(`${vaporScope}${bgWarningSubtle}`, {
	backgroundColor: `${varBsWarningBgSubtle} !important`,
})

globalStyle(`${vaporScope}${bgDangerSubtle}`, {
	backgroundColor: `${varBsDangerBgSubtle} !important`,
})

globalStyle(`${vaporScope}${bgLightSubtle}`, {
	backgroundColor: `${varBsLightBgSubtle} !important`,
})

globalStyle(`${vaporScope}${bgDarkSubtle}`, {
	backgroundColor: `${varBsDarkBgSubtle} !important`,
})

globalStyle(`${vaporScope}${bgGradient}`, {
	backgroundImage: `${varBsGradient} !important`,
})

globalStyle(`${vaporScope}${userSelectAll}`, {
	WebkitUserSelect: 'all !important',
	MozUserSelect: 'all !important',
	userSelect: 'all !important',
})

globalStyle(`${vaporScope}${userSelectAuto}`, {
	WebkitUserSelect: 'auto !important',
	MozUserSelect: 'auto !important',
	userSelect: 'auto !important',
})

globalStyle(`${vaporScope}${userSelectNone}`, {
	WebkitUserSelect: 'none !important',
	MozUserSelect: 'none !important',
	userSelect: 'none !important',
})

globalStyle(`${vaporScope}${peNone}`, {
	pointerEvents: 'none !important',
})

globalStyle(`${vaporScope}${peAuto}`, {
	pointerEvents: 'auto !important',
})

globalStyle(`${vaporScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${rounded0}`, {
	borderRadius: '0 !important',
})

globalStyle(`${vaporScope}${rounded1}`, {
	borderRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${vaporScope}${rounded2}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${rounded3}`, {
	borderRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${vaporScope}${rounded4}`, {
	borderRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${vaporScope}${rounded5}`, {
	borderRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${vaporScope}${roundedCircle}`, {
	borderRadius: '50% !important',
})

globalStyle(`${vaporScope}${roundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${vaporScope}${roundedTop}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${roundedTop0}`, {
	borderTopLeftRadius: '0 !important',
	borderTopRightRadius: '0 !important',
})

globalStyle(`${vaporScope}${roundedTop1}`, {
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${vaporScope}${roundedTop2}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${roundedTop3}`, {
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${vaporScope}${roundedTop4}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${vaporScope}${roundedTop5}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${vaporScope}${roundedTopCircle}`, {
	borderTopLeftRadius: '50% !important',
	borderTopRightRadius: '50% !important',
})

globalStyle(`${vaporScope}${roundedTopPill}`, {
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${vaporScope}${roundedEnd}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${roundedEnd0}`, {
	borderTopRightRadius: '0 !important',
	borderBottomRightRadius: '0 !important',
})

globalStyle(`${vaporScope}${roundedEnd1}`, {
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${vaporScope}${roundedEnd2}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${roundedEnd3}`, {
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${vaporScope}${roundedEnd4}`, {
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${vaporScope}${roundedEnd5}`, {
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${vaporScope}${roundedEndCircle}`, {
	borderTopRightRadius: '50% !important',
	borderBottomRightRadius: '50% !important',
})

globalStyle(`${vaporScope}${roundedEndPill}`, {
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${vaporScope}${roundedBottom}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${roundedBottom0}`, {
	borderBottomRightRadius: '0 !important',
	borderBottomLeftRadius: '0 !important',
})

globalStyle(`${vaporScope}${roundedBottom1}`, {
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${vaporScope}${roundedBottom2}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${roundedBottom3}`, {
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${vaporScope}${roundedBottom4}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${vaporScope}${roundedBottom5}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${vaporScope}${roundedBottomCircle}`, {
	borderBottomRightRadius: '50% !important',
	borderBottomLeftRadius: '50% !important',
})

globalStyle(`${vaporScope}${roundedBottomPill}`, {
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${vaporScope}${roundedStart}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${roundedStart0}`, {
	borderBottomLeftRadius: '0 !important',
	borderTopLeftRadius: '0 !important',
})

globalStyle(`${vaporScope}${roundedStart1}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${vaporScope}${roundedStart2}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${vaporScope}${roundedStart3}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${vaporScope}${roundedStart4}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${vaporScope}${roundedStart5}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${vaporScope}${roundedStartCircle}`, {
	borderBottomLeftRadius: '50% !important',
	borderTopLeftRadius: '50% !important',
})

globalStyle(`${vaporScope}${roundedStartPill}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${vaporScope}${visible}`, {
	visibility: 'visible !important',
})

globalStyle(`${vaporScope}${invisible}`, {
	visibility: 'hidden !important',
})

globalStyle(`${vaporScope}${zN1}`, {
	zIndex: '-1 !important',
})

globalStyle(`${vaporScope}${z0}`, {
	zIndex: '0 !important',
})

globalStyle(`${vaporScope}${z1}`, {
	zIndex: '1 !important',
})

globalStyle(`${vaporScope}${z2}`, {
	zIndex: '2 !important',
})

globalStyle(`${vaporScope}${z3}`, {
	zIndex: '3 !important',
})

globalStyle(`${vaporScope}${floatSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${floatSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${floatSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitSmContain}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitSmCover}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitSmScale}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmInline}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmInlineBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmInlineGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmTable}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmTableRow}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmTableCell}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmInlineFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmRow}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmColumn}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmRowReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmColumnReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmGrow0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmGrow1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmShrink0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmShrink1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmWrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmNowrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexSmWrapReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentSmEvenly}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${orderSmFirst}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderSmLast}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${vaporScope}${mSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mySmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mtSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mtSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${meSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${meSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${msSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${msSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${pSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${ptSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${peSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${psSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${gapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${textSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${textSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${textSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${floatMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${floatMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${floatMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitMdContain}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitMdCover}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitMdScale}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdInline}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdInlineBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdInlineGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdTable}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdTableRow}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdTableCell}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdInlineFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdRow}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdColumn}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdRowReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdColumnReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdGrow0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdGrow1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdShrink0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdShrink1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdWrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdNowrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexMdWrapReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentMdEvenly}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${orderMdFirst}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderMdLast}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${vaporScope}${mMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${myMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${myMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mtMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mtMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${meMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${meMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${msMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${msMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${pMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${ptMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${peMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${psMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${gapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${textMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${textMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${textMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${floatLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${floatLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${floatLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitLgContain}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitLgCover}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitLgScale}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgInline}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgInlineBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgInlineGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgTable}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgTableRow}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgTableCell}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgInlineFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgRow}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgColumn}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgRowReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgColumnReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgGrow0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgGrow1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgShrink0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgShrink1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgWrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgNowrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexLgWrapReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentLgEvenly}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${orderLgFirst}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderLgLast}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${vaporScope}${mLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${myLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${myLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mtLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mtLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${meLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${meLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${msLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${msLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${pLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${ptLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${peLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${psLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${gapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${textLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${textLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${textLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${floatXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${floatXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${floatXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXlContain}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXlCover}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXlScale}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlInline}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlInlineBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlInlineGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlTable}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlTableRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlTableCell}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlInlineFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlColumn}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlRowReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlColumnReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlGrow0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlGrow1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlShrink0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlShrink1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlWrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlNowrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXlWrapReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXlEvenly}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXlFirst}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXlLast}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${vaporScope}${mXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${myXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${myXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${meXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${meXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${msXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${msXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${pXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${peXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${psXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${textXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${textXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${textXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${floatXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${floatXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${floatXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXxlContain}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXxlCover}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXxlScale}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${vaporScope}${objectFitXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlInline}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlInlineBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlInlineGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlTable}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlTableRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlTableCell}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlInlineFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlColumn}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlRowReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlColumnReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlGrow0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlGrow1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlShrink0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlShrink1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlWrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlNowrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${vaporScope}${flexXxlWrapReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${justifyContentXxlEvenly}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignItemsXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${vaporScope}${alignContentXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${vaporScope}${alignSelfXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXxlFirst}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${vaporScope}${orderXxlLast}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${vaporScope}${mXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mxXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${myXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${myXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${myXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mtXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${meXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${meXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${meXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${mbXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${msXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${msXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${msXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${vaporScope}${pXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${ptXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${peXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${peXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${pbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${psXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${psXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${gapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${rowGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${columnGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${vaporScope}${textXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${vaporScope}${textXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${vaporScope}${textXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${vaporScope}${fs1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${fs2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem !important',
		},
	},
})

globalStyle(`${vaporScope}${fs3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem !important',
		},
	},
})

globalStyle(`${vaporScope}${fs4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintInline}`, {
	'@media': {
		'print': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintInlineBlock}`, {
	'@media': {
		'print': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintBlock}`, {
	'@media': {
		'print': {
			display: 'block !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintGrid}`, {
	'@media': {
		'print': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintInlineGrid}`, {
	'@media': {
		'print': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintTable}`, {
	'@media': {
		'print': {
			display: 'table !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintTableRow}`, {
	'@media': {
		'print': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintTableCell}`, {
	'@media': {
		'print': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintFlex}`, {
	'@media': {
		'print': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintInlineFlex}`, {
	'@media': {
		'print': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${vaporScope}${dPrintNone}`, {
	'@media': {
		'print': {
			display: 'none !important',
		},
	},
})

globalStyle(`:where(${vaporScope}${h1})`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${clsH1}`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`:where(${vaporScope}${h2})`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`:where(${vaporScope}${h3})`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`:where(${vaporScope}${h4})`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`:where(${vaporScope}${h5})`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`:where(${vaporScope}${h6})`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${clsH2}`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${clsH3}`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${clsH4}`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${clsH5}`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${clsH6}`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${textPrimary}`, {
	textShadow: '0 0 1px rgba(111, 66, 193, 0.3), 0 0 2px rgba(111, 66, 193, 0.3), 0 0 5px rgba(111, 66, 193, 0.2)',
})

globalStyle(`${vaporScope}${textSecondary}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`${vaporScope}${textSuccess}`, {
	textShadow: '0 0 1px rgba(60, 242, 129, 0.3), 0 0 2px rgba(60, 242, 129, 0.3), 0 0 5px rgba(60, 242, 129, 0.2)',
})

globalStyle(`${vaporScope}${textInfo}`, {
	textShadow: '0 0 1px rgba(27, 162, 246, 0.3), 0 0 2px rgba(27, 162, 246, 0.3), 0 0 5px rgba(27, 162, 246, 0.2)',
})

globalStyle(`${vaporScope}${textWarning}`, {
	textShadow: '0 0 1px rgba(255, 193, 7, 0.3), 0 0 2px rgba(255, 193, 7, 0.3), 0 0 5px rgba(255, 193, 7, 0.2)',
})

globalStyle(`${vaporScope}${textDanger}`, {
	textShadow: '0 0 1px rgba(228, 76, 85, 0.3), 0 0 2px rgba(228, 76, 85, 0.3), 0 0 5px rgba(228, 76, 85, 0.2)',
})

globalStyle(`${vaporScope}${textLight}`, {
	textShadow: '0 0 1px rgba(68, 217, 232, 0.3), 0 0 2px rgba(68, 217, 232, 0.3), 0 0 5px rgba(68, 217, 232, 0.2)',
})

globalStyle(`${vaporScope}${textDark}`, {
	textShadow: '0 0 1px rgba(23, 2, 41, 0.3), 0 0 2px rgba(23, 2, 41, 0.3), 0 0 5px rgba(23, 2, 41, 0.2)',
})

globalStyle(`${vaporScope}${textWhite}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${clsH1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${clsH2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${clsH3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${clsH4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${clsH5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textWhite} ${vaporScope}${clsH6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${textMuted}`, {
	textShadow: '0 0 1px rgba(21, 104, 94, 0.3), 0 0 2px rgba(21, 104, 94, 0.3), 0 0 5px rgba(21, 104, 94, 0.2)',
})

globalStyle(`:where(${vaporScope}${link})`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${blockquoteFooter}`, {
	textShadow: '0 0 1px rgba(21, 104, 94, 0.3), 0 0 2px rgba(21, 104, 94, 0.3), 0 0 5px rgba(21, 104, 94, 0.2)',
})

globalStyle(`:where(${vaporScope}${horizontalRule})`, {
	borderTop: '1px solid #6f42c1',
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
	opacity: '1',
})

globalStyle(`:where(${vaporScope}${tableElement})`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${table}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnPrimary}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlinePrimary}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${btnPrimary}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlinePrimary}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnSecondary}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineSecondary}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${btnSecondary}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineSecondary}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${btnSuccess}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineSuccess}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${btnInfo}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineInfo}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${btnWarning}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineWarning}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})

globalStyle(`${vaporScope}${btnDanger}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineDanger}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnLight}`, {
	boxShadow: '0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4), 0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineLight}`, {
	boxShadow: '0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4), 0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1)',
})

globalStyle(`${vaporScope}${btnLight}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineLight}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnDark}`, {
	boxShadow: '0 0 2px rgba(23, 2, 41, 0.9), 0 0 4px rgba(23, 2, 41, 0.4), 0 0 1rem rgba(23, 2, 41, 0.3), 0 0 4rem rgba(23, 2, 41, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineDark}`, {
	boxShadow: '0 0 2px rgba(23, 2, 41, 0.9), 0 0 4px rgba(23, 2, 41, 0.4), 0 0 1rem rgba(23, 2, 41, 0.3), 0 0 4rem rgba(23, 2, 41, 0.1)',
})

globalStyle(`${vaporScope}${btnDark}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineDark}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnDark}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${btnLink}`, {
	boxShadow: 'none',
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineDark}`, {
	color: '#fff',
})

globalStyle(`${vaporScope}${navbar}${bgPrimary}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgSecondary}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgLight}`, {
	boxShadow: '0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4), 0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1)',
})

globalStyle(`${vaporScope}${navbar}${bgDark}`, {
	boxShadow: '0 0 2px rgba(23, 2, 41, 0.9), 0 0 4px rgba(23, 2, 41, 0.4), 0 0 1rem rgba(23, 2, 41, 0.3), 0 0 4rem rgba(23, 2, 41, 0.1)',
})

globalStyle(`${vaporScope}${navbar}[data-bs-theme=dark]`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${navbar}[data-bs-theme=dark] ${vaporScope}${link}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${navbar}[data-bs-theme=dark] ${vaporScope}${navbarBrand}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${navbar}[data-bs-theme=light]`, {
	textShadow: '0 0 1px rgba(0, 0, 0, 0.3), 0 0 2px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${vaporScope}${navbar}[data-bs-theme=light] ${vaporScope}${link}`, {
	textShadow: '0 0 1px rgba(0, 0, 0, 0.3), 0 0 2px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${vaporScope}${navbar}[data-bs-theme=light] ${vaporScope}${navbarBrand}`, {
	textShadow: '0 0 1px rgba(0, 0, 0, 0.6), 0 0 3px rgba(0, 0, 0, 0.5), 0 0 0.5rem rgba(0, 0, 0, 0.3), 0 0 2rem rgba(0, 0, 0, 0.2)',
})

globalStyle(`${vaporScope}${navLink}${navLinkDisabled}`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}${navLinkActive}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navItem}${show} ${vaporScope}${navLink}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${navLink}${navLinkActive}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${show} > ${vaporScope}${navLink}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${breadcrumbItem}${active}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`${vaporScope}${breadcrumbItem} + ${vaporScope}${breadcrumbItem}::before`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${pageLink}`, {
	borderRadius: '0.15rem',
})

globalStyle(`${vaporScope}${pageItem}${pageItemActive} ${vaporScope}${pageLink}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}${navLinkActive}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`:where(${vaporScope}${elLegend})`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${validFeedback}`, {
	textShadow: '0 0 1px rgba(60, 242, 129, 0.3), 0 0 2px rgba(60, 242, 129, 0.3), 0 0 5px rgba(60, 242, 129, 0.2)',
})

globalStyle(`${vaporScope}${invalidFeedback}`, {
	textShadow: '0 0 1px rgba(228, 76, 85, 0.3), 0 0 2px rgba(228, 76, 85, 0.3), 0 0 5px rgba(228, 76, 85, 0.2)',
})

globalStyle(`${vaporScope}${alertPrimary}`, {
	color: '#fff',
	backgroundColor: '#6f42c1',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
	boxShadow: '0 0 2rem rgba(125, 85, 199, 0.4), 0 0 8rem rgba(125, 85, 199, 0.3)',
})

globalStyle(`${vaporScope}${alertSecondary}`, {
	color: '#fff',
	backgroundColor: '#ea39b8',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
	boxShadow: '0 0 2rem rgba(236, 77, 191, 0.4), 0 0 8rem rgba(236, 77, 191, 0.3)',
})

globalStyle(`${vaporScope}${alertSuccess}`, {
	color: '#fff',
	backgroundColor: '#3cf281',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
	boxShadow: '0 0 2rem rgba(80, 243, 142, 0.4), 0 0 8rem rgba(80, 243, 142, 0.3)',
})

globalStyle(`${vaporScope}${alertInfo}`, {
	color: '#fff',
	backgroundColor: '#1ba2f6',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
	boxShadow: '0 0 2rem rgba(50, 171, 247, 0.4), 0 0 8rem rgba(50, 171, 247, 0.3)',
})

globalStyle(`${vaporScope}${alertWarning}`, {
	color: '#fff',
	backgroundColor: '#ffc107',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
	boxShadow: '0 0 2rem rgba(255, 199, 32, 0.4), 0 0 8rem rgba(255, 199, 32, 0.3)',
})

globalStyle(`${vaporScope}${alertDanger}`, {
	color: '#fff',
	backgroundColor: '#e44c55',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
	boxShadow: '0 0 2rem rgba(231, 94, 102, 0.4), 0 0 8rem rgba(231, 94, 102, 0.3)',
})

globalStyle(`${vaporScope}${alertLight}`, {
	color: '#fff',
	backgroundColor: '#44d9e8',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
	boxShadow: '0 0 2rem rgba(87, 221, 234, 0.4), 0 0 8rem rgba(87, 221, 234, 0.3)',
})

globalStyle(`${vaporScope}${alertDark}`, {
	color: '#fff',
	backgroundColor: '#170229',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
	boxShadow: '0 0 2rem rgba(46, 27, 62, 0.4), 0 0 8rem rgba(46, 27, 62, 0.3)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${alertLink}`, {
	color: '#fff',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${link}`, {
	color: '#fff',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${clsH1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${clsH2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${clsH3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${clsH4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${clsH5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${alert} ${vaporScope}${clsH6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${vaporScope}${progressBar}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgPrimary}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgSecondary}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgLight}`, {
	boxShadow: '0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4), 0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1)',
})

globalStyle(`${vaporScope}${progressBar}${bgDark}`, {
	boxShadow: '0 0 2px rgba(23, 2, 41, 0.9), 0 0 4px rgba(23, 2, 41, 0.4), 0 0 1rem rgba(23, 2, 41, 0.3), 0 0 4rem rgba(23, 2, 41, 0.1)',
})

globalStyle(`${vaporScope}${tooltip}`, {
	vars: {
		[varBsTooltipBg]: varBsBodyBg,
		[varBsTooltipColor]: varBsBodyColor,
	},
})

globalStyle(`${vaporScope}${tooltipInner}`, {
	boxShadow: '0 0 2rem rgba(125, 85, 199, 0.4), 0 0 8rem rgba(125, 85, 199, 0.3)',
})

globalStyle(`${vaporScope}${tooltip} ${vaporScope}${arrow}`, {
	boxShadow: '0 0 2rem rgba(125, 85, 199, 0.4), 0 0 8rem rgba(125, 85, 199, 0.3)',
})

globalStyle(`${vaporScope}${modal}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${modal} ${vaporScope}${clsH6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${clsH1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${clsH2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${clsH3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${clsH4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${clsH5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover} ${vaporScope}${clsH6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${clsH1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${clsH2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${clsH3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${clsH4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${clsH5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${toast} ${vaporScope}${clsH6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${popover}`, {
	boxShadow: '0 0 2rem rgba(125, 85, 199, 0.4), 0 0 8rem rgba(125, 85, 199, 0.3)',
})

globalStyle(`${vaporScope}${toast}`, {
	boxShadow: '0 0 2rem rgba(125, 85, 199, 0.4), 0 0 8rem rgba(125, 85, 199, 0.3)',
})

globalStyle(`${vaporScope}${modalContent}`, {
	boxShadow: '0 0 2rem rgba(125, 85, 199, 0.4), 0 0 8rem rgba(125, 85, 199, 0.3)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${clsH1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${clsH2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${clsH3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${clsH4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${clsH5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listGroupItem}${active} ${vaporScope}${clsH6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card}`, {
	backgroundColor: 'transparent',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card}${borderPrimary}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${card}${borderSecondary}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${card}${borderSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${card}${borderInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${card}${borderWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${card}${borderDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})

globalStyle(`${vaporScope}${card}${borderLight}`, {
	boxShadow: '0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4), 0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1)',
})

globalStyle(`${vaporScope}${card}${borderDark}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${clsH1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${clsH2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${clsH3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${clsH4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${clsH5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${clsH6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${listBase}`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${vaporScope}${listNested}`, {
	marginBottom: '0',
})

globalStyle(`${vaporScope}${listIndented}`, {
	paddingLeft: '2rem',
})

globalStyle(`${vaporScope}${legend}`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${vaporScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${vaporScope}${smallText}`, {
	fontSize: '0.875em',
})

globalStyle(`${vaporScope}${scrollspyExample}`, {
	height: '200px',
	overflowY: 'auto',
	marginTop: '0.5rem',
})

globalStyle(`${vaporScope}${formSwitch}`, {
	isolation: 'isolate',
})
