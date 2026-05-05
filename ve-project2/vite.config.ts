import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
	mode: 'development',
	plugins: [solidPlugin(), vanillaExtractPlugin()],
	build: {
		target: 'esnext',
		sourcemap: true,
		modulePreload: {
			polyfill: false,
		},
	},
})
