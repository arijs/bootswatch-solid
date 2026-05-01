import { useLocation } from '@solidjs/router'
import { type Accessor, createContext, createMemo, type JSX, useContext } from 'solid-js'
import { resolveVeThemeForRoute, type VeThemeResolution } from './registry'
import { getRequiredFamiliesForPath } from './route-families'

type VeThemeRuntimeContextValue = Accessor<VeThemeResolution>

const VeThemeRuntimeContext = createContext<VeThemeRuntimeContextValue>()

export function VeThemeRuntimeProvider(props: { children: JSX.Element }) {
	const location = useLocation()
	const resolution: Accessor<VeThemeResolution> = createMemo(() => {
		try {
			return resolveVeThemeForRoute(
				location.search,
				location.pathname,
				getRequiredFamiliesForPath(location.pathname),
			)
		} catch (error) {
			console.error('[ve-theme-resolution-error]', error)
			throw error
		}
	})

	return <VeThemeRuntimeContext value={resolution}>{props.children}</VeThemeRuntimeContext>
}

export function useVeThemeRuntime(): Accessor<VeThemeResolution> {
	const context = useContext(VeThemeRuntimeContext)
	if (!context) {
		throw new Error('useVeThemeRuntime must be used inside VeThemeRuntimeProvider')
	}
	return context
}
