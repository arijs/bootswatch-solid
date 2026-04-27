import { createEffect, createSignal, type JSX } from 'solid-js'
import { useVeThemeRuntime } from './provider'

export default function ThemeSupportGate(props: { children: JSX.Element }) {
	const themeRuntime = useVeThemeRuntime()
	const [lastWarningKey, setLastWarningKey] = createSignal<string>('')

	createEffect(
		() => {
			const runtime = themeRuntime()
			if (runtime.supported) return undefined

			return [
				runtime.selectedThemeSlug,
				runtime.routePath,
				runtime.reason,
				runtime.requiredFamilies.join(','),
				(runtime.missingFamilies ?? []).join(','),
			] as const
		},
		(parts) => {
			if (!parts) return

			const warningKey = parts.join('|')
			if (lastWarningKey() === warningKey) return
			setLastWarningKey(warningKey)

			console.warn('[ve-theme-skip]', {
				selectedThemeSlug: parts[0],
				routePath: parts[1],
				reason: parts[2],
			})
		},
	)

	const runtime = () => themeRuntime()
	if (runtime().supported) {
		return <>{props.children}</>
	}

	return (
		<main style={{ padding: '1.5rem', 'font-family': 'system-ui, sans-serif' }}>
			<h1>Theme Not Yet Implemented In VE</h1>
			<p>
				The selected theme <strong>{runtime().selectedThemeSlug}</strong> is not available for this VE route yet.
			</p>
			<p>
				Reason: <code>{runtime().reason}</code>
			</p>
			<p>
				Route: <code>{runtime().routePath}</code>
			</p>
		</main>
	)
}
