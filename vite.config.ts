import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
	mode: 'development',
	plugins: [solidPlugin()],
	build: {
		target: 'esnext',
		modulePreload: {
			polyfill: false,
		},
	},
	optimizeDeps: {
		noDiscovery: true,
		include: [],
	},
	experimental: {
		// Set to false to disable the new Rolldown native resolver
		enableNativePlugin: false,
	},
})
