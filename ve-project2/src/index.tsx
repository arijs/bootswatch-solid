import { Route, Router } from '@solidjs/router'
import { render } from '@solidjs/web'
import { lazy } from 'solid-js'
import './styles/cheatsheet.css'

import type * as StreamXMLParser from '@arijs/stream-xml-parser'
import { Ve2ShellRuntime } from './components/shell/Ve2ShellRuntime'

const PocThemeScopeDemo = lazy(() => import('./components/poc/PocThemeScopeDemo'))
const FigureExample = lazy(() => import('./components/contents/figures/FigureExample'))
const Responsive = lazy(() => import('./components/contents/images/Responsive'))
const Thumbnail = lazy(() => import('./components/contents/images/Thumbnail'))
const DarkBorderless = lazy(() => import('./components/contents/tables/DarkBorderless'))
const HoverDangerVariant = lazy(() => import('./components/contents/tables/HoverDangerVariant'))
const HoverDarkVariant = lazy(() => import('./components/contents/tables/HoverDarkVariant'))
const HoverDefaultVariant = lazy(() => import('./components/contents/tables/HoverDefaultVariant'))
const HoverInfoVariant = lazy(() => import('./components/contents/tables/HoverInfoVariant'))
const HoverLightVariant = lazy(() => import('./components/contents/tables/HoverLightVariant'))
const HoverPrimaryVariant = lazy(() => import('./components/contents/tables/HoverPrimaryVariant'))
const HoverSecondaryVariant = lazy(
	() => import('./components/contents/tables/HoverSecondaryVariant'),
)
const HoverSuccessVariant = lazy(() => import('./components/contents/tables/HoverSuccessVariant'))
const HoverVariants = lazy(() => import('./components/contents/tables/HoverVariants'))
const HoverWarningVariant = lazy(() => import('./components/contents/tables/HoverWarningVariant'))
const SmallBordered = lazy(() => import('./components/contents/tables/SmallBordered'))
const Striped = lazy(() => import('./components/contents/tables/Striped'))
const Blockquote = lazy(() => import('./components/contents/typography/Blockquote'))
const Display = lazy(() => import('./components/contents/typography/Display'))
const Heading = lazy(() => import('./components/contents/typography/Heading'))
const InlineList = lazy(() => import('./components/contents/typography/InlineList'))
const Lead = lazy(() => import('./components/contents/typography/Lead'))
const TextElements = lazy(() => import('./components/contents/typography/TextElements'))
const UnstyledList = lazy(() => import('./components/contents/typography/UnstyledList'))
const DisabledCheckbox = lazy(() => import('./components/forms/disabled/DisabledCheckbox'))
const DisabledFieldset = lazy(() => import('./components/forms/disabled/DisabledFieldset'))
const DisabledFileRange = lazy(() => import('./components/forms/disabled/DisabledFileRange'))
const DisabledRadioButtons = lazy(() => import('./components/forms/disabled/DisabledRadioButtons'))
const DisabledSwitchCheckbox = lazy(
	() => import('./components/forms/disabled/DisabledSwitchCheckbox'),
)
const FloatingLabelsExample = lazy(
	() => import('./components/forms/floating-labels/FloatingLabelsExample'),
)
const CurrencyAddon = lazy(() => import('./components/forms/input-group/CurrencyAddon'))
const PrefixAddon = lazy(() => import('./components/forms/input-group/PrefixAddon'))
const SuffixAddon = lazy(() => import('./components/forms/input-group/SuffixAddon'))
const TextareaAddon = lazy(() => import('./components/forms/input-group/TextareaAddon'))
const UrlAddon = lazy(() => import('./components/forms/input-group/UrlAddon'))
const BasicForm = lazy(() => import('./components/forms/overview/BasicForm'))
const Checkbox = lazy(() => import('./components/forms/overview/Checkbox'))
const FileInput = lazy(() => import('./components/forms/overview/FileInput'))
const RadioButtons = lazy(() => import('./components/forms/overview/RadioButtons'))
const RangeInput = lazy(() => import('./components/forms/overview/RangeInput'))
const SwitchCheckbox = lazy(() => import('./components/forms/overview/SwitchCheckbox'))
const LargeControls = lazy(() => import('./components/forms/sizing/LargeControls'))
const SmallControls = lazy(() => import('./components/forms/sizing/SmallControls'))
const InvalidCheckboxes = lazy(() => import('./components/forms/validation/InvalidCheckboxes'))
const InvalidRadios = lazy(() => import('./components/forms/validation/InvalidRadios'))
const InvalidStateZip = lazy(() => import('./components/forms/validation/InvalidStateZip'))
const InvalidUsernameCity = lazy(() => import('./components/forms/validation/InvalidUsernameCity'))
const ValidCheckboxes = lazy(() => import('./components/forms/validation/ValidCheckboxes'))
const ValidNames = lazy(() => import('./components/forms/validation/ValidNames'))
const ValidRadios = lazy(() => import('./components/forms/validation/ValidRadios'))
const AccordionExample = lazy(() => import('./components/ui/accordion/AccordionExample'))
const DangerAlert = lazy(() => import('./components/ui/alerts/DangerAlert'))
const DarkAlert = lazy(() => import('./components/ui/alerts/DarkAlert'))
const HeadingAlert = lazy(() => import('./components/ui/alerts/HeadingAlert'))
const InfoAlert = lazy(() => import('./components/ui/alerts/InfoAlert'))
const LightAlert = lazy(() => import('./components/ui/alerts/LightAlert'))
const PrimaryAlert = lazy(() => import('./components/ui/alerts/PrimaryAlert'))
const SecondaryAlert = lazy(() => import('./components/ui/alerts/SecondaryAlert'))
const SuccessAlert = lazy(() => import('./components/ui/alerts/SuccessAlert'))
const WarningAlert = lazy(() => import('./components/ui/alerts/WarningAlert'))
const HeadingBadges = lazy(() => import('./components/ui/badge/HeadingBadges'))
const PillBadges = lazy(() => import('./components/ui/badge/PillBadges'))
const BreadcrumbExample = lazy(() => import('./components/ui/breadcrumb/BreadcrumbExample'))
const ButtonGroupExample = lazy(() => import('./components/ui/button-group/ButtonGroupExample'))
const OutlineCheckDisabledDangerButton = lazy(
	() => import('./components/ui/buttons/outline/check/disabled/OutlineCheckDisabledDangerButton'),
)
const OutlineCheckDisabledDarkButton = lazy(
	() => import('./components/ui/buttons/outline/check/disabled/OutlineCheckDisabledDarkButton'),
)
const OutlineCheckDisabledInfoButton = lazy(
	() => import('./components/ui/buttons/outline/check/disabled/OutlineCheckDisabledInfoButton'),
)
const OutlineCheckDisabledLightButton = lazy(
	() => import('./components/ui/buttons/outline/check/disabled/OutlineCheckDisabledLightButton'),
)
const OutlineCheckDisabledPrimaryButton = lazy(
	() =>
		import('./components/ui/buttons/outline/check/disabled/OutlineCheckDisabledPrimaryButton'),
)
const OutlineCheckDisabledSecondaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/check/disabled/OutlineCheckDisabledSecondaryButton'
		),
)
const OutlineCheckDisabledSuccessButton = lazy(
	() =>
		import('./components/ui/buttons/outline/check/disabled/OutlineCheckDisabledSuccessButton'),
)
const OutlineCheckDisabledWarningButton = lazy(
	() =>
		import('./components/ui/buttons/outline/check/disabled/OutlineCheckDisabledWarningButton'),
)
const OutlineCheckDangerButton = lazy(
	() => import('./components/ui/buttons/outline/check/OutlineCheckDangerButton'),
)
const OutlineCheckDarkButton = lazy(
	() => import('./components/ui/buttons/outline/check/OutlineCheckDarkButton'),
)
const OutlineCheckInfoButton = lazy(
	() => import('./components/ui/buttons/outline/check/OutlineCheckInfoButton'),
)
const OutlineCheckLightButton = lazy(
	() => import('./components/ui/buttons/outline/check/OutlineCheckLightButton'),
)
const OutlineCheckPrimaryButton = lazy(
	() => import('./components/ui/buttons/outline/check/OutlineCheckPrimaryButton'),
)
const OutlineCheckSecondaryButton = lazy(
	() => import('./components/ui/buttons/outline/check/OutlineCheckSecondaryButton'),
)
const OutlineCheckSuccessButton = lazy(
	() => import('./components/ui/buttons/outline/check/OutlineCheckSuccessButton'),
)
const OutlineCheckWarningButton = lazy(
	() => import('./components/ui/buttons/outline/check/OutlineCheckWarningButton'),
)
const OutlineCheckActiveDisabledDangerButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/check-active/disabled/OutlineCheckActiveDisabledDangerButton'
		),
)
const OutlineCheckActiveDisabledDarkButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/check-active/disabled/OutlineCheckActiveDisabledDarkButton'
		),
)
const OutlineCheckActiveDisabledInfoButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/check-active/disabled/OutlineCheckActiveDisabledInfoButton'
		),
)
const OutlineCheckActiveDisabledLightButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/check-active/disabled/OutlineCheckActiveDisabledLightButton'
		),
)
const OutlineCheckActiveDisabledPrimaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/check-active/disabled/OutlineCheckActiveDisabledPrimaryButton'
		),
)
const OutlineCheckActiveDisabledSecondaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/check-active/disabled/OutlineCheckActiveDisabledSecondaryButton'
		),
)
const OutlineCheckActiveDisabledSuccessButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/check-active/disabled/OutlineCheckActiveDisabledSuccessButton'
		),
)
const OutlineCheckActiveDisabledWarningButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/check-active/disabled/OutlineCheckActiveDisabledWarningButton'
		),
)
const OutlineCheckActiveDangerButton = lazy(
	() => import('./components/ui/buttons/outline/check-active/OutlineCheckActiveDangerButton'),
)
const OutlineCheckActiveDarkButton = lazy(
	() => import('./components/ui/buttons/outline/check-active/OutlineCheckActiveDarkButton'),
)
const OutlineCheckActiveInfoButton = lazy(
	() => import('./components/ui/buttons/outline/check-active/OutlineCheckActiveInfoButton'),
)
const OutlineCheckActiveLightButton = lazy(
	() => import('./components/ui/buttons/outline/check-active/OutlineCheckActiveLightButton'),
)
const OutlineCheckActivePrimaryButton = lazy(
	() => import('./components/ui/buttons/outline/check-active/OutlineCheckActivePrimaryButton'),
)
const OutlineCheckActiveSecondaryButton = lazy(
	() => import('./components/ui/buttons/outline/check-active/OutlineCheckActiveSecondaryButton'),
)
const OutlineCheckActiveSuccessButton = lazy(
	() => import('./components/ui/buttons/outline/check-active/OutlineCheckActiveSuccessButton'),
)
const OutlineCheckActiveWarningButton = lazy(
	() => import('./components/ui/buttons/outline/check-active/OutlineCheckActiveWarningButton'),
)
const OutlineDisabledDangerButton = lazy(
	() => import('./components/ui/buttons/outline/disabled/OutlineDisabledDangerButton'),
)
const OutlineDisabledDarkButton = lazy(
	() => import('./components/ui/buttons/outline/disabled/OutlineDisabledDarkButton'),
)
const OutlineDisabledInfoButton = lazy(
	() => import('./components/ui/buttons/outline/disabled/OutlineDisabledInfoButton'),
)
const OutlineDisabledLightButton = lazy(
	() => import('./components/ui/buttons/outline/disabled/OutlineDisabledLightButton'),
)
const OutlineDisabledPrimaryButton = lazy(
	() => import('./components/ui/buttons/outline/disabled/OutlineDisabledPrimaryButton'),
)
const OutlineDisabledSecondaryButton = lazy(
	() => import('./components/ui/buttons/outline/disabled/OutlineDisabledSecondaryButton'),
)
const OutlineDisabledSuccessButton = lazy(
	() => import('./components/ui/buttons/outline/disabled/OutlineDisabledSuccessButton'),
)
const OutlineDisabledWarningButton = lazy(
	() => import('./components/ui/buttons/outline/disabled/OutlineDisabledWarningButton'),
)
const OutlineDangerButton = lazy(
	() => import('./components/ui/buttons/outline/OutlineDangerButton'),
)
const OutlineDarkButton = lazy(() => import('./components/ui/buttons/outline/OutlineDarkButton'))
const OutlineInfoButton = lazy(() => import('./components/ui/buttons/outline/OutlineInfoButton'))
const OutlineLightButton = lazy(() => import('./components/ui/buttons/outline/OutlineLightButton'))
const OutlinePrimaryButton = lazy(
	() => import('./components/ui/buttons/outline/OutlinePrimaryButton'),
)
const OutlineSecondaryButton = lazy(
	() => import('./components/ui/buttons/outline/OutlineSecondaryButton'),
)
const OutlineSuccessButton = lazy(
	() => import('./components/ui/buttons/outline/OutlineSuccessButton'),
)
const OutlineWarningButton = lazy(
	() => import('./components/ui/buttons/outline/OutlineWarningButton'),
)
const OutlineToggleDisabledDangerButton = lazy(
	() =>
		import('./components/ui/buttons/outline/toggle/disabled/OutlineToggleDisabledDangerButton'),
)
const OutlineToggleDisabledDarkButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/disabled/OutlineToggleDisabledDarkButton'),
)
const OutlineToggleDisabledInfoButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/disabled/OutlineToggleDisabledInfoButton'),
)
const OutlineToggleDisabledLightButton = lazy(
	() =>
		import('./components/ui/buttons/outline/toggle/disabled/OutlineToggleDisabledLightButton'),
)
const OutlineToggleDisabledPrimaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle/disabled/OutlineToggleDisabledPrimaryButton'
		),
)
const OutlineToggleDisabledSecondaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle/disabled/OutlineToggleDisabledSecondaryButton'
		),
)
const OutlineToggleDisabledSuccessButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle/disabled/OutlineToggleDisabledSuccessButton'
		),
)
const OutlineToggleDisabledWarningButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle/disabled/OutlineToggleDisabledWarningButton'
		),
)
const OutlineToggleDangerButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/OutlineToggleDangerButton'),
)
const OutlineToggleDarkButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/OutlineToggleDarkButton'),
)
const OutlineToggleInfoButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/OutlineToggleInfoButton'),
)
const OutlineToggleLightButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/OutlineToggleLightButton'),
)
const OutlineTogglePrimaryButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/OutlineTogglePrimaryButton'),
)
const OutlineToggleSecondaryButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/OutlineToggleSecondaryButton'),
)
const OutlineToggleSuccessButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/OutlineToggleSuccessButton'),
)
const OutlineToggleWarningButton = lazy(
	() => import('./components/ui/buttons/outline/toggle/OutlineToggleWarningButton'),
)
const OutlineToggleActiveDisabledDangerButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledDangerButton'
		),
)
const OutlineToggleActiveDisabledDarkButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledDarkButton'
		),
)
const OutlineToggleActiveDisabledInfoButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledInfoButton'
		),
)
const OutlineToggleActiveDisabledLightButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledLightButton'
		),
)
const OutlineToggleActiveDisabledPrimaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledPrimaryButton'
		),
)
const OutlineToggleActiveDisabledSecondaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledSecondaryButton'
		),
)
const OutlineToggleActiveDisabledSuccessButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledSuccessButton'
		),
)
const OutlineToggleActiveDisabledWarningButton = lazy(
	() =>
		import(
			'./components/ui/buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledWarningButton'
		),
)
const OutlineToggleActiveDangerButton = lazy(
	() => import('./components/ui/buttons/outline/toggle-active/OutlineToggleActiveDangerButton'),
)
const OutlineToggleActiveDarkButton = lazy(
	() => import('./components/ui/buttons/outline/toggle-active/OutlineToggleActiveDarkButton'),
)
const OutlineToggleActiveInfoButton = lazy(
	() => import('./components/ui/buttons/outline/toggle-active/OutlineToggleActiveInfoButton'),
)
const OutlineToggleActiveLightButton = lazy(
	() => import('./components/ui/buttons/outline/toggle-active/OutlineToggleActiveLightButton'),
)
const OutlineToggleActivePrimaryButton = lazy(
	() => import('./components/ui/buttons/outline/toggle-active/OutlineToggleActivePrimaryButton'),
)
const OutlineToggleActiveSecondaryButton = lazy(
	() =>
		import('./components/ui/buttons/outline/toggle-active/OutlineToggleActiveSecondaryButton'),
)
const OutlineToggleActiveSuccessButton = lazy(
	() => import('./components/ui/buttons/outline/toggle-active/OutlineToggleActiveSuccessButton'),
)
const OutlineToggleActiveWarningButton = lazy(
	() => import('./components/ui/buttons/outline/toggle-active/OutlineToggleActiveWarningButton'),
)
const CheckLargeButton = lazy(() => import('./components/ui/buttons/sizes/check/CheckLargeButton'))
const CheckSmallButton = lazy(() => import('./components/ui/buttons/sizes/check/CheckSmallButton'))
const CheckDisabledLargeButton = lazy(
	() => import('./components/ui/buttons/sizes/check/disabled/CheckDisabledLargeButton'),
)
const CheckDisabledSmallButton = lazy(
	() => import('./components/ui/buttons/sizes/check/disabled/CheckDisabledSmallButton'),
)
const CheckActiveLargeButton = lazy(
	() => import('./components/ui/buttons/sizes/check-active/CheckActiveLargeButton'),
)
const CheckActiveSmallButton = lazy(
	() => import('./components/ui/buttons/sizes/check-active/CheckActiveSmallButton'),
)
const CheckActiveDisabledLargeButton = lazy(
	() =>
		import(
			'./components/ui/buttons/sizes/check-active/disabled/CheckActiveDisabledLargeButton'
		),
)
const CheckActiveDisabledSmallButton = lazy(
	() =>
		import(
			'./components/ui/buttons/sizes/check-active/disabled/CheckActiveDisabledSmallButton'
		),
)
const DisabledLargeButton = lazy(
	() => import('./components/ui/buttons/sizes/disabled/DisabledLargeButton'),
)
const DisabledSmallButton = lazy(
	() => import('./components/ui/buttons/sizes/disabled/DisabledSmallButton'),
)
const LargeButton = lazy(() => import('./components/ui/buttons/sizes/LargeButton'))
const SmallButton = lazy(() => import('./components/ui/buttons/sizes/SmallButton'))
const ToggleDisabledLargeButton = lazy(
	() => import('./components/ui/buttons/sizes/toggle/disabled/ToggleDisabledLargeButton'),
)
const ToggleDisabledSmallButton = lazy(
	() => import('./components/ui/buttons/sizes/toggle/disabled/ToggleDisabledSmallButton'),
)
const ToggleLargeButton = lazy(
	() => import('./components/ui/buttons/sizes/toggle/ToggleLargeButton'),
)
const ToggleSmallButton = lazy(
	() => import('./components/ui/buttons/sizes/toggle/ToggleSmallButton'),
)
const ToggleActiveDisabledLargeButton = lazy(
	() =>
		import(
			'./components/ui/buttons/sizes/toggle-active/disabled/ToggleActiveDisabledLargeButton'
		),
)
const ToggleActiveDisabledSmallButton = lazy(
	() =>
		import(
			'./components/ui/buttons/sizes/toggle-active/disabled/ToggleActiveDisabledSmallButton'
		),
)
const ToggleActiveLargeButton = lazy(
	() => import('./components/ui/buttons/sizes/toggle-active/ToggleActiveLargeButton'),
)
const ToggleActiveSmallButton = lazy(
	() => import('./components/ui/buttons/sizes/toggle-active/ToggleActiveSmallButton'),
)
const SolidCheckDisabledBaseButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledBaseButton'),
)
const SolidCheckDisabledDangerButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledDangerButton'),
)
const SolidCheckDisabledDarkButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledDarkButton'),
)
const SolidCheckDisabledInfoButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledInfoButton'),
)
const SolidCheckDisabledLightButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledLightButton'),
)
const SolidCheckDisabledLinkButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledLinkButton'),
)
const SolidCheckDisabledPrimaryButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledPrimaryButton'),
)
const SolidCheckDisabledSecondaryButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledSecondaryButton'),
)
const SolidCheckDisabledSuccessButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledSuccessButton'),
)
const SolidCheckDisabledWarningButton = lazy(
	() => import('./components/ui/buttons/solid/check/disabled/SolidCheckDisabledWarningButton'),
)
const SolidCheckBaseButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckBaseButton'),
)
const SolidCheckDangerButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckDangerButton'),
)
const SolidCheckDarkButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckDarkButton'),
)
const SolidCheckInfoButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckInfoButton'),
)
const SolidCheckLightButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckLightButton'),
)
const SolidCheckLinkButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckLinkButton'),
)
const SolidCheckPrimaryButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckPrimaryButton'),
)
const SolidCheckSecondaryButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckSecondaryButton'),
)
const SolidCheckSuccessButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckSuccessButton'),
)
const SolidCheckWarningButton = lazy(
	() => import('./components/ui/buttons/solid/check/SolidCheckWarningButton'),
)
const SolidCheckActiveDisabledBaseButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledBaseButton'
		),
)
const SolidCheckActiveDisabledDangerButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledDangerButton'
		),
)
const SolidCheckActiveDisabledDarkButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledDarkButton'
		),
)
const SolidCheckActiveDisabledInfoButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledInfoButton'
		),
)
const SolidCheckActiveDisabledLightButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledLightButton'
		),
)
const SolidCheckActiveDisabledLinkButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledLinkButton'
		),
)
const SolidCheckActiveDisabledPrimaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledPrimaryButton'
		),
)
const SolidCheckActiveDisabledSecondaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledSecondaryButton'
		),
)
const SolidCheckActiveDisabledSuccessButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledSuccessButton'
		),
)
const SolidCheckActiveDisabledWarningButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/check-active/disabled/SolidCheckActiveDisabledWarningButton'
		),
)
const SolidCheckActiveBaseButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActiveBaseButton'),
)
const SolidCheckActiveDangerButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActiveDangerButton'),
)
const SolidCheckActiveDarkButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActiveDarkButton'),
)
const SolidCheckActiveInfoButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActiveInfoButton'),
)
const SolidCheckActiveLightButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActiveLightButton'),
)
const SolidCheckActiveLinkButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActiveLinkButton'),
)
const SolidCheckActivePrimaryButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActivePrimaryButton'),
)
const SolidCheckActiveSecondaryButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActiveSecondaryButton'),
)
const SolidCheckActiveSuccessButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActiveSuccessButton'),
)
const SolidCheckActiveWarningButton = lazy(
	() => import('./components/ui/buttons/solid/check-active/SolidCheckActiveWarningButton'),
)
const SolidDisabledBaseButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledBaseButton'),
)
const SolidDisabledDangerButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledDangerButton'),
)
const SolidDisabledDarkButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledDarkButton'),
)
const SolidDisabledInfoButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledInfoButton'),
)
const SolidDisabledLightButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledLightButton'),
)
const SolidDisabledLinkButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledLinkButton'),
)
const SolidDisabledPrimaryButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledPrimaryButton'),
)
const SolidDisabledSecondaryButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledSecondaryButton'),
)
const SolidDisabledSuccessButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledSuccessButton'),
)
const SolidDisabledWarningButton = lazy(
	() => import('./components/ui/buttons/solid/disabled/SolidDisabledWarningButton'),
)
const SolidBaseButton = lazy(() => import('./components/ui/buttons/solid/SolidBaseButton'))
const SolidDangerButton = lazy(() => import('./components/ui/buttons/solid/SolidDangerButton'))
const SolidDarkButton = lazy(() => import('./components/ui/buttons/solid/SolidDarkButton'))
const SolidInfoButton = lazy(() => import('./components/ui/buttons/solid/SolidInfoButton'))
const SolidLightButton = lazy(() => import('./components/ui/buttons/solid/SolidLightButton'))
const SolidLinkButton = lazy(() => import('./components/ui/buttons/solid/SolidLinkButton'))
const SolidPrimaryButton = lazy(() => import('./components/ui/buttons/solid/SolidPrimaryButton'))
const SolidSecondaryButton = lazy(
	() => import('./components/ui/buttons/solid/SolidSecondaryButton'),
)
const SolidSuccessButton = lazy(() => import('./components/ui/buttons/solid/SolidSuccessButton'))
const SolidWarningButton = lazy(() => import('./components/ui/buttons/solid/SolidWarningButton'))
const SolidToggleDisabledBaseButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledBaseButton'),
)
const SolidToggleDisabledDangerButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledDangerButton'),
)
const SolidToggleDisabledDarkButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledDarkButton'),
)
const SolidToggleDisabledInfoButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledInfoButton'),
)
const SolidToggleDisabledLightButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledLightButton'),
)
const SolidToggleDisabledLinkButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledLinkButton'),
)
const SolidToggleDisabledPrimaryButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledPrimaryButton'),
)
const SolidToggleDisabledSecondaryButton = lazy(
	() =>
		import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledSecondaryButton'),
)
const SolidToggleDisabledSuccessButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledSuccessButton'),
)
const SolidToggleDisabledWarningButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/disabled/SolidToggleDisabledWarningButton'),
)
const SolidToggleBaseButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidToggleBaseButton'),
)
const SolidToggleDangerButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidToggleDangerButton'),
)
const SolidToggleDarkButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidToggleDarkButton'),
)
const SolidToggleInfoButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidToggleInfoButton'),
)
const SolidToggleLightButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidToggleLightButton'),
)
const SolidToggleLinkButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidToggleLinkButton'),
)
const SolidTogglePrimaryButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidTogglePrimaryButton'),
)
const SolidToggleSecondaryButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidToggleSecondaryButton'),
)
const SolidToggleSuccessButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidToggleSuccessButton'),
)
const SolidToggleWarningButton = lazy(
	() => import('./components/ui/buttons/solid/toggle/SolidToggleWarningButton'),
)
const SolidToggleActiveDisabledBaseButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledBaseButton'
		),
)
const SolidToggleActiveDisabledDangerButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledDangerButton'
		),
)
const SolidToggleActiveDisabledDarkButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledDarkButton'
		),
)
const SolidToggleActiveDisabledInfoButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledInfoButton'
		),
)
const SolidToggleActiveDisabledLightButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledLightButton'
		),
)
const SolidToggleActiveDisabledLinkButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledLinkButton'
		),
)
const SolidToggleActiveDisabledPrimaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledPrimaryButton'
		),
)
const SolidToggleActiveDisabledSecondaryButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledSecondaryButton'
		),
)
const SolidToggleActiveDisabledSuccessButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledSuccessButton'
		),
)
const SolidToggleActiveDisabledWarningButton = lazy(
	() =>
		import(
			'./components/ui/buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledWarningButton'
		),
)
const SolidToggleActiveBaseButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActiveBaseButton'),
)
const SolidToggleActiveDangerButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActiveDangerButton'),
)
const SolidToggleActiveDarkButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActiveDarkButton'),
)
const SolidToggleActiveInfoButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActiveInfoButton'),
)
const SolidToggleActiveLightButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActiveLightButton'),
)
const SolidToggleActiveLinkButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActiveLinkButton'),
)
const SolidToggleActivePrimaryButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActivePrimaryButton'),
)
const SolidToggleActiveSecondaryButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActiveSecondaryButton'),
)
const SolidToggleActiveSuccessButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActiveSuccessButton'),
)
const SolidToggleActiveWarningButton = lazy(
	() => import('./components/ui/buttons/solid/toggle-active/SolidToggleActiveWarningButton'),
)
const CardsGrid = lazy(() => import('./components/ui/card/CardsGrid'))
const FeaturedCard = lazy(() => import('./components/ui/card/FeaturedCard'))
const HorizontalCard = lazy(() => import('./components/ui/card/HorizontalCard'))
const ImageTopCard = lazy(() => import('./components/ui/card/ImageTopCard'))
const ListCard = lazy(() => import('./components/ui/card/ListCard'))
const CardTabsExample = lazy(() => import('./components/ui/card-tabs/CardTabsExample'))
const CarouselExample = lazy(() => import('./components/ui/carousel/CarouselExample'))
const AlignedDropdown = lazy(() => import('./components/ui/dropdowns/AlignedDropdown'))
const EndDropdown = lazy(() => import('./components/ui/dropdowns/EndDropdown'))
const LargeDropdown = lazy(() => import('./components/ui/dropdowns/LargeDropdown'))
const NormalDropdown = lazy(() => import('./components/ui/dropdowns/NormalDropdown'))
const SmallDropdown = lazy(() => import('./components/ui/dropdowns/SmallDropdown'))
const SplitDangerDropdown = lazy(() => import('./components/ui/dropdowns/SplitDangerDropdown'))
const SplitDarkDropdown = lazy(() => import('./components/ui/dropdowns/SplitDarkDropdown'))
const SplitInfoDropdown = lazy(() => import('./components/ui/dropdowns/SplitInfoDropdown'))
const SplitLightDropdown = lazy(() => import('./components/ui/dropdowns/SplitLightDropdown'))
const SplitPrimaryDropdown = lazy(() => import('./components/ui/dropdowns/SplitPrimaryDropdown'))
const SplitSecondaryDropdown = lazy(
	() => import('./components/ui/dropdowns/SplitSecondaryDropdown'),
)
const SplitSuccessDropdown = lazy(() => import('./components/ui/dropdowns/SplitSuccessDropdown'))
const SplitWarningDropdown = lazy(() => import('./components/ui/dropdowns/SplitWarningDropdown'))
const StartDropdown = lazy(() => import('./components/ui/dropdowns/StartDropdown'))
const UpDropdown = lazy(() => import('./components/ui/dropdowns/UpDropdown'))
const ContextualDangerListGroup = lazy(
	() => import('./components/ui/list-group/ContextualDangerListGroup'),
)
const ContextualDarkListGroup = lazy(
	() => import('./components/ui/list-group/ContextualDarkListGroup'),
)
const ContextualDefaultListGroup = lazy(
	() => import('./components/ui/list-group/ContextualDefaultListGroup'),
)
const ContextualInfoListGroup = lazy(
	() => import('./components/ui/list-group/ContextualInfoListGroup'),
)
const ContextualLightListGroup = lazy(
	() => import('./components/ui/list-group/ContextualLightListGroup'),
)
const ContextualListGroup = lazy(() => import('./components/ui/list-group/ContextualListGroup'))
const ContextualPrimaryListGroup = lazy(
	() => import('./components/ui/list-group/ContextualPrimaryListGroup'),
)
const ContextualSecondaryListGroup = lazy(
	() => import('./components/ui/list-group/ContextualSecondaryListGroup'),
)
const ContextualSuccessListGroup = lazy(
	() => import('./components/ui/list-group/ContextualSuccessListGroup'),
)
const ContextualWarningListGroup = lazy(
	() => import('./components/ui/list-group/ContextualWarningListGroup'),
)
const DefaultListGroup = lazy(() => import('./components/ui/list-group/DefaultListGroup'))
const FlushListGroup = lazy(() => import('./components/ui/list-group/FlushListGroup'))
const CenteredScrollableModal = lazy(() => import('./components/ui/modal/CenteredScrollableModal'))
const DefaultModal = lazy(() => import('./components/ui/modal/DefaultModal'))
const FullscreenModal = lazy(() => import('./components/ui/modal/FullscreenModal'))
const StaticBackdropModal = lazy(() => import('./components/ui/modal/StaticBackdropModal'))
const NavbarExample = lazy(() => import('./components/ui/navbar/NavbarExample'))
const BasicNav = lazy(() => import('./components/ui/navs/BasicNav'))
const PillNav = lazy(() => import('./components/ui/navs/PillNav'))
const TabbedNav = lazy(() => import('./components/ui/navs/TabbedNav'))
const BodyScrollingOffcanvas = lazy(
	() => import('./components/ui/offcanvas/BodyScrollingOffcanvas'),
)
const BottomOffcanvas = lazy(() => import('./components/ui/offcanvas/BottomOffcanvas'))
const DefaultOffcanvas = lazy(() => import('./components/ui/offcanvas/DefaultOffcanvas'))
const EndOffcanvas = lazy(() => import('./components/ui/offcanvas/EndOffcanvas'))
const ResponsiveOffcanvas = lazy(() => import('./components/ui/offcanvas/ResponsiveOffcanvas'))
const ScrollingBackdropOffcanvas = lazy(
	() => import('./components/ui/offcanvas/ScrollingBackdropOffcanvas'),
)
const StaticBackdropOffcanvas = lazy(
	() => import('./components/ui/offcanvas/StaticBackdropOffcanvas'),
)
const TopOffcanvas = lazy(() => import('./components/ui/offcanvas/TopOffcanvas'))
const LargePagination = lazy(() => import('./components/ui/pagination/LargePagination'))
const SmallPagination = lazy(() => import('./components/ui/pagination/SmallPagination'))
const StandardPagination = lazy(() => import('./components/ui/pagination/StandardPagination'))
const BasicPopover = lazy(() => import('./components/ui/popovers/BasicPopover'))
const BottomPopover = lazy(() => import('./components/ui/popovers/BottomPopover'))
const EndPopover = lazy(() => import('./components/ui/popovers/EndPopover'))
const StartPopover = lazy(() => import('./components/ui/popovers/StartPopover'))
const TopPopover = lazy(() => import('./components/ui/popovers/TopPopover'))
const Progress0 = lazy(() => import('./components/ui/progress/Progress0'))
const Progress25 = lazy(() => import('./components/ui/progress/Progress25'))
const Progress50 = lazy(() => import('./components/ui/progress/Progress50'))
const Progress75 = lazy(() => import('./components/ui/progress/Progress75'))
const Progress100 = lazy(() => import('./components/ui/progress/Progress100'))
const StripedProgress = lazy(() => import('./components/ui/progress/StripedProgress'))
const ScrollspyExample = lazy(() => import('./components/ui/scrollspy/ScrollspyExample'))
const BorderDangerSpinner = lazy(() => import('./components/ui/spinners/BorderDangerSpinner'))
const BorderDarkSpinner = lazy(() => import('./components/ui/spinners/BorderDarkSpinner'))
const BorderInfoSpinner = lazy(() => import('./components/ui/spinners/BorderInfoSpinner'))
const BorderLightSpinner = lazy(() => import('./components/ui/spinners/BorderLightSpinner'))
const BorderPrimarySpinner = lazy(() => import('./components/ui/spinners/BorderPrimarySpinner'))
const BorderSecondarySpinner = lazy(() => import('./components/ui/spinners/BorderSecondarySpinner'))
const BorderSuccessSpinner = lazy(() => import('./components/ui/spinners/BorderSuccessSpinner'))
const BorderWarningSpinner = lazy(() => import('./components/ui/spinners/BorderWarningSpinner'))
const GrowDangerSpinner = lazy(() => import('./components/ui/spinners/GrowDangerSpinner'))
const GrowDarkSpinner = lazy(() => import('./components/ui/spinners/GrowDarkSpinner'))
const GrowInfoSpinner = lazy(() => import('./components/ui/spinners/GrowInfoSpinner'))
const GrowLightSpinner = lazy(() => import('./components/ui/spinners/GrowLightSpinner'))
const GrowPrimarySpinner = lazy(() => import('./components/ui/spinners/GrowPrimarySpinner'))
const GrowSecondarySpinner = lazy(() => import('./components/ui/spinners/GrowSecondarySpinner'))
const GrowSuccessSpinner = lazy(() => import('./components/ui/spinners/GrowSuccessSpinner'))
const GrowWarningSpinner = lazy(() => import('./components/ui/spinners/GrowWarningSpinner'))
const ToastExample = lazy(() => import('./components/ui/toasts/ToastExample'))
const BottomTooltip = lazy(() => import('./components/ui/tooltips/BottomTooltip'))
const EndTooltip = lazy(() => import('./components/ui/tooltips/EndTooltip'))
const HtmlTooltip = lazy(() => import('./components/ui/tooltips/HtmlTooltip'))
const StartTooltip = lazy(() => import('./components/ui/tooltips/StartTooltip'))
const TopTooltip = lazy(() => import('./components/ui/tooltips/TopTooltip'))
interface WindowExtended {
	// bootstrap?: typeof bootstrap
	cssSelectorParser?: unknown
	streamXMLParser?: typeof StreamXMLParser
	loadStreamXMLParser?: () => Promise<typeof StreamXMLParser>
}

if (typeof window !== 'undefined') {
	// ;(window as Window & WindowExtended).bootstrap = bootstrap
	;(window as Window & WindowExtended).cssSelectorParser = {}
	;(window as Window & WindowExtended).loadStreamXMLParser = async () => {
		if ((window as Window & WindowExtended).streamXMLParser) {
			return (window as Window & WindowExtended).streamXMLParser
		}
		const module = (await import(
			'@arijs/stream-xml-parser/dist/arijs-stream-xml-parser.esm.js'
		)) as typeof StreamXMLParser
		;(window as Window & WindowExtended).streamXMLParser = module
		return module
	}
}

render(
	() => (
		<Router>
			<Route path="/" component={PocThemeScopeDemo} />
			<Route component={Ve2ShellRuntime}>
				<Route path="/ui/buttons/solid/base-button" component={SolidBaseButton} />
				<Route
					path="/ui/buttons/solid/disabled/base-button"
					component={SolidDisabledBaseButton}
				/>
				<Route
					path="/ui/buttons/solid/check/base-button"
					component={SolidCheckBaseButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/base-button"
					component={SolidCheckDisabledBaseButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/base-button"
					component={SolidCheckActiveBaseButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/base-button"
					component={SolidCheckActiveDisabledBaseButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/base-button"
					component={SolidToggleBaseButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/base-button"
					component={SolidToggleDisabledBaseButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/base-button"
					component={SolidToggleActiveBaseButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/base-button"
					component={SolidToggleActiveDisabledBaseButton}
				/>
				<Route path="/ui/buttons/solid/primary-button" component={SolidPrimaryButton} />
				<Route
					path="/ui/buttons/solid/disabled/primary-button"
					component={SolidDisabledPrimaryButton}
				/>
				<Route
					path="/ui/buttons/solid/check/primary-button"
					component={SolidCheckPrimaryButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/primary-button"
					component={SolidCheckDisabledPrimaryButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/primary-button"
					component={SolidCheckActivePrimaryButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/primary-button"
					component={SolidCheckActiveDisabledPrimaryButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/primary-button"
					component={SolidTogglePrimaryButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/primary-button"
					component={SolidToggleDisabledPrimaryButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/primary-button"
					component={SolidToggleActivePrimaryButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/primary-button"
					component={SolidToggleActiveDisabledPrimaryButton}
				/>
				<Route path="/ui/buttons/solid/secondary-button" component={SolidSecondaryButton} />
				<Route
					path="/ui/buttons/solid/disabled/secondary-button"
					component={SolidDisabledSecondaryButton}
				/>
				<Route
					path="/ui/buttons/solid/check/secondary-button"
					component={SolidCheckSecondaryButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/secondary-button"
					component={SolidCheckDisabledSecondaryButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/secondary-button"
					component={SolidCheckActiveSecondaryButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/secondary-button"
					component={SolidCheckActiveDisabledSecondaryButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/secondary-button"
					component={SolidToggleSecondaryButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/secondary-button"
					component={SolidToggleDisabledSecondaryButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/secondary-button"
					component={SolidToggleActiveSecondaryButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/secondary-button"
					component={SolidToggleActiveDisabledSecondaryButton}
				/>
				<Route path="/ui/buttons/solid/success-button" component={SolidSuccessButton} />
				<Route
					path="/ui/buttons/solid/disabled/success-button"
					component={SolidDisabledSuccessButton}
				/>
				<Route
					path="/ui/buttons/solid/check/success-button"
					component={SolidCheckSuccessButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/success-button"
					component={SolidCheckDisabledSuccessButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/success-button"
					component={SolidCheckActiveSuccessButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/success-button"
					component={SolidCheckActiveDisabledSuccessButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/success-button"
					component={SolidToggleSuccessButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/success-button"
					component={SolidToggleDisabledSuccessButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/success-button"
					component={SolidToggleActiveSuccessButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/success-button"
					component={SolidToggleActiveDisabledSuccessButton}
				/>
				<Route path="/ui/buttons/solid/danger-button" component={SolidDangerButton} />
				<Route
					path="/ui/buttons/solid/disabled/danger-button"
					component={SolidDisabledDangerButton}
				/>
				<Route
					path="/ui/buttons/solid/check/danger-button"
					component={SolidCheckDangerButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/danger-button"
					component={SolidCheckDisabledDangerButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/danger-button"
					component={SolidCheckActiveDangerButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/danger-button"
					component={SolidCheckActiveDisabledDangerButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/danger-button"
					component={SolidToggleDangerButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/danger-button"
					component={SolidToggleDisabledDangerButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/danger-button"
					component={SolidToggleActiveDangerButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/danger-button"
					component={SolidToggleActiveDisabledDangerButton}
				/>
				<Route path="/ui/buttons/solid/warning-button" component={SolidWarningButton} />
				<Route
					path="/ui/buttons/solid/disabled/warning-button"
					component={SolidDisabledWarningButton}
				/>
				<Route
					path="/ui/buttons/solid/check/warning-button"
					component={SolidCheckWarningButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/warning-button"
					component={SolidCheckDisabledWarningButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/warning-button"
					component={SolidCheckActiveWarningButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/warning-button"
					component={SolidCheckActiveDisabledWarningButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/warning-button"
					component={SolidToggleWarningButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/warning-button"
					component={SolidToggleDisabledWarningButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/warning-button"
					component={SolidToggleActiveWarningButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/warning-button"
					component={SolidToggleActiveDisabledWarningButton}
				/>
				<Route path="/ui/buttons/solid/info-button" component={SolidInfoButton} />
				<Route
					path="/ui/buttons/solid/disabled/info-button"
					component={SolidDisabledInfoButton}
				/>
				<Route
					path="/ui/buttons/solid/check/info-button"
					component={SolidCheckInfoButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/info-button"
					component={SolidCheckDisabledInfoButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/info-button"
					component={SolidCheckActiveInfoButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/info-button"
					component={SolidCheckActiveDisabledInfoButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/info-button"
					component={SolidToggleInfoButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/info-button"
					component={SolidToggleDisabledInfoButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/info-button"
					component={SolidToggleActiveInfoButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/info-button"
					component={SolidToggleActiveDisabledInfoButton}
				/>
				<Route path="/ui/buttons/solid/light-button" component={SolidLightButton} />
				<Route
					path="/ui/buttons/solid/disabled/light-button"
					component={SolidDisabledLightButton}
				/>
				<Route
					path="/ui/buttons/solid/check/light-button"
					component={SolidCheckLightButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/light-button"
					component={SolidCheckDisabledLightButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/light-button"
					component={SolidCheckActiveLightButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/light-button"
					component={SolidCheckActiveDisabledLightButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/light-button"
					component={SolidToggleLightButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/light-button"
					component={SolidToggleDisabledLightButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/light-button"
					component={SolidToggleActiveLightButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/light-button"
					component={SolidToggleActiveDisabledLightButton}
				/>
				<Route path="/ui/buttons/solid/dark-button" component={SolidDarkButton} />
				<Route
					path="/ui/buttons/solid/disabled/dark-button"
					component={SolidDisabledDarkButton}
				/>
				<Route
					path="/ui/buttons/solid/check/dark-button"
					component={SolidCheckDarkButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/dark-button"
					component={SolidCheckDisabledDarkButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/dark-button"
					component={SolidCheckActiveDarkButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/dark-button"
					component={SolidCheckActiveDisabledDarkButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/dark-button"
					component={SolidToggleDarkButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/dark-button"
					component={SolidToggleDisabledDarkButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/dark-button"
					component={SolidToggleActiveDarkButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/dark-button"
					component={SolidToggleActiveDisabledDarkButton}
				/>
				<Route path="/ui/buttons/solid/link-button" component={SolidLinkButton} />
				<Route
					path="/ui/buttons/solid/disabled/link-button"
					component={SolidDisabledLinkButton}
				/>
				<Route
					path="/ui/buttons/solid/check/link-button"
					component={SolidCheckLinkButton}
				/>
				<Route
					path="/ui/buttons/solid/check/disabled/link-button"
					component={SolidCheckDisabledLinkButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/link-button"
					component={SolidCheckActiveLinkButton}
				/>
				<Route
					path="/ui/buttons/solid/check-active/disabled/link-button"
					component={SolidCheckActiveDisabledLinkButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/link-button"
					component={SolidToggleLinkButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle/disabled/link-button"
					component={SolidToggleDisabledLinkButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/link-button"
					component={SolidToggleActiveLinkButton}
				/>
				<Route
					path="/ui/buttons/solid/toggle-active/disabled/link-button"
					component={SolidToggleActiveDisabledLinkButton}
				/>
				<Route path="/ui/buttons/outline/primary-button" component={OutlinePrimaryButton} />
				<Route
					path="/ui/buttons/outline/disabled/primary-button"
					component={OutlineDisabledPrimaryButton}
				/>
				<Route
					path="/ui/buttons/outline/check/primary-button"
					component={OutlineCheckPrimaryButton}
				/>
				<Route
					path="/ui/buttons/outline/check/disabled/primary-button"
					component={OutlineCheckDisabledPrimaryButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/primary-button"
					component={OutlineCheckActivePrimaryButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/disabled/primary-button"
					component={OutlineCheckActiveDisabledPrimaryButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/primary-button"
					component={OutlineTogglePrimaryButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/disabled/primary-button"
					component={OutlineToggleDisabledPrimaryButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/primary-button"
					component={OutlineToggleActivePrimaryButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/disabled/primary-button"
					component={OutlineToggleActiveDisabledPrimaryButton}
				/>
				<Route
					path="/ui/buttons/outline/secondary-button"
					component={OutlineSecondaryButton}
				/>
				<Route
					path="/ui/buttons/outline/disabled/secondary-button"
					component={OutlineDisabledSecondaryButton}
				/>
				<Route
					path="/ui/buttons/outline/check/secondary-button"
					component={OutlineCheckSecondaryButton}
				/>
				<Route
					path="/ui/buttons/outline/check/disabled/secondary-button"
					component={OutlineCheckDisabledSecondaryButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/secondary-button"
					component={OutlineCheckActiveSecondaryButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/disabled/secondary-button"
					component={OutlineCheckActiveDisabledSecondaryButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/secondary-button"
					component={OutlineToggleSecondaryButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/disabled/secondary-button"
					component={OutlineToggleDisabledSecondaryButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/secondary-button"
					component={OutlineToggleActiveSecondaryButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/disabled/secondary-button"
					component={OutlineToggleActiveDisabledSecondaryButton}
				/>
				<Route path="/ui/buttons/outline/success-button" component={OutlineSuccessButton} />
				<Route
					path="/ui/buttons/outline/disabled/success-button"
					component={OutlineDisabledSuccessButton}
				/>
				<Route
					path="/ui/buttons/outline/check/success-button"
					component={OutlineCheckSuccessButton}
				/>
				<Route
					path="/ui/buttons/outline/check/disabled/success-button"
					component={OutlineCheckDisabledSuccessButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/success-button"
					component={OutlineCheckActiveSuccessButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/disabled/success-button"
					component={OutlineCheckActiveDisabledSuccessButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/success-button"
					component={OutlineToggleSuccessButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/disabled/success-button"
					component={OutlineToggleDisabledSuccessButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/success-button"
					component={OutlineToggleActiveSuccessButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/disabled/success-button"
					component={OutlineToggleActiveDisabledSuccessButton}
				/>
				<Route path="/ui/buttons/outline/danger-button" component={OutlineDangerButton} />
				<Route
					path="/ui/buttons/outline/disabled/danger-button"
					component={OutlineDisabledDangerButton}
				/>
				<Route
					path="/ui/buttons/outline/check/danger-button"
					component={OutlineCheckDangerButton}
				/>
				<Route
					path="/ui/buttons/outline/check/disabled/danger-button"
					component={OutlineCheckDisabledDangerButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/danger-button"
					component={OutlineCheckActiveDangerButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/disabled/danger-button"
					component={OutlineCheckActiveDisabledDangerButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/danger-button"
					component={OutlineToggleDangerButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/disabled/danger-button"
					component={OutlineToggleDisabledDangerButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/danger-button"
					component={OutlineToggleActiveDangerButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/disabled/danger-button"
					component={OutlineToggleActiveDisabledDangerButton}
				/>
				<Route path="/ui/buttons/outline/warning-button" component={OutlineWarningButton} />
				<Route
					path="/ui/buttons/outline/disabled/warning-button"
					component={OutlineDisabledWarningButton}
				/>
				<Route
					path="/ui/buttons/outline/check/warning-button"
					component={OutlineCheckWarningButton}
				/>
				<Route
					path="/ui/buttons/outline/check/disabled/warning-button"
					component={OutlineCheckDisabledWarningButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/warning-button"
					component={OutlineCheckActiveWarningButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/disabled/warning-button"
					component={OutlineCheckActiveDisabledWarningButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/warning-button"
					component={OutlineToggleWarningButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/disabled/warning-button"
					component={OutlineToggleDisabledWarningButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/warning-button"
					component={OutlineToggleActiveWarningButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/disabled/warning-button"
					component={OutlineToggleActiveDisabledWarningButton}
				/>
				<Route path="/ui/buttons/outline/info-button" component={OutlineInfoButton} />
				<Route
					path="/ui/buttons/outline/disabled/info-button"
					component={OutlineDisabledInfoButton}
				/>
				<Route
					path="/ui/buttons/outline/check/info-button"
					component={OutlineCheckInfoButton}
				/>
				<Route
					path="/ui/buttons/outline/check/disabled/info-button"
					component={OutlineCheckDisabledInfoButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/info-button"
					component={OutlineCheckActiveInfoButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/disabled/info-button"
					component={OutlineCheckActiveDisabledInfoButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/info-button"
					component={OutlineToggleInfoButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/disabled/info-button"
					component={OutlineToggleDisabledInfoButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/info-button"
					component={OutlineToggleActiveInfoButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/disabled/info-button"
					component={OutlineToggleActiveDisabledInfoButton}
				/>
				<Route path="/ui/buttons/outline/light-button" component={OutlineLightButton} />
				<Route
					path="/ui/buttons/outline/disabled/light-button"
					component={OutlineDisabledLightButton}
				/>
				<Route
					path="/ui/buttons/outline/check/light-button"
					component={OutlineCheckLightButton}
				/>
				<Route
					path="/ui/buttons/outline/check/disabled/light-button"
					component={OutlineCheckDisabledLightButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/light-button"
					component={OutlineCheckActiveLightButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/disabled/light-button"
					component={OutlineCheckActiveDisabledLightButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/light-button"
					component={OutlineToggleLightButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/disabled/light-button"
					component={OutlineToggleDisabledLightButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/light-button"
					component={OutlineToggleActiveLightButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/disabled/light-button"
					component={OutlineToggleActiveDisabledLightButton}
				/>
				<Route path="/ui/buttons/outline/dark-button" component={OutlineDarkButton} />
				<Route
					path="/ui/buttons/outline/disabled/dark-button"
					component={OutlineDisabledDarkButton}
				/>
				<Route
					path="/ui/buttons/outline/check/dark-button"
					component={OutlineCheckDarkButton}
				/>
				<Route
					path="/ui/buttons/outline/check/disabled/dark-button"
					component={OutlineCheckDisabledDarkButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/dark-button"
					component={OutlineCheckActiveDarkButton}
				/>
				<Route
					path="/ui/buttons/outline/check-active/disabled/dark-button"
					component={OutlineCheckActiveDisabledDarkButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/dark-button"
					component={OutlineToggleDarkButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle/disabled/dark-button"
					component={OutlineToggleDisabledDarkButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/dark-button"
					component={OutlineToggleActiveDarkButton}
				/>
				<Route
					path="/ui/buttons/outline/toggle-active/disabled/dark-button"
					component={OutlineToggleActiveDisabledDarkButton}
				/>
				<Route path="/ui/buttons/sizes/large-button" component={LargeButton} />
				<Route
					path="/ui/buttons/sizes/disabled/large-button"
					component={DisabledLargeButton}
				/>
				<Route path="/ui/buttons/sizes/check/large-button" component={CheckLargeButton} />
				<Route
					path="/ui/buttons/sizes/check/disabled/large-button"
					component={CheckDisabledLargeButton}
				/>
				<Route
					path="/ui/buttons/sizes/check-active/large-button"
					component={CheckActiveLargeButton}
				/>
				<Route
					path="/ui/buttons/sizes/check-active/disabled/large-button"
					component={CheckActiveDisabledLargeButton}
				/>
				<Route path="/ui/buttons/sizes/toggle/large-button" component={ToggleLargeButton} />
				<Route
					path="/ui/buttons/sizes/toggle/disabled/large-button"
					component={ToggleDisabledLargeButton}
				/>
				<Route
					path="/ui/buttons/sizes/toggle-active/large-button"
					component={ToggleActiveLargeButton}
				/>
				<Route
					path="/ui/buttons/sizes/toggle-active/disabled/large-button"
					component={ToggleActiveDisabledLargeButton}
				/>
				<Route path="/ui/buttons/sizes/small-button" component={SmallButton} />
				<Route
					path="/ui/buttons/sizes/disabled/small-button"
					component={DisabledSmallButton}
				/>
				<Route path="/ui/buttons/sizes/check/small-button" component={CheckSmallButton} />
				<Route
					path="/ui/buttons/sizes/check/disabled/small-button"
					component={CheckDisabledSmallButton}
				/>
				<Route
					path="/ui/buttons/sizes/check-active/small-button"
					component={CheckActiveSmallButton}
				/>
				<Route
					path="/ui/buttons/sizes/check-active/disabled/small-button"
					component={CheckActiveDisabledSmallButton}
				/>
				<Route path="/ui/buttons/sizes/toggle/small-button" component={ToggleSmallButton} />
				<Route
					path="/ui/buttons/sizes/toggle/disabled/small-button"
					component={ToggleDisabledSmallButton}
				/>
				<Route
					path="/ui/buttons/sizes/toggle-active/small-button"
					component={ToggleActiveSmallButton}
				/>
				<Route
					path="/ui/buttons/sizes/toggle-active/disabled/small-button"
					component={ToggleActiveDisabledSmallButton}
				/>
				<Route path="/ui/alerts/danger-alert" component={DangerAlert} />
				<Route path="/ui/alerts/dark-alert" component={DarkAlert} />
				<Route path="/ui/alerts/heading-alert" component={HeadingAlert} />
				<Route path="/ui/alerts/info-alert" component={InfoAlert} />
				<Route path="/ui/alerts/light-alert" component={LightAlert} />
				<Route path="/ui/alerts/primary-alert" component={PrimaryAlert} />
				<Route path="/ui/alerts/secondary-alert" component={SecondaryAlert} />
				<Route path="/ui/alerts/success-alert" component={SuccessAlert} />
				<Route path="/ui/alerts/warning-alert" component={WarningAlert} />
				<Route path="/ui/badge/heading-badges" component={HeadingBadges} />
				<Route path="/ui/badge/pill-badges" component={PillBadges} />
				<Route path="/ui/breadcrumb/breadcrumb-example" component={BreadcrumbExample} />
				<Route
					path="/ui/button-group/button-group-example"
					component={ButtonGroupExample}
				/>
				<Route path="/ui/card/cards-grid" component={CardsGrid} />
				<Route path="/ui/card/featured-card" component={FeaturedCard} />
				<Route path="/ui/card/horizontal-card" component={HorizontalCard} />
				<Route path="/ui/card/image-top-card" component={ImageTopCard} />
				<Route path="/ui/card/list-card" component={ListCard} />
				<Route path="/ui/card-tabs/card-tabs-example" component={CardTabsExample} />
				<Route path="/ui/navs/basic-nav" component={BasicNav} />
				<Route path="/ui/navs/pill-nav" component={PillNav} />
				<Route path="/ui/navs/tabbed-nav" component={TabbedNav} />
				<Route path="/ui/navbar/navbar-example" component={NavbarExample} />
				<Route path="/ui/carousel/carousel-example" component={CarouselExample} />
				<Route path="/ui/dropdowns/normal-dropdown" component={NormalDropdown} />
				<Route path="/ui/pagination/large-pagination" component={LargePagination} />
				<Route path="/ui/pagination/small-pagination" component={SmallPagination} />
				<Route path="/ui/pagination/standard-pagination" component={StandardPagination} />
				<Route path="/ui/progress/progress-0" component={Progress0} />
				<Route path="/ui/progress/progress-25" component={Progress25} />
				<Route path="/ui/progress/progress-50" component={Progress50} />
				<Route path="/ui/progress/progress-75" component={Progress75} />
				<Route path="/ui/progress/progress-100" component={Progress100} />
				<Route path="/ui/progress/striped-progress" component={StripedProgress} />
				<Route
					path="/ui/spinners/border-primary-spinner"
					component={BorderPrimarySpinner}
				/>
				<Route
					path="/ui/spinners/border-secondary-spinner"
					component={BorderSecondarySpinner}
				/>
				<Route
					path="/ui/spinners/border-success-spinner"
					component={BorderSuccessSpinner}
				/>
				<Route path="/ui/spinners/border-danger-spinner" component={BorderDangerSpinner} />
				<Route
					path="/ui/spinners/border-warning-spinner"
					component={BorderWarningSpinner}
				/>
				<Route path="/ui/spinners/border-info-spinner" component={BorderInfoSpinner} />
				<Route path="/ui/spinners/border-light-spinner" component={BorderLightSpinner} />
				<Route path="/ui/spinners/border-dark-spinner" component={BorderDarkSpinner} />
				<Route path="/ui/spinners/grow-primary-spinner" component={GrowPrimarySpinner} />
				<Route
					path="/ui/spinners/grow-secondary-spinner"
					component={GrowSecondarySpinner}
				/>
				<Route path="/ui/spinners/grow-success-spinner" component={GrowSuccessSpinner} />
				<Route path="/ui/spinners/grow-danger-spinner" component={GrowDangerSpinner} />
				<Route path="/ui/spinners/grow-warning-spinner" component={GrowWarningSpinner} />
				<Route path="/ui/spinners/grow-info-spinner" component={GrowInfoSpinner} />
				<Route path="/ui/spinners/grow-light-spinner" component={GrowLightSpinner} />
				<Route path="/ui/spinners/grow-dark-spinner" component={GrowDarkSpinner} />
				<Route
					path="/ui/list-group/contextual-danger-list-group"
					component={ContextualDangerListGroup}
				/>
				<Route
					path="/ui/list-group/contextual-dark-list-group"
					component={ContextualDarkListGroup}
				/>
				<Route
					path="/ui/list-group/contextual-default-list-group"
					component={ContextualDefaultListGroup}
				/>
				<Route
					path="/ui/list-group/contextual-info-list-group"
					component={ContextualInfoListGroup}
				/>
				<Route
					path="/ui/list-group/contextual-light-list-group"
					component={ContextualLightListGroup}
				/>
				<Route
					path="/ui/list-group/contextual-list-group"
					component={ContextualListGroup}
				/>
				<Route
					path="/ui/list-group/contextual-primary-list-group"
					component={ContextualPrimaryListGroup}
				/>
				<Route
					path="/ui/list-group/contextual-secondary-list-group"
					component={ContextualSecondaryListGroup}
				/>
				<Route
					path="/ui/list-group/contextual-success-list-group"
					component={ContextualSuccessListGroup}
				/>
				<Route
					path="/ui/list-group/contextual-warning-list-group"
					component={ContextualWarningListGroup}
				/>
				<Route path="/ui/list-group/default-list-group" component={DefaultListGroup} />
				<Route path="/ui/list-group/flush-list-group" component={FlushListGroup} />
				<Route path="/ui/dropdowns/aligned-dropdown" component={AlignedDropdown} />
				<Route path="/ui/dropdowns/end-dropdown" component={EndDropdown} />
				<Route path="/ui/dropdowns/large-dropdown" component={LargeDropdown} />
				<Route path="/ui/dropdowns/small-dropdown" component={SmallDropdown} />
				<Route path="/ui/dropdowns/split-danger-dropdown" component={SplitDangerDropdown} />
				<Route path="/ui/dropdowns/split-dark-dropdown" component={SplitDarkDropdown} />
				<Route path="/ui/dropdowns/split-info-dropdown" component={SplitInfoDropdown} />
				<Route path="/ui/dropdowns/split-light-dropdown" component={SplitLightDropdown} />
				<Route
					path="/ui/dropdowns/split-primary-dropdown"
					component={SplitPrimaryDropdown}
				/>
				<Route
					path="/ui/dropdowns/split-secondary-dropdown"
					component={SplitSecondaryDropdown}
				/>
				<Route
					path="/ui/dropdowns/split-success-dropdown"
					component={SplitSuccessDropdown}
				/>
				<Route
					path="/ui/dropdowns/split-warning-dropdown"
					component={SplitWarningDropdown}
				/>
				<Route path="/ui/dropdowns/start-dropdown" component={StartDropdown} />
				<Route path="/ui/dropdowns/up-dropdown" component={UpDropdown} />
				<Route path="/ui/accordion/accordion-example" component={AccordionExample} />
				<Route
					path="/ui/modal/centered-scrollable-modal"
					component={CenteredScrollableModal}
				/>
				<Route path="/ui/modal/default-modal" component={DefaultModal} />
				<Route path="/ui/modal/fullscreen-modal" component={FullscreenModal} />
				<Route path="/ui/modal/static-backdrop-modal" component={StaticBackdropModal} />
				<Route
					path="/ui/offcanvas/body-scrolling-offcanvas"
					component={BodyScrollingOffcanvas}
				/>
				<Route path="/ui/offcanvas/bottom-offcanvas" component={BottomOffcanvas} />
				<Route path="/ui/offcanvas/default-offcanvas" component={DefaultOffcanvas} />
				<Route path="/ui/offcanvas/end-offcanvas" component={EndOffcanvas} />
				<Route path="/ui/offcanvas/responsive-offcanvas" component={ResponsiveOffcanvas} />
				<Route
					path="/ui/offcanvas/scrolling-backdrop-offcanvas"
					component={ScrollingBackdropOffcanvas}
				/>
				<Route
					path="/ui/offcanvas/static-backdrop-offcanvas"
					component={StaticBackdropOffcanvas}
				/>
				<Route path="/ui/offcanvas/top-offcanvas" component={TopOffcanvas} />
				<Route path="/ui/popovers/basic-popover" component={BasicPopover} />
				<Route path="/ui/popovers/bottom-popover" component={BottomPopover} />
				<Route path="/ui/popovers/end-popover" component={EndPopover} />
				<Route path="/ui/popovers/start-popover" component={StartPopover} />
				<Route path="/ui/popovers/top-popover" component={TopPopover} />
				<Route path="/ui/scrollspy/scrollspy-example" component={ScrollspyExample} />
				<Route path="/ui/toasts/toast-example" component={ToastExample} />
				<Route path="/ui/tooltips/bottom-tooltip" component={BottomTooltip} />
				<Route path="/ui/tooltips/end-tooltip" component={EndTooltip} />
				<Route path="/ui/tooltips/html-tooltip" component={HtmlTooltip} />
				<Route path="/ui/tooltips/start-tooltip" component={StartTooltip} />
				<Route path="/ui/tooltips/top-tooltip" component={TopTooltip} />
				<Route path="/contents/figures/figure-example" component={FigureExample} />
				<Route path="/contents/images/responsive" component={Responsive} />
				<Route path="/contents/images/thumbnail" component={Thumbnail} />
				<Route path="/contents/tables/dark-borderless" component={DarkBorderless} />
				<Route
					path="/contents/tables/hover-danger-variant"
					component={HoverDangerVariant}
				/>
				<Route path="/contents/tables/hover-dark-variant" component={HoverDarkVariant} />
				<Route
					path="/contents/tables/hover-default-variant"
					component={HoverDefaultVariant}
				/>
				<Route path="/contents/tables/hover-info-variant" component={HoverInfoVariant} />
				<Route path="/contents/tables/hover-light-variant" component={HoverLightVariant} />
				<Route
					path="/contents/tables/hover-primary-variant"
					component={HoverPrimaryVariant}
				/>
				<Route
					path="/contents/tables/hover-secondary-variant"
					component={HoverSecondaryVariant}
				/>
				<Route
					path="/contents/tables/hover-success-variant"
					component={HoverSuccessVariant}
				/>
				<Route path="/contents/tables/hover-variants" component={HoverVariants} />
				<Route
					path="/contents/tables/hover-warning-variant"
					component={HoverWarningVariant}
				/>
				<Route path="/contents/tables/small-bordered" component={SmallBordered} />
				<Route path="/contents/tables/striped" component={Striped} />
				<Route path="/contents/typography/blockquote" component={Blockquote} />
				<Route path="/contents/typography/display" component={Display} />
				<Route path="/contents/typography/heading" component={Heading} />
				<Route path="/contents/typography/inline-list" component={InlineList} />
				<Route path="/contents/typography/lead" component={Lead} />
				<Route path="/contents/typography/text-elements" component={TextElements} />
				<Route path="/contents/typography/unstyled-list" component={UnstyledList} />
				<Route path="/forms/disabled/disabled-checkbox" component={DisabledCheckbox} />
				<Route path="/forms/disabled/disabled-fieldset" component={DisabledFieldset} />
				<Route path="/forms/disabled/disabled-file-range" component={DisabledFileRange} />
				<Route
					path="/forms/disabled/disabled-radio-buttons"
					component={DisabledRadioButtons}
				/>
				<Route
					path="/forms/disabled/disabled-switch-checkbox"
					component={DisabledSwitchCheckbox}
				/>
				<Route
					path="/forms/floating-labels/floating-labels-example"
					component={FloatingLabelsExample}
				/>
				<Route path="/forms/input-group/currency-addon" component={CurrencyAddon} />
				<Route path="/forms/input-group/prefix-addon" component={PrefixAddon} />
				<Route path="/forms/input-group/suffix-addon" component={SuffixAddon} />
				<Route path="/forms/input-group/textarea-addon" component={TextareaAddon} />
				<Route path="/forms/input-group/url-addon" component={UrlAddon} />
				<Route path="/forms/overview/basic-form" component={BasicForm} />
				<Route path="/forms/overview/checkbox" component={Checkbox} />
				<Route path="/forms/overview/file-input" component={FileInput} />
				<Route path="/forms/overview/radio-buttons" component={RadioButtons} />
				<Route path="/forms/overview/range-input" component={RangeInput} />
				<Route path="/forms/overview/switch-checkbox" component={SwitchCheckbox} />
				<Route path="/forms/sizing/large-controls" component={LargeControls} />
				<Route path="/forms/sizing/small-controls" component={SmallControls} />
				<Route path="/forms/validation/invalid-checkboxes" component={InvalidCheckboxes} />
				<Route path="/forms/validation/invalid-radios" component={InvalidRadios} />
				<Route path="/forms/validation/invalid-state-zip" component={InvalidStateZip} />
				<Route
					path="/forms/validation/invalid-username-city"
					component={InvalidUsernameCity}
				/>
				<Route path="/forms/validation/valid-checkboxes" component={ValidCheckboxes} />
				<Route path="/forms/validation/valid-names" component={ValidNames} />
				<Route path="/forms/validation/valid-radios" component={ValidRadios} />
			</Route>
		</Router>
	),
	document.getElementById('root') as HTMLElement,
)
