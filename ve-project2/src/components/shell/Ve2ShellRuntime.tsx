import { useLocation } from '@solidjs/router'
import { createMemo, type JSX, Show } from 'solid-js'
import { Ve2GranularShell } from './Ve2GranularShell'
import { Ve2Shell } from './Ve2Shell'

function useStyleLoaderMode(): () => 'theme' | 'granular' | 'literal' {
	const location = useLocation()
	return createMemo(() => {
		const params = new URLSearchParams(location.search)
		const mode = params.get('style-loader') ?? params.get('styleLoader')
		if (mode === 'literal') return 'literal'
		if (mode === 'granular' || mode === 'families') return 'granular'
		return 'theme'
	})
}

export function Ve2ShellRuntime(props: { children?: JSX.Element | undefined }) {
	const mode = useStyleLoaderMode()
	return (
		<Show
			when={mode() === 'granular'}
			fallback={<Ve2Shell literalStyles={mode() === 'literal'}>{props.children}</Ve2Shell>}
		>
			<Ve2GranularShell>{props.children}</Ve2GranularShell>
		</Show>
	)
}
