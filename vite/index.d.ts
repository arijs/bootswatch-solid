import type { Plugin } from 'vite'

export interface BootswatchPurgeOptions {
	/** Desliga o purge (serve o CSS completo de cada tema). */
	disabled?: boolean
}

/** Plugin Vite: enxuga cada chunk de tema para as classes de contract usadas. */
export declare function bootswatchPurge(options?: BootswatchPurgeOptions): Plugin
export default bootswatchPurge

/** Núcleo puro: purga um CSS de tema contra o conjunto de hashes usados. */
export declare function purgeThemeCss(css: string, used: Set<string>, allHashes: Set<string>): string
