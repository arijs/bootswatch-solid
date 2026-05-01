import { createEffect, createSignal, type JSX, Show } from 'solid-js'
import { useVeThemeRuntime } from './provider'

export default function ThemeSupportGate(props: { children: JSX.Element }) {
	const themeRuntime = useVeThemeRuntime()
	const [lastWarningKey, setLastWarningKey] = createSignal<string>('')

	createEffect(
		() => {
			const runtime = themeRuntime()
			if (runtime.supported) return undefined

			return {
				selectedThemeSlug: runtime.selectedThemeSlug,
				routePath: runtime.routePath,
				reason: runtime.reason,
				requiredFamilies: runtime.requiredFamilies,
				missingFamilies: runtime.missingFamilies ?? [],
			}
		},
		(payload) => {
			if (!payload) return

			const warningKey = [
				payload.selectedThemeSlug,
				payload.routePath,
				payload.reason,
				payload.requiredFamilies.join(','),
				payload.missingFamilies.join(','),
			].join('|')
			if (lastWarningKey() === warningKey) return
			setLastWarningKey(warningKey)

			console.warn('[ve-theme-skip]', {
				selectedThemeSlug: payload.selectedThemeSlug,
				routePath: payload.routePath,
				requiredFamilies: payload.requiredFamilies,
				reason: payload.reason,
			})
		},
	)

	const runtime = themeRuntime

	return (
		<Show
			when={runtime().supported}
			fallback={
				<main style={{ padding: '1.5rem', 'font-family': 'system-ui, sans-serif' }}>
					<h1>Theme Not Yet Implemented In VE</h1>
					<p>
						The selected theme <strong>{runtime().selectedThemeSlug}</strong> is not
						available for this VE route yet.
					</p>
					<p>
						Reason: <code>{runtime().reason}</code>
					</p>
					<p>
						Route: <code>{runtime().routePath}</code>
					</p>
				</main>
			}
		>
			{props.children}
		</Show>
	)
}
