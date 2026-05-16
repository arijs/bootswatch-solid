import { useLocation } from '@solidjs/router'
import { children } from 'solid-js'
import type { JSX } from 'solid-js'
import { Ve2GranularShell } from './Ve2GranularShell'
import { Ve2Shell } from './Ve2Shell'

function useGranularStyleLoaderEnabled(): boolean {
	const location = useLocation()
	const params = new URLSearchParams(location.search)
	const mode = params.get('style-loader') ?? params.get('styleLoader')
	return mode === 'granular'
}

export function Ve2ShellRuntime(props: { children: JSX.Element }) {
	const c = children(() => props.children)
	return useGranularStyleLoaderEnabled() ? (
		<Ve2GranularShell>{c()}</Ve2GranularShell>
	) : (
		<Ve2Shell>{c()}</Ve2Shell>
	)
}
