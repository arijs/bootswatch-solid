import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { alert, alertHeading, alertSuccess } from '../../../theme-contract/ui/alerts/contract.css'
import { h4, horizontalRule, paragraph } from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
const HeadingAlert: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${alert} ${alertSuccess}`}>
				<h4 class={`${theme} ${alertHeading} ${h4}`}>Well done!</h4>
				<p class={`${theme} ${paragraph}`}>
					Aww yeah, you successfully read this important alert message. This example text
					is going to run a bit longer so that you can see how spacing within an alert
					works with this kind of content.
				</p>
				<hr class={`${theme} ${horizontalRule}`} />
				<p class={`${theme} ${paragraph}`} style={{ 'margin-bottom': '0' }}>
					Whenever you need to, be sure to use margin utilities to keep things nice and
					tidy.
				</p>
			</div>
		</div>
	)
}

export default HeadingAlert

// @screenshot *: 360x293 293
