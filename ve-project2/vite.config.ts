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
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const sourceFile = assetInfo.originalFileNames[0]
					const match = sourceFile?.match(/src\/themes\/([^/]+)\/theme\.ts$/)
					if (match) return `assets/theme-${match[1]}-[hash][extname]`
					return 'assets/[name]-[hash][extname]'
				},
				chunkFileNames: (chunk) => {
					if (chunk.facadeModuleId) {
						const match = chunk.facadeModuleId.match(/\/themes\/([^/]+)\/theme\.ts$/)
						if (match) return `assets/theme-${match[1]}-[hash].js`
					}
					return 'assets/[name]-[hash].js'
				},
			},
		},
	},
})
