export type BootstrapWithDefaults<T> = T & {
	extendDefaultConfig: (config: Record<string, string>) => T
	destroy: () => void
	init: () => void
}