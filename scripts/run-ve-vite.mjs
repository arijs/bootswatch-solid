import path from 'node:path'
import process from 'node:process'

import { build, createServer, preview } from 'vite'

const quiet = process.argv.includes('--quiet')
const cliArgs = process.argv.slice(2).filter((arg) => arg !== '--quiet' && arg !== '--')
const mode = cliArgs[0]
const projectDir = cliArgs[1] ?? 've-project'

const themeArg = cliArgs.find((arg) => arg.startsWith('--theme='))
if (themeArg) {
	process.env.VITE_LITERAL_THEMES = themeArg.slice('--theme='.length)
}
const root = path.resolve(process.cwd(), projectDir)
const configFile = path.resolve(root, 'vite.config.ts')
const defaultPort =
	mode === 'dev'
		? projectDir === 've-project2'
			? 5175
			: 5174
		: projectDir === 've-project2'
			? 4175
			: 4174

if (mode !== 'build' && mode !== 'preview' && mode !== 'dev') {
	throw new Error('Usage: node scripts/run-ve-vite.mjs <build|preview|dev> [project-dir]')
}

if (mode === 'build') {
	await build({
		root,
		configFile,
		logLevel: quiet ? 'error' : 'info',
		build: quiet ? { reportCompressedSize: false } : undefined,
	})
	process.exit(0)
}

if (mode === 'dev') {
	const devServer = await createServer({
		root,
		configFile,
		server: {
			host: '127.0.0.1',
			port: defaultPort,
			strictPort: true,
		},
	})

	await devServer.listen()
	devServer.printUrls()

	const httpServer = devServer.httpServer
	if (!httpServer) {
		throw new Error('Vite dev server failed to initialize')
	}

	const closeServer = async () => {
		await devServer.close()
	}

	process.on('SIGTERM', () => {
		void closeServer().finally(() => process.exit(0))
	})

	process.on('SIGINT', () => {
		void closeServer().finally(() => process.exit(0))
	})

	await new Promise((resolve, reject) => {
		httpServer.on('close', resolve)
		httpServer.on('error', reject)
	})

	process.exit(0)
}

const previewServer = await preview({
	root,
	configFile,
	preview: {
		host: '127.0.0.1',
		port: defaultPort,
		strictPort: true,
	},
})

const httpServer = previewServer.httpServer
if (!httpServer) {
	throw new Error('Vite preview server failed to initialize')
}

previewServer.printUrls()
previewServer.bindCLIShortcuts({ print: true })

const closeServer = async () => {
	await previewServer.close()
}

process.on('SIGTERM', () => {
	void closeServer().finally(() => process.exit(0))
})

process.on('SIGINT', () => {
	void closeServer().finally(() => process.exit(0))
})

await new Promise((resolve, reject) => {
	httpServer.on('close', resolve)
	httpServer.on('error', reject)
})
