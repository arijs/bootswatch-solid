import { createContext, createSignal, onCleanup, useContext, type Accessor, type JSX } from 'solid-js'
import { getRequiredFamiliesForPath } from './route-families'
import { resolveVeThemeForRoute, type VeThemeResolution } from './registry'

type VeThemeRuntimeContextValue = Accessor<VeThemeResolution>

const VeThemeRuntimeContext = createContext<VeThemeRuntimeContextValue>()

function createUrlSignal(): Accessor<{ search: string; pathname: string }> {
	const [urlState, setUrlState] = createSignal({
		search: window.location.search,
		pathname: window.location.pathname,
	})

	const notify = () => {
		const next = {
			search: window.location.search,
			pathname: window.location.pathname,
		}
		const current = urlState()
		if (current.search === next.search && current.pathname === next.pathname) return
		setUrlState(next)
	}

	window.addEventListener('popstate', notify)
	const pollHandle = window.setInterval(notify, 120)

	onCleanup(() => {
		window.clearInterval(pollHandle)
		window.removeEventListener('popstate', notify)
	})

	return urlState
}

export function VeThemeRuntimeProvider(props: { children: JSX.Element }) {
	const url = createUrlSignal()
	const resolution: Accessor<VeThemeResolution> = () => {
		try {
			const current = url()
			return resolveVeThemeForRoute(
				current.search,
				current.pathname,
				getRequiredFamiliesForPath(current.pathname),
			)
		} catch (error) {
			console.error('[ve-theme-resolution-error]', error)
			throw error
		}
	}

	return <VeThemeRuntimeContext.Provider value={resolution}>{props.children}</VeThemeRuntimeContext.Provider>
}

export function useVeThemeRuntime(): Accessor<VeThemeResolution> {
	const context = useContext(VeThemeRuntimeContext)
	if (!context) {
		throw new Error('useVeThemeRuntime must be used inside VeThemeRuntimeProvider')
	}
	return context
}
