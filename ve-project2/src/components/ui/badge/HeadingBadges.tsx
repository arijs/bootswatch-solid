import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { paragraph } from '../../../theme-contract/contents/basic/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	bgDanger,
	bgInfo,
	bgLight,
	bgPrimary,
	bgSecondary,
	bgSuccess,
	bgWarning,
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../theme-contract/literal/contract.css'
import { badge } from '../../../theme-contract/ui/badge/contract.css'
import { bgDark, textDark } from '../../../theme-contract/utilities/contract.css'

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
			<p class={`${theme} ${paragraph} ${clsH1}`}>
				Example heading <span class={`${theme} ${badge} ${bgPrimary}`}>New</span>
			</p>
			<p class={`${theme} ${paragraph} ${clsH2}`}>
				Example heading <span class={`${theme} ${badge} ${bgSecondary}`}>New</span>
			</p>
			<p class={`${theme} ${paragraph} ${clsH3}`}>
				Example heading <span class={`${theme} ${badge} ${bgSuccess}`}>New</span>
			</p>
			<p class={`${theme} ${paragraph} ${clsH4}`}>
				Example heading <span class={`${theme} ${badge} ${bgDanger}`}>New</span>
			</p>
			<p class={`${theme} ${paragraph} ${clsH5}`}>
				Example heading{' '}
				<span class={`${theme} ${badge} ${bgWarning} ${textDark}`}>New</span>
			</p>
			<p class={`${theme} ${paragraph} ${clsH6}`}>
				Example heading <span class={`${theme} ${badge} ${bgInfo} ${textDark}`}>New</span>
			</p>
			<p class={`${theme} ${paragraph} ${clsH6}`}>
				Example heading <span class={`${theme} ${badge} ${bgLight} ${textDark}`}>New</span>
			</p>
			<p class={`${theme} ${paragraph} ${clsH6}`}>
				Example heading <span class={`${theme} ${badge} ${bgDark}`}>New</span>
			</p>
		</div>
	)
}

export default HeadingBadges

// @screenshot *: 360x276 276
