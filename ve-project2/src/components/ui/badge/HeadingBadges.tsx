import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { h1, h2, h3, h4, h5, h6 } from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	badge,
	badgeDanger,
	badgeDark,
	badgeInfo,
	badgeLight,
	badgePrimary,
	badgeSecondary,
	badgeSuccess,
	badgeWarning,
} from '../../../theme-contract/ui/badge/contract.css'
import { textDark } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/badge',
	'contents/basic',
	'contents/heading',
	'utilities',
]

const HeadingBadges: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<p class={`${theme} ${h1}`}>
				Example heading <span class={`${theme} ${badge} ${badgePrimary}`}>New</span>
			</p>
			<p class={`${theme} ${h2}`}>
				Example heading <span class={`${theme} ${badge} ${badgeSecondary}`}>New</span>
			</p>
			<p class={`${theme} ${h3}`}>
				Example heading <span class={`${theme} ${badge} ${badgeSuccess}`}>New</span>
			</p>
			<p class={`${theme} ${h4}`}>
				Example heading <span class={`${theme} ${badge} ${badgeDanger}`}>New</span>
			</p>
			<p class={`${theme} ${h5}`}>
				Example heading{' '}
				<span class={`${theme} ${badge} ${badgeWarning} ${textDark}`}>New</span>
			</p>
			<p class={`${theme} ${h6}`}>
				Example heading{' '}
				<span class={`${theme} ${badge} ${badgeInfo} ${textDark}`}>New</span>
			</p>
			<p class={`${theme} ${h6}`}>
				Example heading{' '}
				<span class={`${theme} ${badge} ${badgeLight} ${textDark}`}>New</span>
			</p>
			<p class={`${theme} ${h6}`}>
				Example heading <span class={`${theme} ${badge} ${badgeDark}`}>New</span>
			</p>
		</div>
	)
}

export default HeadingBadges

// @screenshot *: 360x276 276
