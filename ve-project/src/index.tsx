/* @refresh reload */

import { Route, Router } from '@solidjs/router'
import { render } from '@solidjs/web'
// import './cheatsheet.scss'
import Home from './components/HomePage'
import SolidPrimaryButton from './components/ui/solid/SolidPrimaryButton'
import './reset.css'

render(
	() => (
		<Router>
			<Route path="/" component={Home} />
			<Route path="/ui/buttons/solid/primary-button" component={SolidPrimaryButton} />
		</Router>
	),
	document.getElementById('root') ??
		(() => {
			throw new Error('Root element not found')
		})(),
)
