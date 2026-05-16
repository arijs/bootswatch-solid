import { useLocation } from '@solidjs/router'
import type { JSX } from 'solid-js'
import { Ve2GranularShell } from './Ve2GranularShell'
import { Ve2Shell } from './Ve2Shell'

function useGranularStyleLoaderEnabled(): boolean {
	const location = useLocation()
	const params = new URLSearchParams(location.search)
	const mode = params.get('style-loader') ?? params.get('styleLoader')
	return mode !== 'theme'
}

export function Ve2ShellRuntime(props: { children: JSX.Element }) {
	return useGranularStyleLoaderEnabled() ? (
		<Ve2GranularShell>{props.children}</Ve2GranularShell>
	) : (
		<Ve2Shell>{props.children}</Ve2Shell>
	)
}
