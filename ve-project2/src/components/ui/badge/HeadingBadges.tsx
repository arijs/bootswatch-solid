import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
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

const HeadingBadges: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<h1>
				Example heading <span class={`${theme} ${badge} ${badgePrimary}`}>New</span>
			</h1>
			<h2>
				Example heading <span class={`${theme} ${badge} ${badgeSecondary}`}>New</span>
			</h2>
			<h3>
				Example heading <span class={`${theme} ${badge} ${badgeSuccess}`}>New</span>
			</h3>
			<h4>
				Example heading <span class={`${theme} ${badge} ${badgeDanger}`}>New</span>
			</h4>
			<h5>
				Example heading <span class={`${theme} ${badge} ${badgeWarning}`}>New</span>
			</h5>
			<h6>
				Example heading <span class={`${theme} ${badge} ${badgeInfo}`}>New</span>
			</h6>
			<h6>
				Example heading <span class={`${theme} ${badge} ${badgeLight}`}>New</span>
			</h6>
			<h6>
				Example heading <span class={`${theme} ${badge} ${badgeDark}`}>New</span>
			</h6>
		</div>
	)
}

export default HeadingBadges

// @screenshot *: 360x276 276
