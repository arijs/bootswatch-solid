import { Route, Router } from '@solidjs/router'
import { render } from '@solidjs/web'
import PocThemeScopeDemo from './components/poc/PocThemeScopeDemo'

render(
	() => (
		<Router>
			<Route path="/" component={PocThemeScopeDemo} />
		</Router>
	),
	document.getElementById('root') as HTMLElement,
)
