import { useLocation } from '@solidjs/router'
import type { Component } from 'solid-js'
import { resolveVeThemeForRoute } from './registry'

const warnedKeys = new Set<string>()

function emitSkipWarning(routePath: string, selectedThemeSlug: string, reason: string | undefined) {
	const key = [routePath, selectedThemeSlug, reason ?? 'unknown'].join('|')
	if (warnedKeys.has(key)) return
	warnedKeys.add(key)

	console.warn('[ve-theme-skip]', {
		selectedThemeSlug,
		routePath,
		requiredFamilies: ['global', 'dropdowns'],
		reason,
	})
}

export function withDropdownThemeGate(InnerComponent: Component, routePath: string): Component {
	const GatedDropdownRoute: Component = () => {
		const location = useLocation()
		const current = resolveVeThemeForRoute(location.search, routePath, ['global', 'dropdowns'])

		if (current.supported) {
			return <InnerComponent />
		}

		emitSkipWarning(routePath, current.selectedThemeSlug, current.reason)

		return (
			<main style={{ padding: '1.5rem', 'font-family': 'system-ui, sans-serif' }}>
				<h1>Theme Not Yet Implemented In VE</h1>
				<p>
					The selected theme <strong>{current.selectedThemeSlug}</strong> is not available for this VE route yet.
				</p>
				<p>
					Reason: <code>{current.reason}</code>
				</p>
				<p>
					Route: <code>{routePath}</code>
				</p>
			</main>
		)
	}

	return GatedDropdownRoute
}