import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import Unocss from '@unocss/vite'
import { presetBootswatch } from '../../preset/preset-bootswatch.mjs'

// Demo INTEGRADA: Solid + UnoCSS (nosso preset, prefixo bsu-) + o CSS
// pré-compilado do pacote (dist-pkg). Prova que utilities (JIT via u()) e
// componentes (contracts hasheados) compõem sobre o mesmo scope de tema.
export default defineConfig({
	plugins: [
		solid(),
		Unocss({ presets: [presetBootswatch({ prefix: 'bsu-' })] }),
	],
	build: { target: 'esnext', minify: false, cssMinify: false },
})
