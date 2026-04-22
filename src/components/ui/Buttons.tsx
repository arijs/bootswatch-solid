import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import OutlineCheckActiveDangerButton from './buttons/outline/check-active/OutlineCheckActiveDangerButton'
import OutlineCheckActiveDarkButton from './buttons/outline/check-active/OutlineCheckActiveDarkButton'
import OutlineCheckActiveDisabledDangerButton from './buttons/outline/check-active/disabled/OutlineCheckActiveDisabledDangerButton'
import OutlineCheckActiveDisabledDarkButton from './buttons/outline/check-active/disabled/OutlineCheckActiveDisabledDarkButton'
import OutlineCheckActiveDisabledInfoButton from './buttons/outline/check-active/disabled/OutlineCheckActiveDisabledInfoButton'
import OutlineCheckActiveDisabledLightButton from './buttons/outline/check-active/disabled/OutlineCheckActiveDisabledLightButton'
import OutlineCheckActiveDisabledPrimaryButton from './buttons/outline/check-active/disabled/OutlineCheckActiveDisabledPrimaryButton'
import OutlineCheckActiveDisabledSecondaryButton from './buttons/outline/check-active/disabled/OutlineCheckActiveDisabledSecondaryButton'
import OutlineCheckActiveDisabledSuccessButton from './buttons/outline/check-active/disabled/OutlineCheckActiveDisabledSuccessButton'
import OutlineCheckActiveDisabledWarningButton from './buttons/outline/check-active/disabled/OutlineCheckActiveDisabledWarningButton'
import OutlineCheckActiveInfoButton from './buttons/outline/check-active/OutlineCheckActiveInfoButton'
import OutlineCheckActiveLightButton from './buttons/outline/check-active/OutlineCheckActiveLightButton'
import OutlineCheckActivePrimaryButton from './buttons/outline/check-active/OutlineCheckActivePrimaryButton'
import OutlineCheckActiveSecondaryButton from './buttons/outline/check-active/OutlineCheckActiveSecondaryButton'
import OutlineCheckActiveSuccessButton from './buttons/outline/check-active/OutlineCheckActiveSuccessButton'
import OutlineCheckActiveWarningButton from './buttons/outline/check-active/OutlineCheckActiveWarningButton'
import OutlineCheckDangerButton from './buttons/outline/check/OutlineCheckDangerButton'
import OutlineCheckDarkButton from './buttons/outline/check/OutlineCheckDarkButton'
import OutlineCheckDisabledDangerButton from './buttons/outline/check/disabled/OutlineCheckDisabledDangerButton'
import OutlineCheckDisabledDarkButton from './buttons/outline/check/disabled/OutlineCheckDisabledDarkButton'
import OutlineCheckDisabledInfoButton from './buttons/outline/check/disabled/OutlineCheckDisabledInfoButton'
import OutlineCheckDisabledLightButton from './buttons/outline/check/disabled/OutlineCheckDisabledLightButton'
import OutlineCheckDisabledPrimaryButton from './buttons/outline/check/disabled/OutlineCheckDisabledPrimaryButton'
import OutlineCheckDisabledSecondaryButton from './buttons/outline/check/disabled/OutlineCheckDisabledSecondaryButton'
import OutlineCheckDisabledSuccessButton from './buttons/outline/check/disabled/OutlineCheckDisabledSuccessButton'
import OutlineCheckDisabledWarningButton from './buttons/outline/check/disabled/OutlineCheckDisabledWarningButton'
import OutlineCheckInfoButton from './buttons/outline/check/OutlineCheckInfoButton'
import OutlineCheckLightButton from './buttons/outline/check/OutlineCheckLightButton'
import OutlineCheckPrimaryButton from './buttons/outline/check/OutlineCheckPrimaryButton'
import OutlineCheckSecondaryButton from './buttons/outline/check/OutlineCheckSecondaryButton'
import OutlineCheckSuccessButton from './buttons/outline/check/OutlineCheckSuccessButton'
import OutlineCheckWarningButton from './buttons/outline/check/OutlineCheckWarningButton'
import OutlineDangerButton from './buttons/outline/OutlineDangerButton'
import OutlineDarkButton from './buttons/outline/OutlineDarkButton'
import OutlineDisabledDangerButton from './buttons/outline/disabled/OutlineDisabledDangerButton'
import OutlineDisabledDarkButton from './buttons/outline/disabled/OutlineDisabledDarkButton'
import OutlineDisabledInfoButton from './buttons/outline/disabled/OutlineDisabledInfoButton'
import OutlineDisabledLightButton from './buttons/outline/disabled/OutlineDisabledLightButton'
import OutlineDisabledPrimaryButton from './buttons/outline/disabled/OutlineDisabledPrimaryButton'
import OutlineDisabledSecondaryButton from './buttons/outline/disabled/OutlineDisabledSecondaryButton'
import OutlineDisabledSuccessButton from './buttons/outline/disabled/OutlineDisabledSuccessButton'
import OutlineDisabledWarningButton from './buttons/outline/disabled/OutlineDisabledWarningButton'
import OutlineInfoButton from './buttons/outline/OutlineInfoButton'
import OutlineLightButton from './buttons/outline/OutlineLightButton'
import OutlinePrimaryButton from './buttons/outline/OutlinePrimaryButton'
import OutlineSecondaryButton from './buttons/outline/OutlineSecondaryButton'
import OutlineSuccessButton from './buttons/outline/OutlineSuccessButton'
import OutlineToggleActiveDangerButton from './buttons/outline/toggle-active/OutlineToggleActiveDangerButton'
import OutlineToggleActiveDarkButton from './buttons/outline/toggle-active/OutlineToggleActiveDarkButton'
import OutlineToggleActiveDisabledDangerButton from './buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledDangerButton'
import OutlineToggleActiveDisabledDarkButton from './buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledDarkButton'
import OutlineToggleActiveDisabledInfoButton from './buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledInfoButton'
import OutlineToggleActiveDisabledLightButton from './buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledLightButton'
import OutlineToggleActiveDisabledPrimaryButton from './buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledPrimaryButton'
import OutlineToggleActiveDisabledSecondaryButton from './buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledSecondaryButton'
import OutlineToggleActiveDisabledSuccessButton from './buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledSuccessButton'
import OutlineToggleActiveDisabledWarningButton from './buttons/outline/toggle-active/disabled/OutlineToggleActiveDisabledWarningButton'
import OutlineToggleActiveInfoButton from './buttons/outline/toggle-active/OutlineToggleActiveInfoButton'
import OutlineToggleActiveLightButton from './buttons/outline/toggle-active/OutlineToggleActiveLightButton'
import OutlineToggleActivePrimaryButton from './buttons/outline/toggle-active/OutlineToggleActivePrimaryButton'
import OutlineToggleActiveSecondaryButton from './buttons/outline/toggle-active/OutlineToggleActiveSecondaryButton'
import OutlineToggleActiveSuccessButton from './buttons/outline/toggle-active/OutlineToggleActiveSuccessButton'
import OutlineToggleActiveWarningButton from './buttons/outline/toggle-active/OutlineToggleActiveWarningButton'
import OutlineToggleDangerButton from './buttons/outline/toggle/OutlineToggleDangerButton'
import OutlineToggleDarkButton from './buttons/outline/toggle/OutlineToggleDarkButton'
import OutlineToggleDisabledDangerButton from './buttons/outline/toggle/disabled/OutlineToggleDisabledDangerButton'
import OutlineToggleDisabledDarkButton from './buttons/outline/toggle/disabled/OutlineToggleDisabledDarkButton'
import OutlineToggleDisabledInfoButton from './buttons/outline/toggle/disabled/OutlineToggleDisabledInfoButton'
import OutlineToggleDisabledLightButton from './buttons/outline/toggle/disabled/OutlineToggleDisabledLightButton'
import OutlineToggleDisabledPrimaryButton from './buttons/outline/toggle/disabled/OutlineToggleDisabledPrimaryButton'
import OutlineToggleDisabledSecondaryButton from './buttons/outline/toggle/disabled/OutlineToggleDisabledSecondaryButton'
import OutlineToggleDisabledSuccessButton from './buttons/outline/toggle/disabled/OutlineToggleDisabledSuccessButton'
import OutlineToggleDisabledWarningButton from './buttons/outline/toggle/disabled/OutlineToggleDisabledWarningButton'
import OutlineToggleInfoButton from './buttons/outline/toggle/OutlineToggleInfoButton'
import OutlineToggleLightButton from './buttons/outline/toggle/OutlineToggleLightButton'
import OutlineTogglePrimaryButton from './buttons/outline/toggle/OutlineTogglePrimaryButton'
import OutlineToggleSecondaryButton from './buttons/outline/toggle/OutlineToggleSecondaryButton'
import OutlineToggleSuccessButton from './buttons/outline/toggle/OutlineToggleSuccessButton'
import OutlineToggleWarningButton from './buttons/outline/toggle/OutlineToggleWarningButton'
import OutlineWarningButton from './buttons/outline/OutlineWarningButton'
import CheckActiveDisabledLargeButton from './buttons/sizes/check-active/disabled/CheckActiveDisabledLargeButton'
import CheckActiveDisabledSmallButton from './buttons/sizes/check-active/disabled/CheckActiveDisabledSmallButton'
import CheckActiveLargeButton from './buttons/sizes/check-active/CheckActiveLargeButton'
import CheckActiveSmallButton from './buttons/sizes/check-active/CheckActiveSmallButton'
import CheckDisabledLargeButton from './buttons/sizes/check/disabled/CheckDisabledLargeButton'
import CheckDisabledSmallButton from './buttons/sizes/check/disabled/CheckDisabledSmallButton'
import CheckLargeButton from './buttons/sizes/check/CheckLargeButton'
import CheckSmallButton from './buttons/sizes/check/CheckSmallButton'
import DisabledLargeButton from './buttons/sizes/disabled/DisabledLargeButton'
import DisabledSmallButton from './buttons/sizes/disabled/DisabledSmallButton'
import LargeButton from './buttons/sizes/LargeButton'
import SmallButton from './buttons/sizes/SmallButton'
import ToggleActiveDisabledLargeButton from './buttons/sizes/toggle-active/disabled/ToggleActiveDisabledLargeButton'
import ToggleActiveDisabledSmallButton from './buttons/sizes/toggle-active/disabled/ToggleActiveDisabledSmallButton'
import ToggleActiveLargeButton from './buttons/sizes/toggle-active/ToggleActiveLargeButton'
import ToggleActiveSmallButton from './buttons/sizes/toggle-active/ToggleActiveSmallButton'
import ToggleDisabledLargeButton from './buttons/sizes/toggle/disabled/ToggleDisabledLargeButton'
import ToggleDisabledSmallButton from './buttons/sizes/toggle/disabled/ToggleDisabledSmallButton'
import ToggleLargeButton from './buttons/sizes/toggle/ToggleLargeButton'
import ToggleSmallButton from './buttons/sizes/toggle/ToggleSmallButton'
import SolidBaseButton from './buttons/solid/SolidBaseButton'
import SolidCheckActiveBaseButton from './buttons/solid/check-active/SolidCheckActiveBaseButton'
import SolidCheckActiveDangerButton from './buttons/solid/check-active/SolidCheckActiveDangerButton'
import SolidCheckActiveDarkButton from './buttons/solid/check-active/SolidCheckActiveDarkButton'
import SolidCheckActiveDisabledBaseButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledBaseButton'
import SolidCheckActiveDisabledDangerButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledDangerButton'
import SolidCheckActiveDisabledDarkButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledDarkButton'
import SolidCheckActiveDisabledInfoButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledInfoButton'
import SolidCheckActiveDisabledLightButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledLightButton'
import SolidCheckActiveDisabledLinkButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledLinkButton'
import SolidCheckActiveDisabledPrimaryButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledPrimaryButton'
import SolidCheckActiveDisabledSecondaryButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledSecondaryButton'
import SolidCheckActiveDisabledSuccessButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledSuccessButton'
import SolidCheckActiveDisabledWarningButton from './buttons/solid/check-active/disabled/SolidCheckActiveDisabledWarningButton'
import SolidCheckActiveInfoButton from './buttons/solid/check-active/SolidCheckActiveInfoButton'
import SolidCheckActiveLightButton from './buttons/solid/check-active/SolidCheckActiveLightButton'
import SolidCheckActiveLinkButton from './buttons/solid/check-active/SolidCheckActiveLinkButton'
import SolidCheckActivePrimaryButton from './buttons/solid/check-active/SolidCheckActivePrimaryButton'
import SolidCheckActiveSecondaryButton from './buttons/solid/check-active/SolidCheckActiveSecondaryButton'
import SolidCheckActiveSuccessButton from './buttons/solid/check-active/SolidCheckActiveSuccessButton'
import SolidCheckActiveWarningButton from './buttons/solid/check-active/SolidCheckActiveWarningButton'
import SolidCheckBaseButton from './buttons/solid/check/SolidCheckBaseButton'
import SolidCheckDangerButton from './buttons/solid/check/SolidCheckDangerButton'
import SolidCheckDarkButton from './buttons/solid/check/SolidCheckDarkButton'
import SolidCheckDisabledBaseButton from './buttons/solid/check/disabled/SolidCheckDisabledBaseButton'
import SolidCheckDisabledDangerButton from './buttons/solid/check/disabled/SolidCheckDisabledDangerButton'
import SolidCheckDisabledDarkButton from './buttons/solid/check/disabled/SolidCheckDisabledDarkButton'
import SolidCheckDisabledInfoButton from './buttons/solid/check/disabled/SolidCheckDisabledInfoButton'
import SolidCheckDisabledLightButton from './buttons/solid/check/disabled/SolidCheckDisabledLightButton'
import SolidCheckDisabledLinkButton from './buttons/solid/check/disabled/SolidCheckDisabledLinkButton'
import SolidCheckDisabledPrimaryButton from './buttons/solid/check/disabled/SolidCheckDisabledPrimaryButton'
import SolidCheckDisabledSecondaryButton from './buttons/solid/check/disabled/SolidCheckDisabledSecondaryButton'
import SolidCheckDisabledSuccessButton from './buttons/solid/check/disabled/SolidCheckDisabledSuccessButton'
import SolidCheckDisabledWarningButton from './buttons/solid/check/disabled/SolidCheckDisabledWarningButton'
import SolidCheckInfoButton from './buttons/solid/check/SolidCheckInfoButton'
import SolidCheckLightButton from './buttons/solid/check/SolidCheckLightButton'
import SolidCheckLinkButton from './buttons/solid/check/SolidCheckLinkButton'
import SolidCheckPrimaryButton from './buttons/solid/check/SolidCheckPrimaryButton'
import SolidCheckSecondaryButton from './buttons/solid/check/SolidCheckSecondaryButton'
import SolidCheckSuccessButton from './buttons/solid/check/SolidCheckSuccessButton'
import SolidCheckWarningButton from './buttons/solid/check/SolidCheckWarningButton'
import SolidDangerButton from './buttons/solid/SolidDangerButton'
import SolidDarkButton from './buttons/solid/SolidDarkButton'
import SolidDisabledBaseButton from './buttons/solid/disabled/SolidDisabledBaseButton'
import SolidDisabledDangerButton from './buttons/solid/disabled/SolidDisabledDangerButton'
import SolidDisabledDarkButton from './buttons/solid/disabled/SolidDisabledDarkButton'
import SolidDisabledInfoButton from './buttons/solid/disabled/SolidDisabledInfoButton'
import SolidDisabledLightButton from './buttons/solid/disabled/SolidDisabledLightButton'
import SolidDisabledLinkButton from './buttons/solid/disabled/SolidDisabledLinkButton'
import SolidDisabledPrimaryButton from './buttons/solid/disabled/SolidDisabledPrimaryButton'
import SolidDisabledSecondaryButton from './buttons/solid/disabled/SolidDisabledSecondaryButton'
import SolidDisabledSuccessButton from './buttons/solid/disabled/SolidDisabledSuccessButton'
import SolidDisabledWarningButton from './buttons/solid/disabled/SolidDisabledWarningButton'
import SolidInfoButton from './buttons/solid/SolidInfoButton'
import SolidLightButton from './buttons/solid/SolidLightButton'
import SolidLinkButton from './buttons/solid/SolidLinkButton'
import SolidPrimaryButton from './buttons/solid/SolidPrimaryButton'
import SolidSecondaryButton from './buttons/solid/SolidSecondaryButton'
import SolidSuccessButton from './buttons/solid/SolidSuccessButton'
import SolidToggleActiveBaseButton from './buttons/solid/toggle-active/SolidToggleActiveBaseButton'
import SolidToggleActiveDangerButton from './buttons/solid/toggle-active/SolidToggleActiveDangerButton'
import SolidToggleActiveDarkButton from './buttons/solid/toggle-active/SolidToggleActiveDarkButton'
import SolidToggleActiveDisabledBaseButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledBaseButton'
import SolidToggleActiveDisabledDangerButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledDangerButton'
import SolidToggleActiveDisabledDarkButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledDarkButton'
import SolidToggleActiveDisabledInfoButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledInfoButton'
import SolidToggleActiveDisabledLightButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledLightButton'
import SolidToggleActiveDisabledLinkButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledLinkButton'
import SolidToggleActiveDisabledPrimaryButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledPrimaryButton'
import SolidToggleActiveDisabledSecondaryButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledSecondaryButton'
import SolidToggleActiveDisabledSuccessButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledSuccessButton'
import SolidToggleActiveDisabledWarningButton from './buttons/solid/toggle-active/disabled/SolidToggleActiveDisabledWarningButton'
import SolidToggleActiveInfoButton from './buttons/solid/toggle-active/SolidToggleActiveInfoButton'
import SolidToggleActiveLightButton from './buttons/solid/toggle-active/SolidToggleActiveLightButton'
import SolidToggleActiveLinkButton from './buttons/solid/toggle-active/SolidToggleActiveLinkButton'
import SolidToggleActivePrimaryButton from './buttons/solid/toggle-active/SolidToggleActivePrimaryButton'
import SolidToggleActiveSecondaryButton from './buttons/solid/toggle-active/SolidToggleActiveSecondaryButton'
import SolidToggleActiveSuccessButton from './buttons/solid/toggle-active/SolidToggleActiveSuccessButton'
import SolidToggleActiveWarningButton from './buttons/solid/toggle-active/SolidToggleActiveWarningButton'
import SolidToggleBaseButton from './buttons/solid/toggle/SolidToggleBaseButton'
import SolidToggleDangerButton from './buttons/solid/toggle/SolidToggleDangerButton'
import SolidToggleDarkButton from './buttons/solid/toggle/SolidToggleDarkButton'
import SolidToggleDisabledBaseButton from './buttons/solid/toggle/disabled/SolidToggleDisabledBaseButton'
import SolidToggleDisabledDangerButton from './buttons/solid/toggle/disabled/SolidToggleDisabledDangerButton'
import SolidToggleDisabledDarkButton from './buttons/solid/toggle/disabled/SolidToggleDisabledDarkButton'
import SolidToggleDisabledInfoButton from './buttons/solid/toggle/disabled/SolidToggleDisabledInfoButton'
import SolidToggleDisabledLightButton from './buttons/solid/toggle/disabled/SolidToggleDisabledLightButton'
import SolidToggleDisabledLinkButton from './buttons/solid/toggle/disabled/SolidToggleDisabledLinkButton'
import SolidToggleDisabledPrimaryButton from './buttons/solid/toggle/disabled/SolidToggleDisabledPrimaryButton'
import SolidToggleDisabledSecondaryButton from './buttons/solid/toggle/disabled/SolidToggleDisabledSecondaryButton'
import SolidToggleDisabledSuccessButton from './buttons/solid/toggle/disabled/SolidToggleDisabledSuccessButton'
import SolidToggleDisabledWarningButton from './buttons/solid/toggle/disabled/SolidToggleDisabledWarningButton'
import SolidToggleInfoButton from './buttons/solid/toggle/SolidToggleInfoButton'
import SolidToggleLightButton from './buttons/solid/toggle/SolidToggleLightButton'
import SolidToggleLinkButton from './buttons/solid/toggle/SolidToggleLinkButton'
import SolidTogglePrimaryButton from './buttons/solid/toggle/SolidTogglePrimaryButton'
import SolidToggleSecondaryButton from './buttons/solid/toggle/SolidToggleSecondaryButton'
import SolidToggleSuccessButton from './buttons/solid/toggle/SolidToggleSuccessButton'
import SolidToggleWarningButton from './buttons/solid/toggle/SolidToggleWarningButton'
import SolidWarningButton from './buttons/solid/SolidWarningButton'

const buttonExamples: Array<{
	href: string
	label: string
	component: Component
}> = [
	{ href: '/ui/buttons/outline/check-active/danger-button', label: 'Outline Check Active Danger Button', component: OutlineCheckActiveDangerButton },
	{ href: '/ui/buttons/outline/check-active/dark-button', label: 'Outline Check Active Dark Button', component: OutlineCheckActiveDarkButton },
	{ href: '/ui/buttons/outline/check-active/disabled/danger-button', label: 'Outline Check Active Disabled Danger Button', component: OutlineCheckActiveDisabledDangerButton },
	{ href: '/ui/buttons/outline/check-active/disabled/dark-button', label: 'Outline Check Active Disabled Dark Button', component: OutlineCheckActiveDisabledDarkButton },
	{ href: '/ui/buttons/outline/check-active/disabled/info-button', label: 'Outline Check Active Disabled Info Button', component: OutlineCheckActiveDisabledInfoButton },
	{ href: '/ui/buttons/outline/check-active/disabled/light-button', label: 'Outline Check Active Disabled Light Button', component: OutlineCheckActiveDisabledLightButton },
	{ href: '/ui/buttons/outline/check-active/disabled/primary-button', label: 'Outline Check Active Disabled Primary Button', component: OutlineCheckActiveDisabledPrimaryButton },
	{ href: '/ui/buttons/outline/check-active/disabled/secondary-button', label: 'Outline Check Active Disabled Secondary Button', component: OutlineCheckActiveDisabledSecondaryButton },
	{ href: '/ui/buttons/outline/check-active/disabled/success-button', label: 'Outline Check Active Disabled Success Button', component: OutlineCheckActiveDisabledSuccessButton },
	{ href: '/ui/buttons/outline/check-active/disabled/warning-button', label: 'Outline Check Active Disabled Warning Button', component: OutlineCheckActiveDisabledWarningButton },
	{ href: '/ui/buttons/outline/check-active/info-button', label: 'Outline Check Active Info Button', component: OutlineCheckActiveInfoButton },
	{ href: '/ui/buttons/outline/check-active/light-button', label: 'Outline Check Active Light Button', component: OutlineCheckActiveLightButton },
	{ href: '/ui/buttons/outline/check-active/primary-button', label: 'Outline Check Active Primary Button', component: OutlineCheckActivePrimaryButton },
	{ href: '/ui/buttons/outline/check-active/secondary-button', label: 'Outline Check Active Secondary Button', component: OutlineCheckActiveSecondaryButton },
	{ href: '/ui/buttons/outline/check-active/success-button', label: 'Outline Check Active Success Button', component: OutlineCheckActiveSuccessButton },
	{ href: '/ui/buttons/outline/check-active/warning-button', label: 'Outline Check Active Warning Button', component: OutlineCheckActiveWarningButton },
	{ href: '/ui/buttons/outline/check/danger-button', label: 'Outline Check Danger Button', component: OutlineCheckDangerButton },
	{ href: '/ui/buttons/outline/check/dark-button', label: 'Outline Check Dark Button', component: OutlineCheckDarkButton },
	{ href: '/ui/buttons/outline/check/disabled/danger-button', label: 'Outline Check Disabled Danger Button', component: OutlineCheckDisabledDangerButton },
	{ href: '/ui/buttons/outline/check/disabled/dark-button', label: 'Outline Check Disabled Dark Button', component: OutlineCheckDisabledDarkButton },
	{ href: '/ui/buttons/outline/check/disabled/info-button', label: 'Outline Check Disabled Info Button', component: OutlineCheckDisabledInfoButton },
	{ href: '/ui/buttons/outline/check/disabled/light-button', label: 'Outline Check Disabled Light Button', component: OutlineCheckDisabledLightButton },
	{ href: '/ui/buttons/outline/check/disabled/primary-button', label: 'Outline Check Disabled Primary Button', component: OutlineCheckDisabledPrimaryButton },
	{ href: '/ui/buttons/outline/check/disabled/secondary-button', label: 'Outline Check Disabled Secondary Button', component: OutlineCheckDisabledSecondaryButton },
	{ href: '/ui/buttons/outline/check/disabled/success-button', label: 'Outline Check Disabled Success Button', component: OutlineCheckDisabledSuccessButton },
	{ href: '/ui/buttons/outline/check/disabled/warning-button', label: 'Outline Check Disabled Warning Button', component: OutlineCheckDisabledWarningButton },
	{ href: '/ui/buttons/outline/check/info-button', label: 'Outline Check Info Button', component: OutlineCheckInfoButton },
	{ href: '/ui/buttons/outline/check/light-button', label: 'Outline Check Light Button', component: OutlineCheckLightButton },
	{ href: '/ui/buttons/outline/check/primary-button', label: 'Outline Check Primary Button', component: OutlineCheckPrimaryButton },
	{ href: '/ui/buttons/outline/check/secondary-button', label: 'Outline Check Secondary Button', component: OutlineCheckSecondaryButton },
	{ href: '/ui/buttons/outline/check/success-button', label: 'Outline Check Success Button', component: OutlineCheckSuccessButton },
	{ href: '/ui/buttons/outline/check/warning-button', label: 'Outline Check Warning Button', component: OutlineCheckWarningButton },
	{ href: '/ui/buttons/outline/danger-button', label: 'Outline Danger Button', component: OutlineDangerButton },
	{ href: '/ui/buttons/outline/dark-button', label: 'Outline Dark Button', component: OutlineDarkButton },
	{ href: '/ui/buttons/outline/disabled/danger-button', label: 'Outline Disabled Danger Button', component: OutlineDisabledDangerButton },
	{ href: '/ui/buttons/outline/disabled/dark-button', label: 'Outline Disabled Dark Button', component: OutlineDisabledDarkButton },
	{ href: '/ui/buttons/outline/disabled/info-button', label: 'Outline Disabled Info Button', component: OutlineDisabledInfoButton },
	{ href: '/ui/buttons/outline/disabled/light-button', label: 'Outline Disabled Light Button', component: OutlineDisabledLightButton },
	{ href: '/ui/buttons/outline/disabled/primary-button', label: 'Outline Disabled Primary Button', component: OutlineDisabledPrimaryButton },
	{ href: '/ui/buttons/outline/disabled/secondary-button', label: 'Outline Disabled Secondary Button', component: OutlineDisabledSecondaryButton },
	{ href: '/ui/buttons/outline/disabled/success-button', label: 'Outline Disabled Success Button', component: OutlineDisabledSuccessButton },
	{ href: '/ui/buttons/outline/disabled/warning-button', label: 'Outline Disabled Warning Button', component: OutlineDisabledWarningButton },
	{ href: '/ui/buttons/outline/info-button', label: 'Outline Info Button', component: OutlineInfoButton },
	{ href: '/ui/buttons/outline/light-button', label: 'Outline Light Button', component: OutlineLightButton },
	{ href: '/ui/buttons/outline/primary-button', label: 'Outline Primary Button', component: OutlinePrimaryButton },
	{ href: '/ui/buttons/outline/secondary-button', label: 'Outline Secondary Button', component: OutlineSecondaryButton },
	{ href: '/ui/buttons/outline/success-button', label: 'Outline Success Button', component: OutlineSuccessButton },
	{ href: '/ui/buttons/outline/toggle-active/danger-button', label: 'Outline Toggle Active Danger Button', component: OutlineToggleActiveDangerButton },
	{ href: '/ui/buttons/outline/toggle-active/dark-button', label: 'Outline Toggle Active Dark Button', component: OutlineToggleActiveDarkButton },
	{ href: '/ui/buttons/outline/toggle-active/disabled/danger-button', label: 'Outline Toggle Active Disabled Danger Button', component: OutlineToggleActiveDisabledDangerButton },
	{ href: '/ui/buttons/outline/toggle-active/disabled/dark-button', label: 'Outline Toggle Active Disabled Dark Button', component: OutlineToggleActiveDisabledDarkButton },
	{ href: '/ui/buttons/outline/toggle-active/disabled/info-button', label: 'Outline Toggle Active Disabled Info Button', component: OutlineToggleActiveDisabledInfoButton },
	{ href: '/ui/buttons/outline/toggle-active/disabled/light-button', label: 'Outline Toggle Active Disabled Light Button', component: OutlineToggleActiveDisabledLightButton },
	{ href: '/ui/buttons/outline/toggle-active/disabled/primary-button', label: 'Outline Toggle Active Disabled Primary Button', component: OutlineToggleActiveDisabledPrimaryButton },
	{ href: '/ui/buttons/outline/toggle-active/disabled/secondary-button', label: 'Outline Toggle Active Disabled Secondary Button', component: OutlineToggleActiveDisabledSecondaryButton },
	{ href: '/ui/buttons/outline/toggle-active/disabled/success-button', label: 'Outline Toggle Active Disabled Success Button', component: OutlineToggleActiveDisabledSuccessButton },
	{ href: '/ui/buttons/outline/toggle-active/disabled/warning-button', label: 'Outline Toggle Active Disabled Warning Button', component: OutlineToggleActiveDisabledWarningButton },
	{ href: '/ui/buttons/outline/toggle-active/info-button', label: 'Outline Toggle Active Info Button', component: OutlineToggleActiveInfoButton },
	{ href: '/ui/buttons/outline/toggle-active/light-button', label: 'Outline Toggle Active Light Button', component: OutlineToggleActiveLightButton },
	{ href: '/ui/buttons/outline/toggle-active/primary-button', label: 'Outline Toggle Active Primary Button', component: OutlineToggleActivePrimaryButton },
	{ href: '/ui/buttons/outline/toggle-active/secondary-button', label: 'Outline Toggle Active Secondary Button', component: OutlineToggleActiveSecondaryButton },
	{ href: '/ui/buttons/outline/toggle-active/success-button', label: 'Outline Toggle Active Success Button', component: OutlineToggleActiveSuccessButton },
	{ href: '/ui/buttons/outline/toggle-active/warning-button', label: 'Outline Toggle Active Warning Button', component: OutlineToggleActiveWarningButton },
	{ href: '/ui/buttons/outline/toggle/danger-button', label: 'Outline Toggle Danger Button', component: OutlineToggleDangerButton },
	{ href: '/ui/buttons/outline/toggle/dark-button', label: 'Outline Toggle Dark Button', component: OutlineToggleDarkButton },
	{ href: '/ui/buttons/outline/toggle/disabled/danger-button', label: 'Outline Toggle Disabled Danger Button', component: OutlineToggleDisabledDangerButton },
	{ href: '/ui/buttons/outline/toggle/disabled/dark-button', label: 'Outline Toggle Disabled Dark Button', component: OutlineToggleDisabledDarkButton },
	{ href: '/ui/buttons/outline/toggle/disabled/info-button', label: 'Outline Toggle Disabled Info Button', component: OutlineToggleDisabledInfoButton },
	{ href: '/ui/buttons/outline/toggle/disabled/light-button', label: 'Outline Toggle Disabled Light Button', component: OutlineToggleDisabledLightButton },
	{ href: '/ui/buttons/outline/toggle/disabled/primary-button', label: 'Outline Toggle Disabled Primary Button', component: OutlineToggleDisabledPrimaryButton },
	{ href: '/ui/buttons/outline/toggle/disabled/secondary-button', label: 'Outline Toggle Disabled Secondary Button', component: OutlineToggleDisabledSecondaryButton },
	{ href: '/ui/buttons/outline/toggle/disabled/success-button', label: 'Outline Toggle Disabled Success Button', component: OutlineToggleDisabledSuccessButton },
	{ href: '/ui/buttons/outline/toggle/disabled/warning-button', label: 'Outline Toggle Disabled Warning Button', component: OutlineToggleDisabledWarningButton },
	{ href: '/ui/buttons/outline/toggle/info-button', label: 'Outline Toggle Info Button', component: OutlineToggleInfoButton },
	{ href: '/ui/buttons/outline/toggle/light-button', label: 'Outline Toggle Light Button', component: OutlineToggleLightButton },
	{ href: '/ui/buttons/outline/toggle/primary-button', label: 'Outline Toggle Primary Button', component: OutlineTogglePrimaryButton },
	{ href: '/ui/buttons/outline/toggle/secondary-button', label: 'Outline Toggle Secondary Button', component: OutlineToggleSecondaryButton },
	{ href: '/ui/buttons/outline/toggle/success-button', label: 'Outline Toggle Success Button', component: OutlineToggleSuccessButton },
	{ href: '/ui/buttons/outline/toggle/warning-button', label: 'Outline Toggle Warning Button', component: OutlineToggleWarningButton },
	{ href: '/ui/buttons/outline/warning-button', label: 'Outline Warning Button', component: OutlineWarningButton },
	{ href: '/ui/buttons/sizes/check-active/disabled/large-button', label: 'Sizes Check Active Disabled Large Button', component: CheckActiveDisabledLargeButton },
	{ href: '/ui/buttons/sizes/check-active/disabled/small-button', label: 'Sizes Check Active Disabled Small Button', component: CheckActiveDisabledSmallButton },
	{ href: '/ui/buttons/sizes/check-active/large-button', label: 'Sizes Check Active Large Button', component: CheckActiveLargeButton },
	{ href: '/ui/buttons/sizes/check-active/small-button', label: 'Sizes Check Active Small Button', component: CheckActiveSmallButton },
	{ href: '/ui/buttons/sizes/check/disabled/large-button', label: 'Sizes Check Disabled Large Button', component: CheckDisabledLargeButton },
	{ href: '/ui/buttons/sizes/check/disabled/small-button', label: 'Sizes Check Disabled Small Button', component: CheckDisabledSmallButton },
	{ href: '/ui/buttons/sizes/check/large-button', label: 'Sizes Check Large Button', component: CheckLargeButton },
	{ href: '/ui/buttons/sizes/check/small-button', label: 'Sizes Check Small Button', component: CheckSmallButton },
	{ href: '/ui/buttons/sizes/disabled/large-button', label: 'Sizes Disabled Large Button', component: DisabledLargeButton },
	{ href: '/ui/buttons/sizes/disabled/small-button', label: 'Sizes Disabled Small Button', component: DisabledSmallButton },
	{ href: '/ui/buttons/sizes/large-button', label: 'Sizes Large Button', component: LargeButton },
	{ href: '/ui/buttons/sizes/small-button', label: 'Sizes Small Button', component: SmallButton },
	{ href: '/ui/buttons/sizes/toggle-active/disabled/large-button', label: 'Sizes Toggle Active Disabled Large Button', component: ToggleActiveDisabledLargeButton },
	{ href: '/ui/buttons/sizes/toggle-active/disabled/small-button', label: 'Sizes Toggle Active Disabled Small Button', component: ToggleActiveDisabledSmallButton },
	{ href: '/ui/buttons/sizes/toggle-active/large-button', label: 'Sizes Toggle Active Large Button', component: ToggleActiveLargeButton },
	{ href: '/ui/buttons/sizes/toggle-active/small-button', label: 'Sizes Toggle Active Small Button', component: ToggleActiveSmallButton },
	{ href: '/ui/buttons/sizes/toggle/disabled/large-button', label: 'Sizes Toggle Disabled Large Button', component: ToggleDisabledLargeButton },
	{ href: '/ui/buttons/sizes/toggle/disabled/small-button', label: 'Sizes Toggle Disabled Small Button', component: ToggleDisabledSmallButton },
	{ href: '/ui/buttons/sizes/toggle/large-button', label: 'Sizes Toggle Large Button', component: ToggleLargeButton },
	{ href: '/ui/buttons/sizes/toggle/small-button', label: 'Sizes Toggle Small Button', component: ToggleSmallButton },
	{ href: '/ui/buttons/solid/base-button', label: 'Solid Base Button', component: SolidBaseButton },
	{ href: '/ui/buttons/solid/check-active/base-button', label: 'Solid Check Active Base Button', component: SolidCheckActiveBaseButton },
	{ href: '/ui/buttons/solid/check-active/danger-button', label: 'Solid Check Active Danger Button', component: SolidCheckActiveDangerButton },
	{ href: '/ui/buttons/solid/check-active/dark-button', label: 'Solid Check Active Dark Button', component: SolidCheckActiveDarkButton },
	{ href: '/ui/buttons/solid/check-active/disabled/base-button', label: 'Solid Check Active Disabled Base Button', component: SolidCheckActiveDisabledBaseButton },
	{ href: '/ui/buttons/solid/check-active/disabled/danger-button', label: 'Solid Check Active Disabled Danger Button', component: SolidCheckActiveDisabledDangerButton },
	{ href: '/ui/buttons/solid/check-active/disabled/dark-button', label: 'Solid Check Active Disabled Dark Button', component: SolidCheckActiveDisabledDarkButton },
	{ href: '/ui/buttons/solid/check-active/disabled/info-button', label: 'Solid Check Active Disabled Info Button', component: SolidCheckActiveDisabledInfoButton },
	{ href: '/ui/buttons/solid/check-active/disabled/light-button', label: 'Solid Check Active Disabled Light Button', component: SolidCheckActiveDisabledLightButton },
	{ href: '/ui/buttons/solid/check-active/disabled/link-button', label: 'Solid Check Active Disabled Link Button', component: SolidCheckActiveDisabledLinkButton },
	{ href: '/ui/buttons/solid/check-active/disabled/primary-button', label: 'Solid Check Active Disabled Primary Button', component: SolidCheckActiveDisabledPrimaryButton },
	{ href: '/ui/buttons/solid/check-active/disabled/secondary-button', label: 'Solid Check Active Disabled Secondary Button', component: SolidCheckActiveDisabledSecondaryButton },
	{ href: '/ui/buttons/solid/check-active/disabled/success-button', label: 'Solid Check Active Disabled Success Button', component: SolidCheckActiveDisabledSuccessButton },
	{ href: '/ui/buttons/solid/check-active/disabled/warning-button', label: 'Solid Check Active Disabled Warning Button', component: SolidCheckActiveDisabledWarningButton },
	{ href: '/ui/buttons/solid/check-active/info-button', label: 'Solid Check Active Info Button', component: SolidCheckActiveInfoButton },
	{ href: '/ui/buttons/solid/check-active/light-button', label: 'Solid Check Active Light Button', component: SolidCheckActiveLightButton },
	{ href: '/ui/buttons/solid/check-active/link-button', label: 'Solid Check Active Link Button', component: SolidCheckActiveLinkButton },
	{ href: '/ui/buttons/solid/check-active/primary-button', label: 'Solid Check Active Primary Button', component: SolidCheckActivePrimaryButton },
	{ href: '/ui/buttons/solid/check-active/secondary-button', label: 'Solid Check Active Secondary Button', component: SolidCheckActiveSecondaryButton },
	{ href: '/ui/buttons/solid/check-active/success-button', label: 'Solid Check Active Success Button', component: SolidCheckActiveSuccessButton },
	{ href: '/ui/buttons/solid/check-active/warning-button', label: 'Solid Check Active Warning Button', component: SolidCheckActiveWarningButton },
	{ href: '/ui/buttons/solid/check/base-button', label: 'Solid Check Base Button', component: SolidCheckBaseButton },
	{ href: '/ui/buttons/solid/check/danger-button', label: 'Solid Check Danger Button', component: SolidCheckDangerButton },
	{ href: '/ui/buttons/solid/check/dark-button', label: 'Solid Check Dark Button', component: SolidCheckDarkButton },
	{ href: '/ui/buttons/solid/check/disabled/base-button', label: 'Solid Check Disabled Base Button', component: SolidCheckDisabledBaseButton },
	{ href: '/ui/buttons/solid/check/disabled/danger-button', label: 'Solid Check Disabled Danger Button', component: SolidCheckDisabledDangerButton },
	{ href: '/ui/buttons/solid/check/disabled/dark-button', label: 'Solid Check Disabled Dark Button', component: SolidCheckDisabledDarkButton },
	{ href: '/ui/buttons/solid/check/disabled/info-button', label: 'Solid Check Disabled Info Button', component: SolidCheckDisabledInfoButton },
	{ href: '/ui/buttons/solid/check/disabled/light-button', label: 'Solid Check Disabled Light Button', component: SolidCheckDisabledLightButton },
	{ href: '/ui/buttons/solid/check/disabled/link-button', label: 'Solid Check Disabled Link Button', component: SolidCheckDisabledLinkButton },
	{ href: '/ui/buttons/solid/check/disabled/primary-button', label: 'Solid Check Disabled Primary Button', component: SolidCheckDisabledPrimaryButton },
	{ href: '/ui/buttons/solid/check/disabled/secondary-button', label: 'Solid Check Disabled Secondary Button', component: SolidCheckDisabledSecondaryButton },
	{ href: '/ui/buttons/solid/check/disabled/success-button', label: 'Solid Check Disabled Success Button', component: SolidCheckDisabledSuccessButton },
	{ href: '/ui/buttons/solid/check/disabled/warning-button', label: 'Solid Check Disabled Warning Button', component: SolidCheckDisabledWarningButton },
	{ href: '/ui/buttons/solid/check/info-button', label: 'Solid Check Info Button', component: SolidCheckInfoButton },
	{ href: '/ui/buttons/solid/check/light-button', label: 'Solid Check Light Button', component: SolidCheckLightButton },
	{ href: '/ui/buttons/solid/check/link-button', label: 'Solid Check Link Button', component: SolidCheckLinkButton },
	{ href: '/ui/buttons/solid/check/primary-button', label: 'Solid Check Primary Button', component: SolidCheckPrimaryButton },
	{ href: '/ui/buttons/solid/check/secondary-button', label: 'Solid Check Secondary Button', component: SolidCheckSecondaryButton },
	{ href: '/ui/buttons/solid/check/success-button', label: 'Solid Check Success Button', component: SolidCheckSuccessButton },
	{ href: '/ui/buttons/solid/check/warning-button', label: 'Solid Check Warning Button', component: SolidCheckWarningButton },
	{ href: '/ui/buttons/solid/danger-button', label: 'Solid Danger Button', component: SolidDangerButton },
	{ href: '/ui/buttons/solid/dark-button', label: 'Solid Dark Button', component: SolidDarkButton },
	{ href: '/ui/buttons/solid/disabled/base-button', label: 'Solid Disabled Base Button', component: SolidDisabledBaseButton },
	{ href: '/ui/buttons/solid/disabled/danger-button', label: 'Solid Disabled Danger Button', component: SolidDisabledDangerButton },
	{ href: '/ui/buttons/solid/disabled/dark-button', label: 'Solid Disabled Dark Button', component: SolidDisabledDarkButton },
	{ href: '/ui/buttons/solid/disabled/info-button', label: 'Solid Disabled Info Button', component: SolidDisabledInfoButton },
	{ href: '/ui/buttons/solid/disabled/light-button', label: 'Solid Disabled Light Button', component: SolidDisabledLightButton },
	{ href: '/ui/buttons/solid/disabled/link-button', label: 'Solid Disabled Link Button', component: SolidDisabledLinkButton },
	{ href: '/ui/buttons/solid/disabled/primary-button', label: 'Solid Disabled Primary Button', component: SolidDisabledPrimaryButton },
	{ href: '/ui/buttons/solid/disabled/secondary-button', label: 'Solid Disabled Secondary Button', component: SolidDisabledSecondaryButton },
	{ href: '/ui/buttons/solid/disabled/success-button', label: 'Solid Disabled Success Button', component: SolidDisabledSuccessButton },
	{ href: '/ui/buttons/solid/disabled/warning-button', label: 'Solid Disabled Warning Button', component: SolidDisabledWarningButton },
	{ href: '/ui/buttons/solid/info-button', label: 'Solid Info Button', component: SolidInfoButton },
	{ href: '/ui/buttons/solid/light-button', label: 'Solid Light Button', component: SolidLightButton },
	{ href: '/ui/buttons/solid/link-button', label: 'Solid Link Button', component: SolidLinkButton },
	{ href: '/ui/buttons/solid/primary-button', label: 'Solid Primary Button', component: SolidPrimaryButton },
	{ href: '/ui/buttons/solid/secondary-button', label: 'Solid Secondary Button', component: SolidSecondaryButton },
	{ href: '/ui/buttons/solid/success-button', label: 'Solid Success Button', component: SolidSuccessButton },
	{ href: '/ui/buttons/solid/toggle-active/base-button', label: 'Solid Toggle Active Base Button', component: SolidToggleActiveBaseButton },
	{ href: '/ui/buttons/solid/toggle-active/danger-button', label: 'Solid Toggle Active Danger Button', component: SolidToggleActiveDangerButton },
	{ href: '/ui/buttons/solid/toggle-active/dark-button', label: 'Solid Toggle Active Dark Button', component: SolidToggleActiveDarkButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/base-button', label: 'Solid Toggle Active Disabled Base Button', component: SolidToggleActiveDisabledBaseButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/danger-button', label: 'Solid Toggle Active Disabled Danger Button', component: SolidToggleActiveDisabledDangerButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/dark-button', label: 'Solid Toggle Active Disabled Dark Button', component: SolidToggleActiveDisabledDarkButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/info-button', label: 'Solid Toggle Active Disabled Info Button', component: SolidToggleActiveDisabledInfoButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/light-button', label: 'Solid Toggle Active Disabled Light Button', component: SolidToggleActiveDisabledLightButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/link-button', label: 'Solid Toggle Active Disabled Link Button', component: SolidToggleActiveDisabledLinkButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/primary-button', label: 'Solid Toggle Active Disabled Primary Button', component: SolidToggleActiveDisabledPrimaryButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/secondary-button', label: 'Solid Toggle Active Disabled Secondary Button', component: SolidToggleActiveDisabledSecondaryButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/success-button', label: 'Solid Toggle Active Disabled Success Button', component: SolidToggleActiveDisabledSuccessButton },
	{ href: '/ui/buttons/solid/toggle-active/disabled/warning-button', label: 'Solid Toggle Active Disabled Warning Button', component: SolidToggleActiveDisabledWarningButton },
	{ href: '/ui/buttons/solid/toggle-active/info-button', label: 'Solid Toggle Active Info Button', component: SolidToggleActiveInfoButton },
	{ href: '/ui/buttons/solid/toggle-active/light-button', label: 'Solid Toggle Active Light Button', component: SolidToggleActiveLightButton },
	{ href: '/ui/buttons/solid/toggle-active/link-button', label: 'Solid Toggle Active Link Button', component: SolidToggleActiveLinkButton },
	{ href: '/ui/buttons/solid/toggle-active/primary-button', label: 'Solid Toggle Active Primary Button', component: SolidToggleActivePrimaryButton },
	{ href: '/ui/buttons/solid/toggle-active/secondary-button', label: 'Solid Toggle Active Secondary Button', component: SolidToggleActiveSecondaryButton },
	{ href: '/ui/buttons/solid/toggle-active/success-button', label: 'Solid Toggle Active Success Button', component: SolidToggleActiveSuccessButton },
	{ href: '/ui/buttons/solid/toggle-active/warning-button', label: 'Solid Toggle Active Warning Button', component: SolidToggleActiveWarningButton },
	{ href: '/ui/buttons/solid/toggle/base-button', label: 'Solid Toggle Base Button', component: SolidToggleBaseButton },
	{ href: '/ui/buttons/solid/toggle/danger-button', label: 'Solid Toggle Danger Button', component: SolidToggleDangerButton },
	{ href: '/ui/buttons/solid/toggle/dark-button', label: 'Solid Toggle Dark Button', component: SolidToggleDarkButton },
	{ href: '/ui/buttons/solid/toggle/disabled/base-button', label: 'Solid Toggle Disabled Base Button', component: SolidToggleDisabledBaseButton },
	{ href: '/ui/buttons/solid/toggle/disabled/danger-button', label: 'Solid Toggle Disabled Danger Button', component: SolidToggleDisabledDangerButton },
	{ href: '/ui/buttons/solid/toggle/disabled/dark-button', label: 'Solid Toggle Disabled Dark Button', component: SolidToggleDisabledDarkButton },
	{ href: '/ui/buttons/solid/toggle/disabled/info-button', label: 'Solid Toggle Disabled Info Button', component: SolidToggleDisabledInfoButton },
	{ href: '/ui/buttons/solid/toggle/disabled/light-button', label: 'Solid Toggle Disabled Light Button', component: SolidToggleDisabledLightButton },
	{ href: '/ui/buttons/solid/toggle/disabled/link-button', label: 'Solid Toggle Disabled Link Button', component: SolidToggleDisabledLinkButton },
	{ href: '/ui/buttons/solid/toggle/disabled/primary-button', label: 'Solid Toggle Disabled Primary Button', component: SolidToggleDisabledPrimaryButton },
	{ href: '/ui/buttons/solid/toggle/disabled/secondary-button', label: 'Solid Toggle Disabled Secondary Button', component: SolidToggleDisabledSecondaryButton },
	{ href: '/ui/buttons/solid/toggle/disabled/success-button', label: 'Solid Toggle Disabled Success Button', component: SolidToggleDisabledSuccessButton },
	{ href: '/ui/buttons/solid/toggle/disabled/warning-button', label: 'Solid Toggle Disabled Warning Button', component: SolidToggleDisabledWarningButton },
	{ href: '/ui/buttons/solid/toggle/info-button', label: 'Solid Toggle Info Button', component: SolidToggleInfoButton },
	{ href: '/ui/buttons/solid/toggle/light-button', label: 'Solid Toggle Light Button', component: SolidToggleLightButton },
	{ href: '/ui/buttons/solid/toggle/link-button', label: 'Solid Toggle Link Button', component: SolidToggleLinkButton },
	{ href: '/ui/buttons/solid/toggle/primary-button', label: 'Solid Toggle Primary Button', component: SolidTogglePrimaryButton },
	{ href: '/ui/buttons/solid/toggle/secondary-button', label: 'Solid Toggle Secondary Button', component: SolidToggleSecondaryButton },
	{ href: '/ui/buttons/solid/toggle/success-button', label: 'Solid Toggle Success Button', component: SolidToggleSuccessButton },
	{ href: '/ui/buttons/solid/toggle/warning-button', label: 'Solid Toggle Warning Button', component: SolidToggleWarningButton },
	{ href: '/ui/buttons/solid/warning-button', label: 'Solid Warning Button', component: SolidWarningButton },
]

const Buttons: Component = () => (
	<article class="my-3" id="buttons">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Buttons</h3>
			<DocLink href="/ui/buttons" />
			{buttonExamples.map((entry) => (
				<DocLink href={entry.href}>{entry.label}</DocLink>
			))}
		</div>

		<div>
			{buttonExamples.map(({label, component: Component}) => (
				<>
					<h4>{label}</h4>
					<Component />
				</>
			))}
		</div>
	</article>
)

export default Buttons
